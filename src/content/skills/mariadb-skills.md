---
name: MariaDB Skills
tagline: Short, topic-specific briefings that correct what coding agents typically get wrong about MariaDB versus MySQL.
categories:
  - database-administration
runtime: []
envVars: []
clients:
  - claude-code-cli
  - other
sourceUrl: "https://github.com/MariaDB/skills"
homepageUrl: "https://github.com/MariaDB/skills"
verification: verified
pricing: free
license: MIT
author: MariaDB
featured: false
githubStars: 11
addedDate: 2026-08-11
---

MariaDB's own team maintains this set of eight focused SKILL.md briefings, built specifically to close the gap between what a coding agent assumes about MySQL and what's actually true of MariaDB. `mysql-to-mariadb` and `oracle-to-mariadb` handle migration-specific pitfalls, `mariadb-features` covers capabilities without a MySQL equivalent (system versioning, Galera clustering), and `mariadb-query-optimization` and `mariadb-replication-and-ha` go deep on diagnosis and high-availability setup respectively.

Two entries stand out for less common use cases: `mariadb-system-versioned-tables` documents the automatic row-history functionality, and `mariadb-vector` covers native vector support for AI-adjacent workloads — a feature an agent trained mostly on MySQL patterns would have no reason to know exists. An eighth skill, `mariadb-mcp`, bridges into Model Context Protocol database connections for agents that want live query access alongside the static guidance.

Installation is a one-liner (`npx skills add mariadb/skills`) or a manual copy of individual `SKILL.md` files into `~/.claude/skills/<skill-name>/`; skills then activate automatically whenever a relevant MariaDB topic comes up, with no explicit invocation required.
