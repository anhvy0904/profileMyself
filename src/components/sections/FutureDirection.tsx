"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Layers, Sparkles, Cpu, Compass, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export const FutureDirection: React.FC = () => {
  return (
    <section id="direction" className="py-20 md:py-28 bg-amber-50/20 dark:bg-slate-950/40 border-t border-amber-200/60 dark:border-slate-800/80 relative">
      <Container size="xl">
        <SectionHeading
          badge="VISION &amp; ASPIRATION"
          title="Where I'm Going"
          subtitle="Long-term perspective on continuous technical growth, system engineering, and engineering for societal value."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Statement Box */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 md:p-12 border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/40 to-teal-50/20 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 relative overflow-hidden shadow-xl shadow-[#FF9137]/10">
            {/* Glowing orb */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FFCC4D]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#c2410c] dark:text-[#fdba74] font-bold tracking-wider uppercase">
                <Compass className="w-4 h-4 text-[#FF9137]" />
                <span>Engineering Philosophy</span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white leading-snug tracking-tight">
                &ldquo;{profileData.futureDirection.quote}&rdquo;
              </blockquote>

              {/* Three Strategic Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-amber-200/60 dark:border-slate-800/80">
                {profileData.futureDirection.pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-2 shadow-sm"
                  >
                    <div className="font-mono text-xs font-bold text-[#c2410c] dark:text-[#fdba74]">
                      0{index + 1}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                  Ready to collaborate on impactful engineering projects.
                </p>
                <Button href="#contact" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Let&apos;s Connect
                </Button>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
