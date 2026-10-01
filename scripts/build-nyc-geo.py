"""Build the simplified GeoJSON used by /nyc-map.

Sources (both NYC Department of City Planning, NAD83 / NY Long Island ft, EPSG:2263):
  - Boroughs: nybb (water-clipped borough boundaries), via
    https://github.com/nycehs/NYC_geography (nybb_20a/nybb.shp)
  - Neighbourhoods: nynta2020 (2020 Neighborhood Tabulation Areas, 262 NTAs), via
    https://github.com/ssitari/NYC311SnowPothole (NTAs.gpkg)

Usage: python3 scripts/build-nyc-geo.py <nybb.shp> <NTAs.gpkg>
Requires: pip install shapely pyshp pyproj
"""

import json
import sqlite3
import struct
import sys
from pathlib import Path

import shapefile
from pyproj import Transformer
from shapely import wkb
from shapely.geometry import mapping, shape
from shapely.ops import transform, unary_union

OUT = Path(__file__).resolve().parent.parent / 'public' / 'data' / 'nyc'
TO_WGS84 = Transformer.from_crs('EPSG:2263', 'EPSG:4326', always_xy=True).transform
SQ_FT_PER_SQ_MI = 5280**2

# Simplification tolerances in feet (source units). Boroughs are shown at low
# zoom so can be coarser; neighbourhoods are shown up close.
BORO_TOLERANCE_FT = 25
NTA_TOLERANCE_FT = 15
# Drop slivers/islets below this area (sq ft) after simplification.
MIN_PART_SQ_FT = 20_000

# Shades per borough hue in the map's palette (see src/pages/nyc-map.astro).
PALETTE_SIZE = 4

# NTAType codes from the nynta2020 metadata.
NTA_TYPES = {
    '0': 'residential',
    '5': 'special',  # Rikers Island
    '6': 'special',  # Navy Yard, rail yards, forts, UN, etc.
    '7': 'cemetery',
    '8': 'airport',
    '9': 'park',
}


def gpkg_geometry(blob: bytes):
    """Strip the GeoPackage binary header and parse the WKB payload."""
    flags = blob[3]
    envelope_len = {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[(flags >> 1) & 0b111]
    return wkb.loads(blob[8 + envelope_len :])


def tidy(geom, tolerance):
    geom = geom.simplify(tolerance, preserve_topology=True).buffer(0)
    if geom.geom_type == 'MultiPolygon':
        geom = unary_union([p for p in geom.geoms if p.area >= MIN_PART_SQ_FT])
    return geom


def colour_graph(geoms, groups, palette_size):
    """DSatur graph colouring so no two touching neighbourhoods in the same
    group (borough) share a shade. Neighbours in different boroughs already
    differ by hue, so they don't constrain each other. Returns a shade per geom."""
    grown = [g.buffer(50) for g in geoms]  # 50 ft: features split only by a street still count as touching
    adj = [set() for _ in geoms]
    for i in range(len(geoms)):
        for j in range(i + 1, len(geoms)):
            if groups[i] == groups[j] and grown[i].intersects(geoms[j]):
                adj[i].add(j)
                adj[j].add(i)
    shades = [None] * len(geoms)
    for _ in geoms:
        # Next: the uncoloured node with the most distinctly-coloured neighbours.
        i = max(
            (k for k in range(len(geoms)) if shades[k] is None),
            key=lambda k: (len({shades[j] for j in adj[k]} - {None}), len(adj[k])),
        )
        used = {shades[j] for j in adj[i]}
        # Rotate the starting shade so the palette is used evenly, not just 0/1.
        shades[i] = next(c for c in ((i + k) % palette_size for k in range(palette_size)) if c not in used)
    return shades


def round_coords(obj, places=5):
    if isinstance(obj, (list, tuple)):
        if obj and isinstance(obj[0], float):
            return [round(c, places) for c in obj]
        return [round_coords(o, places) for o in obj]
    return obj


def feature(geom, props):
    g = mapping(transform(TO_WGS84, geom))
    return {
        'type': 'Feature',
        'properties': props,
        'geometry': {'type': g['type'], 'coordinates': round_coords(g['coordinates'])},
    }


def write(name, features):
    path = OUT / name
    path.write_text(json.dumps({'type': 'FeatureCollection', 'features': features}, separators=(',', ':')))
    print(f'{path.relative_to(OUT.parent.parent.parent)}: {len(features)} features, {path.stat().st_size / 1024:.0f} KB')


def main(nybb_path, gpkg_path):
    OUT.mkdir(parents=True, exist_ok=True)

    boros = []
    for rec in shapefile.Reader(nybb_path).shapeRecords():
        geom = shape(rec.shape.__geo_interface__)
        area = geom.area  # true area before simplification
        boros.append(
            feature(
                tidy(geom, BORO_TOLERANCE_FT),
                {
                    'code': int(rec.record['BoroCode']),
                    'name': rec.record['BoroName'],
                    'areaSqMi': round(area / SQ_FT_PER_SQ_MI, 1),
                },
            )
        )
    boros.sort(key=lambda f: f['properties']['code'])
    write('boroughs.geojson', boros)

    db = sqlite3.connect(gpkg_path)
    table = db.execute('select table_name from gpkg_geometry_columns').fetchone()[0]
    rows = db.execute(
        f'select geom, BoroCode, BoroName, NTA2020, NTAName, NTAType, CDTAName, Population from "{table}"'
    ).fetchall()
    geoms = [gpkg_geometry(r[0]) for r in rows]
    shades = colour_graph(geoms, [r[1] for r in rows], PALETTE_SIZE)
    ntas = []
    for geom, shade, (_, boro_code, boro, code, name, nta_type, cdta, pop) in zip(geoms, shades, rows):
        ntas.append(
            feature(
                tidy(geom, NTA_TOLERANCE_FT),
                {
                    'code': code,
                    'name': name,
                    'boroCode': int(boro_code),
                    'boro': boro,
                    'type': NTA_TYPES.get(str(nta_type), 'other'),
                    'district': cdta.split(' (')[0] if cdta else None,
                    'population': pop,
                    'areaSqMi': round(geom.area / SQ_FT_PER_SQ_MI, 2),
                    'shade': shade,
                },
            )
        )
    ntas.sort(key=lambda f: f['properties']['code'])
    write('neighbourhoods.geojson', ntas)


if __name__ == '__main__':
    main(*sys.argv[1:3])
