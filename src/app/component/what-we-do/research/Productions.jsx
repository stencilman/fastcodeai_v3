"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import production1 from "../../../../../public/what-we-do/research/production/production1.png";
import production2 from "../../../../../public/what-we-do/research/production/production2.png";
import production3 from "../../../../../public/what-we-do/research/production/production3.png";
import ShadowBlob from "../../common/ShadowBlob";

const tabs = [
  {
    id: 1,
    title: "Too Hard",
    image: production1,
    caption:
      "Important problems get ignored because they require niche mathematical expertise.",
  },
  {
    id: 2,
    title: "Talent Scarcity",
    image: production2,
    caption:
      "Elite AI researchers are rare and expensive, slowing down experimentation and delivery.",
  },
  {
    id: 3,
    title: "Resource Drain",
    image: production3,
    caption:
      "Internal teams burn cycles on maintenance and bug fixes instead of novel R&D.",
  },
];

const Productions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const progressRefs = useRef([]);

  useEffect(() => {
    progressRefs.current = progressRefs.current.slice(0, tabs.length);

    const updateProgress = (swiper) => {
      const currentIndex = swiper.realIndex;
      progressRefs.current.forEach((ref, index) => {
        if (!ref) return;
        if (index === currentIndex) {
          ref.style.width = `${
            100 -
            ((swiper.autoplay.running ? swiper.autoplay.timeLeft : 5000) /
              5000) *
              100
          }%`;
        } else {
          ref.style.width = index < currentIndex ? "100%" : "0%";
        }
      });
    };

    const swiper = mainSwiperRef.current?.swiper;
    if (swiper) {
      swiper.on("autoplayTimeLeft", (s) => updateProgress(s));
      swiper.on("slideChange", () => setActiveIndex(swiper.realIndex));
      return () => {
        swiper.off("autoplayTimeLeft");
        swiper.off("slideChange");
      };
    }
  }, []);

  return (
    <section className="bg-[#00081F] py-16 md:py-24 relative">
      <ShadowBlob />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          <h2 className="text-3xl md:text-5xl font-medium text-white font-aeonik leading-tight">
            Production Kills
            <br />
            Innovation.
          </h2>
          <p className="text-[#9EB3CF] text-base md:text-lg leading-relaxed max-w-[520px] font-bwmss01">
            Your internal team is consumed by bug fixes, maintenance, and
            shipping features. They don’t have the bandwidth to read the latest
            arXiv papers or experiment with novel architectures.
          </p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`shrink-0 cursor-pointer relative rounded-lg px-6 py-3 transition-all duration-300 border ${
                index === activeIndex
                  ? "bg-[#0A1329] border-[#1E293B]"
                  : "bg-transparent border-[#1E293B] hover:border-white/30"
              }`}
              onClick={() => mainSwiperRef.current?.swiper.slideToLoop(index)}
            >
              {index === activeIndex && (
                <span
                  ref={(el) => (progressRefs.current[index] = el)}
                  className="absolute bottom-0 left-0 h-[2px] bg-[#575757] transition-all duration-100 ease-linear"
                  style={{ width: "0%" }}
                />
              )}
              <div
                className={`text-sm md:text-base font-medium whitespace-nowrap ${
                  index === activeIndex ? "text-white" : "text-gray-400"
                }`}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <Swiper
            loop={true}
            ref={mainSwiperRef}
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="case-studies-swiper"
          >
            {tabs.map((tab) => (
              <SwiperSlide key={tab.id} className="pb-6">
                <div className="bg-[#000000] rounded-3xl border border-[#FFFFFF57] p-6 md:p-10">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10">
                    <div className="relative aspect-[16/7] bg-black">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        priority
                      />
                    </div>

                    <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 rounded-2xl border border-white/10 bg-[#0A0F1C]/80 backdrop-blur-md px-4 py-4 md:px-6 md:py-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 17h16M6 21h12M8 3h8m-1.5 0v6m-5 0V3m5 6l2 8M9.5 9l-2 8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                          {tab.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Productions;
