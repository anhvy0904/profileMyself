"use client";

import React from "react";
import { competitionAchievements, certifications, digitalBadges } from "@/data/achievements";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import {
  Trophy,
  Award,
  Medal,
  Languages,
  FileSpreadsheet,
  ShieldCheck,
  Calendar,
  CheckCircle,
  ExternalLink
} from "lucide-react";

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-5 h-5 text-[#FF9137]" />,
    Award: <Award className="w-5 h-5 text-[#d97706]" />,
    Medal: <Medal className="w-5 h-5 text-[#0d9488]" />,
    Languages: <Languages className="w-5 h-5 text-[#0f766e]" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-[#ea580c]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#FFCC4D]" />
  };

  return (
    <section id="achievements" className="py-20 md:py-28 bg-amber-50/20 dark:bg-slate-950/40 border-t border-amber-200/60 dark:border-slate-800/80 relative">
      <Container size="xl">
        <SectionHeading
          badge="HONORS &amp; CREDENTIALS"
          title="Achievements &amp; Certifications"
          subtitle="A clear breakdown separating competitive awards, verified professional certifications, and digital credentials."
        />

        {/* 1. Competition Awards */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Trophy className="w-5 h-5 text-[#FF9137]" />
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Competition &amp; Research Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitionAchievements.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 flex flex-col justify-between hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#FF9137]">
                      {iconMap[item.iconName]}
                    </div>
                    <Badge variant="glow" size="sm">
                      {item.badgeText}
                    </Badge>
                  </div>

                  <div className="font-mono text-xs text-[#ea580c] dark:text-[#fdba74] font-bold mb-1">
                    {item.rank} · {item.year}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500">
                  {item.organization}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Certifications & Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Professional Certifications */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-6">
              <Award className="w-5 h-5 text-[#d97706]" />
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Official Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card rounded-2xl p-5 border border-amber-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#d97706] shrink-0 mt-0.5 sm:mt-0">
                      {iconMap[cert.iconName]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <Badge variant="success" size="sm">
                          {cert.rank}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-lg leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="text-[11px] font-mono text-slate-500 mt-1.5 flex items-center gap-2">
                        <span>{cert.organization}</span>
                        <span>·</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Badges */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#ea580c]" />
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Verified Digital Badges
              </h3>
            </div>

            <div className="space-y-4">
              {digitalBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="glass-card rounded-2xl p-5 border border-amber-200/80 dark:border-slate-800 hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#ea580c] shrink-0">
                      {iconMap[badge.iconName]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {badge.title}
                        </h4>
                        <Badge variant="tangerine" size="sm">
                          {badge.badgeText}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {badge.description}
                      </p>
                      <div className="text-[11px] font-mono text-slate-500 mt-1.5">
                        {badge.organization} · {badge.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
