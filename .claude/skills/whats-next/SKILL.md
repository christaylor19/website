---
name: whats-next
description: Summarise what to work on next on the website, from TASKS.md, open PRs and recent commits
user-invocable: true
---

# What's Next

Give a short, prioritised view of the next work on the site.

## Workflow

1. Run in parallel:
   - `git fetch origin` then `git log --oneline -15 origin/main`
   - `gh pr list --state open`
   - Read `TASKS.md` from `origin/main` (`git show origin/main:TASKS.md`)
2. List the unchecked items under **In Progress** and **Backlog**, flagging any blocked on Chris (content, decisions, the domain).
3. Recommend the single next task and why, in two sentences.

## Rules

- Read from `origin/main`, not the local checkout.
- Keep the output to one table (task, state, blocker) plus the recommendation.
- Don't start the work; wait for Chris to pick.
