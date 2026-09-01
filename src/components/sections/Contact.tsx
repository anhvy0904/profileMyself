"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  Mail,
  MapPin,
  Sparkles,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { GitHubIcon } from "../ui/Icons";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFFC8C]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#70FFD2]/20 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's build something meaningful."
          subtitle="I'm always interested in learning, building, and connecting with people who enjoy technology and creating useful things."
          align="center"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 space-y-3 bg-white/95 dark:bg-slate-900/90 shadow-sm">
              <div className="flex items-center gap-2.5 text-[#ea580c] dark:text-[#fdba74] font-mono text-xs font-bold">
                <Mail className="w-4 h-4 text-[#FF9137]" />
                <span>EMAIL ADDRESS</span>
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all">
                {profileData.contact.email}
              </div>
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FF9137] via-[#FFCC4D] to-[#FF9137] bg-[length:200%_auto] hover:bg-right rounded-lg shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-amber-50/70 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 rounded-lg border border-amber-200/80 dark:border-slate-700 transition-colors"
                >
                  {copied ? <CheckCircle className="w-3.5 h-3.5 text-[#0d9488]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 block hover:border-[#FF9137] bg-white/95 dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                    <GitHubIcon className="w-5 h-5 text-slate-900 dark:text-white" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-slate-500 font-semibold">GITHUB PROFILE</div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#ea580c] dark:group-hover:text-[#fdba74] transition-colors">
                      github.com/{profileData.contact.githubUsername}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#FF9137] transition-colors" />
              </div>
            </a>

            {/* Availability Badge */}
            <div className="glass-card rounded-2xl p-5 border border-[#70FFD2]/80 bg-[#70FFD2]/15 dark:bg-emerald-950/20 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0f766e] dark:text-[#70FFD2] font-mono">
                <Sparkles className="w-4 h-4 text-[#0d9488]" />
                <span>CURRENT AVAILABILITY</span>
              </div>
              <p className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
                {profileData.contact.availability}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF9137]" />
                <span>Based in {profileData.location}</span>
              </div>
            </div>

          </div>

          {/* Right: Quick Direct Message Note / Mail Interface */}
          <div className="md:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-md shadow-[#FF9137]/5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-amber-100 dark:border-slate-800">
                <MessageSquare className="w-4 h-4 text-[#FF9137]" />
                <h3 className="font-bold text-base text-slate-950 dark:text-white">
                  Send a Direct Note
                </h3>
              </div>

              {formSent ? (
                <div className="p-8 text-center space-y-3 bg-[#70FFD2]/20 dark:bg-emerald-950/30 rounded-2xl border border-[#70FFD2]/80">
                  <div className="w-12 h-12 rounded-full bg-[#70FFD2]/30 text-[#0d9488] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 max-w-sm mx-auto">
                    Your message has been initiated. I will review and get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Satoshi Tanaka or Alex Rivera"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/80 dark:border-slate-700 bg-white/90 dark:bg-slate-900/70 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#FF9137] focus:border-[#FF9137] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Your Email / Contact
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@company.jp"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/80 dark:border-slate-700 bg-white/90 dark:bg-slate-900/70 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#FF9137] focus:border-[#FF9137] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Feel free to discuss internship opportunities, software development projects, or general inquiries..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/80 dark:border-slate-700 bg-white/90 dark:bg-slate-900/70 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#FF9137] focus:border-[#FF9137] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" size="md" className="w-full" icon={<Send className="w-4 h-4" />}>
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
