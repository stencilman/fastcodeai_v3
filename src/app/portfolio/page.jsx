import React from "react";
import Hero from "../sections/portfolio/Hero";
import Products from "../sections/portfolio/Products";
import HeroImage from "../../../public/portfolio/portfolio-hero.png";
import Footer from "../sections/Footer";
import Power from "../component/v2/sections/Power";
import TestimonialsSlider from "../sections/TestimonialsSlider";
import Operational from "../component/v2/sections/Operational";

const Portfolio = () => {
  return (
    <>
      <Hero
        HeroImage={HeroImage}
        title="Work That Turns AI Into Business Impact"
        description="Real-world AI solutions built to solve complex enterprise challenges across industries."
        buttonText="Discuss Your AI Roadmap"
        buttonLink="/contact"
      />
      <Products />
      <Power/>
      <TestimonialsSlider/>
      <Operational
        title="Push the Possible."
        description="Access all 400+ pre-built connectors and automate your pipelines today. Stop coding integrations and start shipping insights."
        buttonText="Start Building Now"
        buttonLink="/contact"
      />
      <Footer showExtraSpace={true} />
    </>
  );
};

export default Portfolio;
