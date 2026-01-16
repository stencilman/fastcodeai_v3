import React from "react";
import Image from "next/image";
import bottleNeck1 from "../../../../../public/what-we-do/platform-development/bottle-neck/image1.png";
import bottleNeck2 from "../../../../../public/what-we-do/platform-development/bottle-neck/image2.png";
import bottleNeck3 from "../../../../../public/what-we-do/platform-development/bottle-neck/image3.png";

const BottleNecks = () => {
  const bottlenecks = [
    {
      title: "Connector Hell",
      description:
        "Writing and maintaining custom API integrations for every new tool is a never-ending resource drain.",
      image: bottleNeck1,
    },
    {
      title: "Brittle Pipelines",
      description:
        "Homegrown scripts break constantly when data formats change or volumes spike.",
      image: bottleNeck2,
    },
    {
      title: "Security Gaps",
      description:
        "Ad-hoc data movement lacks governance, creating blind spots that expose sensitive information.",
      image: bottleNeck3,
    },
  ];

  return (
    <section className="bg-[#00081F] py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-normal text-white font-aeonik tracking-wide leading-tight">
              Building From Scratch <br /> is the Slow Lane.
            </h2>
          </div>
          <div className="lg:w-1/2 lg:max-w-md">
            <p className="text-[#9EB3CF] text-lg md:text-xl font-bwmss01 ">
              Most internal data projects fail because teams get stuck building
              plumbing instead of driving value.
            </p>
          </div>
        </div>

        {/* Bottlenecks List */}
        <div>
          <h3 className="text-2xl md:text-3xl font-normal text-white font-aeonik mb-8">
            The 3 Bottlenecks:
          </h3>

          <div className="flex flex-col gap-2">
            {bottlenecks.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[280px] md:h-[200px] rounded-3xl overflow-hidden group border border-white/10"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#051135] via-[#051135]/80 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-2xl">
                  <h4 className="text-3xl md:text-4xl font-normal text-white font-aeonik mb-4">
                    {item.title}
                  </h4>
                  <p className="text-[#9EB3CF] text-lg font-bwmss01 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottleNecks;
