import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./portfolio.css";
import { siteOrigin } from "@/lib/site";
import { Sidebar } from "@/components/layout/sidebar";
import { CommandMenu } from "@/components/layout/cmdk-dialog";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "James Win — Product Leader & Technical Founder",
  description:
    "James Win builds AI products, teams, and communities. Explore TalentOS, Build Myanmar, original writing, and public speaking.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="describedby"
          href={`${siteOrigin}/llms.txt`}
          type="text/markdown"
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <Sidebar />
        <CommandMenu />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <main id="main-content" className="lg:pl-36">
          <div className="px-6 pb-16 pt-24 lg:px-12 lg:py-24">{children}</div>
        </main>
      </body>
    </html>
  );
}
