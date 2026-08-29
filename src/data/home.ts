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
    title: "23 years engineering the data & AI systems enterprises run on.",
    description:
      "Since 2002, Techneeq has delivered enterprise data engineering, analytics, and AI consulting to finance, healthcare, insurance, and manufacturing organizations across the United States, the United Kingdom, and the European Union.",
    image: "https://picsum.photos/seed/data-cloud/1920/1080",
  },
  {
    id: 2,
    title: "Enterprise data engineering, built for decisions — not dashboards.",
    description:
      "We design and build the data infrastructure, integration pipelines, and analytics platforms that give leadership teams a single, trusted source of truth.",
    image: "https://picsum.photos/seed/data-pipeline/1920/1080",
  },
  {
    id: 3,
    title: "Data pipelines engineered to hold under enterprise load.",
    description:
      "End-to-end data engineering and DataOps — system integration, cloud migration, and automation — built to eliminate downtime and reporting errors at scale.",
    image: "https://picsum.photos/seed/business-data/1920/1080",
  },
  {
    id: 4,
    title: "AI and custom software, engineered around your P&L.",
    description:
      "From predictive analytics to production-grade machine learning, every AI consulting engagement is designed around a measurable business return — not a proof of concept that never ships.",
    image: "https://picsum.photos/seed/analytics/1920/1080",
  },
];

export const intelligenceLayers = [
  {
    id: "01",
    title: "Real-Time Data Ingestion",
    keyword: "INGEST",
    subtitle: "Live enterprise data, not last week's export",
    description:
      "Real-time data integration that connects your systems and replaces static reporting with dashboards that are always current.",
    icon: Activity,
  },
  {
    id: "02",
    title: "Enterprise Systems Integration",
    keyword: "INTEGRATE",
    subtitle: "One connected data platform, not twelve disconnected tools",
    description:
      "We integrate the platforms your teams already run, so information moves automatically instead of through spreadsheets and email.",
    icon: Boxes,
  },
  {
    id: "03",
    title: "Data Engineering & DataOps",
    keyword: "PIPELINE",
    subtitle: "Cloud data pipelines engineered to hold under load",
    description:
      "Enterprise-grade data engineering and DataOps — pipelines we build and monitor, so problems get caught before they reach a report.",
    icon: Database,
  },
  {
    id: "04",
    title: "Business Intelligence & Analytics",
    keyword: "ANALYZE",
    subtitle: "Numbers your leadership team actually trusts",
    description:
      "Self-service dashboards and business intelligence built into the tools your team already uses every day.",
    icon: BarChart3,
  },
  {
    id: "05",
    title: "AI & Machine Learning Consulting",
    keyword: "REASON",
    subtitle: "Predictive models you can explain to your board",
    description:
      "Predictive analytics, forecasting models, and AI assistants engineered and monitored to hit a specific business metric — not just a demo.",
    icon: BrainCircuit,
  },
  {
    id: "06",
    title: "Custom Software Development",
    keyword: "DELIVER",
    subtitle: "Enterprise software built around your business, not the reverse",
    description:
      "Custom applications engineered on Microsoft .NET, Azure, React, and low-code platforms, built to solve the specific problem you have.",
    icon: Code2,
  },
];

export const services = [
  {
    id: "01",
    category: "Managed Data Operations",
    title: "Enterprise Data Pipelines, Monitored Around the Clock",
    description:
      "Ongoing data pipeline management and DataOps support, so data quality issues get caught before they reach your board meeting.",
    icon: Database,
    image: "/services/1.png",
  },
  {
    id: "02",
    category: "AI Pilot to Production",
    title: "Take AI From Pilot to Production-Grade Deployment",
    description:
      "MLOps, monitoring, and governance that move machine learning models out of the notebook and into systems the enterprise can rely on.",
    icon: BrainCircuit,
    image: "/services/2.png",
  },
  {
    id: "03",
    category: "Cloud Migration",
    title: "Cloud Migration Without the Downtime or the Surprises",
    description:
      "We plan and execute cloud data migrations that keep the business running while we modernize the infrastructure underneath it.",
    icon: CloudCog,
    image: "/services/3.png",
  },
  {
    id: "04",
    category: "Embedded Team",
    title: "Senior Data & AI Talent, Without the Hiring Cycle",
    description:
      "Embedded data engineers, scientists, and analysts who plug into your existing team and start delivering in weeks, not quarters.",
    icon: Code2,
    image: "/services/4.png",
  },
  {
    id: "05",
    category: "Assessment & Roadmap",
    title: "A Clear Data Strategy Before You Spend a Dollar",
    description:
      "A structured audit of your current data, systems, and processes, followed by a prioritized modernization roadmap — with or without us.",
    icon: Layers3,
    image: "/services/5.png",
  },
  {
    id: "06",
    category: "Security & Compliance Review",
    title: "Know Exactly Where Your Risk Is Before Someone Else Finds It",
    description:
      "A data security and compliance review benchmarked against the standards your industry and regulators actually enforce.",
    icon: ShieldCheck,
    image: "/services/6.png",
  },
];


