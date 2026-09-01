"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Container } from "../ui/Container";
import { Mail, ArrowUp, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon } from "../ui/Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-amber-200/60 dark:border-slate-800 bg-amber-50/30 dark:bg-slate-950/60 backdrop-blur-sm py-12">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF9137] via-[#FFCC4D] to-[#70FFD2] flex items-center justify-center text-slate-950 font-black font-mono text-xs shadow-sm">
                AV
              </div>
              <span className="font-bold text-base text-slate-950 dark:text-white">
                {profileData.name}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                ({profileData.japaneseName})
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {profileData.coreMessage}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF9137]" />
              <span>{profileData.location}</span>
              <span className="mx-1">·</span>
              <span>{profileData.universityShort} (Class of 2028)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="#about" className="hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors">
                  About &amp; Values
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="#journey" className="hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors">
                  Journey Timeline
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors">
                  Web Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3 font-mono">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>github.com/{profileData.contact.githubUsername}</span>
              </a>
              <div>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#ea580c] dark:hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{profileData.contact.email}</span>
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#70FFD2]/25 dark:bg-emerald-950/40 text-[#0f766e] dark:text-[#70FFD2] border border-[#70FFD2]/70 font-semibold">
                  <Sparkles className="w-3 h-3 text-[#0d9488]" />
                  <span>Available for Internships</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-200/60 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 {profileData.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-200/80 dark:border-slate-800 hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF9137]" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
