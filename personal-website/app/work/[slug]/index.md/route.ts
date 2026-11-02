import { markdownResponse, projectMarkdown } from "@/lib/agent-content";
import {
  getPortfolioProject,
  portfolioProjects,
  portfolioAliases,
} from "@/lib/portfolio";
import { permanentRedirect } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...portfolioProjects.map(({ slug }) => ({ slug })),
    ...Object.keys(portfolioAliases).map((slug) => ({ slug })),
  ];
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return new Response("Project not found\n", { status: 404 });
  if (project.slug !== slug)
    permanentRedirect(`/work/${project.slug}/index.md`);
  return markdownResponse(projectMarkdown(project), `/work/${slug}`);
}
