import React from "react";
import bgShadow from "../../../../../public/what-we-do/platform-development/bg.svg";
import Image from "next/image";

const DataIntelligence = () => {
  const metrics = [
    {
      value: "70-90%",
      label: "Lower labeling costs",
    },
    {
      value: "Petabyte",
      label: "Scale from day one",
    },
    {
      value: "4-8 Weeks",
      label: "From kickoff to working pilot",
    },
    {
      value: "100%",
      label: "Traceable and audit-ready",
    },
  ];

  return (
    <section className="relative bg-[#00081F]py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side - Metrics Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative z-10">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[636px] h-[120px] opacity-40 filter blur-[50px] bg-[#012DAC] "
              style={{ borderRadius: "47% 53% 48% 52% / 49% 42% 58% 51% " }}
            >
              {/* <Image
                src={bgShadow}
                alt="bgShadow"
                className="w-full h-full  opacity-50 filter blur-xl"
              /> */}
            </div>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative bg-black/80 rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-white font-aeonik mb-3">
                  {metric.value}
                </div>
                <div className="text-[#9EB3CF] text-sm md:text-base font-bwmss01 leading-relaxed">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Title and Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl  font-normal text-white font-aeonik tracking-wide leading-tight mb-6">
              Data Intelligence Platform
            </h2>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              You're sitting on mountains of data. We help you extract the
              insights that actually move the needle —faster, cheaper, and at
              scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataIntelligence;
