import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CATEGORY_SLUGS } from "./data/categories";
import { CLIENT_SLUGS } from "./data/clients";
import { RUNTIME_SLUGS } from "./data/runtimes";

const entrySchema = z.object({
  name: z.string(),
  tagline: z.string().max(140),
  categories: z.array(z.enum(CATEGORY_SLUGS)).min(1),
  runtime: z.array(z.enum(RUNTIME_SLUGS)).default([]),
  envVars: z
    .array(
      z.object({
        name: z.string(),
        required: z.boolean().default(true),
        description: z.string().optional(),
      }),
    )
    .default([]),
  clients: z.array(z.enum(CLIENT_SLUGS)).min(1),
  installCommand: z.string().optional(),
  sourceUrl: z.string().url(),
  homepageUrl: z.string().url().optional(),
  verification: z.enum(["verified", "community", "unverified"]).default("community"),
  pricing: z.enum(["free", "freemium", "paid"]).default("free"),
  license: z.string().optional(),
  author: z.string().optional(),
  featured: z.boolean().default(false),
  officialHosted: z.boolean().default(false),
  githubStars: z.number().int().nonnegative().optional(),
  addedDate: z.coerce.date(),
});

const skills = defineCollection({
  loader: glob({ base: "./src/content/skills", pattern: "**/*.md" }),
  schema: entrySchema,
});

const mcps = defineCollection({
  loader: glob({ base: "./src/content/mcps", pattern: "**/*.md" }),
  schema: entrySchema,
});

export const collections = { skills, mcps };
export type EntrySchema = z.infer<typeof entrySchema>;
