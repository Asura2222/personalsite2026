import { Highlight } from "@/components/ui/highlight";
import { Briefcase } from "lucide-react";

export const metadata = {
  title: "Experiences | James Win",
  description: "My journey building companies and communities.",
};

const experiences = [
  {
    role: "Founder",
    company: "TalentOS",
    period: "Jan 2025 - Present",
    location: "San Francisco Bay Area",
    description: "Building the data layer for the global labor market. Today's labor market runs on unstructured documents & guesswork. We collect real work outputs at scale, verify it, and structure it into machine readable data that AI agents and enterprises can use.",
    highlight: "blue" as const,
  },
  {
    role: "Co Lead",
    company: "Human Flourishing Floor @Frontier Tower",
    period: "Sep 2025 - Present",
    location: "San Francisco",
    description: "Co-creating Human Flourishing Floor into San Francisco's leading hub where the most influential & the brightest minds come together to advance human flourishing.",
    highlight: "purple" as const,
  },
  {
    role: "CEO",
    company: "Build Myanmar - Media",
    period: "Sep 2023 - Present",
    location: "Remote/Myanmar",
    description: "Founded Myanmar's largest tech media brand, which reached more than 60 million impressions and 20 million views in its first year. Grew our social media following to over 230,000 on Facebook, 140,000 on TikTok, and 80,000 on YouTube. Produced and managed multimedia content like documentaries, podcasts, and shows.",
    highlight: "green" as const,
  },
  {
    role: "Founder",
    company: "Build Myanmar Community",
    period: "Sep 2023 - Present",
    location: "Myanmar",
    description: "Opened Myanmar's first ever & largest builder space to bring together most ambitious builders, creators, and tinkerers (now with two spaces opened). Grew the community to over 5,000 members and counting.",
    highlight: "green" as const,
  },
  {
    role: "Head of Development",
    company: "The Glitch Network DAO",
    period: "Oct 2023 - Mar 2024",
    location: "Remote",
    description: "Led the development of the Glitch Network DAO, integrating blockchain technology with interactive storytelling. Managed the creation of a unique membership model using NFTs and RWAs. Authored the first-ever Web3 book combining NFTs, storytelling, and animations.",
    highlight: "red" as const,
  },
  {
    role: "Senior Advisor / Consultant",
    company: "Pathway Plus Education Consulting",
    period: "Feb 2021 - Jul 2023",
    location: "Contract",
    description: "Mentored junior consultants and contributed to the development of innovative advising methodologies. Developed comprehensive strategies for university selection and financial aid optimization.",
    highlight: "yellow" as const,
  },
];

export default function Experiences() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-black dark:text-white flex items-center gap-4">
        Experiences
      </h1>

      {/* Background Section */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Background</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          <p>
            I&apos;m originally from <Highlight color="red">Myanmar</Highlight>.
            I studied <Highlight color="yellow">Applied Economics</Highlight> in the U.S.
          </p>
          <p>
            My strengths are <Highlight color="purple">storytelling</Highlight>, <Highlight color="green">community building</Highlight> & <Highlight color="blue">execution</Highlight>.
            I spend most of my time building systems that help people learn, build, and find meaningful work.
          </p>
          <p>
            Right now, my focus is <Highlight color="blue">TalentOS</Highlight> and expanding <Highlight color="green">Build Myanmar</Highlight>&apos;s physical and digital infrastructure.
          </p>
        </div>
      </section>

      <div className="relative border-l border-gray-200 ml-3 dark:border-gray-800">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 ml-6 group relative">
            <div className="absolute -left-[31px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 group-hover:bg-black dark:group-hover:bg-white transition-colors shadow-sm" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  {exp.role}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-gray-500">at</span>
                  <Highlight color={exp.highlight}>{exp.company}</Highlight>
                </div>
              </div>
              <div className="mt-2 sm:mt-0 text-right">
                <time className="block text-sm font-medium text-black dark:text-white">
                  {exp.period}
                </time>
                <span className="text-xs text-gray-400 font-mono">
                  {exp.location}
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
