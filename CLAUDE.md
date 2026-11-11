# CLAUDE.md

Guidance for Claude Code working in this repo. Detailed reference lives in `.claude/rules/`.

## What this is

Chris Taylor's personal website at **ctaylor.dev**. Astro 6, static output, Tailwind v4, MDX content
collections, deployed to Vercel from `main`. The old Next.js site is gone.

`TASKS.md` is the source of truth for what is decided, in progress and next. Update it as work
happens.

## Decisions already made (don't re-litigate)

- **Astro, not Next.js.** Zero JS by default, type-safe content collections, simple model.
- **Site is the hub, CV is minimal.** Intro, projects and links out to LinkedIn. Do not replicate the
  full work history; LinkedIn is the source of truth.
- **Sections:** About/intro (with a short setup/tooling note), Projects, Writing, Links/contact.
- **Domain:** `ctaylor.dev` (the `site` value in `astro.config.ts`). `.dev` is HTTPS-only; Vercel
  issues certificates.
- **Deploy:** Vercel, static, no adapter. Add `@astrojs/vercel` only if SSR is ever needed.

## Dev Rules

- **Run `pnpm verify` before opening a PR.** It runs eslint on changed files, `astro check` (types and
  content schemas) and a production build.
- **Package manager is pnpm.** Never reintroduce yarn or the airbnb ESLint config.
- **TypeScript strict. Never use `any`.** All config files are TypeScript (`astro.config.ts`,
  `eslint.config.ts`, `prettier.config.ts`).
- **Lean by default.** No client JS unless a component needs interactivity; then use an island. No
  React Context, styled-jsx or client state for content that can be static.
- **No inline comments** in code you write. Rationale goes in the PR description. Don't remove
  existing comments unless asked.
- **Content lives in collections**, not JSX. See `.claude/rules/content-model.md`.
- **Chris approves all copy before it ships.** Draft new or changed site copy (intro, career, projects,
  posts, gallery captions) in chat first, one section at a time. Commit and push only after he approves
  that section. Code, dependency and tooling changes are not covered by this rule.
- **Check the result in a real browser** at desktop and mobile widths, light and dark, before calling a
  UI change done.

### Commits

Single line only: `type(scope): brief description`. Imperative mood, under 72 characters, no body
text. Types: feat, fix, docs, style, refactor, perf, test, chore, ci. End with the Co-Authored-By
line.

### Shipping: push straight to `main`, no PRs

- Work in a worktree off latest `origin/main`. When done: `git fetch`, `git rebase origin/main`,
  `pnpm verify`, then `git push origin HEAD:main`. Each push is one Vercel production deploy.
- A rejected push means `main` moved: rebase, re-run `pnpm verify`, push again. Never force-push `main`.
- One logical change per commit, so one `git revert` undoes it.
- After the push, confirm the Vercel deploy is green and the live page on https://ctaylor.dev shows the
  change. A failed Vercel build leaves the last good deploy live; fix forward with a new commit.
- CI runs on every push to `main` as a backstop. A red run on `main` is fixed before anything else ships.
- Open a PR only when Chris asks to see a change before it goes live; it gets a Vercel preview.

## Commands

| Command        | Purpose                                  |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Dev server at http://localhost:4321      |
| `pnpm build`   | Production build to `dist/`              |
| `pnpm preview` | Serve the production build               |
| `pnpm check`   | `astro check`: types and content schemas |
| `pnpm lint`    | ESLint                                   |
| `pnpm format`  | Prettier                                 |
| `pnpm verify`  | Lint changed files, check, build         |

## Reference Docs

| Topic                                                | File                             |
| ---------------------------------------------------- | -------------------------------- |
| Content collections: schemas and how to add an entry | `.claude/rules/content-model.md` |
| Design, accessibility, performance budget            | `.claude/rules/site-design.md`   |

## Tooling

- **Context7 and Jina MCP servers** are configured in `.mcp.json`. Use Context7 for current Astro,
  Tailwind and MDX docs instead of relying on memory.
- **Skills:** `/dev-loop` (how a build session runs), `/whats-next` (next work from `TASKS.md`),
  `/commit-msg`.

## What NOT to Do

- Don't add a full CV or work history to the site.
- Don't ship Lorem Ipsum to production: draft entries stay `draft: true`.
- Don't add client-side JS for something that can render at build time.
- Don't create new doc files without checking whether one exists to update.
