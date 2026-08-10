---
name: Sentry
tagline: Official Sentry MCP server — query issues, stack traces, and root-cause analysis from an agent session.
categories:
  - devops-cicd
  - full-stack-coding
runtime:
  - npx
  - cloud
envVars:
  - name: SENTRY_AUTH_TOKEN
    required: false
    description: "Required only for the self-hosted/local transport; the hosted remote endpoint authenticates via OAuth in-flow instead."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx mcp-remote https://mcp.sentry.dev/mcp"
sourceUrl: "https://github.com/getsentry/sentry-mcp"
homepageUrl: "https://docs.sentry.io/product/sentry-mcp/"
verification: verified
pricing: freemium
license: "Apache-2.0"
author: Sentry
featured: false
officialHosted: true
githubStars: 809
addedDate: 2026-08-08
---

Sentry's MCP server lets an agent pull real production error data directly into a debugging session — recent issues, full stack traces, event frequency, and affected releases — instead of relying on a developer to copy-paste a stack trace into the conversation manually.

The practical workflow it enables is closing the loop from alert to fix: an agent can look up an issue by ID or query recent errors for a project, read the actual stack trace and breadcrumbs, and go straight to proposing or making the code change, all inside the same session that started with "why is this failing in prod."

Most useful paired with the Git or GitHub MCP servers in this catalog, so root-causing an error and opening the fixing commit or PR happens in one continuous agent workflow rather than two disconnected tools.