export const solutions = [
  {
    id: "01",
    slug: "digital-experiences",
    title: "Digital Experience Engineering",
    description:
      "Enterprise websites, portals, and applications engineered to make it easy for your customers and employees to get things done.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-2",
    variant: "large",
  },
  {
    id: "02",
    slug: "ai-intelligence",
    title: "AI & Machine Learning Consulting",
    description:
      "Applied AI consulting — forecasting, automation, and machine learning — engineered for a measurable business result, not a demo.",
    icon: Bot,
    className: "md:col-span-4",
    variant: "wide",
  },
  {
    id: "03",
    slug: "technology-engineering",
    title: "Custom Software Engineering",
    description:
      "Enterprise software engineered to handle your business's real complexity, not a generic template.",
    icon: Cloud,
    className: "md:col-span-2",
    variant: "normal",
  },
  {
    id: "04",
    slug: "data-analytics",
    title: "Data Engineering & Analytics",
    description:
      "Clean, connected enterprise data and the business intelligence dashboards that turn it into decisions.",
    icon: Database,
    className: "md:col-span-2",
    variant: "normal",
  },
  {
    id: "05",
    slug: "digital-transformation",
    title: "Digital Transformation Consulting",
    description:
      "Replace manual, error-prone processes with connected systems your team can actually rely on.",
    icon: Workflow,
    className: "md:col-span-3",
    variant: "bottom",
  },
  {
    id: "06",
    slug: "security-infrastructure",
    title: "Cloud Security & Infrastructure",
    description:
      "Cloud infrastructure and data security safeguards engineered to keep the business running, and the auditors satisfied.",
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
      "Healthcare data analytics that connects clinical, operational, and research data to improve decisions across the care journey.",
    image: "/industries/1.png",
  },
  {
    id: "02",
    name: "Financial Services",
    eyebrow: "RISK · CAPITAL · PERFORMANCE",
    description:
      "Financial services data consulting that brings risk, capital, and performance data together for sharper forecasting and decision-making.",
    image: "/industries/2.png",
  },
  {
    id: "03",
    name: "Insurance",
    eyebrow: "POLICIES · CLAIMS · LOSS",
    description:
      "Underwriting and claims analytics, loss modeling, and intelligent automation of document-heavy insurance workflows.",
    image: "/industries/3.png",
  },
  {
    id: "04",
    name: "Manufacturing",
    eyebrow: "OPERATIONS · SUPPLY · QUALITY",
    description:
      "Manufacturing data engineering that connects production, supply chain, and operational data into one clear view of performance.",
    image: "/industries/4.png",
  },
  {
    id: "05",
    name: "Retail & Consumer",
    eyebrow: "CUSTOMER · DEMAND · COMMERCE",
    description:
      "Retail and consumer analytics that turn fragmented customer and commercial data into intelligence behind every interaction.",
    image: "/industries/5.png",
  },
  {
    id: "06",
    name: "Public Sector",
    eyebrow: "CITIZENS · SERVICES · GOVERNANCE",
    description:
      "Public sector data modernization that builds trusted data foundations for transparent, accountable services.",
    image: "/industries/6.png",
  },
];



export const transformations = [
  {
    id: "01",
    title: "Assess",
    description:
      "We audit your business, your data, and the decision you're trying to speed up. No lengthy discovery decks.",
  },
  {
    id: "02",
    title: "Architect",
    description:
      "We design the data architecture that solves the actual problem — not the trendiest one.",
  },
  {
    id: "03",
    title: "Build",
    description:
      "Our engineers build and test in the open, with regular check-ins, so nothing surprises you at delivery.",
  },
  {
    id: "04",
    title: "Operate",
    description:
      "We stay on to monitor, tune, and support the system after go-live, so it keeps performing long after launch.",
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
      "Enterprise data warehouses and business intelligence reporting that give your team one trusted set of numbers to work from.",
    icon: BarChart3,
  },
  {
    id: "02",
    title: "Enterprise Application Integration",
    description:
      "Connecting and extending the enterprise systems that already run your finance, operations, and service teams.",
    icon: Database,
  },
  {
    id: "03",
    title: "Digital Conversion",
    description:
      "Turning manual, paper-based processes into digital workflows you can actually measure and audit.",
    icon: FileDigit,
  },
  {
    id: "04",
    title: "Azure Cloud Infrastructure",
    description:
      "Cloud infrastructure consulting on Microsoft Azure, engineered to control cost and pass a security audit.",
    icon: Cloud,
  },
  {
    id: "05",
    title: "Data Strategy & Project Management",
    description:
      "Realistic data strategy roadmaps and delivery oversight, so projects finish on the timeline you were promised.",
    icon: Route,
  },
  {
    id: "06",
    title: "Machine Learning & Conversational AI",
    description:
      "Predictive models and conversational AI assistants engineered to run in production — not stay in a slide deck.",
    icon: Bot,
  },
];

export const faqs = [
  {
    question: "What kind of problems do you actually solve?",
    answer:
      "Mostly: data that doesn't line up between systems, reports nobody fully trusts, manual processes eating up staff time, and AI initiatives that never get past a pilot. If any of that sounds familiar, that's our lane.",
  },
  {
    question: "Do we need to rip out our existing systems to work with you?",
    answer:
      "No. We work with what you already have — most of our data engineering projects connect, clean up, and extend existing systems rather than replace them. A full rebuild is the exception, not the default.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "We design around your industry's requirements from day one — including HIPAA, SOC 2, GDPR, UK Data Protection Act, and financial services regulations — rather than treating security and compliance as a step added at the end.",
  },
  {
    question: "Do you work with companies outside the United States?",
    answer:
      "Yes. Alongside our US client base, we deliver data engineering and AI consulting for organizations across the United Kingdom and the European Union, with data residency and GDPR compliance built into the architecture from day one.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We start with a short assessment to confirm scope, then move into build in defined phases with regular check-ins, so you always know what's shipping and when. Smaller projects run in weeks; enterprise platform work runs in months.",
  },
  {
    question: "Do we need our own data team already?",
    answer:
      "No. We can run the engagement end-to-end, work alongside your existing team, or train your team to take it over — whichever makes sense for where you are.",
  },
  {
    question: "What happens after the project goes live?",
    answer:
      "We stay on for monitoring, fixes, and iteration if you want us to. Nothing goes live and gets abandoned.",
  },
];