import Section from "../global/section/Section";
import { aboutPage } from "@/data/about";
export default function OurStory() {
  return (
    <Section>
      <Section.Header
        label={aboutPage.ourStory.label}
        title={aboutPage.ourStory.title}
        highlight={aboutPage.ourStory.highlight}
        description={aboutPage.ourStory.description}
      />

      <Section.Body>
        <div className="max-md:flex max-md:flex-col-reverse md:grid gap-5 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-between">
            <div>
              {aboutPage.ourStory.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-6 text-sm leading-7 text-muted-foreground first:mt-8 md:text-base md:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <img
              src={aboutPage.ourStory.image.src}
              alt={aboutPage.ourStory.image.alt}
              className="h-full min-h-100 w-full object-cover"
            />
          </div>
        </div>
      </Section.Body>
    </Section>
  )
}
