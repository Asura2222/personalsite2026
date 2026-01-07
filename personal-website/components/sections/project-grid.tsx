'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

type FilterType = "everything" | "projects" | "communities";

const projects = [
  {
    id: 1,
    title: "TalentOS",
    description: "Building the global standard for skill verification and identity. Data layer for the labor market.",
    category: "project" as const,
    href: "https://www.talentosapp.com/",
  },
  {
    id: 101,
    title: "Talent for Employers",
    description: "Hire the top 1% of talent in Myanmar. Verified skills, ready to work.",
    category: "project" as const,
    href: "https://www.talenthunt.so/",
  },
  {
    id: 2,
    title: "Build Myanmar Media",
    description: "Largest tech media ecosystem in Myanmar. 60M+ impressions. 400K+ followers.",
    category: "community" as const,
    href: "https://www.youtube.com/watch?v=98M74xzlDb8",
  },
  {
    id: 3,
    title: "The Glitch Network DAO",
    description: "First-ever NFT integrated reading experience. Collect chapters to unlock the story.",
    category: "project" as const,
    href: "https://x.com/_glitchnetwork_/status/1770151551694201258",
  },
  {
    id: 4,
    title: "Builder Community Spaces",
    description: "Physical spaces in Yangon for 5,000+ member community of builders and philosophers.",
    category: "community" as const,
    href: "https://www.youtube.com/watch?v=98M74xzlDb8",
  },
  {
    id: 5,
    title: "Luma Events",
    description: "Check my calendar for upcoming events, meetups, and hacks.",
    category: "community" as const,
    href: "https://luma.com/user/win22",
  },
  {
    id: 6,
    title: "Anime & Manga List",
    description: "A window into my taste for storytelling and art.",
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
      <div className="mb-8 flex gap-2 border-b border-gray-200 dark:border-gray-800 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black dark:bg-white"
                style={{ borderRadius: 6 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 ${activeTab === tab.id
                  ? "text-white dark:text-black"
                  : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
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
