import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  category: "project" | "community";
  className?: string;
}

export function ProjectCard({
  title,
  description,
  href,
  category,
  className,
}: ProjectCardProps) {
  const content = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-400",
        className
      )}
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-black">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
      <div className="mt-4">
        <span className="text-xs uppercase tracking-wider text-gray-500">
          {category}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
