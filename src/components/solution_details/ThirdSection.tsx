import { Check } from "lucide-react";
import Section from "../global/section/Section";

const points = [
  {
    title: "Privately deployable",
    description:
      "Deploy our products in your own VPC, on-prem environment, or through secure hosted infrastructure.",
  },
  {
    title: "Regulatory-ready",
    description:
      "Ensure compliance with auditable outputs, usage monitoring, and built-in governance tools.",
  },
  {
    title: "Fully customizable",
    description:
      "Tailor our models to your unique data, use cases, and infrastructure.",
  },
  {
    title: "Expert implementation",
    description:
      "Work with forward-deployed engineers to ensure fast, secure implementation.",
  },
];

export default function ThirdSection() {
  return (
    <Section
      className="py-16 md:py-24 lg:py-32"
      containerClassName="max-w-7xl"
    >
      <div className="space-y-12 md:space-y-16">
        {/* =====================================================
            IMAGE
        ====================================================== */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/secure-production/1600/800"
            alt="Secure production environment"
            className="
              aspect-[16/8]
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* STICKY HEADER */}
          <div className="lg:sticky lg:top-16 lg:self-start">
            <Section.Header
              label="Enterprise ready"
              title="Secure, compliant, and ready for production"
              titleclassName="
        max-w-xl
        text-3xl
        md:text-4xl
        lg:text-5xl
      "
              wantStrip={false}
            />
          </div>

          {/* CONTENT */}
          <div className="lg:pt-2">
            <div className="divide-y divide-foreground/15 border-y border-foreground/15">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="
            group
            py-5
            md:py-6
          "
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className="
                mt-0.5
                flex
                size-5
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-foreground/25
                transition-colors
                duration-300
                group-hover:border-foreground/50
              "
                    >
                      <Check className="size-3 text-foreground/60" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className="
                  text-sm
                  font-medium
                  tracking-tight
                  md:text-base
                "
                      >
                        {point.title}
                      </h3>

                      <p
                        className="
                  mt-2
                  max-w-lg
                  text-xs
                  leading-6
                  text-muted-foreground
                  md:text-sm
                "
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}