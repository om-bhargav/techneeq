import Form from "../solution_details/Form";
import Hero from "../solution_details/Hero";
import SecondSection from "../solution_details/SecondSection";
import ThirdSection from "../solution_details/ThirdSection";
import TimelineBackground from "../solution_details/TimelineBackground";
import { useParams } from "react-router-dom";
import { ToolsPartnersStrip } from "../solutions/ToolPartnerStrip";
export default function SolutionDetails() {
  const {} = useParams();
  return (
    <div className="relative gap-8 md:gap-20 grid pt-20">
    <TimelineBackground />
    <Hero/>
    <ToolsPartnersStrip/>
    <SecondSection/>
    <ThirdSection/>
    <Form/>
    </div>
  )
}
