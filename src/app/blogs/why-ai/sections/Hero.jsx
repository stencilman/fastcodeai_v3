import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] bg-whyaiHero bg-cover bg-no-repeat flex justify-center items-center relative ">
      <div className="flex flex-col gap-[40px] ">
        <h1 className="text-3xl md:text-5xl px-[20px] md:px-[50px] lg:px-[100px] text-white text-center font-aeonik tracking-wide">
          The Dilemma: To ML or Not to ML?
        </h1>
        <p className="text-lg text-[#9EB3CF] text-center font-bwmss01 px-[20vw]">
          When do rule-based algorithms not work? When do we need machine
          learning (ML) based algorithms? Let us try and answer this question
          using the tasks below:
        </p>
      </div>
    </div>
  );
};

export default Hero;
