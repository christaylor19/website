import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

// Flat config (ESLint 10), authored in TypeScript — loaded via jiti.
// eslint-plugin-astro is the only mature linter for .astro files (frontmatter
// + template + Astro rules); oxlint/Biome only handle <script> blocks today.
//
// Note: astro.configs['flat/jsx-a11y-recommended'] is intentionally omitted.
// In eslint-plugin-astro 1.7.0 it bundles the jsx-a11y plugin in the legacy
// array-config shape, which ESLint 10's stricter validator rejects. Re-add it
// once the plugin ships an ESLint-10-compatible a11y config (or pin ESLint 9).
export default tseslint.config(
  { ignores: ['dist/', '.astro/', 'node_modules/', 'src/env.d.ts'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
);
