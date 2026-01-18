import React from "react";
import Image from "next/image";
import icon1 from "../../../../../public/what-we-do/platform-development/work-together/icon1.svg";
import icon2 from "../../../../../public/what-we-do/platform-development/work-together/icon2.svg";
import icon3 from "../../../../../public/what-we-do/platform-development/work-together/icon3.svg";
import icon4 from "../../../../../public/what-we-do/platform-development/work-together/icon4.svg";
import CheckIcon from "../../../../../public/what-we-do/co-creation/check_icon.svg";
import ShadowBlob from "../../common/ShadowBlob";

const Wwdt = () => {
  const phases = [
    {
      week: "Week 1-2",
      title: "Discovery",
      description:
        "We identify one high-impact problem and connect to your data.",
      icon: icon1,
    },
    {
      week: "Week 3-6",
      title: "Build",
      description:
        "We stand up the pipeline—retrieval, labeling, quality checks—tailored to your use case.",
      icon: icon2,
    },
    {
      week: "Week 7-8",
      title: "Validate",
      description:
        "You see results against your own KPIs. Real data, real metrics.",
      icon: icon3,
    },
    {
      week: "Beyond",
      title: "Scale",
      description:
        "Working? We expand to new use cases, reusing what we’ve built.",
      icon: icon4,
    },
  ];

  const commitments = [
    "No multi-year contracts.",
    "No big-bang implementations.",
    "We prove value fast.",
  ];

  return (
    <section className="relative overflow-hidden bg-[#02091F] py-20 px-4 sm:px-8">
      <ShadowBlob />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12 lg:flex-row lg:border lg:rounded-[10px] lg:border-[#FFFFFF57] lg:bg-black lg:p-[44px]">
        <div className="space-y-6 ">
          <h2 className="text-white text-4xl md:text-5xl  font-aeonik tracking-wide">
            How
            <br className="hidden sm:block" /> We Work{" "}
            <br className="hidden sm:block" />
            Together
          </h2>

          <div className="space-y-3">
            {commitments.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Image src={CheckIcon} alt="Check" width={24} height={24} />
                <span className="text-[#C7D5F1] text-base font-bwmss01">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 border rounded-[10px] border-[#FFFFFF57] bg-black p-6 sm:p-[44px] lg:flex-[1.2] lg:border-0 lg:bg-transparent lg:p-0">
          {phases.map((phase) => (
            <div key={phase.title} className="relative overflow-hidden ">
              <div className="mb-2 text-white text-2xl font-aeonik tracking-wide sm:hidden">
                {phase.week}
              </div>
              <div className="grid grid-cols-[170px_1fr] sm:grid-cols-[210px_180px_1fr]">
                <div
                  className="hidden sm:flex items-center gap-3 px-6 py-5 sm:border-r sm:border-white/5 text-white [clip-path:polygon(100%_0%,_88%_51%,_100%_100%,_0_100%,_0%_50%,_0_1%)]"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <span className="text-white text-3xl font-aeonik tracking-wide">
                    {phase.week}
                  </span>
                </div>

                <div
                  className="flex md:items-center flex-col md:flex-row gap-3 px-6 py-5 text-white sm:border-r sm:border-white/5 [clip-path:polygon(100%_0,_79%_50%,_100%_100%,_0%_99%,_0%_50%,_0%_0)] sm:[clip-path:polygon(0_50%,_15%_0,_100%_0,_87%_50%,_100%_100%,_15%_100%)]"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <div className="flex  w-6 md:h-10 h-6 md:w-10 items-center justify-center rounded-md bg-white/5">
                    <Image
                      src={phase.icon}
                      alt={phase.title}
                      width={28}
                      height={28}
                    />
                  </div>
                  <span className="text-white text-lg font-aeonik tracking-wide">
                    {phase.title}
                  </span>
                </div>

                <div
                  className="px-6 py-5 [clip-path:polygon(100%_0,_100%_51%,_100%_100%,_18%_99%,_0%_50%,_18%_0)] sm:[clip-path:polygon(100%_0%,_100%_51%,_100%_100%,_4%_100%,_0%_50%,_4%_0%)]"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <p className="text-[#AFC4E2] text-sm sm:text-base leading-relaxed font-bwmss01">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wwdt;
