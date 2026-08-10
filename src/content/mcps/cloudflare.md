---
name: Cloudflare
tagline: Official Cloudflare MCP servers — Workers, KV, R2, D1, DNS, and the rest of the platform from an agent session.
categories:
  - devops-cicd
  - full-stack-coding
runtime:
  - cloud
  - npx
envVars:
  - name: CLOUDFLARE_API_TOKEN
    required: true
    description: "API token scoped to the Cloudflare account and services being managed."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx mcp-remote https://mcp.cloudflare.com/mcp"
sourceUrl: "https://github.com/cloudflare/mcp-server-cloudflare"
homepageUrl: "https://developers.cloudflare.com/agents/model-context-protocol/"
verification: verified
pricing: freemium
license: "Apache-2.0"
author: Cloudflare
featured: true
officialHosted: true
githubStars: 4053
addedDate: 2026-08-08
---

Cloudflare publishes a family of first-party MCP servers, most run as remote, vendor-hosted endpoints rather than something you `npx` and run locally — connect with `mcp-remote` or a compatible client and authenticate against your Cloudflare account directly. Coverage spans the platform: Workers deployment, KV and D1 storage, R2 objects, DNS and zone management, and observability, so an agent can operate real Cloudflare infrastructure through natural language instead of the dashboard or a scripted `wrangler` call for every action.

Because it's hosted rather than a local process, there's no runtime to manage — the tradeoff is that every action goes through Cloudflare's servers under the token's exact permission scope, so token scoping matters more here than for most local reference servers.

The natural pairing in this catalog is the DevOps & CI/CD category broadly — use it alongside the Git or GitHub MCP servers when a workflow spans "commit code" and "deploy and configure infrastructure" in the same agent session.
