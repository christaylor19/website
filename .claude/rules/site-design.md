## Site Design, Accessibility and Performance

The site is a lean, data-dense, content-first "rider profile": identity panel, career, projects, contributions. Reference sites: ProCyclingStats, DataGolf, Our World in Data.

### Performance

- Static output; zero client JS unless a component needs it. Use an Astro island for the exception and name why in the PR.
- Data that changes (for example GitHub contributions) is fetched at build time, never in the browser.
- Fonts come from `@fontsource/rubik`. No raw font files, no external font requests.
- Images go through Astro's `<Image />` with explicit width and height.

### Accessibility

- Every interactive element is reachable and operable by keyboard, with a visible focus state.
- Text and UI meet WCAG AA contrast in both light and dark themes.
- Respect `prefers-reduced-motion`; no animation that runs unconditionally.
- Use semantic landmarks (`header`, `main`, `nav`, `footer`) and one `h1` per page.
- `eslint-plugin-astro` a11y rules are off while ESLint 10 is incompatible (see `eslint.config.ts`). Compensate by checking pages in the browser.

### Theming

- Theme is set before first paint by the inline script in `src/layouts/BaseLayout.astro` (`.dark` on `<html>`, from `localStorage` then `prefers-color-scheme`).
- Use Tailwind `dark:` variants and site tokens in `src/styles/global.css`; no hardcoded colours in components.

### Checking a UI change

Open the page in a real browser at desktop (1440) and mobile (390) widths, light and dark, and look for overflow, clipped text and low contrast. `pnpm build && pnpm preview` for the production output.
