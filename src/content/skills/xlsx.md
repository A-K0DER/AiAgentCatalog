---
name: XLSX
tagline: Create, edit, and clean spreadsheets — formulas, formatting, charts, and messy data repair.
categories:
  - documents-files
  - data-analytics
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/xlsx"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Source-available — see repository LICENSE"
author: Anthropic
featured: true
githubStars: 167407
addedDate: 2026-06-20
---

The XLSX skill covers the full lifecycle of a spreadsheet: creating one from scratch with formulas and formatting via `openpyxl`, bulk-loading or exporting data with `pandas`, taking a quick look at a workbook's contents with `markitdown`, or doing a careful two-pass read with `openpyxl` when both the formulas *and* their computed values are needed. It also explicitly covers a task that's easy to underestimate — taking a messy, malformed spreadsheet (misplaced headers, junk rows, inconsistent columns) and restructuring it into something clean.

It triggers whenever a spreadsheet file — `.xlsx`, `.xlsm`, `.xltx`, `.csv`, or `.tsv` — is the primary input or output of the task, including when a user references one casually, like "the xlsx in my downloads." It deliberately steps aside when the real deliverable is a Word document, an HTML report, or a database pipeline, even if tabular data is involved along the way.

`openpyxl`, `pandas`, and `markitdown` are expected to be preinstalled in the skill's execution environment, so the skill's own guidance is to write the script and import directly rather than running `pip install` first — only falling back to an install if an import actually fails.
