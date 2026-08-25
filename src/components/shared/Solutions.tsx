import { lazy, Suspense } from "react";

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

const CTA = lazy(
  () => import("../home/CTA")
);

export default function Solutions() {
  return (
    <main className="grid gap-8 md:gap-20">
      <Suspense fallback={null}>
        <InteractiveScrollSection />
        <SolutionsProvided />
        <TechStacks />
        <BusinessOutcome />
        <CTA />
      </Suspense>
    </main>
  );
}