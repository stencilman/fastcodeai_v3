"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const teamSections = [
  {
    title: "Leadership & Engineering Heads",
    members: [
      {
        id: 1,
        name: "Dr. Arjun Jain",
        role: "Founder & Chief Scientist",
        image: "/team/Arjun_Jain.webp",
        bio: "PhD in Computer Graphics from MPI for Informatics, post-doc at Courant Institute, NYU. Former research scientist at Apple, ex adjunct assistant professor at IIT Bombay, and adjunct faculty at IISc Bangalore. Founder of FastCode AI, loves creating impactful user technologies, father of 6-year-old twins.",
        linkedin: "https://www.linkedin.com/in/arjun-jain-56885630/",
      },
      {
        id: 2,
        name: "Gautam Adithya Ravi",
        role: "Head of Engineering",
        image: "/team/gautam.webp",
        bio: "Experienced engineering leader with a passion for building scalable systems and high-performing teams.",
        linkedin: "https://www.linkedin.com/in/gautam-adithya-ravi/",
      },
      {
        id: 3,
        name: "Prabal Patel",
        role: "Head of Sales & Business Development",
        image: "/team/Prabal.webp",
        bio: "Driving growth and strategic partnerships with a focus on delivering value to customers.",
        linkedin: "https://www.linkedin.com/in/prabal-patel/",
      },
    ],
  },
  {
    title: "Senior Research & Research Scientists",
    members: [
      {
        id: 4,
        name: "Narendiran Chembu",
        role: "Senior ML Engineer",
        image: "/Narendiran.png",
        bio: "Expert in machine learning with deep experience in deploying scalable AI models.",
        linkedin: "#",
      },
      {
        id: 5,
        name: "Rishabh Gupta",
        role: "Machine Learning Engineer",
        image: "/members/rishabh.jpeg",
        bio: "Specializing in deep learning and computer vision algorithms.",
        linkedin: "#",
      },
      {
        id: 6,
        name: "Hrishikesh Jadhav",
        role: "Machine Learning Engineer",
        image: "/Hrishikesh.png",
        bio: "Engineer, researcher, and avid football enthusiast.",
        linkedin: "#",
      },
      {
        id: 7,
        name: "Akash Parua",
        role: "Machine Learning Engineer",
        image: "/members/akash.jpg",
        bio: "Focused on LLMs and generative AI research.",
        linkedin: "#",
      },
      {
        id: 8,
        name: "Darshan Singh S",
        role: "Machine Learning Engineer",
        image: "/members/darshan.webp",
        bio: "Passionate about solving complex problems with data-driven approaches.",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Research Support",
    members: [
      {
        id: 9,
        name: "Sridhar Kamath",
        role: "Research Intern",
        image: "/Sridhar.png",
        bio: "Contributing to cutting-edge research projects.",
        linkedin: "#",
      },
      {
        id: 10,
        name: "Siddharth Khandelwal",
        role: "Associate Researcher",
        image: "/Siddharth.png",
        bio: "B.Tech from IIIT Bombay.",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Software & Development Team",
    members: [
      {
        id: 9,
        name: "Sridhar Kamath",
        role: "Research Intern",
        image: "/Sridhar.png",
        bio: "Contributing to cutting-edge research projects.",
        linkedin: "#",
      },
      {
        id: 10,
        name: "Siddharth Khandelwal",
        role: "Associate Researcher",
        image: "/Siddharth.png",
        bio: "B.Tech from IIIT Bombay.",
        linkedin: "#",
      },
    ],
  },
];

const TeamMemberCard = ({ member, isActive, onClick }) => {
  return (
    <div
      className={`relative w-[280px] h-[280px] transition-all duration-500 cursor-pointer ${
        isActive ? "z-10 scale-105" : "z-0 grayscale-[30%] opacity-80"
      }`}
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
        <div className="absolute bottom-[10px] right-[10px] w-8 h-8 border border-white rounded-full flex items-center justify-center text-white z-30">
          <GoArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  const [activeId, setActiveId] = useState(members[0].id);

  // Split members into two columns for masonry/staggered layout
  const leftColumnMembers = members.filter((_, index) => index % 2 === 0);
  const rightColumnMembers = members.filter((_, index) => index % 2 !== 0);

  return (
    <div className="mb-24 last:mb-0">
      <div className="flex justify-center mb-12">
        <div className="border border-[#FFFFFF57] bg-[#000000] px-8 py-3 rounded-[10px] shadow-[0_0_15px_rgba(30,58,138,0.3)]">
          <h2 className="text-lg md:text-xl font-light text-gray-200 text-center">
            {title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side - Images Grid */}
        <div className="relative w-full flex justify-center lg:block">
          {/* Mobile View: Single Column (Sequential Order) */}
          <div className="flex flex-col gap-6 md:hidden">
            {members.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                isActive={activeId === member.id}
                onClick={() => setActiveId(member.id)}
              />
            ))}
          </div>

          {/* Desktop/Tablet View: Staggered Two Columns (Masonry) */}
          <div className="hidden md:flex flex-row justify-center lg:justify-start gap-6 max-w-[600px] mx-auto lg:mx-0">
            {/* First Column */}
            <div className="flex flex-col gap-6">
              {leftColumnMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  isActive={activeId === member.id}
                  onClick={() => setActiveId(member.id)}
                />
              ))}
            </div>

            {/* Second Column - Shifted down for staggered look */}
            <div className="flex flex-col gap-6 pt-12">
              {rightColumnMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  isActive={activeId === member.id}
                  onClick={() => setActiveId(member.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Details List */}
        <div className="flex flex-col gap-8 pl-0 lg:pl-10 mt-8 lg:mt-0">
          {members.map((member) => (
            <div
              key={member.id}
              className={`transition-all duration-500 cursor-pointer group ${
                activeId === member.id
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-60"
              }`}
              onClick={() => setActiveId(member.id)}
            >
              <h3 className="text-2xl md:text-3xl font-aeonik tracking-wide mb-2">
                {member.name}
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-6 h-3 rounded-full ${
                    activeId === member.id ? "bg-[#77A0FF]" : "bg-[#1A2758]"
                  }`}
                ></div>
                <span
                  className={`text-lg md:text-xl font-bwmss01 ${
                    activeId === member.id ? "text-[#F3F3F3]" : "text-[#9EB3CF]"
                  }`}
                >
                  {member.role}
                </span>
              </div>

              <AnimatePresence>
                {activeId === member.id && (
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

const TeamMembers = () => {
  return (
    <section className="w-full bg-[#00081F] py-20 px-4 md:px-10 lg:px-20 text-white min-h-screen">
      {/* SVG clipPath definition - Inverted corners from corner-inverter tool */}
      {/* Parameters: w=100, h=100, r=10,10,17.92,10, ic=20x30x10:0,60x30x10:0,18x18x6:1,20x20x10:0 */}
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

        {teamSections.map((section, index) => (
          <TeamSection
            key={index}
            title={section.title}
            members={section.members}
          />
        ))}

       
      </div>
    </section>
  );
};

export default TeamMembers;
