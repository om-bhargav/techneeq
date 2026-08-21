"use client";

import { motion } from "framer-motion";
import Section from "../global/section/Section";
import SectionHeader from "../global/section/SectionHeader";

const transformations = [
  {
    id: "01",
    title: "Connect",
    description:
      "Systems stop being islands. Records from every platform land in one place, continuously.",
  },
  {
    id: "02",
    title: "Contextualize",
    description:
      "Raw records become modeled facts your teams read the same way, with the same definitions.",
  },
  {
    id: "03",
    title: "Intelligent",
    description:
      "Analytics and models sit on top of live data, so patterns surface before they become history.",
  },
  {
    id: "04",
    title: "Actionable",
    description:
      "Intelligence reaches the person making the call, at the moment the call has to be made.",
  },
];

export default function Transformation() {
  return (
    <Section>
      <SectionHeader
        label="The transformation"
        title="From connected data"
        highlight="to decisive action."
        description="A continuous path from fragmented systems to intelligence that changes what happens next."
      />

      <Section.Body>
        <div className="grid border-l border-t border-foreground/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {transformations.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                min-h-60
                overflow-hidden
                border-b
                border-r
                border-foreground/[0.08]
                p-6
                transition-colors
                duration-500
                hover:bg-foreground
                sm:p-8
                lg:min-h-[420px]
                lg:p-9
              "
            >
              {/* Number */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    tracking-[0.18em]
                    text-foreground/35
                    transition-colors
                    duration-500
                    group-hover:text-background/40
                  "
                >
                  {item.id}
                </span>

                <span
                  className="
                    h-px
                    w-8
                    bg-foreground/15
                    transition-all
                    duration-500
                    group-hover:w-14
                    group-hover:bg-background/30
                  "
                />
              </div>

              {/* Content */}
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8 lg:inset-x-9 lg:bottom-9">
                <h3
                  className="
                    font-display
                    text-3xl
                    leading-none
                    tracking-[-0.045em]
                    transition-colors
                    duration-500
                    sm:text-4xl
                    lg:text-[42px]
                    group-hover:text-background
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[280px]
                    text-xs
                    leading-6
                    text-muted-foreground
                    transition-colors
                    duration-500
                    group-hover:text-background/60
                  "
                >
                  {item.description}
                </p>
              </div>

              {/* Corner marker */}
              <div
                className="
                  absolute
                  right-6
                  top-6
                  size-2
                  rounded-full
                  bg-foreground/20
                  transition-all
                  duration-500
                  group-hover:scale-150
                  group-hover:bg-background
                  sm:right-8
                  sm:top-8
                "
              />
            </motion.article>
          ))}
        </div>
      </Section.Body>
    </Section>
  );
}