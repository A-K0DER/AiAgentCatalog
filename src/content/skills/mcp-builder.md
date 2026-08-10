---
name: MCP Builder
tagline: A guided workflow for building high-quality MCP servers in Python or TypeScript.
categories:
  - devops-cicd
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/mcp-builder"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: true
githubStars: 167407
addedDate: 2026-07-18
---

Half the entries in this catalog's MCP section are servers other people built; this skill is for building the next one. It's a structured guide for creating MCP servers — in Python with FastMCP or in Node/TypeScript with the official MCP SDK — that actually enable an LLM to accomplish real tasks against an external API or service, rather than just technically exposing that API's surface area.

The skill frames server quality around a four-phase workflow: understanding the target API and the tasks users actually want to do with it, designing tools around those tasks rather than around raw API endpoints, implementing with good error handling and clear tool descriptions, and testing the result the way an agent would actually use it. That task-first framing is the core opinion of the skill — a technically complete MCP server with badly named tools and no guidance in its descriptions is, in practice, a bad MCP server.

For anyone reading this catalog and thinking "I could build one of these" — an MCP for an internal tool, a niche SaaS product, or an API nobody's wrapped yet — this is the most direct path from that idea to a working server, and a good one to have open next to the reference implementations already listed here.
