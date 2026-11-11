import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content collections — the source of truth for projects and blog posts.
// Entries are MDX files with frontmatter validated against these schemas at
// build time, so a malformed entry fails the build instead of rendering wrong.
// Adding content = adding a file here; no component changes needed.

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Outbound links: live site, repo, etc. Label is optional display text.
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      // Lower numbers sort first on the projects list. Unset = sorts last.
      order: z.number().default(999),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

const career = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/career' }),
  schema: z.object({
    org: z.string(),
    role: z.string(),
    // Year (or 'now' for current). Kept as string so 'now' is valid.
    from: z.coerce.number(),
    to: z.union([z.coerce.number(), z.literal('now')]),
    location: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().default(999),
    break: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const interests = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/interests' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      caption: z.string(),
      credit: z.string(),
      url: z.string().url(),
      image: image(),
      imageAlt: z.string(),
      order: z.number().default(999),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, career, blog, interests };
