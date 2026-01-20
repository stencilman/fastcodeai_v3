import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./CaseStudiesSlide.css";
import Link from "next/link";
import shadow from "../../../../../public/shadow/flat.svg";
import Button from "../../Button";

const CaseStudiesSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const progressRefs = useRef([]);

  const caseStudies = [
    {
      id: 1,
      title: "Data Platform",
      description:
        "Our Data Intelligence Platform transforms petabytes of raw enterprise data into actionable AI-ready insights.",
      details:
        "Eliminate data silos by unifying structured and unstructured sources into a single, governed control plane. Automate complex ETL pipelines with drag-and-drop simplicity to reduce engineering overhead by 80%. Deliver trusted real-time analytics to your teams faster than ever before.",
      image: "/v2/case-studies/case-1.jpg",
      link: "/case-studies/data-intelligence-platform",
      ctaText: "Start Your Pilot Today",
      stats: {
        count: "400+",
        label: "Connectors for instant source onboarding.",
      },
    },
    {
      id: 2,
      title: "Arjun Jain",
      description:
        "Dr. Arjun Jain is the heart and soul of Fast Code AI, turning impossible AI problems into shipped solutions.",
      details:
        "With over 15 years of experience in AI and Machine Learning, Dr. Jain has led teams to deliver breakthrough solutions in computer vision, NLP, and predictive analytics. His leadership ensures that every project at Fast Code AI is built on a foundation of scientific rigor and engineering excellence.",
      image: "/v2/case-studies/case-2.jpg",
      link: "https://www.linkedin.com/in/arjunjain/",
      ctaText: "Connect with him",
    },
    {
      id: 3,
      title: "ProcessFlow AI",
      description:
        "Advanced computer vision digitizes engineering drawings for critical safety analysis in oil and gas.",
      details:
        "ProcessFlow AI automates the extraction of data from P&ID diagrams, reducing manual entry errors by 99% and accelerating safety compliance checks. Our system identifies components, connections, and potential hazards with human-level accuracy at machine speed.",
      image: "/v2/case-studies/case-3.jpg",
      link: "/case-studies/process-flow-ai",
      ctaText: "View case study",
    },
    {
      id: 4,
      title: "MiAI Law",
      description:
        "Engineered hallucination-free RAG with verifiable legal reasoning, achieving 60x faster analysis and 90% cost reduction.",
      details:
        "MiAI Law empowers legal teams to review contracts and case law with unprecedented speed. Our retrieval-augmented generation engine cites specific clauses and precedents, ensuring every output is traceable and legally sound.",
      image: "/v2/case-studies/case-4.jpg",
      link: "/case-studies/mi-ai-law",
      ctaText: "View case study",
    },
    {
      id: 5,
      title: "Seikor",
      description:
        "Seikor's AI streamlines hiring workflows from job posting to candidate management, making recruitment faster for everyone.",
      details:
        "From parsing resumes to scheduling interviews, Seikor acts as an intelligent assistant for recruiters. It matches candidates to roles based on skills and cultural fit, reducing time-to-hire by 50%.",
      image: "/v2/case-studies/case-5.jpg",
      link: "https://seikor.com/",
      ctaText: "View the product",
    },
    {
      id: 6,
      title: "Career",
      description:
        "We've cracked AI challenges for Mercedes, Bosch, and Aramco, but that's just the warm-up. We still have a lot to build.",
      details:
        "Join a team of world-class engineers and researchers solving the hardest problems in AI. We offer a collaborative environment where your work has a direct impact on global enterprises.",
      image: "/v2/case-studies/case-6.jpg",
      link: "/careers",
      ctaText: "Join us",
    },
    {
      id: 7,
      title: "Spiral Health",
      description:
        "AI-powered posture analysis delivers personalized physical therapy exercises in real-time through smartphones.",
      details:
        "Using just a smartphone camera, Spiral Health analyzes patient movement patterns to prescribe and correct exercises. This remote therapeutic monitoring solution improves patient adherence and recovery outcomes.",
      image: "/v2/case-studies/case-7.jpg",
      link: "https://spiral.health/",
      ctaText: "See Spiral in action",
    },
    {
      id: 8,
      title: "Drip Labs",
      description:
        "AI-powered photoshoots and Virtual Try-ons, delivering on-brand creatives at half the cost of traditional shoots. ",
      details:
        "Create studio-quality product imagery without the studio. Drip Labs uses generative AI to place your products in any environment on any model, scaling your content creation effortlessly.",
      image: "/v2/case-studies/case-8.jpg",
      link: "https://www.driplabs.ai/app",
      ctaText: "Experience DripLabs",
    },
  ];

  useEffect(() => {
    // Initialize progress refs array
    progressRefs.current = progressRefs.current.slice(0, caseStudies.length);

    const updateProgress = (swiper) => {
      const currentIndex = swiper.realIndex;
      progressRefs.current.forEach((ref, index) => {
        if (ref) {
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
        }
      });
    };

    const swiper = mainSwiperRef.current?.swiper;
    if (swiper) {
      swiper.on("autoplayTimeLeft", (s, time, progress) => {
        updateProgress(s);
      });
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });

      return () => {
        swiper.off("autoplayTimeLeft");
        swiper.off("slideChange");
      };
    }
  }, [caseStudies.length]);

  return (
    <div className="relative bg-[#00081F] py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-row items-center justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl text-white ">
            Our Works
          </h2>

          <div className="flex items-center gap-4">
            <button
              className="prev-button w-10 h-10 md:w-12 md:h-12  rounded-full border border-white  flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
              style={{ border: "1px solid white" }}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              className="next-button w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              style={{ border: "1px solid white" }}
              aria-label="Next slide"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`shrink-0 cursor-pointer relative rounded-lg px-6 py-3 transition-all duration-300 border ${
                index === activeIndex
                  ? "bg-[#0A1329] border-[#1E293B]"
                  : "bg-transparent border-[#1E293B] hover:border-white/30"
              }`}
              onClick={() => mainSwiperRef.current?.swiper.slideToLoop(index)}
            >
              {/* Progress bar for active tab */}
              {index === activeIndex && (
                <span
                  ref={(el) => (progressRefs.current[index] = el)}
                  // className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#2DC1C3] to-[#0268F2] transition-all duration-100 ease-linear"
                  className="absolute bottom-0 left-0 h-[2px] bg-[#575757] transition-all duration-100 ease-linear"
                  style={{ width: "0%" }}
                ></span>
              )}

              <div
                className={`text-sm md:text-base font-medium whitespace-nowrap ${
                  index === activeIndex ? "text-white" : "text-gray-400"
                }`}
              >
                {study.title}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Swiper */}
        <div className="relative">
          <Swiper
            loop={true}
            ref={mainSwiperRef}
            modules={[Autoplay, Navigation, Controller]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="case-studies-swiper"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id} className="pb-8 pr-6">
                <div className="bg-[#000000] rounded-3xl border border-white/5 p-6 md:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div className="relative">
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        {/* Laptop/Mockup Frame - simplified for responsive */}
                        <div className="bg-[#1a1a1a] p-2 md:p-4 rounded-xl">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-black">
                            <Image
                              src={study.image}
                              alt={study.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Floating Stats Card (if available) */}
                      {study.stats && (
                        <div className="absolute -bottom-6 -right-4 md:bottom-8 md:right-12 bg-[#0B1221] p-6 rounded-xl border border-white/10 shadow-xl max-w-[240px] z-10 hidden sm:block">
                          <div className="text-3xl font-bold font-aeonik text-white mb-1">
                            {study.stats.count}
                          </div>
                          <div className="text-sm text-gray-300 font-bwmss01 leading-snug">
                            {study.stats.label}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl md:text-4xl font-semibold font-aeonik text-white mb-6">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 text-lg font-bwmss01 mb-6">
                        {study.description}
                      </p>
                      {study.details && (
                        <p className="text-gray-400 text-base font-bwmss01 mb-8 hidden md:block">
                          {study.details}
                        </p>
                      )}

                      {study.ctaText && (
                        <div className="w-fit">
                          {/* <Link
                            href={study.link || "#"}
                            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                          >
                            {study.ctaText}
                            <div className="bg-white/20 rounded-full p-1">
                              <ArrowRight size={16} />
                            </div>
                          </Link> */}
                          <Button to={study.link} name={study.ctaText} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute top-[250px] translate-x-[-50%] left-1/2  ">
        <Image
          src={shadow}
          alt="Shadow"
          fill
          className="  scale-[100%] blur-[100px]"
        />
      </div>

      {/* Utilities */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CaseStudiesSlide;
