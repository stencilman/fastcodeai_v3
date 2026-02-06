import React from "react";
import Image from "next/image";
import image2 from "../../../../../public/mission/image2.png";
import dot2 from "../../../../../public/dots/dot_image2.png";
import Button from "../../Button";

const Operational = ({title, description, buttonText, buttonLink, secondaryButtonText, secondaryButtonLink, bgImage = image2, bgImageAlt = "Mission Background"}) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-12 lg:py-24 px-4 md:px-12 lg:px-20 bg-[#00081F] font-aeonik">
      <div className=" mx-auto ">
        {/* Main Card Wrapper */}
        <div className="relative w-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
          {/* Background Gradient & Image (Scoped to the card) */}
          <div className="absolute inset-0 bg-cusgrad opacity-100 z-0"></div>
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={bgImage}
              alt={bgImageAlt}
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
              className="object-cover object-center opacity-100 z-10"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
            {/* Title */}
            <h2 className="text-xl md:text-4xl mb-2 tracking-wide font-normal">
             {title}
            </h2>

            {/* Main Content Area */}
            <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
              {/* Subtitle */}
              {/* <h3 className="text-2xl md:text-4xl font-normal mb-2 leading-normal">
                Ready to Operationalize Your AI?
              </h3> */}

              {/* Description */}
              <p className="text-base md:text-lg text-[#9EB3CF] mb-16 leading-relaxed max-w-4xl mx-auto font-light">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button name={buttonText} to={buttonLink} />
                {secondaryButtonText && secondaryButtonLink && (
                  <Button 
                    name={secondaryButtonText} 
                    to={secondaryButtonLink} 
                    type="outline"
                    target="_blank"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operational;
