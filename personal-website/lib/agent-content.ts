import activity from "@/content/activity/github.json";
import profileProof from "@/content/activity/profile-proof.json";
import { appearances, hostedCount } from "@/lib/appearances";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio";
import { contactEmail, siteOrigin } from "@/lib/site";
import { skillGroups } from "@/lib/skills";
import type { SubstackPost } from "@/lib/substack";

const url = (path: string) => new URL(path, siteOrigin).toString();
const link = (title: string, href: string) =>
  `[${title.replace(/([\\\[\]])/g, "\\$1").replace(/\s+/g, " ")}](${href})`;

export function agentIndex(): string {
  return `# James Win

> James Win is a San Francisco-based product leader and technical founder from Myanmar. He co-founded TalentOS, founded Build Myanmar, and co-led the Human Flourishing Floor at Frontier Tower.

This is James Win's personal portfolio. Project pages explain his individual contributions, technical decisions, skills, and results. Metrics describe the project and period stated; the first TalentOS career product and the current multiplayer AI workspace are separate product chapters. GitHub activity is a dated snapshot, not a live counter.

## Profile

- ${link("Profile, achievements, and skills", url("/index.md"))}: Biography, contact, milestones, and tools.
- ${link("Complete portfolio in one document", url("/llms-full.txt"))}: Profile, all project case studies, public speaking archive, and writing index.

## Projects

${portfolioProjects.map((project) => `- ${link(project.title, url(`/work/${project.slug}/index.md`))}: ${project.summary}`).join("\n")}

## Writing and speaking

- ${link("My writings", url("/writings/index.md"))}: Article titles, dates, summaries, and original Substack links. Article bodies remain on Substack.
- ${link("Speaking and events", url("/speaking/index.md"))}: Public appearances with dates, roles, and original event listings.

## Optional

- ${link("Human-readable portfolio", url("/"))}
- ${link("GitHub", "https://github.com/Asura2222")}
- ${link("LinkedIn", "https://www.linkedin.com/in/james-win/")}
- ${link("Twitter / X", "https://x.com/win22james")}
- ${link("Sitemap", url("/sitemap.xml"))}
`;
}

