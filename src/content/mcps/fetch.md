---
name: Fetch
tagline: Fetches a URL and converts it to clean Markdown so agents can read the live web.
categories:
  - web-scraping
  - search-research
runtime:
  - uv
  - python
  - docker
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "uvx mcp-server-fetch"
sourceUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch"
homepageUrl: "https://modelcontextprotocol.io"
verification: verified
pricing: free
license: MIT
author: "Anthropic / Model Context Protocol"
featured: false
officialHosted: true
githubStars: 89404
addedDate: 2026-05-20
---

Fetch is the simplest possible bridge between an agent and the open web: given a URL, it retrieves the page and converts its HTML into clean Markdown, trimmed of navigation chrome and script noise so the content is cheap to read in context. It accepts optional `max_length` and `start_index` arguments for paginating through long pages, and a `raw` flag when you need the unprocessed response instead of the Markdown conversion.

It's the right tool when an agent just needs to *read* a page — pull in documentation, check a changelog, or ground a research answer in a live source — rather than click through a multi-step flow. For that heavier interaction (logins, forms, JavaScript-rendered content), pair it with a full browser-automation server like Playwright instead.

One thing to flag for anyone deploying this in a shared or sensitive environment: the server can reach local and internal IP addresses by default, so treat it the same way you'd treat any outbound-HTTP-capable tool and constrain network access at the infrastructure level if that matters for your deployment.
