import { lazy, Suspense, useEffect, useRef, useState } from "react";

const InteractiveScrollSection = lazy(
  () => import("../solutions/InteractiveScrollSection")
);

const SolutionsProvided = lazy(
  () => import("../solutions/SolutionsProvided")
);

const TechStacks = lazy(
  () => import("../solutions/TechStacks")
);

const BusinessOutcome = lazy(
  () => import("../home/BusinessOutcome")
);

const CTA = lazy(() => import("../home/CTA"));

function LazySection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible && (
        <Suspense fallback={null}>
          {children}
        </Suspense>
      )}
    </div>
  );
}

export default function Solutions() {
  return (
    <main className="grid gap-8 md:gap-20">
      <LazySection>
        <InteractiveScrollSection />
      </LazySection>

      <LazySection>
        <SolutionsProvided />
      </LazySection>

      <LazySection>
        <TechStacks />
      </LazySection>

      <LazySection>
        <BusinessOutcome />
      </LazySection>

      <LazySection>
        <CTA />
      </LazySection>
    </main>
  );
}