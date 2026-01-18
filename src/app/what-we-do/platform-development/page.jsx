import React from "react";
import Hero from "../../component/what-we-do/Hero";
import BottleNecks from "../../component/what-we-do/platform-development/BottleNecks";
import Enterprise from "../../component/what-we-do/platform-development/Enterprise";
import HeroImage from "../../../../public/what-we-do/platform-development/hero.png";
import DataIntelligence from "../../component/what-we-do/platform-development/DataIntelligence";
import Wwd from "../../component/what-we-do/platform-development/Wwd";
import Automotive from "../../component/what-we-do/platform-development/Automotive";
import Echosystem from "../../component/what-we-do/platform-development/Echosystem";
import Wwdt from "../../component/what-we-do/platform-development/Wwdt";
import OurWork from "../../sections/OurWork";
import TestimonialsSlider from "../../sections/TestimonialsSlider";
import Operational from "../../component/v2/sections/Operational";
import Footer from "../../sections/Footer";

const page = () => {
  return (
    <div>
      <Hero
        HeroImage={HeroImage}
        title="Platform Deployment"
        description="Deploy a production-grade Data & AI infrastructure into your environment in weeks, not years. Validated on petabytes of data and ready for your proprietary models."
        buttonText="Get Development Specs"
        buttonLink="/contact"
      />
      {/* <BottleNecks /> */}
      <DataIntelligence />
      <Wwd />
      {/* <Enterprise /> */}
      <Automotive />
      <Echosystem />
      <Wwdt />
      <OurWork />
      <TestimonialsSlider />
      <Operational
        title="Why wait 18 months to launch?"
        description="Deploy your enterprise data stack in just 4 weeks."
        buttonText="Start Building Now"
        buttonLink="/contact"
      />
        <Footer showExtraSpace={true} />
    </div>
  );
};

export default page;
