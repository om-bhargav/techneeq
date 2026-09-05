import awsLogo from "@/assets/logos/aws.webp";
import azureLogo from "@/assets/logos/azure.webp";
import databricksLogo from "@/assets/logos/databricks.webp";
import datarobotLogo from "@/assets/logos/datarobot.webp";
import dockerLogo from "@/assets/logos/docker.webp";
import googleCloudLogo from "@/assets/logos/gcp.webp";
import kubernetesLogo from "@/assets/logos/kubernetes.webp";
import openaiLogo from "@/assets/logos/openai.webp";
import pythonLogo from "@/assets/logos/python.webp";
import sapLogo from "@/assets/logos/sap.webp";
import type { Partner } from "@/components/solution_details/ToolPartnerStrip";

export const PARTNERS: Partner[] = [
  { name: "AWS", alt: "Amazon Web Services", src: awsLogo },
  { name: "Microsoft Azure", alt: "Microsoft Azure", src: azureLogo },
  { name: "Google Cloud", alt: "Google Cloud", src: googleCloudLogo },
  { name: "Databricks", alt: "Databricks", src: databricksLogo },
  { name: "SAP", alt: "SAP", src: sapLogo },
  { name: "Python", alt: "Python", src: pythonLogo },
  { name: "Docker", alt: "Docker", src: dockerLogo },
  { name: "Kubernetes", alt: "Kubernetes", src: kubernetesLogo },
  { name: "DataRobot", alt: "DataRobot", src: datarobotLogo },
  { name: "OpenAI", alt: "OpenAI", src: openaiLogo },
];

export interface Solution {
  slug: string;
  image: string;
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
    image: "/solutions-contents/18.png",
    hero: {
      label: "Healthcare and Life Sciences",
      title: "Clinical and operational reporting that keeps pace with the floor",
      description:
        "HIPAA-compliant streaming telemetry and predictive patient resource allocation. Techneeq connects clinical, operational, and research data into live intelligence your care teams can act on the same shift.",
      buttonText: "Schedule Architecture Review",
      buttonHref: "/contact",
      imageSrc: "/solutions-contents/19.png",
    },
    useCaseSectionHeaders: {
      label: "Where we go deep",
      title: "Transform patient care. Turbocharge research.",
      description:
        "Explore how Techneeq powers live intelligence across healthcare and life sciences.",
    },
    secondSection: {
      label: "Capabilities engineered for speed",
      title: "One intelligence architecture. Every care environment.",
      description:
        "Explore how Techneeq powers live intelligence across healthcare and life sciences.",
    },
    useCases: [
      {
        id: "patient-support",
        title: "Enhance patient support and engagement",
        description:
          "Empower clinicians to deliver faster, more personalized support with less administrative overhead.",
        features: [
          "Generate tailored post-visit plans from records and care team notes",
          "Answer common questions about policies and protocols instantly",
          "Lighten physician workload with AI-optimized support tools",
        ],
        image: "/solutions-contents/20.png",
      },
      {
        id: "back-office",
        title: "Automate claims and back-office workloads",
        description:
          "Reduce repetitive administrative work and give healthcare teams more time to spend with patients.",
        features: [
          "Automate claims analytics and repetitive administrative workflows",
          "Extract and classify information from document-heavy records",
          "Cut manual data entry and reconciliation across departments",
        ],
        image: "/solutions-contents/21.png",
      },
      {
        id: "bench-to-bedside",
        title: "Forecast capacity from bench to bedside",
        description:
          "Connect research, clinical, and operational data so patterns surface before they become history.",
        features: [
          "Predict patient volume and allocate resources ahead of demand",
          "Surface insights from complex clinical and research datasets",
          "Connect research signals with real patient outcomes",
        ],
        image: "/solutions-contents/13.png",
      },
    ],

    capabilities: [
      {
        id: "01",
        title: "Ingest",
        description:
          "Stream clinical and operational events continuously, so reporting reflects the floor right now instead of last month.",
        image: "https://picsum.photos/seed/discover/1200/900",
      },
      {
        id: "02",
        title: "Analyze",
        description:
          "Embed contextual analytics and automated scorecards directly inside the clinical software your teams already use.",
        image: "https://picsum.photos/seed/create/1200/900",
      },
      {
        id: "03",
        title: "Reason",
        description:
          "Run predictive models and RAG search pipelines over your own data, with full telemetry and governance attached.",
        image: "https://picsum.photos/seed/automate/1200/900",
      },
    ],

