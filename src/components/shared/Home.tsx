import { lazy, Suspense } from "react";

import Hero from "@/components/home/Hero3";
import { ToolsPartnersStrip } from "../solution_details/ToolPartnerStrip";

/*
 * Homepage narrative. Each section answers a different question — where two
 * sections answered the same one, they were merged rather than kept.
 *
 *   Hero            What does Techneeq do?
 *   Problem         Why does it matter?
 *   Architecture    How does Techneeq approach it?      (the only place this is explained)
 *   BusinessOutcome What is the point of it?            (data → insight → decision → action)
 *   Capabilities    What can Techneeq deliver?          (absorbs the old Intelligence,
 *                                                        Solutions and Expertise sections)
 *   Industries      Where does it apply?
 *   Proof           What evidence exists?
 *   WhyTechneeq     Why choose Techneeq?
 *   Services        How can we engage?                  (Work With Us — deliberately late)
 *   Faq             What might stop me engaging?
 *   CTA             What should I do next?
 *
 * The Intelligence / Solutions / Transformation / Expertise components are still
 * live on the /home-2 and /home-3 hero variants.
 */

const Problem = lazy(() => import("@/components/home/Problem"));

const Architecture = lazy(() => import("@/components/home/Architecture"));

const BusinessOutcome = lazy(
  () => import("@/components/home/BusinessOutcome")
);

const Capabilities = lazy(() => import("@/components/home/Capabilities"));

const Industries = lazy(() => import("@/components/home/Industries"));
const WhyTechneeq = lazy(() => import("@/components/home/WhyTechneeq"));

const WorkWithUs = lazy(() => import("@/components/home/Services"));

const Faq = lazy(() => import("@/components/home/Faq"));

const CTA = lazy(() => import("@/components/home/CTA"));

function Home() {
  return (
    <div className="grid max-md:gap-10 md:gap-20">
      <div className="grid">
        <Hero />
        <ToolsPartnersStrip />
      </div>

      <Suspense fallback={null}>
        <Problem />
        <Architecture />
        <BusinessOutcome />
        <Capabilities />
        <Industries />
        {/* <Proof /> */}
        <WhyTechneeq />
        <WorkWithUs />
        <Faq />
        <CTA />
      </Suspense>
    </div>
  );
}

export default Home;
