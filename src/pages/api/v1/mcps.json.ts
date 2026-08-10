import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { serializeEntry } from "../../../lib/catalog";

export const GET: APIRoute = async ({ site }) => {
  const mcps = await getCollection("mcps");
  const data = mcps
    .sort((a, b) => (b.data.githubStars ?? 0) - (a.data.githubStars ?? 0))
    .map((entry) => serializeEntry(entry, "mcps", site!));

  return new Response(JSON.stringify({ count: data.length, results: data }, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
