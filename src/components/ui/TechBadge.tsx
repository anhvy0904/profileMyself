import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  category?: string;
  size?: "sm" | "md";
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  category,
  size = "md",
  className,
}) => {
  const categoryStyles: Record<string, string> = {
    frontend: "border-[#FF9137]/40 bg-[#FF9137]/10 dark:bg-orange-950/40 text-[#c2410c] dark:text-orange-300 font-semibold",
    backend: "border-[#FFCC4D]/60 bg-[#FFCC4D]/15 dark:bg-amber-950/40 text-[#9a3412] dark:text-amber-300 font-semibold",
    database: "border-[#70FFD2]/70 bg-[#70FFD2]/20 dark:bg-emerald-950/40 text-[#0f766e] dark:text-emerald-300 font-semibold",
    ai: "border-[#70FFD2]/70 bg-[#70FFD2]/20 dark:bg-teal-950/40 text-[#0f766e] dark:text-teal-300 font-semibold",
    design: "border-[#FFCC4D]/60 bg-[#FFFC8C]/50 dark:bg-yellow-950/40 text-[#854d0e] dark:text-yellow-300 font-semibold",
    tools: "border-amber-200/80 bg-amber-50/70 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200",
  };

  const defaultStyle = "border-amber-200/70 dark:border-slate-800 bg-amber-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200";
  const selectedCategory = category ? categoryStyles[category] || defaultStyle : defaultStyle;

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono rounded-lg border transition-all duration-200 hover:scale-105",
        selectedCategory,
        size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs font-medium",
        className
      )}
    >
      {name}
    </span>
  );
};
