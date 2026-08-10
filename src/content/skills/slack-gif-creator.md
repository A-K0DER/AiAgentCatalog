---
name: Slack GIF Creator
tagline: Generates small animated GIFs sized and looped correctly for posting directly into Slack.
categories:
  - communication
  - documents-files
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-08-01
---

Slack GIF Creator is a narrow, specific skill: build a short animated GIF — a reaction, a celebratory loop, a simple animated icon — that's actually sized and encoded correctly for Slack, which has its own quirks around file size, frame rate, and looping that a generic "make a GIF" attempt often gets wrong.

It handles the full loop from concept to encoded file: simple procedural animation (not video generation), frame timing, and export settings tuned for how Slack actually renders uploaded GIFs, so the output looks right the first time instead of needing a re-encode.

Small in scope, but the kind of skill that's genuinely faster than doing it by hand once you need more than one of these — and a good example of how narrow a well-triggering skill is allowed to be.
