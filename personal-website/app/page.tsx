import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PortfolioExplorer } from "@/components/sections/portfolio-explorer";
import { AchievementOverview } from "@/components/sections/achievement-overview";
import { IntroAchievements } from "@/components/sections/intro-achievements";
import { SkillsTools } from "@/components/sections/skills-tools";
import { StructuredData } from "@/components/structured-data";
import { XLogo } from "@/components/x-logo";
import { pageMetadata, profileSchema } from "@/lib/site";

export const metadata = pageMetadata(
  "James Win — Product Leader & Technical Founder",
  "Founder of TalentOS, a governed multi-agent workspace. Built Build Myanmar to 450K+ followers and a team of 30. Explore my work, writing, and speaking.",
  "/",
);

export default function Home() {
  return (
    <div className="portfolio-preview">
      <StructuredData data={profileSchema} />
      <div className="pv-page">
        <header className="pv-header pv-header-compact">
          <div className="pv-identity">
            <h1 className="pv-wordmark">
              <Link href="/">
                James Win<span>.</span>
              </Link>
            </h1>
            <Image
              src="/profile.png"
              alt="James Win"
              width={56}
              height={56}
              priority
              className="pv-avatar"
            />
          </div>
          <nav aria-label="Find me online">
            <a
              href="https://x.com/win22james"
              aria-label="James Win on X: @win22james"
            >
              <XLogo />
            </a>
            <a
              href="https://github.com/Asura2222"
              aria-label="James Win on GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/james-win/"
              aria-label="James Win on LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a href="mailto:win@talentos.so" aria-label="Email James Win">
              <Mail size={19} />
            </a>
          </nav>
        </header>
        <section className="pv-quick-intro" aria-labelledby="intro-title">
          <h2 id="intro-title">
            Founder. Builder.{" "}
            <span className="pv-highlight">Curious person.</span>
          </h2>
          <p>
            I work across product, engineering, and growth. Originally from
            Myanmar, now in San Francisco. Here&apos;s some of what I&apos;ve
            built.
          </p>
          <IntroAchievements />
          <div className="pv-intro-links">
            <a href="mailto:win@talentos.so">
              Open to product leadership conversations{" "}
              <ArrowUpRight size={14} />
            </a>
            <Link href="/speaking">
              Speaking & events <ArrowUpRight size={14} />
            </Link>
            <Link href="/writings">
              My writings <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
        <AchievementOverview />
        <PortfolioExplorer />
        <SkillsTools />
        <footer className="pv-footer">
          <div>
            <p className="pv-eyebrow">Product leadership · Technical founder</p>
            <h2>Get in touch.</h2>
            <a className="pv-text-link" href="mailto:win@talentos.so">
              win@talentos.so <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="pv-socials">
            <Link href="/writings">
              My writings <ArrowUpRight size={13} />
            </Link>
            <a href="https://x.com/win22james">
              X <ArrowUpRight size={13} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
