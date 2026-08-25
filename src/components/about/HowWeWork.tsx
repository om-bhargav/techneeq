import Section from "../global/section/Section";

const process = [
  {
    id: "01",
    title: "Discover",
    description:
      "We start with your business problem, not our tech stack. Scoping is built around a measurable outcome.",
  },
  {
    id: "02",
    title: "Design",
    description:
      "Architecture and solution design are reviewed against security, scale and cost from day one.",
  },
  {
    id: "03",
    title: "Build",
    description:
      "Agile delivery with visible milestones. You see working software early, not just at the end.",
  },
  {
    id: "04",
    title: "Operate",
    description:
      "We stay on for production support, monitoring and iteration — not just handoff.",
  },
];

export default function HowWeWork() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* =========================
            LEFT — STICKY SECTION HEADER
        ========================= */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Section.Header
            label="How we work"
            title="A differentiated approach, grounded in"
            highlight="clarity, speed, and reliable execution."
            description="A focused process that keeps every stage aligned with the outcome — from the first conversation to production."
            titleclassName="max-w-xl"
            paragarphClassName="max-w-lg"
          />
        </div>

        {/* =========================
            RIGHT — STACKING CARDS
        ========================= */}
        <Section.Body className="mt-0 md:mt-0">
          <div className="relative">
            {process.map((item, index) => (
              <article
                key={item.id}
                className="process-card group relative mb-6 h-50 overflow-hidden rounded-2xl bg-(--secondary-background) p-7 transition-colors duration-500 md:sticky md:min-h-[70vh] md:p-10 lg:p-12"
                style={{
                "--card-index": index,
                zIndex: index + 1,
                } as React.CSSProperties}
              >
                {/* Card content */}
                <div className="flex h-full min-h-[calc(200px-3.5rem)] flex-col md:min-h-[calc(70vh-5rem)]">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-display text-3xl font-normal tracking-[-0.04em] md:text-4xl lg:text-5xl">
                      {item.title}
                    </h3>

                    <span className="shrink-0 text-xs font-medium tracking-[0.15em] text-foreground/40">
                      {item.id}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mt-10 max-w-2xl md:mt-14">
                    <p className="text-sm leading-6 text-foreground/55 md:text-base md:leading-7">
                      {item.description}
                    </p>
                  </div>

                  {/* Large number */}
                  <div className="mt-auto flex justify-end max-md:hidden">
                    <span className="font-display text-[clamp(10rem,24vw,18rem)] font-normal leading-[0.7] tracking-[-0.08em] text-foreground/95 transition-transform duration-700 ease-out">
                      {item.id}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section.Body>
      </div>
    </Section>
  );
}