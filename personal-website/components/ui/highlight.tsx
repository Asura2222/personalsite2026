import { cn } from "@/lib/utils";

type HighlightColor = "blue" | "green" | "yellow" | "purple" | "red";

interface HighlightProps {
  children: React.ReactNode;
  color?: HighlightColor;
  className?: string;
}

const colorMap: Record<HighlightColor, string> = {
  blue: "bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-200",
  green: "bg-green-100 text-green-900 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-200",
  yellow: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200",
  purple: "bg-purple-100 text-purple-900 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-200",
  red: "bg-red-100 text-red-900 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-200",
};

export function Highlight({ children, color = "yellow", className }: HighlightProps) {
  return (
    <span
      className={cn(
        "inline-block px-1.5 py-0.5 rounded transition-colors",
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}
