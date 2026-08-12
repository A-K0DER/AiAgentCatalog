---
name: Golang Skills
tagline: A large, human-reviewed collection of Go-specific skills covering style, concurrency, testing, performance, and popular libraries.
categories:
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-code-cli
  - other
sourceUrl: "https://github.com/samber/cc-skills-golang"
homepageUrl: "https://skills.sh/samber/cc-skills-golang"
verification: community
pricing: free
license: MIT
author: samber
featured: false
githubStars: 2919
addedDate: 2026-08-12
---

This is a deep, Go-only skill set rather than a handful of general-purpose briefings: dozens of individually loadable skills covering code style, naming, error handling, concurrency, context propagation, dependency injection, and project layout, alongside sharper topics like `golang-modernize` (migrating idioms forward across Go releases), `golang-safety`, and `golang-benchmark`. A separate cluster wraps specific ecosystem tools — `golang-spf13-cobra`, `golang-uber-fx`, `golang-google-wire`, `golang-grpc` — so an agent gets library-specific conventions instead of generic Go advice when a project actually depends on them.

The author's stated approach is notable: skills were bootstrapped from real project commit history with Claude Code, then hand-edited, tested, and reworked by a human rather than shipped as raw model output — explicitly positioned against low-effort, AI-generated skill dumps. Each skill loads independently on demand, so a project only pulls in the ones relevant to its actual dependencies rather than the full set at once.

Install everything with the `skills` CLI (`npx skills add https://github.com/samber/cc-skills-golang --all`) or a single skill by name (`--skill golang-performance`); Claude Code users can alternatively add it as a plugin marketplace (`/plugin marketplace add samber/cc` then `/plugin install cc-skills-golang@samber`). Gemini CLI, Cursor, Copilot, and OpenCode installation paths are documented as well.
