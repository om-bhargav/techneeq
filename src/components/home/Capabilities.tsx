"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";

import Section from "../global/section/Section";
import { capabilityGroups } from "@/data/home";
import { Button } from "../ui/button";

/**
 * CAPABILITIES — "what can Techneeq actually deliver?"
 *
 * Presented as a horizontal rail. The active slide opens to reveal its
 * description; the rest stay collapsed to their title so the row reads
 * as a set of options rather than four competing blocks of copy.
 */
export default function Capabilities() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <Section id="capabilities">
      <Section.Header
        label="Capabilities"
        title="Four capability groups."
        highlight="One delivery team."
        description="Most engagements draw on more than one of these. They are built and run by the same team, so the seams between them are ours to solve, not yours."
      />

      <Section.Body>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onProgress={(_, value) => setProgress(value)}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-md:max-w-screen! grid!"
        >
          {capabilityGroups.map((group, index) => {
            const Icon = group.icon;
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={group.id} className="h-auto">
                <article
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className="
                    group relative flex h-[420px] cursor-pointer flex-col
                    overflow-hidden rounded-[22px]
                    border border-foreground/[0.08] bg-muted/30
                    md:h-[460px]
                  "
                >
                  {/* Technical background — same treatment as the rest of the site */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                      className="
                        absolute inset-0 opacity-[0.025]
                        [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                        [background-size:32px_32px]
                      "
                    />

                    <div
                      className="
                        absolute -bottom-24 -right-20 h-64 w-64 rounded-full
                        border border-foreground/[0.05]
                        transition-transform duration-1000
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Icon + number */}
                  <div className="relative z-10 flex items-start justify-between p-6 md:p-7">
                    <div
                      className="
                        flex size-11 items-center justify-center rounded-xl
                        border border-foreground/10 bg-background/50 backdrop-blur-sm
                        transition-all duration-500
                        group-hover:-translate-y-1
                      "
                    >
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>

                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      {group.id}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="relative z-10 mt-auto p-4 md:p-5">
                    <div
                      className="
                        rounded-[16px] border border-foreground/[0.08]
                        bg-background/80 p-5 backdrop-blur-sm
                        transition-colors duration-500
                        md:p-6
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl leading-[1.05] tracking-[-0.03em] sm:text-2xl">
                          {group.title}
                        </h3>

                        <Button variant={"outline"} className={"rounded-full h-10 w-10"}>
                          <ArrowUpRight className="size-4 group-hover:rotate-45 transition-all" strokeWidth={1.5} />
                        </Button>
                      </div>

                      <div
                        className={`
    grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                          }
    lg:grid-rows-[0fr] lg:opacity-0
    lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100
  `}
                      >
                        <p className="mt-3 overflow-hidden text-xs leading-6 text-muted-foreground md:text-sm">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Progress line + arrows */}
        <div className="mt-10 flex items-center gap-6">
          <div className="h-px min-w-0 flex-1 bg-foreground/10">
            <div
              className="h-px bg-foreground transition-[width] duration-500 ease-out"
              style={{
                width: `${Math.max(progress, 0.08) * 100}%`,
              }}
            />
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button variant={"outline"} className={"rounded-full h-10 w-10"}>
              <ArrowLeft className="size-4" strokeWidth={1.5} />
            </Button>

            <Button variant={"outline"} className={"rounded-full h-10 w-10"}>
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Button>
          </div>
        </div>

        {/* Secondary action — detail lives on the capability pages */}
        <div className="mt-10 flex justify-start">
          <Link
            to="/solutions"
            className="
              group inline-flex items-center gap-3 rounded-full
              border border-foreground/15 px-6 py-3
              text-[11px] font-medium uppercase tracking-[0.15em]
              text-foreground transition-colors duration-300
              hover:border-foreground/40
            "
          >
            Explore Capabilities
            <ArrowUpRight
              className="
                size-4 transition-transform duration-300
                group-hover:-translate-y-0.5 group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </Section.Body>
    </Section>
  );
}