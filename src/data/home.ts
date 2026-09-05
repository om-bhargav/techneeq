import {
  Activity,
  Boxes,
  BarChart3,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
  Workflow,
  Shield,
  Cloud,
  Bot,
  Sparkles,
  FileDigit,
  Route,
} from "lucide-react";

export const slides = [
  {
    id: 1,
    title: "From passive reporting to active intelligence.",
    description:
      "Techneeq turns fragmented enterprise pipelines into live, autonomous decision engines. We replace static monthly BI with streaming data infrastructure, automated pipelines, and predictive AI in production.",
    image: "/hero/1.png",
  },
  {
    id: 2,
    title: "90% of enterprise dashboards are digital paperweights.",
    description:
      "Most reporting describes what already happened. We engineer data platforms that surface the pattern while there is still time to do something about it.",
    image: "/hero/2.png",
  },
  {
    id: 3,
    title: "Data pipelines engineered to hold under enterprise load.",
    description:
      "Reliable Lakehouses, automated ETL/ELT pipelines, and semantic layers that cut infrastructure spend and eliminate the pipeline failures that end up in your board deck.",
    image: "/hero/3.png",
  },
  {
    id: 4,
    title: "Enterprise GenAI and production ML, past the prototype.",
    description:
      "Domain-fine-tuned LLMs, RAG search pipelines, and predictive models shipped with full telemetry and governance — not a sandbox demo that never leaves the notebook.",
    image: "/hero/4.png",
  },
  {
    id: 5,
    title: "Data isn't valuable until it changes what you do.",
    description:
      "Every engagement is scoped around a decision someone has to make and the action that follows it, with a measurable business return attached before we write a line of code.",
    image: "/hero/5.png",
  },
];

export const intelligenceLayers = [
  {
    id: "01",
    title: "Live Operational Intelligence",
    keyword: "INGEST",
    subtitle: "Live interconnected data, not last week's export",
    description:
      "Eliminate stale BI. We embed real-time event streaming and automated alert triggers directly into your operations, enabling teams to act on anomalies as they happen.",
    icon: Activity,
  },
  {
    id: "02",
    title: "Legacy Modernization & Core Integration",
    keyword: "INTEGRATE",
    subtitle: "Fragmented systems become one ecosystem",
    description:
      "De-risk your digital infrastructure. We decouple legacy on-prem systems and migrate operational workflows to unified, cloud-native digital rails.",
    icon: Boxes,
  },
  {
    id: "03",
    title: "Modern Data Platforms & DataOps",
    keyword: "PIPELINE",
    subtitle: "Cloud data pipelines engineered to hold under load",
    description:
      "Architect reliable Lakehouses, automated ETL/ELT pipelines, and semantic layers that cut infrastructure spend and eliminate pipeline failures.",
    icon: Database,
  },
  {
    id: "04",
    title: "Embedded & Augmented Decision Analytics",
    keyword: "ANALYZE",
    subtitle: "Dynamic visualization your leadership team trusts",
    description:
      "Beyond charts: we build contextual, embedded analytics and automated scorecards directly inside your internal software and client-facing portals.",
    icon: BarChart3,
  },
  {
    id: "05",
    title: "Enterprise GenAI & Production ML",
    keyword: "REASON",
    subtitle: "Neural intelligence, past the sandbox prototype",
    description:
      "Move beyond sandbox prototypes. We engineer domain-fine-tuned LLMs, RAG search pipelines, and predictive models with full telemetry and governance.",
    icon: BrainCircuit,
  },
  {
    id: "06",
    title: "Bespoke Enterprise Cloud Applications",
    keyword: "DELIVER",
    subtitle: "Modular architecture built around your business",
    description:
      "Mission-critical web applications built for speed, uptime, and high data density using React, .NET, and scalable Azure cloud architectures.",
    icon: Code2,
  },
];

