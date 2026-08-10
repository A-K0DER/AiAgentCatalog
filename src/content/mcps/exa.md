---
name: Exa
tagline: Neural search built for AI agents — web search, content retrieval, and multi-step research as MCP tools.
categories:
  - search-research
runtime:
  - npx
  - cloud
envVars:
  - name: EXA_API_KEY
    required: false
    description: "API key for running the server locally via npx. Not needed when connecting to the hosted https://mcp.exa.ai/mcp endpoint, which authenticates via OAuth instead."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
  - other
installCommand: "npx -y exa-mcp-server"
sourceUrl: "https://github.com/exa-labs/exa-mcp-server"
homepageUrl: "https://github.com/exa-labs/exa-mcp-server"
verification: verified
pricing: freemium
license: MIT
author: Exa Labs
featured: false
officialHosted: true
githubStars: 4849
addedDate: 2026-08-11
---

Exa built its search index specifically for retrieval by language models rather than adapting a traditional keyword search engine, and this MCP server exposes that as tools for web search, page-content fetching, and chained multi-step research rather than a single query-and-summarize call. The distinction shows up most on research tasks that need several rounds of searching and reading before an answer is assembled, rather than a one-shot lookup.

Two run modes are available: connect directly to Exa's hosted endpoint at `https://mcp.exa.ai/mcp`, which handles authentication via OAuth with most clients prompting for it automatically, or run the `exa-mcp-server` npm package locally via npx against an `EXA_API_KEY` obtained from the Exa dashboard. The hosted option needs no local process at all, which makes it a low-friction default when a client supports it.

Client support is unusually wide for an MCP server — beyond the standard set, it's documented working with Codex, Kiro, LM Studio, Replit, Gemini CLI, Zed, Warp, and v0 by Vercel, among others — reflecting Exa's positioning as infrastructure meant to plug into whatever agent tooling a team is already using.
