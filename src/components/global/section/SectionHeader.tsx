import type { ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { useGsapSplitTextReveal } from "@/animations";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  className?: string;
  wantStrip?: boolean;
  paragarphClassName?: string;
  labelclassName?: string;
  titleclassName?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  className,
  wantStrip = true,
  paragarphClassName = "items-start",
  labelclassName = "",
  titleclassName = ""
}: SectionHeaderProps) {
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  /*
   * =========================
   * LABEL — WORD REVEAL
   * =========================
   */
  useGsapSplitTextReveal(labelRef, {
    type: "words",
    y: 20,
    opacity: 0,
    stagger: 0.05,
    duration: 1,
    ease: "power3.out",
    delay: 0.5,
    start: "top 90%",
    once: true,
    maskLines: true,
  });

  /*
   * =========================
   * TITLE — CHARACTER REVEAL
   * =========================
   */
  useGsapSplitTextReveal(titleRef, {
    type: "chars",
    y: 30,
    opacity: 0,
    rotateX: -25,
    stagger: 0.025,
    duration: 0.9,
    ease: "power4.out",
    delay: 1,
    start: "top 90%",
    once: true,
    maskLines: true,
  });

  /*
   * =========================
   * HIGHLIGHT — CHARACTER REVEAL
   * =========================
   */
  useGsapSplitTextReveal(highlightRef, {
    type: "chars",
    y: 30,
    opacity: 0,
    rotateX: -25,
    stagger: 0.025,
    duration: 0.9,
    ease: "power4.out",
    delay: 1.3,
    start: "top 90%",
    once: true,
    maskLines: true,
  });

  /*
   * =========================
   * Description — Paragraph REVEAL
   * =========================
   */
  useGsapSplitTextReveal(descriptionRef, {
    type: "lines",
    y: 40,
    opacity: 0,
    rotateX: -25,
    stagger: 0.025,
    duration: 1.5,
    ease: "power4.out",
    delay: 1.6,
    start: "top 90%",
    once: true,
    maskLines: true,
  });

  return (
    <header className={cn("grid gap-4", className)}>
      {/* =========================
          SECTION LABEL
      ========================= */}
      {label && (
        <div className="pt-2 overflow-hidden">
          <span
            ref={labelRef}
            className={cn(`
              inline-block
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-foreground/45`,labelclassName)}
          >
            {label}
          </span>
        </div>
      )}

      {/* =========================
          HEADING
      ========================= */}
      <div>
        <h2
          className={cn(`
            max-w-5xl
            font-display
            text-3xl
            font-normal
            leading-[0.98]
            tracking-[-0.045em]
            text-foreground
            sm:text-3xl
            md:text-5xl
          `,titleclassName)}
        >
          {/* Title */}
          <span
            ref={titleRef}
            className="inline-block"
          >
            {title}
          </span>

          {/* Highlight */}
          {highlight && (
            <>
              <br />

              <span
                ref={highlightRef}
                className="
                  inline-block
                  text-foreground/40
                "
              >
                {highlight}
              </span>
            </>
          )}
        </h2>

        {/* =========================
            DESCRIPTION
        ========================= */}
        {description && (
          <div className={cn("mt-8 flex max-w-xl gap-4",paragarphClassName)}>
            {wantStrip && <span
              className="
                mt-1.75
                max-md:hidden
                h-px
                w-10
                shrink-0
                bg-foreground/20
              "
            />}

            <p
              ref={descriptionRef}
              className="
                max-w-md
                text-xs
                leading-6
                text-muted-foreground
                md:text-sm
              "
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </header>
  );
}