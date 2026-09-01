"use client";

import React from "react";
import { internationalActivities } from "@/data/activities";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import {
  Globe,
  MapPin,
  Plane,
  Users2,
  Sparkles,
  Compass,
  CheckCircle2
} from "lucide-react";

export const InternationalActivity: React.FC = () => {
  const activity = internationalActivities[0];

  return (
    <section id="activities" className="py-20 md:py-28 relative overflow-hidden">
      <Container size="xl">
        <SectionHeading
          badge="GLOBAL PERSPECTIVE"
          title="International Experience"
          subtitle="Broadening cultural awareness, cross-border teamwork, and open-minded communication through international student programs."
        />

        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/40 to-orange-50/20 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 relative overflow-hidden shadow-md shadow-[#FF9137]/5">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFCC4D]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#c2410c] dark:text-[#fdba74] bg-[#FF9137]/15 dark:bg-amber-950/60 px-3 py-1 rounded-full border border-[#FF9137]/40 flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5" />
                  Bangkok, Thailand · {activity.year}
                </span>
                <Badge variant="glow" size="sm">
                  Intercultural Program
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF9137]" />
                  <span>{activity.location}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {activity.description}
              </p>

              {/* Highlights checklist */}
              <div className="space-y-2.5 pt-2">
                {activity.keyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200/70 dark:border-slate-700 text-slate-800 dark:text-slate-300 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-slate-950 border border-amber-200/40 text-white relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#FFCC4D]" />
                    <span className="font-mono text-xs text-[#FFFC8C] font-bold uppercase tracking-wider">
                      Exchange Pathway
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">2025 Program</span>
                </div>

                {/* Route visualization */}
                <div className="space-y-6 relative">
                  {/* Origin */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#70FFD2]/20 border border-[#70FFD2] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#70FFD2]" />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] text-[#70FFD2] font-bold">ORIGIN</div>
                      <div className="font-bold text-sm text-white">Da Nang, Vietnam</div>
                      <div className="text-xs text-slate-400">Vietnam-Korea University (VKU)</div>
                    </div>
                  </div>

                  {/* Flight connector line */}
                  <div className="ml-4 pl-0.5 border-l-2 border-dashed border-[#FFCC4D]/60 h-8 -my-2" />

                  {/* Destination */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#FF9137]/20 border border-[#FF9137] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF9137]" />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] text-[#FF9137] font-bold">DESTINATION</div>
                      <div className="font-bold text-sm text-white">Bangkok, Thailand</div>
                      <div className="text-xs text-slate-400">Innovation &amp; Intercultural Camp</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Takeaway */}
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#FFCC4D] shrink-0" />
                  <span>Strengthened intercultural communication and global teamwork.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};
