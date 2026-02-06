"use client";
import React, { useState,useEffect } from "react";
import Patents from "./components/Patents";
import Publications from "./components/Publications";
import { motion } from "framer-motion";
// import {  useSearchParams } from "next/navigation";

const Showcase = ({searchParams}) => {
  const [activeTab, setActiveTab] = useState("patents"); 
console.log("searchParams",searchParams)
  // const searchParams = useSearchParams();
  const query = searchParams.q;
  const query_publications = searchParams.q_public;

 

  useEffect(() => {
    if(query_publications){
      setActiveTab("publications")
    }
    const scrollToElement = () => {
      if (query || query_publications) {
        const element = document.getElementById(query || query_publications);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          if(screen.width<=767){

            const offsetPosition = elementPosition - 50; 
            window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          }else{
            const offsetPosition = elementPosition - 150;
            window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          }

          
        }
      }
    };

    // Run the scroll function after a short delay to ensure elements are rendered
    const timeoutId = setTimeout(scrollToElement, 100);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [query,query_publications]);
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-[auto] bg-[#00081F] flex items-center justify-center relative mt-[70px] flex-col gap-[35px] md:gap-[70px]">
      <h3 className="text-white font-aeonik tracking-wide text-[8vw] md:text-[7vw] lg:text-[51px]   text-center w-full capitalize">
        Our {activeTab} Showcase
      </h3>

      <div className="w-[90vw]  md:w-[60vw] lg:w-[50vw] h-[80px] md:h-[100px] rounded-[18px] border border-[#1A2758] flex relative">
        {/* toggler button */}
        <motion.div
          className={`w-[50%] h-full absolute top-0 left-0 rounded-[18px] cursor-pointer ${
            activeTab === "publications" ? "ml-[0%]" : "ml-0"
          }`} // Use Framer Motion for smooth animations
          onClick={() =>
            toggleTab(activeTab === "patents" ? "publications" : "patents")
          }
          style={{
            background:
              "transparent linear-gradient(160deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
          }}
          initial={{ x: 0 }} // Initial position of the toggle button
          animate={{ x: activeTab === "patents" ? 0 : "100%" }} // Animate the toggle button
          transition={{ duration: 0.3, ease: "easeInOut" }} // Animation duration and easing
        ></motion.div>
        {/* toggle patents */}
        <div
          className={`w-[50%] flex items-center justify-center  text-[26px] select-none md:text-[32px] text-[#9EB3CF] font-aeonik relative cursor-pointer ${
            activeTab === "patents" ? "text-white" : ""
          }`}
          onClick={() => toggleTab("patents")}
        >
          Patents 
        </div>
        {/* toggle publications */}
        <div
          className={`w-[50%] flex items-center justify-center font-bold text-[26px] select-none md:text-[32px] text-[#9EB3CF] font-aeonik relative cursor-pointer ${
            activeTab === "publications" ? "text-white" : ""
          }`}
          onClick={() => toggleTab("publications")}
        >
          Publications
        </div>
        {/* Render the active component */}
      </div>
      {activeTab === "patents" ? <Patents /> : <Publications />}
    </div>
  );
};

export default Showcase;
