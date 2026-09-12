import { useLayoutEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Section from "../global/section/Section";
import { techStacks } from "@/data/solutions";

type PendingScroll = {
  index: number;
  top: number;
};
export default function TechStacks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const pendingRef = useRef<PendingScroll | null>(null);

  const handleSelect = (index: number) => {
    const el = itemRefs.current[index];
    pendingRef.current = el
      ? { index, top: el.getBoundingClientRect().top }
      : null;
    setActiveIndex(index);
  };

  useLayoutEffect(() => {
    const pending = pendingRef.current;
    if (!pending) return;
    pendingRef.current = null;

    const el = itemRefs.current[pending.index];
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const delta = el.getBoundingClientRect().top - pending.top;
      if (delta) window.scrollBy(0, delta);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const delta = el.getBoundingClientRect().top - pending.top;
      if (Math.abs(delta) > 0.5) window.scrollBy(0, delta);
      if (now - start < 650) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);
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
                <motion.div
                  className="absolute inset-y-0 left-0 w-full bg-foreground"
                />
              </div>

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-16"
              >
                <span className="font-mono text-[80px] leading-none tracking-[-0.08em] text-foreground/[0.08]">
                  {techStacks[activeIndex].id}
                </span>

                <p className="mt-5 max-w-[220px] text-xs leading-5 text-muted-foreground">
                  {techStacks[activeIndex].eyebrow}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Tech stack list */}
          <div className="border-t border-foreground/10 [overflow-anchor:none]">
            {techStacks.map((stack, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.article
                  key={stack.id}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
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
                      className={`w-8 shrink-0 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${isActive
                        ? "text-foreground"
                        : "text-foreground/25 group-hover:text-foreground/50"
                        }`}
                    >
                      {stack.id}
                    </span>

                    {/* Name */}
                    <h3
                      className={`min-w-0 flex-1 font-display text-2xl leading-none tracking-[-0.04em] transition-colors duration-500 sm:text-3xl md:text-4xl ${isActive
                        ? "text-foreground"
                        : "text-foreground/45 group-hover:text-foreground/70"
                        }`}
                    >
                      {stack.name}
                    </h3>

                    {/* Arrow */}
                    <motion.span
                      animate={{
                        rotate: isActive ? 45 : 0,
                        x: isActive ? -4 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/10"
                    >
                      <ArrowUpRight className="size-4" strokeWidth={1.5} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`stack-panel-${stack.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-8 pl-[52px] pr-2 md:grid-cols-[1fr_1fr] md:gap-12 md:pb-10">
                          {/* Description */}
                          <motion.div
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.08 }}
                          >
                            <span className="font-mono text-[9px] tracking-[0.18em] text-foreground/30">
                              {stack.eyebrow}
                            </span>

                            <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
                              {stack.description}
                            </p>
                          </motion.div>

                          {/* Technologies */}
                          <motion.div
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.14 }}
                            className="grid grid-cols-2 gap-x-5 gap-y-4"
                          >
                            {stack.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-start gap-2 text-[10px] uppercase tracking-[0.08em] text-foreground/55"
                              >
                                <span className="mt-[5px] size-1 shrink-0 rounded-full bg-foreground/40" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Section.Body>
    </Section>
  );
}