export function profileMarkdown(): string {
  return `# James Win

> Product leader and technical founder working across AI engineering, product, growth, and community. Originally from Myanmar, now in San Francisco.

Canonical page: ${url("/")}

## Contact and profiles

- Email: ${contactEmail}
- ${link("GitHub: Asura2222", "https://github.com/Asura2222")}
- ${link("LinkedIn", "https://www.linkedin.com/in/james-win/")}
- ${link("Twitter / X: win22james", "https://x.com/win22james")}
- ${link("Public events", "https://luma.com/user/win22")}
- Open to product leadership conversations.

## Selected work

${portfolioProjects
  .map(
    (project) => `### ${project.title}

- Role: ${project.role}
${project.team ? `- Team: ${project.team}` : ""}
- Period: ${project.period}
- Contribution: ${project.contribution}
- Result: ${project.outcome}
- Summary: ${project.summary}
- ${link("Case study", url(`/work/${project.slug}`))}
- ${link("Markdown case study", url(`/work/${project.slug}/index.md`))}`,
  )
  .join("\n\n")}

## Skills and tools

${skillGroups.map((group) => `### ${group.title}\n\n${group.description}.\n\nTools and methods: ${group.tools}.`).join("\n\n")}

## GitHub activity

- ${profileProof.contributions.toLocaleString("en-US")} contributions in the last year, from a profile snapshot recorded ${profileProof.recordedOn}, including private activity.
- ${activity.mergedTalentOSPullRequests.toLocaleString("en-US")} merged pull requests in TalentOS, all time, synced ${activity.syncedAt}.
- ${link("Recorded contribution calendar", url(profileProof.image))}
- These are recorded metrics, not live counts. Private company source code is not published here.

## Audience and community

- Build Myanmar: 450K+ followers across platforms and a team of 30, during James's 2023–2025 chapter.
- Facebook: 230K+ followers; TikTok: 140K+ followers. Recorded earlier milestones.
- YouTube: 91K+ subscribers, updated November 2026.
- Build Myanmar community: 5,000+ members and two physical spaces in Yangon.
- Frontier Tower: helped grow Human Flourishing Floor membership from 120 to 600+ during 2025–2026.

## More

- ${link("My writings", url("/writings/index.md"))}
- ${link("Speaking and events", url("/speaking/index.md"))}
- ${link("Complete portfolio text", url("/llms-full.txt"))}
`;
}

export function projectMarkdown(project: PortfolioProject): string {
  const renderArea = (area: PortfolioProject["areas"][number]) =>
    `### ${area.title}\n\n${area.summary}\n\n${area.details.map((detail) => `- ${detail}`).join("\n")}\n\nSkills and tools: ${area.skills.join(", ")}.`;
  const secondaryGroups = [
    ...new Set(
      project.areas.flatMap((area) => (area.group ? [area.group] : [])),
    ),
  ];
  return `# ${project.title}

> ${project.contribution}

Canonical page: ${url(`/work/${project.slug}`)}

- Person: James Win
- Category: ${project.category}
- Role: ${project.role}
- Period: ${project.period}
${project.team ? `- Team: ${project.team}\n` : ""}
- Result: ${project.outcome}
- Skills: ${project.skills.join(", ")}

## The project

${project.story}

## What makes it different

${project.distinctive}

## Results

${project.results.map((result) => `- ${result.value}: ${result.label}`).join("\n")}

## ${project.contributionHeading}

${project.areas
  .filter((area) => !area.group)
  .map(renderArea)
  .join("\n\n")}
${secondaryGroups
  .map(
    (group) =>
      `\n## ${group}\n\n${project.areas
        .filter((area) => area.group === group)
        .map(renderArea)
        .join("\n\n")}`,
  )
  .join("\n")}
${project.credit ? `\nTeam credit: ${project.credit}\n` : ""}

## Skills, tools, and methods

${project.tools.map((tool) => `- ${tool}`).join("\n")}

## Original websites and sources

${project.links.map((source) => `- ${link(source.label, source.href)}`).join("\n")}

## Profile

- ${link("James Win", url("/index.md"))}
- Email: ${contactEmail}
`;
}

export function speakingMarkdown(): string {
  return `# James Win — Speaking and events

Canonical page: ${url("/speaking")}

James's Luma profile records ${hostedCount} hosted or co-hosted events. The public archive below is a selection of accessible listings, not the entire hosted count. Each entry distinguishes speaker, host, and co-host roles. Dates and details can change; the original event listing is the source for attendance information.

${appearances.map((event) => `## ${event.title}\n\n- Date: ${event.date}\n- Role: ${event.role}\n- Format: ${event.format}\n- Location: ${event.location}\n- ${link("Original listing", event.url)}${event.summary ? `\n\n${event.summary}` : ""}`).join("\n\n")}
`;
}

export function writingsMarkdown(posts: SubstackPost[]): string {
  return `# James Win — My writings

Canonical page: ${url("/writings")}

Essays on building, AI, people, and Myanmar. This is an index of article metadata and excerpts; full articles are published on Substack. The feed refreshes hourly, with a saved index used if the feed is unavailable.

${posts.map((post) => `## ${post.title}\n\n- Published: ${new Date(post.publishedAt).toISOString().slice(0, 10)}\n- ${link("Read the original article", post.url)}\n\n${post.excerpt}`).join("\n\n")}
`;
}

export function fullPortfolioMarkdown(posts: SubstackPost[]): string {
  return [
    profileMarkdown(),
    ...portfolioProjects.map(projectMarkdown),
    speakingMarkdown(),
    writingsMarkdown(posts),
  ].join("\n\n---\n\n");
}

export function markdownResponse(
  content: string,
  canonicalPath?: string,
  plainText = false,
): Response {
  const links = [
    `<${url("/llms.txt")}>; rel="describedby"; type="text/markdown"`,
  ];
  if (canonicalPath) links.push(`<${url(canonicalPath)}>; rel="canonical"`);
  return new Response(content, {
    headers: {
      "Content-Type": `${plainText ? "text/plain" : "text/markdown"}; charset=utf-8`,
      "X-Content-Type-Options": "nosniff",
      Link: links.join(", "),
    },
  });
}
