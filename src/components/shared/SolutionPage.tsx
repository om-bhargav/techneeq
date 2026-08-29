import Form from "../solution_details/Form";
import Hero from "../solution_details/Hero";
import SecondSection from "../solution_details/SecondSection";
import ThirdSection from "../solution_details/ThirdSection";
import { useParams } from "react-router-dom";
export default function SolutionDetails() {
  const {} = useParams();
  return (
    <div className="grid pt-20">
    <div className="grid gap-8 md:gap-20">
    <Hero/>
    <SecondSection/>
    <ThirdSection/>
    </div>
    <Form/>
    </div>
  )
}
