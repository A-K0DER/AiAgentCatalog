---
name: Playwright
tagline: Fast, deterministic browser automation via accessibility snapshots — no screenshots required.
categories:
  - browser-automation
  - web-scraping
runtime:
  - npx
envVars:
  - name: PLAYWRIGHT_MCP_BROWSER
    required: false
    description: "Which browser engine to launch: chromium, firefox, or webkit."
  - name: PLAYWRIGHT_MCP_HEADLESS
    required: false
    description: "Run headless (default) or headed, for debugging what the agent sees."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx @playwright/mcp@latest"
sourceUrl: "https://github.com/microsoft/playwright-mcp"
homepageUrl: "https://github.com/microsoft/playwright-mcp"
verification: verified
pricing: free
license: Apache-2.0
author: Microsoft
featured: true
officialHosted: true
githubStars: 35969
addedDate: 2026-07-15
---

Microsoft's Playwright MCP server drives a real browser for an agent, but deliberately avoids the usual screenshot-and-vision-model loop. Instead it operates on structured accessibility snapshots of the page — the same tree a screen reader would use — which makes its actions more token-efficient and considerably more deterministic than pixel-based approaches.

That combination makes it well suited to exploratory automation (an agent figuring out how to complete a flow it hasn't seen before), self-healing test suites that need to tolerate minor UI drift, and long-running autonomous workflows where reliability matters more than visual fidelity. Configuration is almost entirely optional — `PLAYWRIGHT_MCP_BROWSER` and `PLAYWRIGHT_MCP_HEADLESS` cover the two settings most people touch, and everything else has a sane default.

Client support is unusually broad: beyond the major agent clients, it's documented working with editors like VS Code and Cursor, CLI tools, and a long tail of other MCP hosts — a reasonable default choice whenever a task calls for a real browser rather than a static-page fetch.
