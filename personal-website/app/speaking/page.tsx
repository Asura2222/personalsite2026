import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AppearanceArchive } from "@/components/sections/appearance-archive";
import { hostedCount, appearances } from "@/lib/appearances";
import { pageMetadata, siteOrigin } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";

export const metadata = pageMetadata(
  "Speaking & Events | James Win",
  "Talks, panels, workshops, and community events featuring or co-hosted by James Win.",
  "/speaking",
);

export default function SpeakingPage() {
  return (
    <div className="portfolio-preview">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Speaking & Events — James Win",
          url: `${siteOrigin}/speaking`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: appearances.map((event, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: event.title,
              url: event.url,
            })),
          },
        }}
      />
      <div className="pv-page">
        <div className="pv-preview-note">
          Speaking & events · Public archive
        </div>
        <Link href="/#work" className="pv-back">
          <ArrowLeft size={15} /> Back to my work
        </Link>
        <header className="pv-archive-header">
          <h1>
            Speaking & events<span className="pv-period">.</span>
          </h1>
          <p>
            Conversations about building, AI, and the things that make us human.
          </p>
          <p className="pv-data-note">
            {hostedCount} hosted events listed on Luma. This archive brings
            together the public listings I could verify, plus speaking
            appearances. Member-only and placeholder listings are omitted. Dates
            and roles follow the original listings.
          </p>
          <a className="pv-text-link" href="https://luma.com/user/win22">
            My Luma profile <ArrowUpRight size={14} />
          </a>
        </header>
        <AppearanceArchive />
      </div>
    </div>
  );
}
