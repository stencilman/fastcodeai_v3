import React from "react";
import Image from "next/image";
import image2 from "../../../../../public/mission/image2.png";
import dot2 from "../../../../../public/dots/dot_image2.png";

const Mission = () => {
  return (
    <section className="relative w-full py-12 lg:py-24 px-4 md:px-12 lg:px-20 bg-[#00081F] font-aeonik">
      <div className=" mx-auto ">
        {/* Main Card Wrapper */}
        <div className="relative w-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
          {/* Background Gradient & Image (Scoped to the card) */}
          <div className="absolute inset-0 bg-cusgrad opacity-100 z-0"></div>
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={image2}
              alt="Mission Background"
              fill
              className="object-cover object-center opacity-100 mix-blend-luminosity"
              priority
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[#020F3B]/60 mix-blend-multiply"></div>
            <Image
              src={dot2}
              alt="Mission Dots"
              fill
              className="object-contain object-center opacity-100 z-10"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
            {/* Title */}
            <h2 className="text-4xl md:text-6xl mb-12 lg:mb-20 tracking-wide font-normal">
              Our Mission
            </h2>

            {/* Main Content Area */}
            <div className="max-w-5xl mx-auto w-full">
              {/* Subtitle */}
              <h3 className="text-2xl md:text-4xl font-normal mb-8 leading-tight">
                Bridging the Gap Between Research and Reality.
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-200 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
                The pace of AI research is accelerating, but the path to
                production remains broken. Our mission is to operationalize the
                bleeding edge. We exist to take state-of-the- art algorithms
                from academic papers and engineer them into robust, scalable,
                and secure enterprise infrastructure.
              </p>

              {/* Core Goal Card */}
              <div className="w-full bg-[#050A1F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Subtle glow effect for card */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                  <h4 className="text-2xl md:text-3xl mb-4 font-normal">
                    Core Goal
                  </h4>
                  <p className="text-base md:text-lg text-gray-300 font-light">
                    To make &quot;Deep Tech&quot; accessible, reliable, and
                    deployable for every enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
