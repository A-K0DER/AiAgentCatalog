---
name: Frontend Design
tagline: Design direction for interfaces that read as deliberate rather than templated — palette, typography, and layout with a point of view.
categories:
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/frontend-design"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: true
githubStars: 167407
addedDate: 2026-08-01
---

Most default LLM-generated UI looks the same: a blue gradient hero, rounded cards, Inter font, and a lot of unearned whitespace. Frontend Design is the corrective — a set of opinions about palette selection, type pairing, spacing rhythm, and layout structure that pushes an agent toward a specific, considered look instead of the generic one every model reaches for by default.

The skill works by front-loading design decisions before implementation starts: pick a constrained color system, commit to a type scale, choose a layout grid, and only then start writing markup. That ordering matters more than any individual rule — it's the difference between a page that looks chosen and one that looks assembled.

It pairs naturally with Web Artifacts Builder for anything shipping as a self-contained HTML artifact, and with any framework-specific coding skill for a full application — this skill owns the taste, not the implementation.
