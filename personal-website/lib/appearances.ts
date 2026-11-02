import archive from "@/content/events/luma-hosted.json";

export interface Appearance {
  title: string;
  date: string;
  role: "Speaker" | "Host" | "Co-host";
  format: "Talks & panels" | "Workshops" | "Salons & community";
  location: string;
  summary: string;
  url: string;
}

const hosted: Appearance[] = archive.events
  .filter(
    (event) =>
      !/community.only|members?|private|placeholder/i.test(event.title),
  )
  .map((event) => {
    const monthAndDay = event.dateLabel.replace(/^\w+,\s*/, "").split(",")[0];
    const year = event.dateLabel.match(/\b(20\d{2})\b/)?.[1] ?? "2026";
    return {
      title: event.title.replace(/\s*-\s*Open Registration\s*$/, ""),
      date: `${monthAndDay}, ${year}`,
      role:
        event.hosts === "James Win" ? ("Host" as const) : ("Co-host" as const),
      format: /working session|engineer|workshop|class/i.test(event.title)
        ? ("Workshops" as const)
        : ("Salons & community" as const),
      location:
        event.location === "See event listing"
          ? "See original listing"
          : event.location,
      summary: "",
      url: event.url,
    };
  });

export const startupFireside: Appearance = {
  title: "The Startup Journey Fireside Chat",
  date: "Oct 6, 2026",
  role: "Speaker",
  format: "Talks & panels",
  location: "SF Tech Week · San Francisco",
  summary:
    "A founder conversation with Court Lorenzini, founding CEO of DocuSign, Leo Kayali, and Lindsey Simon, VP of Engineering at Vercel.",
  url: "https://www.tech-week.com/calendar/sf/events/the-startup-journey-fireside-chat-3cde8a56-71fa-41c3-9c39-a20f9efa772f",
};

const buildMyanmarEvent: Appearance = {
  title: "Build Myanmar 5th Community Event",
  date: "Aug 25, 2024",
  role: "Co-host",
  format: "Salons & community",
  location: "Yangon, Myanmar",
  summary:
    "A community gathering on navigating the digital future, co-hosted with Hokie Oo.",
  url: "https://luma.com/kbf5r4nu",
};

export const appearances: Appearance[] = [
  startupFireside,
  ...hosted,
  buildMyanmarEvent,
];
export const featuredAppearances = [
  startupFireside,
  {
    ...hosted.find((event) =>
      event.url.endsWith("make-your-company-ai-native-a-working-se"),
    )!,
    date: "June 2026",
    summary:
      "A working session for founders and operators on applying AI across a company, co-hosted with Olivia Habart.",
  },
  {
    ...hosted.find((event) => event.url.endsWith("43fruy7j"))!,
    location: "TalentOS Events · Online",
    summary:
      "A live webinar with Christian Acuña, Engineering Manager at Superhuman, about agentic engineering.",
  },
  {
    ...hosted.find((event) => event.url.endsWith("9j5vs15b"))!,
    summary:
      "A conversation on the future of education during Human+Tech Week.",
  },
];

export const hostedCount = archive.profileHostedCount;
