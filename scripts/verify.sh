#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

git fetch origin main --quiet
base="$(git merge-base origin/main HEAD)"
changed="$(git diff --name-only --diff-filter=ACMRD "$base" HEAD; git diff --name-only --diff-filter=ACMRD HEAD; git ls-files --others --exclude-standard)"
changed="$(printf '%s\n' "$changed" | sed '/^$/d' | sort -u)"

if [ -z "$changed" ]; then
  echo "verify: no changes against origin/main"
  exit 0
fi

step() { printf '\n== %s\n' "$1"; }

step "Lint changed files"
lintable="$(printf '%s\n' "$changed" | grep -E '\.(ts|tsx|js|mjs|astro)$' | while read -r f; do [ -f "$f" ] && echo "$f"; done || true)"
if [ -n "$lintable" ]; then
  echo "$lintable" | tr '\n' '\0' | xargs -0 pnpm eslint --no-warn-ignored
else
  echo "nothing to lint"
fi

step "Format check on changed files"
formattable="$(printf '%s\n' "$changed" | grep -E '\.(ts|tsx|js|mjs|astro|md|mdx|json|css)$' | while read -r f; do [ -f "$f" ] && echo "$f"; done || true)"
if [ -n "$formattable" ]; then
  echo "$formattable" | tr '\n' '\0' | xargs -0 pnpm prettier --check
else
  echo "nothing to check"
fi

step "Type check and content schemas"
pnpm check

step "Production build"
pnpm build

printf '\nverify: ok\n'
