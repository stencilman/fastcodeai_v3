"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

const TestimonialsN = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/swiper@8/swiper-bundle.min.js";
    script.async = true;
    script.onload = () => setSwiperLoaded(true);
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://unpkg.com/swiper@8/swiper-bundle.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      // console.log("slider compo unmount");
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (!swiperLoaded) return;
    // console.log("swiperLoaded", swiperLoaded);
    document
      .querySelectorAll(".cs-cards-container, .cs-nav-container")
      .forEach((element) => {
        element.removeAttribute("role");
      });
    if (!swiperLoaded) return;

    var navSwiper = new Swiper(".cs-nav-swiper", {
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
    });

    const swiperEl = document.querySelector(".cs-cards-swiper");
    const swiper = new Swiper(swiperEl, {
      grabCursor: true,
      watchSlidesProgress: true,
      loop: true,
      speed: 400,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      slidesPerView: "auto",
      centeredSlides: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4500,
      },
      on: {
        progress(swiper) {
          const scaleStep = 0.2;
          const zIndexMax = swiper.slides.length;
          for (let i = 0; i < swiper.slides.length; i += 1) {
            const slideEl = swiper.slides[i];
            const slideProgress = swiper.slides[i].progress;
            const absProgress = Math.abs(slideProgress);
            let modify = 1;
            if (absProgress > 1) {
              modify = (absProgress - 1) * 0.2 + 1;
            }
            const opacityEls = slideEl.querySelectorAll(".cs-card-content");
            const translate = `${slideProgress * modify * 82}%`;
            const scale = 1 - absProgress * scaleStep;
            const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
            slideEl.style.transform = `translateX(${translate}) scale(${scale})`;
            slideEl.style.zIndex = zIndex;
            if (absProgress > 1.9) {
              slideEl.style.opacity = 0;
            } else {
              slideEl.style.opacity = 1;
            }
            opacityEls.forEach((opacityEl) => {
              opacityEl.style.opacity = 1 - absProgress;
            });
          }
        },
        setTransition(swiper, duration) {
          for (let i = 0; i < swiper.slides.length; i += 1) {
            const slideEl = swiper.slides[i];
            const opacityEls = slideEl.querySelectorAll(".cs-card-content");
            slideEl.style.transitionDuration = `${duration}ms`;
            opacityEls.forEach((opacityEl) => {
              opacityEl.style.transitionDuration = `${duration}ms`;
            });
          }
        },
      },
    });

    // Pause autoplay on hover
    document.querySelectorAll(".cs-nav-slide").forEach((slide) => {
      slide.addEventListener("mouseenter", () => {
        swiper.autoplay.stop();
      });
      slide.addEventListener("mouseleave", () => {
        swiper.autoplay.start();
      });
    });

    swiper.controller.control = navSwiper;
    navSwiper.controller.control = swiper;
  }, [swiperLoaded]);
  return (
    <>
      {/* Slide Contaner */}
      <div className="section overflow-hidden bg-[#00081F] relative">
        <div className="page-padding">
          <div className="container">
            <div className="customer-stories-slider">
              <div className="w-embed"></div>
              <div className="w-embed"></div>
              {/* Card Slide Contaianer */}
              <div className="cs-cards-swiper w-dyn-list">
                <div
                  role="list"
                  className="cs-cards-container swiper-wrapper w-dyn-items"
                >
                  {/* Slide 1 */}
                  <div
                    role="listitem"
                    className="cs-cards-slide swiper-slide w-dyn-item"
                  >
                    <div
                      style={{
                        backgroundColor:
                          "hsla(13.846153846153847, 97.36%, 55.49%, 1.00)",
                      }}
                      className="cs-card-accent"
                    ></div>
                    <div className="cs-card-content">
                      <Image
                        src="/testimonials/logos/google.png"
                        alt=""
                        width="120"
                        height="50"
                        className="cs-card-logo w-auto h-auto"
                      />
                      <div className="cs-card-quote cc-embed w-embed">
                        <blockquote className="cs-card-quote font-bwmss01 text-[#9EB3CF]">
                          “Arjun is a great researcher / scientist / and
                          entrepreneur. I first learned about his research at
                          MPI on his movie-reshape work that made a big splash
                          in the community, and subsequently I managed to
                          recruit him to come to NYU as a post doc in our lab,
                          where he kept pushing state of the art research in 3D
                          people estimation with conv nets. This was during a
                          time where conv nets made the next leap, and Arjun was
                          one of the pioneers working in my lab to tackle people
                          tracking with conv nets. He also collaborated with
                          Yann Lecuns lab, as well as kept collaborating
                          internationally with other leading research teams. It
                          was a joy to work with him, he was a very productive
                          and strong researcher!”
                        </blockquote>
                      </div>
                      <div className="cs-card-bottom flex-row ">
                        <div className="cs-card-author">
                          <Image
                            src="/testimonials/chris_bregler.webp"
                            width="64"
                            height="64"
                            alt=""
                            className="cs-card-img object-cover"
                          />
                          <div>
                            <div className="text-color-light-2 font-aeonik">
                              Chris (Christoph) Bregler
                            </div>
                            <div className=" text-block font-aeonik">
                              Director / Principal Scientist @ Google
                            </div>
                          </div>
                        </div>
                        <Link
                          href="https://www.linkedin.com/in/chrisbregler/"
                          target="_blank"
                          className=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0,0,300,150"
                          >
                            <g
                              fill="#ffffff"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(5.12,5.12)">
                                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                              </g>
                            </g>
                          </svg>

                          {/* <div className="sec-button-chevron w-embed">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 10.5L8.75 7L5.25 3.5"
                          stroke="#B1B3F6"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div
                    role="listitem"
                    className="cs-cards-slide swiper-slide w-dyn-item"
                  >
                    <div
                      style={{ backgroundColor: "#003a9b" }}
                      className="cs-card-accent"
                    />
                    <div className="cs-card-content">
                      <Image
                        src="/testimonials/logos/meta1.svg"
                        alt=""
                        width="120"
                        height="50"
                        className="cs-card-logo w-auto h-auto"
                      />
                      <div className="cs-card-quote cc-embed w-embed">
                        <blockquote className="cs-card-quote font-bwmss01 text-[#9EB3CF]">
                          “I had the pleasure of working with Arjun while he was
                          a PhD student at NYU. We co-authored a number of
                          papers together on deep unsupervised learning methods.
                          Unsupervised learning and deep learning are very
                          popular topics today, but Arjun worked on this before
                          much of the world had even heard of deep learning. He
                          co-authored some of the very early work on body pose
                          estimation and object localization with convolutional
                          networks.”
                        </blockquote>
                      </div>
                      <div className="cs-card-bottom flex-row">
                        <div className="cs-card-author">
                          <Image
                            src="/testimonials/yann-lecun.jpg"
                            width="64"
                            height="64"
                            alt=""
                            className="cs-card-img object-cover"
                          />
                          <div>
                            <div className="text-color-light-2 font-aeonik">
                              Yann LeCun
                            </div>
                            <div className=" text-block font-aeonik">
                              VP & Chief AI Scientist @ Meta
                            </div>
                          </div>
                        </div>
                        <Link
                          href="https://www.linkedin.com/in/yann-lecun"
                          target="_blank"
                          className=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0,0,300,150"
                          >
                            <g
                              fill="#ffffff"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(5.12,5.12)">
                                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                              </g>
                            </g>
                          </svg>

                          {/* <div className="sec-button-chevron w-embed">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 10.5L8.75 7L5.25 3.5"
                          stroke="#B1B3F6"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div
                    role="listitem"
                    className="cs-cards-slide swiper-slide w-dyn-item"
                  >
                    <div
                      style={{ backgroundColor: "#003a9b" }}
                      className="cs-card-accent"
                    />
                    <div className="cs-card-content">
                      <Image
                        src="/testimonials/logos/liftlab.webp"
                        alt=""
                        width="120"
                        height="50"
                        className="cs-card-logo w-auto h-auto"
                      />
                      <div className="cs-card-quote cc-embed w-embed">
                        <blockquote className="cs-card-quote font-bwmss01 text-[#9EB3CF]">
                          “ {"Arjun's"} dedication and innovative approach
                          significantly accelerated our projects success at
                          Incivus. His expertise and commitment to excellence
                          make fastcode an invaluable asset for any tech
                          endeavor. His ability to navigate complex challenges
                          with ease and his drive for continuous improvement
                          stand out. I highly recommend Arjun and fastcode for
                          any business looking to leverage cutting-edge
                          technology solutions.”
                        </blockquote>
                      </div>
                      <div className="cs-card-bottom flex-row">
                        <div className="cs-card-author">
                          <Image
                            src="/testimonials/nitin-kumar.png"
                            width="64"
                            height="64"
                            alt=""
                            className="cs-card-img object-cover"
                          />
                          <div>
                            <div className="text-color-light-2 font-aeonik">
                              Nitin Kumar
                            </div>
                            <div className=" text-block font-aeonik">
                              Chief Technology Officer @ LiftLab
                            </div>
                          </div>
                        </div>
                        <Link
                          href="https://www.linkedin.com/in/nitin-kj"
                          target="_blank"
                          className=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0,0,300,150"
                          >
                            <g
                              fill="#ffffff"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(5.12,5.12)">
                                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                              </g>
                            </g>
                          </svg>

                          {/* <div className="sec-button-chevron w-embed">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 10.5L8.75 7L5.25 3.5"
                          stroke="#B1B3F6"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Slide 4 */}
                  <div
                    role="listitem"
                    className="cs-cards-slide swiper-slide w-dyn-item"
                  >
                    <div
                      style={{ backgroundColor: "#003a9b" }}
                      className="cs-card-accent"
                    />
                    <div className="cs-card-content">
                      <Image
                        src="/testimonials/logos/munichUniv.png"
                        alt=""
                        width="120"
                        height="50"
                        className="cs-card-logo w-auto h-auto"
                      />
                      <div className="cs-card-quote cc-embed w-embed">
                        <blockquote className="cs-card-quote font-bwmss01 text-[#9EB3CF]">
                          “ I had the pleasure of working with Arjun on a
                          project focused on pedestrian pose estimation for
                          autonomous driving. I genuinely enjoyed collaborating
                          with him. His expertise in computer vision and
                          commitment to innovation were pivotal in achieving our
                          project goals. I am confident that Arjun and his team
                          at Fastcode.ai will be an invaluable asset in any
                          future endeavor and highly recommend him.”
                        </blockquote>
                      </div>
                      <div className="cs-card-bottom flex-row">
                        <div className="cs-card-author">
                          <Image
                            src="/testimonials/flohr_fabian.jpg"
                            width="64"
                            height="64"
                            alt=""
                            className="cs-card-img object-cover"
                          />
                          <div>
                            <div className="text-color-light-2 font-aeonik">
                              Fabian Flohr
                            </div>
                            <div className=" text-block font-aeonik">
                              Professor of Machine learning @ Munich University
                              of Applied Sciences
                            </div>
                          </div>
                        </div>
                        <Link
                          href="https://www.linkedin.com/in/fabian-flohr-a99031115"
                          target="_blank"
                          className=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0,0,300,150"
                          >
                            <g
                              fill="#ffffff"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(5.12,5.12)">
                                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                              </g>
                            </g>
                          </svg>

                          {/* <div className="sec-button-chevron w-embed">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 10.5L8.75 7L5.25 3.5"
                          stroke="#B1B3F6"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Slide 5 */}
                  <div
                    role="listitem"
                    className="cs-cards-slide swiper-slide w-dyn-item"
                  >
                    <div
                      style={{ backgroundColor: "#003a9b" }}
                      className="cs-card-accent"
                    />
                    <div className="cs-card-content">
                      <Image
                        src="/testimonials/logos/bosch.png"
                        alt=""
                        width="120"
                        height="50"
                        className="cs-card-logo w-auto h-auto"
                      />

                      <div className="cs-card-quote cc-embed w-embed">
                        <blockquote className="cs-card-quote font-bwmss01 text-[#9EB3CF]">
                          “I have been working with Arjun and his team for over
                          four years now. Together we have been working and
                          solving complex AI computer vision problems in the
                          space of Autonomous driving Software. Arjun brings
                          with him a very deep understanding of how to apply AI
                          in the autonomous driving space. His connection to
                          academia and industry differentiates his contribution
                          from being just theoretical research and more towards
                          application research.
                          {"Arjun’s"} team working on the projects are brilliant
                          , resourceful and extremely effective at cracking very
                          difficult problems and delivering state of the art CV
                          software. I highly recommend Arjun and his engineers
                          for their deep knowledge on AI CV , along with their
                          excellent professionalism. It has been great working
                          with Arjun and team over the last many years.”
                        </blockquote>
                      </div>
                      <div className="cs-card-bottom flex-row">
                        <div className="cs-card-author">
                          <Image
                            src="/testimonials/bindu-santha.jpeg"
                            width="64"
                            height="64"
                            alt=""
                            className="cs-card-img object-cover bg-white"
                          />
                          <div>
                            <div className="text-color-light-2 font-aeonik">
                              Bindu Santha Philip
                            </div>
                            <div className=" text-block font-aeonik">
                              Vice President Technology - Autonomous driving
                              Functions and Data enablers @ Bosch Global
                              Software Technologies India
                            </div>
                          </div>
                        </div>
                        <Link
                          href="https://www.linkedin.com/in/bindu-santha-philip-b6462956"
                          target="_blank"
                          className=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0,0,300,150"
                          >
                            <g
                              fill="#ffffff"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(5.12,5.12)">
                                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                              </g>
                            </g>
                          </svg>

                          {/* <div className="sec-button-chevron w-embed">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 10.5L8.75 7L5.25 3.5"
                          stroke="#B1B3F6"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nav Sider Container */}
              <div className="cs-slider-nav-wrap">
                <div className="cs-nav-swiper w-dyn-list">
                  <div
                    role="list"
                    className="cs-nav-container swiper-wrapper w-dyn-items"
                  >
                    {/* Nav Slide 1 */}
                    <div
                      role="listitem"
                      className="cs-nav-slide swiper-slide w-dyn-item"
                    >
                      <Image
                        src="/testimonials/logos/google.png"
                        width="120"
                        height="50"
                        alt=""
                        className="cs-nav-logo "
                      />
                      <div
                        style={{
                          backgroundColor:
                            "hsla(13.846153846153847, 97.36%, 55.49%, 1.00)",
                        }}
                        className="cs-nav-slide-line"
                      />
                    </div>
                    {/* Nav Slide 2 */}
                    <div
                      role="listitem"
                      className="cs-nav-slide swiper-slide w-dyn-item"
                    >
                      <Image
                        src="/testimonials/logos/meta1.svg"
                        width="120"
                        height="50"
                        alt=""
                        className="cs-nav-logo "
                      />
                      <div
                        style={{ backgroundColor: "#003a9b" }}
                        className="cs-nav-slide-line"
                      />
                    </div>
                    {/* Nav Slide 3 */}
                    <div
                      role="listitem"
                      className="cs-nav-slide swiper-slide w-dyn-item"
                    >
                      <Image
                        src="/testimonials/logos/liftlab.webp"
                        width="120"
                        height="50"
                        alt=""
                        className="cs-nav-logo "
                      />
                      <div
                        style={{ backgroundColor: "#11c56b" }}
                        className="cs-nav-slide-line"
                      />
                    </div>
                    {/* Nav Slide 4 */}
                    <div
                      role="listitem"
                      className="cs-nav-slide swiper-slide w-dyn-item"
                    >
                      <Image
                        src="/testimonials/logos/munichUniv.png"
                        width="120"
                        height="50"
                        alt=""
                        className="cs-nav-logo "
                      />
                      <div
                        style={{ backgroundColor: "#fb5454" }}
                        className="cs-nav-slide-line"
                      />
                    </div>
                    {/* Nav Slide 5 */}
                    <div
                      role="listitem"
                      className="cs-nav-slide swiper-slide w-dyn-item"
                    >
                      <Image
                        src="/testimonials/logos/bosch.png"
                        width="120"
                        height="50"
                        alt=""
                        className="cs-nav-logo "
                      />
                      <div
                        style={{ backgroundColor: "#c92125" }}
                        className="cs-nav-slide-line"
                      />
                    </div>
                  </div>
                </div>
                <div className="cs-slider-nav-overlay" />
                <div className="cs-slider-nav-overlay cs-slider-nav-overlay--right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsN;
