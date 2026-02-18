import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] bg-oilGasHero bg-cover bg-no-repeat flex justify-center items-center relative ">
        <div className="w-full h-full bg-[#00081f74] top-0 left-0 absolute flex justify-center items-center">
      <div className="flex flex-col gap-[10px] md:gap-[40px] ">
        <h1 className="text-3xl md:text-5xl px-[20px] md:px-[50px] lg:px-[100px] text-white text-center font-aeonik tracking-wide">
          Oil & Gas EPC - Digitizing P&ID
        </h1>
        <p className="text-base md:text-lg text-[#abb9cd] text-center font-bwmss01 px-[20vw]">
          Oil & Gas which was once was a lucrative investment, now struggles to
          ensure the same level of light. A lot of things have changed in the
          past few years which has pushed the Oil & Gas.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
