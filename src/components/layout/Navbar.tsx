"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "../ui/Container";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "../ui/Icons";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Skills", href: isHome ? "#skills" : "/#skills" },
    { label: "Projects", href: isHome ? "#projects" : "/#projects" },
    { label: "Journey", href: isHome ? "#journey" : "/#journey" },
    { label: "Achievements", href: isHome ? "#achievements" : "/#achievements" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav py-3 shadow-sm shadow-slate-900/5"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9137] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF9137] via-[#FFCC4D] to-[#70FFD2] flex items-center justify-center text-slate-950 font-black font-mono text-sm tracking-wider shadow-md shadow-[#FF9137]/20 group-hover:scale-105 transition-transform duration-200">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-[#FF9137] transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-none">
                CS Student · VKU
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-amber-50/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-200/60 dark:border-slate-800 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#ea580c] dark:hover:text-amber-300 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Resume Link */}
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#ea580c] dark:hover:text-amber-300 border border-amber-200/80 dark:border-slate-800 rounded-xl bg-white/90 dark:bg-slate-900/50 hover:bg-amber-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF9137]" />
              <span>Resume</span>
            </Link>

            {/* GitHub */}
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl border border-amber-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            {/* Theme Switch */}
            <ThemeToggle />
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl border border-amber-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF9137]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-card border border-amber-200/80 dark:border-slate-800 shadow-xl bg-white/95 dark:bg-slate-900/95 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800 hover:text-[#FF9137] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-amber-50 dark:bg-slate-800 rounded-xl"
                >
                  <FileText className="w-4 h-4 text-[#FF9137]" />
                  <span>Web Resume</span>
                </Link>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-amber-50 dark:bg-slate-800 rounded-xl"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
