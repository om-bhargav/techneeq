import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";

import Section from "../global/section/Section";
import { techStacks } from "@/data/solutions";

export default function TechStacks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);

    const el = itemRefs.current[index];
    if (!el) return;

    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;

    window.setTimeout(() => {
      const { top } = el.getBoundingClientRect();

      // Document height changed — ScrollTrigger's cached positions are stale.
      ScrollTrigger.refresh();

      if (top >= 0 && top < window.innerHeight * 0.6) return;

      if (lenis) {
        lenis.scrollTo(el, { offset: -96, duration: 0.8 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 560);
  };

  return (
    <Section>
      <Section.Header
        label="Technology"
        title="The right stack."
        highlight="Built around the problem."
        description="We don't force every product into the same technology stack. Architecture, performance, maintainability and the problem itself determine what we use — from modern frontend systems to backend infrastructure, AI and automation."
      />

      <Section.Body>
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
          {/* Side index */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/30">
                Technology stack
              </div>

              <div className="relative mt-8 h-px w-16 bg-foreground/20">
                <div className="absolute inset-y-0 left-0 w-full bg-foreground" />
              </div>

              <div key={activeIndex} className="mt-16 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <span className="font-mono text-[80px] leading-none tracking-[-0.08em] text-foreground/[0.08]">
                  {techStacks[activeIndex].id}
                </span>

                <p className="mt-5 max-w-[220px] text-xs leading-5 text-muted-foreground">
                  {techStacks[activeIndex].eyebrow}
                </p>
              </div>
            </div>
          </div>

          {/* Tech stack list */}
          <div className="border-t border-foreground/10">
            {techStacks.map((stack, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={stack.id}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  style={{ contain: "layout" }}
                  className="group relative scroll-mt-24 border-b border-foreground/10"
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(index)}
                    aria-expanded={isActive}
                    aria-controls={`stack-panel-${stack.id}`}
                    className="relative flex w-full items-center gap-5 py-7 text-left md:py-9"
                  >
                    {/* Number */}
                    <span
                      className={`w-8 shrink-0 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/25 group-hover:text-foreground/50"
                      }`}
                    >
                      {stack.id}
                    </span>

                    {/* Name */}
                    <h3
                      className={`min-w-0 flex-1 font-display text-2xl leading-none tracking-[-0.04em] transition-colors duration-500 sm:text-3xl md:text-4xl ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/45 group-hover:text-foreground/70"
                      }`}
                    >
                      {stack.name}
                    </h3>

                    {/* Arrow */}
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/10 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? "-translate-x-1 rotate-45" : ""
                      }`}
                    >
                      <ArrowUpRight className="size-4" strokeWidth={1.5} />
                    </span>
                  </button>

                  {/* Panel — grid-rows transition instead of animated height */}
                  <div
                    id={`stack-panel-${stack.id}`}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-8 pl-[52px] pr-2 md:grid-cols-[1fr_1fr] md:gap-12 md:pb-10">
                        {/* Description */}
                        <div>
                          <span className="font-mono text-[9px] tracking-[0.18em] text-foreground/30">
                            {stack.eyebrow}
                          </span>

                          <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
                            {stack.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                          {stack.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-2 text-[10px] uppercase tracking-[0.08em] text-foreground/55"
                            >
                              <span className="mt-[5px] size-1 shrink-0 rounded-full bg-foreground/40" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section.Body>
    </Section>
  );
}