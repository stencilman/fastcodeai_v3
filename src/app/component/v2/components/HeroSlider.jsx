"use client";

import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import Image from "next/image";
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
import dynamic from "next/dynamic";
import Button from "../../Button";
import { Info } from "lucide-react";

const FormModal = dynamic(() => import("../../../contact/sections/FormModal"), {
  ssr: false,
});

/* ═══════════════════════════════════════════════════════════════════
   Slide Data
   ═══════════════════════════════════════════════════════════════════ */

const SLIDES = [
  {
    id: 1,
    bgVideo: "/v2/hero/roadside-assist.mp4",
    mobileVideo: "/v2/hero/mobile/roadside-assist.mp4",
    bgPoster: "/v2/hero/poster/roadside-assist.webp",
    mobilePoster: "/v2/hero/mobile/poster/roadside-assist.webp",
    title: "Frontier AI. Enterprise Scale. Delivered.",
    subtitle:
      "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
    ctaText: "Discuss your AI Roadmap",
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
    id: 2,
    bgVideo: "/v2/hero/odo.mp4",
    mobileVideo: "/v2/hero/mobile/odo.mp4",
    bgPoster: "/v2/hero/poster/odo.webp",
    mobilePoster: "/v2/hero/mobile/poster/odo.webp",
    title: "Frontier AI. Enterprise Scale. Delivered.",
    subtitle:
      "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
    ctaText: "Discuss your AI Roadmap",
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
    id: 3,
    bgVideo: "/v2/hero/mbux.mp4",
    mobileVideo: "/v2/hero/mobile/mbux.mp4",
    bgPoster: "/v2/hero/poster/mbux.webp",
    mobilePoster: "/v2/hero/mobile/poster/mbux.webp",
    title: "Frontier AI. Enterprise Scale. Delivered.",
    subtitle:
      "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
    ctaText: "Discuss your AI Roadmap",
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
    bgPoster: "/v2/hero/poster/pose-estimation.webp",
    mobilePoster: "/v2/hero/mobile/poster/pose-estimation.webp",
    title: "Frontier AI. Enterprise Scale. Delivered.",
    subtitle:
      "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
    ctaText: "Discuss your AI Roadmap",
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

const AUTOPLAY_DELAY = 7000;

const DIALOG_TRANSITION = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.8,
};

/* ═══════════════════════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════════════════════ */

function parseDescriptionParagraphs(description) {
  if (!description) return [];
  if (Array.isArray(description)) return description.filter(Boolean);
  return description
    .split(/\n{2,}|\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/* ═══════════════════════════════════════════════════════════════════
   SlideMorphingDialog
   ═══════════════════════════════════════════════════════════════════ */

const SlideMorphingDialog = ({
  category,
  detail,
  triggerClassName,
  slideId,
  onOpenChange,
  index,
  showNumber = false,
}) => {
  const paragraphs = useMemo(
    () => parseDescriptionParagraphs(detail?.description),
    [detail?.description],
  );

  return (
    <MorphingDialog
      key={`dialog-${slideId}`}
      transition={DIALOG_TRANSITION}
      onOpenChange={onOpenChange}
    >
      <MorphingDialogTrigger
        className={cn(
          "group relative overflow-hidden inline-flex w-auto items-center gap-3 rounded-[10px] border border-white/30 bg-[#1A2758]/90 px-6 py-3 text-white transition hover:border-white/60 hover:bg-[#1A2758]",
          showNumber &&
            "bg-black hover:bg-black/90 border-transparent pr-4 pl-4",
          triggerClassName,
        )}
      >
        <MorphingDialogTitle className="text-sm font-medium tracking-wide text-white flex items-center gap-3">
          {showNumber && (
            <div className="flex items-center gap-3 mr-2">
              <span className="text-2xl font-light text-[#817e7e]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/60"></span>
            </div>
          )}
          {category}
        </MorphingDialogTitle>
        <span>
          <Info className="w-5 h-5" />
        </span>
        <div
          className="hidden md:block absolute bottom-0 left-0 h-[3px] w-full bg-[#eee5e5] origin-left"
          style={{ transform: "scaleX(var(--progress))" }}
        />
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="w-[90vw] max-w-[580px] border border-white/15 bg-[#030b17]/95 p-6 text-white shadow-2xl backdrop-blur-md rounded-md relative md:top-[-110px]">
          <MorphingDialogClose className="text-white/70 transition hover:text-white" />
          <div className="space-y-4 pr-1 md:pr-2">
            <MorphingDialogTitle className="text-2xl font-semibold leading-snug text-white md:text-[28px]">
              {category}
            </MorphingDialogTitle>

            <MorphingDialogSubtitle className="text-sm uppercase tracking-[0.2em] text-white/60">
              {detail?.title}
            </MorphingDialogSubtitle>

            {paragraphs.length > 0 && (
              <MorphingDialogDescription className="space-y-3 text-sm leading-6 text-[#9EB3CF]">
                {paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
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

/* ═══════════════════════════════════════════════════════════════════
   VideoController
   Handles lazy-loading + poster-to-video crossfade per slide.
   ═══════════════════════════════════════════════════════════════════ */

// const VideoController = ({
//   src,
//   isActive,
//   className,
//   preload = "none",
//   poster,
//   sizes = "100vw",
// }) => {
//   const videoRef = useRef(null);
//   const isFirstSlide = preload === "auto";
//   const [hasPlayed, setHasPlayed] = useState(false);
//   const [shouldLoad, setShouldLoad] = useState(isFirstSlide);

//   // Lazily load non-first slides when they become active
//   useEffect(() => {
//     if (isActive && !shouldLoad) setShouldLoad(true);
//   }, [isActive, shouldLoad]);

//   // Play / pause based on active state
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (isActive) {
//       video.play().catch(() => {});
//     } else {
//       video.pause();
//     }
//   }, [isActive, shouldLoad]);

//   const handlePlaying = useCallback(() => setHasPlayed(true), []);

//   return (
//     <div className={`relative ${className}`}>
//       {/* Poster overlay — fades out once video starts */}
//       <div
//         className={`absolute inset-0 z-10 transition-opacity duration-700 ${
//           hasPlayed ? "opacity-0 pointer-events-none" : "opacity-100"
//         }`}
//       >
//         {poster && shouldLoad && (
//           <Image
//             src={poster}
//             alt="Video poster"
//             fill
//             className="object-cover"
//             priority={isFirstSlide}
//             sizes={sizes}
//             {...(isFirstSlide ? { fetchPriority: "high" } : {})}
//           />
//         )}
//       </div>

//       {shouldLoad && (
//         <video
//           ref={videoRef}
//           src={src}
//           muted
//           loop
//           playsInline
//           preload={preload}
//           className="h-full w-full object-cover"
//           onPlaying={handlePlaying}
//         />
//       )}
//     </div>
//   );
// };
const VideoController = ({
  src,
  isActive,
  className,
  preload = "none",
  poster,
  sizes = "100vw",
}) => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const isFirst = preload === "auto";

  /* ---------------------------
     Mount video AFTER paint
  ---------------------------- */
  useEffect(() => {
    if (!isActive) return;

    const load = () => setShowVideo(true);

    if ("requestIdleCallback" in window) {
      requestIdleCallback(load);
    } else {
      setTimeout(load, 120);
    }
  }, [isActive]);

  /* ---------------------------
     Play only when visible
  ---------------------------- */
  useEffect(() => {
    if (!showVideo) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [showVideo]);

  return (
    <div className={`relative ${className}`}>

      {/* LCP Poster — MUST render instantly */}
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          priority={isFirst}
          sizes={sizes}
          className="object-cover"
        />
      )}

      {/* Video mounts AFTER LCP */}
      {showVideo && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};
/* ═══════════════════════════════════════════════════════════════════
   ProgressBar (mobile)
   ═══════════════════════════════════════════════════════════════════ */

const ProgressBar = ({ index, activeIndex }) => {
  const isCurrent = index === activeIndex;
  const isPast = index < activeIndex;

  return (
    <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/20">
      <div
        className="h-full w-full bg-white origin-left"
        style={{
          transform: isCurrent
            ? "scaleX(var(--progress))"
            : isPast
              ? "scaleX(1)"
              : "scaleX(0)",
          transition: isCurrent ? "none" : "transform 0.3s linear",
        }}
      />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   DesktopNav — right-side vertical navigation
   ═══════════════════════════════════════════════════════════════════ */

const DesktopNav = ({ activeIndex, onSlideChange, onDialogOpenChange }) => (
  <div className="hidden md:flex absolute top-1/2 right-12 z-10 flex-col gap-4 transform -translate-y-1/2 items-end">
    {SLIDES.map((slide, index) => {
      const isActive = activeIndex === index;
      return (
        <div key={slide.id} className="relative">
          {isActive ? (
            <SlideMorphingDialog
              category={slide.category}
              detail={slide.detail}
              slideId={slide.id}
              index={index}
              showNumber={true}
              onOpenChange={onDialogOpenChange}
            />
          ) : (
            <button
              onClick={() => onSlideChange(index)}
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
);

/* ═══════════════════════════════════════════════════════════════════
   MobileBottomBar — category pill + progress bars
   ═══════════════════════════════════════════════════════════════════ */

const MobileBottomBar = ({ slide, index, activeIndex, onDialogOpenChange }) => (
  <div className="absolute bottom-6 left-4 right-4 z-10 md:hidden flex flex-col gap-4">
    <SlideMorphingDialog
      category={slide.category}
      detail={slide.detail}
      triggerClassName="w-full justify-between bg-black/80 backdrop-blur-sm border-white/10"
      slideId={slide.id}
      index={index}
      showNumber={true}
      onOpenChange={onDialogOpenChange}
    />

    {/* Progress Indicators */}
    <div className="flex w-full gap-2 px-1">
      {SLIDES.map((_, i) => (
        <ProgressBar key={i} index={i} activeIndex={activeIndex} />
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   SlideContent — text + CTA + mobile video card
   ═══════════════════════════════════════════════════════════════════ */

const SlideContent = ({ slide, index, isActive, onCtaClick }) => (
  <div className="relative z-10 flex flex-col md:justify-center h-full md:h-[100vh] pt-[120px] md:pt-0 pb-28 md:pb-0 px-4 md:px-16 lg:px-28">
    <div className="max-w-[700px] text-left">
      <h1 className="text-3xl md:text-5xl text-white font-bold font-aeonik tracking-wide mb-6">
        {slide.title}
      </h1>
      <p className="text-lg text-white mb-8 font-bwmss01 whitespace-pre-line">
        {slide.subtitle}
      </p>
      <div className="w-fit">
        <Button onClick={onCtaClick} name={slide.ctaText} />
      </div>

      {/* Mobile inline video card */}
      <div className="md:hidden mt-8 w-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-lg">
          <VideoController
            src={slide.mobileVideo}
            isActive={isActive}
            preload={index === 0 ? "auto" : "none"}
            poster={slide.mobilePoster}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) calc(100vw - 2rem), 700px"
          />
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   HeroSlider (main)
   ═══════════════════════════════════════════════════════════════════ */

const HeroSlider = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const openFormModal = useCallback(() => setIsFormModalOpen(true), []);
  const closeFormModal = useCallback(() => setIsFormModalOpen(false), []);

  const goToSlide = useCallback(
    (index) => swiperRef.current?.slideToLoop(index),
    [],
  );

  // Pause / resume autoplay when the info dialog opens / closes
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;

    if (isDialogOpen) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }, [isDialogOpen]);

  // Hide the static SSR overlay (rendered in Hero.jsx) once Swiper is ready
  useEffect(() => {
    if (!swiperReady) return;
    const overlay = document.getElementById("hero-static-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    }
  }, [swiperReady]);

  // ── Swiper callbacks ──────────────────────────────────────────
  const handleSwiper = useCallback((swiper) => {
    swiperRef.current = swiper;
    setSwiperReady(true);
  }, []);

  const handleSlideChange = useCallback(
    (swiper) => setActiveSlideIndex(swiper.realIndex),
    [],
  );

  const handleAutoplayTimeLeft = useCallback((_s, _time, progress) => {
    containerRef.current?.style.setProperty("--progress", 1 - progress);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className="relative overflow-hidden bg-[#00081F]"
          >
            {({ isActive }) => (
              <>
                {/* Desktop background video + gradient */}
                <div className="absolute inset-0">
                  <VideoController
                    src={slide.bgVideo}
                    isActive={isActive}
                    preload={index === 0 ? "auto" : "none"}
                    poster={slide.bgPoster}
                    className="hidden md:block h-full w-full object-cover"
                  />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#00081F] via-[#00081F]/80 to-transparent" />
                </div>

                {/* Slide text + CTA + mobile video */}
                <SlideContent
                  slide={slide}
                  index={index}
                  isActive={isActive}
                  onCtaClick={openFormModal}
                />

                {/* Mobile bottom bar */}
                <MobileBottomBar
                  slide={slide}
                  index={index}
                  activeIndex={activeSlideIndex}
                  onDialogOpenChange={setIsDialogOpen}
                />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Form Modal */}
      <FormModal isOpen={isFormModalOpen} onClose={closeFormModal} />

      {/* Desktop right-side navigation */}
      <DesktopNav
        activeIndex={activeSlideIndex}
        onSlideChange={goToSlide}
        onDialogOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export default HeroSlider;
