"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import "swiper/css";
// import "swiper/css/auto-height"; // Commented out to avoid error if file doesn't exist, will try if needed.
import Button from "../component/Button";
import shadow from "../../../public/shadow/tstmonls.svg";
import shadow2 from "../../../public/shadow/flat.svg";

const testimonials = [
  {
    id: "google",
    logo: "/testimonials/logos/google.png",
    logoWidth: 120,
    logoHeight: 40,
    name: "Chris (Christoph) Bregler",
    title: "Director / Principal Scientist @ Google",
    image: "/testimonials/chris_bregler.webp",
    quote:
      "Arjun is a great researcher / scientist / and entrepreneur. I first learned about his research at MPI on his movie-reshape work that made a big splash in the community, and subsequently I managed to recruit him to come to NYU as a post doc in our lab, where he kept pushing state of the art research in 3D people estimation with conv nets. This was during a time where conv nets made the next leap, and Arjun was one of the pioneers working in my lab to tackle people tracking with conv nets. He also collaborated with Yann Lecun's lab, as well as kept collaborating internationally with other leading research teams. It was a joy to work with him, he was a very productive and strong researcher!",
    link: "https://www.linkedin.com/in/chrisbregler/",
  },
  {
    id: "meta",
    logo: "/testimonials/logos/meta1.svg",
    logoWidth: 120,
    logoHeight: 40,
    name: "Yann LeCun",
    title: "VP & Chief AI Scientist @ Meta",
    image: "/testimonials/yann-lecun.jpg",
    quote:
      "I had the pleasure of working with Arjun while he was a PhD student at NYU. We co-authored a number of papers together on deep unsupervised learning methods. Unsupervised learning and deep learning are very popular topics today, but Arjun worked on this before much of the world had even heard of deep learning. He co-authored some of the very early work on body pose estimation and object localization with convolutional networks.",
    link: "https://www.linkedin.com/in/yann-lecun",
  },
  {
    id: "liftlab",
    logo: "/testimonials/logos/liftlab.webp",
    logoWidth: 120,
    logoHeight: 40,
    name: "Nitin Kumar",
    title: "Chief Technology Officer @ LiftLab",
    image: "/testimonials/nitin-kumar.png",
    quote:
      "Arjun's dedication and innovative approach significantly accelerated our projects success at Incivus. His expertise and commitment to excellence make fastcode an invaluable asset for any tech endeavor. His ability to navigate complex challenges with ease and his drive for continuous improvement stand out. I highly recommend Arjun and fastcode for any business looking to leverage cutting-edge technology solutions.",
    link: "https://www.linkedin.com/in/nitin-kj",
  },
  {
    id: "munich",
    logo: "/testimonials/logos/munichUniv.png",
    logoWidth: 120,
    logoHeight: 40,
    name: "Fabian Flohr",
    title:
      "Professor of Machine learning @ Munich University of Applied Sciences",
    image: "/testimonials/flohr_fabian.jpg",
    quote:
      "I had the pleasure of working with Arjun on a project focused on pedestrian pose estimation for autonomous driving. I genuinely enjoyed collaborating with him. His expertise in computer vision and commitment to innovation were pivotal in achieving our project goals. I am confident that Arjun and his team at Fastcode.ai will be an invaluable asset in any future endeavor and highly recommend him.",
    link: "https://www.linkedin.com/in/fabian-flohr-a99031115",
  },
  {
    id: "bosch",
    logo: "/testimonials/logos/bosch.png",
    logoWidth: 120,
    logoHeight: 40,
    name: "Bindu Santha Philip",
    title:
      "Vice President Technology - Autonomous driving Functions and Data enablers @ Bosch Global Software Technologies India",
    image: "/testimonials/bindu-santha.png",
    quote:
      "I have been working with Arjun and his team for over four years now. Together we have been working and solving complex AI computer vision problems in the space of Autonomous driving Software. Arjun brings with him a very deep understanding of how to apply AI in the autonomous driving space. His connection to academia and industry differentiates his contribution from being just theoretical research and more towards application research. Arjun’s team working on the projects are brilliant, resourceful and extremely effective at cracking very difficult problems and delivering state of the art CV software. I highly recommend Arjun and his engineers for their deep knowledge on AI CV , along with their excellent professionalism. It has been great working with Arjun and team over the last many years.",
    link: "https://www.linkedin.com/in/bindu-santha-philip-b6462956",
  },
];

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleLogoClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section className="bg-[#00081F] py-20 overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl text-center text-white mb-16 font-aeonik">
          Voices from the Community
        </h2>

        {/* Navigation Logos */}
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center items-center gap-6 md:gap-16 mb-12 no-scrollbar">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 cursor-pointer pb-2 md:pb-4 transition-all duration-300 relative group ${
                activeIndex === index
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
              onClick={() => handleLogoClick(index)}
            >
              <div className="relative h-8 md:h-12 w-20 md:w-32 flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.id}
                  fill
                  className={`object-contain transition-all duration-300 ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }`}
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
                  <div
                    className="h-full bg-white transition-all ease-linear"
                    style={{
                      width: "100%",
                      animation: "progress 5s linear",
                    }}
                  />
                  <style jsx>{`
                    @keyframes progress {
                      0% {
                        width: 0%;
                      }
                      100% {
                        width: 100%;
                      }
                    }
                  `}</style>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content Slider */}
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto border border-gray-800 rounded-[18px] p-6 md:p-12 bg-[#000000]">
            <Swiper
              modules={[Autoplay, Controller]}
              spaceBetween={30}
              slidesPerView={1}
              autoHeight={true}
              observer={true}
              observeParents={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => {
                swiperRef.current = { swiper };
              }}
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
              }}
              speed={500}
              className="w-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-gray-900">
                        {/* Using a gradient overlay to match the blueish tint in screenshot if needed, but plain image first */}
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        {/* Blue tint overlay if needed based on screenshot description "Dark background" usually images match. 
                             Screenshot shows blue tint on the person? "Left side: A large photo of a person... Dark blue/black".
                             The screenshot in my mind (from standard dark mode designs) often has clean images.
                             I'll leave it clean or add a subtle overlay if requested.
                         */}
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-2/3 flex flex-col justify-between py-2">
                      <div>
                        <p className="text-[#9EB3CF] text-sm md:text-lg mb-8 font-bwmss01 font-light">
                          {item.quote}
                        </p>
                      </div>
                      <div className="relative z-10">
                        <div className="border-t border-gray-800 pt-8 mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <h3 className="text-white text-xl md:text-2xl font-bold font-aeonik mb-1">
                              {item.name}
                            </h3>
                            <p className="text-gray-400 font-aeonik text-sm md:text-base">
                              {item.title}
                            </p>
                          </div>

                          {/* <Link 
                            href={item.link} 
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded transition-colors duration-300 font-medium text-sm"
                        >
                            Read More
                            <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 16 16" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="transform rotate-0"
                            >
                                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                            </svg>
                        </Link> */}
                          <div className="w-fit">
                            <Button to={item.link} name="Read More" />
                          </div>
                        </div>
                        {/* <div className="absolute bottom-0 right-0 w-full h-full z-[-1]">
                          <Image
                            src={shadow2}
                            alt="Shadow"
                            fill
                            className="object-cover scale-[100%] blur-[100px]"
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute top-[80px] left-0 w-full h-full z-[-1]">
            <Image
              src={shadow}
              alt="Shadow"
              fill
              className="object-contain scale-[120%] blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
