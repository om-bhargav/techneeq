"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "../global/section/Section";
import { stages } from "@/data/home";

export default function BusinessOutcome() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start 70%", "end 30%"],
  });

  return (
    <Section
      ref={sectionRef}
      className="relative bg-background md:h-[400vh]"
      containerClassName="h-full max-w-none"
    >
      {/* 
        FIX 1: Removed md:h-screen and md:overflow-hidden 
        Added md:pb-24 so it has breathing room at the bottom while sticking 
      */}
      <div className="md:sticky md:top-16 md:flex md:items-start md:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          <Section.Header
            label="Business outcome"
            title="Data isn't valuable until"
            highlight="it changes what you do."
            description="Every engagement starts with one question: what decision are you trying to make faster? The technology follows from there."
          />

          {/* Mobile Timeline */}
          <div ref={mobileTimelineRef} className="relative md:hidden">
            {/* Background bar */}
            <div className="absolute bottom-0 left-2 top-0 w-px bg-foreground/10" />

            {/* Progress bar */}
            <motion.div
              style={{ scaleY: mobileProgress }}
              className="absolute left-2 top-0 z-10 h-full w-px origin-top bg-foreground"
            />

            {/* Stages */}
            <div>
              {stages.map((stage, index) => {
                const start = index / stages.length;

                const dotScale = useTransform(
                  mobileProgress,
                  [
                    Math.max(0, start - 0.05),
                    start,
                    Math.min(1, start + 0.08),
                  ],
                  [1, 1, 1.5]
                );

                const dotOpacity = useTransform(
                  mobileProgress,
                  [Math.max(0, start - 0.05), start],
                  [0.35, 1]
                );

                return (
                  <div key={stage.id} className="relative min-h-[180px] py-8 pl-10">
                    {/* Dot */}
                    <motion.div
                      style={{
                        scale: dotScale,
                        opacity: dotOpacity,
                      }}
                      className="absolute left-2 top-10 z-20 flex size-3 -translate-x-1/2 items-center justify-center rounded-full bg-foreground"
                    >
                      <div className="size-1 rounded-full bg-background" />
                    </motion.div>

                    {/* Content */}
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                        {stage.id}
                      </span>
                      <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.045em]">
                        {stage.title}
                      </h3>
                      <p className="mt-3 max-w-[280px] text-xs leading-5 text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="relative mt-20 hidden md:block md:mt-32">
            
            {/* Progress line (Pinned to the top instead of top-1/2) */}
            <div className="absolute left-0 right-0 top-3 h-1 -translate-y-1/2 bg-foreground/10">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute inset-0 origin-left bg-foreground"
              />
            </div>

            {/* Stages */}
            <div className="grid grid-cols-4">
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

  const dotScale = useTransform(
    progress,
    [Math.max(0, start - 0.02), start, revealEnd, 1],
    [1, 1, 1.6, 1.6]
  );

  const dotOpacity = useTransform(
    progress,
    [Math.max(0, start - 0.02), start, 1],
    [0.35, 1, 1]
  );

  return (
    <div className="relative flex flex-col items-center">
      {/* 
        FIX 2: Content is no longer 'absolute', meaning the text height pushes the container open normally. 
      */}
      <motion.div
        style={{
          opacity,
          y,
          scale,
        }}
        className="mt-12 w-[180px] text-center"
      >
        <div>
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
            {stage.id}
          </span>
          <h3 className="mt-3 font-display text-3xl tracking-[-0.045em] md:text-4xl">
            {stage.title}
          </h3>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            {stage.description}
          </p>
        </div>
      </motion.div>

      {/* Timeline dot (Pinned to match the line at top-3) */}
      <motion.div
        style={{
          scale: dotScale,
          opacity: dotOpacity,
        }}
        className="absolute top-3 z-20 flex size-3 -translate-y-1/2 items-center justify-center rounded-full bg-foreground"
      >
        <div className="size-1 rounded-full bg-background" />
      </motion.div>
    </div>
  );
}