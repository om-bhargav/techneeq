"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Section from "../global/section/Section";
import CTA from "../home/CTA";
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

const values = [
  {
    id: "01",
    title: "Precision over hype",
    description:
      "We say no to projects AI won't actually help.",
  },
  {
    id: "02",
    title: "Transparency",
    description:
      "Clear scope, clear timelines, no surprise change orders.",
  },
  {
    id: "03",
    title: "Craftsmanship",
    description:
      "Production-grade code and architecture, every time.",
  },
  {
    id: "04",
    title: "Long-term thinking",
    description:
      "We build systems built to be maintained, not just demoed.",
  },
];

const team = [
  {
    id: "01",
    name: "Team Member",
    role: "Founder / CEO",
    description:
      "Leadership focused on engineering, data and building systems that create measurable business outcomes.",
  },
  {
    id: "02",
    name: "Team Member",
    role: "Technical Lead",
    description:
      "Engineering leadership across data architecture, AI and production software systems.",
  },
  {
    id: "03",
    name: "Team Member",
    role: "Product Lead",
    description:
      "Bridging business requirements, product strategy and technical execution.",
  },
];

export default function About() {
  return (
    <main className="bg-background text-foreground grid gap-8 md:gap-20 pt-16">

      {/* =====================================================
          HERO
      ===================================================== */}

      <Section className="relative mx-auto">
       <Section.Header
            label="About / Techneeq"
            title="We build the systems"
            highlight="enterprises run on."
            description="Techneeq is a data science, AI and custom software team helping enterprise organizations replace guesswork with engineering."
            className="text-center"
            wantStrip={false}
            paragarphClassName="justify-center"
          />
      </Section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <Section>
          <Section.Header
            label="Our story"
            title="Most enterprises already have the data they need."
            highlight="What they are missing is the engineering to put it to work."
            description="Techneeq was founded on a simple observation: enterprises don't need more data. They need better systems for turning the data they already have into decisions."
          />
        <Section.Body>

          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_0.45fr] md:gap-20">
            {/* Story */}
            <div className="max-w-2xl space-y-6 text-muted-foreground">
              <p>
                Techneeq was founded on a simple observation: most enterprises
                already have the data they need to move faster — what they are
                missing is the engineering to put it to work.
              </p>

              <p>
                We build the systems that connect data, intelligence and software
                to the decisions businesses actually need to make.
              </p>

              <p>
                Our engineering background shapes how we work. We care about
                architecture, reliability, security and long-term maintainability
                just as much as the initial idea.
              </p>
            </div>

            {/* Sticky technical marker */}
            <div className="hidden md:block">
              <div className="sticky top-32">
                <div className="aspect-square border border-border p-5">
                  <div
                    className="
                relative flex h-full items-center justify-center
                overflow-hidden bg-muted/20
                [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
                [background-size:32px_32px]
              "
                  >
                    <div className="text-center">
                      <span className="font-mono text-muted-foreground">
                        TECHNEEQ
                      </span>

                      <div className="mt-5 font-mono tracking-[-0.08em]">
                        TQ
                      </div>

                      <div className="mx-auto mt-5 h-px w-12 bg-border" />

                      <span className="mt-4 block font-mono text-muted-foreground">
                        ENGINEERED SYSTEMS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section.Body>
      </Section>


      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <Section>
        <Section.Body>
          <Section.Header
            label="How we work"
            title="From business problem"
            highlight="to production system."
            description="Every engagement follows a simple principle: start with the outcome, engineer backwards from it, and stay accountable after launch."
          />

          <div className="mt-16 border-t border-border">
            {process.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
            group
            grid
            gap-4
            border-b
            border-border
            py-6
            md:grid-cols-[60px_1fr_auto]
            md:items-center
            md:gap-8
            md:py-8
          "
              >
                {/* Number */}
                <span className="font-mono text-muted-foreground">
                  {item.id}
                </span>

                {/* Content */}
                <div className="grid gap-2 md:grid-cols-[0.7fr_1fr] md:items-center md:gap-12">
                  <h3 className="font-display tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h3>

                  <p className="max-w-md text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="
              hidden
              size-4
              text-muted-foreground
              transition-transform
              duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
              md:block
            "
                  strokeWidth={1.5}
                />
              </motion.article>
            ))}
          </div>
        </Section.Body>
      </Section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <Section>
        <Section.Header
          label="Our values"
          title="How we think"
          highlight="determines what we build."
          description="The principles behind every decision we make, from the first conversation to the systems we put into production."
        />
        <Section.Body>

          <div className="mt-16 border-t border-border">
            {values.map((value, index) => (
              <motion.article
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
            group
            grid
            gap-4
            border-b
            border-border
            py-6
            md:grid-cols-[60px_1fr_auto]
            md:items-center
            md:gap-8
            md:py-8
          "
              >
                {/* Number */}
                <span
                  className="
              font-mono
              text-[10px]
              text-muted-foreground
              transition-colors
              duration-300
              group-hover:text-foreground
            "
                >
                  {value.id}
                </span>

                {/* Content */}
                <div className="grid gap-2 md:grid-cols-[0.7fr_1fr] md:items-center md:gap-12">
                  <h3
                    className="
                font-display
                text-2xl
                tracking-[-0.035em]
                transition-transform
                duration-500
                group-hover:translate-x-2
                md:text-3xl
              "
                  >
                    {value.title}
                  </h3>

                  <p className="max-w-md text-sm leading-6 text-muted-foreground">
                    {value.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="
              hidden
              size-4
              text-muted-foreground
              transition-transform
              duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
              md:block
            "
                  strokeWidth={1.5}
                />
              </motion.article>
            ))}
          </div>
        </Section.Body>
      </Section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <Section>
        <Section.Header
          label="Leadership"
          title="People who build"
          highlight="the system."
          description="A small senior team focused on engineering quality, technical clarity and measurable outcomes."
        />
        <Section.Body>


          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {team.map((member) => (
              <motion.article
                key={member.id}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-background p-6 md:p-8"
              >

                {/* Photo placeholder */}
                <div
                  className="
                    relative
                    aspect-4/5
                    overflow-hidden
                    border
                    border-border
                    bg-muted/30
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-50
                      [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
                      [background-size:24px_24px]
                    "
                  />

                  <div className="absolute bottom-5 left-5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      {member.id} / PROFILE
                    </span>
                  </div>
                </div>

                <div className="mt-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-display text-2xl tracking-[-0.04em]">
                        {member.name}
                      </h3>

                      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        {member.role}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="size-4 text-muted-foreground"
                      strokeWidth={1.5}
                    />

                  </div>

                  <p className="mt-5 text-xs leading-5 text-muted-foreground">
                    {member.description}
                  </p>

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