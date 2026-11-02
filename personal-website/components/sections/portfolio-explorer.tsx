"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, LayoutGrid, List, Search } from "lucide-react";
import { portfolioProjects, skills, type Skill } from "@/lib/portfolio";
import { appearances, type Appearance } from "@/lib/appearances";

interface WorkEntry {
  id: string;
  title: string;
  category: string;
  summary: string;
  href: string;
  skills: Skill[];
  outcome: string;
  accent: string;
  highlights?: string[];
  searchText: string;
}

const projects: WorkEntry[] = portfolioProjects.map((project) => ({
  ...project,
  summary: `${project.summary} ${project.contribution}`,
  id: project.slug,
  href: `/work/${project.slug}`,
  searchText: [
    project.title,
    project.category,
    project.summary,
    project.contribution,
    project.story,
    project.team ?? "",
    project.distinctive,
    project.role,
    project.challenge,
    ...project.skills,
    ...project.tools,
    ...project.searchAliases,
    ...project.areas.flatMap((area) => [
      area.title,
      area.summary,
      ...area.details,
      ...area.skills,
    ]),
  ]
    .join(" ")
    .toLocaleLowerCase(),
}));

function appearanceEntry(event: Appearance): WorkEntry {
  return {
    id: event.url,
    title: event.title,
    category: `${event.format} · ${event.role}`,
    summary: event.summary || event.location,
    href: event.url,
    skills: ["Speaking & Events"],
    outcome: event.date,
    accent: "blue",
    searchText: [
      event.title,
      event.summary,
      event.location,
      event.role,
      event.format,
      event.date,
    ]
      .join(" ")
      .toLocaleLowerCase(),
  };
}

export function PortfolioExplorer() {
  const [skill, setSkill] = useState<Skill>("All work");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"list" | "grid">("list");
  const search = query.trim().toLocaleLowerCase();
  const eventEntries = (
    skill === "Speaking & Events" || search ? appearances : []
  ).map(appearanceEntry);
  const matches = [...projects, ...eventEntries].filter(
    (entry) =>
      (skill === "All work" || entry.skills.includes(skill)) &&
      entry.searchText.includes(search),
  );

  return (
    <section id="work" aria-labelledby="work-title" className="pv-work">
      <div className="pv-section-heading">
        <div>
          <p className="pv-eyebrow">A few things I&apos;ve built</p>
          <h2 id="work-title">
            Selected work<span className="pv-period">.</span>
          </h2>
        </div>
        <div
          className="pv-view-switch"
          role="group"
          aria-label="Project layout"
        >
          <button
            type="button"
            aria-label="List layout"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
          >
            <List size={17} />
          </button>
          <button
            type="button"
            aria-label="Grid layout"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
          >
            <LayoutGrid size={16} />
          </button>
        </div>
      </div>
      <div
        className="pv-filters"
        role="group"
        aria-label="Filter work by skill"
      >
        {skills.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={skill === item}
            onClick={() => setSkill(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="pv-search-row">
        <label className="pv-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">
            Search projects, skills, tools, or events
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, skills, tools, or events"
          />
        </label>
        <p className="pv-count" role="status">
          {matches.length} {matches.length === 1 ? "item" : "items"}
        </p>
      </div>
      <div className={`pv-projects pv-projects-${view}`}>
        {matches.map((project, index) => (
          <article
            key={project.id}
            className={`pv-project pv-accent-${project.accent}`}
          >
            <span className="pv-project-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pv-project-content">
              <p className="pv-project-category">{project.category}</p>
              <h3>
                {project.href.startsWith("https://") ? (
                  <a href={project.href}>
                    {project.title}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                ) : (
                  <Link href={project.href}>
                    {project.title}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </Link>
                )}
              </h3>
              <p className="pv-project-summary">{project.summary}</p>
              <div className="pv-tags">
                {(project.highlights ?? project.skills).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <p className="pv-project-outcome">{project.outcome}</p>
          </article>
        ))}
      </div>
      {matches.length === 0 && (
        <div className="pv-empty">
          <h3>No matching work found.</h3>
          <p>Try a different skill or search term.</p>
          <button
            type="button"
            onClick={() => {
              setSkill("All work");
              setQuery("");
            }}
          >
            Show all work
          </button>
        </div>
      )}
      <Link href="/speaking" className="pv-text-link pv-archive-link">
        Full speaking & events archive <ArrowUpRight size={14} />
      </Link>
    </section>
  );
}
