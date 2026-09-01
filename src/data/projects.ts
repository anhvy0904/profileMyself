import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "zengaku",
    slug: "zengaku",
    title: "Zengaku",
    subtitle: "Learning-Support Web Application",
    year: "2023",
    period: "2023",
    category: "Web Application",
    award: {
      name: "Best Web Design Competition",
      rank: "4th Place",
      year: "2023"
    },
    shortDescription: "A learning-support web application developed as part of the Best Web Design competition, built to provide structured study tools and intuitive learning progress tracking.",
    fullOverview: "Zengaku is an interactive web platform designed to support students in organizing and enhancing their learning workflow. Developed in a collaborative team setting for the university's Best Web Design competition, the application achieved 4th place through its clean user interface, responsive layout, and structured backend database architecture.",
    purpose: "To create an accessible, user-friendly digital learning environment that streamlines study materials and motivates learners through clear visual progress.",
    role: "Frontend Developer & Database Handling Lead",
    myContributions: [
      "Engineered core frontend interfaces using HTML, CSS, and vanilla JavaScript for clean user interaction.",
      "Implemented relational database queries and data processing with SQL to manage learning modules.",
      "Coordinated team task division, role assignment, and milestone management to meet competition deadlines.",
      "Ensured responsive design and consistent visual layout across varying desktop screen dimensions."
    ],
    keyLearnings: [
      "Structured frontend web development fundamentals and DOM manipulation.",
      "Relational database design, query optimization, and dynamic data binding.",
      "Effective cross-team communication, responsibility delegation, and sprint coordination."
    ],
    technologies: [
      { name: "HTML5", category: "frontend" },
      { name: "CSS3", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "SQL", category: "database" },
      { name: "UI Design", category: "design" },
      { name: "Team Coordination", category: "tools" }
    ],
    links: {
      github: "https://github.com/anhvy0904/ZenGaku",
      video: "https://www.facebook.com/reel/474766185416924"
    },
    images: {
      cover: "/images/projects/zengaku/cover.webp",
      screenshots: [
        "/images/projects/zengaku/screenshot-01.webp",
        "/images/projects/zengaku/screenshot-02.webp",
        "/images/projects/zengaku/screenshot-03.webp"
      ]
    },
    accentColor: "#FF9137",
    badge: "Best Web Design · 4th Place"
  },
  {
    id: "color-blindness-assistant",
    slug: "color-blindness-assistant",
    title: "Color Blindness Assistant",
    subtitle: "AI Career Guidance System for Color Vision Deficiency",
    year: "2024–2025",
    period: "2024 – 2025",
    category: "AI & Data Project",
    award: {
      name: "Scientific Research Competition",
      rank: "4th Place",
      year: "2025"
    },
    shortDescription: "An AI-driven advisory system designed to support career counseling and vocational guidance for high school students experiencing color vision deficiency.",
    fullOverview: "Color Blindness Assistant is an applied AI research initiative tackling the real-world challenge of career orientation for individuals with color vision deficiency. High school students with color blindness often face restricted career pathways or misinformation regarding suitable professional fields. This system combines data-driven insights and assistive AI guidance to evaluate career compatibility with empathy and analytical precision.",
    purpose: "To empower students with color vision deficiency by offering objective, data-backed career path analysis tailored to their visual profiles and interests.",
    role: "Data Analyst & AI Research Collaborator",
    myContributions: [
      "Conducted thorough problem analysis and stakeholder requirements scoping for color vision deficiency challenges.",
      "Performed comprehensive data collection and domain research on career suitability and color-dependent vocations.",
      "Executed data preprocessing, cleaning, and exploratory data analysis (EDA) to ensure quality dataset inputs.",
      "Supported model development workflow, parameter experimentation, and iterative validation."
    ],
    keyLearnings: [
      "The critical importance of clean, unbiased data in machine learning pipelines.",
      "End-to-end AI project lifecycle from problem definition to data collection and model evaluation.",
      "Independent academic research methodologies and analytical problem-solving under competition standards."
    ],
    technologies: [
      { name: "Python", category: "backend" },
      { name: "Data Collection", category: "ai" },
      { name: "Data Analysis", category: "ai" },
      { name: "Machine Learning Workflow", category: "ai" },
      { name: "Problem Scoping", category: "tools" }
    ],
    links: {
      demo: "https://drive.google.com/drive/folders/1mhlAzL090VFGrXYpQBS_vk0UNWjoguG8"
    },
    images: {
      cover: "/images/projects/color-blindness-assistant/cover.webp",
      screenshots: [
        "/images/projects/color-blindness-assistant/screenshot-01.webp",
        "/images/projects/color-blindness-assistant/screenshot-02.webp"
      ]
    },
    accentColor: "#70FFD2",
    badge: "Scientific Research · 4th Place"
  },
  {
    id: "ai-aging-care",
    slug: "ai-aging-care",
    title: "AI Aging Care",
    subtitle: "Elderly Healthcare & Emotional Wellbeing Mobile App",
    year: "2025–2026",
    period: "2025 – 2026",
    category: "Mobile & UI/UX Application",
    award: {
      name: "AI FOR LIFE Competition",
      rank: "Top 20 / 256 Teams",
      year: "2025"
    },
    shortDescription: "A cross-platform mobile application supporting elderly health and emotional wellbeing, featuring real-time facial emotion recognition and personalized care experiences.",
    fullOverview: "AI Aging Care is a modern mobile application developed to support the aging population with dignity, health awareness, and emotional connection. Selected among the Top 20 out of 256 competing teams in the AI FOR LIFE competition, the app brings together accessible UI/UX design and on-device intelligence to monitor emotional status in real time and recommend customized daily activities.",
    purpose: "To bridge health technology and empathetic design for senior citizens, enhancing their daily wellbeing through intelligent emotion analysis and personalized care routines.",
    role: "Lead UI/UX Designer & Mobile Feature Developer",
    myContributions: [
      "Designed complete senior-friendly UI/UX in Figma with high contrast, legible typography, and intuitive touch targets.",
      "Implemented real-time facial emotion recognition module to detect user emotional states reliably.",
      "Formulated and structured personalized feature proposals and recommendation flows tailored to user behaviors and preferences.",
      "Collaborated on cross-platform mobile development and system integration."
    ],
    keyLearnings: [
      "Human-centered design principles specifically catered to elderly accessibility and cognitive ergonomics.",
      "Bridging interactive design (Figma) directly into code with real-time AI computer vision models.",
      "Holistic system design: understanding user requirements, visual architecture, AI integration, and mobile usability."
    ],
    technologies: [
      { name: "Flutter / Dart", category: "frontend" },
      { name: "UI/UX Design (Figma)", category: "design" },
      { name: "Real-time Emotion Recognition", category: "ai" },
      { name: "Mobile Development", category: "frontend" },
      { name: "Personalization Engine", category: "backend" }
    ],
    links: {
      github: "https://github.com/anhvy0904/ai-aging-care-cross/branches",
      figma: "https://www.figma.com/design/MpJdCjskqcOy6DoNay1qWW/AI-Aging-Care?node-id=574-178&p=f&t=Bc9vQqVI6XlIwA3p-0",
      video: "https://drive.google.com/drive/folders/1e_cgLoDwcik1CJGjmmTLUrtTTVAIFpK0"
    },
    images: {
      cover: "/images/projects/ai-aging-care/cover.webp",
      screenshots: [
        "/images/projects/ai-aging-care/screenshot-01.webp",
        "/images/projects/ai-aging-care/screenshot-02.webp",
        "/images/projects/ai-aging-care/screenshot-03.webp"
      ]
    },
    accentColor: "#FFCC4D",
    badge: "AI FOR LIFE · Top 20 / 256 Teams"
  }
];
