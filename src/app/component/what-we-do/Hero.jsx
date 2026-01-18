import React from "react";
import Image from "next/image";
import Button from "../../component/Button";

const Hero = ({ HeroImage, title, description, buttonText, buttonLink }) => {
  return (
    <section className="relative bg-[#00081F] min-h-[100vh] flex flex-col md:flex-row items-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image Container */}
      {/* Mobile: Relative at bottom, full width. Desktop: Absolute right, 65% width */}
      <div className="relative w-full h-[50vh] md:absolute md:top-0 md:right-0 md:w-[65%] md:h-full z-0 order-2 md:order-none mt-auto md:mt-0">
        <Image
          src={HeroImage}
          alt={title}
          fill
          className="object-cover object-top md:object-center"
          priority
        />
        {/* Desktop Gradient Overlay: Fades from solid background color (left) to transparent (right) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#00081F] via-[#00081F]/90 to-transparent" />

        {/* Mobile Gradient Overlay: Fades from solid background (top) to transparent (bottom) to blend with text area */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#00081F] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-0 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-start h-full order-1 md:order-none flex-grow md:flex-grow-0 pb-8 md:pb-0">
        {/* Content */}
        <div className="w-full md:w-1/2 z-20 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-[#8F9BB7] text-lg font-bwmss01 block mb-2 md:mb-4">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl text-white font-normal font-aeonik tracking-wide mb-6">
            {title}
          </h1>
          <p className="text-lg text-[#B0B8C8] mb-8 font-bwmss01 max-w-xl">
            {description}
          </p>
          <div className="w-fit">
            <Button to={buttonLink} name={buttonText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
