import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external = false,
      icon,
      iconPosition = "right",
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#FF9137] via-[#FFCC4D] to-[#FF9137] bg-[length:200%_auto] hover:bg-right text-slate-950 font-bold shadow-md shadow-[#FF9137]/25 hover:shadow-lg hover:shadow-[#FF9137]/35 focus-visible:ring-[#FF9137]",
      secondary:
        "bg-[#70FFD2]/30 hover:bg-[#70FFD2]/50 text-slate-950 border border-[#70FFD2]/80 dark:bg-teal-950/60 dark:text-[#70FFD2] dark:border-teal-700 font-semibold focus-visible:ring-[#70FFD2]",
      outline:
        "border-2 border-amber-200/80 dark:border-slate-700 hover:border-[#FF9137] bg-white/90 dark:bg-slate-900/90 hover:bg-amber-50/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 focus-visible:ring-[#FF9137] font-semibold",
      ghost:
        "hover:bg-amber-50/80 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200 focus-visible:ring-[#FF9137]",
      link: "text-[#ea580c] dark:text-[#fdba74] font-semibold hover:underline p-0 h-auto",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      variant !== "link" && sizeStyles[size],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
