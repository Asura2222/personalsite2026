'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

type FilterType = "everything" | "projects" | "communities";

const projects = [
  {
    id: 1,
    title: "Build Myanmar",
    description: "The largest tech ecosystem in Myanmar with 5,000+ members, physical spaces, and community initiatives.",
    category: "community" as const,
    href: "#",
  },
  {
    id: 2,
    title: "TalentOS",
    description: "A global platform for skills and identity, enabling proof of work and fair opportunity.",
    category: "project" as const,
    href: "#",
  },
  {
    id: 3,
    title: "Nation Building Podcast",
    description: "A podcast series exploring the intersection of technology, philosophy, and nation-building.",
    category: "project" as const,
    href: "#",
  },
  {
    id: 4,
    title: "Builder Community",
    description: "A community of entrepreneurs and builders dedicated to creating impact in Myanmar.",
    category: "community" as const,
    href: "#",
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
      <div className="mb-8 flex gap-2 border-b border-gray-200 dark:border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
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
              className={`relative z-10 ${
                activeTab === tab.id
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
