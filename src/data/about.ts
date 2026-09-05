export const aboutPage = {
  ourStory: {
    label: "About Techneeq",
    title: "Data Science, Engineered",
    highlight: "For Momentum",
    description:
      "Techneeq is an enterprise data engineering, AI, and custom software firm helping organizations across the United States, the UK, and the European Union move from passive reporting to active intelligence.",

    image: {
      src: "/about/1.png",
      alt: "Techneeq team",
    },

    paragraphs: [
      "Techneeq was founded on a blunt observation: 90% of enterprise dashboards are digital paperweights. Most organizations already have the data they need to move faster — what they are missing is the engineering that turns fragmented pipelines into decisions someone can act on the same day.",

      "We set out to close that gap by bringing streaming data infrastructure, production machine learning, and custom software development together under one team. Instead of treating technology as a collection of isolated tools, we approach every engagement as an architecture problem — mapping the silos first, defining latency targets, then building pipelines and models engineered to hold under real production load.",

      "That principle still sits at the center of how we work. We partner closely with organizations across financial services, healthcare, insurance, manufacturing, retail, and the public sector to replace static monthly BI with live decision engines — from Lakehouses and automated ETL/ELT pipelines to domain-fine-tuned LLMs and bespoke enterprise applications built around the way their teams actually operate.",
    ],
  },

  team: {
    label: "Our Team",
    title: "The people behind",
    highlight: "the architecture.",
    description:
      "A multidisciplinary team of data engineers, scientists, and architects building the intelligence systems ambitious organizations run on.",

    members: [
      {
        name: "Alex Morgan",
        role: "Founder & Managing Partner",
        image: "https://picsum.photos/id/64/800/800",
      },
      {
        name: "Jordan Carter",
        role: "Co Founder",
        image: "https://picsum.photos/id/91/800/800",
      },
      {
        name: "Ethan Williams",
        role: "Director",
        image: "https://picsum.photos/id/447/800/800",
      },
      {
        name: "Noah Anderson",
        role: "Vice President",
        image: "https://picsum.photos/id/823/800/800",
      },
    ],
  },
  howWeWork: {
    label: "How we deploy",
    title: "An engagement playbook built for",
    highlight: "speed, clarity, and production cutover.",
    description:
      "A disciplined delivery process that moves from architecture audit to live pipelines in weeks — with governance and telemetry in place before go-live.",

    process: [
      {
        id: "01",
        title: "Audit",
        description:
          "Weeks 1-2. We map existing silos, define latency targets, and eliminate architectural bottlenecks before anything gets built.",
      },
      {
        id: "02",
        title: "Prove",
        description:
          "Weeks 3-6. A PoC and streaming pipeline sprint: real-time transformation logic, validated against live data streams.",
      },
      {
        id: "03",
        title: "Cutover",
        description:
          "Week 7+. Full production deployment with CI/CD DataOps, SOC 2 compliance guardrails, and telemetry from day one.",
      },
      {
        id: "04",
        title: "Operate",
        description:
          "We stay on for monitoring, tuning, and iteration after go-live — the handover should be the least painful part of the project.",
      },
    ],
  },
  values: {
    label: "Our Values",
    title: "The principles behind every enterprise engagement we deliver",

    items: [
      {
        id: "01",
        title: "Outcomes over hype",
        description:
          "We say no to AI projects that will not move a business metric.",
        image: "/about/2.png",
      },
      {
        id: "02",
        title: "Transparency",
        description: "Clear scope, defined timelines, no surprise change orders.",
        image: "/about/3.png",
      },
      {
        id: "03",
        title: "Production-grade craft",
        description:
          "Pipelines and models built with telemetry and governance, not demo code.",
        image: "/about/4.png",
      },
      {
        id: "04",
        title: "Long-term thinking",
        description:
          "We build architecture engineered to be maintained and extended, not just launched.",
        image: "/about/5.png",
      },
    ],
  },
};
