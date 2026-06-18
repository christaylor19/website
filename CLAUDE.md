# CLAUDE.md

Guidance for Claude Code working in this repo.

## What this is

Chris Taylor's personal website (chris.dev). **A full rebuild is planned and not yet started** — the
code currently in the repo is the _old_ site and is on its way out.

- **Current code:** a 2-year-old Next.js 12 Pages Router site. One half-built `pages/index.tsx` with
  hardcoded Projects/Experience/Skills, a placeholder `ProgressBar` (`<progress value="70">`), a
  custom dark-mode React Context, styled-jsx globals, and a README that's still the original
  boilerplate template. Treat all of this as legacy to be deleted, not extended.
- **Target:** a fresh **Astro** site. See `TASKS.md` for the full plan and the reasoning behind every
  decision.

**Read `TASKS.md` first.** It's the source of truth for what's been decided, what's in progress, and
what's next. Update it as work happens (move items between Backlog → In Progress → Done).

## Decisions already made (don't re-litigate)

- **Stack is Astro**, not Next.js. Clean rewrite, not a migration. Chosen for zero-JS-by-default,
  type-safe content collections (the site should be easy for an LLM to edit), and a simpler model
  than App Router. Tailwind v4, MDX, pnpm, deploy to Vercel.
- **Site is the hub, CV is minimal.** Intro + projects + links out to LinkedIn. Do NOT replicate full
  work history on the site — LinkedIn is the source of truth for that.
- **Content sections:** About/intro (with a short note on setup/tooling), Projects, Writing/blog,
  Links/contact.

## Conventions

- **Package manager: pnpm.** Not yarn (the legacy `yarn.lock` will be removed).
- **TypeScript strict.** Type content-collection schemas in `src/content/config.ts`.
- **Content as collections.** Projects and blog posts live as MDX entries in content collections with
  validated frontmatter — not as hardcoded JSX. This is deliberate: it keeps content editable without
  touching component code.
- **Lean by default.** No JS shipped unless a component genuinely needs interactivity (use an Astro
  island then). This site is mostly static content.
- **Match the surrounding style** when editing — comment density, naming, idiom.

## Commands

> These apply to the _new_ Astro setup once scaffolded. The legacy Next.js scripts in `package.json`
> (`next dev -p 1234`, etc.) are being retired.

- `pnpm dev` — local dev server
- `pnpm build` — production build
- `pnpm preview` — preview the build locally

## When adding content

- **A project:** add an entry to the `projects` content collection (see `src/content/config.ts` for
  the schema). Real current projects to draw from live in `~/Documents/repos/projects/`
  (hn-monthly-top, sport-project, homebrew-sport-tui, spotify-playlister, wiki-scraper, etc.).
- **A blog post:** add an MDX file to the `blog` content collection.

## What NOT to do

- Don't extend or polish the legacy Next.js code — it's being deleted.
- Don't add a full CV / work history to the site (link to LinkedIn instead).
- Don't reach for React Context, styled-jsx, or client-side state for content that can be static.
- Don't reintroduce yarn or the airbnb ESLint config.
