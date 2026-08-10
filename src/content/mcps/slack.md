---
name: Slack
tagline: Read channel history and post messages to Slack from an agent workflow.
categories:
  - communication
runtime:
  - npx
  - docker
envVars:
  - name: SLACK_BOT_TOKEN
    required: true
    description: "Bot User OAuth Token, starting with xoxb-."
  - name: SLACK_TEAM_ID
    required: true
    description: "Your Slack workspace ID, starting with T."
  - name: SLACK_CHANNEL_IDS
    required: false
    description: "Comma-separated channel IDs to restrict access to. Omit to allow all public channels."
clients:
  - claude-desktop
  - claude-code-cli
  - cursor
  - windsurf
installCommand: "npx -y @modelcontextprotocol/server-slack"
sourceUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack"
homepageUrl: "https://api.slack.com/apps"
verification: community
pricing: free
license: MIT
author: "Anthropic / Model Context Protocol (archived reference server)"
featured: false
githubStars: 293
addedDate: 2026-04-10
---

The Slack server lets an agent read channel history and post messages into a workspace, which is enough to build agents that summarize discussion threads, draft responses for a human to send, or post automated status updates into a channel your team already watches.

Setup takes more steps than most servers on this list: create a Slack app, grant it the `channels:history`, `channels:read`, `chat:write`, `reactions:write`, `users:read`, and `users.profile:read` OAuth scopes, install it to your workspace, then retrieve the bot token and team ID from Slack's API dashboard. `SLACK_CHANNEL_IDS` is optional and worth setting deliberately in most deployments — without it, the bot can see every public channel it's been added to, which is rarely what you actually want for an agent-facing integration.

As with the other former reference servers in this catalog, this one now lives in the archived `servers-archived` repository rather than the actively maintained main repo — still functional, but listed here as **Community** verification rather than **Verified**.
