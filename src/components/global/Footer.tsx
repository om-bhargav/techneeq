"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {contactPage} from "@/data/contact";
import PillButton from "@/components/elements/PillButton";
import { SITE_NAME } from "@/config";

const footerLinks = {
  explore: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export default function Footer() {
  const {EMAIL,PHONE} = contactPage;
  return (
    <footer className="bg-foreground px-6 pb-6 pt-20 text-background md:px-10 md:pb-10 md:pt-28 lg:px-14 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        {/* Main CTA */}
        <div className="border-b border-background/15 pb-20 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-background/40"
              >
                Have a project in mind?
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-6
                  max-w-5xl
                  font-display
                  text-5xl
                  font-normal
                  leading-[0.9]
                  tracking-[-0.05em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[100px]
                "
              >
                Let's build
                <br />
                <span className="text-background/35">
                  something meaningful.
                </span>
              </motion.h2>
            </div>

            <PillButton
              href="/contact"
              icon={ArrowUpRight}
              variant="default"
              className="
                shrink-0
                text-background
                hover:border-transparent
              "
            >
              Start a conversation
            </PillButton>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="grid gap-14 py-14 md:grid-cols-3 md:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="text-lg uppercase font-medium tracking-[-0.03em]">
              {SITE_NAME}
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-background/45">
              Building thoughtful digital experiences where technology,
              design, and intelligence meet.
            </p>
          </div>

          {/* Explore */}
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-background/30">
              Explore
            </span>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.explore.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-sm
                    text-background/70
                    transition-colors
                    duration-300
                    hover:text-background
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-background/30">
              Connect
            </span>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-sm
                    text-background/70
                    transition-colors
                    duration-300
                    hover:text-background
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-background/30">
              Contact
            </span>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="
                  text-sm
                  text-background/70
                  transition-colors
                  duration-300
                  hover:text-background
                "
              >
                {EMAIL}
              </a>

              <a
                href={`tel:${PHONE}`}
                className="
                  text-sm
                  text-background/70
                  transition-colors
                  duration-300
                  hover:text-background
                "
              >
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-background/15 pt-6 text-[10px] font-medium uppercase tracking-[0.15em] text-background/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {SITE_NAME}</span>

          <div className="flex gap-6">
            <a
              href="/privacy"
              className="transition-colors hover:text-background"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-background"
            >
              Terms
            </a>
          </div>

          <span>Designed & engineered with intent</span>
        </div>
      </div>
    </footer>
  );
}