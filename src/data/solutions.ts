import {
  Bot,
  Cloud,
  Database,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const solutions: {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
  variant: string;
  image: string;
}[] = [
    {
      id: "01",
      title: "Digital Experiences",
      description:
        "Immersive digital experiences engineered to make brands stand out.",
      icon: Sparkles,
      className: "md:col-span-2 md:row-span-2",
      variant: "large",
      image: "/solutions/1.png"
    },
    {
      id: "02",
      title: "AI & Intelligence",
      description:
        "Intelligent systems that turn complex data into meaningful decisions.",
      icon: Bot,
      className: "md:col-span-4",
      variant: "wide",
      image: "/solutions/2.png"
    },
    {
      id: "03",
      title: "Technology Engineering",
      description:
        "Scalable software and infrastructure built for what's next.",
      icon: Cloud,
      className: "md:col-span-2",
      variant: "normal",
      image: "/solutions/3.png"
    },
    {
      id: "04",
      title: "Data & Analytics",
      description:
        "Transform your data into actionable business intelligence.",
      icon: Database,
      className: "md:col-span-2",
      variant: "normal",
      image: "/solutions/4.png"
    },
    {
      id: "05",
      title: "Digital Transformation",
      description:
        "Modernize operations and build connected digital ecosystems.",
      icon: Workflow,
      className: "md:col-span-3",
      variant: "bottom",
      image: "/solutions/5.png"
    },
    {
      id: "06",
      title: "Security & Infrastructure",
      description:
        "Resilient technology systems designed for reliability and scale.",
      icon: Shield,
      className: "md:col-span-3",
      variant: "bottom",
      image: "/solutions/6.png"
    },
  ];

export const techStacks = [
  {
    id: "01",
    shortName: "Frontend",
    name: "Frontend Engineering",
    eyebrow: "REACT · NEXT.JS · TYPESCRIPT",
    description:
      "Build fast, accessible and highly interactive interfaces with a focus on clean architecture, responsive systems and polished user experiences.",
    points: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive systems",
      "Component architecture",
    ],
  },
  {
    id: "02",
    shortName: "Backend",
    name: "Backend & APIs",
    eyebrow: "NODE.JS · PYTHON · REST · DATABASES",
    description:
      "Design reliable backend systems and APIs that connect products, data and business logic without unnecessary complexity.",
    points: [
      "Node.js",
      "Python",
      "REST APIs",
      "API integrations",
      "Authentication",
      "Server-side architecture",
    ],
  },
  {
    id: "03",
    shortName: "AI & Data",
    name: "AI & Data Systems",
    eyebrow: "LLMS · AUTOMATION · INTELLIGENCE",
    description:
      "Integrate AI into real products where it creates measurable value, from intelligent workflows and automation to data-driven decision systems.",
    points: [
      "LLM integrations",
      "AI workflows",
      "Data processing",
      "Intelligent automation",
      "Prompt engineering",
      "AI-powered products",
    ],
  },
  {
    id: "04",
    shortName: "Database",
    name: "Data & Persistence",
    eyebrow: "POSTGRES · PRISMA · DRIZZLE · SQL",
    description:
      "Create structured and dependable data layers designed around the needs of the product rather than forcing every system into the same database pattern.",
    points: [
      "PostgreSQL",
      "Prisma",
      "Drizzle ORM",
      "SQL",
      "Data modeling",
      "Database optimization",
    ],
  },
  {
    id: "05",
    shortName: "Infrastructure",
    name: "Cloud & Infrastructure",
    eyebrow: "DOCKER · VERCEL · CI/CD · DEPLOYMENT",
    description:
      "Ship applications with infrastructure that stays predictable from local development through production deployment and ongoing iteration.",
    points: [
      "Docker",
      "Vercel",
      "CI/CD workflows",
      "Production deployment",
      "Environment management",
      "Application monitoring",
    ],
  },
  {
    id: "06",
    shortName: "Automation",
    name: "Automation & Tooling",
    eyebrow: "PLAYWRIGHT · PYTHON · WORKFLOWS",
    description:
      "Automate repetitive processes and complex workflows with reliable tooling that reduces manual work and improves operational efficiency.",
    points: [
      "Playwright",
      "Python automation",
      "Browser automation",
      "Workflow systems",
      "Data extraction",
      "Process automation",
    ],
  },
];


