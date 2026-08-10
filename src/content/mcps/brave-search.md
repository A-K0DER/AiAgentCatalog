---
name: Brave Search
tagline: Web and local search results via the Brave Search API — no scraping search engines directly.
categories:
  - search-research
  - web-scraping
runtime:
  - npx
  - docker
envVars:
  - name: BRAVE_API_KEY
    required: true
    description: "API key from the Brave Search API dashboard. The free tier includes 2,000 queries/month."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
installCommand: "npx -y @modelcontextprotocol/server-brave-search"
sourceUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/brave-search"
homepageUrl: "https://brave.com/search/api/"
verification: community
pricing: freemium
license: MIT
author: "Anthropic / Model Context Protocol (archived reference server)"
featured: false
addedDate: 2026-04-10
---

Rather than pointing a browser-automation server at a search engine's results page and scraping it, the Brave Search server calls Brave's actual Search API and returns structured results — faster, more reliable, and without the fragility of parsing a page that can change its markup at any time. It supports both general web search and local/business search.

You'll need a `BRAVE_API_KEY`, obtained from the Brave Search API dashboard; the free tier covers 2,000 queries a month, which is enough for most agent workflows during development and light production use before you need to consider a paid plan.

Like PostgreSQL, this server has been moved from Anthropic's actively maintained reference-servers repository into `servers-archived`. It still works exactly as documented, but we mark it **Community** verification to be transparent that it's no longer receiving official updates — worth knowing if you're choosing between this and a similarly-scoped, actively maintained alternative for a production deployment.
