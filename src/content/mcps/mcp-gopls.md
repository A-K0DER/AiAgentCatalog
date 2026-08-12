---
name: mcp-gopls
tagline: MCP server wrapping gopls, Go's official language server, for LSP-grade navigation, diagnostics, and test tooling.
categories:
  - full-stack-coding
runtime:
  - binary
envVars:
  - name: MCP_GOPLS_WORKSPACE
    required: false
    description: "Path to the Go workspace root to analyze. Defaults to the current directory."
  - name: MCP_GOPLS_GOPLS_PATH
    required: false
    description: "Custom path to the gopls binary, if not resolved from PATH."
  - name: MCP_GOPLS_LOG_LEVEL
    required: false
    description: "Controls structured log verbosity (text or JSON output)."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - vscode
installCommand: "go install github.com/hloiseau/mcp-gopls/v2/cmd/mcp-gopls@latest"
sourceUrl: "https://github.com/hloiseau/mcp-gopls"
homepageUrl: "https://github.com/hloiseau/mcp-gopls"
verification: community
pricing: free
license: Apache-2.0
author: hloiseau
featured: false
officialHosted: false
githubStars: 97
addedDate: 2026-08-12
---

mcp-gopls puts Go's own language server, gopls, behind an MCP interface, giving an agent the same semantic understanding a human gets from an IDE rather than plain-text file reading. Go-to-definition, find-references, hover, completion, workspace symbol search, and code actions all route through LSP, so results reflect actual type information instead of pattern matching.

Where it goes further than gopls' own experimental built-in MCP server is tooling: `run_go_test` and `analyze_coverage` execute tests and report coverage directly, `run_go_mod_tidy` and `module_graph` handle dependency housekeeping, and `run_govulncheck` surfaces known vulnerabilities — all as structured MCP tool results rather than shell output an agent has to parse. Long-running commands stream progress notifications so a client can show status rather than blocking silently.

It's a standalone Go binary (`go install`), configurable via `MCP_GOPLS_*` environment variables or CLI flags for workspace path, gopls binary location, and logging, and is documented against Claude, Cursor, and Copilot. Tested against Go 1.25.x and the latest gopls release.
