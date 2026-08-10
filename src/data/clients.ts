export const CLIENTS = [
  { slug: "claude-desktop", label: "Claude Desktop" },
  { slug: "claude-code-cli", label: "Claude Code CLI" },
  { slug: "cursor", label: "Cursor" },
  { slug: "windsurf", label: "Windsurf" },
  { slug: "vscode", label: "VS Code" },
  { slug: "other", label: "Other" },
] as const;

export type ClientSlug = (typeof CLIENTS)[number]["slug"];

export const CLIENT_SLUGS = CLIENTS.map((c) => c.slug) as [
  ClientSlug,
  ...ClientSlug[],
];

export function getClientLabel(slug: string): string {
  return CLIENTS.find((c) => c.slug === slug)?.label ?? slug;
}
