export const RUNTIMES = [
  { slug: "npx", label: "npx", description: "Runs via Node.js using npx — no install step required." },
  { slug: "docker", label: "Docker", description: "Runs as a Docker container." },
  { slug: "uv", label: "uv / Python", description: "Runs via uv or another Python package runner." },
  { slug: "python", label: "Python", description: "Runs directly as a Python script or package." },
  { slug: "node", label: "Node.js", description: "Runs directly as a Node.js package." },
  { slug: "binary", label: "Binary", description: "Distributed as a standalone compiled binary." },
  { slug: "cloud", label: "Cloud / Remote", description: "Hosted remotely — no local runtime required." },
] as const;

export type RuntimeSlug = (typeof RUNTIMES)[number]["slug"];

export const RUNTIME_SLUGS = RUNTIMES.map((r) => r.slug) as [
  RuntimeSlug,
  ...RuntimeSlug[],
];

export function getRuntimeLabel(slug: string): string {
  return RUNTIMES.find((r) => r.slug === slug)?.label ?? slug;
}
