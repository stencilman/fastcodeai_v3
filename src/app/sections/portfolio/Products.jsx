"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Clock } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import gesrec from "../../../../public/our-work/gesrec.png";
import vrups from "../../../../public/our-work/vrups.jpg";
import fashion from "../../../../public/our-work/fashion.png";
import bankInsMo from "../../../../public/our-work/bankInsMo.png";
import sqlwizard from "../../../../public/our-work/sqlwizard-logo1.png";
import dermos from "../../../../public/our-work/dermos.jpeg";
import bnk from "../../../../public/our-work/bnk.png";
import rag from "../../../../public/our-work/rag_weave.jpg";
import automto from "../../../../public/our-work/automto.png";
import fedLearning from "../../../../public/portfolio/fedLearning/img1-2.png";
import fitness from "../../../../public/portfolio/fitness/img1-2.png";
import shadow from "../../../../public/shadow/flat.svg";

const list = [
  {
    category: "Automotive",
    img: "bg-gesrec",
    title: "Gesture Recognition based User Experience",
    description:
      "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Automotive OEM.",
    to: "/portfolio/auto-oem",
    readTime: "5 Min Read",
  },
  {
    category: "Automotive",
    img: "bg-vrups",
    title: "Vulnerable Roadside User Protection System",
    description:
      "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Automotive Tier 1 autonomous driving initiative.",
    to: "/portfolio/vrups",
    readTime: "5 Min Read",
  },
  {
    category: "Automotive",
    img: "bg-learning",
    title: "Federated Learning on the Edge ",
    description:
      "Revolutionizing privacy and efficiency in data processing with Federated Learning (FL) on edge devices, enabling real-time, secure analytics in several key sectors.",
    to: "/portfolio/federated-learning",
    readTime: "6 Min Read",
  },
  {
    category: "Healthcare",
    img: "bg-fitness",
    title: "Fitness Pose Estimation",
    description:
      "Empowering exercise perfection with AI-driven real-time pose estimation, providing interactive visual feedback for correct posture and effective workouts.",
    to: "/portfolio/fitness-pose-estimation",
    readTime: "4 Min Read",
  },
  {
    category: "Retail",
    img: "bg-dataQuery",
    title: "Data Query Assitant",
    description:
      "Transforming data access with a natural language interface that converts queries into SQL, simplifying database interaction.",
    to: "/portfolio/sqlwizard",
    readTime: "4 Min Read",
  },

  {
    category: "Retail",
    img: "bg-fashion",
    title: "Indian Fashion insight Framework",
    description:
      "Pioneering deep learning in fashion with a custom Indian dataset for advanced trend forecasting and targeted consumer insights.",
    to: "/portfolio/fashion-framework",
    readTime: "3 Min Read",
  },
  {
    category: "Finance",
    img: "bg-bankMont",
    title: "AI Banking Infrastructure Monitoring",
    description:
      "Enhancing banking with AI: Advanced data analytics for customer insights and predictive modeling, streamlined with efficient application monitoring.",
    to: "/portfolio/banking-infra",
    readTime: "5 Min Read",
  },
  {
    category: "Healthcare",
    img: "bg-rag",
    title: "Secure Smart Journal",
    description:
      "Smart, diary-like system that effortlessly organizes and retrieves your daily activities and information with cutting-edge Retrieval-Augmented Generation techniques.",
    to: "/portfolio/rag",
    readTime: "5 Min Read",
  },
  {
    category: "Healthcare",
    img: "bg-dermo",
    title: "AI-Assisted Skin Cancer Detection",
    description:
      "Enhancing skin cancer by diagnosing user’s skin images on their mobile phones, improving dermatological care's accuracy, accessibility, and efficiency.",
    to: "/portfolio/skin-cancer-detection",
    readTime: "4 Min Read",
  },
  {
    category: "Oil & Gas",
    img: "bg-automto",
    title: " AutoMTO: Revolutionizing Material Takeoff in Oil & Gas EPCC",
    description:
      "Deploying AI to swiftly convert Process and Instrumentation Diagrams (P&IDs) in the Oil & Gas EPCC sector into accurate, digital Material Takeoff Orders, significantly boosting productivity and reducing costs.",
    to: "/portfolio/auto-mto",
    readTime: "7 Min Read",
  },
  {
    category: "Finance",
    img: "bg-bnk",
    title: "AI Banking Insights",
    description:
      "Transforming banking datasets into actionable insights enhances customer segmentation, predictive forecasting, and strategic decision-making in the fintech industry.",
    to: "/portfolio/banking-insights",
    readTime: "5 Min Read",
  },
];

