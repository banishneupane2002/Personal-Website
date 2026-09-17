

export interface Project {
  id: string;
  number: string; // e.g. "001"
  title: string;
  category: string;
  description: string;
  role: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string; // Subtle border/pill highlight
}

export interface SkillCategory {
  title: string;
  description: string;
  badgeColor: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Banish Neupane",
    title: "Computer Engineer",
    tagline: "Designing, building, and shipping robust software from low-level systems to modern web applications.",
    status: "Available for new opportunities",
    location: "Kathmandu, Nepal",
    email: "banishrox@gmail.com", // update with your preferred email
    photoUrl: "/profile.jpg",
    resumeUrl: "#", // link to your CV/resume PDF or Google Drive
  },

  socials: {
    github: "https://github.com/banishneupane2002", // replace with your actual username
    linkedin: "https://www.linkedin.com/in/banish-neupane-b3565224a/", // replace with your actual username
    twitter: "https://twitter.com/banishneupane",
    instagram: "https://instagram.com/banishneupane" // replace or remove if not used
  },

  about: {
    eyebrow: "01 // WHO AM I",
    headline: "An engineer dedicated to clean architecture, reliable backends, and intuitive digital interfaces.",
    paragraphs: [
      "I am a Computer Engineer with a deep passion for solving complex computational problems and building scalable software. My work bridges system-level architecture, robust backend APIs, and modern frontend interfaces.",
      "Whether it's building intelligent text-to-SQL pipelines, engineering resilient distributed workflows, or designing clean, accessible web apps, I prioritize maintainable code, algorithmic efficiency, and seamless user experiences.",
    ],
    stats: [
      { label: "Degree", value: "B.E. Computer Engineering" },
      { label: "Focus", value: "Full-Stack & Systems" },
      { label: "Location", value: "Kathmandu, Nepal" },
      { label: "Commitment", value: "Clean Code & Performance" },
    ],
  },

  projects: [
    {
      id: "bank-text2sql",
      number: "001",
      title: "BankText2SQL Engine",
      category: "AI & Database Systems",
      role: "Lead Engineer",
      description:
        "An intelligent Text-to-SQL banking system featuring automated database schema cataloging, PII detection & masking, and dynamic query execution over relational banking cores.",
      tags: ["Python", "SQLAlchemy", "LangChain", "SQLite", "Prompt Engineering", "Django"],
      githubUrl: "https://github.com/banishneupane2002/Text-to-SQL-",
      liveUrl: "#",
      accentColor: "border-blue-500/30 hover:border-blue-500",
    },
    {
      id: "Acme-app",
      number: "002",
      title: "Acme Financial Dashboard",
      category: "Full-Stack Web",
      role: "Full-Stack Developer",
      description:
        "A high-performance financial intelligence dashboard providing real-time portfolio metrics, ledger transaction tracking, and interactive data visualizations with instant responsiveness.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "PostgreSQL"],
      githubUrl: "https://github.com/banishneupane2002/Acme-App",
      liveUrl: "#",
      accentColor: "border-emerald-500/30 hover:border-emerald-500",
    },
    {
      id: "AI Automated Interview System",
      number: "003",
      title: "AI Automated Interview System",
      category: "AI & Machine Learning",
      role: "AI Engineer",
      description:
        "An AI-powered interview system that generates dynamic questions and evaluates candidate responses using natural language processing and RAG retrieval pipelines.",
      tags: ["LLM", "Fine-tuning", "RAG pipeline", "ReactJs", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/banishneupane2002/Interview_with_RAG",
      liveUrl: "#",
      accentColor: "border-amber-500/30 hover:border-amber-500",
    },
    {
      id: "Music-Course",
      number: "004",
      title: "Music Academy Platform",
      category: "Interactive Web Experience",
      role: "Frontend Architect",
      description:
        "A modern music academy web application featuring interactive course modules, instructor profiles, animated tooltips, wavy dynamic backgrounds, and responsive UI physics.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/banishneupane2002/Music-Course",
      liveUrl: "#",
      accentColor: "border-purple-500/30 hover:border-purple-500",
    },
    {
      id: "Pawdoption",
      number: "005",
      title: "Pawdoption - Pet Adoption Platform",
      category: "Full-Stack Web App",
      role: "Full-Stack Engineer",
      description:
        "A full-stack web application connecting pet adopters with rescue animals, featuring shelter catalogs, user onboarding, and pet care supplies.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
      githubUrl: "https://github.com/banishneupane2002/pawdoption",
      liveUrl: "#",
      accentColor: "border-rose-500/30 hover:border-rose-500",
    },
  ] as Project[],

  toolkit: [
    {
      title: "Frontend Engineering",
      description: "Crafting fast, accessible, and responsive user interfaces with modern web standards.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "State Management (Redux/Zustand)"],
    },
    {
      title: "Backend & Systems",
      description: "Engineering scalable APIs, services, and robust server architectures.",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful Architecture", "Authentication (JWT / OAuth)"],
    },
    {
      title: "Data & Storage",
      description: "Relational and document storage, schema design, and query optimization.",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "SQLAlchemy", "Prisma ORM"],
    },
    {
      title: "AI & Applied Intelligence",
      description: "Integrating intelligent pipelines, LLM agents, and retrieval systems into apps.",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      skills: ["Text-to-SQL Pipelines", "LangChain", "LLM Integration", "Vector Embeddings", "Prompt Engineering"],
    },
    {
      title: "DevOps & Core Tools",
      description: "Development environments, version control, containerization, and deployment.",
      badgeColor: "bg-zinc-100 text-zinc-800 border-zinc-300",
      skills: ["Git & GitHub", "Docker", "Linux / Bash", "Postman", "CI/CD Basics", "Vercel / Cloud Deployment"],
    },
  ] as SkillCategory[],
};


