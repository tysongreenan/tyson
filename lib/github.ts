import { site } from "@/content/site";
import { featured, hidden, overrides } from "@/content/projects";
import snapshot from "@/content/repos.json";

export type Repo = {
  name: string;
  title: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  created_at: string;
  archived: boolean;
  fork: boolean;
};

type GhRepo = Omit<Repo, "title">;

async function fetchRepos(): Promise<GhRepo[]> {
  const res = await fetch(`https://api.github.com/users/${site.github}/repos?per_page=100&type=owner&sort=pushed`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
    },
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json();
}

/** Public, non-featured repos, newest first. Falls back to the committed snapshot if GitHub is unreachable. */
export async function getOtherRepos(): Promise<Repo[]> {
  let repos: GhRepo[];
  try {
    repos = await fetchRepos();
  } catch (err) {
    console.warn("GitHub fetch failed, using snapshot:", err);
    repos = snapshot as GhRepo[];
  }
  const featuredNames = new Set(featured.map((f) => f.repo));
  return repos
    .filter((r) => !r.fork && !r.archived && !featuredNames.has(r.name) && !hidden.has(r.name))
    .sort((a, b) => b.created_at.localeCompare(a.created_at))
    .map((r) => {
      const o = overrides[r.name] ?? {};
      return {
        ...r,
        title: o.title ?? r.name,
        description: o.description ?? r.description,
      };
    });
}
