---
name: Notion
tagline: Official Notion MCP server — search, read, and edit pages and databases from an agent session.
categories:
  - documents-files
  - productivity-memory
runtime:
  - npx
  - cloud
envVars:
  - name: NOTION_TOKEN
    required: true
    description: "Internal integration token from a Notion integration, shared with the specific pages or databases it should access."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx -y @notionhq/notion-mcp-server"
sourceUrl: "https://github.com/makenotion/notion-mcp-server"
homepageUrl: "https://developers.notion.com/docs/mcp"
verification: verified
pricing: free
license: "MIT"
author: Notion
featured: false
officialHosted: true
githubStars: 4584
addedDate: 2026-08-08
---

Notion's own MCP server wraps its public API as agent tools — searching across a workspace, reading page and database content, creating and editing pages, and updating database properties — using the same integration-token permission model as any other Notion API integration, so access stays scoped to whatever pages the integration was explicitly shared with.

That scoping-by-sharing is the main thing to get right on setup: a token only sees what's been shared with its integration, not the whole workspace by default, which makes it straightforward to hand an agent access to one project's docs without opening up everything else.

Pairs well with Doc Coauthoring or Internal Comms in this catalog's skills section when the actual editing work benefits from more structure than the raw MCP tools provide on their own.