    points: [
      {
        title: "Privately deployable",
        description:
          "Deploy inside your own VPC, on-prem environment, or through secure hosted infrastructure.",
      },
      {
        title: "PHI-safe by design",
        description:
          "HIPAA-aligned delivery with auditable outputs, usage monitoring, and governance guardrails built in.",
      },
      {
        title: "Fully customizable",
        description:
          "Models and pipelines tailored to your clinical data, use cases, and existing infrastructure.",
      },
      {
        title: "Forward-deployed engineers",
        description:
          "Work directly with our engineers to move from architecture audit to production cutover fast.",
      },
    ],
  },

  "system-integration": {
    slug: "system-integration",
    image: "/solutions-contents/16.png",
    useCaseSectionHeaders: {
      label: "Integration capabilities",
      title: "Systems stop being islands.",
      description:
        "Explore how Techneeq decouples legacy platforms and moves operational workflows onto unified digital rails.",
    },
    hero: {
      label: "System Integration",
      title: "Fragmented systems become one connected ecosystem",
      description:
        "De-risk your digital infrastructure. Techneeq decouples legacy on-prem systems and migrates operational workflows to unified, cloud-native digital rails — so records from every platform land in one place, continuously.",
      buttonText: "Schedule Architecture Review",
      buttonHref: "/contact",
      imageSrc: "/solutions-contents/15.png",
    },
    secondSection: {
      label: "Capabilities engineered for speed",
      title: "Connect everything. Simplify anything.",
      description:
        "Explore how intelligent integration connects systems, data, and workflows across your organization.",
    },
    useCases: [
      {
        id: "unify-tech-stack",
        title: "Unify a fragmented tech stack",
        description:
          "Bring ERPs, CRMs, custom software, and third-party tools onto one set of digital rails, without ripping out what already works.",
        features: [
          "Decouple legacy on-prem systems and connect them to cloud-native platforms",
          "Integrate ERPs, CRMs, and custom applications through secure, documented APIs",
          "Standardize how data moves across your entire stack",
        ],
        image: "/solutions-contents/28.png",
      },
      {
        id: "automate-operations",
        title: "Automate the handoffs that slow teams down",
        description:
          "Replace manual exports, re-entry, and email chains with orchestrated workflows that move data the moment it changes.",
        features: [
          "Automate data movement between core business systems",
          "Trigger downstream workflows the moment source data changes",
          "Cut manual processing time across finance, operations, and support",
        ],
        image: "/solutions-contents/29.png",
      },
      {
        id: "single-source-of-truth",
        title: "Build a single source of truth",
        description:
          "Raw records become modeled facts every team reads the same way, with the same definitions — so nobody reconciles three versions of one report.",
        features: [
          "Centralize disconnected sources into one governed data layer",
          "Keep downstream reports, dashboards, and apps in sync automatically",
          "Eliminate the data errors that come from manual duplication",
        ],
        image: "/solutions-contents/30.png",
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
          "Architecture designed to keep holding as you add new tools, new data sources, and new business requirements.",
        image: "https://picsum.photos/seed/integration-scale/1200/900",
      },
    ],

    points: [
      {
        title: "API-first architecture",
        description:
          "Every integration is built on documented, reusable APIs, so your stack stays flexible as it evolves.",
      },
      {
        title: "Legacy-friendly",
        description:
          "We migrate operational workflows off legacy platforms without forcing a costly full rebuild.",
      },
      {
        title: "Governed by default",
        description:
          "Authentication, access control, audit lineage, and telemetry are built into every integration from day one.",
      },
      {
        title: "Production cutover, not a pilot",
        description:
          "Our engineers work directly with your team through go-live, with CI/CD DataOps in place before handover.",
      },
    ],
  },

  "education": {
    image: "/solutions-contents/23.png",
    useCaseSectionHeaders: {
      label: "Where we go deep",
      title: "Personalize learning. Empower educators.",
      description:
        "Explore how connected data helps institutions improve outcomes and cut administrative drag.",
    },
    slug: "education",
    secondSection: {
      label: "Capabilities engineered for speed",
      title: "Connect institutional data. Automate the paperwork.",
      description:
        "Explore how Techneeq turns fragmented campus systems into intelligence leadership can act on.",
    },
    hero: {
      label: "Education",
      title: "Institutional data that answers questions during the term, not after it",
      description:
        "From student-facing portals to the systems your staff rely on daily, Techneeq connects LMS, SIS, and departmental data into one live view — and automates the manual work sitting between them.",
      buttonText: "Schedule Architecture Review",
      buttonHref: "/contact",
      imageSrc: "/solutions-contents/22.png",
    },

    useCases: [
      {
        id: "student-experience",
        title: "Build a better student experience",
        description:
          "Give students a faster, simpler way to get information, register, and stay engaged, without waiting on an overloaded front office.",
        features: [
          "Design self-service portals for records, registration, and support",
          "Answer common student questions instantly with grounded AI assistants",
          "Personalize learning resources and communications at scale",
        ],
        image: "/solutions-contents/24.png",
      },
      {
        id: "institutional-automation",
        title: "Automate the paperwork behind the scenes",
        description:
          "Reduce the manual admissions, enrollment, and records work that pulls staff away from students.",
        features: [
          "Automate repetitive enrollment and admissions workflows",
          "Extract and classify data from forms, applications, and records",
          "Cut manual data entry across every department",
        ],
        image: "/solutions-contents/25.png",
      },
      {
        id: "institutional-data",
        title: "Turn institutional data into decisions",
        description:
          "Connect LMS platforms, student information systems, and departmental data so retention signals surface while you can still act on them.",
        features: [
          "Bring LMS, SIS, and departmental data into one governed view",
          "Track engagement, performance, and retention trends continuously",
          "Support leadership decisions with reliable, always-current reporting",
        ],
        image: "/solutions-contents/26.png",
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
          "Take repetitive administrative work off staff plates with orchestrated workflows that run quietly in the background.",
        image: "https://picsum.photos/seed/education-automate2/1200/900",
      },
      {
        id: "03",
        title: "Understand",
        description:
          "Turn scattered institutional data into embedded dashboards and scorecards your leadership team will actually use.",
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
          "Student data is handled with the privacy, access control, and audit standards institutions require.",
      },
      {
        title: "Works with what you have",
        description:
          "We integrate the LMS, SIS, and platforms you already run instead of replacing them outright.",
      },
      {
        title: "Hands-on partnership",
        description:
          "Our engineers work directly with your team, from architecture audit through launch and beyond.",
      },
    ],
  },

  "financial-services": {
    slug: "financial-services",
    image: "/solutions-contents/8.png",
    useCaseSectionHeaders: {
      label: "Where we go deep",
      title: "Accelerate decisions. Transform finance.",
      description:
        "Explore how live risk, capital, and performance data changes what your teams do next.",
    },
    hero: {
      label: "Financial Services",
      title: "Risk, capital, and performance data in one live view",
      description:
        "Techneeq replaces static monthly reporting with streaming pipelines and production models — so risk and performance signals reach the person making the call, with auditable lineage from source system to board report.",
      buttonText: "Schedule Architecture Review",
      buttonHref: "/contact",
      imageSrc: "/solutions-contents/7.png",
    },
    secondSection: {
      label: "Capabilities engineered for speed",
      title: "Accelerate decisions. Automate financial intelligence.",
      description:
        "Explore how enterprise AI transforms financial operations, analysis, and client experiences.",
    },
    useCases: [
      {
        id: "client-experience",
        title: "Deliver a faster, more personal client experience",
        description:
          "Give client-facing teams instant access to trusted, current information instead of yesterday's extract.",
        features: [
          "Build self-service portals for accounts, statements, and requests",
          "Give relationship teams instant access to governed client data",
          "Automate routine client communications and updates",
        ],
        image:
          "/solutions-contents/9.png",
      },
      {
        id: "financial-ops-automation",
        title: "Automate financial operations",
        description:
          "Remove the manual work behind reconciliations, reporting, and document processing so teams can focus on judgment calls.",
        features: [
          "Automate repetitive reconciliation and reporting workflows",
          "Extract and classify data from statements, invoices, and forms",
          "Cut manual processing time across back-office operations",
        ],
        image: "/solutions-contents/10.png",
      },
      {
        id: "secure-integration",
        title: "Connect financial systems securely",
        description:
          "Bring core banking, payment, and reporting systems onto unified digital rails without compromising security or compliance.",
        features: [
          "Integrate core banking, payment, and reporting platforms",
          "Maintain auditable lineage across every connected system",
          "Keep sensitive financial data protected end-to-end",
        ],
        image:
          "/solutions-contents/11.png",
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
        title: "SOC 2 compliance guardrails",
        description:
          "Governance and regulatory requirements are architected in, not bolted on before an audit.",
      },
      {
        title: "Built to scale",
        description:
          "Architecture designed to hold as transaction volumes grow and reporting requirements change.",
      },
      {
        title: "Proven in weeks, not quarters",
        description:
          "Scoping in week one, working pipelines in front of your analysts in the next — then a clean production handover.",
      },
    ],
  },
};
