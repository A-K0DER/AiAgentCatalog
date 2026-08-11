export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What are AI agent skills?",
    answer:
      "AI agent skills are packaged instructions, scripts, and resources that an AI agent like Claude loads on demand to perform a specific task well — for example editing a spreadsheet, generating a PDF, or reviewing code. They extend what an agent can do beyond its base model, without retraining it.",
  },
  {
    question: "How do agent skills work?",
    answer:
      "Each skill ships as a folder with a short description, a set of instructions, and optional scripts or reference files. The agent scans the available skills' descriptions, decides which one is relevant to the current task, and only then loads its full instructions into context — so skills stay cheap to have installed and expensive only when actually used.",
  },
  {
    question: "What are the common types and categories of agent skills?",
    answer:
      "Skills are usually grouped by the job they do rather than by vendor: web scraping, database administration, DevOps and CI/CD, browser automation, search and research, full-stack coding, documents and files, communication, data and analytics, and productivity or memory tooling. SkillForAgents uses this same use-case taxonomy so you can browse by task instead of by name.",
  },
  {
    question: "What are the best AI skills for agents?",
    answer:
      "There isn't a single best skill — a skill for generating polished PDFs isn't useful for a database migration task. Instead, look for skills that are actively maintained, clearly document their required environment variables and runtime, and are verified against their source repository, which is exactly what every listing on SkillForAgents shows before you install anything.",
  },
  {
    question: "What is an MCP server?",
    answer:
      "An MCP (Model Context Protocol) server is a standard interface that connects an AI agent to a real system — a database, a browser, a search API, or a file system — so the agent can take real actions instead of only generating text.",
  },
  {
    question: "What's the difference between an AI agent skill and an MCP server?",
    answer:
      "A skill is a set of instructions and resources an agent loads into its own context to perform a task. An MCP server is a live connection to an external system — a database, browser, or API — that the agent calls out to and gets real results back from. Skills teach an agent how to do something; MCP servers give it something new to act on.",
  },
  {
    question: "Can I generate a config file for the MCP servers I want to use?",
    answer:
      "Yes. Add servers to your stack from any MCP listing, then open the Export Your MCP Stack page to get a ready-to-paste mcpServers JSON block for Claude Desktop, Cursor, Cline, or Windsurf, built from each server's real install command and prompting you for any required environment variables. Everything stays in your browser — nothing is saved or sent anywhere.",
  },
  {
    question: "Is SkillForAgents free to use?",
    answer:
      "Yes. Browsing the AI agent skills directory and MCP server directory is free, and every listing links to its original source so you can install it directly.",
  },
  {
    question: "How do I submit a skill or MCP server to the directory?",
    answer:
      "Submissions go through a public GitHub issue template linked from the Submit page — no account required. You fill in a structured form covering the runtime, required environment variables, and client compatibility, and it's reviewed before being added to the catalog.",
  },
  {
    question: "What is AI Claude used for?",
    answer:
      "Claude is Anthropic's family of AI models, used for tasks like writing and editing, coding and debugging, research and summarization, and data analysis — and, through Claude Code and Claude Agent Skills, for autonomous multi-step work like running scripts, browsing the web, and operating on files directly.",
  },
  {
    question: "Is Claude AI free to use?",
    answer:
      "Claude offers a free tier with usage limits at claude.ai, alongside paid Pro, Max, Team, and Enterprise plans for higher usage and additional features. Developers can also access Claude models through the Claude API on a pay-per-token basis.",
  },
  {
    question: "Is Claude AI better than ChatGPT?",
    answer:
      "Neither is universally better — they're built by different companies on different models and each has areas it's stronger in. Claude is often favored for coding, long-context reasoning, and following detailed instructions, while ChatGPT has a larger plugin and app ecosystem. The right choice depends on the task, not a blanket ranking.",
  },
  {
    question: "Why is Claude controversial?",
    answer:
      "Discussion around Claude — like most frontier AI models — tends to center on a few recurring topics: how training data was sourced, the computational cost of running large models, concerns about AI automating knowledge work, and ongoing debate over how much autonomy AI agents should be given to take real-world actions. These are industry-wide questions, not issues unique to Claude.",
  },
  {
    question: "What exactly does Cursor do?",
    answer:
      "Cursor is an AI-powered code editor, built on top of VS Code, that integrates AI chat, inline code generation, and agentic multi-file editing directly into the development workflow. It can read your codebase, propose and apply multi-file changes, and connect to MCP servers to pull in external context like databases or documentation.",
  },
  {
    question: "Is Cursor better than ChatGPT?",
    answer:
      "They're not really direct competitors — Cursor is a code editor with AI built in, while ChatGPT is a general-purpose conversational assistant. Many developers use both: a chat assistant like ChatGPT or Claude for broader research and reasoning, and Cursor for the in-editor loop of writing, running, and fixing code.",
  },
  {
    question: "What exactly is ChatGPT used for?",
    answer:
      "ChatGPT is OpenAI's conversational AI product, used for writing, answering questions, coding help, research, and image generation — and, through its agent and tool-calling features, for automating multi-step tasks that call out to external tools.",
  },
  {
    question: "What is Gemini used for?",
    answer:
      "Gemini is Google's family of AI models, available through the Gemini app, Google AI Studio, and integrated into Google Workspace and Search. It's used for writing, coding, research, and multimodal tasks like reasoning over images and video, and — through Gemini CLI and Google's Agent tooling — for agentic workflows that call out to external tools and APIs.",
  },
  {
    question: "What does GitHub Copilot do?",
    answer:
      "GitHub Copilot is an AI pair programmer that plugs into editors like VS Code, JetBrains IDEs, and Neovim, offering inline code completion, chat-based editing, and an agent mode that can plan and execute multi-file changes. It can also connect to MCP servers so it can pull in context from outside your codebase, similar to Cursor and Claude Code.",
  },
  {
    question: "What's the difference between Windsurf and Cursor?",
    answer:
      "Both are AI-native code editors built on the same general idea — chat, inline generation, and multi-file agentic edits — and both support MCP servers. Windsurf is built by Codeium and leans on its own Cascade agent flow with a built-in memory system, while Cursor is built on VS Code and has a larger existing extension ecosystem. Day-to-day workflow feel is the main differentiator, not raw capability.",
  },
  {
    question: "What is Cline?",
    answer:
      "Cline is an open-source, autonomous coding agent that runs as a VS Code extension. It can read a codebase, plan a multi-step change, edit files, and run terminal commands with your approval at each step, and it connects to MCP servers for extra capabilities like browsing or database access — making it a free, self-hosted alternative to editor-bundled agents like Cursor or Copilot.",
  },
  {
    question: "What's the difference between AI and GPT?",
    answer:
      "AI (artificial intelligence) is the broad field of building systems that perform tasks normally requiring human intelligence. GPT (Generative Pre-trained Transformer) is one specific model architecture within that field — the large language model family behind ChatGPT — and it's one implementation among several approaches, alongside model families like Claude, Gemini, and Llama.",
  },
  {
    question: "What does \"agentic\" mean in AI agents?",
    answer:
      "\"Agentic\" describes an AI system that can plan and take a sequence of actions toward a goal — calling tools, running code, browsing the web — rather than just returning a single text response. Agent skills and MCP servers are the two main ways agentic systems like Claude Code gain new capabilities.",
  },
  {
    question: "Which AI agents support Claude Agent Skills?",
    answer:
      "Claude Agent Skills work in Claude.ai, Claude Code, and API-based agents built with the Claude Agent SDK. Check each listing on SkillForAgents for its documented client compatibility before installing.",
  },
];
