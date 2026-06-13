export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  status: "FEATURED" | "INTERNSHIP" | "ACADEMIC" | "PROTOTYPE";
  description: string;
  highlights: string[];
  stack: string[];
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const profile = {
  name: "MERAN ALHUDAITHY",
  role: "DATA SCIENCE & AI ENGINEER",
  location: "SAUDI ARABIA",
  email: "meran.alhudaithy@gmail.com",
  github: "https://github.com/Meranalhudaithy",
  linkedin: "https://www.linkedin.com/in/meran-alhudaithy-22748723b/",
  availability: "OPEN TO AI / DATA SCIENCE OPPORTUNITIES",
  summary:
    "Computer Information Systems student focused on building practical AI systems across computer vision, satellite imagery, LLM/RAG applications, data science, and full-stack product development.",
};
export const projects: Project[] = [
  {
    slug: "bawsalat-al-mumakkinat",
    title: "BAWSALAT AL-MUMAKKINAT",
    subtitle: "بوصلة الممكنات",
    status: "FEATURED",
    description:
      "An AI-powered platform that connects micro and small organizations with funding programs, incubators, and support initiatives.",
    highlights: [
      "LLM-RAG engine for contextual support and recommendations",
      "AI chatbot plus an edge-device assistant",
      "Computer vision with speech-to-text and text-to-speech",
      "Web delivery with secure JWT authentication",
    ],
    stack: ["NEXT.JS", "REACT", "FASTAPI", "LLM", "RAG", "CV", "STT/TTS", "JWT"],
  },
  {
    slug: "noor",
    title: "NOOR",
    subtitle: "GRADUATION PROJECT",
    status: "FEATURED",
    description:
      "A mobile learning application that helps children learn Salah through real-time posture evaluation and interactive guidance.",
    highlights: [
      "Human Pose Estimation for posture evaluation",
      "Real-time AI feedback during guided learning",
      "Gamification through points, levels, and quizzes",
      "Parent dashboard for monitoring progress and rewards",
    ],
    stack: ["REACT NATIVE", "PYTHON", "HPE", "COMPUTER VISION", "MOBILE UX"],
  },
  {
    slug: "satellite-crowd-analysis",
    title: "GEOSPATIAL SATELLITE CROWD ANALYSIS",
    subtitle: "KACST",
    status: "INTERNSHIP",
    description:
      "A computer vision pipeline for detecting and estimating crowd sizes from high-resolution satellite imagery.",
    highlights: [
      "High-resolution satellite image processing",
      "Image alignment and geospatial analysis",
      "Crowd detection and size estimation",
      "Research-oriented computer vision workflow",
    ],
    stack: ["PYTHON", "COMPUTER VISION", "GEOSPATIAL", "IMAGE ALIGNMENT", "SATELLITE DATA"],
  },
  {
    slug: "spoofing-detection",
    title: "GPS SPOOFING DETECTION",
    status: "PROTOTYPE",
    description:
      "A detection system designed to identify GPS spoofing during aircraft navigation blackouts using satellite signal analysis.",
    highlights: [
      "Satellite signal analysis",
      "Anomaly and spoofing detection logic",
      "Aviation-oriented problem framing",
    ],
    stack: ["PYTHON", "SIGNAL ANALYSIS", "DETECTION SYSTEMS", "AVIATION"],
  },
  {
    slug: "muqarrarati",
    title: "MUQARRARATI APP",
    subtitle: "مقرراتي",
    status: "ACADEMIC",
    description:
      "A mobile application that helps university students manage and organize their courses in one focused workspace.",
    highlights: [
      "Student-centered course organization",
      "Mobile-first information architecture",
      "Simple academic planning workflow",
    ],
    stack: ["FLUTTER", "DART", "MOBILE DEVELOPMENT", "UI/UX"],
  },
];

export const experience: Experience[] = [
  {
    organization: "KACST",
    role: "AI ENGINEER INTERN",
    period: "4 MONTHS",
    description:
      "Worked in AI and satellite imagery analysis, developing applied computer vision and geospatial processing skills in a research environment.",
    highlights: [
      "Built a satellite imagery crowd-analysis pipeline",
      "Worked with image alignment and geospatial data",
      "Conducted technical experimentation and evaluation",
      "Documented findings and collaborated with an AI team",
    ],
  },
];

export const education = [
  {
    institution: "IMAM MOHAMMAD IBN SAUD ISLAMIC UNIVERSITY",
    qualification: "BACHELOR'S IN COMPUTER INFORMATION SYSTEMS",
    period: "2022 — 2026",
    detail:
      "Completed technical and software-focused coursework and more than 150 verified volunteer hours through university projects.",
  },
  {
    institution: "TUWAIQ ACADEMY",
    qualification: "DATA SCIENCE & AI PROGRAM — 200 HOURS",
    period: "2025",
    detail:
      "Intensive training in Python, EDA, data cleaning, feature engineering, ML, NLP, computer vision, model tuning, and evaluation.",
  },
];

export const skillGroups = [
  {
    label: "AI_CORE",
    level: 9,
    skills: ["ML", "DL", "CV", "NLP", "LLM", "RAG", "HPE"],
  },
  {
    label: "DATA_PIPELINE",
    level: 9,
    skills: ["DATA CLEANING", "EDA", "FEATURE ENGINEERING", "VISUALIZATION", "EVALUATION"],
  },
  {
    label: "PROGRAMMING",
    level: 8,
    skills: ["PYTHON", "JAVASCRIPT", "JAVA", "DART", "SQL"],
  },
  {
    label: "APPLICATION_LAYER",
    level: 8,
    skills: ["NEXT.JS", "REACT", "FASTAPI", "FLUTTER", "STREAMLIT", "NODE.JS"],
  },
  {
    label: "SYSTEM_TOOLS",
    level: 8,
    skills: ["GIT", "SCRAPING", "UI/UX", "PROJECT MANAGEMENT", "GEOSPATIAL ANALYSIS"],
  },
];

export const certificates = [
  {
    title: "FIRST PLACE — AI WAE WORKSHOP",
    issuer: "WAE HEADQUARTERS",
    year: "2024",
    detail: "Won first place in a company-hosted AI innovation competition.",
  },
  {
    title: "CHATBOT WITH RASA AND PYTHON",
    issuer: "COURSERA",
    year: "2023",
    detail: "Built foundational skills in chatbot development using Python and Rasa.",
  },
  {
    title: "FOUNDATIONS OF UX DESIGN",
    issuer: "GOOGLE",
    year: "2023",
    detail: "Studied UX principles, design thinking, and interactive prototyping.",
  },
];
