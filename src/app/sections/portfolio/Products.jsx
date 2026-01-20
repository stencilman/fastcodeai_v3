"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowDown } from "lucide-react";
import gesrec from "../../../../public/our-work/gesrec.png";
import fedLearning from "../../../../public/portfolio/fedLearning/img1-2.png";
import dermos from "../../../../public/our-work/dermos.jpeg";
import automto from "../../../../public/our-work/automto.png";
import bankInsMo from "../../../../public/our-work/bankInsMo.png";
import fashion from "../../../../public/our-work/fashion.png";
import shadow from "../../../../public/shadow/flat.svg";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = [
    "All",
    "Automotive",
    "Healthcare",
    "Finance",
    "Retail",
    "Oil & Gas",
  ];

  const products = [
    {
      id: 1,
      title: "AI Banking Infrastructure Monitoring",
      category: "Finance",
      tags: ["Finance", "RAG System"],
      description:
        "Enhancing banking with AI: Advanced data analytics for customer insights and predictive modeling, streamlined with efficient application monitoring.",
      image: bankInsMo,
      readTime: "5 Min Read",
    },
    {
      id: 2,
      title: "Gesture Recognition based User Experience",
      category: "Automotive",
      tags: ["Automotive", "RAG System"],
      description:
        "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Automotive OEM.",
      image: gesrec,
      readTime: "5 Min Read",
    },
    {
      id: 3,
      title: "AI Dermatology Analysis",
      category: "Healthcare",
      tags: ["Healthcare", "Computer Vision"],
      description:
        "Early detection of skin conditions using advanced computer vision algorithms trained on thousands of dermatological images.",
      image: dermos,
      readTime: "4 Min Read",
    },
    {
      id: 4,
      title: "Virtual Try-On Experience",
      category: "Retail",
      tags: ["Retail", "Generative AI"],
      description:
        "Revolutionizing e-commerce with AI-powered virtual try-on, allowing customers to visualize products on themselves with high fidelity.",
      image: fashion,
      readTime: "3 Min Read",
    },
    {
      id: 5,
      title: "Automotive Quality Control",
      category: "Automotive",
      tags: ["Automotive", "Computer Vision"],
      description:
        "Automated inspection systems ensuring zero-defect manufacturing in automotive assembly lines.",
      image: automto,
      readTime: "6 Min Read",
    },
    {
      id: 6,
      title: "Pipeline Integrity Monitoring",
      category: "Oil & Gas",
      tags: ["Oil & Gas", "Predictive AI"],
      description:
        "Predictive maintenance models for oil and gas pipelines to prevent leaks and optimize maintenance schedules.",
      image: fedLearning,
      readTime: "7 Min Read",
    },
  ];

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
        <div className="flex flex-wrap justify-center font-aeonik gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(4);
              }}
              className={`px-8 py-3 rounded-lg border transition-all duration-300 text-sm md:text-base font-aeonik relative ${
                activeCategory === cat
                  ? "bg-[#0A1329] border-[#1E293B] text-white"
                  : "bg-transparent border-[#1E293B] text-gray-400 hover:border-white/30"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-b-lg"></span>
              )}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="space-y-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#000000] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 group"
            >
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
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 ${
                          idx === 0
                            ? "bg-[#1E293B] text-white"
                            : "bg-[#0F172A] text-gray-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl text-white font-aeonik">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-lg font-bwmss01 leading-relaxed max-w-4xl">
                    {product.description}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-gray-500 text-sm font-aeonik">
                    <div className="bg-white/10 p-1 rounded-full">
                      <Clock size={14} className="text-gray-400" />
                    </div>
                    {product.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] border border-white/10 text-white hover:bg-[#1E293B] transition-colors group"
            >
              Load More
              <div className="bg-white/10 rounded-full p-1 group-hover:bg-white/20 transition-colors">
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
