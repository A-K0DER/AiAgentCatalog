---
name: MongoDB
tagline: Official MongoDB MCP server — query collections, manage indexes, and administer Atlas clusters from an agent session.
categories:
  - database-administration
runtime:
  - npx
  - docker
envVars:
  - name: MDB_MCP_CONNECTION_STRING
    required: false
    description: "Direct MongoDB or Atlas connection string. Required unless MDB_MCP_API_CLIENT_ID / MDB_MCP_API_CLIENT_SECRET are supplied instead for Atlas API access."
  - name: MDB_MCP_API_CLIENT_ID
    required: false
    description: "Atlas API Service Account client ID, used for Atlas cluster management instead of a direct connection string."
  - name: MDB_MCP_API_CLIENT_SECRET
    required: false
    description: "Atlas API Service Account client secret, paired with MDB_MCP_API_CLIENT_ID."
  - name: MDB_MCP_READ_ONLY
    required: false
    description: "Restrict the server to read-only operations. Defaults to false."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx -y mongodb-mcp-server@latest"
sourceUrl: "https://github.com/mongodb-js/mongodb-mcp-server"
homepageUrl: "https://github.com/mongodb-js/mongodb-mcp-server"
verification: verified
pricing: free
license: Apache-2.0
author: MongoDB
featured: true
officialHosted: false
githubStars: 1095
addedDate: 2026-08-11
---

MongoDB's own MCP server splits its authentication model in two, matching the two things people actually do with it: hand it a `MDB_MCP_CONNECTION_STRING` for direct document-level work against a database, or hand it an Atlas API Service Account (`MDB_MCP_API_CLIENT_ID` / `MDB_MCP_API_CLIENT_SECRET`) for cluster-level administration — provisioning, scaling, and configuration — through the Atlas control plane instead. An agent can be scoped to just one of those depending on what it's supposed to touch.

`MDB_MCP_READ_ONLY` is worth calling out specifically: flipping it on turns the server into a safe way to let an agent explore and query production data without any path to a write or destructive operation, which is the main risk in connecting an LLM to a live database in the first place. Additional variables cover logging destinations, a configurable cap on documents returned per query, and a comma-separated list for disabling specific tools outright.

It ships as both an npx-run Node package (Node.js 22.13+) and a Docker image, and is documented working with VS Code, Cursor, Claude Desktop, Windsurf, Copilot CLI, and OpenCode — first-party coverage of both the database and the Atlas hosting layer around it from the same vendor.
