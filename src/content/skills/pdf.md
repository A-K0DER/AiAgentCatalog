---
name: PDF
tagline: Read, merge, split, watermark, fill forms, and OCR PDF files.
categories:
  - documents-files
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/pdf"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Source-available — see repository LICENSE"
author: Anthropic
featured: true
githubStars: 167407
addedDate: 2026-06-20
---

The PDF skill packages up the Python libraries and command-line tools needed to work with PDF files into a single, reliable skill: reading and extracting text or tables, merging or splitting documents, rotating pages, adding watermarks, filling in form fields, encrypting or decrypting files, pulling out embedded images, and running OCR on scanned pages to make them searchable.

It's triggered automatically whenever a `.pdf` file shows up in a conversation, either as something the user wants read or something they want produced — no need to explicitly ask for "the PDF skill." Under the hood it favors `pypdf` for most operations, with a dedicated reference for form-filling and additional guidance for anything that needs JavaScript-based PDF libraries instead.

This is one of Anthropic's official document skills, published as source-available (not open source) reference implementations of the same document capabilities that ship in Claude itself — useful both as a working skill and as a template for how Anthropic structures a production-quality Agent Skill.
