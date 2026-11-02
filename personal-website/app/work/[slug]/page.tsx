import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import {
  contributionAreaId,
  getPortfolioProject,
  portfolioProjects,
  projectHref,
} from "@/lib/portfolio";
import { pageMetadata, personId, siteOrigin } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";
import type { ContributionArea } from "@/lib/project-contributions";

function ContributionAreas({ areas }: { areas: ContributionArea[] }) {
  return (
    <div className="cp-areas">
      {areas.map((area, index) => (
        <details
          className="cp-area"
          id={contributionAreaId(area)}
          key={area.title}
        >
          <summary>
            <span className="cp-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="cp-area-heading">
              <strong>{area.title}</strong>
              <span>{area.summary}</span>
            </span>
            <ChevronDown size={17} aria-hidden="true" className="cp-chevron" />
          </summary>
          <div className="cp-area-content">
            <ul>
              {area.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <ul
              className="cp-skills"
              aria-label={`Skills and tools for ${area.title}`}
            >
              {area.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  return project
    ? pageMetadata(
        `${project.title} | James Win`,
        project.contribution,
        `/work/${project.slug}`,
      )
    : { title: "Project not found" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();
  if (project.slug !== slug) permanentRedirect(projectHref(slug));
  const otherProjects = portfolioProjects.filter((item) => item.slug !== slug);
  const primaryAreas = project.areas.filter((area) => !area.group);
  const secondaryGroups = [
    ...new Set(
      project.areas.flatMap((area) => (area.group ? [area.group] : [])),
    ),
  ];

  return (
    <div className="portfolio-preview">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": slug === "the-glitch-network" ? "Book" : "CreativeWork",
              "@id": `${siteOrigin}/work/${slug}#work`,
              name: project.title,
              description: project.contribution,
              url: `${siteOrigin}/work/${slug}`,
              author: {
                "@type": "Person",
                "@id": personId,
                name: "James Win",
                url: `${siteOrigin}/`,
              },
              keywords: [...project.skills, ...project.tools].join(", "),
              ...(slug === "the-glitch-network"
                ? {
                    sameAs:
                      "https://www.amazon.com/How-Become-Glitch-369-Labs/dp/B0CR9GNDJN",
                  }
                : {}),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "James Win — Selected work",
                  item: `${siteOrigin}/#work`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: project.title,
                  item: `${siteOrigin}/work/${slug}`,
                },
              ],
            },
          ],
        }}
      />
      <article className={`pv-page cp-page pv-accent-${project.accent}`}>
        <div className="cp-preview-bar">
          <Link href="/#work">
            <ArrowLeft size={14} aria-hidden="true" /> Selected work
          </Link>
        </div>
        <header className="cp-case-header">
          <p className="pv-eyebrow">{project.category}</p>
          <h1>
            {project.title}
            <span className="pv-period">.</span>
          </h1>
          <p className="cp-lead">{project.story}</p>
          <div className="cp-role-line">
            <span>{project.role}</span>
            {project.team && <span>{project.team}</span>}
            <span>{project.period}</span>
          </div>
          {project.credit && <p className="cp-case-credit">{project.credit}</p>}
        </header>
        <dl className="cp-results">
          {project.results.map((result) => (
            <div key={result.label}>
              <dt>{result.label}</dt>
              <dd>{result.value}</dd>
            </div>
          ))}
        </dl>
        <section
          className="cp-contributions"
          aria-labelledby="contributions-title"
        >
          <div className="cp-section-heading">
            <h2 id="contributions-title">{project.contributionHeading}</h2>
            <span>{String(primaryAreas.length).padStart(2, "0")} areas</span>
          </div>
          <p className="cp-contribution-summary">{project.contribution}</p>
          <ContributionAreas areas={primaryAreas} />
        </section>
        {secondaryGroups.map((group) => (
          <section className="cp-contributions" key={group} aria-label={group}>
            <div className="cp-section-heading">
              <h2>{group}</h2>
            </div>
            <ContributionAreas
              areas={project.areas.filter((area) => area.group === group)}
            />
          </section>
        ))}
        <section className="cp-ownership" aria-labelledby="distinctive-title">
          <h2 id="distinctive-title">What makes it different</h2>
          <p>{project.distinctive}</p>
        </section>
        <section
          className="cp-project-links"
          aria-labelledby="project-links-title"
        >
          <h2 id="project-links-title">See the work</h2>
          <div>
            {project.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
          {slug === "community-and-speaking" && (
            <Link href="/speaking" className="cp-current-page">
              Full speaking & events archive{" "}
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          )}
        </section>
        <footer className="cp-next-projects">
          <h2>More selected work</h2>
          <div>
            {otherProjects.map((other) => (
              <Link key={other.slug} href={`/work/${other.slug}`}>
                {other.title}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
