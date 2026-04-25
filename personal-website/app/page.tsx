import { Highlight } from "@/components/ui/highlight";
import { ProjectGrid } from "@/components/sections/project-grid";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Header with Name and Social Icons */}
      <header className="mb-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center">
            <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl whitespace-nowrap">
              James Win
            </h1>
            <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/profile.jpg"
                alt="James Win"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/Win22James"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-black"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/james-win/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-black"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/Asura2222"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-black"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:win@talentosapp.com"
              className="text-gray-400 transition-colors hover:text-black"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://t.me/win22james"
              target="_blank"
              className="text-gray-400 transition-colors hover:text-[#0088cc]"
            >
              <span className="text-sm font-bold border rounded px-1">TG</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Tagline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Philosopher. Buddhist. Builder.
        </h2>
        <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
          I grew up in Myanmar as a curious, insecure kid. The only way I knew how to prove myself was to <span className="font-semibold text-black">build things</span>.
        </p>
      </section>

      {/* Origin — Build Myanmar */}
      <section className="mb-12">
        <h3 className="mb-5 text-xs uppercase tracking-widest text-gray-400 font-medium">
          Origin
        </h3>
        <div className="space-y-5 text-lg leading-relaxed text-gray-700 md:text-xl">
          <p>
            A project I started at 19 grew into something real. <Highlight color="blue">Build Myanmar</Highlight> became the country&apos;s largest tech community &mdash; <Highlight color="blue">450K+ followers</Highlight>, <Highlight color="blue">60M+ views</Highlight>, and <Highlight color="green">5,000 builders</Highlight> who showed up because someone finally made a place for them.
          </p>
          <p>
            We opened Myanmar&apos;s first physical spaces for builders and entrepreneurs, and produced the country&apos;s most famous tech podcast &mdash; giving a voice to the people actually doing the work.
          </p>
        </div>
      </section>

      {/* The Insight */}
      <section className="mb-12">
        <h3 className="mb-5 text-xs uppercase tracking-widest text-gray-400 font-medium">
          The Insight
        </h3>
        <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
          That community showed me the same thing over and over: <span className="italic font-medium text-gray-900">96% of companies can&apos;t show ROI from AI. It&apos;s not a tool problem &mdash; it&apos;s a readiness problem.</span>
        </p>
        <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-700 md:text-xl">
          <p>
            So I built <Highlight color="purple">TalentOS</Highlight> &mdash; the AI-native workforce readiness platform. We read your business goals, give every employee personalized AI missions tied to those goals, grade the output, and show managers exactly who&apos;s capable. <Highlight color="purple">15,000+ users</Highlight>. Now scaling into enterprise.
          </p>
        </div>
      </section>

      {/* Now */}
      <section className="mb-16">
        <h3 className="mb-5 text-xs uppercase tracking-widest text-gray-400 font-medium">
          Now
        </h3>
        <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
          I&apos;m in San Francisco. I studied Applied Economics. I read too much philosophy. I love storytelling. And I believe the fastest way to rebuild a country is to build systems that let everyone prove what they&apos;re capable of.
        </p>
      </section>

      {/* Project Grid */}
      <section>
        <ProjectGrid />
      </section>
    </div>
  );
}
