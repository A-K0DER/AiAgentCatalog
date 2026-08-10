export interface Category {
  slug: string;
  label: string;
  description: string;
  blurb: string;
  icon: string;
}

export const CATEGORIES = [
  {
    slug: "web-scraping",
    label: "Web Scraping",
    description:
      "Extract structured data from web pages — crawling, HTML parsing, and content extraction at scale.",
    blurb: "For agents that need to pull data off the open web.",
    icon: "globe",
  },
  {
    slug: "database-administration",
    label: "Database Administration",
    description:
      "Query, migrate, and manage relational and document databases directly from an agent session.",
    blurb: "For agents that read and write production data safely.",
    icon: "database",
  },
  {
    slug: "devops-cicd",
    label: "DevOps & CI/CD",
    description:
      "Manage repositories, pipelines, deployments, and infrastructure as part of an agent workflow.",
    blurb: "For agents that ship and operate software.",
    icon: "workflow",
  },
  {
    slug: "browser-automation",
    label: "Browser Automation",
    description:
      "Drive a real browser — click, fill forms, navigate, and take screenshots programmatically.",
    blurb: "For agents that need to act inside a live browser.",
    icon: "browser",
  },
  {
    slug: "search-research",
    label: "Search & Research",
    description:
      "Query search engines and knowledge sources to ground agent responses in current information.",
    blurb: "For agents that need answers beyond their training data.",
    icon: "search",
  },
  {
    slug: "full-stack-coding",
    label: "Full-Stack Coding",
    description:
      "Read, write, and refactor code across a project — file operations, execution, and tooling.",
    blurb: "For agents doing hands-on software engineering.",
    icon: "code",
  },
  {
    slug: "documents-files",
    label: "Documents & Files",
    description:
      "Create and edit PDFs, spreadsheets, presentations, and other office documents.",
    blurb: "For agents that produce real deliverables, not just text.",
    icon: "file-text",
  },
  {
    slug: "communication",
    label: "Communication",
    description:
      "Send and read messages across chat, email, and collaboration tools.",
    blurb: "For agents that keep humans and teams in the loop.",
    icon: "message-circle",
  },
  {
    slug: "data-analytics",
    label: "Data & Analytics",
    description:
      "Analyze datasets, run computations, and generate charts and reports.",
    blurb: "For agents that turn raw data into insight.",
    icon: "bar-chart",
  },
  {
    slug: "productivity-memory",
    label: "Productivity & Memory",
    description:
      "Persist context across sessions and coordinate multi-step reasoning and planning.",
    blurb: "For agents that need to remember and stay organized.",
    icon: "brain",
  },
] as const satisfies readonly Category[];

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
