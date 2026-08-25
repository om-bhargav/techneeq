import { useEffect } from "react";

export function useDarkSection(
  ref: React.RefObject<HTMLElement | null>,
  rootMargin = "-30% 0px -30% 0px"
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const htmlElement = document.documentElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        htmlElement.classList.toggle("dark", entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      htmlElement.classList.remove("dark");
    };
  }, [ref, rootMargin]);
}