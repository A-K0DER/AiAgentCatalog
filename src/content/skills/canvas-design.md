---
name: Canvas Design
tagline: Generates original static graphics — posters, icons, diagrams — as SVG or HTML5 canvas output.
categories:
  - documents-files
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/canvas-design"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-08-01
---

Canvas Design covers the gap between "generate an image" (which usually means calling out to a diffusion model) and actually drawing something programmatically — composing shapes, paths, gradients, and text directly as SVG or canvas markup. That distinction matters for anything that needs to stay editable, scale cleanly, or match an exact brand palette, none of which raster generation guarantees.

The skill is deliberately about compositional fundamentals — layout, contrast, visual hierarchy, spacing — rather than a fixed style. It's equally usable for a minimal line-art icon set and a dense infographic poster, because the underlying reasoning about where things go on a canvas doesn't change.

It's a natural pairing with Brand Guidelines when the output needs to match an existing visual identity, or with Web Artifacts Builder when the graphic is one piece of a larger page.
