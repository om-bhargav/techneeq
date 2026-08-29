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
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* =========================
            CONTENT
        ========================= */}
        <div className="flex flex-col max-md:justify-center">
          <Section.Header
            label={label}
            title={title}
            description={description}
            className="gap-0 max-md:justify-center"
            paragarphClassName="mt-6"
            wantStrip={false}
          />
          <a
            href={buttonHref}
            className="
              group
              mt-8
              inline-flex
              items-center
              md:self-start
              justify-center
              rounded-full
              bg-foreground
              px-6
              py-3.5
              text-sm
              font-medium
              text-background
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:opacity-90
            "
          >
            {buttonText}

            <ArrowUpRight
              className="
                ml-2
                size-4
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
        <div className="relative">
        <div
          className="
            relative
            aspect-4/3
            w-full
            overflow-hidden
            rounded-[24px]
            bg-muted
            md:aspect-5/4
          "
        >
            <img
              src={imageSrc}
              alt=""
              className="
                absolute
                inset-0
                size-full
                object-cover
              "
            />

            {/* Subtle image overlay */}
            <div
              className="
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