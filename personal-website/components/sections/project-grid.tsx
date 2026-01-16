'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

type FilterType = "everything" | "projects" | "communities";

const projects = [
  {
    id: 1,
    title: "TalentOS",
    description: "TalentOS is the verification layer for the labor market. We’re replacing traditional credentials with verified data from real work, so hiring runs on proof instead of claims. We are building an automated and meritocratic labor market where verified action data becomes the universal standard for employment.",
    category: "project" as const,
    href: "https://www.talentosapp.com/",
  },
  {
    id: 101,
    title: "TalentHunt",
    description: "Hire the top 1% of Myanmar talent. Verified skills. Real work. Ready to deploy.",
    category: "project" as const,
    href: "https://www.talenthunt.so/",
  },
  {
    id: 2,
    title: "Build Myanmar - Media",
    description: "Myanmar's largest tech media ecosystem. 60M+ impressions. 450K+ followers across platforms.",
    category: "community" as const,
    href: "https://www.youtube.com/watch?v=98M74xzlDb8",
  },
  {
    id: 3,
    title: "The Glitch Network — Book",
    description: "The first ever NFT-integrated reading experience. Collect chapters. Unlock the full story.",
    category: "project" as const,
    href: "https://x.com/_glitchnetwork_/status/1770151551694201258",
  },
  {
    id: 4,
    title: "Build Myanmar Community Centers",
    description: "Physical spaces in Yangon. Built for a 5,000+ member community of builders and philosophers.",
    category: "community" as const,
    href: "https://www.youtube.com/watch?v=98M74xzlDb8",
  },
  {
    id: 5,
    title: "Events & Salons",
    description: "I regularly host small gatherings, talks, and builder meetups in San Francisco. Check the calendar.",
    category: "community" as const,
    href: "https://luma.com/user/win22",
  },
  {
    id: 6,
    title: "Anime & Manga List",
    description: "A window into my taste and influences.",
    category: "project" as const,
    href: "https://anilist.co/user/asuraasura/",
  },
];

const tabs: { id: FilterType; label: string }[] = [
  { id: "everything", label: "Everything" },
  { id: "projects", label: "Projects" },
  { id: "communities", label: "Communities" },
];

export function ProjectGrid() {
  const [activeTab, setActiveTab] = useState<FilterType>("everything");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "everything") return true;
    if (activeTab === "projects") return project.category === "project";
    if (activeTab === "communities") return project.category === "community";
    return true;
  });

  return (
    <div>
      {/* Tab Navigation */}
      <div className="mb-8 flex gap-2 border-b border-gray-200 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black"
                style={{ borderRadius: 6 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 ${activeTab === tab.id
                ? "text-white"
                : "text-gray-600 hover:text-black"
                }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              category={project.category}
              href={project.href}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
