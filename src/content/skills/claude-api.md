---
name: Claude API
tagline: Reference and implementation guidance for building against the Claude API — messages, tools, streaming, caching.
categories:
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/claude-api"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-08-01
---

Claude API loads current, correct reference material for building against the Messages API directly — request shapes, tool-use loops, streaming, prompt caching, and model selection — instead of relying on training-data knowledge that's likely stale by the time it matters, given how frequently API surface and model lineups change.

It's the skill to have active when you're implementing a Claude integration by hand rather than through a higher-level SDK feature: a custom tool-use loop, a caching strategy for a long system prompt, or picking the right model for a cost/latency/quality tradeoff in a specific application.

Distinct from MCP Builder and Skill Creator in this catalog — those are for building the extensions Claude uses; this is for building software that calls Claude directly.
