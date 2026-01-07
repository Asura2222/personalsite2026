import { Highlight } from "@/components/ui/highlight";

export const metadata = {
  title: "Experiences | Name Surname",
  description: "My journey building companies and communities.",
};

const experiences = [
  {
    role: "Founder & CEO",
    company: "TalentOS",
    period: "2023 - Present",
    description: "Building the global standard for skill verification and identity. Raised pre-seed funding and grew team to 15 people.",
    highlight: "blue" as const,
  },
  {
    role: "Founder",
    company: "Build Myanmar",
    period: "2020 - Present",
    description: "Built the largest tech ecosystem in Myanmar. grew community to 5,000+ members, hosted 50+ events, and established physical builder spaces.",
    highlight: "green" as const,
  },
  {
    role: "Product Lead",
    company: "Tech Giant Corp (Example)",
    period: "2018 - 2020",
    description: "Led the expansion of digital payments infrastructure across Southeast Asia.",
    highlight: "yellow" as const,
  },
];

export default function Experiences() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-12 text-4xl font-bold tracking-tight text-black dark:text-white">
        Experiences
      </h1>

      <div className="relative border-l border-gray-200 ml-3 dark:border-gray-800">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-6 group">
            <div className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 group-hover:bg-black dark:group-hover:bg-white transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {exp.role}
                <span className="text-gray-400 font-normal mx-2">at</span>
                <Highlight color={exp.highlight}>{exp.company}</Highlight>
              </h2>
              <time className="text-sm text-gray-400 mt-1 sm:mt-0 font-mono">
                {exp.period}
              </time>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
