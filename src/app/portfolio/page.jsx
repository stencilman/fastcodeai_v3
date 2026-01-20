import React from "react";
import Hero from "../sections/portfolio/Hero";
import Products from "../sections/portfolio/Products";
import HeroImage from "../../../public/portfolio/portfolio-hero.png";

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
    </>
  );
};

export default Portfolio;
