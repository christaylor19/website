import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for sitemap, canonical URLs, and RSS.
  // Domain being purchased: ctaylor.dev (CLAUDE.md still says chris.dev — update once confirmed).
  site: 'https://www.ctaylor.dev',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
