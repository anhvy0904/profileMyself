"use client";

import React from "react";
import { educationData } from "@/data/education";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from "lucide-react";

export const Education: React.FC = () => {
  const edu = educationData[0];

  return (
    <section id="education" className="py-20 md:py-28 bg-amber-50/20 dark:bg-slate-950/40 border-t border-amber-200/60 dark:border-slate-800/80 relative">
      <Container size="xl">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Formal computer science foundation, software engineering principles, and academic development."
        />

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-200/80 dark:border-slate-800/80 hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-amber-100 dark:border-slate-800">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF9137]/15 text-[#c2410c] dark:text-[#fdba74] flex items-center justify-center shrink-0 border border-[#FF9137]/40 shadow-sm">
                  <GraduationCap className="w-6 h-6 text-[#FF9137]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                      {edu.institution}
                    </h3>
                    {edu.japaneseInstitution && (
                      <span className="text-xs font-mono text-slate-500">
                        ({edu.japaneseInstitution})
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-[#ea580c] dark:text-amber-400">
                    {edu.degree}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF9137]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                <Badge variant="glow" size="md">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {edu.period}
                </Badge>
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold">
                  Expected: <strong className="text-slate-950 dark:text-slate-200">{edu.expectedGraduation}</strong>
                </div>
              </div>

            </div>

            {/* Highlights and Coursework */}
            <div className="mt-6 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#ea580c] dark:text-amber-400 font-bold">
                Curriculum &amp; Academic Scope
              </h4>
              <div className="space-y-2.5">
                {edu.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};
