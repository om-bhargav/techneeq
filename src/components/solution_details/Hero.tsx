import { ArrowUpRight } from "lucide-react";

import Section from "../global/section/Section";

export interface HeroProps {
  label?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
}

export default function Hero({
  label = "Healthcare and Life Sciences",
  title = "Transform care and discovery with enterprise AI",
  description = "Streamline operations, surface insights from clinical data, and accelerate research with AI solutions built for the complexities of healthcare and life sciences.",
  buttonText = "Request a demo",
  buttonHref = "/contact",
  imageSrc = "https://picsum.photos/seed/healthcare-ai/1000/1000",
}: HeroProps) {
  return (
    <Section>
      <div
        className="
          grid
          min-w-0
          items-center
          gap-10
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
          xl:gap-20
        "
      >
        {/* =========================
            CONTENT
        ========================= */}
        <div className="min-w-0 flex flex-col">
          <Section.Header
            label={label}
            title={title}
            description={description}
            className="gap-0 max-md:justify-center"
            paragarphClassName="mt-5 sm:mt-6"
            wantStrip={false}
          />

          <a
            href={buttonHref}
            className="
              group
              mt-7
              inline-flex
              w-fit
              max-w-full
              items-center
              justify-center
              rounded-full
              bg-foreground
              px-5
              py-3
              text-sm
              font-medium
              text-background
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:opacity-90
              sm:mt-8
              sm:px-6
              sm:py-3.5
              max-md:self-center
              md:self-start
            "
          >
            <span className="truncate">{buttonText}</span>

            <ArrowUpRight
              className="
                ml-2
                size-4
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>

        {/* =========================
            IMAGE / VISUAL
        ========================= */}
        <div className="min-w-0 w-full">
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              bg-muted
              h-[260px]
              sm:h-[340px]
              md:h-auto
              md:aspect-[5/4]
              lg:aspect-[5/4]
              lg:rounded-[24px]
            "
          >
            <img
              src={imageSrc}
              alt=""
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Subtle image overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/15
                via-transparent
                to-white/5
              "
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
