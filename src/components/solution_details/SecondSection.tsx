import { useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Section from "../global/section/Section";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useDarkSection } from "@/hooks/useDarkSection";
import { cn } from "@/lib/utils";

interface UseCase {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function SecondSection({useCases,capabilities,secondSection,useCaseSectionHeaders}:{useCases: UseCase[],capabilities: any,secondSection: any;useCaseSectionHeaders: any}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useDarkSection(parentRef);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      capabilities.length - 1,
      Math.floor(progress * capabilities.length)
    );

    setActiveIndex(index);
  });

  const activeCapability = capabilities[activeIndex];

  return (
    <div ref={parentRef}>
      {/* =====================================================
          FIRST SECTION — AI CAPABILITIES
      ====================================================== */}
      <Section
        ref={containerRef}
        containerClassName="max-w-none"
      >
        {/* =========================
            DESKTOP / LARGE SCREENS
        ========================= */}
        <div className="hidden lg:block">
          {/* HEADER */}
          <div className="py-5">
            <Section.Header
              label={secondSection.label}
              title={secondSection.title}
              description={secondSection.description}
              titleclassName="max-w-3xl"
              wantStrip={false}
            />
          </div>

          {/* SCROLL AREA */}
          <div
            ref={sectionRef}
            className="relative h-[300vh]"
          >
            <div className="sticky top-0 flex min-h-screen flex-col justify-center pb-20">
              {/* =========================
                  CAPABILITY NAV
              ========================= */}
              <div className="relative border-y border-foreground/15">
                <div className="grid grid-cols-3">
                  {capabilities.map((capability: any, index: number) => (
                    <div
                      key={capability.id}
                      className="relative"
                    >
                      <div
                        className={`
                          flex h-20 items-center gap-4
                          transition-colors duration-300
                          ${index === 0
                            ? "justify-start"
                            : index === capabilities.length - 1
                              ? "justify-end"
                              : "justify-center"
                          }
                          ${activeIndex === index
                            ? "text-foreground"
                            : "text-foreground/40"
                          }
                        `}
                      >
                        <span className="text-xs">
                          {capability.id}
                        </span>

                        <span className="text-sm lg:text-base">
                          {capability.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BASE LINE */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-foreground/15" />

                {/* PROGRESS */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-cyan-400"
                  animate={{
                    width: `${(activeIndex / (capabilities.length - 1)) * 100}%`,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* DOT */}
                <motion.div
                  className="
                    absolute
                    -bottom-1
                    z-10
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                  "
                  animate={{
                    // Calculates position based on the highest possible index
                    left: `${(activeIndex / (capabilities.length - 1)) * 100}%`,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {/* =========================
                  ACTIVE CONTENT
              ========================= */}
              <div className="grid min-h-[55vh] grid-cols-2 gap-16 pt-8 lg:gap-24">
                {/* =========================
                    IMAGE
                ========================= */}
                <div className="relative overflow-hidden rounded-2xl bg-secondary-background">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCapability.id}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{
                        opacity: 0,
                        scale: 1.06,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <img
                        src={activeCapability.image}
                        alt={activeCapability.title}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* =========================
                    TEXT
                ========================= */}
                <div className="flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCapability.id}
                      initial={{
                        opacity: 0,
                        y: 30,
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
                    >
                      <span className="mb-8 block text-xs tracking-[0.2em] text-foreground/35">
                        {activeCapability.id}
                      </span>

                      <h3
                        className="
                          max-w-xl
                          font-display
                          text-2xl
                          font-normal
                          leading-[0.95]
                          tracking-[-0.045em]
                          md:text-4xl
                        "
                      >
                        {activeCapability.title}
                      </h3>

                      <div className="mt-8 flex max-w-lg gap-4">

                        <p className="text-xs leading-7 text-muted-foreground md:text-sm">
                          {activeCapability.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            MOBILE / TABLET
        ========================= */}
        <div className="block lg:hidden">
                      <Section.Header
              label={secondSection.label}
              title={secondSection.title}
              description={secondSection.description}
              titleclassName="max-w-3xl"
              wantStrip={false}
            />

          <Section.Body className="mt-10 md:mt-12">
            <div className="grid gap-6 sm:gap-8 md:gap-10">
              {capabilities.map((capability: any) => (
                <article
                  key={capability.id}
                  className="overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="aspect-square overflow-hidden h-80 w-full rounded-2xl bg-secondary-background">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="py-6">
                    <span className="mb-5 block text-xs tracking-[0.2em] text-foreground/35">
                      {capability.id}
                    </span>

                    <h3 className="font-display text-2xl font-normal leading-[0.95] tracking-[-0.04em] sm:text-3xl">
                      {capability.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Section.Body>
        </div>
      </Section>

      {/* =====================================================
          SECOND SECTION — HEALTHCARE USE CASES
      ====================================================== */}
      <UseCasesSection useCaseSectionHeaders={useCaseSectionHeaders} useCases={useCases}/>
    </div>
  );
}

/* ================================================================
   USE CASES — modern accordion-style list + visual panel
================================================================ */
function UseCasesSection({useCases,useCaseSectionHeaders}:{useCases:UseCase[];useCaseSectionHeaders: any;}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUseCase = useCases[activeIndex];

  return (
    <Section className="relative">
      <Section.Header
        label={useCaseSectionHeaders.label}
        title={useCaseSectionHeaders.title}
        highlight={useCaseSectionHeaders.highlight}
        description={useCaseSectionHeaders.description}
        wantStrip={false}
      />

      <Section.Body>
        <div
          className="
      grid
      min-w-0
      gap-8
      lg:grid-cols-[1.1fr_0.9fr]
      lg:items-start
      lg:gap-14
      xl:gap-20
    "
        >
          {/* =========================
        DESKTOP VISUAL PANEL
    ========================= */}
          <div
            className="
        order-1
        hidden
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-foreground/[0.08]
        bg-muted/20
        lg:block
        lg:rounded-[24px]
      "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUseCase.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* IMAGE */}
                <div
                  className="
              relative
              aspect-[16/11]
              w-full
              overflow-hidden
              xl:aspect-[16/10]
            "
                >

                  <motion.img
                    key={activeUseCase.image}
                    src={activeUseCase.image}
                    alt={activeUseCase.title}
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
                  />

                  {/* Gradient */}
                  <div
                    className="
                absolute
                inset-0
                bg-gradient-to-t
                from-background/60
                via-transparent
                to-transparent
              "
                  />

                  {/* Label */}
                  <div
                    className="
                absolute
                bottom-4
                left-4
                z-20
                flex
                items-center
                gap-3
                sm:bottom-6
                sm:left-6
              "
                  >
                    <span
                      className="
                  flex
                  size-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  font-mono
                  text-[10px]
                  text-white
                  backdrop-blur-md
                  sm:size-9
                "
                    >
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
                    >
                      Use case
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================
        USE CASE NAVIGATION
    ========================= */}
          <div
            className="
        order-2
        min-w-0
        border-t
        border-foreground/10
      "
          >
            {useCases.map((useCase, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={useCase.id}
                  className="border-b border-foreground/10"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="
                group
                flex
                w-full
                min-w-0
                items-start
                gap-3
                py-5
                text-left
                sm:gap-4
                sm:py-6
                lg:gap-5
              "
                  >
                    {/* Number */}
                    <span
                      className={cn(
                        `
                    mt-1
                    w-5
                    shrink-0
                    font-mono
                    text-[10px]
                    tracking-[0.15em]
                    transition-colors
                    duration-300
                    sm:w-6
                  `,
                        isActive
                          ? "text-foreground"
                          : "text-foreground/30"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className={cn(
                          `
                      font-display
                      text-base
                      leading-snug
                      tracking-[-0.03em]
                      transition-colors
                      duration-300
                      sm:text-lg
                      md:text-xl
                      lg:text-2xl
                    `,
                          isActive
                            ? "text-foreground"
                            : "text-foreground/45"
                        )}
                      >
                        {useCase.title}
                      </h3>

                      {/* Desktop description */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                        hidden
                        overflow-hidden
                        text-xs
                        leading-6
                        text-muted-foreground
                        sm:text-sm
                        lg:block
                      "
                          >
                            <span className="block pt-3">
                              {useCase.description}
                            </span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Arrow */}
                    <motion.span
                      animate={{
                        rotate: isActive ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={cn(
                        `
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-colors
                    duration-300
                    sm:size-9
                  `,
                        isActive
                          ? "border-foreground/25 text-foreground"
                          : "border-foreground/10 text-foreground/40"
                      )}
                    >
                      <ArrowUpRight
                        className="size-3.5 sm:size-4"
                        strokeWidth={1.5}
                      />
                    </motion.span>
                  </button>

                  {/* =========================
                MOBILE ACTIVE CONTENT
            ========================= */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                    overflow-hidden
                    lg:hidden
                  "
                      >
                        {/* Mobile image */}
                        <div
                          className="
                      relative
                      mb-5
                      aspect-[16/10]
                      w-full
                      overflow-hidden
                      rounded-xl
                      bg-muted
                      sm:rounded-2xl
                    "
                        >
                          {/* Grid */}
                          <div
                            className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-10
                        opacity-[0.08]
                        [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                        [background-size:28px_28px]
                      "
                          />

                          <motion.img
                            src={useCase.image}
                            alt={useCase.title}
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                      "
                          />

                          <div
                            className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-background/50
                        via-transparent
                        to-transparent
                      "
                          />

                          <div
                            className="
                        absolute
                        bottom-3
                        left-3
                        z-20
                        flex
                        items-center
                        gap-2
                      "
                          >
                            <span
                              className="
                          flex
                          size-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-black/20
                          font-mono
                          text-[10px]
                          text-white
                          backdrop-blur-md
                        "
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                              className="
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-white/70
                        "
                            >
                              Use case
                            </span>
                          </div>
                        </div>

                        {/* Mobile description */}
                        <p
                          className="
                      pb-5
                      text-xs
                      leading-6
                      text-muted-foreground
                      sm:text-sm
                    "
                        >
                          {useCase.description}
                        </p>

                        {/* Mobile features */}
                        <div className="pb-6">
                          <span
                            className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-muted-foreground/50
                      "
                          >
                            What it enables
                          </span>

                          <div className="mt-4 space-y-3">
                            {useCase.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{
                                  opacity: 0,
                                  x: 10,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: featureIndex * 0.06,
                                }}
                                className="flex gap-3"
                              >
                                <span
                                  className="
                              mt-0.5
                              flex
                              size-5
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-foreground/15
                            "
                                >
                                  <Check
                                    className="size-2.5"
                                    strokeWidth={2}
                                  />
                                </span>

                                <p
                                  className="
                              min-w-0
                              text-xs
                              leading-6
                              text-foreground/70
                            "
                                >
                                  {feature}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Section.Body>


    </Section>
  );
}
