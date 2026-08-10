---
name: Doc Coauthoring
tagline: Drafts and revises long-form documents collaboratively — tracked structure, not one-shot generation.
categories:
  - documents-files
  - communication
runtime: []
envVars: []
clients:
  - claude-desktop
  - claude-code-cli
  - other
sourceUrl: "https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring"
homepageUrl: "https://github.com/anthropics/skills"
verification: verified
pricing: free
license: "Complete terms in repository LICENSE.txt"
author: Anthropic
featured: false
githubStars: 167407
addedDate: 2026-08-01
---

Doc Coauthoring treats a long document — a spec, a memo, a proposal — as something built up over several passes rather than generated whole in one shot. It keeps an explicit structure (sections, open questions, decisions made so far) so an editing pass can target one part of the document without the agent re-deriving or silently rewriting the rest.

That matters most on documents with real stakes: the kind where a stakeholder will read a specific section closely, where prior decisions need to stay stable across revisions, and where "regenerate the whole thing" produces subtly different phrasing every time even when nothing substantive changed.

It's a better fit than a general writing prompt whenever a document is going to be revised more than once — which, for anything worth writing carefully, is most of them.
