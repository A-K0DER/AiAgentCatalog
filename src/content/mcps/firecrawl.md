---
name: Firecrawl
tagline: Official Firecrawl MCP server — web search, scraping, and crawling that returns clean, agent-ready markdown instead of raw HTML.
categories:
  - web-scraping
  - search-research
runtime:
  - npx
envVars:
  - name: FIRECRAWL_API_KEY
    required: true
    description: "API key for Firecrawl's cloud scraping and search service. Not required for self-hosted deployments that set FIRECRAWL_API_URL instead."
  - name: FIRECRAWL_API_URL
    required: false
    description: "Point the server at a self-hosted Firecrawl instance instead of the cloud API."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "env FIRECRAWL_API_KEY=fc-YOUR_API_KEY npx -y firecrawl-mcp"
sourceUrl: "https://github.com/firecrawl/firecrawl-mcp-server"
homepageUrl: "https://github.com/firecrawl/firecrawl-mcp-server"
verification: verified
pricing: freemium
license: MIT
author: Firecrawl
featured: false
officialHosted: true
githubStars: 7202
addedDate: 2026-08-11
---

Firecrawl's first-party MCP server hands an agent search, scrape, and page-interaction tools that return content already cleaned up for LLM consumption — markdown instead of raw HTML, with boilerplate and navigation chrome stripped out. That matters more than it sounds: an agent doing multi-step research spends a meaningful share of its context budget parsing pages, and pre-cleaned output cuts that overhead directly.

Configuration is a single required variable, `FIRECRAWL_API_KEY`, against Firecrawl's cloud service; `FIRECRAWL_API_URL` swaps that for a self-hosted deployment instead. A handful of secondary variables control transport mode (`HTTP_STREAMABLE_SERVER` for local streaming instead of stdio) and surface area (`FIRECRAWL_MCP_SEARCH_ENABLED` to restrict the server to search-only), which is useful when an integration only needs one capability and shouldn't have the rest available.

It's documented against Claude Desktop, Cursor 0.45.6+, Windsurf, and VS Code / VS Code Insiders, plus the MCP.so playground for quick testing — broad enough coverage that it's a reasonable default whenever a task calls for live web content rather than a static, pre-indexed search API.
