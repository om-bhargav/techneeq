import { lazy, Suspense } from "react";

import Hero from "@/components/home/Hero";

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
  () => import("@/components/home/Environments")
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

function Home() {
  return (
    <div className="grid max-md:gap-10 md:gap-20">
      <Hero />
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

export default Home;