---
name: Supabase
tagline: Official Supabase MCP server — manage projects, tables, migrations, and Edge Functions from an agent.
categories:
  - database-administration
  - full-stack-coding
runtime:
  - npx
  - cloud
envVars:
  - name: SUPABASE_ACCESS_TOKEN
    required: true
    description: "Personal access token from the Supabase dashboard, scoped to the projects the agent should manage."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx -y @supabase/mcp-server-supabase@latest"
sourceUrl: "https://github.com/supabase/mcp"
homepageUrl: "https://supabase.com/docs/guides/getting-started/mcp"
verification: verified
pricing: free
license: "Apache-2.0"
author: Supabase
featured: true
officialHosted: true
githubStars: 2857
addedDate: 2026-08-08
---

Supabase's official MCP server goes past read-only database access — it can create and manage projects, run schema migrations, inspect and query tables, manage Auth and Storage config, and deploy Edge Functions, effectively the same surface area as the Supabase dashboard, exposed as agent tools instead.

A `--read-only` flag is available and worth defaulting to for anything other than a dedicated dev or staging project, since the full-access mode can genuinely alter schema and data — closer in risk profile to handing an agent a service-role key than to the read-only Postgres reference server elsewhere in this catalog.

If a project is already on Supabase for its database, this largely replaces the need for the separate PostgreSQL MCP server — it covers the same querying use case plus project- and infrastructure-level operations that server doesn't touch.
