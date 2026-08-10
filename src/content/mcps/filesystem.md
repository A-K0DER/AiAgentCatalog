---
name: Filesystem
tagline: Secure, scoped file read/write access to specific local directories.
categories:
  - full-stack-coding
  - documents-files
runtime:
  - npx
  - docker
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx -y @modelcontextprotocol/server-filesystem /path/to/dir1 /path/to/dir2"
sourceUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem"
homepageUrl: "https://modelcontextprotocol.io"
verification: verified
pricing: free
license: MIT
author: "Anthropic / Model Context Protocol"
featured: true
addedDate: 2026-06-12
---

The Filesystem server gives an agent read and write access to a specific set of local directories, passed explicitly as command-line arguments when the server starts. Nothing outside those paths is reachable, which makes it the standard building block for coding agents, file-organizing assistants, and any workflow that needs to touch real files on disk without being handed the whole machine.

Once connected, an agent can list directories, read and write files, create and move files, and search by name or content within the allowed scope. Clients that support the MCP **Roots** protocol can also hand the server a dynamic set of allowed directories at connect time — for example, an editor can automatically scope access to whatever workspace folder is currently open, overriding the static paths the server was launched with.

Because permissions are enforced at the directory level rather than per-call, this server is a common first MCP install for anyone wiring an agent into a local coding or writing workflow: it is predictable to reason about, requires no API keys, and works identically whether the client is Claude Desktop, an IDE, or a CLI agent.
