"use client";

import { ArrowUpRight, Mail, MapPin, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

import Section from "../global/section/Section";
import CTA from "../home/CTA";
import PillButton from "../elements/PillButton";
import { SITE_NAME } from "@/config";


const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@techneeq.com",
    href: "mailto:info@techneeq.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Connecticut, USA",
    description: "Working with clients across the United States.",
  },
  {
    icon: Clock3,
    label: "Response time",
    value: "Within two business days",
  },
];

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

export default function Contact() {
  return (
    <main className="grid gap-8 bg-background text-foreground md:gap-20 pt-16">
      {/* =====================================================
          HERO
      ===================================================== */}

      <Section className="relative mx-auto">
        <Section.Header
          label={`Contact / ${SITE_NAME}`}
          title="Let's build something"
          highlight="worth building."
          description="Tell us what you're trying to solve. We'll help you determine what to build, how to build it and what it takes to put it into production."
          className="text-center"
          wantStrip={false}
          paragarphClassName="justify-center"
        />
      </Section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Section>
        <Section.Body>
          <div className="grid lg:grid-cols-[0.55fr_1fr] lg:gap-24">
            {/* Contact information */}
            <div>
              <Section.Header
                label="Start a conversation"
                title="Have a project in mind?"
                highlight="Let's talk."
              />

              <div className="mt-12 space-y-8">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;

                  return (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="flex items-center gap-4"
                    >
                      <Icon
                        className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                        strokeWidth={1.5}
                      />

                      <Section.Header
                        label={detail.label}
                        title={detail.value}
                        description={detail.description}
                        titleclassName="text-sm!"
                        wantStrip={false}
                        className="gap-0! mt-0"
                        paragarphClassName="text-xs! mt-0"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <motion.form
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10"
              >
                <div className="divide-y divide-foreground/10 border-y border-foreground/10">
                  {/* Name */}
                  <div className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:items-center">
                    <label
                      htmlFor="name"
                      className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      className="
            w-full
            bg-transparent
            text-sm
            outline-none
            placeholder:text-foreground/20
          "
                    />
                  </div>

                  {/* Email */}
                  <div className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:items-center">
                    <label
                      htmlFor="email"
                      className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      Work email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="
            w-full
            bg-transparent
            text-sm
            outline-none
            placeholder:text-foreground/20
          "
                    />
                  </div>

                  {/* Company */}
                  <div className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:items-center">
                    <label
                      htmlFor="company"
                      className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="
            w-full
            bg-transparent
            text-sm
            outline-none
            placeholder:text-foreground/20
          "
                    />
                  </div>

                  {/* Message */}
                  <div className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:items-start">
                    <label
                      htmlFor="message"
                      className="pt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      Project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us what you're trying to solve."
                      className="
            w-full
            resize-none
            bg-transparent
            text-sm
            leading-6
            outline-none
            placeholder:text-foreground/20
          "
                    />
                  </div>
                </div>

                <div className="mt-6 flex max-md:flex-col-reverse items-center justify-between gap-6">
                  <span className="max-w-[220px] max-md:self-center text-[10px] leading-5 text-muted-foreground">
                    We typically respond within two business days.
                  </span>

                  <PillButton
                    type="submit"
                    icon={ArrowUpRight}
                    variant="dark"
                    className="px-6 py-3 text-xs max-md:self-end"
                  >
                    Send enquiry
                  </PillButton>
                </div>
              </motion.form>
            </div>
          </div>
        </Section.Body>
      </Section>

      {/* =====================================================
          OFFICES
      ===================================================== */}

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
                      grayscale
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
                <div className="mt-6 flex items-start justify-between gap-8">
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

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTA />
    </main>
  );
}