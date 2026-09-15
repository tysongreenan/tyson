import { featured } from "@/content/projects";
import { getOtherRepos } from "@/lib/github";

export type TimelineEntry = {
  key: string;
  date: string; // YYYY-MM
  title: string;
  href: string;
  live: string | null;
  featuredSlug: string | null;
};

export async function getTimeline(): Promise<Map<string, TimelineEntry[]>> {
  const others = await getOtherRepos();
  const entries: TimelineEntry[] = [
    ...featured.map((f) => ({
      key: f.slug,
      date: f.date,
      title: f.title,
      href: f.href,
      live: f.live ?? null,
      featuredSlug: f.slug,
    })),
    ...others.map((r) => ({
      key: r.name,
      date: r.created_at.slice(0, 7),
      title: r.title,
      href: r.live || r.html_url,
      live: r.live,
      featuredSlug: null,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const byYear = new Map<string, TimelineEntry[]>();
  for (const e of entries) {
    const year = e.date.slice(0, 4);
    byYear.set(year, [...(byYear.get(year) ?? []), e]);
  }
  return byYear;
}

export function monthName(date: string) {
  return new Date(`${date}-15T00:00:00Z`).toLocaleString("en-US", { month: "short", timeZone: "UTC" });
}
