---
name: PPTX
tagline: Build and edit PowerPoint decks, including templates, speaker notes, and slide thumbnails.
categories:
  - documents-files
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/pptx"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Source-available — see repository LICENSE"
author: Anthropic
featured: false
addedDate: 2026-06-20
---

Like the DOCX skill, PPTX treats a `.pptx` file as what it actually is — a ZIP archive of XML — and picks its approach accordingly: new decks get built with `pptxgenjs`, editing an existing deck or working from a `.potx` template means unzipping and editing the relevant `ppt/slides/slideN.xml` files directly, and reading content back out uses `markitdown` to produce one text block per slide, with a separate thumbnail script available when a visual grid of the deck is more useful than raw text.

The skill triggers on any mention of a "deck," "slides," or "presentation," or whenever a `.pptx`/`.potx` filename comes up in conversation — whether the file is being created, read, edited, combined, split, or just referenced as a template. That includes working with layouts, speaker notes, and comments, not just slide content.

It's one of Anthropic's official document skills (source-available, not open source), released as a reference implementation of the presentation capabilities that power Claude's own deck-building features.
