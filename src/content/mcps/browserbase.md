---
name: Browserbase
tagline: Cloud browser automation via Browserbase and Stagehand — no local browser, display, or Playwright install required.
categories:
  - browser-automation
  - web-scraping
runtime:
  - npx
  - docker
  - cloud
envVars:
  - name: BROWSERBASE_API_KEY
    required: true
    description: "Authenticates with Browserbase's cloud browser infrastructure."
  - name: BROWSERBASE_PROJECT_ID
    required: true
    description: "The Browserbase project a browser session runs under."
  - name: GEMINI_API_KEY
    required: false
    description: "Powers Stagehand's default model for natural-language page actions; swappable for another model via the --modelApiKey flag."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx @browserbasehq/mcp"
sourceUrl: "https://github.com/browserbase/mcp-server-browserbase"
homepageUrl: "https://github.com/browserbase/mcp-server-browserbase"
verification: verified
pricing: freemium
license: Apache-2.0
author: Browserbase
featured: false
officialHosted: true
githubStars: 3414
addedDate: 2026-08-11
---

Browserbase's MCP server hands an agent a real, remote browser instead of one running on the local machine — useful for environments where installing Playwright and its browser binaries isn't practical, or where automation needs to run somewhere other than the developer's own laptop (a CI runner, a serverless function, a sandboxed agent host). Session management, navigation, page interaction, and content extraction are exposed as six tools running against Browserbase's cloud infrastructure rather than a local process.

Stagehand — Browserbase's higher-level automation layer — sits underneath, translating natural-language page actions ("click the login button," "extract the pricing table") into concrete browser operations. That layer defaults to Gemini as its model but accepts a `--modelApiKey` flag to swap in another one, decoupling the choice of automation-instruction model from whichever agent is driving the MCP session itself.

Two required variables, `BROWSERBASE_API_KEY` and `BROWSERBASE_PROJECT_ID`, are the only setup cost. It's distributed via npx or a Docker build, and supports both clients with native streamable-HTTP transport and older ones via the `mcp-remote` wrapper — a reasonable pick specifically when local browser automation isn't an option, with Playwright MCP remaining the more common default when it is.
