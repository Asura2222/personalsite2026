import { markdownResponse, projectMarkdown } from "@/lib/agent-content";
import { getPortfolioProject, portfolioProjects } from "@/lib/portfolio";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return new Response("Project not found\n", { status: 404 });
  return markdownResponse(projectMarkdown(project), `/work/${slug}`);
}
