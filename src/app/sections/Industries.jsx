import Image from "next/image";
import React from "react";

const Industries = () => {
  return (
    <div className="w-full h-auto mt-[60px] md:mt-[100px] lg:mt-[50px] lg:min-h-[80vh] pt-[80px] md:pt-[100px] lg:pt-0 pl-[20px] pr-[20px] md:pl-[50px] md:pr-[20px] lg:pl-[160px] lg:pr-[127px] bg-[#00081F] flex flex-col justify-center relative ">
      <div className="flex flex-col items-center">
        <h3 className="text-[8vw] md:text-[7vw] lg:text-5xl lg:leading-[3.7rem] tracking-normal  text-center leading-[7.6vw]  font-bwmss01 text-white">
          Our AI Expertise Across Industries
        </h3>
        {/* <p className="text-[#9EB3CF] text-lg mt-[20px] text-center w-[85vw] lg:w-[70vw] font-bwmss01">
          OurAI developers specialize in integrating the best-in-class
          artificial intelligence services into your business offerings,
          processes, and growth strategies, regardless of your industry.
        </p> */}
      </div>
      <div className="flex flex-wrap pt-[64px] lg:pt-[120px] gap-[24px] lg:gap-[75px] justify-center">
        <div className="moving-border-wrapper w-[124px] h-[160px] sm:w-[172px] sm:h-[182px] rounded-[18px]">
          <div
            className="moving-border-content  flex flex-col items-center justify-center gap-[42px] "
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <Image src="/industries/icon4.svg" alt="" width="38" height="19" />
            <p className="text-white text-[19px] font-aeonik ">Automotive</p>
          </div>
        </div>

        <div className="moving-border-wrapper w-[124px] h-[160px] sm:w-[172px] sm:h-[182px] rounded-[18px]">
          <div
            className=" moving-border-content  flex flex-col items-center justify-center gap-[42px] "
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <Image
              src="/industries/healthcare.svg"
              alt=""
              width="38"
              height="19"
            />
            <p className="text-white text-[19px] font-aeonik ">Healthcare</p>
          </div>
        </div>

        <div className="moving-border-wrapper w-[124px] h-[160px] sm:w-[172px] sm:h-[182px] rounded-[18px]">
          <div
            className="moving-border-content  flex flex-col items-center justify-center gap-[42px] "
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <Image src="/industries/icon2.svg" alt="" width="38" height="19" />
            <p className="text-white text-[19px] font-aeonik">Finance</p>
          </div>
        </div>

        <div className="moving-border-wrapper w-[124px] h-[160px] sm:w-[172px] sm:h-[182px] rounded-[18px]">
          <div
            className="moving-border-content  flex flex-col items-center justify-center gap-[42px] "
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <Image src="/industries/icon3.svg" alt="" width="38" height="19" />
            <p className="text-white text-[19px] font-aeonik">Gaming</p>
          </div>
        </div>

        <div className="moving-border-wrapper w-[124px] h-[160px] sm:w-[172px] sm:h-[182px] rounded-[18px]">
          <div
            className="moving-border-content  flex flex-col items-center justify-center gap-[42px] "
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <Image src="/industries/icon1.svg" alt="" width="38" height="19" />
            <p className="text-white text-[19px] font-aeonik">Retail</p>
          </div>
        </div>

        <div className="moving-border-wrapper w-[124px] h-[160px] sm:w-[172px] sm:h-[182px] rounded-[18px]">
          <div
            className="moving-border-content  flex flex-col items-center justify-center gap-[42px]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <Image src="/industries/oilgas.svg" alt="" width="30" height="19" />
            <p className="text-white text-[19px] font-aeonik">Oil & Gas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
