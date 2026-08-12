---
name: C++ Skill
tagline: Modern C++17/20 guidelines covering RAII, smart-pointer ownership, naming conventions, and performance-conscious style.
categories:
  - full-stack-coding
runtime: []
envVars: []
clients:
  - claude-code-cli
  - other
sourceUrl: "https://github.com/Mindrally/skills/tree/main/cpp"
homepageUrl: "https://github.com/Mindrally/skills"
verification: community
pricing: free
license: Apache-2.0
author: Mindrally
featured: false
githubStars: 224
addedDate: 2026-08-12
---

This skill encodes the conventions that separate idiomatic modern C++ from code that merely compiles: `std::unique_ptr` for exclusive ownership, `std::shared_ptr` reserved for genuinely shared cases, `std::weak_ptr` to break reference cycles, and RAII applied consistently so resource cleanup happens through destructors rather than manual, exception-unsafe teardown. Naming conventions are spelled out explicitly too — PascalCase for types, camelCase for functions and variables, SCREAMING_SNAKE_CASE for constants — the kind of project-wide consistency detail that's easy for an agent to get subtly wrong without a reference.

It targets C++17/20 specifically, so guidance reflects the standard library and language features actually available in that range rather than older pre-C++11 patterns or aspirational C++23 features not yet widely supported. Coverage extends beyond memory management into structure — Single Responsibility Principle, composition over inheritance, and keeping functions small and focused.

Part of the Mindrally skills collection, a 240+ skill set converted from Cursor rules into Claude Code's `SKILL.md` format spanning most major languages and frameworks; the C++ skill lives at `cpp/SKILL.md` in that repository and can be copied individually into a project's `.claude/skills/` directory.
