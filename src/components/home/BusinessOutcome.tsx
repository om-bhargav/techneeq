"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "../global/section/Section";

const stages = [
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

export default function BusinessOutcome() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
<Section
  ref={sectionRef}
  className="relative h-[400vh] p-0"
  containerClassName="h-full max-w-none"
>
  <div className="sticky top-0 h-screen overflow-hidden">
    <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-6 md:px-10 lg:px-14">

      <Section.Header
        label="Business outcome"
        title="Data isn't valuable until"
        highlight="it changes what you do."
        description="Every engagement is scoped around a decision your business needs to make faster. The architecture follows from there."
        className="mb-0 shrink-0 pt-10 md:pt-16"
      />
         

          {/* Timeline */}
          <div className="relative mt-20 md:mt-32">
            {/* Desktop progress line */}
            <div
              className="
      absolute
      left-0
      right-0
      top-1/2
      hidden
      h-1
      -translate-y-1/2
      bg-foreground/10
      md:block
    "
            >
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="
        absolute
        inset-0
        origin-left
        bg-foreground
      "
              />
            </div>

            {/* Mobile vertical line */}
            <div
              className="
      absolute
      bottom-0
      left-3
      top-0
      w-px
      bg-foreground/10
      md:hidden
    "
            >
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="
        absolute
        inset-0
        origin-top
        bg-foreground
      "
              />
            </div>

            {/* Stages */}
            <div
              className="
      grid
      grid-cols-1
      gap-0
      md:grid-cols-4
    "
            >
              {stages.map((stage, index) => (
                <Stage
                  key={stage.id}
                  stage={stage}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.08],
                [1, 0]
              ),
            }}
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-foreground/30
            "
          >
            Scroll to explore
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function Stage({
  stage,
  index,
  progress,
}: {
  stage: (typeof stages)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / stages.length;
  const revealStart = start + 0.03;
  const revealEnd = start + 0.16;

  /*
   * Content:
   *
   * Before reveal → invisible
   * During reveal → fades in
   * After reveal → stays visible
   */
  const opacity = useTransform(
    progress,
    [start, revealStart, revealEnd, 1],
    [0, 0, 1, 1]
  );

  const y = useTransform(
    progress,
    [start, revealStart, revealEnd, 1],
    [30, 30, 0, 0]
  );

  const scale = useTransform(
    progress,
    [start, revealStart, revealEnd, 1],
    [0.95, 0.95, 1, 1]
  );

  /*
   * Dot:
   *
   * Before its stage → subtle
   * When reached → active
   * After reached → stays active
   */
  const dotScale = useTransform(
    progress,
    [
      Math.max(0, start - 0.02),
      start,
      revealEnd,
      1,
    ],
    [1, 1, 1.6, 1.6]
  );

  const dotOpacity = useTransform(
    progress,
    [
      Math.max(0, start - 0.02),
      start,
      1,
    ],
    [0.35, 1, 1]
  );

  return (
    <div className="relative flex justify-center">
      {/* Content */}
      <motion.div
        style={{
          opacity,
          y,
          scale,
        }}
        className="
          absolute
          left-1/2
          w-[180px]
          -translate-x-1/2
          text-center
        "
      >
        <div className="mt-10">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
            {stage.id}
          </span>

          <h3
            className="
              mt-3
              font-display
              text-3xl
              tracking-[-0.045em]
              md:text-4xl
            "
          >
            {stage.title}
          </h3>

          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            {stage.description}
          </p>
        </div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div
        style={{
          scale: dotScale,
          opacity: dotOpacity,
        }}
        className="
          absolute
          top-1/2
          z-20
          flex
          size-3
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-foreground
        "
      >
        <div className="size-1 rounded-full bg-background" />
      </motion.div>
    </div>
  );
}