"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Languages,
  Code2,
  Terminal,
  Brain,
  Layers,
  ChevronRight,
  Award
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Radiant ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFFC8C]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#70FFD2]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#FF9137]/20 rounded-full blur-[130px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF9137]/40 bg-gradient-to-r from-amber-50 to-orange-50 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#70FFD2] border border-teal-600 animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#c2410c] dark:text-[#fdba74] tracking-wide uppercase">
                {profileData.shortRole} · Class of 2028
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.12]">
              Building technology with{" "}
              <span className="text-gradient">curiosity, purpose</span>, and{" "}
              <span className="text-gradient-accent">real impact</span>.
            </h1>

            {/* Name Subtitle & Japanese Kanji */}
            <div className="flex items-center gap-2 font-mono text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{profileData.name}</span>
              <span className="text-amber-400">/</span>
              <span className="text-slate-600 dark:text-slate-400">{profileData.japaneseName}</span>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button href="#projects" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                View My Projects
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </div>

            {/* Quick Metadata Info Grid */}
            <div className="pt-6 border-t border-amber-200/60 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/60 p-2.5 rounded-xl border border-amber-200/70 dark:border-slate-800/60 shadow-sm">
                <MapPin className="w-4 h-4 text-[#FF9137] shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">Location</div>
                  <div className="font-bold text-slate-900 dark:text-slate-200">Da Nang, VN</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/60 p-2.5 rounded-xl border border-amber-200/70 dark:border-slate-800/60 shadow-sm">
                <Languages className="w-4 h-4 text-[#d97706] shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">Japanese</div>
                  <div className="font-bold text-slate-900 dark:text-slate-200">JLPT N4</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/60 p-2.5 rounded-xl border border-amber-200/70 dark:border-slate-800/60 shadow-sm">
                <Languages className="w-4 h-4 text-[#0d9488] shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">English</div>
                  <div className="font-bold text-slate-900 dark:text-slate-200">Conversational</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/60 p-2.5 rounded-xl border border-amber-200/70 dark:border-slate-800/60 shadow-sm">
                <Calendar className="w-4 h-4 text-[#FF9137] shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">Graduation</div>
                  <div className="font-bold text-slate-900 dark:text-slate-200">June 2028</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Abstract Engineering Interface & Profile */}
          <div className="lg:col-span-5 relative">
            {/* Outer Glow Wrapper */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Code Terminal Card */}
              <div className="glass-card rounded-2xl overflow-hidden border border-amber-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900/95">
                {/* Window Header */}
                <div className="px-4 py-3 bg-amber-50/70 dark:bg-slate-950/80 border-b border-amber-200/60 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF9137]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFCC4D]" />
                    <div className="w-3 h-3 rounded-full bg-[#70FFD2]" />
                    <span className="font-mono text-xs text-slate-600 ml-1.5 font-medium">developer-profile.ts</span>
                  </div>
                  <Badge variant="glow" size="sm">
                    VKU CS
                  </Badge>
                </div>

                {/* Profile Header Block inside card */}
                <div className="p-5 border-b border-amber-100 dark:border-slate-800/80 flex items-center gap-4 bg-gradient-to-r from-amber-50/30 to-teal-50/30 dark:bg-slate-950/30">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#FFCC4D] shrink-0 shadow-md">
                    <ImageWithFallback
                      src={profileData.avatar.src}
                      fallbackSrc={profileData.avatar.fallback}
                      alt={profileData.avatar.alt}
                      width={64}
                      height={64}
                      priority={true}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-slate-900 dark:text-white truncate">
                      {profileData.name}
                    </div>
                    <div className="text-xs text-[#ea580c] dark:text-amber-300 font-mono font-semibold truncate">
                      @{profileData.contact.githubUsername} · {profileData.major}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                      Vietnam-Korea University (VKU)
                    </div>
                  </div>
                </div>

                {/* Interactive Code Snippet / Active Status */}
                <div className="p-5 font-mono text-xs space-y-3 bg-slate-950 text-slate-200">
                  <div className="text-[#70FFD2]/80">// Core Engineering Philosophy</div>
                  <div className="space-y-1 pl-2 border-l-2 border-[#FFCC4D]/60 text-slate-200 text-[11px] sm:text-xs">
                    <div>
                      <span className="text-[#70FFD2]">const</span> <span className="text-[#FFFC8C]">engineer</span> = &#123;
                    </div>
                    <div className="pl-3">
                      <span className="text-slate-400">name:</span> <span className="text-[#FFCC4D]">&quot;Anh Vy&quot;</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-slate-400">focus:</span> [<span className="text-[#70FFD2]">&quot;Web&quot;</span>, <span className="text-[#70FFD2]">&quot;AI&quot;</span>, <span className="text-[#70FFD2]">&quot;Mobile&quot;</span>, <span className="text-[#70FFD2]">&quot;UI/UX&quot;</span>],
                    </div>
                    <div className="pl-3">
                      <span className="text-slate-400">learningBy:</span> <span className="text-[#FF9137]">&quot;Building &amp; Problem Solving&quot;</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-slate-400">goal:</span> <span className="text-[#FFFC8C]">&quot;Understand entire systems&quot;</span>
                    </div>
                    <div>&#125;;</div>
                  </div>

                  {/* Activity Pills inside terminal */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5">
                      <div className="text-slate-400 text-[10px]">CURRENT FOCUS</div>
                      <div className="text-[#70FFD2] font-bold truncate mt-0.5">Software &amp; AI</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5">
                      <div className="text-slate-400 text-[10px]">COMPETITIONS</div>
                      <div className="text-[#FFCC4D] font-bold truncate mt-0.5">3 Academic Awards</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Bar */}
                <div className="p-3 bg-amber-50/50 dark:bg-slate-950/60 border-t border-amber-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF9137]" />
                    <span>Open for Opportunities</span>
                  </div>
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ea580c] dark:text-[#fdba74] hover:underline"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Floating Badge 1: Top 20 AI FOR LIFE */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 glass-card px-3.5 py-2 rounded-xl border border-[#70FFD2]/80 bg-white/95 dark:bg-slate-900/90 shadow-xl shadow-[#70FFD2]/15 items-center gap-2.5 animate-float">
                <div className="w-7 h-7 rounded-lg bg-[#70FFD2]/30 flex items-center justify-center text-teal-800 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono leading-none">AI FOR LIFE</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Top 20 Finalist</div>
                </div>
              </div>

              {/* Floating Badge 2: JLPT N4 */}
              <div className="hidden sm:flex absolute -top-5 -right-4 glass-card px-3.5 py-2 rounded-xl border border-[#FFCC4D]/80 bg-white/95 dark:bg-slate-900/90 shadow-xl shadow-[#FFCC4D]/15 items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#FFCC4D]/30 flex items-center justify-center text-[#9a3412] shrink-0">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono leading-none">JAPANESE</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">JLPT N4 Certified</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
