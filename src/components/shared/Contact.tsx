import ContactSection from "../contact/ContactSection";
import Locations from "../contact/Locations";
import CTA from "../home/CTA";

export default function Contact() {
  return (
    <main className="grid gap-8 pt-20 md:gap-20">
      <ContactSection />
      <Locations />
      <CTA />
    </main>
  );
}