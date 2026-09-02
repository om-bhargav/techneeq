"use client";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PillButton from "../elements/PillButton";

const heroImages = [
    {
        src: "/hero/hero-2/1.png",
        alt: "AI powered business solutions",
    },
    {
        src: "/hero/hero-2/2.png",
        alt: "AI business automation",
    },
    {
        src: "/hero/hero-2/3.png",
        alt: "Modern AI solutions",
    },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const activeImage = heroImages[activeIndex];

    return (
        <section className="relative overflow-hidden bg-background">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-0 lg:pt-20">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    {/* ─────────────────────
              LEFT CONTENT
          ───────────────────── */}
                    <div className="max-w-2xl flex flex-col justify-end">
                        {/* <span className="mb-5 self-start inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                            AI-powered business solutions
                        </span> */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <h1 className="text-balance text-5xl font-bold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
                                Solutions for{" "}
                                <span className="text-primary">
                                    AI-Powered
                                </span>{" "}
                                Businesses
                            </h1>

                            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                                We help forward-thinking companies adopt AI tools
                                and systems designed to cut costs, save time, and
                                scale faster than ever before.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/contact"
                                >
                                    <PillButton variant="dark" icon={ArrowUpRight}>Book A Consultation</PillButton>
                                </Link>

                                {/* <Link
                  to="/solutions"
                >
                <PillButton>
                  Explore solutions
                </PillButton>
                </Link> */}
                            </div>
                        </motion.div>
                    </div>

                    {/* ─────────────────────
              RIGHT IMAGE
          ───────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="relative aspect-4/4 overflow-hidden rounded-[2rem] border border-border bg-muted shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={activeImage.alt}
                                        initial={{
                                            opacity: 0,
                                            y: 8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -8,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="relative left-5 top-5 z-20 mb-5 self-start inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-background backdrop-blur"
                                    >
                                        {activeImage.alt}
                                    </motion.span>
                                </AnimatePresence>

                                <AnimatePresence mode="sync">
                                    <motion.img
                                        key={activeImage.src}
                                        src={activeImage.src}
                                        alt={activeImage.alt}
                                        initial={{
                                            opacity: 0,
                                            scale: 1.08,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 1.08,
                                        }}
                                        transition={{
                                            duration: 1.1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="absolute inset-0 z-10 h-full w-full object-cover"
                                    />
                                </AnimatePresence>

                            {/* Subtle shadcn overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />

                            {/* ─────────────────────
                  FLOATING METRIC CARD
              ───────────────────── */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.6,
                                }}
                                className="absolute bottom-5 left-5 w-[210px] rounded-2xl border border-border/80 bg-background/80 p-4 shadow-xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:w-[230px]"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-muted-foreground">
                                            Satisfaction Rate
                                        </p>

                                        <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                                            97%
                                        </p>
                                    </div>

                                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                                        <ArrowRight className="size-4 -rotate-45 text-primary" />
                                    </div>
                                </div>

                                {/* Mini graph */}
                                <div className="mt-4 h-12">
                                    <svg
                                        viewBox="0 0 220 50"
                                        fill="none"
                                        className="h-full w-full"
                                        preserveAspectRatio="none"
                                    >
                                        <motion.path
                                            d="M2 42 C25 20, 42 22, 65 27 C90 34, 103 18, 125 22 C148 26, 160 9, 181 13 C195 16, 207 5, 218 4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            className="text-primary"
                                            initial={{
                                                pathLength: 0,
                                            }}
                                            animate={{
                                                pathLength: 1,
                                            }}
                                            transition={{
                                                delay: 0.8,
                                                duration: 1.5,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </svg>
                                </div>
                            </motion.div>
                        </div>

                        {/* Image indicators */}
                        {/* <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
              {heroImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className="group p-1"
                >
                  <span
                    className={[
                      "block h-1.5 rounded-full transition-all duration-500",
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-border group-hover:bg-muted-foreground",
                    ].join(" ")}
                  />
                </button>
              ))}
            </div> */}
                    </motion.div>
                </div>
            </div>

            {/* Decorative shadcn-colored glow */}
            <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </section>
    );
}