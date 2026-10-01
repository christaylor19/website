// Points of interest for the /nyc-map page, grouped by filter category.
// Coordinates are WGS84 [lat, lng]. `outsideNyc` marks venues just beyond the
// five boroughs (NJ / Nassau) that are still part of the city's everyday map.

export type PlaceCategory = 'sports' | 'sites' | 'transport';

export type TransportKind = 'airport' | 'rail' | 'subway' | 'bus' | 'ferry' | 'heliport';

export interface Place {
  name: string;
  category: PlaceCategory;
  latlng: [number, number];
  /** One line shown under the name, e.g. tenants or what's there. */
  detail: string;
  kind?: TransportKind;
  outsideNyc?: boolean;
}

export const categories: Record<PlaceCategory, { label: string; colour: string }> = {
  sports: { label: 'Sports arenas', colour: '#c2410c' },
  sites: { label: 'Major sites', colour: '#a16207' },
  transport: { label: 'Transport hubs', colour: '#1d4ed8' },
};

export const places: Place[] = [
  // Sports arenas
  {
    category: 'sports',
    name: 'Yankee Stadium',
    latlng: [40.8296, -73.9262],
    detail: 'Yankees (MLB) · NYCFC (MLS)',
  },
  { category: 'sports', name: 'Citi Field', latlng: [40.7571, -73.8458], detail: 'Mets (MLB)' },
  {
    category: 'sports',
    name: 'Madison Square Garden',
    latlng: [40.7505, -73.9934],
    detail: 'Knicks (NBA) · Rangers (NHL)',
  },
  {
    category: 'sports',
    name: 'Barclays Center',
    latlng: [40.6826, -73.9754],
    detail: 'Nets (NBA) · Liberty (WNBA)',
  },
  {
    category: 'sports',
    name: 'USTA Billie Jean King National Tennis Center',
    latlng: [40.7498, -73.8467],
    detail: 'US Open · Arthur Ashe Stadium',
  },
  {
    category: 'sports',
    name: 'Etihad Park',
    latlng: [40.7588, -73.8424],
    detail: 'NYCFC (MLS) · under construction, opening 2027',
  },
  {
    category: 'sports',
    name: 'Maimonides Park',
    latlng: [40.5745, -73.9846],
    detail: 'Brooklyn Cyclones (Minor League Baseball)',
  },
  {
    category: 'sports',
    name: 'SIUH Community Park',
    latlng: [40.6455, -74.0767],
    detail: 'Staten Island FerryHawks',
  },
  {
    category: 'sports',
    name: 'Icahn Stadium',
    latlng: [40.7953, -73.9234],
    detail: 'Track & field · Randalls Island',
  },
  {
    category: 'sports',
    name: 'Aqueduct Racetrack',
    latlng: [40.6722, -73.8306],
    detail: 'Thoroughbred racing',
  },
  {
    category: 'sports',
    name: 'MetLife Stadium',
    latlng: [40.8135, -74.0745],
    detail: 'Giants · Jets (NFL) · East Rutherford, NJ',
    outsideNyc: true,
  },
  {
    category: 'sports',
    name: 'UBS Arena',
    latlng: [40.7117, -73.7262],
    detail: 'Islanders (NHL) · Elmont, NY',
    outsideNyc: true,
  },
  {
    category: 'sports',
    name: 'Red Bull Arena',
    latlng: [40.7368, -74.1503],
    detail: 'New York Red Bulls (MLS) · Harrison, NJ',
    outsideNyc: true,
  },
  {
    category: 'sports',
    name: 'Prudential Center',
    latlng: [40.7334, -74.1711],
    detail: 'Devils (NHL) · Newark, NJ',
    outsideNyc: true,
  },

  // Major sites
  {
    category: 'sites',
    name: 'Statue of Liberty',
    latlng: [40.6892, -74.0445],
    detail: 'Liberty Island',
  },
  {
    category: 'sites',
    name: 'Ellis Island',
    latlng: [40.6995, -74.0393],
    detail: 'National Museum of Immigration',
  },
  {
    category: 'sites',
    name: 'One World Trade Center & 9/11 Memorial',
    latlng: [40.7121, -74.0134],
    detail: 'Lower Manhattan',
  },
  {
    category: 'sites',
    name: 'Wall Street & NYSE',
    latlng: [40.7069, -74.0113],
    detail: 'Financial District',
  },
  {
    category: 'sites',
    name: 'Brooklyn Bridge',
    latlng: [40.7061, -73.9969],
    detail: 'Opened 1883',
  },
  {
    category: 'sites',
    name: 'Brooklyn Bridge Park',
    latlng: [40.7003, -73.9967],
    detail: 'DUMBO waterfront',
  },
  {
    category: 'sites',
    name: 'Washington Square Park',
    latlng: [40.7308, -73.9973],
    detail: 'Greenwich Village',
  },
  { category: 'sites', name: 'Little Island', latlng: [40.742, -74.0103], detail: 'Pier 55 park' },
  {
    category: 'sites',
    name: 'The High Line',
    latlng: [40.748, -74.0048],
    detail: 'Elevated park, Gansevoort St to 34th St',
  },
  {
    category: 'sites',
    name: 'Flatiron Building',
    latlng: [40.7411, -73.9897],
    detail: 'Flatiron District',
  },
  {
    category: 'sites',
    name: 'Empire State Building',
    latlng: [40.7484, -73.9857],
    detail: 'Midtown',
  },
  {
    category: 'sites',
    name: 'Hudson Yards & The Vessel',
    latlng: [40.7538, -74.0022],
    detail: 'Hudson Yards',
  },
  {
    category: 'sites',
    name: 'Chrysler Building',
    latlng: [40.7516, -73.9755],
    detail: 'Midtown East',
  },
  {
    category: 'sites',
    name: 'United Nations Headquarters',
    latlng: [40.7489, -73.968],
    detail: 'Turtle Bay',
  },
  {
    category: 'sites',
    name: 'Times Square',
    latlng: [40.758, -73.9855],
    detail: 'Theater District',
  },
  {
    category: 'sites',
    name: 'Rockefeller Center',
    latlng: [40.7587, -73.9787],
    detail: 'Top of the Rock',
  },
  { category: 'sites', name: 'MoMA', latlng: [40.7614, -73.9776], detail: 'Museum of Modern Art' },
  {
    category: 'sites',
    name: 'Lincoln Center',
    latlng: [40.7725, -73.9835],
    detail: 'Performing arts',
  },
  {
    category: 'sites',
    name: 'Central Park',
    latlng: [40.774, -73.9708],
    detail: 'Bethesda Terrace',
  },
  {
    category: 'sites',
    name: 'American Museum of Natural History',
    latlng: [40.7813, -73.974],
    detail: 'Upper West Side',
  },
  {
    category: 'sites',
    name: 'The Metropolitan Museum of Art',
    latlng: [40.7794, -73.9632],
    detail: 'Museum Mile',
  },
  {
    category: 'sites',
    name: 'Guggenheim Museum',
    latlng: [40.783, -73.959],
    detail: 'Museum Mile',
  },
  { category: 'sites', name: 'Apollo Theater', latlng: [40.81, -73.9501], detail: 'Harlem' },
  {
    category: 'sites',
    name: 'The Met Cloisters',
    latlng: [40.8649, -73.9318],
    detail: 'Fort Tryon Park',
  },
  { category: 'sites', name: 'Bronx Zoo', latlng: [40.8506, -73.8769], detail: 'Bronx Park' },
  {
    category: 'sites',
    name: 'New York Botanical Garden',
    latlng: [40.8623, -73.877],
    detail: 'Bronx Park',
  },
  {
    category: 'sites',
    name: 'Unisphere',
    latlng: [40.7461, -73.8448],
    detail: 'Flushing Meadows–Corona Park',
  },
  {
    category: 'sites',
    name: 'Brooklyn Museum',
    latlng: [40.6712, -73.9636],
    detail: 'Prospect Heights',
  },
  { category: 'sites', name: 'Prospect Park', latlng: [40.6602, -73.969], detail: 'Brooklyn' },
  {
    category: 'sites',
    name: 'Coney Island',
    latlng: [40.5744, -73.979],
    detail: 'Luna Park · Wonder Wheel · Boardwalk',
  },
  {
    category: 'sites',
    name: 'Snug Harbor',
    latlng: [40.6437, -74.1027],
    detail: 'Cultural center & botanical garden',
  },

  // Transport hubs
  {
    category: 'transport',
    kind: 'airport',
    name: 'JFK International Airport',
    latlng: [40.6413, -73.7781],
    detail: 'AirTrain to Jamaica & Howard Beach',
  },
  {
    category: 'transport',
    kind: 'airport',
    name: 'LaGuardia Airport',
    latlng: [40.7769, -73.874],
    detail: 'Q70 LaGuardia Link to Jackson Heights',
  },
  {
    category: 'transport',
    kind: 'airport',
    name: 'Newark Liberty International Airport',
    latlng: [40.6895, -74.1745],
    detail: 'AirTrain to Newark Airport station · NJ',
    outsideNyc: true,
  },
  {
    category: 'transport',
    kind: 'rail',
    name: 'Grand Central Terminal',
    latlng: [40.7527, -73.9772],
    detail: 'Metro-North · LIRR (Grand Central Madison) · Subway',
  },
  {
    category: 'transport',
    kind: 'rail',
    name: 'Penn Station & Moynihan Train Hall',
    latlng: [40.7506, -73.9935],
    detail: 'Amtrak · LIRR · NJ Transit · Subway',
  },
  {
    category: 'transport',
    kind: 'rail',
    name: 'Jamaica Station',
    latlng: [40.6996, -73.8083],
    detail: 'LIRR hub · AirTrain JFK · Subway',
  },
  {
    category: 'transport',
    kind: 'rail',
    name: 'Atlantic Terminal',
    latlng: [40.6843, -73.9777],
    detail: 'LIRR · Atlantic Av–Barclays Ctr subway',
  },
  {
    category: 'transport',
    kind: 'rail',
    name: 'Harlem–125 St',
    latlng: [40.8053, -73.939],
    detail: 'Metro-North',
  },
  {
    category: 'transport',
    kind: 'rail',
    name: 'World Trade Center (Oculus)',
    latlng: [40.7115, -74.0112],
    detail: 'PATH · Subway',
  },
  {
    category: 'transport',
    kind: 'rail',
    name: 'Hoboken Terminal',
    latlng: [40.735, -74.0275],
    detail: 'PATH · NJ Transit · ferries · NJ',
    outsideNyc: true,
  },
  {
    category: 'transport',
    kind: 'subway',
    name: 'Times Sq–42 St',
    latlng: [40.7553, -73.9871],
    detail: 'Busiest subway complex: 1 2 3 7 N Q R W S A C E',
  },
  {
    category: 'transport',
    kind: 'subway',
    name: 'Fulton Center',
    latlng: [40.7102, -74.009],
    detail: 'Subway: 2 3 4 5 A C J Z',
  },
  {
    category: 'transport',
    kind: 'subway',
    name: '14 St–Union Sq',
    latlng: [40.7353, -73.9906],
    detail: 'Subway: 4 5 6 L N Q R W',
  },
  {
    category: 'transport',
    kind: 'subway',
    name: 'Jackson Hts–Roosevelt Av',
    latlng: [40.7466, -73.8913],
    detail: 'Subway: 7 E F M R',
  },
  {
    category: 'transport',
    kind: 'bus',
    name: 'Port Authority Bus Terminal',
    latlng: [40.757, -73.991],
    detail: 'Commuter & intercity buses',
  },
  {
    category: 'transport',
    kind: 'bus',
    name: 'George Washington Bridge Bus Station',
    latlng: [40.849, -73.9395],
    detail: 'Commuter buses · Subway',
  },
  {
    category: 'transport',
    kind: 'ferry',
    name: 'Whitehall Terminal',
    latlng: [40.7013, -74.0131],
    detail: 'Staten Island Ferry',
  },
  {
    category: 'transport',
    kind: 'ferry',
    name: 'St. George Terminal',
    latlng: [40.6437, -74.0735],
    detail: 'Staten Island Ferry · Staten Island Railway',
  },
  {
    category: 'transport',
    kind: 'ferry',
    name: 'Pier 11 / Wall St',
    latlng: [40.7031, -74.006],
    detail: 'NYC Ferry hub',
  },
  {
    category: 'transport',
    kind: 'heliport',
    name: 'Downtown Manhattan Heliport',
    latlng: [40.701, -74.0091],
    detail: 'Pier 6',
  },
];
