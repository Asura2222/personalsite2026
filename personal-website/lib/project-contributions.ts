export interface ContributionArea {
  id?: string;
  group?: string;
  title: string;
  summary: string;
  details: string[];
  skills: string[];
}

export interface ProjectContribution {
  slug: string;
  sourceSlug?: string;
  displayTitle?: string;
  lede?: string;
  role?: string;
  resultSummary?: string;
  links?: { label: string; href: string }[];
  ownership: string;
  results: { value: string; label: string }[];
  areas: ContributionArea[];
  credit?: string;
  distinctive?: string;
  highlights?: string[];
  searchAliases?: string[];
  story?: string;
  team?: string;
  contributionHeading?: string;
}

const contributionDrafts: ProjectContribution[] = [
  {
    slug: "talentos",
    ownership:
      "Built the web product, mobile and desktop apps, agent harness, and execution infrastructure.",
    results: [
      { value: "Web · Mobile · Desktop", label: "Product surfaces" },
      { value: "$120K", label: "Raised from angels" },
    ],
    areas: [
      {
        title: "Web, mobile & desktop apps",
        summary:
          "One shared product, with native capabilities where they matter.",
        details: [
          "Built the Next.js/React workspace and its real-time Convex backend.",
          "Built an Expo/React Native mobile shell with a native bridge for sign-in, deep links, file sharing, push responses, and iOS widget launchers.",
          "Built the Electron desktop shell with browser-based sign-in, native downloads and notifications, and signed-release and auto-update tooling.",
          "Kept one hosted product across the apps, with origin-checked bridges and a sandboxed, context-isolated desktop renderer.",
        ],
        skills: [
          "Next.js",
          "React",
          "Convex",
          "Expo / React Native",
          "Electron",
          "Swift / WidgetKit",
        ],
      },
      {
        title: "Personal AI system & agent harness",
        id: "agent-harness",
        summary: "Turn a request into a tracked, resumable sequence of work.",
        details: [
          "Built the personal assistant's orchestration: tool routing, run state, approvals, and completion receipts.",
          "Integrated an OpenClaw-based runtime and built an AI SDK turn loop with durable checkpoints and recovery across execution sessions.",
          "Added replay protection and ownership checks so a retried action does not silently become a second action.",
        ],
        skills: [
          "Agent engineering",
          "Agent orchestration",
          "OpenClaw",
          "AI SDK",
          "Checkpoints",
          "Idempotency",
        ],
      },
      {
        title: "Sandboxed code & computer use",
        summary:
          "Isolated execution, with credentials kept outside the worker.",
        details: [
          "Built E2B-backed execution for code, shell, files, and browser work.",
          "Separated the credentialed broker from the unprivileged execution worker, with controlled network egress and checks at the tool boundary.",
          "Built provisioning, session recovery, timeout handling, and cleanup around the sandbox lifecycle.",
        ],
        skills: [
          "E2B",
          "Process isolation",
          "Credential boundaries",
          "Egress controls",
          "Runtime lifecycle",
        ],
      },
      {
        title: "MCP, CLI & connected tools",
        summary:
          "External agents work in TalentOS with their owner's permissions.",
        details: [
          "Built a hosted MCP surface and CLI access for agents to use skills, memory, Rooms, and delegated tasks.",
          "Resolved owner and organization identity on the server, with revocable personal credentials and live membership checks.",
          "Connected outbound MCP tools and OAuth flows while keeping delegated work inside the same approval and execution rules.",
        ],
        skills: [
          "MCP",
          "CLI development",
          "OAuth",
          "Authorization",
          "Tool integration",
        ],
      },
      {
        title: "Memory & shared context",
        summary:
          "Personal memory stays personal; shared knowledge has a clear scope.",
        details: [
          "Built owner-scoped memory retrieval and context assembly through a common gateway.",
          "Kept personal and shared knowledge separate, with provenance and deletion checks on retrieval.",
          "Connected live Room context to agent work so people and agents can collaborate without repeatedly copying the brief.",
        ],
        skills: [
          "Context engineering",
          "Memory systems",
          "Retrieval",
          "Multi-tenant access",
        ],
      },
      {
        title: "Documents, decks & shared outputs",
        summary: "Move from a chat response to work a team can edit and use.",
        details: [
          "Built the product workflows for documents, presentations, spreadsheets, and other generated artifacts.",
          "Connected agent changes to versions and reviewable proposals, with stale-version checks for concurrent work.",
          "Built the surrounding file, preview, download, and sharing experience across the web and native shells.",
        ],
        skills: [
          "Artifact systems",
          "Collaborative editing",
          "Versioning",
          "Async jobs",
          "Product design",
        ],
      },
    ],
  },
  {
    slug: "ai-career-product",
    displayTitle: "AI career product",
    lede: "An AI career product that became the first chapter of TalentOS.",
    ownership:
      "Built and grew TalentOS's first AI career product, connecting product development with distribution.",
    results: [
      { value: "15,000", label: "Users" },
      { value: "$200K", label: "ARR" },
    ],
    areas: [
      {
        title: "Product development",
        summary: "Took the product from an idea to something people used.",
        details: [
          "Built the career product and iterated on its user experience.",
          "Connected product decisions to user feedback and the work people needed help completing.",
        ],
        skills: [
          "Product engineering",
          "AI product development",
          "User experience",
        ],
      },
      {
        title: "Distribution & growth",
        summary: "Grew the product to 15,000 users and $200K ARR.",
        details: [
          "Led distribution alongside product development.",
          "Worked across positioning, acquisition, and the product experience as the business grew.",
        ],
        skills: [
          "Go-to-market",
          "Positioning",
          "Distribution",
          "Product-led growth",
        ],
      },
      {
        title: "Finding the next product",
        summary:
          "Used company conversations to identify the collaboration problem.",
        details: [
          "Work with companies revealed how disconnected individual AI use was from team workflows.",
          "Carried that learning into TalentOS's multiplayer AI workspace.",
        ],
        skills: ["Customer discovery", "Product strategy", "Founder judgment"],
      },
    ],
  },
  {
    slug: "frontier-tower",
    displayTitle: "Frontier Tower",
    lede: "A San Francisco community exploring human flourishing, AI alignment, and regenerative economics.",
    ownership:
      "Co-led the Human Flourishing Floor: community growth, programming, and the gatherings that brought it to life.",
    results: [
      { value: "120 → 600+", label: "Members" },
      { value: "2025–2026", label: "Co-lead" },
    ],
    areas: [
      {
        title: "Community growth",
        summary: "Helped grow membership from 120 to 600+.",
        details: [
          "Co-led the floor and helped more people find their place in the community.",
          "Connected membership growth with a regular program of gatherings and conversations.",
        ],
        skills: ["Community strategy", "Member engagement", "Operations"],
      },
      {
        title: "Programming & convening",
        summary:
          "Brought technical and cultural perspectives into the same room.",
        details: [
          "Hosted conversations on AI alignment, regenerative economics, and human flourishing.",
          "Welcomed leaders from OpenAI, Anthropic, Burning Man, and the wider community.",
        ],
        skills: ["Programming", "Curation", "Event production", "Partnerships"],
      },
    ],
  },
  {
    slug: "build-myanmar-media",
    displayTitle: "Build Myanmar",
    lede: "Technology, ideas, and entrepreneurship for Myanmar's next generation.",
    ownership:
      "Founded Build Myanmar and led its content strategy, creative direction, distribution, and team.",
    results: [
      { value: "450K+", label: "Followers across platforms" },
      { value: "30", label: "People in the organization" },
      { value: "91K+", label: "YouTube subscribers" },
    ],
    credit: "Video editing by the production team.",
    areas: [
      {
        title: "Editorial & content strategy",
        summary: "Chose the topics, guests, and formats worth building around.",
        details: [
          "Shaped the channel's focus around technology, business, and ideas useful to Myanmar's next generation.",
          "Brought in stronger guests, tightened formats, and put more research behind the conversations.",
          "Built around evergreen topics; the channel reached its first 10K YouTube subscribers with 17 videos.",
        ],
        skills: [
          "Editorial strategy",
          "Audience insight",
          "Guest curation",
          "Research",
        ],
      },
      {
        title: "Thumbnails & creative direction",
        summary: "Directed how the work was packaged and presented.",
        details: [
          "Developed thumbnail direction and the creative ideas behind the content.",
          "Worked with the production team to translate those ideas into a consistent visual and editorial standard.",
        ],
        skills: [
          "Thumbnail direction",
          "Creative briefs",
          "Visual storytelling",
          "Creative review",
        ],
      },
      {
        title: "Organic distribution & community",
        summary: "Built an audience across Facebook, TikTok, and YouTube.",
        details: [
          "Led organic distribution and connected the media audience to the wider Build Myanmar community.",
          "Grew the channels to the recorded milestones of 230K+ on Facebook, 140K+ on TikTok, and 91K+ on YouTube.",
        ],
        skills: [
          "Organic growth",
          "Cross-platform distribution",
          "Community building",
        ],
      },
      {
        title: "Building the team",
        summary: "Scaled the organization into a team of 30.",
        details: [
          "Built and led the organization behind the media and community work.",
          "Coordinated strategy, creative direction, production, and distribution as the team grew.",
        ],
        skills: ["Team leadership", "Production coordination", "Operations"],
      },
    ],
  },
  {
    slug: "build-myanmar-spaces",
    displayTitle: "Build Myanmar spaces",
    lede: "Physical spaces for Myanmar's builders, creators, and entrepreneurs.",
    ownership:
      "Founded the community and handled the spaces, operations, and events that gave it a physical home.",
    results: [
      { value: "2", label: "Spaces in Yangon" },
      { value: "5,000+", label: "Community members" },
    ],
    areas: [
      {
        title: "Launching & running the spaces",
        summary: "Turned an online community into two places people could use.",
        details: [
          "Led the launch of two physical community spaces in Yangon.",
          "Handled the operational work of making the spaces useful to builders, creators, and entrepreneurs.",
        ],
        skills: [
          "Space operations",
          "Project execution",
          "Community infrastructure",
        ],
      },
      {
        title: "Events & community programming",
        summary:
          "Created reasons for people to meet, learn, and build together.",
        details: [
          "Organized community events and gatherings around the spaces.",
          "Connected the media audience with an in-person community of 5,000+ members.",
        ],
        skills: ["Event planning", "Programming", "Community engagement"],
      },
    ],
  },
  {
    slug: "the-glitch-network",
    lede: "A book that connects storytelling, digital ownership, and reader participation.",
    ownership:
      "Authored How to Become a Glitch and led the development of its interactive reading and membership experience.",
    results: [
      { value: "2023", label: "Authored" },
      { value: "Five-star", label: "Reader reviews on Amazon" },
    ],
    areas: [
      {
        title: "Writing & storytelling",
        summary: "Created the book at the center of The Glitch Network.",
        details: [
          "Authored How to Become a Glitch.",
          "Developed a narrative connected to a broader interactive reading experience.",
        ],
        skills: ["Writing", "Narrative design", "Storytelling"],
      },
      {
        title: "Interactive product development",
        summary:
          "Connected the story with digital ownership and participation.",
        details: [
          "Led development of the reading and membership experience.",
          "Brought collectible chapters, reader participation, and the written story into one product concept.",
        ],
        skills: [
          "Product development",
          "Interactive storytelling",
          "Digital collectibles",
          "Creative direction",
        ],
      },
    ],
  },
  {
    slug: "events-and-salons",
    lede: "Founder conversations, technical workshops, and gatherings around ideas.",
    ownership:
      "Spoke, hosted, and co-hosted across founder conversations, AI workshops, and community gatherings.",
    results: [
      { value: "95", label: "Hosted / co-hosted on Luma" },
      { value: "SF Tech Week", label: "Speaker" },
    ],
    areas: [
      {
        title: "Talks & founder conversations",
        summary: "Brought a builder's perspective to public conversations.",
        details: [
          "Spoke at the SF Tech Week Startup Journey Fireside Chat.",
          "Joined founder conversations alongside operators and technical leaders.",
        ],
        skills: ["Public speaking", "Founder communication", "Storytelling"],
      },
      {
        title: "Workshops & event production",
        summary: "Co-hosted practical sessions on AI and company building.",
        details: [
          "Co-hosted AI engineering webinars and working sessions for founders and operators.",
          "Handled programming and event coordination across technical and community gatherings.",
        ],
        skills: [
          "Event production",
          "Programming",
          "Curation",
          "Community operations",
        ],
      },
    ],
  },
];

