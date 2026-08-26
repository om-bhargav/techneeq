import { ArrowUpRight, Bot, Cloud, Database, Shield, Sparkles, Workflow } from "lucide-react";
import { motion } from "motion/react";
import SectionHeader from "../global/section/SectionHeader";
import Section from "../global/section/Section";

const solutions = [
  {
    id: "01",
    title: "Digital Experiences",
    description:
      "Immersive digital experiences engineered to make brands stand out.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-2",
    variant: "large",
  },
  {
    id: "02",
    title: "AI & Intelligence",
    description:
      "Intelligent systems that turn complex data into meaningful decisions.",
    icon: Bot,
    className: "md:col-span-4",
    variant: "wide",
  },
  {
    id: "03",
    title: "Technology Engineering",
    description:
      "Scalable software and infrastructure built for what's next.",
    icon: Cloud,
    className: "md:col-span-2",
    variant: "normal",
  },
  {
    id: "04",
    title: "Data & Analytics",
    description:
      "Transform your data into actionable business intelligence.",
    icon: Database,
    className: "md:col-span-2",
    variant: "normal",
  },
  {
    id: "05",
    title: "Digital Transformation",
    description:
      "Modernize operations and build connected digital ecosystems.",
    icon: Workflow,
    className: "md:col-span-3",
    variant: "bottom",
  },
  {
    id: "06",
    title: "Security & Infrastructure",
    description:
      "Resilient technology systems designed for reliability and scale.",
    icon: Shield,
    className: "md:col-span-3",
    variant: "bottom",
  },
];

export default function Solutions() {
  return (
    <Section>
      {/* Heading */}

      <SectionHeader
        label="Our Solutions"
        title="Technology that"
        highlight="moves your business forward."
        description="From intelligent systems to digital experiences, we create solutions designed around your most important challenges."
      />
      {/* Grid */}
      <Section.Body>
        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-[250px_280px_280px]">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-foreground/[0.08]
                  bg-muted/30
                  ${solution.className}
                `}
              >

                {/* Decorative background */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      h-64
                      w-64
                      rounded-full
                      bg-foreground/[0.04]
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:scale-150
                      group-hover:bg-foreground/[0.08]
                    "
                  />

                  {/* Grid */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-[0.025]
                      [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                      [background-size:32px_32px]
                    "
                  />

                  {/* Large decorative circle */}

                  <div
                    className="
                      absolute
                      -bottom-24
                      -right-20
                      h-64
                      w-64
                      rounded-full
                      border
                      border-foreground/[0.05]
                      transition-transform
                      duration-1000
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      -bottom-16
                      -right-12
                      h-44
                      w-44
                      rounded-full
                      border
                      border-foreground/[0.05]
                    "
                  />

                </div>

                {/* Content */}

                <div className="relative z-10 flex h-full flex-col p-6 md:p-7 lg:p-8">

                  {/* Icon */}

                  <div
                    className="
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-foreground/10
                      bg-background/50
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:bg-foreground
                      group-hover:text-background
                    "
                  >
                    <Icon className="size-[18px]" strokeWidth={1.5} />
                  </div>

                  {/* Text */}

                  <div className="mt-auto max-w-[320px]">

                    <div className="mb-3 text-[10px] font-mono tracking-widest text-muted-foreground">
                      {solution.id}
                    </div>
                    <h3
                      className="
                        font-display
                        text-2xl
                        leading-[0.95]
                        tracking-[-0.045em]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        sm:text-3xl
                      "
                    >
                      {solution.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-75
                        text-xs
                        leading-5
                        text-muted-foreground
                        transition-colors
                        duration-500
                        group-hover:text-foreground/60
                      "
                    >
                      {solution.description}
                    </p>

                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-foreground/10
                      opacity-50
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-foreground/30
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight className="size-4" />
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>
      </Section.Body>
    </Section>
  );
}