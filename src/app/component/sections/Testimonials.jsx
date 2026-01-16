"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';



// import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from "next/image";
import Slider from "../Slider";

const Testimonials = () => {
  return (
    <div className="w-full relative h-[100vh] pl-[160px] pr-[127px] bg-[#00081F]  flex flex-col ">
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          module={[EffectCoverflow]}
        >
          <SwiperSlide>
            <div
              className="relative w-[724px] h-[593px] rounded-[18px] flex flex-col items-center justify-center pl-[62px] pr-[32px]
             shadow-lg border border-[#1A2758]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <p className="text-white text-lg ">
                Arjun is a great researcher / scientist / and entrepreneur. I
                first learned about his research at MPI on his movie-reshape
                work that made a big splash in the community, and subsequently I
                managed to recruit him to come to NYU as a post doc in our lab,
                where he kept pushing state of the art research in 3D people
                estimation with conv nets. This was during a time where conv
                nets made the next leap, and Arjun was one of the pioneers
                working in my lab to tackle people tracking with conv nets. He
                also collaborated with Yann Lecun&aposs lab, as well as kept
                collaborating internationally with other leading research teams.
                It was a joy to work with him, he was a very productive and
                strong researcher!
              </p>
              <div className="w-full flex justify-between items-center pt-[34px]">
                <div className="flex gap-[11px]">
                  <Image
                    className="rounded-full "
                    src="/testimonials/chris_bregler.webp"
                    width="65"
                    height="65"
                    alt="chris_bregler"
                  />
                  <div className="">
                    <h4 className="text-[19px] leading-[21px] text-white font-bold">
                      Chris (Christoph) Bregler
                    </h4>
                    <p className="text-[17px] leading-[21px] text-white">
                      Director / Principal Scientist @ Google
                    </p>
                  </div>
                </div>
                <div className="rounded-[27px] w-[128px h-[47px] text-[#FFFFFF] text-base border border-[#FFFFFF] flex justify-between items-center px-[15px]">
                  Read More
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-[724px] h-[593px] rounded-[18px] flex flex-col items-center justify-center pl-[62px] pr-[32px]
             shadow-lg border border-[#1A2758]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <p className="text-white text-lg ">
                Arjun is a great researcher / scientist / and entrepreneur. I
                first learned about his research at MPI on his movie-reshape
                work that made a big splash in the community, and subsequently I
                managed to recruit him to come to NYU as a post doc in our lab,
                where he kept pushing state of the art research in 3D people
                estimation with conv nets. This was during a time where conv
                nets made the next leap, and Arjun was one of the pioneers
                working in my lab to tackle people tracking with conv nets. He
                also collaborated with Yann Lecun&aposs lab, as well as kept
                collaborating internationally with other leading research teams.
                It was a joy to work with him, he was a very productive and
                strong researcher!
              </p>
              <div className="w-full flex justify-between items-center pt-[34px]">
                <div className="flex gap-[11px]">
                  <Image
                    className="rounded-full "
                    src="/testimonials/Bindu.webp"
                    width="65"
                    height="65"
                    alt="Bindu"
                  />
                  <div className="">
                    <h4 className="text-[19px] leading-[21px] text-white font-bold">
                      Chris (Christoph) Bregler
                    </h4>
                    <p className="text-[17px] leading-[21px] text-white">
                      Director / Principal Scientist @ Google
                    </p>
                  </div>
                </div>
                <div className="rounded-[27px] w-[128px h-[47px] text-[#FFFFFF] text-base border border-[#FFFFFF] flex justify-between items-center px-[15px]">
                  Read More
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" w-[724px] h-[593px] rounded-[18px] flex flex-col items-center justify-center pl-[62px] pr-[32px]
             shadow-lg border border-[#1A2758]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <p className="text-white text-lg ">
                Arjun is a great researcher / scientist / and entrepreneur. I
                first learned about his research at MPI on his movie-reshape
                work that made a big splash in the community, and subsequently I
                managed to recruit him to come to NYU as a post doc in our lab,
                where he kept pushing state of the art research in 3D people
                estimation with conv nets. This was during a time where conv
                nets made the next leap, and Arjun was one of the pioneers
                working in my lab to tackle people tracking with conv nets. He
                also collaborated with Yann Lecun&aposs lab, as well as kept
                collaborating internationally with other leading research teams.
                It was a joy to work with him, he was a very productive and
                strong researcher!
              </p>
              <div className="w-full flex justify-between items-center pt-[34px]">
                <div className="flex gap-[11px]">
                  <Image
                    className="rounded-full "
                    src="/testimonials/Fabian.webp"
                    width="65"
                    height="65"
                    alt="Fabian"
                  />
                  <div className="">
                    <h4 className="text-[19px] leading-[21px] text-white font-bold">
                      Chris (Christoph) Bregler
                    </h4>
                    <p className="text-[17px] leading-[21px] text-white">
                      Director / Principal Scientist @ Google
                    </p>
                  </div>
                </div>
                <div className="rounded-[27px] w-[128px h-[47px] text-[#FFFFFF] text-base border border-[#FFFFFF] flex justify-between items-center px-[15px]">
                  Read More
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
     
    </div>
  );
};

export default Testimonials;
