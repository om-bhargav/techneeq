import awsLogo from "@/assets/logos/aws.webp.asset.json";
import azureLogo from "@/assets/logos/azure.webp.asset.json";
import databricksLogo from "@/assets/logos/databricks.webp.asset.json";
import datarobotLogo from "@/assets/logos/datarobot.webp.asset.json";
import dockerLogo from "@/assets/logos/docker.webp.asset.json";
import googleCloudLogo from "@/assets/logos/google-cloud.webp.asset.json";
import kubernetesLogo from "@/assets/logos/kubernetes.webp.asset.json";
import openaiLogo from "@/assets/logos/openai.webp.asset.json";
import pythonLogo from "@/assets/logos/python.webp.asset.json";
import sapLogo from "@/assets/logos/sap.webp.asset.json";
import type { Partner } from "@/components/solution_details/ToolPartnerStrip";

export const PARTNERS: Partner[] = [
  { name: "AWS", alt: "Amazon Web Services", src: awsLogo.url },
  { name: "Microsoft Azure", alt: "Microsoft Azure", src: azureLogo.url },
  { name: "Google Cloud", alt: "Google Cloud", src: googleCloudLogo.url },
  { name: "Databricks", alt: "Databricks", src: databricksLogo.url },
  { name: "SAP", alt: "SAP", src: sapLogo.url },
  { name: "Python", alt: "Python", src: pythonLogo.url },
  { name: "Docker", alt: "Docker", src: dockerLogo.url },
  { name: "Kubernetes", alt: "Kubernetes", src: kubernetesLogo.url },
  { name: "DataRobot", alt: "DataRobot", src: datarobotLogo.url },
  { name: "OpenAI", alt: "OpenAI", src: openaiLogo.url },
];

export interface Solution {
  slug: string;

  hero: {
    label: string;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    imageSrc: string;
  };

  useCases: {
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
  }[];
  useCaseSectionHeaders: {
    label: string;
    title: string;
    description: string;
  };

  capabilities: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  secondSection: {
    label: string;
    title: string;
    description: string;
  };
  points: {
    title: string;
    description: string;
  }[];
}

