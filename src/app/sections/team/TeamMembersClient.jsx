"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const TeamMemberCard = ({ member, isActive, onClick, className = "" }) => {
  return (
    <div
      className={`relative w-[280px] h-[280px] transition-all duration-500 cursor-pointer ${
        isActive ? "z-10 scale-105" : "z-0 grayscale-[30%] opacity-80"
      } ${className}`}
      onClick={onClick}
    >
      <div className="w-full h-full relative group">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: "url(#invertedCorner)" }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
          {/* Blue overlay for inactive */}
          <div
            className={`absolute inset-0 bg-[#1e3a8a] mix-blend-color transition-opacity duration-500 ${
              isActive ? "opacity-0" : "opacity-60"
            }`}
          ></div>
        </div>

        {/* Icons */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 w-8 h-8 main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] rounded flex items-center justify-center text-white z-30 hover:scale-110 transition-transform"
          onClick={(e) => e.stopPropagation()}
        >
          <FaLinkedinIn size={14} />
        </a>
        <div className="absolute bottom-[5px] md:bottom-[10px] right-[5px] md:right-[10px] w-4 md:w-8 h-4 md:h-8 border border-white rounded-full flex items-center justify-center text-white z-30">
          <GoArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ members }) => {
  const [activeId, setActiveId] = useState(members[0]?.uniqueId);

  // Split members into two columns for masonry/staggered layout
  const leftColumnMembers = members.filter((_, index) => index % 2 === 0);
  const rightColumnMembers = members.filter((_, index) => index % 2 !== 0);

  return (
    <div className="mb-24 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Mobile View: Interleaved Image and Details */}
        <div className="flex flex-col gap-8 md:hidden px-4">
          {members.map((member) => (
            <div
              key={member.uniqueId}
              className="flex flex-row gap-4 items-start"
            >
              {/* Scaled down image for mobile */}
              <div className="shrink-0">
                <TeamMemberCard
                  member={member}
                  isActive={true} // Always active/colored on mobile
                  onClick={() => {}}
                  className="!w-[140px] !h-[140px]"
                />
              </div>

              {/* Details next to image */}
              <div className="flex flex-col pt-2">
                <h3 className="text-xl font-aeonik tracking-wide mb-1 leading-tight">
                  {member.name}
                </h3>
                <div className="flex flex-col gap-2 mb-2">
                  <div className="w-6 h-1.5 rounded-full bg-[#77A0FF]"></div>
                  <span className="text-sm font-bwmss01 text-[#F3F3F3] leading-tight">
                    {member.role}
                  </span>
                </div>
                <p className="text-gray-400 font-light leading-relaxed text-xs">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Side - Images Grid (Desktop/Tablet) */}
        <div className="relative w-full hidden md:flex justify-center lg:block">
          {/* Desktop/Tablet View: Staggered Two Columns (Masonry) */}
          <div className="flex flex-row justify-center lg:justify-start gap-6 max-w-[600px] mx-auto lg:mx-0">
            {/* First Column */}
            <div className="flex flex-col gap-6">
              {leftColumnMembers.map((member) => (
                <TeamMemberCard
                  key={member.uniqueId}
                  member={member}
                  isActive={activeId === member.uniqueId}
                  onClick={() => setActiveId(member.uniqueId)}
                />
              ))}
            </div>

            {/* Second Column - Shifted down for staggered look */}
            <div className="flex flex-col gap-6 pt-12">
              {rightColumnMembers.map((member) => (
                <TeamMemberCard
                  key={member.uniqueId}
                  member={member}
                  isActive={activeId === member.uniqueId}
                  onClick={() => setActiveId(member.uniqueId)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Details List (Desktop/Tablet) */}
        <div className="hidden md:flex flex-col gap-8 pl-0 lg:pl-10 mt-8 lg:mt-0">
          {members.map((member) => (
            <div
              key={member.uniqueId}
              className={`transition-all duration-500 cursor-pointer group ${
                activeId === member.uniqueId
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-60"
              }`}
              onClick={() => setActiveId(member.uniqueId)}
            >
              <h3 className="text-2xl md:text-3xl font-aeonik tracking-wide mb-2">
                {member.name}
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-6 h-3 rounded-full ${
                    activeId === member.uniqueId
                      ? "bg-[#77A0FF]"
                      : "bg-[#1A2758]"
                  }`}
                ></div>
                <span
                  className={`text-lg md:text-xl font-bwmss01 ${
                    activeId === member.uniqueId
                      ? "text-[#F3F3F3]"
                      : "text-[#9EB3CF]"
                  }`}
                >
                  {member.role}
                </span>
              </div>

              <AnimatePresence>
                {activeId === member.uniqueId && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-xl">
                      {member.bio}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMembersClient = ({ members }) => {
  const chunkSize = 4;
  const memberChunks = [];
  for (let i = 0; i < members.length; i += chunkSize) {
    memberChunks.push(members.slice(i, i + chunkSize));
  }

  return (
    <section className="w-full bg-[#00081F] py-20 px-4 md:px-10 lg:px-20 text-white min-h-screen">
      {/* SVG clipPath definition - Inverted corners from corner-inverter tool */}
      <svg
        width="0"
        height="0"
        className="absolute"
        style={{ position: "absolute" }}
      >
        <defs>
          <clipPath id="invertedCorner" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0H0.9A0.1,0.1,0,0,1,1,0.1V0.76A0.06,0.06,0,0,1,0.94,0.82H0.88A0.06,0.06,0,0,0,0.82,0.88V0.94A0.06,0.06,0,0,1,0.76,1H0.1A0.1,0.1,0,0,1,0,0.9V0.1A0.1,0.1,0,0,1,0.1,0Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-aeonik text-white mb-16 tracking-normal text-center">
          Meet the Team
        </h1>

        {memberChunks.map((chunk, index) => (
          <TeamSection key={index} members={chunk} />
        ))}
      </div>
    </section>
  );
};

export default TeamMembersClient;
