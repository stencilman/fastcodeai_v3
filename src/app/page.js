"use client";
import Footer from "./sections/Footer";
import TestimonialsSlider from "./sections/TestimonialsSlider";
import { useGlobalContext } from "./context/GlobalContext";
import { useEffect } from "react";

// V2
import Hero from "./component/v2/sections/Hero";
import IndustryLeaders from "./component/v2/sections/IndustryLeaders";
import CaseStudies from "./component/v2/sections/CaseStudies";
import Leader from "./component/v2/sections/Leader";
import Mission from "./component/v2/sections/Mission";
import Operational from "./component/v2/sections/Operational";
import Power from "./component/v2/sections/Power";

export default function Home() {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, [setIsActive]);

  return (
    <>
      <Hero />
      <IndustryLeaders />
      <CaseStudies />
      <Power />
      <Mission />
      <Leader />
      <TestimonialsSlider />
      <Operational
        title="Ready to Operationalize Your AI?"
        description="Stop building from scratch. Start with a proven infrastructure."
        buttonText="Start Building Now"
        buttonLink="/contact"
      />

      <Footer showExtraSpace={true} />
    </>
  );
}
