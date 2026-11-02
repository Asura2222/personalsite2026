import { agentIndex, markdownResponse } from "@/lib/agent-content";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(agentIndex(), undefined, true);
}