export const services = [
  {
    id: "01",
    category: "Managed Data Operations",
    title: "DataOps Pipelines Monitored Around the Clock",
    description:
      "Continuous pipeline monitoring, CI/CD DataOps, and automated governance guardrails, so data quality issues get caught long before they reach your board meeting.",
    icon: Database,
    image: "/services/1.png",
  },
  {
    id: "02",
    category: "AI Pilot to Production",
    title: "Move Models Out of the Sandbox and Into Production",
    description:
      "MLOps, telemetry, and governance that take fine-tuned LLMs and predictive models from prototype to systems the enterprise can actually depend on.",
    icon: BrainCircuit,
    image: "/services/2.png",
  },
  {
    id: "03",
    category: "Cloud Migration",
    title: "Production Cutover Without the Downtime",
    description:
      "We decouple legacy on-prem systems and migrate operational workflows onto cloud-native rails while the business keeps running underneath.",
    icon: CloudCog,
    image: "/services/3.png",
  },
  {
    id: "04",
    category: "Embedded Team",
    title: "Senior Data & AI Engineers, Without the Hiring Cycle",
    description:
      "Forward-deployed data engineers, scientists, and analysts who plug into your existing team and start shipping inside the first sprint, not the second quarter.",
    icon: Code2,
    image: "/services/4.png",
  },
  {
    id: "05",
    category: "Assessment & Roadmap",
    title: "Architecture Audit & Pipeline Scoping in Two Weeks",
    description:
      "We map the existing silos, define latency targets, and hand back a prioritized architecture roadmap that removes the bottlenecks — with or without us.",
    icon: Layers3,
    image: "/services/5.png",
  },
  {
    id: "06",
    category: "Security & Compliance Review",
    title: "Know Where Your Risk Is Before an Auditor Does",
    description:
      "A data security and governance review benchmarked against SOC 2, HIPAA, and GDPR, with the remediation path mapped out in priority order.",
    icon: ShieldCheck,
    image: "/services/6.png",
  },
];

export const solutions = [
  {
    id: "01",
    slug: "digital-experiences",
    title: "Bespoke Enterprise Applications",
    description:
      "Mission-critical portals and web applications built for speed, uptime, and high data density on React, .NET, and Azure.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-2",
    variant: "large",
  },
  {
    id: "02",
    slug: "ai-intelligence",
    title: "Enterprise GenAI & Production ML",
    description:
      "Domain-fine-tuned LLMs, RAG search pipelines, and predictive models engineered with telemetry and governance built in.",
    icon: Bot,
    className: "md:col-span-4",
    variant: "wide",
  },
  {
    id: "03",
    slug: "technology-engineering",
    title: "Legacy Modernization",
    description:
      "Decouple on-prem systems and move operational workflows onto unified, cloud-native digital rails.",
    icon: Cloud,
    className: "md:col-span-2",
    variant: "normal",
  },
  {
    id: "04",
    slug: "data-analytics",
    title: "Modern Data Platforms & DataOps",
    description:
      "Reliable Lakehouses, automated ETL/ELT pipelines, and semantic layers every team reads the same way.",
    icon: Database,
    className: "md:col-span-2",
    variant: "normal",
  },
  {
    id: "05",
    slug: "digital-transformation",
    title: "Live Operational Intelligence",
    description:
      "Real-time event streaming and automated alert triggers embedded directly into daily operations.",
    icon: Workflow,
    className: "md:col-span-3",
    variant: "bottom",
  },
  {
    id: "06",
    slug: "security-infrastructure",
    title: "Cloud Security & Governance",
    description:
      "SOC 2 compliance guardrails, access control, and telemetry engineered into the platform from day one.",
    icon: Shield,
    className: "md:col-span-3",
    variant: "bottom",
  },
];

export const industries = [
  {
    id: "01",
    name: "Healthcare & Life Sciences",
    eyebrow: "PATIENTS · RESEARCH · CARE",
    description:
      "HIPAA-compliant streaming telemetry and predictive patient resource allocation. Clinical and operational reporting that keeps pace with the floor.",
    image: "/industries/1.png",
  },
  {
    id: "02",
    name: "Financial Services",
    eyebrow: "RISK · CAPITAL · PERFORMANCE",
    description:
      "Risk, capital, and performance data unified into one live view, with auditable lineage running from source system to board report.",
    image: "/industries/2.png",
  },
  {
    id: "03",
    name: "Insurance",
    eyebrow: "POLICIES · CLAIMS · LOSS",
    description:
      "Underwriting and claims analytics, loss modeling, and intelligent automation for the document-heavy workflows that slow policy operations down.",
    image: "/industries/3.png",
  },
  {
    id: "04",
    name: "Manufacturing & Supply Chain",
    eyebrow: "OPERATIONS · SUPPLY · QUALITY",
    description:
      "Production, supply chain, and quality telemetry streamed into one operational picture, so bottlenecks surface before they cost you a shift.",
    image: "/industries/4.png",
  },
  {
    id: "05",
    name: "Retail & Consumer Goods",
    eyebrow: "CUSTOMER · DEMAND · COMMERCE",
    description:
      "Demand forecasting and customer intelligence built on live commercial data instead of last month's export.",
    image: "/industries/5.png",
  },
  {
    id: "06",
    name: "Public Sector",
    eyebrow: "CITIZENS · SERVICES · GOVERNANCE",
    description:
      "Trusted, governed data foundations that make public services measurable, transparent, and accountable to the people using them.",
    image: "/industries/6.png",
  },
];

