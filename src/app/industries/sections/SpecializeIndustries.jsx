"use client";
import Button from "@/app/component/Button";
import Image from "next/image";
import React, { useState } from "react";

const SpecializeIndustries = () => {
  const [active, setActive] = useState({
    id: 1,
    name: "Automobile",
    description:
      "Fast Code AI is a leading AI adoption partner that collaborates with industry leaders to harness the power of advanced intelligence. They specialize in developing AI solutions for various domains, including computer vision, trend forecasting, and targeted consumer insights. Ipsum potenti at congue magna amet id egestas. Quisque imperdiet feugiat ac sit est vitae cras. Amet ut ornare eu at",
    icon: "icon4.svg",
    percentage: "60%",
    showPercentageBar: true,
  });

  const specializationList = [
    {
      id: 1,
      name: "Automobile",
      description:
        "Fast Code AI is a leading AI adoption partner that collaborates with industry leaders to harness the power of advanced intelligence. They specialize in developing AI solutions for various domains, including computer vision, trend forecasting, and targeted consumer insights. Ipsum potenti at congue magna amet id egestas. Quisque imperdiet feugiat ac sit est vitae cras. Amet ut ornare eu at",
      icon: "icon4.svg",
      percentage: "60%",
      showPercentageBar: false,
    },
    {
      id: 2,
      name: "eCommerce",
      description:
        "Fast Code AI is a leading AI adoption partner that collaborates with industry leaders to harness the power of advanced intelligence. They specialize in developing AI solutions for various domains, including computer vision, trend forecasting, and targeted consumer insights. Ipsum potenti at congue magna amet id egestas. Quisque imperdiet feugiat ac sit est vitae cras. Amet ut ornare eu at",
      icon: "icon1.svg",
      percentage: "80%",
      showPercentageBar: false,
    },
    {
      id: 3,
      name: "Sports",
      description:
        "Fast Code AI is a leading AI adoption partner that collaborates with industry leaders to harness the power of advanced intelligence. They specialize in developing AI solutions for various domains, including computer vision, trend forecasting, and targeted consumer insights. Ipsum potenti at congue magna amet id egestas. Quisque imperdiet feugiat ac sit est vitae cras. Amet ut ornare eu at",
      icon: "icon3.svg",
      percentage: "60%",
      showPercentageBar: false,
    },
    {
      id: 4,
      name: "Travel",
      description:
        "Fast Code AI is a leading AI adoption partner that collaborates with industry leaders to harness the power of advanced intelligence. They specialize in developing AI solutions for various domains, including computer vision, trend forecasting, and targeted consumer insights. Ipsum potenti at congue magna amet id egestas. Quisque imperdiet feugiat ac sit est vitae cras. Amet ut ornare eu at",
      icon: "icon5.svg",
      percentage: "60%",
      showPercentageBar: false,
    },
  ];

  console.log("active", active);

  return (
    <div className="w-full h-[auto] relative bg-[#00081F] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] flex flex-col justify-center items-center ">
      {/* Section 1 */}
      <div className="w-full flex flex-col justify-center items-center mb-[15px] md:mb-[20px] lg:mb-[30px]">
        <h3 className="text-white font-aeonik tracking-wide sm:text-[2.5em] lg:text-[3.7em] leading-[1.2em]">
          Industries we specialize in
        </h3>
        <p className="text-[#9EB3CF] text-center font-bwmss01 text-[0.7em] leading-[1.4em] mt-[15px] md:mt-[20px] lg:mt-[30px] sm:text-[1.4em] w-[50%]">
          We serve businesses across a range of industries, delivering designs
          that get results Of these, We specialize in the following industries:
        </p>
      </div>

      {/* Section 2 */}
      <div
        className="border p-[20px] md:p-[50px] border-[#1A2758] mt-[20px] rounded-[18px] w-full h-[auto] flex flex-col md:flex-row gap-[60px] md:gap-[5%]"
        style={{
          background:
            "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div className="w-full md:w-[45%] h-full flex flex-col gap-[30px]">
          {specializationList.map((e, i) => (
            <div key={i}>
              <h4
                onClick={() => {
                  e.showPercentageBar = true;
                  setActive(e);
                }}
                className={`text-white font-aeonik tracking-normal cursor-pointer ${
                  active.id === e.id ? "text-[40px]" : "text-[30px]"
                }`}
              >
                {e.name}
              </h4>
              {active.showPercentageBar === true && active.id === e.id && (
                <div className="w-[90%] max-w-[520px] h-[10px] bg-[#BBBBBB] mt-[25px] mb-[25px] rounded-[7px] relative">
                  <div
                    className={`absolute h-[10px] w-[${e.percentage}] top-0 left-0 rounded-[7px]`}
                    style={{
                      background:
                        "transparent linear-gradient(111deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                    }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Detail Section */}
        <div className="w-full md:w-[50%] h-full flex flex-col gap-[50px]">
          <div>
            <div
              className={`w-[240px] h-[240px] flex items-center justify-center border border-[#1A2758] rounded-[14px] bg-[#00081F] `}
              style={{
                background:
                  "transparent linear-gradient(360deg, #000000 0%, #040d27 0%, #081028 51%, #010821 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src={`/industries/${active.icon}`}
                alt=""
                width="170"
                height="82"
              />
            </div>
          </div>
          <div>
            <h5 className="text-white font-aeonik tracking-normal text-[30px]">
              {active.name}
            </h5>
            <p className="text-[#9EB3CF] font-bwmss01 text-lg mt-[20px]">
              {active.description}
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full flex flex-col justify-center items-center  mb-[15px] md:mb-[20px] lg:mb-[30px] mt-[80px]">
        <h3 className="text-white font-aeonik tracking-normal text-[8vw] md:text-[7vw] lg:text-[51px] leading-[10vw] md:leading-[8vw] lg:leading-[60px]">
          {"Can't"} Find Your Industry?
        </h3>
        <p className="text-[#9EB3CF] text-center font-bwmss01 text-sm sm:text-lg mt-[15px] md:mt-[20px] lg:mt-[30px] w-full md:w-[50%] mb-[15px] md:mb-[20px] lg:mb-[30px]">
          No Problem Contact Us To Find The Best Solutions!
        </p>

        <Button to="/contact" name="Contact Us" />
      </div>
    </div>
  );
};

export default SpecializeIndustries;
