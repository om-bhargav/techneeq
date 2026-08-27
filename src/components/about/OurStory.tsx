import Section from "../global/section/Section";

export default function OurStory() {
  return (
    <Section>
      <Section.Header
        label="About Techneeq"
        title="We Build the Systems"
        highlight="Enterprises Run On"
        description="Techneeq is a data science, AI and custom software team helping enterprise organizations replace guesswork with engineering."
      />

      <Section.Body>
        <div className="max-md:flex max-md:flex-col-reverse md:grid gap-5 md:grid-cols-2 md:gap-16">

          {/* Story — 30% */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mt-8 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                Techneeq was founded on a simple observation: most enterprises already
                have the data they need to move faster — what they&apos;re missing is the
                engineering to put it to work. Too often, valuable data sits across
                disconnected systems, teams rely on manual processes, and important
                decisions are made without the right intelligence behind them.
              </p>

              <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                We set out to bridge that gap by bringing data science, artificial
                intelligence, and custom software engineering together under one team.
                Instead of treating technology as a collection of isolated tools, we
                approach every engagement as a systems problem — understanding the
                business objective first, designing the right architecture, and building
                reliable solutions that can operate in the real world.
              </p>

              <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                As Techneeq has grown, that principle has remained at the center of how
                we work. We partner closely with organizations to turn complex
                challenges into practical systems, from intelligent data platforms and
                AI-powered workflows to bespoke software built around the way their
                teams actually operate.
              </p>
            </div>
          </div>
          {/* Image — 70% */}
          <div className="overflow-hidden">
            <img
              src="/about.png"
              alt="Techneeq team"
              className="h-full min-h-[400px] w-full object-cover"
            />
          </div>
        </div>

      </Section.Body>
    </Section>
  )
}
