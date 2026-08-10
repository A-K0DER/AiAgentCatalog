import type { CollectionEntry } from "astro:content";

export function serializeEntry(entry: CollectionEntry<"skills"> | CollectionEntry<"mcps">, type: "skills" | "mcps", site: URL) {
  const d = entry.data;
  return {
    id: entry.id,
    type: type === "skills" ? "skill" : "mcp-server",
    name: d.name,
    tagline: d.tagline,
    categories: d.categories,
    runtime: d.runtime,
    envVars: d.envVars,
    clients: d.clients,
    installCommand: d.installCommand ?? null,
    sourceUrl: d.sourceUrl,
    homepageUrl: d.homepageUrl ?? null,
    verification: d.verification,
    pricing: d.pricing,
    license: d.license ?? null,
    author: d.author ?? null,
    officialHosted: d.officialHosted,
    githubStars: d.githubStars ?? null,
    addedDate: d.addedDate.toISOString().slice(0, 10),
    url: new URL(`/${type}/${entry.id}/`, site).toString(),
  };
}
