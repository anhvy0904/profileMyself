"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { TechBadge } from "../ui/TechBadge";
import { PlaceholderVisual } from "../ui/PlaceholderVisual";
import { Badge } from "../ui/Badge";
import {
  ExternalLink,
  ArrowRight,
  Video,
  Award,
  Calendar,
  Layers
} from "lucide-react";
import { GitHubIcon, FigmaIcon } from "../ui/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-200/80 dark:border-slate-800/90 relative overflow-hidden group hover:border-[#FF9137] shadow-md shadow-[#FF9137]/5 hover:shadow-xl hover:shadow-[#FF9137]/15 bg-white/95 dark:bg-slate-900/90 transition-all duration-300">
      
      {/* Decorative gradient corner */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none transition-opacity duration-300 group-hover:opacity-45"
        style={{ backgroundColor: project.accentColor || "#FF9137" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Column */}
        <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-amber-200/80 dark:border-slate-800/80 group-hover:scale-[1.01] transition-transform duration-300">
            <PlaceholderVisual
              type={project.slug as "zengaku" | "color-blindness-assistant" | "ai-aging-care"}
              title={project.title}
              category={project.category}
              badge={project.badge}
            />
          </div>
        </div>

        {/* Content Column */}
        <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-5 text-left`}>
          
          {/* Top Metadata row */}
          <div className="flex flex-wrap items-center gap-2.5">
            {project.award && (
              <Badge variant="glow" size="sm" className="font-mono">
                <Award className="w-3.5 h-3.5 mr-1 text-[#FF9137]" />
                {project.award.rank} · {project.award.name}
              </Badge>
            )}
            <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-600 dark:text-slate-400 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#FF9137]" />
              {project.period || project.year}
            </span>
          </div>

          {/* Titles */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-[#ea580c] dark:group-hover:text-amber-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-[#ea580c] dark:text-amber-400 font-bold mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Role & Key Contributions summary */}
          <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-slate-900/60 border border-amber-200/80 dark:border-slate-800/80 space-y-1.5 shadow-sm">
            <div className="text-xs font-mono font-bold text-slate-900 dark:text-slate-200">
              My Role: <span className="text-[#ea580c] dark:text-amber-300 font-semibold">{project.role}</span>
            </div>
            <ul className="text-xs text-slate-700 dark:text-slate-400 space-y-1 pl-3.5 list-disc">
              {project.myContributions.slice(0, 2).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technologies Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} category={tech.category} size="sm" />
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            {/* Project Case Study Page */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FF9137] via-[#FFCC4D] to-[#FF9137] bg-[length:200%_auto] hover:bg-right rounded-xl shadow-md shadow-[#FF9137]/20 transition-all duration-150 group/btn"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            {/* GitHub */}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-amber-200/80 dark:border-slate-700 rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
              </a>
            )}

            {/* Figma */}
            {project.links.figma && (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#854d0e] dark:text-[#fef08a] bg-[#FFFC8C]/50 dark:bg-yellow-950/40 border border-[#FFCC4D]/80 dark:border-yellow-800/60 rounded-xl hover:bg-[#FFFC8C]/80 dark:hover:bg-yellow-900/60 transition-colors shadow-sm"
              >
                <FigmaIcon className="w-3.5 h-3.5" />
                <span>Figma</span>
                <ExternalLink className="w-3 h-3 text-[#ca8a04] ml-0.5" />
              </a>
            )}

            {/* Video Demo */}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-amber-200/80 dark:border-slate-700 rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                <Video className="w-3.5 h-3.5 text-[#FF9137]" />
                <span>Video Demo</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
              </a>
            )}

            {/* Drive / Other Demo */}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0f766e] dark:text-[#70FFD2] bg-[#70FFD2]/20 dark:bg-teal-950/40 border border-[#70FFD2]/70 dark:border-teal-800 rounded-xl hover:bg-[#70FFD2]/40 dark:hover:bg-teal-900 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#0d9488]" />
                <span>Demo Materials</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
