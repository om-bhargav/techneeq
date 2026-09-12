import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  AnimatePresence,
  useTransform,
  useMotionValueEvent,
  useMotionTemplate,
  MotionValue,
} from "framer-motion";
import Section from "../global/section/Section";
import { useDarkSection } from "@/hooks/useDarkSection";
import { industries } from "@/data/home";


export default function Industries() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (industries.length - 1));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  useDarkSection(containerRef);

  const activeEnvironment = industries[activeIndex];

  const handleScrollTo = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current as HTMLDivElement;
    const { top, height } = container.getBoundingClientRect();
    const targetY =
      window.scrollY + top + height * ((index + 0.25) / industries.length);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <Section id="industries" className="relative">
      <Section.Header
        label="Industries"
        title="Where this"
        highlight="gets applied."
        description="Six environments we work in regularly. Pick the one you operate in to see what changes about the constraints — and where a dedicated page exists, what the engagements look like."
      />

      <Section.Body
        ref={containerRef}
        // Scroll length is set in CSS (.industry-stack) so it can be shorter on
        // mobile, where the image column is hidden and there is less to reveal.
        style={{ "--industry-count": industries.length } as React.CSSProperties}
        className="industry-stack relative w-full"
      >
        {/* FIX: Removed `min-h-screen`, changed top-0 to top-24, added padding. 
            Now it hugs the content's natural height instead of forcing empty space! */}
        <div className="sticky top-24 flex w-full flex-col justify-center overflow-hidden md:pb-24 pt-8 md:pt-12">

          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1fr_0.8fr] md:gap-16">

            {/* =========================
                LEFT — CONTENT
            ========================= */}
            <div className="flex flex-col justify-between">
              <div className="flex min-h-[220px] flex-1 flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEnvironment.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-foreground/50">
                      {activeEnvironment.eyebrow}
                    </p>
                    <h3 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
                      {activeEnvironment.name}
                    </h3>
                    <p className="text-lg text-foreground/70">
                      {activeEnvironment.description}
                    </p>

                    {/* Only industries with a dedicated page get a link — the
                        rest stay unlinked rather than pointing at a 404. */}
                    {activeEnvironment.slug && (
                      <Link
                        to={`/industries/${activeEnvironment.slug}`}
                        className="
                          group mt-8 inline-flex items-center gap-3
                          border-b border-foreground/20 pb-1
                          text-[11px] font-medium uppercase tracking-[0.15em]
                          text-foreground/70 transition-colors duration-300
                          hover:text-foreground
                        "
                      >
                        Explore Industries
                        <ArrowUpRight
                          className="
                            size-4 transition-transform duration-300
                            group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                          "
                        />
                      </Link>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-10 md:mt-0">
                <div className="border-t border-foreground/15">
                  {industries.map((environment, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={environment.id}
                        onClick={() => handleScrollTo(index)}
                        className={`group flex w-full items-center border-b border-foreground/15 py-3 text-left transition-colors ${isActive
                            ? "text-foreground"
                            : "text-foreground/50 hover:text-foreground"
                          }`}
                          
                      >
                        <span
                          className={`w-10 font-mono text-[10px] ${isActive ? "text-foreground" : "text-foreground/30"
                            }`}
                        >
                          {environment.id}
                        </span>
                        <span className="flex-1 text-sm">
                          {environment.name}
                        </span>

                        {environment.slug && (
                          <span className="mr-4 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/30">
                            Page
                          </span>
                        )}
                        <span
                          className={`h-px bg-foreground transition-all duration-500 ${isActive ? "w-8" : "w-0 group-hover:w-8"
                            }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =========================
                RIGHT — IMAGE STACK
            ========================= */}
            <div className="relative max-md:hidden h-[300px] w-full overflow-hidden rounded-none! md:h-[550px]">
              {industries.map((env, index) => (
                <ScrollImage
                  key={env.id}
                  env={env}
                  index={index}
                  total={industries.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>
      </Section.Body>
    </Section>
  );
}

// ----------------------------------------------------
// Sub-component for individual sliding images
// ----------------------------------------------------
export interface Environment {
  id: string;
  slug?: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
}

interface ScrollImageProps {
  env: Environment;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

export function ScrollImage({
  env,
  index,
  total,
  scrollYProgress,
}: ScrollImageProps) {
  const intervals = total - 1;
  const startTransition = (index - 1) / intervals;
  const endTransition = index / intervals;

  const topInset = useTransform(
    scrollYProgress,
    [startTransition, endTransition],
    [100, 0],
    { clamp: true }
  );

  const dynamicClipPath = useMotionTemplate`inset(${topInset}% 0% 0% 0%)`;

  return (
    <motion.div
      style={{
        clipPath: index === 0 ? "inset(0% 0% 0% 0%)" : dynamicClipPath,
        zIndex: index,
      }}
      className="absolute inset-0 h-full w-full bg-background"
    >
      <img
        src={env.image}
        alt={env.name}
        className="absolute rounded-none! inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
    </motion.div>
  );
}