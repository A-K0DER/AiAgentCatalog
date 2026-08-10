---
name: Playwright Skill
tagline: Claude writes and runs custom Playwright automation on demand, instead of calling a fixed set of pre-built MCP tools.
categories:
  - browser-automation
runtime: []
envVars: []
clients:
  - claude-code-cli
  - other
sourceUrl: "https://github.com/lackeyjb/playwright-skill"
homepageUrl: "https://github.com/lackeyjb/playwright-skill"
verification: community
pricing: free
license: MIT
author: lackeyjb
featured: false
githubStars: 3012
addedDate: 2026-08-11
---

Where a Playwright MCP server exposes a fixed menu of functions (click, navigate, snapshot, and so on), this skill takes the opposite approach: Claude writes bespoke Playwright scripts for the specific task at hand and executes them directly. That trades some of the determinism of a tool-call interface for flexibility on tasks that don't map cleanly onto pre-built actions — multi-step form flows, responsive-layout checks across viewports, or hunting down broken links and assets across a site.

It's model-invoked rather than command-triggered: describing the need in plain language ("test if the registration form submits correctly," "check this page at mobile width") is enough for Claude to discover the skill, generate the automation code, and run it with the browser visible by default rather than headless — useful for actually watching what's happening during debugging. Documentation loads progressively, with basic instructions available immediately and the fuller API reference pulled in only when a task needs it, keeping the context footprint small for simple cases.

Three install paths are supported: as a Claude Code plugin via its own marketplace (`/plugin marketplace add lackeyjb/playwright-skill`), copied into `~/.claude/skills/` for global availability, or dropped into a single project's `.claude/skills/` directory.