export const transformations = [
  {
    id: "01",
    title: "Connect",
    description:
      "Systems stop being islands. Records from every platform land in one place, continuously.",
  },
  {
    id: "02",
    title: "Contextualize",
    description:
      "Raw records become modeled facts your teams read the same way, with the same definitions.",
  },
  {
    id: "03",
    title: "Intelligent",
    description:
      "Analytics and models sit on top of live data, so patterns surface before they become history.",
  },
  {
    id: "04",
    title: "Actionable",
    description:
      "Intelligence reaches the person making the call, at the moment the call has to be made.",
  },
];

export const stages = [
  {
    id: "01",
    title: "DATA",
    description: "Records, events, systems",
  },
  {
    id: "02",
    title: "INSIGHT",
    description: "Modeled, contextualized",
  },
  {
    id: "03",
    title: "DECISION",
    description: "A call someone has to make",
  },
  {
    id: "04",
    title: "ACTION",
    description: "The thing that changes",
  },
];

export const expertise = [
  {
    id: "01",
    title: "Big Data, BI & Analytics",
    description:
      "Enterprise Lakehouses, semantic layers, and BI reporting that give every team one trusted set of numbers to work from.",
    icon: BarChart3,
  },
  {
    id: "02",
    title: "Enterprise Application Integration",
    description:
      "Decoupling and connecting the ERP, CRM, and core platforms that already run your finance, operations, and service teams.",
    icon: Database,
  },
  {
    id: "03",
    title: "Digital Conversion",
    description:
      "Turning manual, paper-based processes into digital workflows with measurable throughput and a clean audit trail.",
    icon: FileDigit,
  },
  {
    id: "04",
    title: "Azure Cloud Infrastructure",
    description:
      "Cloud-native architecture on Microsoft Azure, engineered to control infrastructure spend and clear a security review.",
    icon: Cloud,
  },
  {
    id: "05",
    title: "Data Strategy & Project Management",
    description:
      "Architecture audits, defined latency targets, and delivery oversight that keep programs on the timeline you were promised.",
    icon: Route,
  },
  {
    id: "06",
    title: "Machine Learning & Conversational AI",
    description:
      "RAG search pipelines, predictive models, and conversational assistants engineered to run in production with full telemetry.",
    icon: Bot,
  },
];

export const faqs = [
  {
    question: "What kind of problems do you actually solve?",
    answer:
      "Fragmented pipelines, dashboards nobody fully trusts, manual handoffs eating staff time, and AI pilots that never reach production. If your reporting describes last month instead of this morning, that's our lane.",
  },
  {
    question: "Do we need to rip out our existing systems to work with you?",
    answer:
      "No. Most engagements decouple and modernize what you already run — we connect legacy on-prem platforms to cloud-native rails rather than forcing a costly rebuild. A full replacement is the exception, not the default.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Governance guardrails are part of the architecture, not a step bolted on at the end. We design against SOC 2, HIPAA, GDPR, the UK Data Protection Act, and the financial services regulations your auditors actually enforce.",
  },
  {
    question: "Do you work with companies outside the United States?",
    answer:
      "Yes. Alongside our US client base, we deliver data engineering and AI consulting across the United Kingdom and the European Union, with data residency and GDPR compliance designed into the architecture from day one.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "Weeks 1–2 are an architecture audit and pipeline scoping. Weeks 3–6 are a PoC and streaming pipeline sprint validated on live data. From week 7 we move to production cutover with CI/CD DataOps and automated governance.",
  },
  {
    question: "Do we need our own data team already?",
    answer:
      "No. We can run the engagement end-to-end, embed forward-deployed engineers alongside your team, or train your people to take ownership after cutover — whichever fits where you are.",
  },
  {
    question: "What happens after the project goes live?",
    answer:
      "We stay on for telemetry, monitoring, and iteration if you want us to. Nothing ships into production and then gets abandoned.",
  },
];
