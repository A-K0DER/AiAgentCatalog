import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { serializeEntry } from "../../../lib/catalog";

export const GET: APIRoute = async ({ site }) => {
  const skills = await getCollection("skills");
  const data = skills
    .sort((a, b) => (b.data.githubStars ?? 0) - (a.data.githubStars ?? 0))
    .map((entry) => serializeEntry(entry, "skills", site!));

  return new Response(JSON.stringify({ count: data.length, results: data }, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
