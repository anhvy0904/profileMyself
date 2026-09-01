export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  period?: string;
  category: 'Web Application' | 'AI & Data Project' | 'Mobile & UI/UX Application';
  award?: {
    name: string;
    rank: string;
    year: string;
  };
  shortDescription: string;
  fullOverview: string;
  purpose: string;
  role: string;
  myContributions: string[];
  keyLearnings: string[];
  technologies: {
    name: string;
    category?: 'frontend' | 'backend' | 'database' | 'ai' | 'design' | 'tools';
  }[];
  links: {
    github?: string;
    demo?: string;
    figma?: string;
    video?: string;
  };
  images: {
    cover: string;
    screenshots: string[];
  };
  accentColor?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  level?: 'Experience' | 'Working Knowledge' | 'Learning' | 'Explored';
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  tag: string;
  type: 'education' | 'competition' | 'project' | 'certification' | 'international';
  highlight?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  rank: string;
  year: string;
  category: 'competition' | 'certification' | 'badge';
  organization?: string;
  description: string;
  badgeText?: string;
  date?: string;
  iconName: string;
  credentialUrl?: string;
}

export interface Activity {
  id: string;
  title: string;
  role?: string;
  location: string;
  year: string;
  description: string;
  keyHighlights: string[];
  tags: string[];
  image?: string;
}

export interface PersonalityValue {
  number: string;
  title: string;
  japaneseTitle?: string;
  description: string;
  iconName: string;
}

export interface HobbyInterest {
  title: string;
  japaneseTitle?: string;
  description: string;
  iconName: string;
}

export interface EducationItem {
  institution: string;
  japaneseInstitution?: string;
  degree: string;
  major: string;
  period: string;
  expectedGraduation: string;
  location: string;
  highlights: string[];
}
