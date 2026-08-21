import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
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
  },
  {
    id: "02",
    category: "AI & Intelligence",
    title: "Intelligent Systems Built for Real-World Impact",
    description:
      "From intelligent automation to advanced AI systems, we help organizations turn emerging technology into measurable value.",
    icon: BrainCircuit,
  },
  {
    id: "03",
    category: "Cloud & Infrastructure",
    title: "Modern Infrastructure for a Connected Enterprise",
    description:
      "Build secure, scalable and resilient cloud environments designed to support your next stage of growth.",
    icon: CloudCog,
  },
  {
    id: "04",
    category: "Data & Analytics",
    title: "Turning Complex Data Into Clear Business Intelligence",
    description:
      "We build data platforms and analytics solutions that transform information into actionable business decisions.",
    icon: Database,
  },
  {
    id: "05",
    category: "Digital Transformation",
    title: "Transforming Operations Through Technology",
    description:
      "Modernize legacy systems, streamline workflows and create connected digital ecosystems that evolve with your business.",
    icon: Layers3,
  },
  {
    id: "06",
    category: "Cybersecurity",
    title: "Secure Technology Built for What's Next",
    description:
      "Protect your applications, infrastructure and data with security strategies designed around modern digital environments.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + services.length) % services.length
    );
  };

  return (
    <Section className="overflow-hidden">

      {/* ---------------------------------------------
          HEADER
      --------------------------------------------- */}

      <SectionHeader
        label="Our Services"
        title="Technology that"
        highlight="creates meaningful impact."
        description="We combine strategy, design, engineering, and intelligence to build digital experiences that move businesses forward."        className="mb-6"
      />

      {/* ---------------------------------------------
          SERVICE CONTENT
      --------------------------------------------- */}
      <Section.Body className="overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 mb-5">

          {/* Service navigation */}

          <div className="lg:pt-2 overflow-hidden">

            {/* Desktop navigation */}

            <nav className="hidden lg:block">
              <div className="space-y-1">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveIndex(index)}
                      className={`
                      relative
                      block
                      w-full
                      border-l
                      py-2.5
                      pl-4
                      text-left
                      text-sm
                      transition-all
                      duration-300
                      ${isActive
                          ? "border-foreground text-foreground"
                          : "border-transparent text-muted-foreground hover:border-foreground/20 hover:text-foreground"
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
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                relative
                min-h-[430px]
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

                {/* Background */}

                <div className="pointer-events-none absolute inset-0">

                  <div
                    className="
                    absolute
                    -right-24
                    -top-24
                    h-[360px]
                    w-[360px]
                    rounded-full
                    bg-foreground/[0.035]
                    blur-3xl
                  "
                  />

                  <div
                    className="
                    absolute
                    -bottom-32
                    -right-20
                    h-[400px]
                    w-[400px]
                    rounded-full
                    border
                    border-foreground/[0.05]
                  "
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    opacity-[0.025]
                    [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                    [background-size:36px_36px]
                  "
                  />

                </div>

                {/* Content */}

                <div className="relative z-10 flex min-h-[370px] flex-col">

                  {/* Top */}

                  <div className="flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {activeService.category}
                    </span>

                    <span className="font-mono text-xs text-muted-foreground/50">
                      {activeService.id}
                    </span>
                  </div>

                  {/* Main */}

                  <div className="mt-auto max-w-[650px]">

                    {/* Icon */}

                    <div
                      className="
                      mb-8
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-foreground/10
                      bg-background/60
                    "
                    >
                      <activeService.icon
                        className="size-5"
                        strokeWidth={1.4}
                      />
                    </div>

                    <h3 className="max-w-[650px] font-display text-2xl leading-[0.95] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                      {activeService.title}
                    </h3>

                    <p className="mt-6 max-w-[500px] text-xs md:text-sm leading-6 text-muted-foreground">
                      {activeService.description}
                    </p>

                    <button
                      className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-foreground
                      px-6
                      py-3
                      text-sm
                      text-background
                      transition
                      hover:opacity-85
                    "
                    >
                      Explore service

                      <ArrowUpRight
                        className="
                        size-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                      />
                    </button>

                  </div>
                </div>

              </motion.article>
            </AnimatePresence>

            {/* ---------------------------------------------
              CONTROLS
          --------------------------------------------- */}

            <div className="mt-8 flex items-center gap-5">

              {/* Progress */}

              <div className="relative h-px flex-1 bg-foreground/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-foreground"
                  animate={{
                    width: `${((activeIndex + 1) / services.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {/* Counter */}

              <span className="hidden font-mono text-[10px] text-muted-foreground sm:block">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>

              {/* Previous */}

              <button
                onClick={goPrevious}
                aria-label="Previous service"
                className="
                flex
                size-11
                items-center
                justify-center
                rounded-full
                border
                border-foreground/10
                bg-background
                transition
                hover:border-foreground/30
                hover:bg-muted
              "
              >
                <ArrowLeft className="size-4" />
              </button>

              {/* Next */}

              <button
                onClick={goNext}
                aria-label="Next service"
                className="
                flex
                size-11
                items-center
                justify-center
                rounded-full
                border
                border-foreground/10
                bg-background
                transition
                hover:border-foreground/30
                hover:bg-muted
              "
              >
                <ArrowRight className="size-4" />
              </button>

            </div>

          </div>
        </div>
      </Section.Body>
    </Section>
  );
}