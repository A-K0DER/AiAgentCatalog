---
name: Redis
tagline: Official Redis MCP server — natural-language read/write access to keys, structures, and search indexes.
categories:
  - database-administration
runtime:
  - docker
  - uv
  - python
envVars:
  - name: REDIS_HOST
    required: true
    description: "Hostname of the Redis instance the server should connect to."
  - name: REDIS_PORT
    required: false
    description: "Defaults to 6379 if not set."
  - name: REDIS_PASSWORD
    required: false
    description: "Required only if the target instance has authentication enabled."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
installCommand: "uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server"
sourceUrl: "https://github.com/redis/mcp-redis"
homepageUrl: "https://redis.io/docs/latest/develop/tools/mcp/"
verification: verified
pricing: free
license: "MIT"
author: Redis
featured: false
officialHosted: true
githubStars: 561
addedDate: 2026-08-08
---

Redis's official MCP server exposes the full range of data structures — strings, hashes, lists, sets, sorted sets, streams, and JSON — as agent tools, alongside Redis Search for vector and full-text queries when the module is available, so an agent can inspect and manipulate a live Redis instance the same way a developer would with `redis-cli`, but in natural language.

It's equally useful for two different jobs: operational debugging against a production or staging cache (what's the TTL on this key, why is this counter wrong), and building retrieval features that read or write vector embeddings directly through Redis Search rather than a separate vector database.

Since it runs locally and connects directly to a Redis instance with whatever credentials it's given, treat connection scope the same way you would any direct database credential — point it at a specific instance and database number, not a shared production cluster, unless that's genuinely the intent.
