import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent" | "success" | "warning" | "glow" | "subtle" | "mint" | "tangerine";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const variantClasses = {
    default: "bg-amber-50/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-amber-200/80 dark:border-slate-700",
    outline: "bg-transparent text-slate-800 dark:text-slate-200 border-amber-300 dark:border-slate-700",
    accent: "bg-[#FF9137]/15 dark:bg-orange-950/50 text-[#c2410c] dark:text-[#fdba74] border-[#FF9137]/40",
    success: "bg-[#70FFD2]/30 dark:bg-emerald-950/60 text-[#0f766e] dark:text-[#70FFD2] border-[#70FFD2]/70",
    warning: "bg-[#FFFC8C]/60 dark:bg-amber-950/60 text-[#854d0e] dark:text-[#fef08a] border-[#FFCC4D]/70",
    glow: "bg-[#FFCC4D]/25 dark:bg-amber-950/50 text-[#9a3412] dark:text-[#fde68a] border-[#FFCC4D]/70 shadow-[0_0_14px_rgba(255,204,77,0.4)]",
    subtle: "bg-slate-100/90 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800",
    mint: "bg-[#70FFD2]/30 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#70FFD2] border-[#70FFD2]/80",
    tangerine: "bg-[#FF9137]/20 dark:bg-orange-950/60 text-[#c2410c] dark:text-[#fdba74] border-[#FF9137]/70"
  };

  const sizeClasses = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs px-3 py-1 font-medium",
    lg: "text-sm px-3.5 py-1.5 font-medium"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
