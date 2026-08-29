"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Section from "../global/section/Section";
import PillButton from "../elements/PillButton";

export default function IntelligenceCTA() {
  return (
    <Section className="overflow-hidden">
      <Section.Header
        label="Start a conversation"
        title="Got a data problem"
        highlight="you're tired of working around?"
        description="Tell us what's not working. We'll tell you honestly whether we're the right fit to fix it."
        className="relative"
      />

      <Section.Body className="relative">
        <div className="flex flex-col justify-between gap-10 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center">
          {/* Supporting text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <p className="text-sm leading-6 text-muted-foreground">
              No lengthy proposals up front. A short call is enough for us to
              tell you honestly whether this is worth pursuing together.
            </p>
          </motion.div>

          {/* CTA */}
          <PillButton
            href="/contact"
            icon={ArrowUpRight}
            variant="dark"
            className="px-7 py-4 text-sm md:px-8 md:py-5"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Start a conversation
          </PillButton>
        </div>

        {/* Bottom metadata */}
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-foreground/10 pt-6 text-[10px] uppercase tracking-[0.16em] text-foreground/30 sm:flex-row">
          <span>Data · Analytics · Intelligence</span>

          <span>Est. 2002 · Connecticut, USA</span>
        </div>
      </Section.Body>
    </Section>
  );
}