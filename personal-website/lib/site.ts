import type { Metadata } from "next";

export const siteOrigin = "https://www.jameswin.capital";
export const personId = `${siteOrigin}/#james-win`;
export const contactEmail = "win@talentos.so";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, siteOrigin).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "James Win",
      images: [
        {
          url: `${siteOrigin}/opengraph-image`,
          alt: "James Win — Founder, Builder, Storyteller",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteOrigin}/opengraph-image`],
      creator: "@win22james",
    },
  };
}

export const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      url: `${siteOrigin}/`,
      name: "James Win",
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteOrigin}/#profile`,
      url: `${siteOrigin}/`,
      name: "James Win — Founder, Product Builder & Storyteller",
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "James Win",
      url: `${siteOrigin}/`,
      image: `${siteOrigin}/profile.png`,
      email: `mailto:${contactEmail}`,
      jobTitle: "Founder",
      description:
        "Founder and product builder working across AI engineering, growth, and community. Co-founder of TalentOS and founder of Build Myanmar.",
      worksFor: {
        "@type": "Organization",
        name: "TalentOS",
        url: "https://talentos.so/",
      },
      sameAs: [
        "https://github.com/Asura2222",
        "https://www.linkedin.com/in/james-win/",
        "https://x.com/win22james",
        "https://luma.com/user/win22",
      ],
      knowsAbout: [
        "AI agents",
        "Multi-agent systems",
        "Product development",
        "Community building",
        "Audience development",
      ],
    },
  ],
};
