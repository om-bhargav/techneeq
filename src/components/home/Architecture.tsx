"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import Section from "../global/section/Section";
import { architecture } from "@/data/home";

/**
 * ONE INTELLIGENCE ARCHITECTURE. MULTIPLE BUSINESS ENVIRONMENTS.
 *
 * The signature section. This is the only place on the homepage that explains
 * how Techneeq approaches the problem — the four movements are not repeated
 * anywhere else.
 *
 * The animation is the argument: a single signal is scrubbed through the four
 * panels as the section passes the viewport, and each stage inverts as the
 * signal reaches it. That reads as transformation and progression rather than
 * decoration, and it reuses the invert treatment the panels already had on
 * hover instead of introducing a new visual idea.
 */
export default function Architecture() {
  const rootRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const total = architecture.stages.length;

  useGSAP(
    () => {
      const root = rootRef.current;
      const rail = railRef.current;
      if (!root || !rail) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 768px)",
        },
        (context) => {
          const { reduced, desktop } = context.conditions as {
            reduced: boolean;
            desktop: boolean;
          };

          // The rail runs horizontally on desktop and vertically on mobile,
          // so only the matching axis is ever scaled.
          const axis = desktop ? "scaleX" : "scaleY";

          // Reduced motion: everything is simply resolved, no scrubbing.
          if (reduced) {
            gsap.set(rail, { scaleX: 1, scaleY: 1 });
            setActiveIndex(total - 1);
            return;
          }

          gsap.set(rail, { scaleX: 1, scaleY: 1, [axis]: 0 });

          const trigger = ScrollTrigger.create({
            trigger: root,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 0.4,
            onUpdate: (self) => {
              // The rail is the signal: pure transform, no React re-render.
              gsap.set(rail, { [axis]: self.progress });

              // Panels only re-render on an actual stage change (max 5 times).
              // `ceil - 1` keeps every panel unlit at progress 0, so each one
              // resolves as the signal reaches it rather than starting lit.
              const next = Math.min(
                total - 1,
                Math.ceil(self.progress * total) - 1
              );

              setActiveIndex((current) =>
                current === next ? current : next
              );
            },
          });

          return () => trigger.kill();
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <Section>
      <Section.Header
        label={architecture.label}
        title={architecture.title}
        highlight={architecture.highlight}
        description={architecture.description}
      />

      <Section.Body ref={rootRef}>
        {/* The signal rail — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          <div
            aria-hidden
            className="
              absolute left-0 top-0 z-10 origin-top
              h-full w-px bg-foreground/10
              md:h-px md:w-full md:origin-left
            "
          >
            <span
              ref={railRef}
              className="
                absolute inset-0 origin-top bg-foreground
                md:origin-left
              "
            />
          </div>

          <div className="grid border-l border-t border-foreground/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {architecture.stages.map((stage, index) => {
              const isActive = index <= activeIndex;

              return (
                <article
                  key={stage.id}
                  data-active={isActive || undefined}
                  className={`
                    group relative min-h-60 overflow-hidden
                    border-b border-r border-foreground/[0.08]
                    p-6 transition-colors duration-700
                    sm:p-8 lg:min-h-[420px] lg:p-9
                    ${isActive ? "bg-foreground" : "bg-transparent"}
                  `}
                >
                  {/* Top rail: number + keyword */}
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`
                        font-mono text-[10px] tracking-[0.18em]
                        transition-colors duration-700
                        ${isActive ? "text-background/50" : "text-foreground/35"}
                      `}
                    >
                      {stage.id}
                    </span>

                    <span
                      className={`
                        font-mono text-[9px] tracking-[0.2em]
                        transition-colors duration-700
                        ${isActive ? "text-background/60" : "text-foreground/30"}
                      `}
                    >
                      {stage.keyword}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-10 lg:absolute lg:inset-x-9 lg:bottom-9 lg:mt-0">
                    <h3
                      className={`
                        font-display text-3xl leading-none tracking-[-0.045em]
                        transition-colors duration-700
                        sm:text-4xl lg:text-[42px]
                        ${isActive ? "text-background" : "text-foreground"}
                      `}
                    >
                      {stage.title}
                    </h3>

                    {/* Fixed block height (4 lines x leading-6) so the four
                        bottom-anchored headings stay on one baseline even
                        though the descriptions differ in length. */}
                    <p
                      className={`
                        mt-5 max-w-[280px] text-xs leading-6 lg:min-h-24
                        transition-colors duration-700
                        ${
                          isActive
                            ? "text-background/60"
                            : "text-muted-foreground"
                        }
                      `}
                    >
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage marker */}
                  <div
                    aria-hidden
                    className={`
                      absolute right-6 top-6 size-2 rounded-full
                      transition-all duration-700 sm:right-8 sm:top-8
                      ${
                        isActive
                          ? "scale-150 bg-background"
                          : "scale-100 bg-foreground/20"
                      }
                    `}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </Section.Body>
    </Section>
  );
}
