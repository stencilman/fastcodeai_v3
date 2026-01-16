// components/Slider.js
import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop:"true",
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide text-white border border-white w-[200px] h-[200px]">
          Slide 1
        </div>
        <div className="swiper-slide text-white border border-white w-[200px] h-[200px]">
          Slide 2
        </div>
        <div className="swiper-slide text-white border border-white w-[200px] h-[200px]">
          Slide 3
        </div>
        <div className="swiper-slide text-white border border-white w-[200px] h-[200px]">
          Slide 4
        </div>
        <div className="swiper-slide text-white border border-white w-[200px] h-[200px]">
          Slide 5
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;
