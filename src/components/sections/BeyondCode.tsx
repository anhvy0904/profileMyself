"use client";

import React from "react";
import { beyondCodeInterests } from "@/data/beyondCode";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { BookOpen, Mountain, Languages, Sparkles } from "lucide-react";

export const BeyondCode: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-5 h-5 text-[#FF9137]" />,
    Mountain: <Mountain className="w-5 h-5 text-[#0d9488]" />,
    Languages: <Languages className="w-5 h-5 text-[#d97706]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#ea580c]" />
  };

  return (
    <section id="beyond-code" className="py-20 md:py-28 relative">
      <Container size="xl">
        <SectionHeading
          badge="HUMAN SIDE &amp; INTERESTS"
          title="Beyond Code"
          subtitle="Activities, pursuits, and personal interests that cultivate balance, continuous learning, and curiosity."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beyondCodeInterests.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-slate-800/80 w-fit mb-4 group-hover:scale-110 transition-transform">
                {iconMap[item.iconName]}
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                {item.japaneseTitle && (
                  <span className="text-xs font-mono text-slate-500">
                    ({item.japaneseTitle})
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
