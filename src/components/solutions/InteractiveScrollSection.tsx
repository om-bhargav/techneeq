"use client";

import { useRef } from "react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { Sparkles } from "lucide-react";
import { useDarkSection } from "@/hooks/useDarkSection";
import FastMarquee from "react-fast-marquee";
import SectionHeader from "../global/section/SectionHeader";
// import GalaxySection from "../global/GalaxySection";

// This checks if your bundler wrapped the component in a module object.
// If it did, it unwraps it. If it didn't, it just uses it normally.
const Marquee = (FastMarquee as any).default || FastMarquee;

export default function ExpertiseTransition() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Increased scroll duration: 400vh total.
    // 1. Wait a bit, then scroll text up between 15% and 35% of the way down.
    const contentY = useTransform(scrollYProgress, [0.15, 0.35], ["0vh", "-100vh"]);

    useDarkSection(containerRef);

    return (
        <section
            ref={containerRef}
            // Made the section taller (400vh) for a longer, relaxed scroll
            className="relative h-[400vh] w-full overflow-clip"
        >
            {/* Sticky Screen */}
            <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground">
                
                <motion.div
                    style={{ y: contentY }}
                    className="flex flex-col items-center px-6 text-center"
                >
                    {/* === GROUP 1 (SCREEN 1) === */}
                    <div className="flex h-screen w-full flex-col items-center justify-center">
                        <SectionHeader label="What We Do" title="Area of Expertise" titleclassName="md:text-6xl!" />
                    </div>

                    {/* === GROUP 2 (SCREEN 2) === */}
                    <div className="flex h-screen w-full flex-col items-center justify-center">
                        <h3 className="text-2xl sm:text-5xl max-w-4xl">
                            We build intelligent ecosystems, seamless digital experiences, and
                            scalable infrastructure.
                        </h3>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <button className="flex items-center gap-3 rounded-full border border-foreground/30 px-8 py-4 text-sm transition-colors hover:bg-foreground hover:text-background">
                                Explore Solutions
                                <ArrowRight className="size-4" />
                            </button>

                            <button className="flex items-center gap-3 rounded-full border border-foreground/30 px-8 py-4 text-sm transition-colors hover:bg-foreground hover:text-background">
                                View Case Studies
                                <MoveRight className="size-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {isMounted &&
                    <motion.div
                        className="absolute bottom-0 left-0 flex bg-background w-full overflow-hidden border-t border-foreground/10 py-6"
                    >
                        <Marquee
                            speed={50}
                            autoFill={true}
                            gradient={false}
                        >
                            <div className="flex items-center gap-8 pr-8">
                                <span className="font-display text-2xl uppercase tracking-wider text-foreground/90">
                                    Digital Transformation
                                </span>
                                <Sparkles className="size-6 text-foreground/40" />
                            </div>
                        </Marquee>
                    </motion.div>
                }

                {/* =========================================
                    3. HORIZONTAL EXPANDING LINES OVERLAY
                ========================================= */}
                {/* flex-col stacks them vertically, so full-width rows grow downwards */}
                <div className="pointer-events-none absolute inset-0 z-50">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ExpandingLine
                            key={index}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================================================================
   INDIVIDUAL EXPANDING LINE (Full Width, Growing Height)
================================================================ */
function ExpandingLine({
    index,
    scrollYProgress,
}: {
    index: number;
    scrollYProgress: any;
}) {
    // Start expanding the lines right after the content fades out (65%)
    const start = 0.65 + index * 0.04;
    const end = 0.85 + index * 0.04;

    // Height grows from 0% to exactly 20% of the screen
    const height = useTransform(scrollYProgress, [start, end], ["0%", "20%"]);

    return (
        <motion.div
            style={{
                height,
                // Pins the lines exactly at 0%, 20%, 40%, 60%, 80%
                top: `${index * 20}%`
            }}
            className="absolute left-0 w-full bg-foreground"
        />
    );
}