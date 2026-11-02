import { XMLParser } from "fast-xml-parser";
import snapshot from "@/content/writing/substack.json";

export interface SubstackPost {
  title: string;
  url: string;
  publishedAt: string;
  excerpt: string;
  image: string | null;
}

const imageHosts = new Set([
  "substack-post-media.s3.amazonaws.com",
  "substackcdn.com",
  "i.scdn.co",
]);
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  isArray: (name) => name === "item",
});

function plainText(value: unknown): string {
  return String(value ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/&#(x[\da-f]+|\d+);/gi, (_, code: string) => {
      const point = code.startsWith("x")
        ? Number.parseInt(code.slice(1), 16)
        : Number(code);
      return Number.isInteger(point) && point > 0 && point <= 0x10ffff
        ? String.fromCodePoint(point)
        : "";
    })
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export function parseSubstackFeed(xml: string): SubstackPost[] {
  const data = parser.parse(xml);
  const items = data?.rss?.channel?.item;
  if (!Array.isArray(items))
    throw new Error("Substack feed contained no posts.");
  const posts: SubstackPost[] = [];
  for (const item of items) {
    try {
      const url = new URL(String(item.link));
      const date = new Date(String(item.pubDate));
      const title = plainText(item.title);
      if (
        url.protocol !== "https:" ||
        url.hostname !== "monkeynews.substack.com" ||
        !url.pathname.startsWith("/p/") ||
        !Number.isFinite(date.getTime()) ||
        !title
      )
        continue;
      let image: string | null = null;
      if (
        typeof item.enclosure?.url === "string" &&
        String(item.enclosure.type).startsWith("image/")
      ) {
        const candidate = new URL(item.enclosure.url);
        if (
          candidate.protocol === "https:" &&
          imageHosts.has(candidate.hostname)
        )
          image = candidate.toString();
      }
      posts.push({
        title,
        url: url.toString(),
        publishedAt: date.toISOString(),
        excerpt: plainText(item.description),
        image,
      });
    } catch {
      continue;
    }
  }
  if (!posts.length) throw new Error("No valid Substack posts were found.");
  return posts.sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const response = await fetch("https://monkeynews.substack.com/feed", {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(6000),
    });
    if (!response.ok) throw new Error("Substack feed unavailable.");
    return parseSubstackFeed(await response.text());
  } catch {
    return snapshot.posts;
  }
}
