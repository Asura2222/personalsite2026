import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Fieldnotes | James Win",
  description: "Thoughts on building, philosophy, and systems.",
};

const posts = [
  {
    title: "The Future of Human Agency",
    url: "https://open.substack.com/pub/monkeynews/p/the-future-of-human-agency?r=28bm6r&utm_campaign=post&utm_medium=web",
    date: "Substack",
    excerpt: "Exploring how technology and philosophy intersect to define our capacity to act.",
  },
  {
    title: "How to Manage People",
    url: "https://open.substack.com/pub/monkeynews/p/how-to-manage-people?utm_campaign=post-expanded-share&utm_medium=web",
    date: "Substack",
    excerpt: "Direct, honest, and results-oriented management principles.",
  },
  {
    title: "Builder Syndrome",
    url: "https://open.substack.com/pub/monkeynews/p/builder-syndrome?utm_campaign=post-expanded-share&utm_medium=web",
    date: "Substack",
    excerpt: "The psychological challenges and drivers of those who build.",
  },
];

export default function Fieldnotes() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          Fieldnotes
        </h1>
        <Link
          href="https://monkeynews.substack.com/"
          target="_blank"
          className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors"
        >
          Read on Substack <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.title} className="group">
            <Link
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-1 -m-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors flex items-center gap-2">
                  {post.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                </h2>
                <span className="text-sm text-gray-400 font-mono shrink-0 mt-1 sm:mt-0 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">
                  {post.date}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-900 text-center">
        <Link
          href="https://monkeynews.substack.com/"
          target="_blank"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          View all posts on Substack <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
