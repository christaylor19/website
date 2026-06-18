import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for sitemap, canonical URLs, and RSS.
  // Domain being purchased: ctaylor.dev (CLAUDE.md still says chris.dev — update once confirmed).
  site: 'https://ctaylor.dev',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
