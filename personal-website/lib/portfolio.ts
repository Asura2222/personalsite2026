import {
  projectContributions,
  type ContributionArea,
} from "@/lib/project-contributions";

export const skills = [
  "All work",
  "Technical",
  "Product",
  "Operations",
  "Marketing",
  "Creative",
  "Speaking & Events",
] as const;
export type Skill = (typeof skills)[number];

interface ProjectSeed {
  slug: string;
  title: string;
  category: string;
  summary: string;
  outcome: string;
  role: string;
  period: string;
  skills: Skill[];
  tools: string[];
  intro: string;
  contribution: string;
  challenge: string;
  decisions: { title: string; description: string }[];
  links: { label: string; href: string }[];
  accent: "purple" | "blue" | "green" | "yellow";
}

const projectSeeds: ProjectSeed[] = [
  {
    slug: "talentos",
    title: "TalentOS",
    category: "AI product · Current focus",
    summary:
      "A multiplayer AI workspace where people and their agents work together.",
    outcome: "$120K raised from angel investors",
    role: "Co-founder & CEO · Product & engineering",
    period: "2025 — Present",
    skills: ["Technical", "Product", "Marketing"],
    tools: [
      "TypeScript",
      "Next.js",
      "React",
      "Convex",
      "MCP",
      "Clerk",
      "Stripe",
    ],
    intro:
      "TalentOS brings people and AI agents into shared Rooms with common context, files, and memory. Each agent acts for an individual owner. We raised $120K, with angels from Google, Meta, Samsung, and AGI House.",
    contribution:
      "Built the product end to end: the React/Next.js interface, Convex collaboration backend, MCP and CLI agent integrations, and the harness for tool execution, memory, and human approvals.",
    challenge:
      "Coordinate agents acting for different people without leaking private context, replaying actions, or overwriting shared work.",
    decisions: [
      {
        title: "Multi-agent interoperability",
        description:
          "A hosted MCP surface and CLI adapters connect external agents to the same Rooms, files, and tool registry.",
      },
      {
        title: "Governed tool execution",
        description:
          "Requests resolve to an authenticated owner and organization. Tool permissions and human approval gates are enforced by the execution system.",
      },
      {
        title: "Scoped, persistent context",
        description:
          "Personal and shared memory stay separate. Context refresh and reply reconciliation account for conversation changes while an agent works.",
      },
      {
        title: "Versioned shared outputs",
        description:
          "Owned document and presentation versions, change proposals, and stale-version checks protect shared work during concurrent edits.",
      },
    ],
    links: [
      { label: "Explore TalentOS", href: "https://talentos.so/" },
      { label: "The company story", href: "https://talentos.so/about" },
    ],
    accent: "purple",
  },
  {
    slug: "ai-career-product",
    title: "An AI career product",
    category: "Earlier TalentOS product",
    summary:
      "Built and grew TalentOS's first AI career product to 15,000 users and $200K ARR.",
    outcome: "15,000 users · $200K ARR",
    role: "Co-founder · Product & growth",
    period: "Earlier chapter",
    skills: ["Technical", "Product", "Marketing"],
    tools: ["AI products", "Product development", "Distribution"],
    intro:
      "TalentOS began as an AI career product, reaching 15,000 users and $200K ARR. Work with companies led us toward the current shared AI workspace.",
    contribution:
      "Built the product and led distribution, growing it to 15,000 users and $200K ARR.",
    challenge:
      "Develop the product and distribution together, then use customer learning to decide what to build next.",
    decisions: [
      {
        title: "Build, learn, and change direction",
        description:
          "Company conversations exposed the gap between individual AI use and team collaboration, shaping the next TalentOS product.",
      },
    ],
    links: [
      {
        label: "Read the TalentOS origin story",
        href: "https://talentos.so/about",
      },
    ],
    accent: "blue",
  },
  {
    slug: "personal-ai-assistant",
    title: "Personal AI assistant",
    category: "Independent AI project",
    summary:
      "Built a personal AI assistant around an agent harness, alongside my work on TalentOS.",
    outcome: "An assistant with its own harness",
    role: "Builder · Agent harness",
    period: "Independent project",
    skills: ["Technical", "Product"],
    tools: ["AI agents", "Agent harness"],
    intro:
      "A personal AI assistant with a custom agent harness for carrying out work beyond a chat response.",
    contribution: "I built the assistant and its agent harness.",
    challenge:
      "Turn model responses into reliable task execution through the surrounding harness.",
    decisions: [],
    links: [
      {
        label: "Ask me about the assistant",
        href: "mailto:win@talentos.so",
      },
    ],
    accent: "purple",
  },
  {
    slug: "frontier-tower",
    title: "Frontier Tower · Human Flourishing Floor",
    category: "Community leadership & growth",
    summary:
      "Co-led the Human Flourishing Floor and helped grow membership from 120 to 600+.",
    outcome: "120 → 600+ members",
    role: "Co-lead · Part-time",
    period: "2025 — 2026",
    skills: ["Operations", "Marketing", "Speaking & Events"],
    tools: [
      "Community growth",
      "Member engagement",
      "Event production",
      "Programming",
    ],
    intro:
      "A San Francisco community at Frontier Tower exploring human flourishing, AI alignment, and regenerative economics.",
    contribution:
      "Co-led the Human Flourishing Floor, helped grow membership from 120 to 600+, and shaped its programming and gatherings.",
    challenge:
      "Grow the community while maintaining thoughtful programming and member engagement.",
    decisions: [
      {
        title: "Connect people across disciplines",
        description:
          "Hosted conversations with leaders from OpenAI, Anthropic, Burning Man, and the wider community about AI alignment, regenerative economics, and human flourishing.",
      },
    ],
    links: [
      {
        label: "My co-lead announcement",
        href: "https://www.linkedin.com/posts/james-win_i-officially-became-a-co-lead-of-the-human-activity-7372417919814889472-dzBf",
      },
      { label: "Frontier Tower website", href: "https://frontiertower.io/" },
      { label: "My hosted events", href: "https://luma.com/user/win22" },
    ],
    accent: "blue",
  },
  {
    slug: "build-myanmar-media",
    title: "Build Myanmar · Media",
    category: "Media & distribution",
    summary:
      "Founded a technology media brand, grew it to 450K+ followers, and scaled the organization to a team of 30.",
    outcome: "450K+ followers · Team of 30",
    role: "Founder & CEO",
    period: "2023 — 2025",
    skills: ["Marketing", "Operations", "Creative"],
    tools: [
      "Content strategy",
      "Video production",
      "Podcasts",
      "Organic distribution",
      "Audience development",
    ],
    intro:
      "Build Myanmar covers technology and entrepreneurship through documentaries, podcasts, and shows across Facebook, TikTok, and YouTube.",
    contribution:
      "Founded the brand, led editorial and distribution, and built a team of 30. Grew the channels to 230K+ on Facebook, 140K+ on TikTok, and 91K+ on YouTube.",
    challenge:
      "Run editorial, production, and distribution across three platforms while scaling the team.",
    decisions: [
      {
        title: "Organic growth through focused content",
        description:
          "Reached 10K YouTube subscribers with 17 videos in the first three months. Focused guests, tighter formats, and evergreen topics drove the early growth.",
      },
    ],
    links: [
      {
        label: "Build Myanmar Media",
        href: "https://www.buildmyanmarmedia.com/",
      },
      {
        label: "Build Myanmar on YouTube",
        href: "https://www.youtube.com/@BuildMyanmarMedia",
      },
      {
        label: "How the channel reached 10K subscribers",
        href: "https://monkeynews.substack.com/p/how-build-myanmar-channel-got-10k",
      },
      {
        label: "Watch a Build Myanmar video",
        href: "https://www.youtube.com/watch?v=98M74xzlDb8",
      },
    ],
    accent: "green",
  },
  {
    slug: "build-myanmar-spaces",
    title: "Build Myanmar · Community & spaces",
    category: "Community & operations",
    summary:
      "Grew a community of 5,000+ builders and opened two physical spaces in Yangon.",
    outcome: "5,000+ members · 2 spaces",
    role: "Founder",
    period: "2023 — 2025",
    skills: ["Operations", "Marketing"],
    tools: ["Community building", "Operations", "Physical spaces"],
    intro:
      "A community of 5,000+ builders, creators, and entrepreneurs, with two physical spaces in Yangon.",
    contribution:
      "Founded the community and led the launch of both physical spaces.",
    challenge:
      "Turn an online community into two operating spaces where builders can meet and work.",
    decisions: [
      {
        title: "Give the community a physical home",
        description:
          "Opened two locations to give the digital community a physical home in Yangon.",
      },
    ],
    links: [
      {
        label: "See Build Myanmar",
        href: "https://www.youtube.com/watch?v=98M74xzlDb8",
      },
    ],
    accent: "green",
  },
  {
    slug: "the-glitch-network",
    title: "How to Become a Glitch",
    category: "Book · The Glitch Network",
    summary:
      "Authored an interactive book with five-star reader reviews on Amazon, bringing storytelling, digital collectibles, and animation together.",
    outcome: "Published · Five-star reader reviews",
    role: "Author · Head of development",
    period: "2023",
    skills: ["Technical", "Product", "Creative"],
    tools: [
      "Writing",
      "Interactive storytelling",
      "Blockchain",
      "Creative direction",
    ],
    intro:
      "How to Become a Glitch combines a book with digital collectibles and animation as part of The Glitch Network.",
    contribution:
      "Authored the book and led development of the interactive reading and membership experience.",
    challenge:
      "Connect narrative, digital ownership, and reader participation in one experience.",
    decisions: [
      {
        title: "Connect the narrative to participation",
        description:
          "Collectible chapters and a membership model connect the written story to participation.",
      },
    ],
    links: [
      {
        label: "Read the book & reviews on Amazon",
        href: "https://www.amazon.com/How-Become-Glitch-369-Labs/dp/B0CR9GNDJN",
      },
      {
        label: "See the original announcement",
        href: "https://x.com/_glitchnetwork_/status/1770151551694201258",
      },
    ],
    accent: "yellow",
  },
  {
    slug: "events-and-salons",
    title: "Speaking & events",
    category: "People & ideas",
    summary:
      "Spoke at SF Tech Week and hosted or co-hosted 95 events listed on Luma, including gatherings at Frontier Tower.",
    outcome: "SF Tech Week · 95 hosted events",
    role: "Speaker · Host · Co-host",
    period: "2024 — 2026",
    skills: ["Speaking & Events", "Operations", "Creative"],
    tools: ["Event production", "Community leadership", "Curation"],
    intro:
      "Talks, founder conversations, AI workshops, and community gatherings, including the Human Flourishing Floor at Frontier Tower.",
    contribution:
      "Spoke at SF Tech Week and co-hosted TalentOS AI sessions. My Luma profile records 95 hosted or co-hosted events.",
    challenge:
      "Bring the right speakers and audience together, then deliver useful programming consistently.",
    decisions: [
      {
        title: "Technical and founder programming",
        description:
          "AI engineering webinars, founder working sessions, and community salons connect practical building with broader conversations about human flourishing.",
      },
    ],
    links: [
      { label: "My hosted events", href: "https://luma.com/user/win22" },
      {
        label: "SF Tech Week speaker listing",
        href: "https://www.tech-week.com/calendar/sf/events/the-startup-journey-fireside-chat-3cde8a56-71fa-41c3-9c39-a20f9efa772f",
      },
    ],
    accent: "blue",
  },
];

