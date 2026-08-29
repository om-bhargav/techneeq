import { lazy } from "react";
const BusinessOutcome = lazy(
  () => import("@/components/home/BusinessOutcome")
);
const CTA = lazy(() => import("../home/CTA"));
import TechStacks from "../solutions/TechStacks";
import SolutionsProvided from "../solutions/SolutionsProvided";
import ExpertiseTransition from "../solutions/InteractiveScrollSection";


export default function Solutions() {
  return (
    <main className="grid gap-8 md:gap-20">
      <ExpertiseTransition />
      <SolutionsProvided />
      <TechStacks />
      <BusinessOutcome />
      <CTA /> 
    </main>
  );
}