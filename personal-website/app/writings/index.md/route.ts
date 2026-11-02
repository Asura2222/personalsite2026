import { markdownResponse, writingsMarkdown } from "@/lib/agent-content";
import { getSubstackPosts } from "@/lib/substack";

export const revalidate = 3600;

export async function GET() {
  return markdownResponse(
    writingsMarkdown(await getSubstackPosts()),
    "/writings",
  );
}