export const solutions: Record<string, Solution> = {
  "healthcare-life-sciences": {
    slug: "healthcare-life-sciences",
    hero: {
      label: "Healthcare and Life Sciences",
      title: "Transform care and discovery with enterprise AI",
      description:
        "Streamline operations, surface insights from clinical data, and accelerate research with AI solutions built for the complexities of healthcare and life sciences.",
      buttonText: "Request a demo",
      buttonHref: "/contact",
      imageSrc: "https://picsum.photos/seed/healthcare-ai/1000/1000",
    },
    useCaseSectionHeaders: {
      label: "AI capabilities",
      title: "Transform patient care. Turbocharge research.",
      description:
        "Explore how North powers use cases across healthcare and life sciences.",
    },
    secondSection: {
      label: "AI capabilities",
      title: "Transform patient care. Turbocharge research.",
      description:
        "Explore how North powers use cases across healthcare and life sciences.",
    },
    useCases: [
      {
        id: "patient-support",
        title: "Enhance patient support and engagement",
        description:
          "Empower clinicians to deliver faster, more personalized support with less admin overhead.",
        features: [
          "Generate tailored post-visit plans from records and care team notes",
          "Answer common questions about policies and protocols",
          "Lighten physician workload with AI-optimized support tools",
        ],
        image: "https://picsum.photos/seed/patient-support/1000/800",
      },
      {
        id: "back-office",
        title: "Automate back-office tasks",
        description:
          "Reduce repetitive administrative work and give healthcare teams more time to focus on patients.",
        features: [
          "Automate repetitive administrative workflows",
          "Extract and organize information from documents",
          "Reduce manual data entry and processing",
        ],
        image: "https://picsum.photos/seed/back-office/1000/800",
      },
      {
        id: "bench-to-bedside",
        title: "Accelerate progress from bench to bedside",
        description:
          "Connect research, clinical insights, and operational data to accelerate innovation across healthcare.",
        features: [
          "Surface insights from complex research data",
          "Accelerate clinical research workflows",
          "Connect research insights with patient outcomes",
        ],
        image: "https://picsum.photos/seed/bench-bedside/1000/800",
      },
    ],

    capabilities: [
      {
        id: "01",
        title: "Discover",
        description:
          "Surface context-aware answers securely grounded in your clinical and research data.",
        image: "https://picsum.photos/seed/discover/1200/900",
      },
      {
        id: "02",
        title: "Create",
        description:
          "Quickly draft documents, generate summaries, and create custom tables and charts.",
        image: "https://picsum.photos/seed/create/1200/900",
      },
      {
        id: "03",
        title: "Automate",
        description:
          "Accelerate work with AI agents that search, reason, and act across your data and tools.",
        image: "https://picsum.photos/seed/automate/1200/900",
      },
    ],

    points: [
      {
        title: "Privately deployable",
        description:
          "Deploy our products in your own VPC, on-prem environment, or through secure hosted infrastructure.",
      },
      {
        title: "Regulatory-ready",
        description:
          "Ensure compliance with auditable outputs, usage monitoring, and built-in governance tools.",
      },
      {
        title: "Fully customizable",
        description:
          "Tailor our models to your unique data, use cases, and infrastructure.",
      },
      {
        title: "Expert implementation",
        description:
          "Work with forward-deployed engineers to ensure fast, secure implementation.",
      },
    ],
  },

  "system-integration": {
    slug: "system-integration",
    useCaseSectionHeaders: {
      label: "Integration capabilities",
      title: "Connect systems. Simplify operations.",
      description:
        "Explore how intelligent integration connects systems, data, and workflows across your organization.",
    },
    hero: {
      label: "System Integration",
      title: "Make every system in your business talk to each other",
      description:
        "Stop stitching things together with spreadsheets and manual exports. Techneeq connects your ERPs, CRMs, legacy platforms, and custom applications into one reliable, real-time technology environment.",
      buttonText: "Talk to an integration expert",
      buttonHref: "/contact",
      imageSrc: "https://picsum.photos/seed/system-integration-hero/1000/1000",
    },
    secondSection: {
      label: "Integration capabilities",
      title: "Connect everything. Simplify anything.",
      description:
        "Explore how intelligent integration connects systems, data, and workflows across your organization.",
    },
    useCases: [
      {
        id: "unify-tech-stack",
        title: "Unify a fragmented tech stack",
        description:
          "Bring ERPs, CRMs, custom software, and third-party tools into one connected environment, without ripping out what already works.",
        features: [
          "Integrate legacy systems with modern cloud platforms",
          "Connect ERPs, CRMs, and custom applications through secure APIs",
          "Standardize how data moves across your entire stack",
        ],
        image: "https://picsum.photos/seed/unify-tech-stack/1000/800",
      },
      {
        id: "automate-operations",
        title: "Automate the handoffs that slow teams down",
        description:
          "Replace manual exports, re-entry, and email chains with workflows that move data automatically between the systems your teams already use.",
        features: [
          "Automate data movement between core business systems",
          "Trigger downstream workflows the moment source data changes",
          "Cut manual processing time across finance, ops, and support teams",
        ],
        image: "https://picsum.photos/seed/automate-operations/1000/800",
      },
      {
        id: "single-source-of-truth",
        title: "Build a single source of truth",
        description:
          "Give every team the same trusted, up-to-date data, so no one is reconciling three versions of the same report.",
        features: [
          "Centralize data from disconnected sources into one reliable layer",
          "Keep downstream reports, dashboards, and apps in sync automatically",
          "Reduce data errors caused by manual duplication",
        ],
        image: "https://picsum.photos/seed/single-source-of-truth/1000/800",
      },
    ],

    capabilities: [
      {
        id: "01",
        title: "Connect",
        description:
          "Link ERPs, CRMs, databases, and third-party platforms through secure, well-documented APIs, no matter how old or how modern.",
        image: "https://picsum.photos/seed/integration-connect/1200/900",
      },
      {
        id: "02",
        title: "Orchestrate",
        description:
          "Coordinate multi-step workflows across systems so data and processes move automatically, in the right order, every time.",
        image: "https://picsum.photos/seed/integration-orchestrate/1200/900",
      },
      {
        id: "03",
        title: "Scale",
        description:
          "Build integration architecture designed to keep working as you add new tools, new data sources, and new business requirements.",
        image: "https://picsum.photos/seed/integration-scale/1200/900",
      },
    ],

    points: [
      {
        title: "API-first architecture",
        description:
          "Every integration is built on documented, reusable APIs, so your systems stay flexible as your stack evolves.",
      },
      {
        title: "Legacy-friendly",
        description:
          "We connect modern platforms to the legacy systems you already depend on, without forcing a costly rebuild.",
      },
      {
        title: "Secure by design",
        description:
          "Authentication, access control, and monitoring are built into every integration from day one.",
      },
      {
        title: "Hands-on implementation",
        description:
          "Our engineers work directly with your team to design, build, and support integrations that hold up in production.",
      },
    ],
  },

  education: {
    useCaseSectionHeaders: {
      label: "AI capabilities",
      title: "Personalize learning. Empower educators.",
      description:
        "Explore how AI helps educational institutions create better learning experiences and outcomes.",
    },
    slug: "education",
    secondSection: {
      label: "AI capabilities",
      title: "Accelerate decisions. Automate financial intelligence.",
      description:
        "Explore how enterprise AI transforms financial operations, analysis, and client experiences.",
    },
    hero: {
      label: "Education",
      title: "Software built around how your institution actually runs",
      description:
        "From student-facing apps to the systems your staff rely on daily, Techneeq builds and connects the technology that helps schools, universities, and edtech teams operate more efficiently.",
      buttonText: "Talk to our team",
      buttonHref: "/contact",
      imageSrc: "https://picsum.photos/seed/education-hero/1000/1000",
    },

    useCases: [
      {
        id: "student-experience",
        title: "Build a better student experience",
        description:
          "Give students a faster, simpler way to get information, register, and stay engaged, without waiting on an overloaded front office.",
        features: [
          "Design self-service portals for records, registration, and support",
          "Build tools that answer common student questions instantly",
          "Personalize learning resources and communications at scale",
        ],
        image: "https://picsum.photos/seed/student-experience/1000/800",
      },
      {
        id: "institutional-automation",
        title: "Automate the paperwork behind the scenes",
        description:
          "Reduce the manual admissions, enrollment, and records work that pulls staff away from students.",
        features: [
          "Automate repetitive enrollment and admissions workflows",
          "Extract and organize data from forms, applications, and records",
          "Cut manual data entry across departments",
        ],
        image: "https://picsum.photos/seed/institutional-automation/1000/800",
      },
      {
        id: "institutional-data",
        title: "Turn institutional data into decisions",
        description:
          "Connect data from LMS platforms, student information systems, and departments to see what's actually driving outcomes.",
        features: [
          "Bring LMS, SIS, and departmental data into one connected view",
          "Track engagement, performance, and retention trends",
          "Support leadership decisions with reliable, up-to-date reporting",
        ],
        image: "https://picsum.photos/seed/institutional-data/1000/800",
      },
    ],

    capabilities: [
      {
        id: "01",
        title: "Engage",
        description:
          "Build digital experiences that make it easier for students and families to get what they need, when they need it.",
        image: "https://picsum.photos/seed/education-engage/1200/900",
      },
      {
        id: "02",
        title: "Automate",
        description:
          "Take repetitive administrative work off staff plates with workflows that run quietly in the background.",
        image: "https://picsum.photos/seed/education-automate2/1200/900",
      },
      {
        id: "03",
        title: "Understand",
        description:
          "Turn scattered institutional data into dashboards and reports your leadership team can actually use.",
        image: "https://picsum.photos/seed/education-understand2/1200/900",
      },
    ],

    points: [
      {
        title: "Built around real workflows",
        description:
          "We design around how your institution actually operates, not a generic template.",
      },
      {
        title: "Secure and compliant",
        description:
          "Student data is handled with the security and privacy standards educational institutions require.",
      },
      {
        title: "Works with what you have",
        description:
          "We integrate with the LMS, SIS, and systems you're already running instead of replacing them outright.",
      },
      {
        title: "Hands-on partnership",
        description:
          "Our engineers work directly with your team, from planning through launch and beyond.",
      },
    ],
  },

  "financial-services": {
    slug: "financial-services",
    useCaseSectionHeaders: {
      label: "AI capabilities",
      title: "Accelerate decisions. Transform finance.",
      description:
        "Explore how enterprise AI streamlines financial operations, analysis, and client experiences.",
    },
    hero: {
      label: "Financial Services",
      title: "Technology your financial operations can actually rely on",
      description:
        "Techneeq builds secure, reliable software and integrations that help financial teams move faster, cut manual work, and keep sensitive data protected at every step.",
      buttonText: "Talk to our team",
      buttonHref: "/contact",
      imageSrc: "https://picsum.photos/seed/financial-services-hero/1000/1000",
    },
    secondSection: {
      label: "AI capabilities",
      title: "Accelerate decisions. Automate financial intelligence.",
      description:
        "Explore how enterprise AI transforms financial operations, analysis, and client experiences.",
    },
    useCases: [
      {
        id: "client-experience",
        title: "Deliver a faster, more personal client experience",
        description:
          "Give client-facing teams instant access to the information they need to respond quickly and accurately.",
        features: [
          "Build self-service portals for accounts, statements, and requests",
          "Give relationship teams instant access to trusted client data",
          "Automate routine client communications and updates",
        ],
        image:
          "https://picsum.photos/seed/financial-client-experience/1000/800",
      },
      {
        id: "financial-ops-automation",
        title: "Automate financial operations",
        description:
          "Reduce the manual work behind reconciliations, reporting, and document processing so teams can focus on higher-value work.",
        features: [
          "Automate repetitive reconciliation and reporting workflows",
          "Extract and classify data from statements, invoices, and forms",
          "Cut manual processing time across back-office operations",
        ],
        image: "https://picsum.photos/seed/financial-ops-automation/1000/800",
      },
      {
        id: "secure-integration",
        title: "Connect financial systems securely",
        description:
          "Bring core banking, payment, and reporting systems together without compromising on security or compliance.",
        features: [
          "Integrate core banking, payment, and reporting platforms",
          "Maintain clear audit trails across every connected system",
          "Keep sensitive financial data protected end-to-end",
        ],
        image:
          "https://picsum.photos/seed/financial-secure-integration/1000/800",
      },
    ],

    capabilities: [
      {
        id: "01",
        title: "Connect",
        description:
          "Integrate core banking, payment, and reporting systems through secure, well-governed APIs.",
        image: "https://picsum.photos/seed/financial-connect/1200/900",
      },
      {
        id: "02",
        title: "Automate",
        description:
          "Remove manual work from reconciliations, reporting, and document-heavy processes.",
        image: "https://picsum.photos/seed/financial-automate2/1200/900",
      },
      {
        id: "03",
        title: "Protect",
        description:
          "Build every workflow on infrastructure designed for the security and compliance financial services demands.",
        image: "https://picsum.photos/seed/financial-protect/1200/900",
      },
    ],

    points: [
      {
        title: "Security-first engineering",
        description:
          "Every system we build or connect is designed around access control, encryption, and audit visibility from day one.",
      },
      {
        title: "Compliance-aware",
        description:
          "We build with the regulatory and governance requirements of financial services in mind, not as an afterthought.",
      },
      {
        title: "Built to scale",
        description:
          "Architecture designed to handle growing transaction volumes and evolving reporting requirements.",
      },
      {
        title: "Hands-on implementation",
        description:
          "Our engineers work alongside your team to deliver systems that hold up in production, not just in a demo.",
      },
    ],
  },
};
