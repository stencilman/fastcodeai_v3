"use client";
import React, { useState } from "react";
import { XCircle } from "lucide-react";
import CheckIcon from "../../../../../public/what-we-do/co-creation/check_icon.svg";
import Image from "next/image";

const Advantage = () => {
  const [activeTab, setActiveTab] = useState("traditional");

  const data = [
    {
      label: "Speed to MVP",
      traditional: "3–6 Months",
      inHouse: "6–12 Months",
      coCreation: "4–8 Weeks",
    },
    {
      label: "Incentive",
      traditional: "Billable Hours",
      inHouse: "Salary",
      coCreation: "Equity / Rev Share",
    },
    {
      label: "Tech Stack",
      traditional: "Built from Scratch",
      inHouse: "Built from Scratch",
      coCreation: "Proven Platform Base",
    },
    {
      label: "Expertise",
      traditional: "Generalists",
      inHouse: "Hard to Hire Talent",
      coCreation: "Deep Tech Specialists",
    },
  ];

  const MobileView = () => (
    <div className="lg:hidden flex flex-col gap-6">
      {/* Tabs */}
      <div className="flex justify-between gap-4">
        <button
          onClick={() => setActiveTab("traditional")}
          className={`flex-1 py-4 px-2 text-center rounded-lg border text-sm font-medium transition-colors ${
            activeTab === "traditional"
              ? "border-[#4FB4C8] text-white bg-[#4FB4C8]/10"
              : "border-gray-700 text-gray-400"
          }`}
        >
          Traditional <br /> Dev Shop
        </button>
        <button
          onClick={() => setActiveTab("inHouse")}
          className={`flex-1 py-4 px-2 text-center rounded-lg border text-sm font-medium transition-colors ${
            activeTab === "inHouse"
              ? "border-[#4FB4C8] text-white bg-[#4FB4C8]/10"
              : "border-gray-700 text-gray-400"
          }`}
        >
          In-House <br /> Hiring
        </button>
        <button
          onClick={() => setActiveTab("coCreation")}
          className={`flex-1 py-4 px-2 text-center rounded-lg border text-sm font-medium transition-colors ${
            activeTab === "coCreation"
              ? "border-[#4FB4C8] text-white bg-[#4FB4C8]/10"
              : "border-gray-700 text-gray-400"
          }`}
        >
          Co-Creation <br /> with Us
        </button>
      </div>

      {/* Content */}
      <div className="mt-8 flex flex-col gap-8">
        <h3 className="text-2xl font-aeonik text-white">
          {activeTab === "traditional" && "Traditional Dev Shop"}
          {activeTab === "inHouse" && "In-House Hiring"}
          {activeTab === "coCreation" && "Co-Creation with Us"}
        </h3>

        <div className="border border-gray-700 rounded-2xl overflow-hidden">
          {data.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${
                i !== data.length - 1 ? "border-b border-gray-700" : ""
              }`}
            >
              {/* Label */}
              <div className="p-6 flex items-center bg-[#0C1631] text-white font-aeonik text-lg border-r border-gray-700">
                {row.label}
              </div>

              {/* Value */}
              <div className="p-6 flex items-center gap-3 text-lg font-aeonik bg-[#020F3B]">
                {activeTab === "coCreation" ? (
                  <>
                    <Image
                      src={CheckIcon}
                      alt="Check"
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                    <span className="text-white">{row.coCreation}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 fill-white text-[#020F3B] flex-shrink-0" />
                    <span className="text-gray-300">
                      {activeTab === "traditional"
                        ? row.traditional
                        : row.inHouse}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#00081F] text-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-20 gap-10">
          <h2 className="text-4xl md:text-5xl font-normal font-aeonik tracking-wide">
            The Co-Creation <br /> Advantage
          </h2>
          <p className="text-[#9EB3CF] max-w-xl text-lg md:text-xl font-light font-bwmss01">
            Stop trading equity for billable hours or waiting months to hire
            in-house. See how our shared-risk model outperforms traditional
            development paths in speed, cost efficiency, and long-term
            alignment.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-[18px]">
          <div className="min-w-[900px] grid grid-cols-[1.3fr_1fr_1fr_1.3fr] auto-rows-auto">
            {/* Highlighted Background Column */}
            <div className="col-start-4 row-start-1 row-span-5 bg-gradient-to-b from-[#4FB4C8] to-[#2563EB] rounded-2xl -my-6 shadow-2xl z-0"></div>

            {/* Header Row */}
            <div className="border-b border-gray-700/50 p-6 pl-0"></div>
            <div className="border-b border-gray-700/50 p-6 text-xl md:text-2xl font-medium flex items-end font-aeonik">
              Traditional <br /> Dev Shop
            </div>
            <div className="border-b border-gray-700/50 p-6 text-xl md:text-2xl font-medium flex items-end font-aeonik">
              In-House <br /> Hiring
            </div>
            <div className="p-6 text-xl md:text-2xl font-medium flex items-end relative z-10 pl-8 col-start-4 row-start-1 font-aeonik">
              Co-Creation <br /> with Us
            </div>

            {/* Data Rows */}
            {data.map((row, i) => (
              <React.Fragment key={i}>
                <div className="border-b border-gray-700/50 p-6 pl-0 text-xl md:text-2xl font-medium flex items-center font-aeonik">
                  {row.label}
                </div>

                <div className="border-b border-gray-700/50 p-6 flex items-center gap-3 text-gray-300 text-lg font-aeonik">
                  <XCircle className="w-6 h-6 fill-white text-[#020F3B] flex-shrink-0" />
                  {row.traditional}
                </div>

                <div className="border-b border-gray-700/50 p-6 flex items-center gap-3 text-gray-300 text-lg font-aeonik">
                  <XCircle className="w-6 h-6 fill-white text-[#020F3B] flex-shrink-0" />
                  {row.inHouse}
                </div>

                <div
                  className="p-6 flex items-center gap-3 text-white text-lg font-medium relative z-10 pl-8 col-start-4 font-aeonik"
                  style={{ gridRow: i + 2 }}
                >
                  <Image
                    src={CheckIcon}
                    alt={row.label}
                    width={24}
                    height={24}
                  />{" "}
                  {row.coCreation}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <MobileView />
      </div>
    </section>
  );
};

export default Advantage;
