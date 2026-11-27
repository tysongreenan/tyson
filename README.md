# tysongreenan.com

Personal site with an About page and a Projects page, modeled on the layout of shud.in.

## Editing content

- `content/site.ts` — name, GitHub username, site URL, tagline.
- `content/projects.tsx` — the featured projects (products, Sway tools, client sites, business apps). Only set `live` when the client's domain actually serves this build; if the client kept or launched a different site, link `href` to the vercel.app deployment and set `status` instead. The file also holds the `hidden` set of repos to leave off the list, and `overrides` for nicer names/descriptions.
- `content/repos.json` — snapshot of public repos, used as a fallback if the GitHub API is unreachable. Refresh with:

```sh
gh api "users/tysongreenan/repos?per_page=100&type=owner&sort=pushed" \
  --jq '[.[] | {name,description,html_url,homepage,stargazers_count,language,created_at,archived,fork}]' > content/repos.json
```

The "other projects" list is fetched from GitHub at build time and revalidated daily. Set `GITHUB_TOKEN` (see `.env.example`) to raise the API rate limit.

## Develop

```sh
pnpm install
pnpm dev
```

## Token counter

`pnpm tokens` recounts tokens from T3 Code's usage cache and writes `content/token-usage.json`.
A LaunchAgent on the MacBook (`~/Library/LaunchAgents/com.tysongreenan.token-counter.plist`) runs
`scripts/update-token-counter.sh` daily at 6:00 from its own clone in
`~/Library/Application Support/tyson-token-counter/repo`, and pushes to `main` only when the total changed.
Log: `~/Library/Logs/token-counter.log`. Run it now: `launchctl kickstart -k gui/$(id -u)/com.tysongreenan.token-counter`.
