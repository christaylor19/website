# Website — Tasks

A full rebuild of chris.dev from scratch. The current site is a 2-year-old Next.js 12 Pages Router
personal site with a single half-built page. Goal: modern, lean, LLM-friendly, easy to maintain.

---

## Decisions (made 2026-06-18)

- **Tech stack: Astro** _(decided, not yet started)_ — moving off Next.js entirely rather than
  migrating. The site is content (text + projects + blog + a setup/uses section) with almost no
  interactivity, which is exactly Astro's sweet spot. Benefits over Next.js for this use case:
  - **Zero JS by default** — renders to plain HTML at build, ships ~0KB JS vs Next's React runtime.
  - **Content collections** — type-safe, schema-validated MDX/data for projects + blog. Best feature
    for the "LLM-editable, easy to maintain" goal.
  - **Simpler mental model** — `.astro` files are HTML + a script section; no server/client component
    split, hydration, caching layers, or styled-jsx.
  - **React still available** — drop in a React/Solid island if interactivity is ever needed.
  - Cost: it's a clean rewrite (different file format), not a migration. The current site is so
    minimal there's almost nothing to migrate anyway.
- **CV / LinkedIn: site is the hub (minimal)** — site has intro + projects + links out; do NOT
  replicate full work history. Link to LinkedIn as the source of truth for detailed CV. Avoids
  keeping three sources in sync.
- **Content sections** — About/intro (incl. a note on setup/tooling), Projects, Writing/blog,
  Links/contact. A dedicated "uses"/setup page is optional — fold into intro initially.
- **Interests section** _(decided 2026-11-11)_ — a gallery on the homepage, not a subpage. Holds
  creative and personal work, starting with the transport and map visualisations. Not under Projects
  or Career. Almanac is a separate project and stays out of it.
- **Domain: `ctaylor.dev`** _(purchased; served by Vercel, the apex redirects to `www`)_ — set as `site` in `astro.config.mjs`. Note CLAUDE.md
  still refers to the site as "chris.dev"; reconcile once the domain is confirmed. `.dev` is
  HSTS-preloaded so HTTPS is mandatory — Vercel issues certs automatically on domain connect.
- **Deploy: Vercel** _(confirmed)_ — static output, no adapter (Vercel auto-detects Astro). Add
  `@astrojs/vercel` only if SSR/ISR is ever needed.

---

## In Progress

### 1. Scaffold Astro project

- [x] **Bootstrap Astro** — **Astro 6.4.8** (latest stable; bumped from the initial 5.18 scaffold).
      Scaffolded manually alongside legacy files until task 3 deletes them. TypeScript strict via
      `astro/tsconfigs/strict`, pnpm 10, Node 22+ (`engines` + `.nvmrc`), Tailwind **v4** via the
      `@tailwindcss/vite` plugin (not the old `@astrojs/tailwind` integration — that was v3), MDX via
      `@astrojs/mdx` v6. **Config is `astro.config.ts`** (TypeScript, per the all-TS requirement).
      `pnpm build` passes clean. Static output (no adapter — Vercel auto-detects).
- [x] **Set up content collections** — schemas live in **`src/content.config.ts`** (Astro 5+ moved it
      from `src/content/config.ts`; uses the `glob` loader). `projects` + `blog` defined with Zod;
      seeded one entry each so schemas are exercised at build.
- [x] **Load fonts via `@fontsource`** — `@fontsource/rubik` (400/500/700) imported in
      `src/styles/global.css`. No raw TTFs. (Astro 6's built-in `astro:fonts` API is now stable and
      could replace this later — see backlog note.)
- [x] **Dark mode** — inline pre-paint theme script in `BaseLayout.astro` sets `.dark` on `<html>`
      from `localStorage` / `prefers-color-scheme`. No React Context. Toggle UI still TODO.
- [x] **Git hooks: Lefthook** _(replaces husky + lint-staged)_ — single Go binary, parallel hooks,
      built-in staged-files globbing so lint-staged isn't needed. `lefthook.yml` runs Prettier
      (`--write`, stages fixes) + ESLint on staged files. Installed via `prepare` script. Hook
      verified installed + `lefthook validate` passes.
- [x] **ESLint + Prettier** _(all TS config)_ — `eslint.config.ts` flat config:
      `@eslint/js` + `typescript-eslint` + `eslint-plugin-astro` `flat/recommended`. Dropped airbnb.
      `prettier.config.ts` with `prettier-plugin-astro` + `prettier-plugin-tailwindcss`. Both run
      clean on `src/`. **a11y caveat below.**
- [ ] **Vercel deploy** — connect Git for auto-deploy. Static output, no adapter needed unless
      SSR/ISR is later required. _(Only remaining task-1 item.)_

**Notes / deviations from original plan:**

- **Stack stayed Astro** (re-confirmed 2026-06-18 vs Next.js) — bumped 5 → **6** since a fresh
  scaffold should be on current stable. Astro 6 = stable Fonts API, built-in CSP, Node 22+, Zod 4.
- **Linting research outcome:** oxlint & Biome can't lint/format `.astro` (only `<script>` blocks)
  as of 2026 — `eslint-plugin-astro` + Prettier is still the only mature path. Re-evaluate in 6–12mo.
- **Lefthook over husky+lint-staged** — research showed it's the modern, faster, single-tool choice.
- **All config is TypeScript:** `astro.config.ts`, `eslint.config.ts`, `prettier.config.ts`.
- **a11y rules omitted:** `eslint-plugin-astro@1.7.0`'s `flat/jsx-a11y-recommended` ships the bundled
  `jsx-a11y` plugin in legacy array shape, which **ESLint 10** rejects. Either pin ESLint 9 to keep
  a11y, or wait for an ESLint-10-compatible release. Documented in `eslint.config.ts`. **DECISION
  NEEDED** (see below) — currently on ESLint 10 without a11y.
