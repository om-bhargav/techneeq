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
import {motion} from "framer-motion";
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
      <motion.div
  className="absolute size-20 rounded-full border border-white/30"
  animate={{
    scale: [0, 4],
    opacity: [0.5, 0],
  }}
  transition={{ duration: 1.2 }}
/>
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