const draft = (slug: string) =>
  contributionDrafts.find((item) => item.slug === slug)!;

const talent = draft("talentos");
const career = draft("ai-career-product");
const media = draft("build-myanmar-media");
const spaces = draft("build-myanmar-spaces");
const frontier = draft("frontier-tower");
const events = draft("events-and-salons");

export const projectContributions: ProjectContribution[] = [
  {
    ...talent,
    story:
      "TalentOS is a multiplayer AI workspace for people and their agents. I lead product engineering across the apps and agent systems. Our earlier career product reached 15,000 users and $200K ARR.",
    team: "Team of 6",
    contributionHeading: "My technical contributions",
    searchAliases: [
      "Personal AI assistant",
      "Personal AI system",
      "AI career product",
      "TalentOS mobile app",
      "TalentOS desktop app",
    ],
    distinctive:
      "People and multiple agents share one workspace, while each agent acts through its owner's memory, tools, and approval rules.",
    highlights: [
      "Web / mobile / desktop",
      "Agent harness",
      "Sandboxing",
      "MCP & CLI",
      "Memory",
      "Shared artifacts",
    ],
    resultSummary:
      "Web, mobile & desktop · 15K users / $200K ARR on the first product",
    results: [
      ...talent.results,
      { value: "15K users · $200K ARR", label: "Earlier career product" },
    ],
    areas: [
      ...talent.areas,
      {
        title: "Earlier product: AI careers",
        id: "career-product",
        group: "Product & growth",
        summary:
          "Built and grew the first TalentOS product to 15,000 users and $200K ARR.",
        details: [
          "Built the career product and led its distribution, working across the product experience, positioning, and acquisition.",
          "Used feedback and company conversations to identify the next opportunity: helping people and their AI work together.",
          "The 15,000-user and $200K ARR milestones belong to this earlier product.",
        ],
        skills: [...new Set(career.areas.flatMap((area) => area.skills))],
      },
    ],
  },
  {
    ...media,
    story:
      "Build Myanmar brings together media, a builder community, and two spaces in Yangon. I founded the organization and led strategy, creative direction, and operations. We grew to a team of 30 and 450K+ followers.",
    searchAliases: ["Build Myanmar Media", "Build Myanmar community spaces"],
    slug: "build-myanmar",
    sourceSlug: "build-myanmar-media",
    distinctive:
      "Media, community programming, and two physical spaces grew together as one ecosystem.",
    highlights: [
      "Content strategy",
      "Thumbnail direction",
      "Distribution",
      "Team leadership",
      "Spaces & events",
    ],
    resultSummary: "450K+ followers · Team of 30 · 2 community spaces",
    displayTitle: "Build Myanmar",
    lede: "Media, community, and spaces for Myanmar's next generation.",
    ownership:
      "Founded Build Myanmar and led its media strategy, creative direction, team, community spaces, and events.",
    results: [
      media.results[0],
      media.results[1],
      { value: "2", label: "Community spaces in Yangon" },
    ],
    areas: [
      ...media.areas.slice(0, 3),
      {
        title: "Community spaces & events",
        id: "community-spaces",
        summary: "Two spaces in Yangon for a community of 5,000+ members.",
        details: spaces.areas.flatMap((area) => area.details),
        skills: [...new Set(spaces.areas.flatMap((area) => area.skills))],
      },
      media.areas[3],
    ],
  },
  {
    ...events,
    story:
      "I co-led Frontier Tower's Human Flourishing Floor, helping grow membership from 120 to 600+. I also hosted founder and AI events and spoke at SF Tech Week. My work combined community growth, programming, and public speaking.",
    searchAliases: [
      "Frontier Tower",
      "Human Flourishing Floor",
      "Speaking and events",
    ],
    slug: "community-and-speaking",
    sourceSlug: "events-and-salons",
    distinctive:
      "Paired community growth with programming that brought founders, researchers, and practitioners into the same conversations.",
    highlights: ["Community growth", "Event programming", "Public speaking"],
    resultSummary: "120 → 600+ members · 95 hosted / co-hosted events",
    displayTitle: "Community & speaking",
    lede: "Building communities and bringing people together around useful ideas.",
    role: "Community co-lead · Speaker · Host",
    ownership:
      "Co-led Frontier Tower's Human Flourishing Floor and helped grow its membership, alongside speaking, workshops, and community events.",
    results: [
      { value: "120 → 600+", label: "Frontier floor members" },
      ...events.results,
    ],
    areas: [
      {
        title: "Frontier Tower · Human Flourishing Floor",
        id: "frontier-tower",
        summary:
          "Co-led the floor in 2025–2026 and helped grow membership from 120 to 600+.",
        details: frontier.areas.flatMap((area) => area.details),
        skills: [...new Set(frontier.areas.flatMap((area) => area.skills))],
      },
      ...events.areas,
    ],
    links: [
      { label: "My hosted events", href: "https://luma.com/user/win22" },
      {
        label: "SF Tech Week speaker listing",
        href: "https://www.tech-week.com/calendar/sf/events/the-startup-journey-fireside-chat-3cde8a56-71fa-41c3-9c39-a20f9efa772f",
      },
      {
        label: "My co-lead announcement",
        href: "https://www.linkedin.com/posts/james-win_i-officially-became-a-co-lead-of-the-human-activity-7372417919814889472-dzBf",
      },
      { label: "Frontier Tower website", href: "https://frontiertower.io/" },
    ],
  },
  {
    ...draft("the-glitch-network"),
    story:
      "How to Become a Glitch connects a book with digital collectibles and an interactive reading experience. I authored the book and led the product development. The book has five-star reader reviews on Amazon.",
    distinctive:
      "Connected a written story to collectible chapters and an interactive membership experience.",
    highlights: ["Authorship", "Interactive product", "Digital collectibles"],
    resultSummary: "Authored in 2023 · Five-star reader reviews",
  },
];
