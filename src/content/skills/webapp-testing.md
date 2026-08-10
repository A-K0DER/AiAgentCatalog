---
name: Webapp Testing
tagline: Drive Playwright scripts to verify, debug, and screenshot local web apps under test.
categories:
  - devops-cicd
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/webapp-testing"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
addedDate: 2026-07-10
---

This skill is a toolkit for interacting with and testing local web applications using native Python Playwright scripts, rather than relying on a general-purpose browser-automation MCP server. It's built around a decision tree: static HTML gets read directly to identify selectors, while running applications get driven through Playwright with helper scripts — including `scripts/with_server.py`, which manages the lifecycle of one or more local dev servers so the agent isn't responsible for spinning them up and tearing them down by hand.

The skill's guidance is explicit about workflow discipline: run helper scripts with `--help` first rather than reading their source, since the scripts are meant to be called as black boxes and can be large enough to meaningfully pollute the context window if ingested directly. That's a deliberate design choice worth noting for anyone building their own skills — treating tooling as an opaque, well-documented interface rather than something the agent needs to fully understand internally.

Typical uses are verifying that a frontend change actually works, debugging unexpected UI behavior, capturing screenshots for a bug report, and reading browser console logs during a debugging session.
