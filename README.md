# chris.dev — personal website

Chris Taylor's personal site: a lean, data-dense, content-first build. A "rider-profile"
style homepage (identity panel → career → projects → contributions) where each project and
role links through to its own page. Inspired by data-heavy sites like ProCyclingStats,
DataGolf, and Our World in Data.

Built with **Astro 6** — zero JS shipped by default, type-safe content collections so projects
and posts are editable as validated MDX rather than hardcoded markup.

## Stack

- **[Astro 6](https://astro.build)** — static output, near-zero client JS
- **TypeScript** (strict) — including all config files (`astro.config.ts`, `eslint.config.ts`, `prettier.config.ts`)
- **Tailwind CSS v4** — via the `@tailwindcss/vite` plugin
- **MDX** content collections (`projects`, `career`, `blog`)
- **Rubik** via `@fontsource`
- **pnpm** · **Lefthook** (git hooks) · **ESLint** + **Prettier**
- Deployed to **Vercel** (static)

## Develop

Requires Node 22+ (see `.nvmrc`) and pnpm.

```sh
pnpm install     # install deps + set up git hooks
pnpm dev         # dev server at http://localhost:4321
pnpm build       # production build to dist/
pnpm preview     # serve the production build locally
pnpm check       # astro check — types + content-schema validation
pnpm lint        # eslint
pnpm format      # prettier --write
```

## Project structure

```
src/
  content/
    projects/   # one MDX file per project
    career/     # one MDX file per role
    blog/       # one MDX file per post
  content.config.ts        # Zod schemas — the contract for all content
  pages/
    index.astro            # the dense homepage
    projects/[slug].astro  # per-project detail page
    career/[slug].astro    # per-role detail page
  layouts/                 # BaseLayout (head, theme script)
  components/              # CommitGrid, etc.
  styles/global.css        # design tokens (cartographic palette) + Tailwind
```

## Adding content

Content lives as MDX entries with frontmatter validated against the schemas in
`src/content.config.ts`. A malformed entry fails the build rather than rendering wrong.

- **A project** → add `src/content/projects/<slug>.mdx`. It appears on the homepage and gets
  its own page at `/projects/<slug>` automatically.
- **A role** → add `src/content/career/<slug>.mdx`.
- **A blog post** → add `src/content/blog/<slug>.mdx`.

See `CLAUDE.md` for the full content model and conventions.

## Deploy

Connected to Vercel via Git — pushes to `main` deploy to production, branches get preview URLs.
`vercel.json` pins the framework to Astro. Output is static; no adapter needed unless server
routes are added later.
