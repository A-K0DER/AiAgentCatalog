---
name: ESLint MCP Server
tagline: Official ESLint MCP server — runs real lint checks against a project's own config instead of an agent guessing at JavaScript style rules.
categories:
  - full-stack-coding
runtime:
  - npx
envVars:
  - name: ESLINT_FLAGS
    required: false
    description: "Set to unstable_native_nodejs_ts_config to load TypeScript ESLint config files via Node's native TypeScript support (Node.js 22.13+)."
  - name: NODE_OPTIONS
    required: false
    description: "Set to --experimental-transform-types alongside ESLINT_FLAGS when using native TypeScript config loading."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
  - vscode
installCommand: "npx @eslint/mcp@latest"
sourceUrl: "https://github.com/eslint/eslint"
homepageUrl: "https://eslint.org/docs/latest/use/mcp"
verification: verified
pricing: free
license: MIT
author: ESLint
featured: false
officialHosted: false
githubStars: 27458
addedDate: 2026-08-12
---

Rather than an agent inferring JavaScript or TypeScript style conventions from surrounding code — or worse, from generic training-data habits that don't match a given project — the official ESLint MCP server runs the project's actual configured linter and returns its actual findings. That means every flagged issue is one the project's own `eslint.config.js` would flag in CI, with no drift between what an agent considers "clean" code and what the team's tooling enforces.

It's a thin MCP wrapper: a single `lint-files` tool that accepts file paths and runs them through ESLint exactly as installed in the target project, so custom rules, shared configs, and plugin setups are respected automatically rather than needing to be re-described to the agent. TypeScript config files (`eslint.config.ts`) need either a local install (so `jiti` resolves from `node_modules`) or Node 22.13+'s native TypeScript support via the `ESLINT_FLAGS` / `NODE_OPTIONS` combination.

As part of the core ESLint project it inherits ESLint's own maturity and client documentation, covering VS Code, Cursor, and Windsurf alongside Claude — a safe default whenever a task involves writing or reviewing JS/TS and a lint pass should be a real gate rather than an assumption.
