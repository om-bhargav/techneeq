import { lazy, Suspense } from "react";

const OurStory = lazy(() => import("../about/OurStory"));
const Team = lazy(() => import("../about/Team"));
const HowWeWork = lazy(() => import("../about/HowWeWork"));
const OurValues = lazy(() => import("../about/OurValues"));

export default function About() {
  return (
    <main className="grid gap-8 pt-20 md:gap-20">
      <Suspense fallback={null}>
        <OurStory />
        <Team />
        <HowWeWork />
        <OurValues />
      </Suspense>
    </main>
  );
}