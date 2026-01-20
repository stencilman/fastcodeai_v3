import Image from "next/image";
import React from "react";

const Hero = ({ heroData }) => {
  return (
    <div className="w-full h-[100%] md:h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative">
      <div className="w-full h-[50%] md:h-[50vh]">
        <Image
          className="w-full h-full object-cover"
          src={heroData[0]?.heroImg}
          width="1538"
          height="598"
          alt=""
        />
      </div>
      <div className="w-full h-[50%] md:h-[50vh] px-[20px] md:px-[50px] lg:px-[100px] flex flex-col md:flex-row items-center justify-between gap-[5%]">
        <div className="flex h-full flex-col md:flex-row mt-[30px] gap-[20px] md:gap-0 md:mt-0 w-[80%] items-center justify-around">
          {heroData[0]?.logo && (
            <div className="w-[20%] md:mr-[10px]">
              <Image
                src={heroData[0]?.logo}
                height="89"
                width="155"
                alt="logo"
              />
            </div>
          )}
          <div className="w-auto md:w-[500px] flex flex-col gap-[25px] justify-center items-center">
            <h3 className="text-white text-center font-aeonik  tracking-normal text-[30px]">
              {heroData[0]?.title}
            </h3>
            <p className="text-[#9EB3CF] font-bwmss01 text-lg text-center">
              {heroData[0]?.description}
            </p>
            <div className="py-[12px] px-[35px] rounded-[30px] border-[#FFFFFF] border maxw-[160px] text-[#9EB3CF]">
              {heroData[0]?.industry}
            </div>
          </div>
        </div>
        <div className="h-full py-[35px] md:py-0 w-[20%] flex flex-wrap items-center justify-center">
          <h2 className="text-white text-[48px] font-aeonik tracking-wide">
            {heroData[0]?.year}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
