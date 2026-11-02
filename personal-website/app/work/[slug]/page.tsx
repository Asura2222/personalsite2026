import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getPortfolioProject, portfolioProjects } from "@/lib/portfolio";
import { pageMetadata, personId, siteOrigin } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";

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
        project.summary,
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
  const otherProjects = portfolioProjects
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

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
              description: project.summary,
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
                  name: "James Win",
                  item: `${siteOrigin}/`,
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
      <article className={`pv-page pv-case pv-accent-${project.accent}`}>
        <Link href="/#work" className="pv-back">
          <ArrowLeft size={15} /> All work
        </Link>
        <header className="pv-case-header">
          <p className="pv-eyebrow">{project.category}</p>
          <h1>
            {project.title}
            <span className="pv-period">.</span>
          </h1>
          <p className="pv-case-summary">{project.summary}</p>
          <p className="pv-case-outcome">{project.outcome}</p>
        </header>
        <dl className="pv-case-facts">
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Chapter</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>What it brings together</dt>
            <dd>{project.skills.join(" · ")}</dd>
          </div>
        </dl>
        <div className="pv-case-body">
          <section>
            <h2>The idea</h2>
            <p>{project.intro}</p>
          </section>
          <section>
            <h2>What I worked on</h2>
            <p>{project.contribution}</p>
          </section>
          <section className="pv-challenge">
            <p className="pv-eyebrow">Behind the simple explanation</p>
            <h2>What made it hard</h2>
            <p>{project.challenge}</p>
          </section>
          {slug === "talentos" && (
            <figure
              className="pv-architecture"
              aria-label="TalentOS collaboration model"
            >
              <div className="pv-architecture-top">
                <span>People</span>
                <span>Their AI teammates</span>
                <span>External agents</span>
              </div>
              <div className="pv-architecture-flow" aria-hidden="true">
                ↓
              </div>
              <div className="pv-architecture-room">
                <strong>One shared Room</strong>
                <span>Conversation · Context · Files</span>
              </div>
              <div className="pv-architecture-flow" aria-hidden="true">
                ↓
              </div>
              <div className="pv-architecture-bottom">
                Permissions & approvals → Work people can use
              </div>
              <figcaption>
                A simplified product model. Agent capabilities vary by
                integration and release.
              </figcaption>
            </figure>
          )}
          {project.decisions.length > 0 && (
            <section>
              <h2>
                {slug === "talentos"
                  ? "Decisions behind the product"
                  : "The approach"}
              </h2>
              <div className="pv-decisions">
                {project.decisions.map((decision, i) => (
                  <div key={decision.title}>
                    <span className="pv-decision-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{decision.title}</h3>
                      <p>{decision.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section>
            <h2>
              {project.skills.includes("Technical")
                ? "Skills & tech stack"
                : "Skills & methods"}
            </h2>
            <ul className="pv-tool-list">
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>
              {slug === "personal-ai-assistant"
                ? "Talk about the build"
                : "See the work"}
            </h2>
            <div className="pv-proof-links">
              {project.links.map((link) => (
                <a className="pv-text-link" key={link.href} href={link.href}>
                  {link.label} <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </section>
        </div>
        <footer className="pv-case-next">
          <h2>Another side of the work</h2>
          {otherProjects.map((other) => (
            <Link key={other.slug} href={`/work/${other.slug}`}>
              {other.title}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <a href="mailto:win@talentos.so">
            Email me <ArrowUpRight size={18} />
          </a>
        </footer>
      </article>
    </div>
  );
}
