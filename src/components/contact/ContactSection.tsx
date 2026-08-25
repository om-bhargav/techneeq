import { ArrowUpRight, Mail, MapPin, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../global/section/Section";
import PillButton from "../elements/PillButton";


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
export default function ContactSection() {
  return (
    <Section>
      <Section.Body>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Contact information */}
          <div className="lg:sticky lg:top-24">
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
                      className="mt-0 gap-0!"
                      paragarphClassName="mt-0 text-xs!"
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
              className="
    mt-10
    bg-(--secondary-background)
    px-7 py-8
    sm:px-8 sm:py-9
    lg:px-8 lg:py-8
    [clip-path:polygon(0_0,94%_0,100%_8%,100%_100%,0_100%)]
  "
            >
              <div className="space-y-7">
                {/* First + Last Name */}
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="
            mb-3 block
            font-mono text-[10px]
            uppercase tracking-[0.12em]
            text-foreground
          "
                    >
                      First name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="
            w-full
            border-b border-foreground/30
            bg-transparent
            pb-3
            text-sm
            text-foreground
            outline-none
            transition-colors
            placeholder:text-foreground/30
            focus:border-foreground
          "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="
            mb-3 block
            font-mono text-[10px]
            uppercase tracking-[0.12em]
            text-foreground
          "
                    >
                      Last name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="
            w-full
            border-b border-foreground/30
            bg-transparent
            pb-3
            text-sm
            text-foreground
            outline-none
            transition-colors
            placeholder:text-foreground/30
            focus:border-foreground
          "
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="
          mb-3 block
          font-mono text-[10px]
          uppercase tracking-[0.12em]
          text-foreground
        "
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    className="
          w-full
          border-b border-foreground/30
          bg-transparent
          pb-3
          text-sm
          text-foreground
          outline-none
          transition-colors
          placeholder:text-foreground/30
          focus:border-foreground
        "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
          mb-3 block
          font-mono text-[10px]
          uppercase tracking-[0.12em]
          text-foreground
        "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    className="
          w-full
          border-b border-foreground/30
          bg-transparent
          pb-3
          text-sm
          text-foreground
          outline-none
          transition-colors
          placeholder:text-foreground/30
          focus:border-foreground
        "
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="
          mb-3 block
          font-mono text-[10px]
          uppercase tracking-[0.12em]
          text-foreground
        "
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="
          w-full
          border-b border-foreground/30
          bg-transparent
          pb-3
          text-sm
          text-foreground
          outline-none
          transition-colors
          placeholder:text-foreground/30
          focus:border-foreground
        "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="
          mb-3 block
          font-mono text-[10px]
          uppercase tracking-[0.12em]
          text-foreground
        "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="
          w-full
          resize-none
          border-b border-foreground/30
          bg-transparent
          pb-3
          text-sm
          leading-6
          text-foreground
          outline-none
          transition-colors
          placeholder:text-foreground/30
          focus:border-foreground
        "
                  />
                </div>

                {/* Submit */}
                <PillButton
                  type="submit"
                  icon={ArrowUpRight}
                  variant="dark"
                  className="w-full justify-between px-6 py-3 text-xs"
                >
                  Send enquiry
                </PillButton>
              </div>
            </motion.form>
          </div>
        </div>
      </Section.Body>
    </Section>
  )
}
