import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center relative ">
      <div className="bg-imoHero bg-cover bg-no-repeat absolute w-full h-full"></div>
      <div className="absolute inset-0  bg-[#2429338a] "></div>
      <div className="flex flex-col gap-[10px] md:gap-[40px] absolute">
        <h1 className="text-3xl md:text-5xl px-[20px] md:px-[50px] lg:px-[100px] text-white text-center font-aeonik tracking-wide">
        Celebrating Team India’s Success at IMO 2024!
        </h1>
        {/* <p className="text-base md:text-lg text-[#9EB3CF] text-center font-bwmss01 px-[20vw]">
          A Convolutional Neural Network trained on the MNIST dataset when
          presented images from the Devanagari dataset will wrongly classify the
          Devanagari letter to one of the MNIST classes 0-9, usually with very
          high confidence. What can we do to fix this?
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
