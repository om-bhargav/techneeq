import { useState } from "react";
import { ArrowUpRight, Activity, Boxes, Database, BarChart3, BrainCircuit, Code2 } from "lucide-react";
import SectionHeader from "@/components/global/section/SectionHeader";

const intelligenceLayers = [
  {
    id: "01",
    title: "Active Intelligence",
    keyword: "INGEST",
    subtitle: "Live interconnected data",
    description:
      "Replacing static BI with real-time data integration and live KPIs.",
    icon: Activity,
  },
  {
    id: "02",
    title: "Digital Transformation",
    keyword: "INTEGRATE",
    subtitle: "Fragmented systems becoming one ecosystem",
    description:
      "Architecting connected digital growth engines to scale customer engagement.",
    icon: Boxes,
  },
  {
    id: "03",
    title: "Data Engineering & DataOps",
    keyword: "PIPELINE",
    subtitle: "Data pipeline",
    description:
      "Implementing hybrid data delivery, warehouse automation, data transformation and application automation.",
    icon: Database,
  },
  {
    id: "04",
    title: "Analytics Services",
    keyword: "ANALYZE",
    subtitle: "Dynamic visualization",
    description:
      "Visualization, augmented analytics and embedded experiences that put the number inside the workflow.",
    icon: BarChart3,
  },
  {
    id: "05",
    title: "Conversational AI and Machine Learning",
    keyword: "REASON",
    subtitle: "Neural intelligence network",
    description:
      "Forecasts, classifiers and assistants that run in production and are measured against a business metric.",
    icon: BrainCircuit,
  },
  {
    id: "06",
    title: "Custom Software Development",
    keyword: "DELIVER",
    subtitle: "Modular application architecture",
    description:
      "Apps that solve business problems and deliver engaging experiences on Microsoft .NET, Azure, React, Angular and low-code platforms.",
    icon: Code2,
  },
];

export default function Intelligence() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeLayer = intelligenceLayers[activeIndex];
  const ActiveIcon = activeLayer.icon;

  return (
    <section className="bg-background px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}

        <SectionHeader
          label="03 — The Intelligence Engine"
          title="Six layers of one system."
          description="Capabilities engineered for speed. We structure every deployment around one metric: how fast can we automate your next critical decision?"
        />

        {/* Engine */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* Layer navigation */}

          <div className="min-w-0">

            {/* Mobile selector */}

            <div className="mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {intelligenceLayers.map((layer, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      shrink-0 rounded-full border px-4 py-2
                      text-[11px] uppercase tracking-[0.12em]
                      transition
                      ${
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/10 text-muted-foreground"
                      }
                    `}
                  >
                    {layer.keyword}
                  </button>
                );
              })}
            </div>

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
                        ${
                          active
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
                          ${
                            active
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
                          ${
                            active
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

          <div className="relative min-h-[440px] overflow-hidden rounded-[28px] border border-foreground/[0.08] bg-muted/20">

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

            <div className="relative flex h-full flex-col justify-between p-7 md:p-10 lg:p-12">

              {/* Top */}

              <div className="flex items-start justify-between">

                <div className="flex size-12 items-center justify-center rounded-2xl border border-foreground/10 bg-background/60">
                  <ActiveIcon
                    className="size-5"
                    strokeWidth={1.4}
                  />
                </div>

                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/50">
                  LAYER {activeLayer.id}
                </span>

              </div>

              {/* Main */}

              <div className="mt-20">

                <div className="mb-5 flex items-center gap-3">

                  <span className="h-px w-8 bg-foreground/30" />

                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    {activeLayer.keyword}
                  </span>

                </div>

                <h3 className="max-w-2xl font-display text-4xl leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                  {activeLayer.subtitle}
                </h3>

                <p className="mt-7 max-w-lg text-sm leading-6 text-muted-foreground">
                  {activeLayer.description}
                </p>

              </div>

              {/* Bottom */}

              <div className="mt-14 flex items-end justify-between border-t border-foreground/[0.08] pt-5">

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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}