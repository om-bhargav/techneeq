/**
 * Smooth-scrolls to an in-page section.
 *
 * Matches the behaviour already used by the navbar and the industries
 * selector: native `scrollIntoView`, which Lenis (smoothWheel only) leaves
 * alone. Falls back to a normal hash navigation if the target is missing.
 */
export function scrollToSection(target: string) {
  const id = target.replace(/^#/, "");
  const element = document.getElementById(id);

  if (!element) {
    window.location.hash = id;
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.pushState(null, "", `#${id}`);
}
