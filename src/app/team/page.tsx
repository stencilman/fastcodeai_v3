import React from "react";
import Hero from "../sections/team/Hero";
import HeroImage from "../../../public/team-members/hero.png";
import NumbersAndDetail from "../sections/team/NumbersAndDetail";
import TeamMembers from "../sections/team/TeamMembers"
import TestimonialsSlider from "../sections/TestimonialsSlider";
import Operational from "../component/v2/sections/Operational";
import Footer from "../sections/Footer";

const page = () => {
  return (
    <>
      <Hero
        HeroImage={HeroImage}
        title="Exceptional Team Lead To Exceptional Results"
        description="We are a group of ambitious AI experts and coders committed to delivering innovative solutions. Our passion for excellence drives us to redefine the boundaries of technology."
        buttonText="Learn More"
        buttonLink="/team"
      />
      <NumbersAndDetail />
      <TeamMembers />
      <TestimonialsSlider />
      <Operational
        title="Join the Team"
        description="Bridge the gap between academic theory and industrial reality. Build the infrastructure that powers the next generation of AI."
        buttonText="Work With Us"
        buttonLink="/contact"
      />

      <Footer showExtraSpace={true} />
    </>
  );
};

export default page;
