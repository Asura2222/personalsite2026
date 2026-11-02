import { notFound, permanentRedirect } from "next/navigation";
import { getPortfolioProject, projectHref } from "@/lib/portfolio";

export default async function ContributionPreview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getPortfolioProject(slug)) notFound();
  permanentRedirect(projectHref(slug));
}
