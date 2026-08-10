---
name: Web Scraper
tagline: Reconnaissance-first scraping that escalates to browser automation only when a page actually requires it.
categories:
  - web-scraping
runtime: []
envVars: []
clients:
  - claude-code-cli
  - other
sourceUrl: "https://github.com/yfe404/web-scraper"
homepageUrl: "https://github.com/yfe404/web-scraper"
verification: community
pricing: free
license: MIT
author: yfe404
featured: false
githubStars: 80
addedDate: 2026-08-11
---

This skill treats browser automation as a last resort rather than a default. It works through six gated phases: a quick `curl`-based assessment of headers and raw HTML, then — only if that's insufficient — a browser-based reconnaissance pass capturing the rendered DOM and network traffic, a deeper scan that sniffs for underlying APIs, validation that every extraction method actually works, protection testing when a site pushes back, and a final report documenting the strategy with its own gaps called out. Each gate asks "do I have enough yet?" before escalating, which keeps simple scrapes cheap instead of reflexively spinning up a headless browser for every request.

Under the hood it leans on Crawlee (both its lightweight Cheerio-based crawler and its Playwright-based one), Cheerio for DOM parsing, and Playwright itself when interaction or JS rendering is unavoidable. It also recognizes "I'm getting blocked" as a trigger phrase to load anti-blocking strategies, and "make this an Apify Actor" to kick off a TypeScript-first productionization workflow targeting the Apify platform.

The result is closer to a decision procedure than a fixed script — the skill figures out whether sitemaps, an internal API, traffic interception, or straight DOM scraping (or some hybrid) fits the target site, rather than assuming full browser automation is always necessary.
