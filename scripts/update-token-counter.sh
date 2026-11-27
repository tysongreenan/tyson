#!/bin/zsh
# Daily token-counter update, run by a macOS LaunchAgent (see README).
# Works in its own clone of the repo so it never touches a working copy:
# sync to origin/main, recount from T3's usage cache, and push only when the total changed.
set -euo pipefail

REPO="${TOKEN_COUNTER_REPO:-$HOME/Library/Application Support/tyson-token-counter/repo}"
export PATH="/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin"

echo "--- $(date '+%Y-%m-%d %H:%M:%S')"
cd "$REPO"

# This clone exists only for this job, so resetting it is safe.
git fetch --quiet origin main
git checkout --quiet main
git reset --quiet --hard origin/main

before=$(node -p 'require("./content/token-usage.json").total')
node scripts/token-usage.mjs > /dev/null
after=$(node -p 'require("./content/token-usage.json").total')

if [[ "$before" == "$after" ]]; then
  git checkout --quiet -- content/token-usage.json
  echo "No new tokens ($after). Nothing to push."
  exit 0
fi

git add content/token-usage.json
git commit --quiet -m "Update token counter: $after tokens"
git push --quiet origin main
echo "Pushed: $before -> $after"
