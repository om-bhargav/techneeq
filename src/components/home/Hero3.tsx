"use client";

import { motion } from "framer-motion";
import PillButton from "../elements/PillButton";
import { ArrowUpRight } from "lucide-react";

export default function AIInfrastructureSection() {
    return (
        <section className="relative isolate h-screen overflow-hidden bg-background">
            {/* Background image placeholder */}
            <div className="absolute inset-0 -z-10">
                {/* Replace this div with your actual image */}
                <video autoPlay loop playsInline muted src={"/hero/video1.mp4"} className="rounded-none! object-cover h-full w-full" />

                {/* Optional readability overlay */}
                <div className="absolute inset-0 bg-foreground/50" />
            </div>

            <div className="flex h-screen max-w-7xl w-full items-end justify-between px-6 py-12 md:px-4 mx-auto">
                <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
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
                        <h2 className="text-5xl font-light leading-[0.98] tracking-[-0.04em] text-background md:text-7xl">
                            Real-time AI
                            <br />
                            infrastructure that
                            <br />
                            <span className="text-primary">
                                scales
                            </span>{" "}
                            with you
                        </h2>
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
                        className="relative z-10 max-w-sm lg:ml-auto"
                    >
                        <p className="text-base font-medium leading-7 text-background sm:text-sm">
                            Deploy voice agents, video models, LLMs, and any
                            AI workload with sub-second cold starts and instant
                            autoscaling. Built for teams that need reliability
                            at scale.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <PillButton icon={ArrowUpRight}>
                                Book A Consultation
                            </PillButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}