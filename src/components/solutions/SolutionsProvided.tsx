"use client";

import { useRef, useState } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { solutions } from "@/data/solutions";
import {
  type LucideIcon,
} from "lucide-react";

import Section from "../global/section/Section";
 

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate strict phases for "Slide" and "Hold"
  // total phases = (N holds) + (N-1 slides). This guarantees identical pacing.
  const totalItems = solutions.length;
  const stepSize = 1 / (totalItems * 2 - 1);

  // Generate the stepped keyframes for the text column to scroll up
  // Generate the stepped keyframes for the text column to scroll up
  const textInputs: number[] = [];
  const textOutputs: string[] = [];

  for (let i = 0; i < totalItems; i++) {
    // Hold phase (freeze)
    textInputs.push(i * 2 * stepSize);

    // FIX: Using vh instead of % so it moves exactly 1 screen height at a time
    textOutputs.push(`-${i * 100}vh`);

    textInputs.push((i * 2 + 1) * stepSize);

    // FIX: Using vh instead of % 
    textOutputs.push(`-${i * 100}vh`);
  }

  // Transform the scroll progress into a stepped Y-axis translation
  const textY = useTransform(scrollYProgress, textInputs, textOutputs);

  // Keep active index updated for mobile or smaller styling needs
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest / (2 * stepSize));
    setActiveIndex(Math.min(totalItems - 1, Math.max(0, index)));
  });
  return (
    <Section className="md:px-0!" containerClassName="max-w-full!">
      <div className="mx-auto max-w-7xl">
        <Section.Header
          label="Solutions"
          title="Technology that"
          highlight="moves the business forward."
          description="From digital experiences to intelligent infrastructure, we design and engineer technology around the outcomes that matter."
          className="max-w-4xl"
        />
      </div>
      <Section.Body>
        <div
          ref={sectionRef}
          className="relative hidden h-[600vh] w-full lg:block"
        >
          {/* Sticky container covering strictly exactly h-screen */}
          <div className="sticky top-0 flex h-screen w-full overflow-hidden">

            {/* LEFT — FULL BLEED IMAGES */}
            <div className="relative top-18 h-full w-1/2 overflow-hidden">
              {solutions.map((solution, index) => (
                <SolutionSlideImage
                  key={solution.id}
                  index={index}
                  total={totalItems}
                  scrollYProgress={scrollYProgress}
                  image={solutions[index].image}
                />
              ))}
            </div>

            {/* RIGHT — SCROLLING TEXT RAIL */}
            {/* We apply overflow-hidden so it acts as a precise window. */}
            <div className="relative h-full w-1/2 overflow-hidden">

              {/* This entire column slides upward seamlessly synced with the images */}
              <motion.div
                style={{ y: textY }}
                className="flex w-full flex-col"
              >
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div key={solution.id} className="flex h-screen flex-col justify-center px-10">
                      <SolutionContent
                        solution={solution}
                        Icon={Icon}
                        index={index}
                      />
                    </div>
                  );
                })}
              </motion.div>

            </div>

          </div>
        </div>
        {/* =========================================================
            MOBILE — NORMAL STACK (UNCHANGED)
        ========================================================== */}
        <div className="mt-16 space-y-5 lg:hidden">
          {solutions.map((solution, index) => {

            return (
              <motion.article
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden border border-foreground/10 bg-secondary-background"
              >
                <img
                  src={solutions[index].image}
                  alt=""
                  className="h-full w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-foreground/35">
                      {solution.id}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/30">
                      Solution
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-3xl leading-[0.95] tracking-[-0.04em]">
                    {solution.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section.Body>
    </Section>
  );
}


/* ================================================================
   SLIDE UP IMAGE (Scroll Synced)
================================================================ */

function SolutionSlideImage({
  index,
  total,
  scrollYProgress,
  image,
}: {
  index: number;
  total: number;
  scrollYProgress: any;
  image: string;
}) {
  const stepSize = 1 / (total * 2 - 1);

  // Calculate precisely when THIS specific image should begin sliding up
  const slideStart = (index * 2 - 1) * stepSize;
  const slideEnd = index * 2 * stepSize;

  // Map the continuous scroll value to this specific image's journey
  const y = useTransform(
    scrollYProgress,
    [0, slideStart, slideEnd, 1],
    ["100%", "100%", "0%", "0%"]
  );

  return (
    <motion.article
      style={{
        // Index 0 is always locked at the top. The rest use the calculated scroll map.
        y: index === 0 ? "0%" : y,
        zIndex: index,
      }}
      className="absolute inset-0 overflow-hidden"
    >
      <img
        src={image}
        alt=""
        className="h-full w-full rounded-none! object-cover"
      />
    </motion.article>
  );
}


/* ================================================================
   RIGHT CONTENT (Static Layout - Parent wrapper handles the scrolling)
================================================================ */

function SolutionContent({
  solution,
  Icon,
}: {
  solution: (typeof solutions)[number];
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <div className="flex flex-col">
      {/* Number / icon */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.16em] text-foreground/35">
          {solution.id}
        </span>

        <div className="flex size-9 items-center justify-center rounded-full border border-foreground/10">
          <Icon
            className="size-3.5"
            strokeWidth={1.4}
          />
        </div>
      </div>

      <Section.Header
        title={solution.title}
        description={solution.description}
        wantStrip={false}
      />
      {/* Capability list */}
      <div className="mt-12 max-w-lg">
        <div className="mb-4 font-mono text-[8px] uppercase tracking-[0.18em] text-foreground/30">
          What we deliver
        </div>

        <div className="border-t border-foreground/10">
          {getCapabilities(solution.id).map((item, itemIndex) => (
            <div
              key={item}
              className="flex items-center justify-between py-3"
            >
              <span className="text-xs text-foreground/75">
                {item}
              </span>

              <span className="font-mono text-[8px] text-foreground/25">
                {String(itemIndex + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/* ================================================================
   CAPABILITIES
================================================================ */

function getCapabilities(id: string) {
  const capabilities: Record<string, string[]> = {
    "01": [
      "Web experiences",
      "Interactive interfaces",
      "Digital products",
      "Motion & interaction",
    ],
    "02": [
      "AI product development",
      "LLM integrations",
      "Intelligent workflows",
      "Decision systems",
    ],
    "03": [
      "Software architecture",
      "Cloud applications",
      "API engineering",
      "Scalable infrastructure",
    ],
    "04": [
      "Data platforms",
      "Business intelligence",
      "Data visualization",
      "Predictive analytics",
    ],
    "05": [
      "Legacy modernization",
      "Process automation",
      "Digital ecosystems",
      "Systems integration",
    ],
    "06": [
      "Infrastructure security",
      "Cloud security",
      "System reliability",
      "Performance engineering",
    ],
  };

  return capabilities[id] ?? [];
}