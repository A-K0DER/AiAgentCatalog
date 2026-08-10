---
name: Sequential Thinking
tagline: A structured, revisable step-by-step reasoning tool for working through complex problems.
categories:
  - productivity-memory
runtime:
  - npx
  - docker
envVars:
  - name: DISABLE_THOUGHT_LOGGING
    required: false
    description: "Set to true to suppress logging of intermediate thought steps."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
installCommand: "npx -y @modelcontextprotocol/server-sequential-thinking"
sourceUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking"
homepageUrl: "https://modelcontextprotocol.io"
verification: verified
pricing: free
license: MIT
author: "Anthropic / Model Context Protocol"
featured: false
officialHosted: true
githubStars: 89404
addedDate: 2026-06-05
---

Sequential Thinking gives an agent a dedicated tool for externalizing multi-step reasoning instead of trying to hold an entire plan in one pass. Each call records a discrete "thought," and the tool supports revising an earlier thought, branching into an alternative line of reasoning, and expanding the total number of steps mid-task as the scope of a problem becomes clearer.

It's most useful on problems where the right approach genuinely isn't obvious at the start — debugging something with several plausible causes, designing an approach before writing code, or working through a task that may need course-correction partway through. Rather than committing to a single linear chain of thought, the agent can mark a step as a revision of an earlier one or fork into a new branch, which keeps the reasoning trace honest about where it changed direction.

There's no external state to configure — the only setting is whether intermediate thoughts are logged, which you can disable in environments where you don't want that trace persisted.
