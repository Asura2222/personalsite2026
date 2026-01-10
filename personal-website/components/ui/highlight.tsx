import { cn } from "@/lib/utils";

type HighlightColor = "blue" | "green" | "yellow" | "purple" | "red";

interface HighlightProps {
  children: React.ReactNode;
  color?: HighlightColor;
  className?: string;
}

const colorMap: Record<HighlightColor, string> = {
  blue: "bg-blue-100 text-blue-900 hover:bg-blue-200",
  green: "bg-green-100 text-green-900 hover:bg-green-200",
  yellow: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200",
  purple: "bg-purple-100 text-purple-900 hover:bg-purple-200",
  red: "bg-red-100 text-red-900 hover:bg-red-200",
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
