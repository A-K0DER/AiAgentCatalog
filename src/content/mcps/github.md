---
name: GitHub
tagline: The official GitHub MCP server — repositories, issues, pull requests, Actions, and code security.
categories:
  - devops-cicd
  - full-stack-coding
runtime:
  - docker
  - binary
envVars:
  - name: GITHUB_PERSONAL_ACCESS_TOKEN
    required: true
    description: "A GitHub personal access token scoped to the toolsets you enable (repos, issues, PRs, Actions, etc.)."
  - name: GITHUB_HOST
    required: false
    description: "Set for GitHub Enterprise Server or Enterprise Cloud with data residency instead of github.com."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server"
sourceUrl: "https://github.com/github/github-mcp-server"
homepageUrl: "https://github.com/github/github-mcp-server"
verification: verified
pricing: free
license: MIT
author: GitHub
featured: true
addedDate: 2026-07-02
---

This is GitHub's own first-party MCP server, connecting an agent directly to GitHub's platform rather than relying on shelled-out `git`/`gh` commands. Out of the box it exposes context, repositories, issues, pull requests, and users; more than twenty additional configurable toolsets cover Actions, code security scanning, Dependabot alerts, and project management on top of that.

Authentication is a personal access token passed via `GITHUB_PERSONAL_ACCESS_TOKEN` — scope it to only the toolsets you actually enable, since a broad token combined with a broad toolset selection gives an agent a lot of reach over your repositories. An OAuth device-flow login is also available as an alternative for interactive setups, keeping the token in memory only. `GITHUB_HOST` redirects the server at a GitHub Enterprise Server or Enterprise Cloud instance instead of github.com.

The recommended way to run it is the published Docker image, though a native Go binary is also available if you'd rather build from source. It's documented as compatible with essentially every major MCP client — Claude Desktop, Claude Code CLI, Cursor, Windsurf, VS Code, and more — making it one of the most broadly supported servers in the ecosystem.
