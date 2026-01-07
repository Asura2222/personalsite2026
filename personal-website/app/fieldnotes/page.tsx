import Link from "next/link";

export const metadata = {
  title: "Fieldnotes | Name Surname",
  description: "Thoughts on building, philosophy, and systems.",
};

const posts = [
  {
    slug: "building-digital-nations",
    title: "Building Digital Nations",
    date: "2024-01-15",
    excerpt: "Why the next generation of countries will be cloud-first, and what it means for citizenship.",
  },
  {
    slug: "buddhist-ethics-for-founders",
    title: "Buddhist Ethics for Founders",
    date: "2023-11-02",
    excerpt: "Applying the Eightfold Path to product design and team culture. Scaling without losing your soul.",
  },
  {
    slug: "the-talent-os-manifesto",
    title: "The TalentOS Manifesto",
    date: "2023-08-20",
    excerpt: "Skill is the only currency that matters. How we are rebuilding the credential layer of the internet.",
  },
];

export default function Fieldnotes() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-12 text-4xl font-bold tracking-tight text-black dark:text-white">
        Fieldnotes
      </h1>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group cursor-pointer">
            <Link href={`#`} className="block">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h2 className="text-2xl font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-gray-400 font-mono shrink-0 mt-1 sm:mt-0">
                  {post.date}
                </time>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
