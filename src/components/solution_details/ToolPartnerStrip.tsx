import { PARTNERS } from "@/data/solutions-content";
export type Partner = {
  name: string;
  alt: string;
  src: string;
};


function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div
      title={partner.alt}
      className="group flex h-20 w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-foreground/4 px-6 shadow-[inset_0_1px_0_0_color-mix(in_oklab,var(--foreground)_10%,transparent)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-foreground/[0.07]"
    >
      <img
        src={partner.src}
        alt={partner.alt}
        className="max-h-10 shadow-none! rounded-none! max-w-full w-auto object-contain opacity-60 transition-opacity duration-300 dark:invert group-hover:opacity-100"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function ToolsPartnersStrip() {
  return (
    <section
      aria-label="Tools, partners and technology"
      className="border-t border-border bg-background/50 max-md:max-w-screen px-6 py-12 md:py-14"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="tech-label shrink-0">Tools, Partner &amp; Technology</h2>

          <div className="relative w-full overflow-hidden md:w-auto md:flex-1">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-16"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-16"
            />

            <div
              className="marquee-track flex w-max animate-marquee items-center gap-5 py-1 hover:[animation-play-state:paused]"
              style={{ willChange: "transform" }}
            >
              {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                <LogoCard key={`${partner.name}-${i}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
