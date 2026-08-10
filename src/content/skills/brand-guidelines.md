---
name: Brand Guidelines
tagline: Applies Anthropic's brand system — colors, type, and voice — to documents and interfaces on request.
categories:
  - documents-files
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/brand-guidelines"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-08-01
---

Brand Guidelines packages a concrete visual identity — a defined color palette, type system, and tone of voice — so that documents, slides, and interfaces produced by an agent come out consistent with each other instead of each one improvising its own look. It's a reference implementation of the pattern more than a tool meant for every team as-is: most organizations will want to fork it and swap in their own palette and voice rules.

What makes it worth studying even if you don't use it directly is the structure — how a brand system gets encoded as instructions an agent can actually apply consistently across a PDF, a slide deck, and a web page, rather than drifting between outputs. That's the harder problem brand guidelines normally run into with generative tools.

Use it directly if you're producing Anthropic-branded material, or use it as the template for building your own team's equivalent skill.
