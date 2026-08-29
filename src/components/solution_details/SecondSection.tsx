import { useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Section from "../global/section/Section";
import { SITE_NAME } from "@/config";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useDarkSection } from "@/hooks/useDarkSection";
interface UseCase {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const useCases: UseCase[] = [
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
];
const capabilities = [
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
];
export default function SecondSection() {
  const [activeId, setActiveId] = useState(useCases[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useDarkSection(parentRef);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      capabilities.length - 1,
      Math.floor(progress * capabilities.length)
    );

    setActiveIndex(index);
  });

  const activeCapability = capabilities[activeIndex];
  const activeUseCase =
    useCases.find((item) => item.id === activeId) ?? useCases[0];

  return (
    <div ref={parentRef}>
      {/* =====================================================
          FIRST SECTION
          Will be added later
      ====================================================== */}
      <Section
        ref={containerRef}
        containerClassName="max-w-none"
      >
        {/* =========================
            DESKTOP
        ========================= */}
        <div className="hidden md:block">
          {/* HEADER */}
          <div className="py-5">
            <Section.Header
              label="AI capabilities"
              title="Transform patient care. Turbocharge research."
              description="Explore how North powers use cases across healthcare and life sciences."
              titleclassName="max-w-3xl"
              wantStrip={false}
            />
          </div>

          {/* SCROLL AREA */}
          <div
            ref={sectionRef}
            className="relative h-[300vh]"
          >
            <div className="sticky top-0 flex min-h-screen flex-col justify-center pb-20">
              {/* =========================
                  CAPABILITY NAV
              ========================= */}
              <div className="relative border-y border-foreground/15">
                <div className="grid grid-cols-3">
                  {capabilities.map((capability, index) => (
                    <div
                      key={capability.id}
                      className="relative"
                    >
                      <div
                        className={`
                          flex h-20 items-center gap-4
                          transition-colors duration-300
                          ${
                            index === 0
                              ? "justify-start"
                              : index === capabilities.length - 1
                                ? "justify-end"
                                : "justify-center"
                          }
                          ${
                            activeIndex === index
                              ? "text-foreground"
                              : "text-foreground/40"
                          }
                        `}
                      >
                        <span className="text-xs">
                          {capability.id}
                        </span>

                        <span className="text-sm lg:text-base">
                          {capability.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BASE LINE */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-foreground/15" />

                {/* PROGRESS */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-cyan-400"
                  animate={{
                    width: `${(activeIndex / (capabilities.length - 1)) * 100}%`,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* DOT */}
                <motion.div
                  className="
                    absolute
                    -bottom-1
                    z-10
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                  "
                  animate={{
                    // Calculates position based on the highest possible index
                    left: `${(activeIndex / (capabilities.length - 1)) * 100}%`,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {/* =========================
                  ACTIVE CONTENT
              ========================= */}
              <div className="grid min-h-[55vh] grid-cols-2 gap-16 pt-8 lg:gap-24">
                {/* =========================
                    IMAGE
                ========================= */}
                <div className="relative overflow-hidden rounded-2xl bg-secondary-background">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCapability.id}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{
                        opacity: 0,
                        scale: 1.06,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <img
                        src={activeCapability.image}
                        alt={activeCapability.title}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* =========================
                    TEXT
                ========================= */}
                <div className="flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCapability.id}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="mb-8 block text-xs tracking-[0.2em] text-foreground/35">
                        {activeCapability.id}
                      </span>

                      <h3
                        className="
                          max-w-xl
                          font-display
                          text-4xl
                          font-normal
                          leading-[0.95]
                          tracking-[-0.045em]
                          md:text-5xl
                          lg:text-6xl
                        "
                      >
                        {activeCapability.title}
                      </h3>

                      <div className="mt-8 flex max-w-lg gap-4">
                        <span className="mt-2 h-px w-10 shrink-0 bg-foreground/20" />

                        <p className="text-sm leading-7 text-muted-foreground md:text-base">
                          {activeCapability.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            MOBILE
        ========================= */}
        <div className="block md:hidden">
          <Section.Header
            label="AI capabilities"
            title="Transform patient care. Turbocharge research."
            description="Explore how North powers use cases across healthcare and life sciences."
            wantStrip={false}
          />

          <Section.Body className="mt-12">
            <div className="space-y-8">
              {capabilities.map((capability) => (
                <article
                  key={capability.id}
                  className="overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="aspect-square overflow-hidden rounded-2xl bg-secondary-background">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="py-6">
                    <span className="mb-5 block text-xs tracking-[0.2em] text-foreground/35">
                      {capability.id}
                    </span>

                    <h3 className="font-display text-3xl font-normal leading-[0.95] tracking-[-0.04em]">
                      {capability.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Section.Body>
        </div>
      </Section>

      {/* =====================================================
          SECOND SECTION
      ====================================================== */}
      <Section>
        <Section.Body>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* =================================================
                LEFT IMAGE
            ================================================== */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                key={activeUseCase.id}
                src={activeUseCase.image}
                alt={activeUseCase.title}
                className="
                  aspect-[5/4]
                  w-full
                  object-cover
                  transition-opacity
                  duration-500
                "
              />
            </div>

            {/* =================================================
                RIGHT ACCORDION
            ================================================== */}
            <div className="flex flex-col">
              {useCases.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <div
                    key={item.id}
                    className="
                      border-t
                      border-foreground/30
                    "
                  >
                    {/* Accordion Header */}
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        py-5
                        text-left
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-medium
                          tracking-tight
                          md:text-base
                        "
                      >
                        {item.title}
                      </span>
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`
                        grid
                        transition-[grid-template-rows,opacity]
                        duration-500
                        ease-out
                        ${isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-6">
                          <p
                            className="
                              max-w-lg
                              text-xs
                              leading-6
                              text-muted-foreground
                              md:text-sm
                            "
                          >
                            {item.description}
                          </p>

                          <ul className="mt-5 space-y-2.5">
                            {item.features.map((feature) => (
                              <li
                                key={feature}
                                className="
                                  flex
                                  items-start
                                  gap-2
                                  text-xs
                                  leading-5
                                  text-foreground/80
                                "
                              >
                                <CheckCircle2
                                  className="
                                    mt-0.5
                                    size-3.5
                                    shrink-0
                                  "
                                />

                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Bottom border */}
              <div className="border-t border-foreground/30" />

              {/* CTA */}
              <div className="pt-6">
                <button
                  type="button"
                  className="
                    rounded-full
                    border
                    border-foreground
                    px-5
                    py-2.5
                    text-xs
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-foreground
                    hover:text-background
                  "
                >
                  Go {SITE_NAME}
                </button>
              </div>
            </div>
          </div>
        </Section.Body>
      </Section>
    </div>
  );
}