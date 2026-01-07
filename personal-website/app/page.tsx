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
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-5xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl dark:text-white">
              James Win
            </h1>
            <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              {/* 
                  NOTE TO USER: Replace '/profile.svg' with your actual image file.
                  Put your 'profile.jpg' or 'profile.png' in the 'public' folder.
               */}
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
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="text-gray-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://t.me/win22james"
              target="_blank"
              className="text-gray-400 transition-colors hover:text-[#0088cc]"
            >
              {/* Lucide doesn't have Telegram by default, using a text label or generic icon? 
                   Actually Send/MessageCircle is close, but better to just use text or generic.
                   I'll use 'Send' as proxy or just rely on the others. 
                   Wait, user provided specific Telegram link. I should add it.
               */}
              <span className="text-sm font-bold border rounded px-1">TG</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Philosopher, Buddhist Builder.
        </h2>
        <p className="text-xl leading-relaxed text-gray-700 md:text-2xl dark:text-gray-300">
          I am a builder focused on meaning, systems, and ethics. My life&apos;s work is dedicated to rebuilding Myanmar.
        </p>
        <p className="mt-6 text-xl leading-relaxed text-gray-700 md:text-2xl dark:text-gray-300">
          I founded{" "}
          <Highlight color="blue">Build Myanmar</Highlight>, the largest tech
          ecosystem in the country, and{" "}
          <Highlight color="purple">TalentOS</Highlight>, a global platform for
          skills and opportunity.
        </p>
      </section>

      {/* Cool Things Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-sm uppercase tracking-wider text-gray-500">
          some cool things I&apos;ve done:
        </h2>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
          <li>• Built Myanmar&apos;s largest tech ecosystem (5,000+ members)</li>
          <li>• Founded TalentOS, a global skills and identity platform</li>
          <li>• Grew social media presence to 400K+ followers</li>
          <li>• Established physical spaces for builders and entrepreneurs</li>
          <li>• Launched podcasts and content series on nation-building</li>
          <li>• Applied Buddhist philosophy to modern technology and ethics</li>
        </ul>
      </section>

      {/* Project Grid */}
      <section>
        <ProjectGrid />
      </section>
    </div>
  );
}
