---
name: Skill Creator
tagline: Create, iterate on, and benchmark new Agent Skills with built-in evals.
categories:
  - productivity-memory
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/skill-creator"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-07-25
---

Skill Creator is a skill for making skills — a meta-tool for the entire category this catalog exists to organize. Its workflow starts with deciding roughly what a new skill should do, drafting it, then writing a handful of test prompts and actually running the draft skill against them to see how it performs, rather than guessing from the prompt text alone.

What sets it apart from just writing a `SKILL.md` by hand is the evaluation loop: it helps draft quantitative evals when none exist (or reuse and adjust ones that do), runs them, and surfaces results through an `eval-viewer` review script so you can look at both the qualitative transcripts and the quantitative metrics side by side. From there the process is genuinely iterative — rewrite based on what the evaluation showed, expand the test set, and repeat until the skill's triggering accuracy and output quality hold up at scale.

If you're building a new MCP server with the MCP Builder skill and want to wrap it in a well-triggering, well-tested Agent Skill afterward — or you're improving one of the skills already listed in this catalog — this is the tool built specifically for that iteration loop.
