"use client";
import React, { useMemo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { caseStudies as detailedCaseStudies } from './data/caseStudiesData';
import Button from '../component/Button';

const localCaseStudies = [
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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

const MoreBreakthroughs = ({ currentSlug, limit }) => {
  
  const caseStudies = useMemo(() => {
    let filtered = localCaseStudies.filter(item => {
      if (!currentSlug) return true;
      return !item.link.endsWith(`/${currentSlug}`) && item.link !== currentSlug;
    });

    if (currentSlug) {
        // Deterministic shuffle based on slug to avoid hydration mismatch
        const seed = currentSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        filtered.sort((a, b) => {
            const valA = Math.sin(seed + a.id) * 10000;
            const valB = Math.sin(seed + b.id) * 10000;
            return (valA - Math.floor(valA)) - (valB - Math.floor(valB));
        });
    }

    return filtered.slice(0, limit || localCaseStudies.length).map(item => {
      const detail = detailedCaseStudies.find(d => item.link.endsWith(d.slug));
      return {
        ...item,
        tags: detail?.hero?.badges || [],
        readTime: detail?.hero?.readTime
      };
    });
  }, [currentSlug, limit]);


  return (
    <section className=" w-full mt-24 mb-52  bg-[#00081F] ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='text-4xl md:text-5xl font-normal text-white mb-8 font-aeonik tracking-wide'>Explore More Breakthroughs</h2>
        
      </div>
      <div className="space-y-8 max-w-[1200px] mx-auto">
         
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative bg-[#000000] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <Link
                  href={caseStudy.link}
                  aria-label={`Open ${caseStudy.title}`}
                  className="absolute inset-0"
                >
                  <span className="sr-only">{caseStudy.title}</span>
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Image */}
                  <div className="lg:col-span-4 relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 space-y-4 h-full">
                    <div className="h-full justify-between flex flex-col">
                      <div className="flex flex-col h-full justify-evenly">
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.tags && caseStudy.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`px-4 py-1.5 rounded-full text-sm border border-[#1A2758] text-[#F3F3F3] `}
                              style={{
                                background:
                                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl text-white font-aeonik pt-4">
                          {caseStudy.title}
                        </h3>

                        <p className="text-gray-400 text-lg font-bwmss01 leading-relaxed max-w-4xl pt-3">
                          {caseStudy.description}
                        </p>
                        <div className="pt-4">
                          <div className="">
                            {caseStudy.readTime ? (
                              <>
                              <div className="flex items-center gap-2 justify-between">
                                <div>
                                  <Button
                                    name="Read More"
                                    to={caseStudy.link}
                                    target="_blank"
                                    >
                                  </Button>
                                </div>
                                <div className="flex items-center gap-2 text-sm bg-white/10 font-aeonik w-fit text-gray-400 p-2 rounded-md">
                                <div className="rounded-full">
                                  <Clock size={14} className="text-white" />
                                </div>
                                <p className="text-white">
                                  {caseStudy.readTime}
                                </p>
                                </div>
                                </div>
                              </>
                            ) : (
                              <div className="flex items-center gap-2 text-sm bg-white/10 font-aeonik w-fit text-gray-400 p-2 rounded-md">
                                <p className="text-white">
                                  {caseStudy.ctaText}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
         
        </div>
    </section>
  )
}

export default MoreBreakthroughs