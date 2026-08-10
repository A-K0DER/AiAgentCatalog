import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { CATEGORIES, type CategorySlug } from "../../../data/categories";
import { CLIENTS } from "../../../data/clients";
import { RUNTIMES } from "../../../data/runtimes";

export const GET: APIRoute = async ({ site }) => {
  const skills = await getCollection("skills");
  const mcps = await getCollection("mcps");

  function categoryCount(slug: CategorySlug) {
    return (
      skills.filter((s) => s.data.categories.includes(slug)).length +
      mcps.filter((m) => m.data.categories.includes(slug)).length
    );
  }

  const body = {
    name: "SkillForAgents",
    description:
      "The open, verified catalog of Claude Agent Skills and MCP servers, browsable by use case.",
    site: site?.toString(),
    counts: {
      skills: skills.length,
      mcps: mcps.length,
      categories: CATEGORIES.length,
    },
    categories: CATEGORIES.map((c) => ({
      slug: c.slug,
      label: c.label,
      count: categoryCount(c.slug),
    })),
    clients: CLIENTS.map((c) => c.slug),
    runtimes: RUNTIMES.map((r) => r.slug),
    endpoints: {
      skills: new URL("/api/v1/skills.json", site).toString(),
      mcps: new URL("/api/v1/mcps.json", site).toString(),
      meta: new URL("/api/v1/meta.json", site).toString(),
    },
    license: "Metadata is free to use with attribution back to SkillForAgents; verify against sourceUrl before install.",
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
