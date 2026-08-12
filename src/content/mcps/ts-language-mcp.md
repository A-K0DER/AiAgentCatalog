---
name: ts-language-mcp
tagline: Zero-config MCP server exposing the TypeScript compiler's own type intelligence — exact types, safe renames, project-wide diagnostics.
categories:
  - full-stack-coding
runtime:
  - npx
  - node
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - vscode
installCommand: "npx ts-language-mcp /path/to/your/project"
sourceUrl: "https://github.com/jgauffin/ts-language-mcp"
homepageUrl: "https://github.com/jgauffin/ts-language-mcp"
verification: community
pricing: free
license: Apache-2.0
author: jgauffin
featured: false
officialHosted: false
githubStars: 3
addedDate: 2026-08-12
---

Most TypeScript tooling available to agents treats source as plain text — reading whole files to find a function, grepping for usages, guessing at inferred types from surrounding context. ts-language-mcp instead calls into the TypeScript compiler API directly, so `get_definition`, `get_references`, and `get_hover` return exact, fully-resolved types and read/write-classified usages rather than approximations, and `find` supports AST-level search by name pattern, symbol kind, and scope.

The renaming and refactoring tools are where the compiler-API approach pays off most: `get_call_hierarchy` and `get_type_hierarchy` trace real caller/callee and inheritance chains, and renames execute across every affected file with the compiler verifying correctness — rather than a text-based find-and-replace that might miss a shadowed identifier or hit an unrelated one. `get_symbols` and `get_outline` give a fast structural view of a file without reading its full contents.

It's a zero-config npx package — point it at a project directory with a `tsconfig.json` and it auto-loads compiler options and watches for file changes, with no external language-server process to install or manage separately. Compatible with Claude Code (`claude mcp add typescript -- npx ts-language-mcp /path/to/project`), Claude Desktop, Cline, and other stdio-based MCP clients.
