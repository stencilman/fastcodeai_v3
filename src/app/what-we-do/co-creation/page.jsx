import React from "react";
import Hero from "../../component/what-we-do/Hero";
import HeroImage from "../../../../public/what-we-do/co-creation/hero.png";
import Philosophy from "../../component/what-we-do/co-creation/Philosophy";
import Advantage from "../../component/what-we-do/co-creation/Advantage";
import OurWork from "../../sections/OurWork";
import TestimonialsSlider from "../../sections/TestimonialsSlider";
import Operational from "../../component/v2/sections/Operational";
import Footer from "../../sections/Footer";

const page = () => {
  return (
    <div className="relative bg-[#00081F]">
      <Hero
        HeroImage={HeroImage}
        title="Co-Creation"
        description="We don't just write code; we build businesses. Combine your deep industry expertise with our proven AI infrastructure to build proprietary IP with shared skin in the game."
        buttonText="Apply for Partnership"
        buttonLink="/contact"
      />
      <Philosophy />
      <Advantage />
      <OurWork showShadow={false} />
      <TestimonialsSlider/>
      <Operational title="Have a Vision Worth Building?" description="Let's see if we are a match." buttonText="Start Building Now" buttonLink="/contact" />
      <Footer showExtraSpace={true} />
    </div>
  );
};

export default page;
