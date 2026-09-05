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
      title: "Bespoke Enterprise Applications",
      description:
        "Mission-critical applications built for speed, uptime, and high data density.",
      icon: Sparkles,
      className: "md:col-span-2 md:row-span-2",
      variant: "large",
      image: "/solutions/1.png"
    },
    {
      id: "02",
      title: "Enterprise GenAI & Production ML",
      description:
        "Domain-fine-tuned LLMs and predictive models with full telemetry and governance.",
      icon: Bot,
      className: "md:col-span-4",
      variant: "wide",
      image: "/solutions/2.png"
    },
    {
      id: "03",
      title: "Legacy Modernization",
      description:
        "Decouple on-prem systems and migrate workflows to cloud-native digital rails.",
      icon: Cloud,
      className: "md:col-span-2",
      variant: "normal",
      image: "/solutions/3.png"
    },
    {
      id: "04",
      title: "Modern Data Platforms & DataOps",
      description:
        "Reliable Lakehouses, automated ETL/ELT pipelines, and semantic layers.",
      icon: Database,
      className: "md:col-span-2",
      variant: "normal",
      image: "/solutions/4.png"
    },
    {
      id: "05",
      title: "Live Operational Intelligence",
      description:
        "Real-time event streaming and automated alert triggers inside daily operations.",
      icon: Workflow,
      className: "md:col-span-3",
      variant: "bottom",
      image: "/solutions/5.png"
    },
    {
      id: "06",
      title: "Cloud Security & Governance",
      description:
        "SOC 2 guardrails, access control, and telemetry engineered in from day one.",
      icon: Shield,
      className: "md:col-span-3",
      variant: "bottom",
      image: "/solutions/6.png"
    },
  ];

export const techStacks = [
  {
    id: "01",
    shortName: "Ingest",
    name: "Streaming & Ingestion",
    eyebrow: "KAFKA · EVENT STREAMS · CDC",
    description:
      "Replace batch exports with real-time event streaming, so operational data lands continuously instead of arriving a week after the decision was made.",
    points: [
      "Real-time event streaming",
      "Change data capture",
      "Automated alert triggers",
      "Latency target design",
      "Anomaly detection",
      "Operational telemetry",
    ],
  },
  {
    id: "02",
    shortName: "Integrate",
    name: "Systems Integration",
    eyebrow: "ERP · CRM · APIS · LEGACY RAILS",
    description:
      "Decouple legacy on-prem platforms and connect the systems your business already runs, so records from every platform land in one place.",
    points: [
      "ERP & CRM integration",
      "Secure API architecture",
      "Legacy system decoupling",
      "Workflow orchestration",
      "Cloud-native migration",
      "Audit-ready data lineage",
    ],
  },
  {
    id: "03",
    shortName: "Platform",
    name: "Data Platforms & DataOps",
    eyebrow: "DATABRICKS · LAKEHOUSE · ETL/ELT",
    description:
      "Architect reliable Lakehouses, automated pipelines, and semantic layers that cut infrastructure spend and eliminate pipeline failures.",
    points: [
      "Lakehouse architecture",
      "Automated ETL/ELT",
      "Semantic layers",
      "CI/CD DataOps",
      "Data quality monitoring",
      "Infrastructure cost control",
    ],
  },
  {
    id: "04",
    shortName: "Analyze",
    name: "Embedded Decision Analytics",
    eyebrow: "BI · SCORECARDS · EMBEDDED VIZ",
    description:
      "Go beyond charts with contextual, embedded analytics and automated scorecards that sit inside the software your teams already work in.",
    points: [
      "Embedded analytics",
      "Automated scorecards",
      "Self-service dashboards",
      "Client-facing portals",
      "Metric definitions",
      "Executive reporting",
    ],
  },
  {
    id: "05",
    shortName: "AI & ML",
    name: "GenAI & Production ML",
    eyebrow: "LLMS · RAG · PREDICTIVE MODELS",
    description:
      "Move past sandbox prototypes with domain-fine-tuned models, RAG search pipelines, and forecasting engineered to run in production.",
    points: [
      "Domain-fine-tuned LLMs",
      "RAG search pipelines",
      "Predictive modeling",
      "MLOps & monitoring",
      "Model governance",
      "Full inference telemetry",
    ],
  },
  {
    id: "06",
    shortName: "Deliver",
    name: "Cloud Applications & Security",
    eyebrow: "REACT · .NET · AZURE · SOC 2",
    description:
      "Mission-critical web applications and the cloud architecture underneath them, built for speed, uptime, and high data density.",
    points: [
      "React & .NET applications",
      "Azure cloud architecture",
      "High-density data UIs",
      "SOC 2 guardrails",
      "Access control",
      "Uptime & performance engineering",
    ],
  },
];
