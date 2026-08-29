import Section from "../global/section/Section";
import { aboutPage } from "@/data/about";

export default function HowWeWork() {
  const { howWeWork } = aboutPage;

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* LEFT — STICKY SECTION HEADER */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Section.Header
            label={howWeWork.label}
            title={howWeWork.title}
            highlight={howWeWork.highlight}
            description={howWeWork.description}
            titleclassName="max-w-xl"
            paragarphClassName="max-w-lg"
          />
        </div>

        {/* RIGHT — STACKING CARDS */}
        <Section.Body className="mt-0 md:mt-0">
          <div className="relative">
            {howWeWork.process.map((item, index) => (
              <article
                key={item.id}
                className="process-card group relative mb-6 h-50 overflow-hidden rounded-2xl bg-(--secondary-background) p-7 transition-colors duration-500 md:sticky md:min-h-[70vh] md:p-10 lg:p-12"
                style={
                  {
                    "--card-index": index,
                    zIndex: index + 1,
                  } as React.CSSProperties
                }
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