const imageByKey = {
  "bg-gesrec": gesrec,
  "bg-vrups": vrups,
  "bg-learning": fedLearning,
  "bg-fitness": fitness,
  "bg-dataQuery": sqlwizard,
  "bg-fashion": fashion,
  "bg-bankMont": bankInsMo,
  "bg-rag": rag,
  "bg-dermo": dermos,
  "bg-automto": automto,
  "bg-bnk": bnk,
};

const tagsByTo = {
  "/portfolio/auto-oem": ["Automotive", "Computer Vision"],
  "/portfolio/vrups": ["Automotive", "Edge AI"],
  "/portfolio/federated-learning": ["Automotive", "Federated Learning"],
  "/portfolio/fitness-pose-estimation": ["Healthcare", "Computer Vision"],
  "/portfolio/sqlwizard": ["Retail", "Text-to-SQL"],
  "/portfolio/fashion-framework": ["Retail", "Generative AI"],
  "/portfolio/banking-infra": ["Finance", "Predictive AI"],
  "/portfolio/rag": ["Healthcare", "RAG System"],
  "/portfolio/skin-cancer-detection": ["Healthcare", "Computer Vision"],
  "/portfolio/auto-mto": ["Oil & Gas", "Predictive AI"],
  "/portfolio/banking-insights": ["Finance", "Analytics"],
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = [
    "All",
    ...Array.from(new Set(list.map((item) => item.category))),
  ];

  const products = list.map((item) => ({
    ...item,
    tags: tagsByTo[item.to] ?? [item.category],
    image: imageByKey[item.img] ?? shadow,
    readTime: item.readTime ?? "5 Min Read",
  }));

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <section className="relative bg-[#00081F] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-white mb-12 font-aeonik">
          Deployed Products
        </h2>

        {/* Filters */}
        <LayoutGroup>
          <div className="flex justify-start md:justify-center font-aeonik gap-2 md:gap-4 mb-10 md:mb-16 overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.div
                  key={cat}
                  // type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(4);
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`shrink-0 px-3 py-2 md:px-12 md:py-4 cursor-pointer rounded-lg border border-[#FFFFFF57] transition-all duration-300 text-xs md:text-base font-aeonik relative overflow-hidden ${
                    isActive
                      ? "bg-[#000000]"
                      : "bg-transparent hover:border-white/30"
                  }`}
                >
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-[#9EB3CF]" : "text-gray-400"
                    }`}
                  >
                    {cat}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="active-filter-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFFFFF] rounded-b-lg"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Product List */}
        <div className="space-y-8 max-w-[1000px] mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.to}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative bg-[#000000] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <Link
                  href={product.to}
                  aria-label={`Open ${product.title}`}
                  className="absolute inset-0"
                >
                  <span className="sr-only">{product.title}</span>
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Image */}
                  <div className="lg:col-span-4 relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 space-y-4 h-full">
                    <div className="h-full justify-between flex flex-col">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag, idx) => (
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
                          {product.title}
                        </h3>

                        <p className="text-gray-400 text-lg font-bwmss01 leading-relaxed max-w-4xl pt-3">
                          {product.description}
                        </p>
                        <div className="pt-4">
                          <div className="flex items-center gap-2 text-sm bg-white/10 font-aeonik w-fit text-gray-400 p-2 rounded-md">
                            <div className="rounded-full">
                              <Clock size={14} className="text-gray-400" />
                            </div>
                            <p className="text-gray-400">
                              {product.readTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-6 py-3 rounded-md border border-[#1A2758] text-white hover:bg-[#1E293B] transition-colors group"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              Load More
              <div className="border rounded-full p-[2px] group-hover:bg-white/20 transition-colors">
                <ArrowDown size={16} />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
