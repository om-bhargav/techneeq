import {gsap,SplitText,ScrollTrigger} from "@/lib/gsap";
import { type RefObject } from "react";
import {useGSAP} from "@gsap/react";

type SplitType = "chars" | "words" | "lines";
interface SplitTextOptions {
  type?: SplitType;
  stagger?: number;
  duration?: number;
  y?: number;
  opacity?: number;
  ease?: string;
  delay?: number;
  dependencies?: any[];
  start?: string;
  once?: boolean;
  maskLines?: boolean;
  rotateX?: number;
}

export function useGsapSplitTextReveal(
  ref: RefObject<HTMLElement | null>,
  options: SplitTextOptions = {}
) {
  const {
    type = "chars",
    stagger = 0.03,
    duration = 0.8,
    y = 100,
    opacity = 0,
    ease = "power3.out",
    delay = 0,
    dependencies = [],
    start = "top bottom",
    once = true,
    maskLines = true,
    rotateX = 0,
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      const element = ref.current;
      let split: SplitText | null = null;

      const ctx = gsap.context(() => {
        // =========================
        // 1. SPLIT
        // =========================

        split = SplitText.create(element, {
          type: type === "chars" ? "chars,words" : type,
          mask: maskLines ? "lines" : undefined,
        });

        ScrollTrigger.refresh();

        const targets =
          type === "chars"
            ? split.chars
            : type === "words"
              ? split.words
              : split.lines;

        if (!targets?.length) return;

        // =========================
        // 2. INITIAL STATE
        // =========================

        gsap.set(targets, {
          y,
          opacity,
          rotateX,
          transformOrigin: "50% 100%",
        });


        gsap.to(targets, {
          y: 0,
          opacity: 1,
          rotateX: 0,

          duration,
          delay,
          ease,

          stagger: {
            each: stagger,
          },

          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: once
              ? "play none none none"
              : "play none play none",
          },
        });
      }, element);

      return () => {
        ctx.revert();
        split?.revert();
      };
    },
    {
      scope: ref,
      dependencies: [...dependencies],
      revertOnUpdate: true,
    }
  );
}