import { lazy, Suspense } from "react";
import TechStacks from "../solutions/TechStacks";
import SolutionsProvided from "../solutions/SolutionsProvided";
import ExpertiseTransition from "../solutions/InteractiveScrollSection";

const BusinessOutcome = lazy(
  () => import("../home/BusinessOutcome")
);

const CTA = lazy(
  () => import("../home/CTA")
);

export default function Solutions() {
  return (
    <main className="grid gap-8 md:gap-20">
      <ExpertiseTransition />
      <SolutionsProvided />
      <TechStacks />
      <Suspense fallback={null}>
        <BusinessOutcome />
        <CTA />
      </Suspense>
    </main>
  );
}