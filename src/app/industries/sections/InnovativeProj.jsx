import Image from "next/image";
import React from "react";

function InnovativeProj() {
  return (
    <div className="w-full h-[auto] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-0 relative bg-[#00081F] flex flex-col justify-center my-[10%]">
      <div className="flex w-[full] h-[auto] gap-[5%] gap-y-[40px] flex-col lg:flex-row">
        <div className="lg:w-[45%] h-full flex flex-col sm:flex-row lg:flex-col gap-[35px]">
          <div className="w-full  ">
            <h3 className="text-white font-aeonik tracking-wide text-[8vw] md:text-[7vw] lg:text-[51px] leading-[10vw] md:leading-[8vw] lg:leading-[60px]">
              We say {`"yes"`} to innovative projects
            </h3>
            <p className="text-[#9EB3CF] font-bwmss01 text-lg leading-[1.4em] mt-[15px] md:mt-[20px] lg:mt-[30px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div
            className="w-full h-auto  rounded-[18px] border border-[#1A2758] flex flex-col gap-[20px] pt-[17px] px-[26px] pb-[35px]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div>
              <h4 className="text-white font-aeonik tracking-wide text-[8vw] md:text-[7vw] lg:text-[51px] leading-[1em]">
                Our Expertise
              </h4>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div>
                <b className="text-white">Consultation</b>
                <div
                  className="h-[10px] w-[88%] rounded-[8px] mt-[8px]"
                  style={{
                    background:
                      "transparent linear-gradient(104deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                  }}
                ></div>
              </div>
              <div>
                <b className="text-white">Consultation</b>
                <div
                  className="h-[10px] w-[100%] rounded-[8px] mt-[8px]"
                  style={{
                    background:
                      "transparent linear-gradient(104deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                  }}
                ></div>
              </div>
              <div>
                <b className="text-white">Consultation</b>
                <div
                  className="h-[10px] w-[95%] rounded-[8px] mt-[8px]"
                  style={{
                    background:
                      "transparent linear-gradient(104deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                  }}
                ></div>
              </div>
              <div>
                <b className="text-white">Consultation</b>
                <div
                  className="h-[10px] w-[100%] rounded-[8px] mt-[8px]"
                  style={{
                    background:
                      "transparent linear-gradient(104deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-[45%] h-full  flex gap-[5%] flex-wrap">
          <div
            className="w-[100%] sm:w-[47.5%] h-auto sm:h-[331px]  rounded-[18px] mb-[30px] flex items-center sm:items-start sm:flex-col gap-[15px] p-[20px] border border-[#1A2758]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full w-[143px] h-[110px] sm:h-[143px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                alt="icon"
                src="/industries/ind-page/icon1.svg"
                height="90"
                width="90"
                className="w-[50px] sm:h-[90px]"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
                Passion for Innovation
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px] mt-[14px] font-bwmss01">
                Enthusiastic about innovation projects.
              </p>
            </div>
          </div>
          <div
            className="w-[100%] sm:w-[47.5%] h-auto sm:h-[331px]  rounded-[18px] mb-[30px] flex  items-center sm:items-start sm:flex-col gap-[15px] p-[20px] border border-[#1A2758]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full w-[143px] h-[110px] sm:h-[143px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                alt="icon"
                src="/industries/ind-page/icon2.svg"
                height="75"
                width="75"
                className="w-[50px] sm:h-[75px]"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
                Proven Track Record
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px]  mt-[14px] font-bwmss01">
                Reliable history of project success.
              </p>
            </div>
          </div>
          <div
            className="w-[100%] sm:w-[47.5%] h-auto sm:h-[331px]  rounded-[18px] mb-[30px] flex  items-center sm:items-start sm:flex-col gap-[15px] p-[20px] border border-[#1A2758]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full w-[143px] h-[110px] sm:h-[143px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                alt="icon"
                src="/industries/ind-page/icon3.svg"
                height="80"
                width="80"
                className="w-[50px] sm:h-[80px]"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
                Collaborative Approach
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px]  mt-[14px] font-bwmss01">
                Work closely with clients.
              </p>
            </div>
          </div>
          <div
            className="w-[100%] sm:w-[47.5%] h-auto sm:h-[331px]  rounded-[18px] mb-[30px] flex  items-center sm:items-start sm:flex-col gap-[15px] p-[20px] border border-[#1A2758]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full w-[143px] h-[110px] sm:h-[143px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                alt="icon"
                src="/industries/ind-page/icon4.svg"
                height="80"
                width="80"
                className="w-[50px] sm:h-[80px]"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
                Customized Solutions
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px] mt-[14px] font-bwmss01">
                Tailor solutions to project needs.
              </p>
            </div>
          </div>
          <div
            className="w-[100%] sm:w-[47.5%] h-auto sm:h-[331px]  rounded-[18px] mb-[30px] flex items-center sm:items-start sm:flex-col gap-[15px] p-[20px] border border-[#1A2758]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full w-[143px] h-[110px] sm:h-[143px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                alt="icon"
                src="/industries/ind-page/icon5.svg"
                height="80"
                width="80"
                className="w-[50px] sm:h-[80px]"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
                Dedicated Team
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px]  mt-[14px] font-bwmss01">
                Committed to remarkable outcomes.
              </p>
            </div>
          </div>
          <div
            className="w-[100%] sm:w-[47.5%] h-auto sm:h-[331px]  rounded-[18px] mb-[30px] flex  items-center sm:items-start sm:flex-col gap-[15px] p-[20px] border border-[#1A2758]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full w-[143px] h-[110px] sm:h-[143px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                alt="icon"
                src="/industries/ind-page/icon6.svg"
                height="80"
                width="80"
                className="w-[50px] sm:h-[80px]"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
                Adaptability
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px] mt-[14px] font-bwmss01">
                Embrace challenges, deliver agile solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovativeProj;
