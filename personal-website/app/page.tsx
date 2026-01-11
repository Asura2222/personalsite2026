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

      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Philosopher. Buddhist. Builder.
        </h2>
        <h3 className="text-xl text-gray-500 mb-6 font-medium">
          I build systems that make impact.
        </h3>
        <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
          At 19, I founded <Highlight color="blue">Build Myanmar</Highlight>, the country&apos;s largest tech media company, and now at 23, I am building <Highlight color="purple">TalentOS</Highlight>, the first full-stack AI hiring infrastructure.
        </p>
        <p className="mt-6 text-xl leading-relaxed text-gray-700 md:text-2xl">
          My work sits at the intersection of <Highlight color="green">community</Highlight>, <Highlight color="green">technology</Highlight>, and long-term <Highlight color="red">nation building</Highlight>.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-sm uppercase tracking-wider text-gray-500">
          Mission
        </h2>
        <div className="text-xl leading-relaxed text-gray-700 md:text-2xl space-y-4">
          <p>
            My life&apos;s goal is simple: <span className="font-semibold text-black">rebuild Myanmar</span>.
          </p>
          <p className="text-gray-500">
            Not through politics.<br />
            Not through charity.
          </p>
          <p>
            By building <Highlight color="blue">parallel systems</Highlight> that actually work:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-lg md:text-xl">
            <li>Community-owned infrastructure</li>
            <li>Skill-based identity and opportunity layer</li>
            <li>Media, education, and capital for builders</li>
          </ul>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-sm uppercase tracking-wider text-gray-500">
          Highlights &mdash; Some things I&apos;ve built along the way:
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>• Built Myanmar&apos;s largest tech builder community (<Highlight color="green">5,000+ members</Highlight>)</li>
          <li>• Founded TalentOS, the first full-stack AI hiring infrastructure (<Highlight color="purple">8000+ users</Highlight>)</li>
          <li>• Grew media reach to <Highlight color="blue">450K+ followers</Highlight> and <Highlight color="blue">60M+ total views</Highlight></li>
          <li>• Opened Myanmar&apos;s first physical spaces for builders and entrepreneurs</li>
          <li>• Produced Myanmar&apos;s most famous tech podcast</li>
        </ul>
      </section>

      {/* Project Grid */}
      <section>
        <ProjectGrid />
      </section>
    </div>
  );
}
