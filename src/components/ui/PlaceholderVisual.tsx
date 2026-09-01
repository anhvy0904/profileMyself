import React from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Brain, Smartphone, Award, Sparkles, Terminal } from "lucide-react";

interface PlaceholderVisualProps {
  type: "zengaku" | "color-blindness-assistant" | "ai-aging-care" | "generic";
  title: string;
  category: string;
  badge?: string;
  className?: string;
}

export const PlaceholderVisual: React.FC<PlaceholderVisualProps> = ({
  type,
  title,
  category,
  badge,
  className,
}) => {
  if (type === "zengaku") {
    return (
      <div className={cn("relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-teal-50/40 dark:from-slate-900 dark:to-slate-950 p-6 flex flex-col justify-between overflow-hidden border border-[#FFCC4D]/60 dark:border-slate-800 rounded-2xl group", className)}>
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#FFCC4D]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#70FFD2]/25 rounded-full blur-3xl pointer-events-none" />
        
        {/* Window Top Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-amber-200/80 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF9137]" />
            <div className="w-3 h-3 rounded-full bg-[#FFCC4D]" />
            <div className="w-3 h-3 rounded-full bg-[#70FFD2]" />
            <span className="ml-2 font-mono text-xs text-slate-700 dark:text-slate-300 font-semibold">zengaku.app / workspace</span>
          </div>
          {badge && (
            <span className="font-mono text-xs bg-[#FFCC4D]/30 dark:bg-amber-950/60 text-[#9a3412] dark:text-[#fde68a] px-2.5 py-1 rounded-full border border-[#FFCC4D]/80 font-bold">
              {badge}
            </span>
          )}
        </div>

        {/* Center UI Mockup */}
        <div className="relative z-10 my-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white/90 dark:bg-slate-900/90 border border-amber-200/70 dark:border-slate-800 rounded-xl p-3.5 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-[#ea580c]">
              <Code className="w-4 h-4" />
              <span className="font-mono text-xs font-bold">Frontend</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">HTML5 · CSS3 · JS DOM binding</p>
          </div>
          <div className="bg-white/90 dark:bg-slate-900/90 border border-amber-200/70 dark:border-slate-800 rounded-xl p-3.5 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-[#0d9488]">
              <Database className="w-4 h-4" />
              <span className="font-mono text-xs font-bold">Database</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">SQL queries &amp; data flow</p>
          </div>
          <div className="bg-white/90 dark:bg-slate-900/90 border border-amber-200/70 dark:border-slate-800 rounded-xl p-3.5 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-[#d97706]">
              <Award className="w-4 h-4" />
              <span className="font-mono text-xs font-bold">Result</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">4th Place Web Design</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-amber-200/80 dark:border-slate-800">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{title}</h4>
            <p className="text-xs text-slate-500 font-mono">{category}</p>
          </div>
          <div className="flex items-center gap-1 text-[#ea580c] font-mono text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Web Suite</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "color-blindness-assistant") {
    return (
      <div className={cn("relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-gradient-to-br from-teal-50/90 via-amber-50/50 to-orange-50/40 dark:from-slate-900 dark:to-slate-950 p-6 flex flex-col justify-between overflow-hidden border border-[#70FFD2]/80 dark:border-slate-800 rounded-2xl group", className)}>
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#70FFD2]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#FFFC8C]/35 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-teal-200/80 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#0d9488]" />
            <span className="font-mono text-xs text-[#0f766e] dark:text-[#70FFD2] font-bold">Applied AI &amp; Research</span>
          </div>
          {badge && (
            <span className="font-mono text-xs bg-[#70FFD2]/35 text-[#0f766e] dark:text-[#70FFD2] px-2.5 py-1 rounded-full border border-[#70FFD2]/80 font-bold">
              {badge}
            </span>
          )}
        </div>

        {/* Center Visual: Spectral Rings & Data Flow */}
        <div className="relative z-10 my-4 flex flex-col sm:flex-row items-center gap-4 bg-white/90 dark:bg-slate-900/90 border border-teal-200/70 dark:border-slate-800 rounded-xl p-4 shadow-sm">
          <div className="w-16 h-16 rounded-full border-2 border-[#70FFD2] flex items-center justify-center bg-[#70FFD2]/25 shrink-0">
            <Sparkles className="w-7 h-7 text-[#0d9488] animate-pulse" />
          </div>
          <div className="space-y-1.5 flex-1 text-center sm:text-left">
            <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">Career Guidance Dataset &amp; EDA</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Evaluating color vision deficiency profiles against vocational constraints to guide high school students with data.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-teal-200/80 dark:border-slate-800">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{title}</h4>
            <p className="text-xs text-slate-500 font-mono">{category}</p>
          </div>
          <span className="font-mono text-xs text-[#0f766e] dark:text-[#70FFD2] bg-[#70FFD2]/25 px-2.5 py-1 rounded-md border border-[#70FFD2]/60 font-semibold">
            Python · ML Pipeline
          </span>
        </div>
      </div>
    );
  }

  if (type === "ai-aging-care") {
    return (
      <div className={cn("relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-gradient-to-br from-orange-50/90 via-amber-50/50 to-teal-50/40 dark:from-slate-900 dark:to-slate-950 p-6 flex flex-col justify-between overflow-hidden border border-[#FF9137]/60 dark:border-slate-800 rounded-2xl group", className)}>
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#FF9137]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-64 h-64 bg-[#FFCC4D]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-orange-200/80 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#ea580c]" />
            <span className="font-mono text-xs text-[#c2410c] dark:text-[#fdba74] font-bold">Cross-Platform Mobile &amp; UI/UX</span>
          </div>
          {badge && (
            <span className="font-mono text-xs bg-[#FF9137]/25 text-[#c2410c] dark:text-[#fdba74] px-2.5 py-1 rounded-full border border-[#FF9137]/60 font-bold">
              {badge}
            </span>
          )}
        </div>

        {/* Center Visual Mockup */}
        <div className="relative z-10 my-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/90 dark:bg-slate-900/90 border border-orange-200/70 dark:border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="font-mono text-xs text-[#ea580c] font-bold block mb-1">UI/UX Design</span>
            <p className="text-xs text-slate-700 dark:text-slate-300">Figma design crafted with high contrast, legible hierarchy, and senior accessibility.</p>
          </div>
          <div className="bg-white/90 dark:bg-slate-900/90 border border-orange-200/70 dark:border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="font-mono text-xs text-[#0d9488] font-bold block mb-1">Emotion AI Module</span>
            <p className="text-xs text-slate-700 dark:text-slate-300">Real-time facial emotion recognition with personalized routine suggestions.</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-orange-200/80 dark:border-slate-800">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{title}</h4>
            <p className="text-xs text-slate-500 font-mono">{category}</p>
          </div>
          <span className="font-mono text-xs text-[#c2410c] dark:text-[#fdba74] bg-[#FF9137]/20 px-2.5 py-1 rounded-md border border-[#FF9137]/50 font-bold">
            Top 20 / 256 Teams
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full min-h-[260px] bg-amber-50/70 dark:bg-slate-900 p-6 flex flex-col justify-between border border-amber-200/80 rounded-2xl", className)}>
      <div className="font-mono text-xs text-slate-500">{category}</div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
      </div>
    </div>
  );
};