export interface PortfolioProject extends ProjectSeed {
  areas: ContributionArea[];
  results: { value: string; label: string }[];
  distinctive: string;
  highlights: string[];
  searchAliases: string[];
  story: string;
  team?: string;
  contributionHeading: string;
  credit?: string;
}

export const portfolioProjects: PortfolioProject[] = projectContributions.map(
  (contribution) => {
    const source = projectSeeds.find(
      (project) =>
        project.slug === (contribution.sourceSlug ?? contribution.slug),
    )!;
    return {
      ...source,
      slug: contribution.slug,
      title: contribution.displayTitle ?? source.title,
      summary: contribution.lede ?? source.summary,
      role: contribution.role ?? source.role,
      outcome: contribution.resultSummary ?? source.outcome,
      contribution: contribution.ownership,
      areas: contribution.areas,
      results: contribution.results,
      distinctive: contribution.distinctive ?? "",
      highlights: contribution.highlights ?? [],
      searchAliases: contribution.searchAliases ?? [],
      story: contribution.story ?? source.summary,
      team: contribution.team,
      contributionHeading:
        contribution.contributionHeading ?? "My contributions",
      credit: contribution.credit,
      links: contribution.links ?? source.links,
      tools: [...new Set(contribution.areas.flatMap((area) => area.skills))],
      skills:
        contribution.slug === "community-and-speaking"
          ? [...new Set<Skill>([...source.skills, "Marketing"])]
          : source.skills,
    };
  },
);

export const portfolioAliases: Record<
  string,
  { slug: string; anchor?: string }
> = {
  "ai-career-product": { slug: "talentos", anchor: "career-product" },
  "personal-ai-assistant": { slug: "talentos", anchor: "agent-harness" },
  "build-myanmar-media": { slug: "build-myanmar" },
  "build-myanmar-spaces": { slug: "build-myanmar", anchor: "community-spaces" },
  "frontier-tower": {
    slug: "community-and-speaking",
    anchor: "frontier-tower",
  },
  "events-and-salons": { slug: "community-and-speaking" },
};

export function getPortfolioProject(slug: string) {
  const canonicalSlug = portfolioAliases[slug]?.slug ?? slug;
  return portfolioProjects.find((project) => project.slug === canonicalSlug);
}

export function projectHref(slug: string) {
  const target = portfolioAliases[slug];
  return target
    ? `/work/${target.slug}${target.anchor ? `#${target.anchor}` : ""}`
    : `/work/${slug}`;
}

export function contributionAreaId(area: ContributionArea) {
  return (
    area.id ??
    area.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}
