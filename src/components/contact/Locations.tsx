import { ArrowUpRight} from "lucide-react";
import { motion } from "framer-motion";

import Section from "../global/section/Section";

const offices = [
  {
    id: "01",
    country: "United States",
    city: "Connecticut, USA",
    description:
      "North American operations and client partnerships.",
    bbox: "-73.2,41.2,-72.5,42.0",
  },
  {
    id: "02",
    country: "India",
    city: "India",
    description:
      "Engineering and delivery operations.",
    bbox: "77.5,12.8,78.2,13.4",
  },
];

export default function Locations() {
  return (
      <Section>
        <Section.Header
          label="Locations"
          title="Two locations."
          highlight="One engineering standard."
          description="Our teams operate across India and the United States, working together across time zones to keep projects moving."
        />

        <Section.Body>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
            {offices.map((office, index) => (
              <motion.article
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group"
              >
                {/* Map */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                  <iframe
                    title={`${office.country} office map`}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${office.bbox}`}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      opacity-80
                      transition-all
                      duration-700
                      group-hover:scale-[1.02]
                      group-hover:opacity-100
                    "
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute left-4 top-4 bg-background/90 px-3 py-2 backdrop-blur-sm">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em]">
                      {office.id} / {office.country}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6 p-5 pt-0 flex items-start justify-between gap-8">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      Office / {office.id}
                    </span>

                    <h3 className="mt-3 font-display text-2xl tracking-[-0.04em]">
                      {office.city}
                    </h3>

                    <p className="mt-2 max-w-sm text-xs leading-5 text-muted-foreground">
                      {office.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className="
                      size-4
                      shrink-0
                      text-muted-foreground
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    strokeWidth={1.5}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </Section.Body>
      </Section>
  )
}
