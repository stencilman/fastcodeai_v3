import React from "react";
import Image from "next/image";
import IpImage from "../../../../../public/what-we-do/co-creation/philosophy/ip.png";
import DomainImage from "../../../../../public/what-we-do/co-creation/philosophy/domain.png";
import SpeedImage from "../../../../../public/what-we-do/co-creation/philosophy/speed.png";

const Philosophy = () => {
  const cards = [
    {
      title: "Shared IP",
      description:
        "We build technology that belongs to you. Unlike traditional vendors, we ensure you own the IP, securing your competitive advantage.",
      image: IpImage,
    },
    {
      title: "Domain + Tech",
      description:
        'You bring the "What" (Industry Insights), and we provide the "How" (Tech). Together, we bridge the gap between domain expertise and digital execution.',
      image: DomainImage,
    },
    {
      title: "Speed to Value",
      description:
        "By using our pre-built data connectors and modular components, we accelerate deployment, helping you realize value in weeks, not years.",
      image: SpeedImage,
    },
  ];

  return (
    <section className=" w-full py-24  bg-[#00081F] ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-8 font-aeonik tracking-wide">
            The Philosophy
          </h2>
          <p className="text-lg md:text-xl text-[#9EB3CF] font-bwmss01 max-w-3xl mx-auto">
            Traditional agencies get paid whether your product succeeds or
            fails. We work differently. We invest our engineering resources into
            your vision, ensuring our incentives are perfectly aligned with your
            success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-[290px] md:h-[620px] w-full rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0C1C46]/30 via-transparent to-[#020F3B]/95" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Title at top */}
                <div className="w-full text-center mt-8">
                  <h3 className="text-3xl font-normal text-white font-aeonik tracking-wide drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>

                {/* Description at bottom */}
                <div className="w-full text-center mb-6">
                  <p className="text-[#9EB3CF] text-base md:text-lg font-bwmss01  drop-shadow-md">
                    {card.description}
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

export default Philosophy;
