"use client";
import React from "react";
import Image from "next/image";
import icon1 from "../../../public/whychooseus/new/icon1.svg";
import icon2 from "../../../public/whychooseus/new/icon2.svg";
import icon3 from "../../../public/whychooseus/new/icon3.svg";
import icon4 from "../../../public/whychooseus/new/icon4.svg"; // Assuming this is the new icon
import { motion } from "framer-motion";
import RevealY from "../component/RevealY";
import Button from "../component/Button";

const WhyChooseUs = () => {
  return (
    <div className="w-full h-auto lg:min-h-[120vh] my-[75px] pl-[20px] pr-[20px] lg:pl-[120px] lg:pr-[100px] relative bg-[#00081F] flex flex-col justify-center ">
      <div className="absolute right-[10px]  w-[169px] h-[421px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>

      <div className="flex flex-col items-center mb-[60px] z-10 relative">
        <h1 className="text-[32px] md:text-[45px] lg:text-[56px] text-white font-aeonik text-center leading-tight mb-[20px]">
          Most AI initiatives stall in endless pilots.
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#9EB3CF] font-bwmss01 text-center max-w-[900px] mx-auto leading-relaxed">
          Fast Code delivers AI that works—integrating seamlessly into
          enterprise operations to drive $100M+ impact.
        </p>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[27px] w-full h-[auto]">
        {/* Left Card */}
        <div
          className="flex-1 opacity-83 rounded-[18px] w-full p-[40px] flex flex-col justify-between min-h-[500px] border border-[#1A2758]"
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div className="w-full flex flex-col items-start gap-[30px]">
            <div className="w-[120px] h-[120px]">
              <Image
                src={icon4}
                alt="Data Intelligence"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-[20px] mt-[40px]">
              <h3 className="text-[40px] leading-[1.1] text-white font-aeonik">
                Data
                <br />
                Intelligence
                <br />
                Platform
              </h3>
              <p className="text-[#9EB3CF] text-lg font-bwmss01 max-w-[300px]">
                Deploy & manage AI systems in weeks, not years.
              </p>
            </div>
          </div>

          <div className="mt-[40px]">
            <Button
              onClick={() => setIsFormModalOpen(true)}
              name="Get Started"
            />
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex gap-[27px] flex-col flex-1">
          {/* Card 1 */}
          <RevealY>
            <div
              className="rounded-[18px] p-[35px] h-full flex items-center border border-[#1A2758]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-[30px] items-start sm:items-center w-full">
                <div className="flex-shrink-0">
                  <Image
                    className="w-[90px] h-[90px]"
                    src={icon1}
                    alt="Research & Deployment"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-[28px] font-aeonik mb-[10px]">
                    Research & Deployment
                  </h3>
                  <p className="text-[16px] text-[#9EB3CF] font-bwmss01 leading-relaxed">
                    Frontier research on systems optimization,
                    self-construction, and integration.
                  </p>
                </div>
              </div>
            </div>
          </RevealY>

          {/* Card 2 */}
          <RevealY>
            <div
              className="rounded-[18px] p-[35px] h-full flex items-center border border-[#1A2758]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-[30px] items-start sm:items-center w-full">
                <div className="flex-shrink-0">
                  <Image
                    className="w-[90px] h-[90px]"
                    src={icon2}
                    alt="Seamless Integration"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-[28px] font-aeonik mb-[10px]">
                    Seamless Integration
                  </h3>
                  <p className="text-[16px] text-[#9EB3CF] font-bwmss01 leading-relaxed">
                    Connects directly to your workflows, data, and enterprise
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </RevealY>

          {/* Card 3 */}
          <RevealY>
            <div
              className="rounded-[18px] p-[35px] h-full flex items-center border border-[#1A2758]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-[30px] items-start sm:items-center w-full">
                <div className="flex-shrink-0">
                  <Image
                    className="w-[90px] h-[90px]"
                    src={icon3}
                    alt="Outcome-Driven Partnership"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-[28px] font-aeonik mb-[10px]">
                    Outcome-Driven Partnership
                  </h3>
                  <p className="text-[16px] text-[#9EB3CF] font-bwmss01 leading-relaxed">
                    Forward deploying the best researchers against your unique
                    problems.
                  </p>
                </div>
              </div>
            </div>
          </RevealY>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
