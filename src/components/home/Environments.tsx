// "use client";

// import { useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// import Section from "../global/section/Section";

// const environments = [
//   {
//     id: "01",
//     shortName: "Healthcare",
//     name: "Healthcare & Life Sciences",
//     eyebrow: "PATIENTS · RESEARCH · CARE",
//     description:
//       "Connect clinical, operational and research data to improve decisions across the care journey.",
//     points: [
//       "Clinical intelligence",
//       "Research analytics",
//       "Patient journey data",
//       "Operational visibility",
//     ],
//   },
//   {
//     id: "02",
//     shortName: "Financial",
//     name: "Financial Services",
//     eyebrow: "RISK · CAPITAL · PERFORMANCE",
//     description:
//       "Bring financial data together to improve risk visibility, forecasting and decision-making.",
//     points: [
//       "Risk intelligence",
//       "Financial analytics",
//       "Forecasting",
//       "Regulatory reporting",
//     ],
//   },
//   {
//     id: "03",
//     shortName: "Insurance",
//     name: "Insurance",
//     eyebrow: "POLICIES · CLAIMS · LOSS",
//     description:
//       "Underwriting and claims intelligence, loss modeling, and automation of document-heavy workflows.",
//     points: [
//       "Underwriting intelligence",
//       "Loss modeling",
//       "Document automation",
//       "Claims cycle analytics",
//     ],
//   },
//   {
//     id: "04",
//     shortName: "Manufacturing",
//     name: "Manufacturing",
//     eyebrow: "OPERATIONS · SUPPLY · QUALITY",
//     description:
//       "Connect production, supply chain and operational data to create a clearer view of performance.",
//     points: [
//       "Production intelligence",
//       "Supply chain analytics",
//       "Quality monitoring",
//       "Predictive operations",
//     ],
//   },
//   {
//     id: "05",
//     shortName: "Retail",
//     name: "Retail & Consumer",
//     eyebrow: "CUSTOMER · DEMAND · COMMERCE",
//     description:
//       "Turn fragmented customer and commercial data into intelligence that improves every interaction.",
//     points: [
//       "Customer intelligence",
//       "Demand forecasting",
//       "Commercial analytics",
//       "Personalization",
//     ],
//   },
//   {
//     id: "06",
//     shortName: "Public Sector",
//     name: "Public Sector",
//     eyebrow: "CITIZENS · SERVICES · GOVERNANCE",
//     description:
//       "Create trusted data foundations for better public services, transparency and decision-making.",
//     points: [
//       "Citizen intelligence",
//       "Service analytics",
//       "Program monitoring",
//       "Governance reporting",
//     ],
//   },
// ];

// export default function Environments() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <Section>
//       <Section.Header
//         label="Environments"
//         title="One intelligence architecture."
//         highlight="Multiple business environments."
//         description="The architecture rarely changes across sectors — the constraints do. Regulation, data latency tolerance and who is allowed to see what shape every engagement, so we start from your domain's rules rather than a reference diagram."
//         className="max-w-4xl"
//       />

//       <Section.Body>
//         <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
//           {/* Side index */}
//           <div className="hidden lg:block">
//             <div className="sticky top-32">
//               <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/30">
//                 Operating environments
//               </div>

//               <div className="relative mt-8 h-px w-16 bg-foreground/20">
//                 <motion.div
//                   layoutId="environment-line"
//                   className="absolute inset-y-0 left-0 w-full bg-foreground"
//                 />
//               </div>

//               <motion.div
//                 key={activeIndex}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-16"
//               >
//                 <span className="font-mono text-[80px] leading-none tracking-[-0.08em] text-foreground/[0.08]">
//                   {environments[activeIndex].id}
//                 </span>

//                 <p className="mt-5 max-w-[220px] text-xs leading-5 text-muted-foreground">
//                   {environments[activeIndex].eyebrow}
//                 </p>
//               </motion.div>
//             </div>
//           </div>

//           {/* Environment list */}
//           <div className="border-t border-foreground/10">
//             {environments.map((environment, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <motion.article
//                   key={environment.id}
//                   onMouseEnter={() => setActiveIndex(index)}
//                   onFocus={() => setActiveIndex(index)}
//                   className="group relative border-b border-foreground/10"
//                 >
//                   {/* Active background */}
//                   <motion.div
//                     initial={false}
//                     animate={{
//                       opacity: isActive ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.35 }}
//                     className="pointer-events-none absolute inset-0 "
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setActiveIndex(index)}
//                     className="relative flex w-full items-center gap-5 py-7 text-left md:py-9"
//                   >
//                     {/* Number */}
//                     <span
//                       className={`w-8 shrink-0 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${
//                         isActive
//                           ? "text-foreground"
//                           : "text-foreground/25"
//                       }`}
//                     >
//                       {environment.id}
//                     </span>

//                     {/* Name */}
//                     <h3
//                       className={`min-w-0 flex-1 font-display text-2xl leading-none tracking-[-0.04em] transition-transform duration-500 sm:text-3xl md:text-4xl ${
//                         isActive
//                           ? "translate-x-2 text-foreground"
//                           : "text-foreground/45"
//                       }`}
//                     >
//                       {environment.name}
//                     </h3>

//                     {/* Arrow */}
//                     <motion.span
//                       animate={{
//                         rotate: isActive ? 45 : 0,
//                         x: isActive ? -4 : 0,
//                       }}
//                       transition={{
//                         duration: 0.35,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                       className="flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/10"
//                     >
//                       <ArrowUpRight
//                         className="size-4"
//                         strokeWidth={1.5}
//                       />
//                     </motion.span>
//                   </button>

