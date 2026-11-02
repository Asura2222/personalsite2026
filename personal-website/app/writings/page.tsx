import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getSubstackPosts } from "@/lib/substack";
import { pageMetadata, siteOrigin } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";

export const revalidate = 3600;
export const metadata = pageMetadata(
  "My writings | James Win",
  "Essays by James Win on AI orchestration, human agency, building products, and managing people. Read the latest posts from James's Substack.",
  "/writings",
);
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Los_Angeles",
});

export default async function Writings() {
  const posts = await getSubstackPosts();
  return (
    <div className="portfolio-preview">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "My writings — James Win",
          url: `${siteOrigin}/writings`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: post.title,
              url: post.url,
            })),
          },
        }}
      />
      <div className="pv-page pv-writings">
        <header className="pv-writings-header">
          <div>
            <h1>
              My writings<span className="pv-period">.</span>
            </h1>
            <p>On AI, building, people, and the ideas I keep coming back to.</p>
          </div>
          <a className="pv-text-link" href="https://monkeynews.substack.com/">
            Read on Substack <ArrowUpRight size={15} />
          </a>
        </header>
        <div className="pv-posts">
          {posts.map((post) => (
            <article key={post.url}>
              <a className="pv-post" href={post.url}>
                <div className="pv-post-image">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 88px, 160px"
                      className="pv-post-thumbnail"
                    />
                  ) : (
                    <span aria-hidden="true">JW.</span>
                  )}
                </div>
                <div className="pv-post-copy">
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {dateFormatter.format(new Date(post.publishedAt))}
                  </time>
                  <h2>
                    {post.title}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </h2>
                  {post.excerpt && <p>{post.excerpt}</p>}
                </div>
              </a>
            </article>
          ))}
        </div>
        <footer className="pv-writings-footer">
          <a className="pv-text-link" href="https://monkeynews.substack.com/">
            More on Substack <ArrowUpRight size={15} />
          </a>
        </footer>
      </div>
    </div>
  );
}
