"use client";

import { useRef, useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import Section from "../global/section/Section";
import { useDarkSection } from "@/hooks/useDarkSection";
import { aboutPage } from "@/data/about";

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { values } = aboutPage;
  const { items } = values;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useDarkSection(containerRef);

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (progress) => {
      const index = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );

      setActiveIndex(index);
    }
  );

  const activeValue = items[activeIndex];

  return (
    <Section
      ref={containerRef}
      containerClassName="max-w-none"
    >
      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div className="hidden md:block">

        {/* HEADER */}
        <div className="py-5">
          <Section.Header
            label={values.label}
            title={values.title}
            titleclassName="max-w-3xl"
          />
        </div>

        {/* SCROLL AREA */}
        <div
          ref={sectionRef}
          className="relative h-[400vh]"
        >
          <div className="sticky top-0 flex min-h-screen flex-col justify-center pb-20">

            {/* VALUE NAV */}
            <div className="relative border-y border-foreground/15">

              <div
                className={`grid grid-cols-${items.length}`}
              >
                {items.map((value, index) => (
                  <div
                    key={value.id}
                    className="relative"
                  >
                    <div
                      className={`
                        flex h-20 items-center gap-4
                        transition-colors duration-300
                        ${
                          activeIndex === index
                            ? "text-foreground"
                            : "text-foreground/40"
                        }
                      `}
                    >
                      <span className="text-xs">
                        {value.id}
                      </span>

                      <span className="text-sm lg:text-base">
                        {value.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Base line */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-foreground/15" />

              {/* Progress */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-cyan-400"
                animate={{
                  width:
                    activeIndex === 0
                      ? "0%"
                      : activeIndex === items.length - 1
                        ? "100%"
                        : `calc(${
                            (activeIndex / items.length) * 100
                          }% + 2.5rem)`,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Dot */}
              <motion.div
                className="absolute -bottom-1 z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400"
                animate={{
                  left:
                    activeIndex === 0
                      ? "0%"
                      : activeIndex === items.length - 1
                        ? "100%"
                        : `calc(${
                            (activeIndex / items.length) * 100
                          }% + 2.5rem)`,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* ACTIVE CONTENT */}
            <div className="grid min-h-[55vh] grid-cols-2 gap-16 pt-8 lg:gap-24">

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-2xl bg-secondary-background">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeValue.id}
                    src={activeValue.image}
                    alt={activeValue.title}
                    className="absolute inset-0 h-full w-full object-cover"
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
                  />
                </AnimatePresence>
              </div>

              {/* TEXT */}
              <div className="flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeValue.id}
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
                      {activeValue.id}
                    </span>

                    <h3 className="max-w-xl font-display text-4xl font-normal leading-[0.95] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                      {activeValue.title}
                    </h3>

                    <div className="mt-8 flex max-w-lg gap-4">
                      <span className="mt-2 h-px w-10 shrink-0 bg-foreground/20" />

                      <p className="text-sm leading-7 text-muted-foreground md:text-base">
                        {activeValue.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="block md:hidden">

        <Section.Header
          label={values.label}
          title={values.title}
        />

        <Section.Body className="mt-12">
          <div className="space-y-8">

            {items.map((value) => (
              <article
                key={value.id}
                className="overflow-hidden"
              >
                {/* IMAGE */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="mb-5 block text-xs tracking-[0.2em] text-foreground/35">
                    {value.id}
                  </span>

                  <h3 className="font-display text-3xl font-normal leading-[0.95] tracking-[-0.04em]">
                    {value.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </Section.Body>
      </div>
    </Section>
  );
}