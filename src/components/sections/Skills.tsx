"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import {
  Code2,
  Layout,
  Database,
  Brain,
  Briefcase,
  Terminal,
  FileCode,
  FileCode2,
  Coffee,
  Cpu,
  Server,
  Smartphone,
  Globe,
  Layers,
  FileText,
  Palette,
  HardDrive,
  Boxes,
  Table,
  Sparkles,
  BarChart3,
  Search,
  Users,
  FileSpreadsheet,
  Presentation,
  GitBranch
} from "lucide-react";

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-[#FF9137]" />,
    Layout: <Layout className="w-5 h-5 text-[#0d9488]" />,
    Database: <Database className="w-5 h-5 text-[#d97706]" />,
    Brain: <Brain className="w-5 h-5 text-[#0f766e]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#ea580c]" />,
  };

  const getLevelBadge = (level?: string) => {
    switch (level) {
      case "Experience":
        return (
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#70FFD2]/30 dark:bg-emerald-950/60 text-[#0f766e] dark:text-[#70FFD2] border border-[#70FFD2]/80">
            Experience
          </span>
        );
      case "Working Knowledge":
        return (
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FFCC4D]/30 dark:bg-amber-950/60 text-[#9a3412] dark:text-[#fde68a] border border-[#FFCC4D]/80">
            Working Knowledge
          </span>
        );
      case "Learning":
        return (
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FFFC8C]/60 dark:bg-yellow-950/60 text-[#854d0e] dark:text-[#fef08a] border border-[#FFCC4D]/70">
            Learning
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <Container size="xl">
        <SectionHeading
          badge="TECHNICAL COMPETENCIES"
          title="Skills &amp; Technology Stack"
          subtitle="A structured overview of programming languages, web & mobile frameworks, database architectures, and engineering disciplines practiced across coursework and projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-slate-800/80 shrink-0">
                    {categoryIcons[category.iconName]}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-amber-50/50 dark:bg-slate-900/80 border border-amber-200/70 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 hover:border-[#FF9137] hover:bg-white dark:hover:bg-slate-800 transition-all duration-150 shadow-sm"
                    >
                      <span className="font-semibold">{skill.name}</span>
                      {getLevelBadge(skill.level)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Note */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50/60 dark:bg-slate-900/40 border border-amber-200/70 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9137]" />
            <span>Honest Evaluation: Proficiency classifications reflect verified coursework, competitive project builds, and independent exploration.</span>
          </div>
          <div className="flex items-center gap-3 font-semibold">
            <span className="text-[#0f766e] dark:text-[#70FFD2]">● Experience</span>
            <span className="text-[#9a3412] dark:text-[#fde68a]">● Working Knowledge</span>
            <span className="text-[#854d0e] dark:text-[#fef08a]">● Learning</span>
          </div>
        </div>

      </Container>
    </section>
  );
};
