"use client";

import { motion } from "framer-motion";

import Section from "../global/section/Section";
import { differentiators } from "@/data/home";

/**
 * WHY TECHNEEQ — "why choose Techneeq over another data/AI consultancy?"
 *
 * Every claim here is traceable to something the project already states about
 * how the firm works. No "experienced team", "cutting-edge" or "industry-
 * leading" — those are unfalsifiable and every competitor says them too.
 */
export default function WhyTechneeq() {
  return (
    <Section>
      <Section.Header
        label="Why Techneeq"
        title="Why work with us"
        highlight="instead of anyone else."
        description="Four things that decide whether a data and AI program lands — and how we handle each of them."
      />

      <Section.Body>
        <div className="grid border-t border-foreground/[0.08] md:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group flex gap-5 border-b border-foreground/[0.08]
                  py-8 md:gap-6 md:py-10
                  md:odd:border-r md:odd:pr-10 md:even:pl-10
                "
              >
                <div
                  className="
                    flex size-11 shrink-0 items-center justify-center rounded-xl
                    border border-foreground/10 bg-background/50
                    transition-colors duration-500
                    group-hover:bg-foreground group-hover:text-background
                  "
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/60">
                    {item.id}
                  </span>

                  <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.03em] md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-xs leading-6 text-muted-foreground md:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section.Body>
    </Section>
  );
}