- Tailwind v4 uses the Vite plugin + `@import "tailwindcss"`, not `@astrojs/tailwind` (v3-era).
- Content config path is `src/content.config.ts` (v5+), not `src/content/config.ts` (v2–v4).
- Deleted legacy `postcss.config.js` + `tailwind.config.js` (CommonJS crashed under `"type":
"module"`) and `.prettierrc` (legacy config was shadowing `prettier.config.ts`, breaking `.astro`
  formatting). Rest of task-3 cruft still present (`.babelrc`, `.eslintrc.js`, `pages/`, etc.).
- `astro check` reports errors **only in legacy Next.js files** (deleted in task 3); 0 in `src/`.

**Backlog ideas surfaced by tooling research (deferred, lean choices):**

- _Worth it soon:_ `@astrojs/sitemap`, `@astrojs/rss` (blog feed), `astro-expressive-code` (code
  blocks), hand-rolled `BaseHead.astro` for OG/canonical (skip `astro-seo`), Astro 6 `astro:fonts`.
- _Skip for now (small site):_ Pagefind search (until blog grows), View Transitions (adds JS),
  `@astrojs/vercel` SSR adapter (static is fine).

### 2. Content

- [ ] **About / intro** — short 1–2 sentence intro. Include a brief note on setup/tooling (editor,
      terminal, daily-driver stack). No wall of text.
- [ ] **Projects** — real, current projects with links + descriptions + tech stack. Replace the stale
      "Prem Visualiser". Candidates from local repos: `hn-monthly-top`, `sport-project`,
      `homebrew-sport-tui`, `spotify-playlister`, `wiki-scraper`, `figma-exports`, this site. Audit
      which are public/worth showing.
- [ ] **Writing / blog** — MDX posts in a `blog` content collection. Seed with 1 post so the section
      isn't empty (e.g. "rebuilding my site in Astro").
- [x] **Interests section** — DONE (2026-11-11). Map gallery on the homepage: NYC Neighbourhood Map,
      Amtrak Network Atlas, HS2 Phase One Structures, each a static image linking to the live
      artifact with a caption and data credit. The `/interests` subpage was removed. Swap in a new
      Amtrak thumbnail once its label overlaps are fixed.
- [ ] **Links / contact** — GitHub, LinkedIn (as the CV link), email. Update from `data/links.tsx`:
      verify the Twitter/X handle and email are current.
- [ ] **Project data model** — projects as content-collection entries (MDX) or a typed data file.
      Lean toward content collection for consistency with blog.
- [ ] **GitHub commit grid → real widget** — `CommitGrid.astro` currently renders a static SVG from
      DETERMINISTIC PLACEHOLDER data. Make it a real widget driven by actual GitHub contributions.
      Options: (a) GitHub GraphQL `contributionsCollection` at build time (needs a `GITHUB_TOKEN` env
      var — add it to the now-clean Vercel project), or (b) an unofficial contributions API fetched at
      build. Keep it static-rendered (zero client JS) — fetch at build, not in the browser.

### 3. Remove Cruft (old Next.js site) — DONE (2026-06-18)

All legacy Next.js files deleted wholesale in one sweep:

- [x] **Boilerplate README** — replaced with a real Astro project README.
- [x] **`pages/`, `components/`, `context/`, `utils/`, `styles/`, `types/`, `data/`** — all deleted
      (incl. `ProgressBar`, the dark-mode Context, styled-jsx globals, `gtag.tsx`). The one useful bit
      (`data/links.tsx` GitHub/LinkedIn/email) was already lifted into the new footer.
- [x] **`.babelrc`, `.eslintrc.js`, `next-env.d.ts`** — deleted.
- [x] **`tailwind.config.js` (v3), `postcss.config.js`, `.prettierrc`, `yarn.lock`** — deleted earlier.
- [x] **Unused fonts** — `public/fonts/` (Archivo, Cairo, Karla, Varela, CascadiaCode, Rubik TTFs) all
      deleted; fonts now come from `@fontsource/rubik`.
- [x] **Stray `typescript-svgrepo-com.svg`** in root — orphaned, deleted.
- [x] **Jest/testing deps** — never were in the new `package.json`.
- [x] **Stale Vercel env vars** — removed 3 `PRISMIC_*` vars (2021 CMS leftovers, expired token) from
      the Vercel project.

### 3b. Vercel — DONE / IN PROGRESS (2026-06-18)

- [x] **Linked repo to Vercel** — `chris-taylors-projects-c1cc6447/website` (the existing project).
- [x] **Fixed framework preset** — project was still set to **Next.js** from 2021. Added `vercel.json`
      with `"framework": "astro"` (committed config overrides the stale dashboard preset).
- [ ] **Verify a real deploy** — confirm a push to `main` builds + serves correctly on Vercel.
- [x] **Point `ctaylor.dev` at the project** once the domain is purchased.

### 4. Documentation

- [x] **Write README.md** — done (2026-06-18). Real Astro README: stack, dev commands, structure,
      how to add content, deploy notes.
- [x] **Reconcile CLAUDE.md** — rewritten for Astro 6, `ctaylor.dev` and the `career` collection, with
      `.claude/rules/`, `.mcp.json`, skills, `pnpm verify` and CI added (Almanac-style tooling).
      Changes now ship straight to `main` with no PR (2026-11-11).
- [ ] **Write README.md** — what the site is, how to run (`pnpm dev`), how to deploy.
- [ ] **Document the content model** — the frontmatter shape for `projects` and `blog` so entries are
      trivial to add.

---

## Done

_(nothing yet)_