//                   <AnimatePresence initial={false}>
//                     {isActive && (
//                       <motion.div
//                         initial={{
//                           height: 0,
//                           opacity: 0,
//                         }}
//                         animate={{
//                           height: "auto",
//                           opacity: 1,
//                         }}
//                         exit={{
//                           height: 0,
//                           opacity: 0,
//                         }}
//                         transition={{
//                           height: {
//                             duration: 0.5,
//                             ease: [0.22, 1, 0.36, 1],
//                           },
//                           opacity: {
//                             duration: 0.25,
//                           },
//                         }}
//                         className="overflow-hidden"
//                       >
//                         <div className="grid gap-8 pb-8 pl-[52px] pr-2 md:grid-cols-[1fr_1fr] md:gap-12 md:pb-10">
//                           {/* Description */}
//                           <motion.div
//                             initial={{ y: 15, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ delay: 0.08 }}
//                           >
//                             <span className="font-mono text-[9px] tracking-[0.18em] text-foreground/30">
//                               {environment.eyebrow}
//                             </span>

//                             <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
//                               {environment.description}
//                             </p>
//                           </motion.div>

//                           {/* Capabilities */}
//                           <motion.div
//                             initial={{ y: 15, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ delay: 0.14 }}
//                             className="grid grid-cols-2 gap-x-5 gap-y-4"
//                           >
//                             {environment.points.map((point) => (
//                               <div
//                                 key={point}
//                                 className="flex items-start gap-2 text-[10px] uppercase tracking-[0.08em] text-foreground/55"
//                               >
//                                 <span className="mt-[5px] size-1 shrink-0 rounded-full bg-foreground/40" />
//                                 <span>{point}</span>
//                               </div>
//                             ))}
//                           </motion.div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>
//       </Section.Body>
//     </Section>
//   );
// }
"use client";

import { useRef, useState } from "react";
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

const environments = [
  {
    id: "01",
    name: "Healthcare & Life Sciences",
    eyebrow: "PATIENTS · RESEARCH · CARE",
    description:
      "Connect clinical, operational and research data to improve decisions across the care journey.",
    image: "https://picsum.photos/1200/1600?random=1",
  },
  {
    id: "02",
    name: "Financial Services",
    eyebrow: "RISK · CAPITAL · PERFORMANCE",
    description:
      "Bring financial data together to improve risk visibility, forecasting and decision-making.",
    image: "https://picsum.photos/1200/1600?random=2",
  },
  {
    id: "03",
    name: "Insurance",
    eyebrow: "POLICIES · CLAIMS · LOSS",
    description:
      "Underwriting and claims intelligence, loss modeling, and automation of document-heavy workflows.",
    image: "https://picsum.photos/1200/1600?random=3",
  },
  {
    id: "04",
    name: "Manufacturing",
    eyebrow: "OPERATIONS · SUPPLY · QUALITY",
    description:
      "Connect production, supply chain and operational data to create a clearer view of performance.",
    image: "https://picsum.photos/1200/1600?random=4",
  },
  {
    id: "05",
    name: "Retail & Consumer",
    eyebrow: "CUSTOMER · DEMAND · COMMERCE",
    description:
      "Turn fragmented customer and commercial data into intelligence that improves every interaction.",
    image: "https://picsum.photos/1200/1600?random=5",
  },
  {
    id: "06",
    name: "Public Sector",
    eyebrow: "CITIZENS · SERVICES · GOVERNANCE",
    description:
      "Create trusted data foundations for better public services, transparency and decision-making.",
    image: "https://picsum.photos/1200/1600?random=6",
  },
];

export default function Environments() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (environments.length - 1));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const activeEnvironment = environments[activeIndex];

  const handleScrollTo = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current as HTMLDivElement;
    const { top, height } = container.getBoundingClientRect();
    const targetY =
      window.scrollY + top + height * ((index + 0.25) / environments.length);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <Section>
      <Section.Header
        label="Environments"
        title="One intelligence architecture."
        highlight="Multiple business environments."
        description="The architecture rarely changes across sectors — the constraints do. Regulation, data latency tolerance and who is allowed to see what shape every engagement, so we start from your domain's rules rather than a reference diagram."
      />

      <Section.Body
        ref={containerRef}
        // You can adjust the * 100 multiplier down (e.g. * 80) if the scroll length feels too long on large monitors
        style={{ height: `${environments.length * 100}vh` }}
        className="relative w-full"
      >
        {/* FIX: Removed `min-h-screen`, changed top-0 to top-24, added padding. 
            Now it hugs the content's natural height instead of forcing empty space! */}
        <div className="sticky top-24 flex w-full flex-col justify-center overflow-hidden pb-24 pt-8 md:pt-12">
          
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
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-10 md:mt-0">
                <div className="border-t border-foreground/15">
                  {environments.map((environment, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={environment.id}
                        onClick={() => handleScrollTo(index)}
                        className={`group flex w-full items-center border-b border-foreground/15 py-3 text-left transition-colors ${
                          isActive
                            ? "text-foreground"
                            : "text-foreground/50 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`w-10 font-mono text-[10px] ${
                            isActive ? "text-foreground" : "text-foreground/30"
                          }`}
                        >
                          {environment.id}
                        </span>
                        <span className="flex-1 text-sm">
                          {environment.name}
                        </span>
                        <span
                          className={`h-px bg-foreground transition-all duration-500 ${
                            isActive ? "w-8" : "w-0 group-hover:w-8"
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
            <div className="relative h-[300px] w-full overflow-hidden rounded-none! md:h-[550px]">
              {environments.map((env, index) => (
                <ScrollImage
                  key={env.id}
                  env={env}
                  index={index}
                  total={environments.length}
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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
    </motion.div>
  );
}