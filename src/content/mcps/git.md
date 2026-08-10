---
name: Git
tagline: Read, diff, branch, and commit inside a local Git repository from an agent session.
categories:
  - devops-cicd
  - full-stack-coding
runtime:
  - uv
  - python
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "uvx mcp-server-git --repository /path/to/repo"
sourceUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/git"
homepageUrl: "https://modelcontextprotocol.io"
verification: verified
pricing: free
license: MIT
author: "Anthropic / Model Context Protocol"
featured: false
addedDate: 2026-05-20
---

The Git server exposes repository operations — status, diff, log, branch, add, commit — as structured tools instead of shell commands, which means an agent can inspect and act on a repository's history without you having to grant it raw terminal access. Point it at a repository with `--repository /path/to/repo` and it operates against that working tree for the life of the session.

It's a natural companion to the Filesystem server: Filesystem handles reading and writing file contents, Git handles understanding and recording the history around those changes. Together they cover most of what a coding agent needs for local, non-destructive repository work — reviewing a diff before proposing a change, drafting a commit message that actually reflects what moved, or walking through recent log entries to understand why a file looks the way it does.

No environment variables or API keys are required; the only configuration is which repository path to operate against.
