## Content Model

Content is MDX in collections under `src/content/`. Schemas live in `src/content.config.ts` (Zod). A malformed entry fails `pnpm check` and `pnpm build`, so run `pnpm verify` after editing.

### Collections

| Collection  | Folder                   | Required frontmatter                                     | Optional (default)                                                |
| ----------- | ------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------- |
| `projects`  | `src/content/projects/`  | `title`, `description`                                   | `url`, `repo`, `order` (999), `featured` (false), `draft` (false) |
| `career`    | `src/content/career/`    | `org`, `role`, `from`, `to` (`number` or `'now'`)        | `location`, `url`, `order` (999), `break` (false)                 |
| `blog`      | `src/content/blog/`      | `title`, `description`, `pubDate`                        | `updatedDate`, `tags` (`[]`), `draft` (false)                     |
| `interests` | `src/content/interests/` | `title`, `caption`, `credit`, `url`, `image`, `imageAlt` | `order` (999), `draft` (false)                                    |

### Adding an entry

- **A project:** add `src/content/projects/<slug>.mdx`. The slug is the filename and becomes `/projects/<slug>`. `url` and `repo` must be full `https://` URLs. Lower `order` sorts first.
- **A career role:** add `src/content/career/<slug>.mdx`. Keep it short; LinkedIn holds the full history.
- **A career break:** a career entry with `break: true` and no body. It shows as a muted row on the homepage with no link and gets no detail page.
- **An interest:** add `src/content/interests/<slug>.mdx` plus its image (`./<slug>.png`, 1200x750) in the same folder. `url` is the live piece, `credit` names the data sources. They render in the Interests section of the homepage.
- **A blog post:** add `src/content/blog/<slug>.mdx` with `pubDate` as `YYYY-MM-DD`.

### Rules

- Pages read collections with `getCollection()` and filter out `draft: true`. Never hardcode project or post data in a `.astro` file.
- Placeholder text stays `draft: true` until replaced with real copy.
- Real projects come from `~/Documents/repos/projects/`. Confirm a repo is public before linking it.
- Changing a schema: update `src/content.config.ts`, every existing entry that breaks, and this file in the same PR.
