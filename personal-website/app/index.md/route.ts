import { markdownResponse, profileMarkdown } from "@/lib/agent-content";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(profileMarkdown(), "/");
}
