"use client";

import { useEffect, useState } from "react";
import {
    AnimatePresence,
    motion
} from "framer-motion";
import PillButton from "../elements/PillButton";
import { ArrowUpRight } from "lucide-react";

const slides = [
    {
        id: 1,
        title:
            "Simplify, operationalize, and remove data knots in the organization",
        description:
            "We help clients remove data blind spots across their modern data application stack - cloud, Big Data, AI, and Machine Learning",
        image: "https://picsum.photos/seed/data-cloud/1920/1080",
    },
    {
        id: 2,
        title:
            "Lower costs and increase reliability of data pipelines and applications",
        description:
            'We help clients adopt DataOps and modernize their agile streaming data pipelines, aligned with use cases for "faster, better, cheaper" combinations of people, processes, and technologies.',
        image: "https://picsum.photos/seed/data-pipeline/1920/1080",
    },
    {
        id: 3,
        title: "Custom data solutions to increase revenue and profit",
        description:
            "We help clients transform their raw data into informed actions for business value and growth",
        image: "https://picsum.photos/seed/business-data/1920/1080",
    },
    {
        id: 4,
        title:
            "Fuel your business growth with facts and prescriptive analytics. Deploy cloud analytics to accelerate insights",
        description:
            "Incorporated in 2002, we are a software development and data intelligence consulting company. We help businesses unlock the value of their data and turn it into a competitive asset.",
        image: "https://picsum.photos/seed/analytics/1920/1080",
    },
];

const AUTOPLAY_DURATION = 7000;

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const activeSlide = slides[activeIndex];

    const nextSlide = () => {
        setDirection(1);

        setActiveIndex((current) => (current + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, AUTOPLAY_DURATION);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section className="relative h-screen max-md:min-h-150 md:min-h-screen w-full overflow-hidden text-white">
            {/* =========================================================
          BACKGROUND
        ========================================================= */}

            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={activeSlide.id}
                    custom={direction}
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
                        scale: 1.02,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src={activeSlide.image}
                        alt=""
                        className="h-full rounded-none! w-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* =========================================================
          GRADIENT OVERLAYS
      ========================================================= */}

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-40 md:px-10 md:pb-34 lg:px-4">
                <div className="max-w-212.5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`label-${activeSlide.id}`}
                            initial={{
                                opacity: 0,
                                x: -18,
                                filter: "blur(6px)",
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                x: 18,
                                filter: "blur(6px)",
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60"
                        >
                            Featured Solution
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${activeSlide.id}`}
                            initial={{
                                opacity: 0,
                                y: 55,
                                scale: 0.96,
                                filter: "blur(10px)",
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                y: -35,
                                scale: 1.02,
                                filter: "blur(8px)",
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-[850px] text-2xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[56px]"
                        >
                            {activeSlide.title}
                        </motion.h1>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`description-${activeSlide.id}`}
                            initial={{
                                opacity: 0,
                                y: 20,
                                x: 12,
                                filter: "blur(5px)",
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                y: -12,
                                x: -8,
                                filter: "blur(5px)",
                            }}
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1,
                            }}
                            className="mt-5 max-w-[600px] text-xs md:text-sm leading-6 text-white/60"
                        >
                            {activeSlide.description}
                        </motion.p>
                    </AnimatePresence>

                    {/* CTA */}

                    <PillButton
                        className="mt-8"
                        icon={ArrowUpRight}
                    >
                        Explore solution
                    </PillButton>
                </div>
            </div>

            {/* =========================================================
          BOTTOM SLIDER NAVIGATION
      ========================================================= */}

            {/* <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="mx-auto max-w-7xl px-6 pb-8 md:px-6">
                    <div className="relative h-0.5 w-full overflow-hidden bg-white/25">
                        <motion.div
                            key={`progress-${activeSlide.id}`}
                            initial={{
                                width: "0%",
                            }}
                            animate={{
                                width: "100%",
                            }}
                            transition={{
                                duration: AUTOPLAY_DURATION / 1000,
                                ease: "linear",
                            }}
                            className="absolute inset-y-0 left-0 bg-white"
                        />
                    </div>
                </div>
            </div> */}
        </section>
    );
}