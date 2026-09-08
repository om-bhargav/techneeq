"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Section from "../global/section/Section";
import { problem } from "@/data/home";

/**
 * PROBLEM / TRANSFORMATION — "why does it matter?"
 *
 * Deliberately short. Three from → to lines carry the whole argument, so the
 * page can move straight into the architecture instead of restating it.
 */
export default function Problem() {
  return (
    <Section>
      <Section.Header
        label={problem.label}
        title={problem.title}
        highlight={problem.highlight}
        description={problem.description}
      />

      <Section.Body>
        <div className="border-t border-foreground/[0.08]">
          {problem.contrasts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                grid items-baseline gap-x-6 gap-y-2
                border-b border-foreground/[0.08] py-6
                md:grid-cols-[3rem_minmax(0,1fr)_2rem_minmax(0,1fr)]
                md:items-center md:py-7
              "
            >
              <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/60">
                {item.id}
              </span>

              <span className="text-sm leading-6 text-muted-foreground line-through decoration-foreground/20 md:text-base">
                {item.from}
              </span>

              <ArrowRight
                aria-hidden
                className="size-4 shrink-0 text-foreground/30 max-md:hidden"
                strokeWidth={1.5}
              />

              <span className="font-display text-lg leading-tight tracking-[-0.03em] text-foreground md:text-xl">
                {item.to}
              </span>
            </motion.div>
          ))}
        </div>
      </Section.Body>
    </Section>
  );
}
