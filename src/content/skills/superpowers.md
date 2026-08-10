---
name: Superpowers
tagline: A software-development methodology bundled as skills — brainstorm, plan, TDD, and verify before anything counts as done.
categories:
  - full-stack-coding
  - productivity-memory
runtime: []
envVars: []
clients:
  - claude-code-cli
  - cursor
  - other
sourceUrl: "https://github.com/obra/superpowers"
homepageUrl: "https://github.com/obra/superpowers"
verification: community
pricing: free
license: MIT
author: Jesse Vincent (obra)
featured: true
githubStars: 270163
addedDate: 2026-08-11
---

Superpowers isn't a single skill so much as a development methodology packaged as a coordinated set of them — fourteen at last count, covering brainstorming, writing-plans, subagent-driven-development, systematic-debugging, test-driven-development, requesting-code-review, using-git-worktrees, and more. The pitch is that an agent's default failure mode is jumping straight to code, and the framework's job is to interrupt that: ask clarifying questions and present a design in digestible sections before any implementation starts.

The workflow that emerges is deliberately staged — brainstorm, break the result into 2-to-5-minute tasks with exact implementation details, implement with a two-stage review (spec compliance, then code quality), test against a strict RED-GREEN-REFACTOR loop, then review and merge. Skills activate automatically based on where an agent is in that pipeline rather than requiring the user to invoke them by name, and a meta-skill (`writing-skills`) is included for extending the set with project-specific ones.

It ships as a Claude Code plugin (`/plugin install superpowers@claude-plugins-official`) but also includes adapter directories for Codex, Cursor, Copilot, and Gemini CLI, making the same methodology usable outside Claude Code specifically. Worth pairing with a narrower, single-purpose skill like TDD if you only want one piece of the discipline rather than the full pipeline.
