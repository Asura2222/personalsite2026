import { markdownResponse, speakingMarkdown } from "@/lib/agent-content";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(speakingMarkdown(), "/speaking");
}
