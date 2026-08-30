import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { getGridTier, livingGrid, type GridTier } from "@/lib/livinggrid";

const LivingGridScene = lazy(() => import("./LivingGridScene"));

function hasWebgl() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

/** Never an empty canvas: a static silk-grey gradient with soft dune bands. */
function StaticGrid({ calm }: { calm: boolean }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="lg-static-grid absolute inset-0"
        style={{ opacity: calm ? 0.42 : 0.7 }}
      />
    </div>
  );
}


function Live({ calm }: { calm: boolean }) {
  const [tier, setTier] = useState<GridTier | null>(null);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    livingGrid.reduced = reducedQuery.matches;
    if (!hasWebgl()) return;

    // Defer past first paint so the canvas never competes with LCP.
    const id = window.setTimeout(() => setTier(getGridTier(window.innerWidth)), 350);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => setTier(getGridTier(window.innerWidth)), 180);
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    const fine = window.matchMedia("(pointer: fine)").matches;
    const onPointer = (e: PointerEvent) => {
      livingGrid.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      livingGrid.pointerY = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    if (fine && !livingGrid.reduced) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      window.clearTimeout(id);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  // Stop rendering when the background is off-screen.
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        livingGrid.active = entry?.isIntersecting ?? true;
      },
      { rootMargin: "10%" },
    );
    io.observe(el);
    const onVisibility = () => {
      livingGrid.active = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      livingGrid.active = true;
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={host} className="absolute inset-0">
      {tier && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 animate-[fade-in_1.6s_ease-out_both]">
            <LivingGridScene tier={tier} calm={calm} />
          </div>
        </Suspense>
      )}
    </div>
  );
}

/**
 * One persistent, continuous landscape behind the whole page.
 * Content stays in HTML above it — nothing essential lives in the canvas.
 */
export function LivingGrid({ calm = false }: { calm?: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      data-living-grid="true"
    >
      <StaticGrid calm={calm} />
      <Suspense fallback={null}>
        <Live calm={calm} />
      </Suspense>
      <div className="absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_42%,transparent_15%,var(--background)_92%)]" />
    </div>
  );
}
