import { Achievement } from "@/types";

export const competitionAchievements: Achievement[] = [
  {
    id: "ai-for-life",
    title: "AI FOR LIFE Competition",
    rank: "Top 20 / 256 Teams",
    year: "2025",
    category: "competition",
    organization: "National AI Competition",
    description: "Achieved Top 20 ranking out of 256 competing university teams with the AI Aging Care project, focusing on elderly wellbeing and real-time facial emotion recognition.",
    badgeText: "Top 20 Finalist",
    iconName: "Trophy"
  },
  {
    id: "scientific-research",
    title: "Scientific Research Competition",
    rank: "4th Place",
    year: "2025",
    category: "competition",
    organization: "University Research Council",
    description: "Awarded 4th place for empirical research and data analysis on vocational guidance systems for high school students with color vision deficiency.",
    badgeText: "4th Place",
    iconName: "Award"
  },
  {
    id: "best-web-design",
    title: "Best Web Design Competition",
    rank: "4th Place",
    year: "2023",
    category: "competition",
    organization: "University Web Design Contest",
    description: "Secured 4th place for developing Zengaku, a responsive learning-support web application with frontend coordination and SQL database integration.",
    badgeText: "4th Place",
    iconName: "Medal"
  }
];

export const certifications: Achievement[] = [
  {
    id: "jlpt-n4",
    title: "Japanese Language Proficiency Test (JLPT)",
    rank: "N4 Certified",
    year: "2025",
    date: "December 2025",
    category: "certification",
    organization: "Japan Foundation / JEES",
    description: "Certified JLPT N4 proficiency, demonstrating solid foundational Japanese grammar, vocabulary, reading comprehension, and listening skills.",
    badgeText: "JLPT N4",
    iconName: "Languages"
  },
  {
    id: "mos-excel",
    title: "Microsoft Office Specialist (MOS)",
    rank: "Excel Certified",
    year: "2025",
    date: "August 2025",
    category: "certification",
    organization: "Microsoft / Certiport",
    description: "Official certification in Microsoft Excel data processing, functional modeling, advanced formulas, and structured visualization.",
    badgeText: "MOS Excel",
    iconName: "FileSpreadsheet"
  }
];

export const digitalBadges: Achievement[] = [
  {
    id: "nix-it-a2",
    title: "NIX・IT Japanese A2",
    rank: "Credly Digital Badge",
    year: "2025",
    date: "November 2025",
    category: "badge",
    organization: "NIX Education & Credly",
    description: "Verified digital credential demonstrating practical IT-focused Japanese communication competency at level A2.",
    badgeText: "Credly Badge",
    iconName: "ShieldCheck"
  }
];
