import BusinessOutcome from "../home/BusinessOutcome";
import CTA from "../home/CTA";
import InteractiveScrollSection from "../solutions/InteractiveScrollSection";
import SolutionsProvided from "../solutions/SolutionsProvided";
import TechStacks from "../solutions/TechStacks";

export default function Solutions() {
  return (
    <main className="grid gap-8 md:gap-20">
      <InteractiveScrollSection />
      <SolutionsProvided />
      <TechStacks />
      <BusinessOutcome />
      <CTA />
    </main>
  );
}