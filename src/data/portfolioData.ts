

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
    email: "banishneupane@gmail.com", // update with your preferred email
    photoUrl: "/profile.jpg",
    resumeUrl: "#", // link to your CV/resume PDF or Google Drive
  },

  socials: {
    github: "https://github.com/banishneupane", // replace with your actual username
    linkedin: "https://linkedin.com/in/banishneupane", // replace with your actual username
    twitter: "https://twitter.com/banishneupane", // replace or remove if not used
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
      tags: ["Python", "SQLAlchemy", "LangChain", "SQLite", "Prompt Engineering"],
      githubUrl: "https://github.com/banishneupane",
      liveUrl: "#",
      accentColor: "border-blue-500/30 hover:border-blue-500",
    },
    {
      id: "finpulse-dashboard",
      number: "002",
      title: "FinPulse Analytics",
      category: "Full-Stack Web",
      role: "Full-Stack Developer",
      description:
        "A high-performance financial intelligence dashboard providing real-time portfolio metrics, ledger transaction tracking, and interactive data visualizations with instant responsiveness.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "PostgreSQL"],
      githubUrl: "https://github.com/banishneupane",
      liveUrl: "#",
      accentColor: "border-emerald-500/30 hover:border-emerald-500",
    },
    {
      id: "distributed-task-worker",
      number: "003",
      title: "Distributed Task Scheduler",
      category: "Backend & Cloud",
      role: "Backend Architect",
      description:
        "A fault-tolerant asynchronous job queue engine built for processing background workloads with priority scheduling, failure retries, and real-time execution telemetry.",
      tags: ["Node.js", "TypeScript", "Redis", "Docker", "Express"],
      githubUrl: "https://github.com/banishneupane",
      liveUrl: "#",
      accentColor: "border-amber-500/30 hover:border-amber-500",
    },
    {
      id: "careflow-portal",
      number: "004",
      title: "CareFlow Patient Portal",
      category: "Full-Stack Web App",
      role: "Full-Stack Engineer",
      description:
        "An end-to-end medical reservation platform with synchronized doctor calendars, role-based access control, appointment booking workflows, and responsive notification alerts.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
      githubUrl: "https://github.com/banishneupane",
      liveUrl: "#",
      accentColor: "border-purple-500/30 hover:border-purple-500",
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

