import { useEffect, useState } from "react";
import {
  ArrowUpRight,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Section from "@/components/global/section/Section";
import SectionHeader from "../global/section/SectionHeader";
import { services } from "@/data/home";



export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Section className="overflow-hidden">

      {/* ---------------------------------------------
          HEADER
      --------------------------------------------- */}

      <SectionHeader
        label="How We Engage"
        title="Work with us"
        highlight="the way that fits your team."
        description="Every business is at a different stage. Pick the engagement model that matches where you are." className="mb-6"
      />

      {/* ---------------------------------------------
          SERVICE CONTENT
      --------------------------------------------- */}
      <Section.Body className="overflow-hidden">
        <div className="grid gap-12 lg:gap-16 mb-5">

          {/* Service navigation */}

          <div className="lg:pt-2 overflow-hidden">
            <nav className="hidden lg:block">
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveIndex(index)}
                      className={`
              shrink-0
              rounded-full
              border
              px-4
              py-2
              text-[11px]
              uppercase
              tracking-[0.12em]
              transition-all
              duration-300
              ${isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/10 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                        }
            `}
                    >
                      {service.category}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* ---------------------------------------------
            CURRENT SERVICE ONLY
        --------------------------------------------- */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeService.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="
        relative
        min-h-100
        overflow-hidden
        rounded-[24px]
        border
        border-foreground/[0.08]
        bg-muted/30
        p-7
        sm:p-9
        lg:p-10
      "
              >
                {/* 
        Changed to `md:items-center` (or you can use md:items-start) 
        so the fixed 400px height isn't overridden by flex-stretch 
      */}
                <div className="relative z-10 flex min-h-100 flex-col md:flex-row md:items-center md:justify-between gap-8">

                  {/* Left Column (Text & Button) */}
                  <div className="flex flex-1 flex-col h-full justify-center">
                    {/* Top */}
                    <div className="flex items-start justify-between md:justify-start md:gap-8 mb-auto">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {activeService.category}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground/50">
                        {activeService.id}
                      </span>
                    </div>

                    {/* Main */}
                    <div className="mt-8 max-w-[500px]">
                      {/* Icon */}
                      <div className="mb-8 flex size-11 items-center justify-center rounded-xl border border-foreground/10 bg-background/60">
                        <activeService.icon className="size-5" strokeWidth={1.4} />
                      </div>

                      {/* Mobile Image */}
                      <div className="mb-8 relative rounded-xl shadow-md w-full lg:hidden overflow-hidden md:max-w-[320px] lg:max-w-[400px]">
                        <img
                          src={activeService.image}
                          alt={activeService.title}
                          className="aspect-video w-full object-cover"
                        />
                      </div>

                      <h3 className="font-display text-2xl leading-[0.95] tracking-[-0.045em] sm:text-4xl">
                        {activeService.title}
                      </h3>

                      <p className="mt-6 text-xs md:text-sm leading-6 text-muted-foreground">
                        {activeService.description}
                      </p>

                      <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-85">
                        Talk to us about this
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (The Image) */}
                  {/* 
                      Applied exact dimensions: w-[600px] h-[400px].
                      Added `shrink-0` so the text column doesn't squish the image width.
                    */}
                  <div className="relative hidden lg:block rounded-xl shadow-md overflow-hidden w-[600px] h-[400px] shrink-0">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Section.Body>
    </Section>
  );
}