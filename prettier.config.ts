import type { Config } from 'prettier';

const config: Config = {
  singleQuote: true,
  semi: true,
  printWidth: 100,
  // prettier-plugin-tailwindcss MUST be last (it's a formatter-of-formatters
  // that sorts Tailwind classes after other plugins have run).
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};

export default config;
