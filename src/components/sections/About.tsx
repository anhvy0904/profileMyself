"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { personalValues } from "@/data/values";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import {
  Compass,
  Target,
  Smile,
  Users,
  Sparkles,
  BookOpen,
  MapPin,
  Laptop,
  CheckCircle2
} from "lucide-react";

export const About: React.FC = () => {
  const valueIcons: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-[#FF9137]" />,
    Smile: <Smile className="w-5 h-5 text-[#0d9488]" />,
    Compass: <Compass className="w-5 h-5 text-[#d97706]" />,
    Users: <Users className="w-5 h-5 text-[#ea580c]" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 border-t border-amber-200/60 dark:border-slate-800/80 bg-amber-50/20 dark:bg-slate-950/40 relative">
      <Container size="xl">
        <SectionHeading
          badge="ABOUT ME &amp; VALUES"
          title="Curious mind, practical builder."
          subtitle="A Computer Science student driven by continuous learning, collaborative problem solving, and building digital tools that matter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Editorial Bio */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              I am currently a Computer Science student at{" "}
              <strong className="text-slate-950 dark:text-white font-bold">
                Vietnam-Korea University of Information and Communication Technology (VKU)
              </strong>
              . My journey in technology centers on practical execution—learning concepts by applying them in team projects, competitions, and research initiatives.
            </p>

            <p>
              Throughout my academic studies, I have actively participated in national and university technical competitions, from front-to-back web systems (<em>Zengaku</em>) to assistive AI models for vocational guidance (<em>Color Blindness Assistant</em>) and cross-platform mobile care apps (<em>AI Aging Care</em>).
            </p>

            <p>
              I deeply value team collaboration, methodical problem scoping, and understanding how different layers of a system connect—from user requirements and accessible UI/UX design to robust database queries and backend implementation.
            </p>

            {/* Key Pillars Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>Hands-on project builder</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF9137] shrink-0" />
                <span>Active competition participant</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>International exchange experience</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span>JLPT N4 Japanese proficiency</span>
              </div>
            </div>
          </div>

          {/* Right: "Currently" Status Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-slate-800 relative overflow-hidden shadow-md shadow-[#FF9137]/5 bg-white/95 dark:bg-slate-900/90">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCC4D]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-amber-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#70FFD2] border border-teal-600 animate-ping" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Currently
                  </h3>
                </div>
                <Badge variant="mint" size="sm">
                  Active Status
                </Badge>
              </div>

              <div className="mt-5 space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Studying
                  </div>
                  <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                    {profileData.currently.studying}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Interested In
                  </div>
                  <div className="font-bold text-[#ea580c] dark:text-amber-300 mt-0.5">
                    {profileData.currently.interestedIn}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Learning &amp; Exploring
                  </div>
                  <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                    {profileData.currently.learning}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Based In
                  </div>
                  <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF9137]" />
                    <span>{profileData.currently.basedIn}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Personality & Values Grid */}
        <div className="pt-6">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Core Qualities &amp; Work Ethic
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Guiding principles grounded in real project execution and teamwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {personalValues.map((value) => (
              <div
                key={value.number}
                className="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800/80 hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#c2410c] dark:text-[#fdba74] bg-[#FF9137]/15 dark:bg-orange-950/60 px-2.5 py-1 rounded-lg">
                    {value.number}
                  </span>
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-slate-800/60 group-hover:scale-110 transition-transform">
                    {valueIcons[value.iconName]}
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {value.title}
                  </h4>
                  {value.japaneseTitle && (
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      ({value.japaneseTitle})
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};
