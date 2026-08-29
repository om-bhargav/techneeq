import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import SectionHeader from "@/components/global/section/SectionHeader";
import Section from "../global/section/Section";
import { AnimatePresence, motion } from "framer-motion";
import { intelligenceLayers } from "@/data/home"; 
export default function Intelligence() {
  const [activeIndex, setActiveIndex] = useState(0);
  const goNext = () => {
    setActiveIndex((current) => (current + 1) % intelligenceLayers.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + intelligenceLayers.length) % intelligenceLayers.length
    );
  };
  const activeLayer = intelligenceLayers[activeIndex];
  const ActiveIcon = activeLayer.icon;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % intelligenceLayers.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Section className="relative">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}

        <SectionHeader
          label="How It Fits Together"
          title="How your data becomes a decision."
          description="Every project touches these six stages, in this order. We can start anywhere, and take over as much of the chain as you need."
        />

        {/* Engine */}
        <Section.Body>
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

            {/* Layer navigation */}

            <div className="min-w-0">

              {/* Desktop layers */}

              <div className="hidden lg:block">

                {intelligenceLayers.map((layer, index) => {
                  const active = index === activeIndex;

                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveIndex(index)}
                      className="group relative flex w-full items-start gap-5 py-5 text-left"
                    >

                      {/* Active rail */}

                      <div className="absolute left-0 top-0 h-full w-px bg-foreground/10">
                        {active && (
                          <div className="absolute left-0 top-0 h-full w-px bg-foreground" />
                        )}
                      </div>

                      {/* Number */}

                      <span
                        className={`
                        pl-5 font-mono text-[10px] tracking-widest
                        transition-colors
                        ${active
                            ? "text-foreground"
                            : "text-muted-foreground/40"
                          }
                      `}
                      >
                        {layer.id}
                      </span>

                      {/* Content */}

                      <div className="min-w-0">

                        <div
                          className={`
                          text-lg tracking-[-0.02em] transition-colors
                          ${active
                              ? "text-foreground"
                              : "text-foreground/45 group-hover:text-foreground/80"
                            }
                        `}
                        >
                          {layer.title}
                        </div>

                        <div
                          className={`
                          mt-1 font-mono text-[9px] tracking-[0.18em]
                          transition-colors
                          ${active
                              ? "text-foreground/50"
                              : "text-muted-foreground/25"
                            }
                        `}
                        >
                          {layer.keyword}
                        </div>

                      </div>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Active layer */}

              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-foreground/[0.08] bg-muted/20 sm:min-h-[460px] lg:min-h-[500px]">

                {/* Technical background */}
                <div
                  className="
                    pointer-events-none absolute inset-0 opacity-[0.035]
                    [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                    [background-size:40px_40px]
                  "
                />

                {/* Large ring */}
                <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full border border-foreground/[0.06]" />
                <div className="pointer-events-none absolute -right-20 -top-20 size-[300px] rounded-full border border-foreground/[0.05]" />

                {/* Content */}
                <div className="relative flex min-h-[420px] flex-col p-7 sm:min-h-[460px] md:p-10 lg:min-h-[500px] lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayer.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-1 flex-col"
                  >

                    {/* Top */}
                    <div className="flex items-start justify-between">

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: 0.05 }}
                        className="flex size-12 items-center justify-center rounded-2xl border border-foreground/10 bg-background/60"
                      >
                        <ActiveIcon
                          className="size-5"
                          strokeWidth={1.4}
                        />
                      </motion.div>

                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/50">
                        LAYER {activeLayer.id}
                      </span>

                    </div>

                    {/* Main */}
                    <div className="mt-8 flex-1 sm:mt-10 lg:mt-14">

                      <div className="mb-4 flex items-center gap-3 sm:mb-5">
                        <span className="h-px w-8 bg-foreground/30" />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                          {activeLayer.keyword}
                        </span>
                      </div>

                      <h3 className="max-w-xl font-display text-2xl leading-[1.05] tracking-[-0.03em] sm:text-3xl md:text-4xl lg:text-5xl">
                        {activeLayer.subtitle}
                      </h3>

                      <p className="mt-4 max-w-lg text-xs leading-6 text-muted-foreground sm:mt-5 lg:mt-7">
                        {activeLayer.description}
                      </p>

                    </div>

                    {/* Bottom */}
                    <div className="mt-8 flex items-end justify-between border-t border-foreground/[0.08] pt-5 sm:mt-10 lg:mt-14">

                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50">
                        Intelligence layer
                      </span>

                      <button
                        className="
              group flex size-10 items-center justify-center
              rounded-full border border-foreground/10
              transition
              hover:border-foreground/30
              hover:bg-foreground
              hover:text-background
            "
                      >
                        <ArrowUpRight
                          className="
                size-4 transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
                        />
                      </button>

                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
            </div>
            <div className="mt-8 flex md:hidden items-center gap-5">

              {/* Progress */}

              <div className="relative h-px flex-1 bg-foreground/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-foreground"
                  animate={{
                    width: `${((activeIndex + 1) / intelligenceLayers.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {/* Counter */}

              <span className="hidden font-mono text-[10px] text-muted-foreground sm:block">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(intelligenceLayers.length).padStart(2, "0")}
              </span>

              {/* Previous */}

              <button
                onClick={goPrevious}
                aria-label="Previous service"
                className="
                flex
                size-11
                items-center
                justify-center
                rounded-full
                border
                border-foreground/10
                bg-background
                transition
                hover:border-foreground/30
                hover:bg-muted
              "
              >
                <ArrowLeft className="size-4" />
              </button>

              {/* Next */}

              <button
                onClick={goNext}
                aria-label="Next service"
                className="
                flex
                size-11
                items-center
                justify-center
                rounded-full
                border
                border-foreground/10
                bg-background
                transition
                hover:border-foreground/30
                hover:bg-muted
              "
              >
                <ArrowRight className="size-4" />
              </button>

            </div>
          </div>
        </Section.Body>
      </div>
    </Section>
  );
}