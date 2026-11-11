---
name: dev-loop
description: The website working loop. Use it at the start of a build session to triage Chris's ideas, brief subagents, ship PRs and wrap up.
user-invocable: true
---

# Dev loop

Chris steers; Claude orchestrates small PRs that deploy to ctaylor.dev through Vercel.

## 1. Start

- `git fetch`. Read from `origin/main`, never the local checkout.
- Read `TASKS.md` for what is decided and what is next.
- Check the latest Vercel production deploy is green: `gh api repos/christaylor19/website/deployments --jq '.[0]'`.

## 2. Intake

| Kind                      | Action                                                            |
| ------------------------- | ----------------------------------------------------------------- |
| Small fix or copy change  | Do it now in a worktree                                           |
| Idea for later            | Add it to the `TASKS.md` Backlog with enough detail to build from |
| New page or big UI change | Artifact mockup first; build after approval                       |
| Display detail            | Decide and ship, report after                                     |
| Question                  | Answer only                                                       |

Keep a `Parked:` line for anything set aside.

## 3. Build

- Fresh worktree off `origin/main`, with its own `pnpm install`. Never `git stash`.
- No code comments.
- One logical change per commit.
- Run `pnpm verify`, then check the page in a real browser at desktop and mobile widths, light and dark.
- Ship straight to `main`, no PR: `git fetch && git rebase origin/main && pnpm verify && git push origin HEAD:main`. A rejected push means rebase, verify and push again. Never force-push `main`.
- After the push, check the Vercel production deploy is green and the live page on https://ctaylor.dev returns 200 and shows the change. A failed build leaves the last good deploy live; fix forward.
- Open a PR only when Chris asks to see a change before it goes live.

## 4. Agent briefs

Every brief includes: the `TASKS.md` item, a fresh worktree off `origin/main`, no code comments, no `git stash`, the verify and browser checks above, the push-to-`main` steps, and "if any action is denied, stop and report". Name any other running agents and the files they own. Use Sonnet for builds to a clear brief.

## 5. Pause

Push WIP, update `TASKS.md` (Backlog, In Progress, Done), remove finished worktrees and merged branches, and give a short "where we got to / what's next".
