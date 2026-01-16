import React from "react";
import automotiveIcon from "../../../../../public/what-we-do/platform-development/automotive.png";
import Image from "next/image";

const Automotive = () => {
  return (
    <section className="relative w-full bg-[#00081F] py-12 md:py-20 px-4 md:px-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Main Title */}
        <div className="text-center mb-8 md:mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-normal text-white font-aeonik tracking-wide">
            Built for Automotive.
            <br className="md:hidden" /> Ready for You.
          </h2>
        </div>

        {/* Mobile Layout - Stacked Vertically */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Central Graphic - Mobile */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            <Image
              src={automotiveIcon}
              alt="AR/VR person interacting with holographic car model"
              width={1000}
              height={700}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Text Box 1 - Mobile */}
          <div className="w-full">
            <div className="bg-black/95 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <p className="text-white text-base font-bwmss01 leading-relaxed">
                We cut our teeth on some of the hardest data problems in the
                automotive industry— sensor fusion, ADAS validation, warranty
                analysis, supply chain prediction.
              </p>
            </div>
          </div>

          {/* Text Box 2 - Mobile */}
          <div className="w-full">
            <div className="bg-black/95 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <p className="text-white text-base font-bwmss01 leading-relaxed">
                That complexity made our platform robust. Now we're bringing the
                same firepower to you.
              </p>
            </div>
          </div>

          {/* Text Box 3 - Mobile */}
          <div className="w-full">
            <div className="bg-black/95 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <p className="text-white text-base font-bwmss01 leading-relaxed text-center">
                If you have complex data and high stakes, we should talk.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Overlapping Elements */}
        <div className="hidden md:flex relative min-h-[800px] lg:min-h-[900px] items-center justify-center">
          {/* Central Graphic Area - AR/VR person with holographic car */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
              <div className="relative w-full h-full min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
                {/* Image - AR/VR person interacting with holographic car */}
                <Image
                  src={automotiveIcon}
                  alt="AR/VR person interacting with holographic car model"
                  width={1000}
                  height={700}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Box 1 - Left Side (below title, slightly left of center) */}
          <div className="absolute left-8 lg:left-16 top-[22%] z-10 w-full max-w-[320px] lg:max-w-[360px]">
            <div className="bg-black/95 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <p className="text-white text-lg font-bwmss01 leading-relaxed">
                We cut our teeth on some of the hardest data problems in the
                automotive industry— sensor fusion, ADAS validation, warranty
                analysis, supply chain prediction.
              </p>
            </div>
          </div>

          {/* Text Box 2 - Right Side (above the car, right side) */}
          <div className="absolute right-8 lg:right-16 top-[20%] z-10 w-full max-w-[320px] lg:max-w-[360px]">
            <div className="bg-black/95 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <p className="text-white text-lg font-bwmss01 leading-relaxed">
                That complexity made our platform robust. Now we're bringing the
                same firepower to you.
              </p>
            </div>
          </div>

          {/* Text Box 3 - Bottom Center (below the car) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-12 lg:bottom-16 z-10 w-full max-w-lg lg:max-w-xl">
            <div className="bg-black/95 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <p className="text-white text-lg font-bwmss01 leading-relaxed text-center">
                If you have complex data and high stakes, we should talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automotive;
