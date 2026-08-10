---
name: Algorithmic Art
tagline: Generates generative and algorithmic art — procedural patterns, flow fields, and parametric designs.
categories:
  - documents-files
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/algorithmic-art"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-08-01
---

Algorithmic Art is for the specific case where the deliverable is a piece of generative art rather than an image in the illustrative sense — flow fields, particle systems, tiling patterns, parametric curves, the kind of visual output that comes from a small set of rules run many times rather than from describing a scene.

Because the output is code (typically rendered to SVG or canvas), the result is inherently tweakable: change a seed, a parameter range, or a color function, and get a related but distinct piece rather than an unrelated regeneration. That reproducibility is the actual point of working algorithmically instead of prompting an image model.

It sits next to Canvas Design in the catalog but solves a narrower problem — Canvas Design is for composed graphics with deliberate layout, this is for output defined by a generative process.
