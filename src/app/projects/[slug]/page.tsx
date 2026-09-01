import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechBadge";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Video,
  Award,
  Calendar,
  CheckCircle2,
  Lightbulb,
  Layers,
  Code,
  Target,
  Sparkles
} from "lucide-react";
import { GitHubIcon, FigmaIcon } from "@/components/ui/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Nguyen Thi Anh Vy",
    };
  }

  return {
    title: `${project.title} — Case Study | Nguyen Thi Anh Vy`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <main className="pt-28 pb-20 md:pt-36 md:pb-28 min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-white dark:bg-slate-950/30">
      <Container size="lg">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-400 hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF9137]" />
            <span>Back to Selected Projects</span>
          </Link>
        </div>

        {/* Project Header Block */}
        <div className="space-y-4 mb-10 text-left">
          <div className="flex flex-wrap items-center gap-3">
            {project.award && (
              <Badge variant="glow" size="md">
                <Award className="w-3.5 h-3.5 mr-1 text-[#FF9137]" />
                {project.award.rank} · {project.award.name}
              </Badge>
            )}
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-600 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#FF9137]" />
              {project.period || project.year}
            </span>
            <Badge variant="subtle" size="md">
              {project.category}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#ea580c] dark:text-amber-300 font-mono font-bold">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed pt-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Large Visual Showcase */}
        <div className="mb-14 rounded-3xl overflow-hidden shadow-xl border border-amber-200/80 dark:border-slate-800">
          <PlaceholderVisual
            type={project.slug as "zengaku" | "color-blindness-assistant" | "ai-aging-care"}
            title={project.title}
            category={project.category}
            badge={project.badge}
            className="min-h-[380px] sm:min-h-[480px]"
          />
        </div>

        {/* Editorial Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Narrative */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview & Purpose */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#ea580c] dark:text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#FF9137]" />
                <span>Project Overview &amp; Purpose</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.fullOverview}
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-slate-900/60 border border-amber-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 shadow-sm">
                <strong className="text-[#c2410c] dark:text-[#fdba74] font-bold block mb-1">Core Objective:</strong>
                {project.purpose}
              </div>
            </section>

            {/* My Role & Contributions */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#ea580c] dark:text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                <Code className="w-4 h-4 text-[#FF9137]" />
                <span>My Role &amp; Technical Contributions</span>
              </div>
              <div className="font-bold text-base text-slate-950 dark:text-white">
                Role: <span className="text-[#ea580c] dark:text-amber-300 font-semibold">{project.role}</span>
              </div>
              <ul className="space-y-3">
                {project.myContributions.map((contribution, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contribution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Learnings */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#0f766e] dark:text-[#70FFD2] font-mono text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-[#0d9488]" />
                <span>Key Learnings &amp; Engineering Takeaways</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyLearnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-amber-50/50 dark:bg-slate-900/80 border border-amber-200/70 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-sm"
                  >
                    <div className="font-mono text-[10px] font-bold text-[#c2410c] dark:text-[#fdba74] mb-1">
                      LEARNING 0{idx + 1}
                    </div>
                    {learning}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Sidebar: Tech Stack & Action Links */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Action Links Box */}
            <div className="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 space-y-3 bg-white/95 dark:bg-slate-900/90 shadow-sm">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Project Resources &amp; Demos
              </h3>

              <div className="space-y-2.5 pt-1">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-amber-50/50 dark:bg-slate-800 hover:bg-amber-100/70 dark:hover:bg-slate-700 text-xs font-semibold text-slate-900 dark:text-white border border-amber-200/80 dark:border-slate-700 transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <GitHubIcon className="w-4 h-4" />
                      <span>Source Code Repository</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}

                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FFFC8C]/40 dark:bg-yellow-950/40 hover:bg-[#FFFC8C]/70 dark:hover:bg-yellow-900/60 text-xs font-semibold text-[#854d0e] dark:text-[#fef08a] border border-[#FFCC4D]/70 dark:border-yellow-800/60 transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <FigmaIcon className="w-4 h-4 text-[#ca8a04]" />
                      <span>Figma Design Prototype</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#ca8a04]" />
                  </a>
                )}

                {project.links.video && (
                  <a
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-amber-50/50 dark:bg-slate-800 hover:bg-amber-100/70 dark:hover:bg-slate-700 text-xs font-semibold text-slate-900 dark:text-white border border-amber-200/80 dark:border-slate-700 transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#FF9137]" />
                      <span>Video Demonstration</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}

                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-[#70FFD2]/20 dark:bg-teal-950/40 hover:bg-[#70FFD2]/40 text-xs font-semibold text-[#0f766e] dark:text-[#70FFD2] border border-[#70FFD2]/70 dark:border-teal-800 transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-[#0d9488]" />
                      <span>Research Demo Materials</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>

            {/* Technologies Box */}
            <div className="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 space-y-3 bg-white/95 dark:bg-slate-900/90 shadow-sm">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Technologies &amp; Tools Used
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} category={tech.category} size="md" />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Pagination Links */}
        <div className="mt-16 pt-8 border-t border-amber-200/60 dark:border-slate-800 flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-400 hover:text-[#ea580c] dark:hover:text-amber-300"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF9137] group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-[10px] text-slate-400 font-semibold">Previous Project</span>
                <span className="font-bold text-slate-900 dark:text-white">{prevProject.title}</span>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2 text-right text-xs font-mono text-slate-700 dark:text-slate-400 hover:text-[#ea580c] dark:hover:text-amber-300"
            >
              <div>
                <span className="block text-[10px] text-slate-400 font-semibold">Next Project</span>
                <span className="font-bold text-slate-900 dark:text-white">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#FF9137] group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>

      </Container>
    </main>
  );
}
