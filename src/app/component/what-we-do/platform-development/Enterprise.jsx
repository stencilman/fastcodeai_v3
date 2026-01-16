import React from "react";
import CheckIcon from "../../../../../public/what-we-do/co-creation/check_icon.svg";
import Image from "next/image";

const Enterprise = () => {
  return (
    <section className="w-full bg-[#00081F] py-20 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto bg-[#020C2C] border border-[#1A2758] rounded-[18px] py-20 px-11">
        {/* Header Section */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-normal text-white font-aeonik tracking-wide mb-6">
            A Modular, Enterprise-Grade Stack
          </h2>
          <p className="text-[#9EB3CF] text-lg md:text-xl font-bwmss01 max-w-2xl mx-auto">
            Select the modules you need. We deploy them directly into your
            Virtual Private Cloud (VPC) or on-prem environment.
          </p>
        </div>

        {/* Connection Lines Diagram */}
        <div className="relative h-16 hidden md:block">
          {/* Middle Path (Straight) */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 bottom-0 w-px bg-gray-400"></div>

          {/* Left Path */}
          <div className="absolute left-[calc(50%-40px)] -translate-x-1/2 -top-6 h-[56px] w-px bg-gray-400"></div>
          <div className="absolute top-8 left-[calc(16.66%-8px)] right-[calc(50%+40px)] h-px bg-gray-400"></div>
          <div className="absolute top-8 left-[calc(16.66%-8px)] bottom-0 w-px bg-gray-400"></div>

          {/* Right Path */}
          <div className="absolute left-[calc(50%+40px)] -translate-x-1/2 -top-6 h-[56px] w-px bg-gray-400"></div>
          <div className="absolute top-8 left-[calc(50%+40px)] right-[calc(16.66%-8px)] h-px bg-gray-400"></div>
          <div className="absolute top-8 right-[calc(16.66%-8px)] bottom-0 w-px bg-gray-400"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 relative z-10">
          {/* Card 1 */}
          <div
            className=" border border-[#1e2f66] rounded-xl p-8 "
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-3xl font-normal mb-6 text-white font-aeonik tracking-wide">
                The Universal
                <br />
                Data Fabric
              </h3>
              <div className="space-y-4 text-gray-400 text-lg font-bwmss01 ">
                <p>
                  <span className="text-white font-medium">
                    400+ Connectors:
                  </span>
                  <br />
                  Instant integration with every major database, SaaS tool, and
                  cloud provider.
                </p>
                <p>
                  <span className="text-white font-medium">
                    Zero-Maintenance Pipelines:
                  </span>
                  <br />
                  Automated extraction and loading (ELT) with built-in error
                  handling and retries.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className=" border border-[#1e2f66] rounded-xl p-8 "
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-3xl font-normal mb-6 text-white font-aeonik tracking-wide">
                The Intelligence
                <br />
                Engine (RAG)
              </h3>
              <div className="space-y-4 text-gray-400 text-lg font-bwmss01 ">
                <p>
                  <span className="text-white font-medium">RAG-in-a-Box:</span>
                  <br />A pre-configured vector database and retrieval system
                  designed to ground your LLMs in your own enterprise data.
                </p>
                <p>
                  <span className="text-white font-medium">Data Cleaning:</span>
                  <br />
                  Automated normalization pipelines that turn "messy" data into
                  "AI-ready" assets.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="border border-[#1e2f66] rounded-xl p-8"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-3xl font-normal mb-6 text-white font-aeonik tracking-wide">
                The Control
                <br />
                Plane
              </h3>
              <div className="space-y-4 text-gray-400 text-lg font-bwmss01 ">
                <p>
                  <span className="text-white font-medium">Observability:</span>
                  <br />
                  Real-time dashboards to track data health, latency, and costs.
                </p>
                <p>
                  <span className="text-white font-medium">
                    Access Control:
                  </span>
                  <br />
                  Role-based governance ensuring the right people see the right
                  data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
