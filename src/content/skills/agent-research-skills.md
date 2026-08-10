---
name: Agent Research Skills
tagline: 31 skills covering the full academic research lifecycle, from literature search through paper writing and slide generation.
categories:
  - search-research
runtime: []
envVars: []
clients:
  - claude-code-cli
  - other
sourceUrl: "https://github.com/lingzhi227/agent-research-skills"
homepageUrl: "https://github.com/lingzhi227/agent-research-skills"
verification: community
pricing: free
license: "No license file in the repository"
author: lingzhi227
featured: false
githubStars: 266
addedDate: 2026-08-11
---

This collection runs the full academic research pipeline as a chain of skills rather than one monolithic prompt: discovery and planning (literature search, GitHub repo search, novelty assessment), method design (algorithm development, mathematical reasoning), an experiment pipeline (design, code generation, debugging, statistical analysis), paper writing, figures and citation management, and a final review-and-polish stage that includes self-review and slide generation. Roughly 40 supporting Python scripts back the skills that need to actually execute something — PDF parsing, statistical tests, LaTeX compilation — rather than just offer guidance.

Semantic Scholar API integration strengthens the literature-discovery phase specifically, and optional dependencies (PyMuPDF for PDF extraction, NumPy/SciPy for statistics) extend individual skills without being required for the collection as a whole. Skills can be triggered through slash commands (`/research topic`), plain natural-language requests, or by invoking the underlying Python scripts directly with CLI arguments for users who want more control over a specific stage.

Install with `npx skills add lingzhi227/agent-research-skills -g -a claude-code`; Python 3 is the only hard requirement, with the automation script and CLI arguments falling back gracefully when the optional PDF and statistics libraries aren't installed.
