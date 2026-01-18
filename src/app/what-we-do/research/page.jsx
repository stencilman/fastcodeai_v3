import React from "react";
import Hero from "../../component/what-we-do/Hero";
import HeroImage from "../../../../public/what-we-do/research/hero.png";
import Productions from "../../component/what-we-do/research/Productions";
import Capabilities from "../../component/what-we-do/research/Capabilities";
import Leader from "../../component/what-we-do/research/Leader";
import OurWork from "../../component/sections/OurWork";
import TestimonialsSlider from "../../component/sections/TestimonialsSlider";
import Operational from "../../component/v2/sections/Operational";
import Footer from "../../component/sections/Footer";
const page = () => {
  return (
    <>
      <Hero
        HeroImage={HeroImage}
        title="PhD-Level AI Research. Without Building a Lab."
        description="Execute high-risk, high-reward AI research without diverting your core engineering team. We provide the PhD-level talent to tackle your hardest unsolved problems."
        buttonText="Start a Research Sprint"
        buttonLink="/contact"
      />
      <Productions />
      <Capabilities />
      <Leader />
      <OurWork />
      <TestimonialsSlider />
      <Operational
        title="Have an 'Unsolvable Problem'?"
        description="Let us define the scope."
        buttonText="Start Building Now"
        buttonLink="/contact"
      />
      <Footer showExtraSpace={true} />
    </>
  );
};

export default page;
