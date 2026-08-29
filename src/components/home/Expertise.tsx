"use client";

import {
  ArrowUpRight
} from "lucide-react";

import { motion } from "motion/react";
import { expertise } from "@/data/home";
import SectionHeader from "../global/section/SectionHeader";
import Section from "../global/section/Section";



export default function Expertise() {
  return (
    <Section>
      <SectionHeader
        label="Expertise"
        title="Where we"
        highlight="go deep."
        description="Deep technical capability across data, enterprise systems, cloud infrastructure and intelligent automation."
      />

      <Section.Body className="mt-12 md:mt-24">
        {/* We use a vertical flex layout with padding at the bottom so the final card has room to scroll and stick */}
        <div className="flex flex-col gap-6 md:pb-[20vh] md:gap-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  // MAGIC TRICK: This dynamically spaces the sticky top limit for each card.
                  // 120px is the base top margin (under header/nav).
                  // index * 24 adds incremental spacing so they look like a stacked deck.
                  top: `calc(120px + ${index * 24}px)`,
                }}
                className={`
                  group
                  sticky
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  w-full
                  border-foreground/[0.08]
                  /* CRITICAL: Must be a solid background so it hides cards underneath it! */
                  bg-background
                  shadow-xl
                `}
              >
                {/* Decorative background effects */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      h-64
                      w-64
                      rounded-full
                      bg-foreground/[0.03]
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:scale-150
                      group-hover:bg-foreground/[0.06]
                    "
                  />

                  {/* Grid */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-[0.025]
                      [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                      [background-size:32px_32px]
                    "
                  />

                  {/* Large decorative circles */}
                  <div
                    className="
                      absolute
                      -bottom-48
                      -right-20
                      h-80
                      w-80
                      rounded-full
                      border
                      border-foreground/[0.04]
                      transition-transform
                      duration-1000
                      group-hover:scale-110
                    "
                  />
                  <div
                    className="
                      absolute
                      -bottom-32
                      -right-12
                      h-56
                      w-56
                      rounded-full
                      border
                      border-foreground/[0.04]
                    "
                  />
                </div>

                {/* Content Layout (Changed to Horizontal row for stacking) */}
                <div className="relative z-10 flex flex-col items-start gap-8 p-8 md:flex-row md:items-center md:gap-12 md:p-12">
                  
                  {/* Left: Icon & ID */}
                  <div className="flex shrink-0 flex-col items-start gap-4">
                    <div
                      className="
                        flex
                        size-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-foreground/10
                        bg-background/50
                        backdrop-blur-sm
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:bg-foreground
                        group-hover:text-background
                      "
                    >
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <div className="font-mono text-xs tracking-widest text-muted-foreground">
                      {item.id}
                    </div>
                  </div>

                  {/* Middle: Text Content */}
                  <div className="flex-1 md:pr-12">
                    <h3
                      className="
                        font-display
                        text-2xl
                        leading-tight
                        tracking-tight
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        md:text-4xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[500px]
                        text-sm
                        leading-relaxed
                        text-muted-foreground
                        transition-colors
                        duration-500
                        group-hover:text-foreground/70
                        md:text-base
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Right: Action Arrow */}
                  <div
                    className="
                      flex
                      size-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-foreground/10
                      opacity-50
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-foreground/30
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight className="size-5" />
                  </div>
                  
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section.Body>
    </Section>
  );
}