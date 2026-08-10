---
name: Context7
tagline: Pulls current, version-accurate library documentation directly into context — no stale training-data APIs.
categories:
  - search-research
  - full-stack-coding
runtime:
  - npx
  - cloud
envVars:
  - name: CONTEXT7_API_KEY
    required: false
    description: "Optional API key for higher rate limits; the public endpoint works unauthenticated at a lower limit."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx -y @upstash/context7-mcp"
sourceUrl: "https://github.com/upstash/context7"
homepageUrl: "https://context7.com"
verification: verified
pricing: freemium
license: "MIT"
author: Upstash
featured: true
officialHosted: true
githubStars: 60546
addedDate: 2026-08-08
---

Context7 solves a specific, common failure mode: a coding agent confidently writing against an API that changed six months after its training cutoff. Given a library name, it fetches current, version-matched documentation and code examples directly from source and pulls them into context, so generated code targets the API surface that actually exists in the version installed, not the one the model remembers.

It's a search-and-retrieval tool rather than a code-execution one, which keeps it lightweight to add to almost any agent workflow — the typical pattern is appending "use context7" to a prompt so the agent knows to pull fresh docs before writing framework- or library-specific code.

One of the most broadly useful MCP servers in this catalog precisely because it's not tied to one ecosystem — it's equally relevant whether the task involves a Python package, a JS framework, or an infrastructure tool's CLI.
