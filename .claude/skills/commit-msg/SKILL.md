---
name: commit-msg
description: Generate a commit message for work done in this session, ready to copy to another terminal tab
user-invocable: true
---

# Commit Message

Summarise this session's work as a single-line commit command the user can copy.

## Format

`type(scope): brief description`

- **type:** feat, fix, docs, style, refactor, perf, test, chore, ci
- **scope:** the area touched (content, layout, tooling, deps, deploy, tasks)
- Imperative mood, under 72 characters, no body text

## Output

```
git add -A && git commit -m "type(scope): description"
```

If the changes are unrelated, suggest separate commits with specific `git add` paths.

## Rules

- Derive the message from the session context; don't run git commands or read files.
- Output the code block and nothing else unless clarification is needed.
