"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import PillButton from "../elements/PillButton";
import { hero } from "@/data/home";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="relative isolate h-screen overflow-hidden bg-background">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    src={"/hero/video1.mp4"}
                    className="rounded-none! object-cover h-full w-full"
                />

                {/* Readability overlay */}
                <div className="absolute inset-0 bg-foreground/50" />
            </div>

            <div className="flex h-screen max-w-7xl w-full items-end justify-between px-6 py-12 md:px-4 mx-auto">
                <div className="grid w-full items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-10 max-w-3xl"
                    >
                        <p className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-background/70 md:text-[11px]">
                            <span
                                aria-hidden
                                className="h-px w-8 shrink-0 bg-background/40"
                            />
                            {hero.eyebrow}
                        </p>

                        <h1 className="text-4xl font-light leading-[1] tracking-[-0.04em] text-background sm:text-5xl md:text-7xl">
                            {hero.title}
                            <br />
                            <span className="text-teal-300">{hero.highlight}</span>
                        </h1>
                    </motion.div>

                    {/* Right content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-10 max-w-md lg:ml-auto"
                    >
                        <p className="text-sm font-medium leading-6 text-background md:text-base md:leading-7">
                            {hero.description}
                        </p>

                        {/* CTA hierarchy: one dominant action, one exploratory */}
                        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                            <PillButton
                                href={hero.primaryCta.href}
                                icon={ArrowUpRight}
                                className="border-background/30 px-6 py-3"
                            >
                                {hero.primaryCta.label}
                            </PillButton>

                            {/* <Button
                                type="button"
                                onClick={() =>
                                    scrollToSection(hero.secondaryCta.href)
                                }
                                className="
                                    group inline-flex items-center gap-2 rounded-full
                                    px-4 py-3 text-[11px] font-medium uppercase h-10
                                    tracking-[0.15em] text-background/70
                                    transition-colors duration-300
                                    hover:text-background
                                "
                            >
                                {hero.secondaryCta.label}
                                <span
                                    aria-hidden
                                    className="
                                        h-px w-6 bg-background/40
                                        transition-all duration-300
                                        group-hover:w-9 group-hover:bg-background
                                    "
                                />
                            </Button> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
