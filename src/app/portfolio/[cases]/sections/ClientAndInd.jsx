import Image from "next/image";
import React from "react";

function ClientAndInd({ clientAndRoleData }) {
  return (
    <div className="relative w-full h-auto py-[80px] md:py-[150px] bg-[#00081F] px-[20px] md:px-[50px] lg:px-[100px]  flex flex-col-reverse md:flex-col gap-[80px] md:gap-[150px] justify-center items-center">
      <div className="flex w-full gap-[50px] flex-col md:flex-row">
        <div className="w-full md:w-[65%] flex flex-col gap-[40px] md:gap-[80px]">
          <h1 className="text-white font-aeonik tracking-wide font-normal text-[7vw] md:text-[6vw] md:leading-[6vw]">
            Client and Industry
          </h1>
          <p className="text-[#9EB3CF] font-bwmss01 text-lg pr-[10px] md:pr-[85px]">
            {clientAndRoleData[0]?.description}
          </p>
        </div>
        <div className="w-full md:w-[36%] flex flex-wrap gap-[55px] items-center">
          <div>
            <p className="text-white text-lg font-bwmss01 font-thin">
              Industry
            </p>
            <h6 className="text-white font-bwmss01 text-2xl ">
              {clientAndRoleData[0]?.industry}
            </h6>
          </div>
          <div>
            <p className="text-white text-lg font-bwmss01 font-thin">
              Business Type
            </p>
            <h6 className="text-white font-bwmss01 text-2xl ">
              {clientAndRoleData[0]?.businessType}
            </h6>
          </div>
          <div>
            <p className="text-white text-lg font-bwmss01 font-thin">
              Services
            </p>
            <h6 className="text-white font-bwmss01 text-2xl ">
              {/* Research, <br />
              Development & <br />
              Deployment */}
              {clientAndRoleData[0]?.services}
            </h6>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col-reverse md:flex-row gap-[40px] md:gap-[37px]">
        {/* <div className="w-full md:w-[40%] flex flex-col gap-[20px] md:gap-[60px] ml-[10px] md:ml-[80px]">
         {clientAndRoleData[0]?.services.includes("Research") ? <div className="flex gap-[40px] items-center ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px] w-[90px] h-[90px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/potfolio/case-studies/research.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <p className="text-[#FFFFFF] font-bwmss01 text-2xl">Research</p>
            </div>
          </div>:""}
          {clientAndRoleData[0]?.services.includes("Development") ?<div className="flex gap-[40px] items-center ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px] w-[90px] h-[90px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/potfolio/case-studies/development.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <p className="text-[#FFFFFF] font-bwmss01 text-2xl">
                Development
              </p>
            </div>
          </div>:""}
          {clientAndRoleData[0]?.services.includes("Deployment") ? <div className="flex gap-[40px] items-center ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px] w-[90px] h-[90px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/potfolio/case-studies/deployment.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <p className="text-[#FFFFFF] font-bwmss01 text-2xl">Deployment</p>
            </div>
          </div>:""}
        </div> */}
        <div className="w-full  flex items-center">
          <div className="flex flex-col gap-[40px] md:gap-[80px]">
            <h1 className="text-white font-aeonik tracking-wide font-normal text-[8vw] md:text-[6vw] leading-[6vw]">
              Our Role
            </h1>
            <p className="text-[#9EB3CF] font-bwmss01 text-lg pr-[10px] md:pr-[85px]">
              {clientAndRoleData[0]?.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientAndInd;
