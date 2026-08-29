"use client";

import { motion } from "framer-motion";

import Section from "../global/section/Section";
import PillButton from "../elements/PillButton";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <Section
      className="py-16 md:py-24 lg:py-28"
      containerClassName="max-w-7xl"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* LEFT CONTENT */}
        <div>
          <Section.Header
            label="Let's work together"
            title="Accelerate your AI roadmap with AI solutions for healthcare and life sciences"
            titleclassName="
              max-w-xl
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[48px]
              xl:text-[52px]
            "
            wantStrip={false}
            description="Connect with an expert to explore how our solutions can fit your stack, data and goals."
            paragarphClassName="mt-6"
          />

          <div className="mt-8 space-y-3">
            {[
              "Align AI to your workflows and use cases",
              "Choose deployment options that fit your infrastructure",
              "Move from pilot to production — safely and securely",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-foreground/75"
              >
                <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full border border-foreground/50">
                  <span className="size-1 rounded-full bg-foreground/60" />
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            rounded-2xl
            bg-(--secondary-background)
            px-7 py-8
            sm:px-8 sm:py-9
            lg:px-8 lg:py-8
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
              variant="dark"
              icon={ArrowUpRight}
              className="w-full justify-between px-6 py-3 text-xs"
            >
              Send enquiry
            </PillButton>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}