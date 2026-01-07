import { ReactNode } from "react";

interface MDXContentProps {
  children: ReactNode;
}

export function MDXContent({ children }: MDXContentProps) {
  return (
    <div className="prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-a:decoration-gray-300 hover:prose-a:decoration-black prose-strong:text-black prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-sm dark:prose-a:text-white dark:prose-a:decoration-gray-700 dark:hover:prose-a:decoration-white dark:prose-strong:text-white dark:prose-code:bg-gray-900">
      {children}
    </div>
  );
}
