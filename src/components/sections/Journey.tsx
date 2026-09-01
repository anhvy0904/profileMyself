"use client";

import React from "react";
import { timelineMilestones } from "@/data/timeline";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import {
  GraduationCap,
  Trophy,
  Code,
  Award,
  Globe,
  Languages,
  Sparkles,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Journey: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-[#FF9137]" />;
      case "competition":
        return <Trophy className="w-4 h-4 text-[#d97706]" />;
      case "project":
        return <Code className="w-4 h-4 text-[#0d9488]" />;
      case "certification":
        return <Award className="w-4 h-4 text-[#0f766e]" />;
      case "international":
        return <Globe className="w-4 h-4 text-[#ea580c]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#FF9137]" />;
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative bg-amber-50/20 dark:bg-slate-950/40 border-t border-amber-200/60 dark:border-slate-800/80">
      <Container size="xl">
        <SectionHeading
          badge="CHRONOLOGY &amp; PROGRESSION"
          title="Engineering Journey &amp; Milestones"
          subtitle="Tracing my academic growth, competition milestones, technical certifications, and international experiences from 2023 leading toward graduation in 2028."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FF9137] via-[#FFCC4D] to-[#70FFD2] opacity-60" />

          <div className="space-y-8 sm:space-y-12">
            {timelineMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={cn(
                    "relative flex flex-col sm:flex-row items-start gap-6 sm:gap-0",
                    isEven ? "sm:flex-row-reverse" : ""
                  )}
                >
                  {/* Center Node / Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-[#FF9137] shadow-md shadow-[#FF9137]/20 flex items-center justify-center z-10">
                    {getIcon(milestone.type)}
                  </div>

                  {/* Content Box */}
                  <div
                    className={cn(
                      "w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0",
                      isEven ? "sm:pr-0 sm:text-left" : "sm:text-left"
                    )}
                  >
                    <div
                      className={cn(
                        "glass-card rounded-2xl p-5 sm:p-6 border transition-all duration-200 hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md",
                        milestone.highlight
                          ? "border-[#FFCC4D] bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:bg-amber-950/20"
                          : "border-amber-200/80 dark:border-slate-800"
                      )}
                    >
                      {/* Top Year & Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[#c2410c] dark:text-[#fdba74] bg-[#FF9137]/15 dark:bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-[#FF9137]/40">
                          {milestone.year}
                        </span>
                        <Badge variant="subtle" size="sm">
                          {milestone.tag}
                        </Badge>
                      </div>

                      {/* Title & Subtitle */}
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {milestone.title}
                      </h4>
                      {milestone.subtitle && (
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5 mb-2.5">
                          {milestone.subtitle}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};
