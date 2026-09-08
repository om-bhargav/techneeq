"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Section from "../global/section/Section";
import { capabilityGroups } from "@/data/home";

/**
 * CAPABILITIES — "what can Techneeq actually deliver?"
 *
 * Four strategic groups, not a service grid. This section replaces the three
 * separate capability presentations the homepage used to carry (the six-layer
 * engine, the "one team, every capability" bento, and the "where we go deep"
 * stack) — the individual services live on the dedicated capability pages.
 */
export default function Capabilities() {
  return (
    <Section id="capabilities">
      <Section.Header
        label="Capabilities"
        title="Four capability groups."
        highlight="One delivery team."
        description="Most engagements draw on more than one of these. They are built and run by the same team, so the seams between them are ours to solve, not yours."
      />

      <Section.Body>
        <div className="grid gap-4 md:grid-cols-2">
          {capabilityGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group relative overflow-hidden rounded-[22px]
                  border border-foreground/[0.08] bg-muted/30
                "
              >
                {/* Technical background — same treatment as the rest of the site */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="
                      absolute inset-0 opacity-[0.025]
                      [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                      [background-size:32px_32px]
                    "
                  />

                  <div
                    className="
                      absolute -bottom-24 -right-20 h-64 w-64 rounded-full
                      border border-foreground/[0.05]
                      transition-transform duration-1000
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="relative z-10 flex h-full flex-col p-6 md:p-8 lg:p-9">
                  {/* Icon + number */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex size-11 items-center justify-center rounded-xl
                        border border-foreground/10 bg-background/50 backdrop-blur-sm
                        transition-all duration-500
                        group-hover:-translate-y-1
                        group-hover:bg-foreground group-hover:text-background
                      "
                    >
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>

                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      {group.id}
                    </span>
                  </div>

                  {/* Heading */}
                  <div className="mt-10 md:mt-14">
                    <h3
                      className="
                        font-display text-2xl leading-[0.95] tracking-[-0.045em]
                        transition-transform duration-500
                        group-hover:translate-x-1
                        sm:text-3xl
                      "
                    >
                      {group.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-xs leading-6 text-muted-foreground md:text-sm">
                      {group.description}
                    </p>
                  </div>

                  {/* What that includes */}
                  <ul className="mt-8 border-t border-foreground/[0.08]">
                    {group.points.map((point) => (
                      <li
                        key={point}
                        className="
                          flex items-baseline gap-3
                          border-b border-foreground/[0.08] py-2.5
                          text-xs leading-5 text-muted-foreground
                        "
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-px w-3 shrink-0 bg-foreground/25"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Secondary action — detail lives on the capability pages */}
        <div className="mt-10 flex justify-start">
          <Link
            to="/solutions"
            className="
              group inline-flex items-center gap-3 rounded-full
              border border-foreground/15 px-6 py-3
              text-[11px] font-medium uppercase tracking-[0.15em]
              text-foreground transition-colors duration-300
              hover:border-foreground/40
            "
          >
            Explore Capabilities
            <ArrowUpRight
              className="
                size-4 transition-transform duration-300
                group-hover:-translate-y-0.5 group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </Section.Body>
    </Section>
  );
}
