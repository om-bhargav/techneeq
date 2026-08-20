import BusinessOutcome from "@/components/home/BusinessOutcome";
import CTA from "@/components/home/CTA";
import Environments from "@/components/home/Environments";
import Expertise from "@/components/home/Expertise";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Intelligence from "@/components/home/Intelligence";
import Services from "@/components/home/Services";
import Solutions from "@/components/home/Solutions";
import Transformation from "@/components/home/Transformation";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Intelligence />
      <Services />
      <Solutions />
      <Environments />
      <Transformation />
      <BusinessOutcome />
      <Expertise />
      <Faq />
      <CTA />
    </React.Fragment>
  );
}

export default Home;