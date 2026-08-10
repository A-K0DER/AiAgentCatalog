---
name: PostgreSQL
tagline: Read-only SQL access to a Postgres database, with schema inspection built in.
categories:
  - database-administration
  - data-analytics
runtime:
  - npx
  - docker
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
installCommand: "npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb"
sourceUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres"
homepageUrl: "https://modelcontextprotocol.io"
verification: community
pricing: free
license: MIT
author: "Anthropic / Model Context Protocol (archived reference server)"
featured: false
addedDate: 2026-04-10
---

The Postgres server connects an agent to a database with a single connection URL passed as an argument — no separate environment variables to configure. Every query runs inside a read-only transaction, which is a deliberate safety constraint: this server is built for an agent to *understand* a database (inspect schemas, explore tables, answer questions about the data) rather than to run migrations or write production data.

Worth knowing before you install it: this server originated in Anthropic's main reference-servers repository but has since been moved into the `servers-archived` companion repo, meaning it's no longer actively developed by the Model Context Protocol team, even though it remains functional and widely used. We list its verification status as **Community** rather than **Verified** for exactly that reason — this catalog tracks maintenance status, not just whether something used to be official.

If you're running it against a database on the same machine as Docker Desktop on macOS, use `host.docker.internal` in place of `localhost` in the connection string, since `localhost` inside the container won't resolve to the host.
