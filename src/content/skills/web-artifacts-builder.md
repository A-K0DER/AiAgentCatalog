---
name: Web Artifacts Builder
tagline: Scaffold and bundle multi-component React + Tailwind + shadcn/ui artifacts into one HTML file.
categories:
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: true
addedDate: 2026-07-10
---

Simple claude.ai artifacts — a single self-contained HTML or JSX file — don't need much scaffolding. This skill is for the ones that do: multi-component frontends with real state management, routing, or a shadcn/ui component library, built on a proper React 18 + TypeScript + Vite stack rather than hand-rolled inline scripts.

The workflow is a fixed pipeline: initialize the frontend repo with `scripts/init-artifact.sh`, develop the artifact by editing the generated project like a normal codebase, then bundle everything back down into a single HTML file with `scripts/bundle-artifact.sh` for display — with an optional test pass before handing it back. That bundling step is what makes the difference between "a React project" and "an artifact": the output still has to be one file that runs standalone in the artifact viewer.

Worth noting for anyone using this as a reference: the skill's own design guidance explicitly warns against what it calls "AI slop" — excessive centered layouts, purple gradients, uniform rounded corners, and defaulting to Inter font — a useful reminder that a working skill is not the same thing as a well-designed one.
