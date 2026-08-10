---
name: Memory
tagline: A local knowledge-graph store that gives an agent persistent memory across sessions.
categories:
  - productivity-memory
runtime:
  - npx
  - docker
envVars:
  - name: MEMORY_FILE_PATH
    required: false
    description: "Custom path for the memory.jsonl storage file. Defaults to memory.jsonl inside the server's own directory."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
installCommand: "npx -y @modelcontextprotocol/server-memory"
sourceUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory"
homepageUrl: "https://modelcontextprotocol.io"
verification: verified
pricing: free
license: MIT
author: "Anthropic / Model Context Protocol"
featured: true
addedDate: 2026-06-01
---

By default, an agent forgets everything the moment a conversation ends. The Memory server fixes that for a narrow, useful slice of information: it stores entities, their observations, and the relations between them as a simple local knowledge graph, persisted to a JSONL file on disk.

Across sessions, an agent can create entities for people, projects, or preferences it's learned about, attach observations to them over time, and query the graph back out when relevant context resurfaces later. Because storage is just a JSONL file, it's easy to inspect, back up, version, or reset — set `MEMORY_FILE_PATH` to point it somewhere durable if you don't want memory tied to the server's install location.

This is a good fit for personal-assistant-style agents, long-running project agents, or anywhere you want continuity without standing up a real database. It is not a substitute for a vector store or full RAG pipeline — the graph is small, structured, and meant for facts an agent should just *remember*, not for retrieving over a large document corpus.
