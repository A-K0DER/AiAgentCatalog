---
name: TDD
tagline: The red-green loop plus the rules that make its tests worth keeping — what to test, where tests belong, which patterns to avoid.
categories:
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/mattpocock/skills/tree/main/skills/tdd"
homepageUrl: "https://github.com/mattpocock/skills"
verification: community
pricing: free
license: "See repository LICENSE"
author: Matt Pocock
featured: true
githubStars: 212381
addedDate: 2026-08-05
---

TDD encodes the red-green-refactor loop as an actual workflow constraint rather than a principle an agent nods at and ignores: write a failing test first, confirm it fails for the right reason, write the minimum code to pass it, then refactor — in that order, every time, without skipping ahead to the implementation because it seems obvious.

The more useful part is everything TDD-as-a-slogan usually leaves out: which behaviors are worth a test versus which are implementation detail, where tests should physically live in a project, and specific anti-patterns to avoid — brittle tests coupled to internals, tests that pass regardless of correctness, and test files that balloon in scope instead of staying focused on one unit of behavior.

Part of a larger set of engineering-discipline skills from the same author — pairs naturally with a triage or planning skill upstream and a code-quality review skill downstream.
