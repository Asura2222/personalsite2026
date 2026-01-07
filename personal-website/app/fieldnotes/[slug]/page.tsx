import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXContent } from "@/components/ui/mdx-content";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Back Link */}
      <Link
        href="/fieldnotes"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Fieldnotes
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span className="rounded bg-gray-100 px-2 py-1 text-xs uppercase tracking-wider dark:bg-gray-900">
            {post.category}
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300">
          {post.excerpt}
        </p>
      </header>

      {/* Article Content */}
      <article>
        <MDXContent>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-lg dark:prose-invert"
          />
        </MDXContent>
      </article>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
        <Link
          href="/fieldnotes"
          className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </footer>
    </div>
  );
}
