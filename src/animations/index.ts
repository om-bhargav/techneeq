import { gsap, SplitText } from "@/lib/gsap";
import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";

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
      const element = ref.current;
      if (!element) return;

      const split = SplitText.create(element, {
        type: type === "chars" ? "chars,words" : type,
        mask: maskLines ? "lines" : undefined,
      });

      const targets =
        type === "chars"
          ? split.chars
          : type === "words"
          ? split.words
          : split.lines;

      if (!targets?.length) {
        split.revert();
        return;
      }

      gsap.set(targets, { y, opacity, rotateX, transformOrigin: "50% 100%" });

      gsap.to(targets, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration,
        delay,
        ease,
        stagger: { each: stagger },
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: once ? "play none none none" : "play none play none",
        },
      });

      // CLEANUP: useGSAP handles killing the ScrollTrigger and Tween automatically.
      // All we have to do is revert the SplitText DOM modifications.
      return () => {
        split.revert();
      };
    },
    {
      scope: ref,
      dependencies,
      revertOnUpdate: true,
    }
  );
}


const SPECIAL_CHARS = "!@#$%^&*()_+{}[]<>?/~";

export function useScrambleText(text: string) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);

  // FIX: Swapped useEffect for useGSAP to guarantee context-aware cleanup
  useGSAP(
    () => {
      if (!textRef.current || !trailRef.current || !containerRef.current || !text) return;

      const split = new SplitText(textRef.current, { type: "chars,words,lines" });
      const chars = split.chars;

      gsap.set(chars, { opacity: 0 });

      const anim = { index: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.to(anim, {
        index: chars.length,
        duration: chars.length * 0.05,
        ease: "none",
        onUpdate: () => {
          if (!trailRef.current || !containerRef.current) return;
          const charIndex = Math.min(Math.floor(anim.index), chars.length - 1);

          for (let i = 0; i < charIndex; i++) {
            gsap.set(chars[i], { opacity: 1 });
          }

          if (anim.index < chars.length) {
            const currentChar = chars[charIndex] as HTMLElement;
            const charRect = currentChar.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            gsap.set(trailRef.current, {
              x: charRect.left - containerRect.left,
              y: charRect.top - containerRect.top,
              opacity: 1,
            });

            let scrambleTrail = "";
            for (let i = 0; i < 1; i++) {
              scrambleTrail +=
                SPECIAL_CHARS[Math.floor(Math.random() * SPECIAL_CHARS.length)];
            }
            trailRef.current.innerText = scrambleTrail;
          }
        },
        onComplete: () => {
          gsap.set(chars, { opacity: 1 });
          if (trailRef.current) {
            gsap.set(trailRef.current, { opacity: 0 });
          }
        },
      });

      // CLEANUP: Because we are using useGSAP, the timeline and its ScrollTrigger 
      // are automatically killed. We just revert the SplitText.
      return () => {
        split.revert();
      };
    },
    { 
      dependencies: [text], 
      scope: containerRef 
    }
  );

  return { containerRef, textRef, trailRef };
}