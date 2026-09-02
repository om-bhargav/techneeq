import { lazy, Suspense } from "react";

import Hero2 from "@/components/home/Hero2";
import { ToolsPartnersStrip } from "../solution_details/ToolPartnerStrip";

const Intelligence = lazy(
  () => import("@/components/home/Intelligence")
);
 
const Services = lazy(
  () => import("@/components/home/Services")
);

const Solutions = lazy(
  () => import("@/components/home/Solutions")
);

const Environments = lazy(
  () => import("@/components/home/Industries")
);
const Transformation = lazy(
  () => import("@/components/home/Transformation")
);

const BusinessOutcome = lazy(
  () => import("@/components/home/BusinessOutcome")
);

const Expertise = lazy(
  () => import("@/components/home/Expertise")
);

const Faq = lazy(
  () => import("@/components/home/Faq")
);

const CTA = lazy(
  () => import("@/components/home/CTA")
);

function Home2() {
  return (
    <div className="grid max-md:gap-10 md:gap-20">
      <div className="grid">
      <Hero2 />
      <ToolsPartnersStrip/>
      </div>
      <Suspense fallback={null}>
        <Intelligence />
        <Services />
        <Solutions />
        <Environments />
        <Transformation />
        <BusinessOutcome />
        <Expertise />
        <Faq />
        <CTA />
      </Suspense>
    </div>
  );
}

export default Home2;