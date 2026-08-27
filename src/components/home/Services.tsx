import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Section from "@/components/global/section/Section";
import SectionHeader from "../global/section/SectionHeader";


const services = [
  {
    id: "01",
    category: "Digital Engineering",
    title: "Engineering Digital Experiences That Move Businesses Forward",
    description:
      "We design and engineer scalable digital products that combine thoughtful experiences with robust technology.",
    icon: Code2,
    image: "/services/1.png"
  },
  {
    id: "02",
    category: "AI & Intelligence",
    title: "Intelligent Systems Built for Real-World Impact",
    description:
      "From intelligent automation to advanced AI systems, we help organizations turn emerging technology into measurable value.",
    icon: BrainCircuit,
    image: "/services/2.png"
  },
  {
    id: "03",
    category: "Cloud & Infrastructure",
    title: "Modern Infrastructure for a Connected Enterprise",
    description:
      "Build secure, scalable and resilient cloud environments designed to support your next stage of growth.",
    icon: CloudCog,
    image: "/services/3.png"
  },
  {
    id: "04",
    category: "Data & Analytics",
    title: "Turning Complex Data Into Clear Business Intelligence",
    description:
      "We build data platforms and analytics solutions that transform information into actionable business decisions.",
    icon: Database,
    image: "/services/4.png"
  },
  {
    id: "05",
    category: "Digital Transformation",
    title: "Transforming Operations Through Technology",
    description:
      "Modernize legacy systems, streamline workflows and create connected digital ecosystems that evolve with your business.",
    icon: Layers3,
    image: "/services/5.png"
  },
  {
    id: "06",
    category: "Cybersecurity",
    title: "Secure Technology Built for What's Next",
    description:
      "Protect your applications, infrastructure and data with security strategies designed around modern digital environments.",
    icon: ShieldCheck,
    image: "/services/6.png"
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Section className="overflow-hidden">

      {/* ---------------------------------------------
          HEADER
      --------------------------------------------- */}

      <SectionHeader
        label="Our Services"
        title="Technology that"
        highlight="creates meaningful impact."
        description="We combine strategy, design, engineering, and intelligence to build digital experiences that move businesses forward." className="mb-6"
      />

      {/* ---------------------------------------------
          SERVICE CONTENT
      --------------------------------------------- */}
      <Section.Body className="overflow-hidden">
        <div className="grid gap-12 lg:gap-16 mb-5">

          {/* Service navigation */}

          <div className="lg:pt-2 overflow-hidden">
            <nav className="hidden lg:block">
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveIndex(index)}
                      className={`
              shrink-0
              rounded-full
              border
              px-4
              py-2
              text-[11px]
              uppercase
              tracking-[0.12em]
              transition-all
              duration-300
              ${isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/10 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                        }
            `}
                    >
                      {service.category}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* ---------------------------------------------
            CURRENT SERVICE ONLY
        --------------------------------------------- */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeService.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="
        relative
        min-h-100
        overflow-hidden
        rounded-[24px]
        border
        border-foreground/[0.08]
        bg-muted/30
        p-7
        sm:p-9
        lg:p-10
      "
              >
                {/* 
        Changed to `md:items-center` (or you can use md:items-start) 
        so the fixed 400px height isn't overridden by flex-stretch 
      */}
                <div className="relative z-10 flex min-h-100 flex-col md:flex-row md:items-center md:justify-between gap-8">

                  {/* Left Column (Text & Button) */}
                  <div className="flex flex-1 flex-col h-full justify-center">
                    {/* Top */}
                    <div className="flex items-start justify-between md:justify-start md:gap-8 mb-auto">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {activeService.category}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground/50">
                        {activeService.id}
                      </span>
                    </div>

                    {/* Main */}
                    <div className="mt-8 max-w-[500px]">
                      {/* Icon */}
                      <div className="mb-8 flex size-11 items-center justify-center rounded-xl border border-foreground/10 bg-background/60">
                        <activeService.icon className="size-5" strokeWidth={1.4} />
                      </div>

                      {/* Mobile Image */}
                      <div className="mb-8 relative rounded-xl shadow-md w-full lg:hidden overflow-hidden md:max-w-[320px] lg:max-w-[400px]">
                        <img
                          src={activeService.image}
                          alt={activeService.title}
                          className="aspect-video w-full object-cover"
                        />
                      </div>

                      <h3 className="font-display text-2xl leading-[0.95] tracking-[-0.045em] sm:text-4xl">
                        {activeService.title}
                      </h3>

                      <p className="mt-6 text-xs md:text-sm leading-6 text-muted-foreground">
                        {activeService.description}
                      </p>

                      <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-85">
                        Explore service
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (The Image) */}
                  {/* 
                      Applied exact dimensions: w-[600px] h-[400px].
                      Added `shrink-0` so the text column doesn't squish the image width.
                    */}
                  <div className="relative hidden lg:block rounded-xl shadow-md overflow-hidden w-[600px] h-[400px] shrink-0">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Section.Body>
    </Section>
  );
}