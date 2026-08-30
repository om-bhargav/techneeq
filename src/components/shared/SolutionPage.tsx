import { Navigate, useParams } from "react-router-dom";

import Form from "../solution_details/Form";
import Hero from "../solution_details/Hero";
import SecondSection from "../solution_details/SecondSection";
import ThirdSection from "../solution_details/ThirdSection";
import { ToolsPartnersStrip } from "../solution_details/ToolPartnerStrip";

import { solutions } from "@/data/solutions-content";

export default function SolutionDetails() {
  const { slug } = useParams<{ slug: string }>();

  const solution = slug ? solutions[slug] : undefined;

  // Invalid or missing slug
  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  const {
    hero,
    useCases,
    capabilities,
    points,
    secondSection,
    useCaseSectionHeaders
  } = solution;

  return (
    <div className="relative grid gap-8 pt-20 md:gap-20">
      <Hero {...hero} />

      <ToolsPartnersStrip />

      <SecondSection
        secondSection={secondSection}
        useCases={useCases}
        useCaseSectionHeaders={useCaseSectionHeaders}
        capabilities={capabilities}
      />

      <ThirdSection
        points={points}
      />

      <Form />
    </div>
  );
}