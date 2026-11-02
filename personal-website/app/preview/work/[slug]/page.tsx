import { permanentRedirect } from "next/navigation";
import { projectHref } from "@/lib/portfolio";
export default async function PreviewWork({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(projectHref(slug));
}
