---
name: Theme Factory
tagline: Generates cohesive light/dark color themes and design tokens from a single seed color or reference.
categories:
  - full-stack-coding
  - documents-files
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/theme-factory"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-08-01
---

Theme Factory turns a single design decision — one seed color, or a reference to match — into a full token set: a light and dark palette with correct contrast ratios, semantic color roles, and the surrounding scale needed to actually build an interface, rather than one hex code and a guess at the rest.

The output is meant to be consumed directly by a codebase — CSS custom properties or a Tailwind config, matching how this catalog's own site is themed — so the handoff from "here's a color" to "here's a working light/dark theme" is one step instead of a design review cycle.

Reach for it early in a project, before component work starts, so every subsequent screen is built against a real token set instead of hardcoded colors that need retrofitting later.
