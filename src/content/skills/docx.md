---
name: DOCX
tagline: Create, edit, and analyze Word documents — headings, tracked changes, and more.
categories:
  - documents-files
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/docx"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Source-available — see repository LICENSE"
author: Anthropic
featured: true
addedDate: 2026-06-20
---

A `.docx` file is just a ZIP archive of XML, and this skill treats it that way: it picks the right approach based on the task rather than forcing everything through one library. Creating a new document from scratch uses a small `docx` (npm) script; editing an existing one means unzipping the archive, editing `word/document.xml` directly, and re-zipping — since JS-based creation libraries generally can't open and modify files that already exist; and reading content out of a document is a one-line `pandoc -t markdown` conversion.

That approach covers the full range of real requests this skill is built to handle: producing polished reports, memos, letters, and templates with proper headings, tables of contents, and page numbers; inserting or replacing images; running find-and-replace across a document; and working with tracked changes and comments in files that already exist.

It's explicitly scoped to Word documents — the skill's own description calls out that it should *not* be used for PDFs, spreadsheets, Google Docs, or general coding tasks, which keeps it from misfiring on adjacent requests that belong to a different skill.
