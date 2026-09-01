"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { competitionAchievements, certifications, digitalBadges } from "@/data/achievements";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { internationalActivities } from "@/data/activities";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Printer,
  ArrowLeft,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  Globe
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="pt-28 pb-20 md:pt-36 md:pb-28 min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 dark:bg-slate-950">
      <Container size="md">
        
        {/* Top Navigation & Print Actions */}
        <div className="no-print mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-400 hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF9137]" />
            <span>Back to Portfolio</span>
          </Link>

          <Button onClick={handlePrint} variant="outline" size="sm" icon={<Printer className="w-3.5 h-3.5 text-[#FF9137]" />}>
            Print / Save as PDF
          </Button>
        </div>

        {/* Printable Resume Sheet Container */}
        <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl border border-amber-200/80 print:shadow-none print:border-none print:p-0 print:m-0 print:rounded-none">
          
          {/* Resume Header */}
          <header className="border-b-2 border-slate-900 pb-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                  {profileData.name}
                </h1>
                <div className="text-sm font-bold text-[#ea580c] mt-1 font-mono">
                  {profileData.japaneseName} · {profileData.role}
                </div>
              </div>

              <div className="text-xs font-mono text-slate-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF9137]" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF9137]" />
                  <a href={`mailto:${profileData.contact.email}`} className="hover:underline text-slate-900 font-semibold">{profileData.contact.email}</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <GitHubIcon className="w-3.5 h-3.5 text-slate-900" />
                  <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-900 font-semibold">
                    github.com/{profileData.contact.githubUsername}
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
              {profileData.coreMessage} {profileData.tagline}
            </p>
          </header>

          {/* 1. Education */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-amber-200 pb-1.5 mb-3 font-mono">
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-sm text-slate-900">{edu.institution}</div>
                  <div className="text-xs font-mono text-slate-600">{edu.period}</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div className="text-[#ea580c] font-bold">{edu.degree}</div>
                  <div className="font-mono text-slate-500">Expected: {edu.expectedGraduation}</div>
                </div>
                <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1 pt-1">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* 2. Honors & Competitions */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-amber-200 pb-1.5 mb-3 font-mono">
              Awards &amp; Competitions
            </h2>
            <div className="space-y-3">
              {competitionAchievements.map((item) => (
                <div key={item.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{item.title} — <span className="text-[#ea580c]">{item.rank}</span></span>
                    <span className="font-mono text-slate-600">{item.year}</span>
                  </div>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Certifications & Badges */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-amber-200 pb-1.5 mb-3 font-mono">
              Certifications &amp; Language Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/70 shadow-sm">
                  <div className="font-bold text-slate-900">{cert.title}</div>
                  <div className="text-[#ea580c] font-bold">{cert.rank} ({cert.date})</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{cert.organization}</div>
                </div>
              ))}
              {digitalBadges.map((b) => (
                <div key={b.id} className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/70 shadow-sm">
                  <div className="font-bold text-slate-900">{b.title}</div>
                  <div className="text-[#ea580c] font-bold">{b.rank} ({b.date})</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{b.organization}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Projects Showcase */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-amber-200 pb-1.5 mb-3 font-mono">
              Technical Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold text-sm text-slate-900">
                      {proj.title} <span className="font-normal text-slate-600 font-mono">({proj.category})</span>
                    </div>
                    <span className="font-mono text-slate-600">{proj.period || proj.year}</span>
                  </div>
                  <div className="text-[#ea580c] font-bold">Role: {proj.role}</div>
                  <p className="text-slate-700 leading-relaxed">{proj.shortDescription}</p>
                  <div className="font-mono text-[11px] text-slate-600 pt-0.5">
                    <strong>Tech:</strong> {proj.technologies.map(t => t.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Technical Skills */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-amber-200 pb-1.5 mb-3 font-mono">
              Technical Competencies
            </h2>
            <div className="space-y-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-bold text-slate-900 min-w-[170px] shrink-0 font-mono">
                    {cat.title}:
                  </span>
                  <span className="text-slate-700">
                    {cat.skills.map(s => s.name).join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. International Experience */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-amber-200 pb-1.5 mb-3 font-mono">
              International Activities
            </h2>
            {internationalActivities.map((act) => (
              <div key={act.id} className="text-xs space-y-1">
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>{act.title}</span>
                  <span className="font-mono text-slate-600">{act.location} · {act.year}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{act.description}</p>
              </div>
            ))}
          </section>

        </div>

      </Container>
    </main>
  );
}
