"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800/80 relative">
      <Container size="xl">
        <SectionHeading
          badge="FEATURED ENGINEERING WORK"
          title="Selected Projects &amp; Case Studies"
          subtitle="Three major technical projects spanning full-stack web platforms, AI assistive research, and cross-platform mobile systems built for competitive and social impact initiatives."
        />

        <div className="space-y-10 md:space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
