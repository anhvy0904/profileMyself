import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages utilized across academic courses, competitive projects, and software systems.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Working Knowledge", iconName: "Terminal" },
      { name: "JavaScript", level: "Working Knowledge", iconName: "FileCode" },
      { name: "TypeScript", level: "Learning", iconName: "FileCode2" },
      { name: "Java", level: "Working Knowledge", iconName: "Coffee" },
      { name: "C++", level: "Working Knowledge", iconName: "Cpu" },
      { name: "PHP", level: "Working Knowledge", iconName: "Server" },
      { name: "Dart", level: "Working Knowledge", iconName: "Smartphone" },
    ]
  },
  {
    title: "Web & Mobile Frameworks",
    description: "Modern frameworks and libraries for responsive web interfaces and cross-platform mobile apps.",
    iconName: "Layout",
    skills: [
      { name: "Flutter", level: "Working Knowledge", iconName: "Smartphone" },
      { name: "Next.js", level: "Learning", iconName: "Globe" },
      { name: "React Native", level: "Learning", iconName: "Layers" },
      { name: "Laravel", level: "Working Knowledge", iconName: "Server" },
      { name: "HTML5 / CSS3", level: "Experience", iconName: "FileText" },
      { name: "Tailwind CSS", level: "Working Knowledge", iconName: "Palette" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational and document-oriented database systems for structured data modeling.",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: "Working Knowledge", iconName: "Database" },
      { name: "SQL Server", level: "Working Knowledge", iconName: "HardDrive" },
      { name: "MongoDB", level: "Learning", iconName: "Boxes" },
      { name: "SQL Querying", level: "Experience", iconName: "Table" }
    ]
  },
  {
    title: "Engineering & Applied Areas",
    description: "Specialized competencies in user research, artificial intelligence, and software lifecycle.",
    iconName: "Brain",
    skills: [
      { name: "UI/UX Design (Figma)", level: "Experience", iconName: "Palette" },
      { name: "AI Project Development", level: "Working Knowledge", iconName: "Sparkles" },
      { name: "Data Collection & Analysis", level: "Working Knowledge", iconName: "BarChart3" },
      { name: "Problem Analysis & Scoping", level: "Experience", iconName: "Search" },
      { name: "Team Sprint Coordination", level: "Experience", iconName: "Users" }
    ]
  },
  {
    title: "Productivity & Collaboration",
    description: "Office tools and collaboration platforms for technical reporting and data organization.",
    iconName: "Briefcase",
    skills: [
      { name: "Microsoft Excel (MOS Certified)", level: "Experience", iconName: "FileSpreadsheet" },
      { name: "Microsoft Word", level: "Experience", iconName: "FileText" },
      { name: "Microsoft PowerPoint", level: "Experience", iconName: "Presentation" },
      { name: "Git & GitHub", level: "Working Knowledge", iconName: "GitBranch" }
    ]
  }
];
