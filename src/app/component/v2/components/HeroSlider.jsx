"use client";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "../../morphing-dialog";
import { cn } from "../../../../lib/utils";
import Button from "../../Button";
import FormModal from "../../../contact/sections/FormModal";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Info } from "lucide-react";

const dialogTransition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.8,
};

const SlideMorphingDialog = ({
  category,
  detail,
  triggerClassName,
  slideId,
  onOpenChange,
  index,
  showNumber = false,
}) => {
  const descriptionParagraphs = useMemo(() => {
    if (!detail?.description) return [];

    if (Array.isArray(detail.description)) {
      return detail.description.filter(Boolean);
    }

    return detail.description
      .split(/\n{2,}|\r?\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }, [detail?.description]);

  return (
    <MorphingDialog
      key={`dialog-${slideId}`}
      transition={dialogTransition}
      onOpenChange={onOpenChange}
    >
      <MorphingDialogTrigger
        className={cn(
          "group inline-flex w-auto items-center gap-3 rounded-[10px] border border-white/30 bg-[#1A2758]/90 px-6 py-3 text-white transition hover:border-white/60 hover:bg-[#1A2758]",
          showNumber &&
            "bg-black hover:bg-black/90 border-transparent pr-4 pl-4",
          triggerClassName
        )}
      >
        <MorphingDialogTitle className="text-sm font-medium tracking-wide text-white flex items-center gap-3">
          {showNumber && (
            <div className="flex items-center gap-3 mr-2">
              <span className="text-2xl font-light text-[#424242]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/60"></span>
            </div>
          )}
          {category}
        </MorphingDialogTitle>
        <span className="flex p-2 items-center justify-center rounded-md border border-white/40 transition bg-[#424242]">
          {/* <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transition group-hover:text-[#0A1C3A]"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          <Info className="w-5 h-5" />
        </span>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="w-[90vw] max-w-[580px] border border-white/15 bg-[#030b17]/95 p-6 text-white shadow-2xl backdrop-blur-md rounded-md relative md:top-[-110px]">
          <MorphingDialogClose className="text-white/70 transition hover:text-white" />
          <div className="space-y-4 pr-1 md:pr-2">
            <MorphingDialogTitle className="text-2xl font-semibold leading-snug text-white md:text-[28px]">
              {/* {detail?.title ?? category} */}
              {category}
            </MorphingDialogTitle>

            <MorphingDialogSubtitle className="text-sm uppercase tracking-[0.2em] text-white/60">
              {detail?.title}
            </MorphingDialogSubtitle>

            {descriptionParagraphs.length > 0 && (
              <MorphingDialogDescription className="space-y-3 text-sm leading-6 text-[#9EB3CF]">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </MorphingDialogDescription>
            )}
            {detail?.ctaText && (
              <Link
                href={detail?.ctaLink || "#"}
                target={detail?.ctaLink ? "_blank" : undefined}
                className="inline-flex items-center gap-2 rounded-[4px] border border-white/25 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                {detail.ctaText}
                <span className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="#0A1C3A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

const HeroSlider = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  // Control autoplay based on dialog state
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isDialogOpen) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [isDialogOpen]);

  const slides = [
    {
      id: 1,
      bgVideo: "/v2/hero/odo.mp4",
      mobileVideo: "/v2/hero/mobile/odo.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "ODO Research Paper",
      detail: {
        title: "Our latest breakthrough in AI-powered body reshaping:",
        description:
          "Fastcode AI introduces Odo, a cutting-edge diffusion model that transforms human body shapes while perfectly preserving identity, clothing, and background. Built on the first large-scale dataset of 18K+ images, achieving 45% lower reconstruction error than existing methods.",
        ctaText: "Experience the demo",
        ctaLink: "https://research.fastcode.ai/odo",
      },
    },
    {
      id: 2,
      bgVideo: "/v2/hero/roadside-assist.mp4",
      mobileVideo: "/v2/hero/mobile/roadside-assist.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      // subtitle: "With Cutting-Edge AI\nResearch Solutions",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "Roadside User Handling",
      detail: {
        title: "Advanced AI for safer roads:",
        description:
          "Our lane assist and vulnerable road user detection system for Bosch enhanced traffic sign recognition for Level 2-3 autonomy. This project sparked long-term partnerships with Mercedes and Bosch, leading to multiple breakthrough collaborations in autonomous driving technology.",
        ctaText: "View Documentation",
        ctaLink: "/VRU-Pose-SSD Article-May-2021.pdf",
      },
    },
    {
      id: 3,
      bgVideo: "/v2/hero/mbux.mp4",
      mobileVideo: "/v2/hero/mobile/mbux.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "MBUX Case Study",
      detail: {
        title: "Transforming luxury driving with AI:",
        description:
          "We developed MBUX Vision, Mercedes-Benz's revolutionary gesture and occupant monitoring system, processing 10TB+ of cabin data for intuitive in-car experiences. This flagship project cemented our long-term partnerships with Mercedes and Bosch, leading to continuous innovation in automotive AI.",
        ctaText: "Watch demo video",
        ctaLink: "https://www.youtube.com/watch?v=cjM_oYk_Fqg",
      },
    },
    {
      id: 4,
      bgVideo: "/v2/hero/pose-estimation.mp4",
      mobileVideo: "/v2/hero/mobile/pose-estimation.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "Pose Estimation",
      detail: {
        title:
          "Discover the pioneering research that transformed computer vision:",
        description:
          "This landmark paper by Arjun Jain (Fastcode AI's CEO) and collaborators introduced the revolutionary hybrid CNN-MRF architecture for human pose estimation, garnering 2149+ citations and establishing new benchmarks in the field.",
        ctaText: "Read the full paper",
        ctaLink:
          "https://proceedings.neurips.cc/paper_files/paper/2014/hash/893643e2dcd4b25212defd18141d58c4-Abstract.html",
      },
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] md:h-screen">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        // speed={1500}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
        onAutoplayTimeLeft={(s, time, progress) => {
          containerRef.current?.style.setProperty("--progress", 1 - progress);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className="relative overflow-hidden bg-[#00081F]"
          >
            {({ isActive }) => (
              <>
                {/* Background video */}
                <div className="absolute inset-0">
                  <video
                    src={slide.bgVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hidden md:block h-full w-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#00081F] via-[#00081F]/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:justify-center h-full md:h-[100vh] pt-[120px] md:pt-0 pb-28 md:pb-0 px-4 md:px-16 lg:px-28">
                  <div className="max-w-[700px] text-left">
                    <h1 className="text-3xl md:text-5xl text-white font-bold  font-aeonik tracking-wide mb-6 ">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-white mb-8 font-bwmss01 whitespace-pre-line">
                      {slide.subtitle}
                    </p>
                    <div className="w-fit">
                      <Button
                        onClick={() => setIsFormModalOpen(true)}
                        name={slide.ctaText}
                      />
                    </div>

                    {/* Mobile inline video card (separate from background) */}
                    <div className="md:hidden mt-8 w-full">
                      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-lg">
                        <video
                          src={slide.mobileVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Bottom Bar */}
                <div className="absolute bottom-6 left-4 right-4 z-10 md:hidden flex flex-col gap-4">
                  <SlideMorphingDialog
                    category={slide.category}
                    detail={slide.detail}
                    triggerClassName="w-full justify-between bg-black/80 backdrop-blur-sm border-white/10"
                    slideId={slide.id}
                    index={index}
                    showNumber={true}
                    onOpenChange={setIsDialogOpen}
                  />

                  {/* Progress Indicators */}
                  <div className="flex w-full gap-2 px-1">
                    {slides.map((_, i) => (
                      <div
                        key={i}
                        className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/20"
                      >
                        <div
                          className="h-full w-full bg-white origin-left"
                          style={{
                            transform:
                              i === activeSlideIndex
                                ? "scaleX(var(--progress))"
                                : i < activeSlideIndex
                                ? "scaleX(1)"
                                : "scaleX(0)",
                            transition:
                              i === activeSlideIndex
                                ? "none"
                                : "transform 0.3s linear",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Form Modal */}
      <FormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />

      {/* Right Side Vertical Navigation (Desktop) */}
      <div className="hidden md:flex absolute top-1/2 right-12 z-10 flex-col gap-4 transform -translate-y-1/2 items-end">
        {slides.map((slide, index) => {
          const isActive = activeSlideIndex === index;
          return (
            <div key={slide.id} className="relative">
              {isActive ? (
                <SlideMorphingDialog
                  category={slide.category}
                  detail={slide.detail}
                  slideId={slide.id}
                  index={index}
                  showNumber={true}
                  onOpenChange={setIsDialogOpen}
                />
              ) : (
                <button
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  className="group flex items-center gap-3 px-4 py-2 text-white/40 hover:text-white transition-colors duration-300"
                >
                  <span className="text-sm font-normal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium tracking-wide">
                    {slide.category}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlider;
