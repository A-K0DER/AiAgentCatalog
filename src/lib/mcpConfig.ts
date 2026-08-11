export interface ParsedCommand {
  command: string;
  args: string[];
}

/**
 * Tokenizes an installCommand string like "npx -y @scope/pkg" into a
 * command + args pair. Strips a leading "env KEY=VAL [KEY2=VAL2 ...]"
 * prefix (used by a handful of entries to document a required env var
 * inline) so `command` never resolves to the literal string "env" —
 * the real env values are supplied separately via each entry's envVars.
 */
export function parseInstallCommand(raw: string): ParsedCommand | null {
  const tokens = raw.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return null;

  let i = 0;
  if (tokens[i] === "env") {
    i += 1;
    while (i < tokens.length && /^[\w.]+=/.test(tokens[i])) i += 1;
  }
  if (i >= tokens.length) return null;

  return { command: tokens[i], args: tokens.slice(i + 1) };
}

export interface ExportFormat {
  slug: "claude-desktop" | "cursor" | "cline" | "windsurf";
  label: string;
  filename: string;
  path: string;
}

export const EXPORT_FORMATS: ExportFormat[] = [
  {
    slug: "claude-desktop",
    label: "Claude Desktop",
    filename: "claude_desktop_config.json",
    path: "macOS: ~/Library/Application Support/Claude/claude_desktop_config.json · Windows: %APPDATA%\\Claude\\claude_desktop_config.json",
  },
  {
    slug: "cursor",
    label: "Cursor",
    filename: "mcp.json",
    path: ".cursor/mcp.json (project) or ~/.cursor/mcp.json (global)",
  },
  {
    slug: "cline",
    label: "Cline",
    filename: "mcp.json",
    path: ".cline/mcp.json",
  },
  {
    slug: "windsurf",
    label: "Windsurf",
    filename: "mcp_config.json",
    path: "~/.codeium/windsurf/mcp_config.json",
  },
];

export interface StackEntryMeta {
  id: string;
  installCommand: string | null;
  envVars: { name: string; required: boolean }[];
}

export function buildServerEntry(
  meta: StackEntryMeta,
  envValues: Record<string, string>,
): { command: string; args: string[]; env?: Record<string, string> } | null {
  if (!meta.installCommand) return null;
  const parsed = parseInstallCommand(meta.installCommand);
  if (!parsed) return null;

  if (meta.envVars.length === 0) {
    return { command: parsed.command, args: parsed.args };
  }

  const env: Record<string, string> = {};
  for (const v of meta.envVars) env[v.name] = envValues[v.name] ?? "";
  return { command: parsed.command, args: parsed.args, env };
}

export function buildMcpServersJson(
  entries: StackEntryMeta[],
  envValuesByEntryId: Record<string, Record<string, string>>,
): { mcpServers: Record<string, ReturnType<typeof buildServerEntry>> } {
  const mcpServers: Record<string, ReturnType<typeof buildServerEntry>> = {};
  for (const entry of entries) {
    const server = buildServerEntry(entry, envValuesByEntryId[entry.id] ?? {});
    if (server) mcpServers[entry.id] = server;
  }
  return { mcpServers };
}
