import dynamic from "next/dynamic";
import Hero from "./component/v2/sections/Hero";
import HomeClient from "./HomeClient";
import image2 from "../../public/mission/image2.png";

const IndustryLeaders = dynamic(
  () => import("./component/v2/sections/IndustryLeaders"),
);
const CaseStudies = dynamic(
  () => import("./component/v2/sections/CaseStudies"),
);
const Power = dynamic(() => import("./component/v2/sections/Power"));
const Mission = dynamic(() => import("./component/v2/sections/Mission"));
const Leader = dynamic(() => import("./component/v2/sections/Leader"));
const TestimonialsSlider = dynamic(
  () => import("./sections/TestimonialsSlider"),
);
const Operational = dynamic(
  () => import("./component/v2/sections/Operational"),
);
const Footer = dynamic(() => import("./sections/Footer"));

export default function Home() {
  return (
    <HomeClient>
      {/* <Hero /> */}
      {/* <IndustryLeaders /> */}
      <CaseStudies />
      <Power />
      <Mission />
      <Leader />
      <TestimonialsSlider />
      <Operational
        title="Ready to Operationalize Your AI?"
        description="Fast Code AI - Accelerating Innovation"
        buttonText="Start Building Now"
        buttonLink="/contact"
        bgImage={image2}
        bgImageAlt="Operational Background"
      />
      <Footer showExtraSpace={true} />
    </HomeClient>
  );
}
