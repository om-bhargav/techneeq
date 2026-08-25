import { lazy, Suspense } from "react";

const ContactSection = lazy(
  () => import("../contact/ContactSection")
);

const Locations = lazy(
  () => import("../contact/Locations")
);

const CTA = lazy(
  () => import("../home/CTA")
);

export default function Contact() {
  return (
    <main className="grid gap-8 pt-20 md:gap-20">
      <Suspense fallback={null}>
        <ContactSection />
        <Locations />
        <CTA />
      </Suspense>
    </main>
  );
}