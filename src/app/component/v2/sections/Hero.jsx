"use client";
import React, { useState, useEffect } from "react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("../components/HeroSlider"), {
  ssr: false,
  loading: () => null,
});

/* ── First-slide content (duplicated for SSR overlay) ────────────── */
const FIRST_SLIDE = {
  title: "Frontier AI. Enterprise Scale. Delivered.",
  subtitle:
    "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
  ctaText: "Discuss your AI Roadmap",
  ctaLink: "/contact",
};

/* ── Poster paths for responsive preload ─────────────────────────── */
// const DESKTOP_POSTER = "/v2/hero/poster/roadside-assist.avif";
const DESKTOP_POSTER = "/v2/case-studies/MiAI-Law-Demo.jpg";
// const MOBILE_POSTER = "/v2/hero/mobile/poster/roadside-assist.avif";
const MOBILE_POSTER = "/v2/case-studies/MiAI-Law-Demo.jpg";

/* ── Component ───────────────────────────────────────────────────── */
const Hero = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    requestIdleCallback(() => setShowSlider(true));
  }, []);

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: DESKTOP_POSTER,
    alt: "",
    fill: true,
    sizes: "100vw",
  });

  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    src: MOBILE_POSTER,
    alt: "",
    fill: true,
    sizes: "calc(100vw - 2rem)",
  });

  return (
    <section className="relative bg-[#00081F]">
      {/* Viewport-aware preloads — only the matching image is fetched */}
      <link
        rel="preload"
        as="image"
        fetchPriority="high"
        media="(min-width: 768px)"
        imageSrcSet={desktopSrcSet}
        imageSizes="100vw"
      />
      <link
        rel="preload"
        as="image"
        fetchPriority="high"
        media="(max-width: 767px)"
        imageSrcSet={mobileSrcSet}
        imageSizes="calc(100vw - 2rem)"
      />

      <div className="relative w-full h-[100dvh] md:h-screen">
        {/* Static SSR-only overlay for instant LCP — no JS required to paint.
            HeroSlider hides this via DOM once Swiper is ready. */}
        <div
          id="hero-static-overlay"
          className="absolute inset-0 z-[2] bg-[#00081F]"
          style={{ transition: "none" }}
        >
          {/* Desktop background poster */}
          <div className="hidden md:block absolute inset-0">
            <Image
              alt="poster"
              src={DESKTOP_POSTER}
              priority={true}
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00081F] via-[#00081F]/80 to-transparent" />
          </div>

          {/* Static first-slide content */}
          <div className="relative z-10 flex flex-col md:justify-center h-full md:h-[100vh] pt-[120px] md:pt-0 pb-28 md:pb-0 px-4 md:px-16 lg:px-28">
            <div className="max-w-[700px] text-left">
              <h1 className="text-3xl md:text-5xl text-white font-bold font-aeonik tracking-wide mb-6">
                {FIRST_SLIDE.title}
              </h1>
              <p className="text-lg text-white mb-8 font-bwmss01 whitespace-pre-line">
                {FIRST_SLIDE.subtitle}
              </p>
              <div className="w-fit">
                <Link
                  href={FIRST_SLIDE.ctaLink}
                  className="relative rounded-[4px] z-[1] flex items-center gap-[7px] px-[25px] py-[10px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white"
                >
                  <div>{FIRST_SLIDE.ctaText}</div>
                  <div className="flex items-center justify-center relative">
                    <Image
                      className="button__icon-svg transition-transform duration-300"
                      src="/rightArrow.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                    <Image
                      className="button__icon-svg--copy absolute"
                      src="/rightArrow.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                </Link>
              </div>

              {/* Mobile poster card */}
              <div className="md:hidden mt-8 w-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-lg">
                  <Image
                    alt="poster"
                    src={MOBILE_POSTER}
                    priority={true}
                    fill
                    loading="eager"
                    sizes="calc(100vw - 2rem)"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {showSlider && <HeroSlider />}
      </div>
    </section>
  );
};

export default Hero;

