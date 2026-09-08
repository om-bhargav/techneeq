"use client";

import { motion } from "framer-motion";

import Section from "../global/section/Section";
import { proofDisclosure, proofPatterns } from "@/data/home";

/**
 * PROOF / OUTCOMES — "what evidence exists?"
 *
 * IMPORTANT: this project contains no client-approved case studies, named
 * references, or verified figures. Rather than inventing them, the section
 * ships as the real structure — challenge, approach, outcome — populated with
 * what each engagement type is scoped to change, and carries an explicit
 * disclosure so nothing here can be mistaken for a published client result.
 *
 * When real case studies are cleared for release: swap `proofPatterns` for
 * them, drop the disclosure strip, and add the "View Case Study" link.
 */
export default function Proof() {
  return (
    <Section>
      <Section.Header
        label="Proof & outcomes"
        title="What an engagement"
        highlight="is scoped to change."
        description="Every program we run is written down this way before it starts: the constraint we are removing, what we build, and the change the business should be able to see afterwards."
      />

      <Section.Body>
        {/* Honest disclosure — no fabricated clients, metrics or testimonials */}
        <div
          className="
            mb-8 flex items-start gap-3 rounded-xl
            border border-foreground/10 bg-muted/30 px-5 py-4
          "
        >
          <span
            aria-hidden
            className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40"
          />
          <p className="max-w-3xl text-xs leading-6 text-muted-foreground">
            {proofDisclosure}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {proofPatterns.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex flex-col rounded-[22px]
                border border-foreground/[0.08] bg-muted/30
                p-6 md:p-8
              "
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.pattern}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50">
                  {item.id}
                </span>
              </div>

              <div className="mt-8 flex flex-1 flex-col gap-7">
                <ProofStep label="Challenge" body={item.challenge} />
                <ProofStep label="Techneeq approach" body={item.approach} />
                <ProofStep label="Business outcome" body={item.outcome} accent />
              </div>
            </motion.article>
          ))}
        </div>
      </Section.Body>
    </Section>
  );
}

function ProofStep({
  label,
  body,
  accent = false,
}: {
  label: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div className="relative border-l border-foreground/10 pl-5">
      <span
        aria-hidden
        className={`
          absolute -left-[3px] top-1.5 size-1.5 rounded-full
          ${accent ? "bg-foreground" : "bg-foreground/30"}
        `}
      />

      <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
        {label}
      </span>

      <p
        className={`
          mt-2 text-xs leading-6
          ${accent ? "text-foreground" : "text-muted-foreground"}
        `}
      >
        {body}
      </p>
    </div>
  );
}
