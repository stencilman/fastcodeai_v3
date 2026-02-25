"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../../../public/f_logo1.png";
import brainLogo from "../../../public/footer-logo/brain.svg";
import textLogo from "../../../public/footer-logo/text.svg";
import MagneticEffect from "../component/MagneticEffect";
import GrokIcon from "../component/GrokIcon";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import {
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiPerplexity,
} from "react-icons/si";

const AI_PROMPT = `As a potential client, I want to clearly understand what I will receive by working with Fastcode AI (fastcode.ai).

Explain, step by step, how a typical engagement works — from the first conversation to systems being live and used in practice.

Describe what you help build, what inputs are required from my side, and what concrete outputs or capabilities I walk away with.
Explain how AI models, agents, or automation are introduced into existing products or operations, and what problems they meaningfully remove.

Highlight relevant past experience and examples of similar work Fastcode AI has done, and what outcomes were achieved.

Explain how success is measured, how the solution evolves over time, and what ongoing involvement looks like after the initial delivery.

Keep it simple, specific, and grounded in real work — describe the actual experience of working with Fastcode AI, not marketing language`;

const encodedPrompt = encodeURIComponent(AI_PROMPT);

const Footer = ({ showExtraSpace }) => {
  return (
    <>
      {showExtraSpace && (
        <div className="w-full relative h-[10vh] md:h-[20vh] bg-[#00081F]"></div>
      )}
      <div className="w-full relative h-auto">
        <div
          className="relative z-[5] w-full h-auto border-t border-[#1A2758]"
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div className="flex h-full w-full pl-[20px] pr-[20px] md:pl-[50px] md:pr-[50px] lg:pl-[160px] lg:pr-[73px] justify-between flex-col md:flex-row md:pb-[120px]">
            <div
              className="flex flex-col gap-5 w-[300px] mx-auto md:mx-0 md:w-[369px] h-auto py-[40px] md:py-0 md:h-[407px] rounded-[18px] items-center justify-center relative z-[6] top-[-60px] md:top-[-120px] mb-[154px] md:mb-0"
              style={{
                background:
                  "linear-gradient(to bottom right, #000E32, #000929) padding-box, linear-gradient(108deg, #000E32, #000E32, #6586DC, #000E32) border-box",
                borderWidth: "1px 1px 0px 0px",
                borderStyle: "solid",
                borderColor: "transparent",
              }}
            >
              {/* <Image
                placeholder="blur"
                src={footerLogo}
                height="140"
                width="249"
                alt="logo"
              /> */}
              <Image
                // placeholder="blur"
                src="/footer-logo/brain.svg"
                height="100"
                width="100"
                alt="logo"
              />
              <Image
                // placeholder="blur"
                src="/footer-logo/text.svg"
                height="140"
                width="249"
                alt="logo"
              />

              {/* Social icons row positioned just below the card */}
              <div className="absolute -bottom-[72px] left-1/2 -translate-x-1/2 flex justify-around w-full gap-[18px] z-[7]">
                <Link
                  href="https://x.com/FastCodeAI"
                  aria-label="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-[56px] h-[56px] rounded-[4px] bg-gradient-to-b from-[#0B1B3F] to-[#081533] border border-[#243A6A] flex items-center justify-center text-white hover:scale-95 active:scale-90 transition-all duration-200 ease-out">
                    <FaXTwitter size={22} />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/fastcodeai/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-[56px] h-[56px] rounded-[4px] bg-gradient-to-b from-[#0B1B3F] to-[#081533] border border-[#243A6A] flex items-center justify-center text-white hover:scale-95 active:scale-90 transition-all duration-200 ease-out">
                    <FaInstagram size={22} />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fast-code/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-[56px] h-[56px] rounded-[4px] bg-gradient-to-b from-[#0B1B3F] to-[#081533] border border-[#243A6A] flex items-center justify-center text-white hover:scale-95 active:scale-90 transition-all duration-200 ease-out">
                    <FaLinkedinIn size={22} />
                  </div>
                </Link>
                <Link
                  href="https://www.youtube.com/@fastcodeai"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-[56px] h-[56px] rounded-[4px] bg-gradient-to-b from-[#0B1B3F] to-[#081533] border border-[#243A6A] flex items-center justify-center text-white hover:scale-95 active:scale-90 transition-all duration-200 ease-out">
                    <FaYoutube size={22} />
                  </div>
                </Link>
              </div>

              {/* AI Summary Section - Positioned absolute below social icons */}
              <div className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-full p-[15px] rounded-[12px] border border-[#243A6A] bg-gradient-to-b from-[#0B1B3F] to-[#081533] flex flex-col items-center justify-center gap-3 z-[7]">
                <span className="text-[#9eb3cf] font-aeonik text-[14px] text-center">
                  Request an AI summary of Fast Code AI
                </span>
                <div className="flex gap-4 md:gap-8 items-center justify-center">
                  <Link
                    href={`https://chatgpt.com/?q=${encodedPrompt}`}
                    target="_blank"
                    aria-label="ChatGPT"
                  >
                    <SiOpenai
                      className="text-[#9eb3cf] hover:text-[#10A37F] transition-colors"
                      size={25}
                    />
                  </Link>
                  <Link
                    href={`https://claude.ai/new?q=${encodedPrompt}`}
                    target="_blank"
                    aria-label="Claude"
                  >
                    <SiClaude
                      className="text-[#9eb3cf] hover:text-[#D97757] transition-colors"
                      size={25}
                    />
                  </Link>
                  {/* <Link
                    href={`https://gemini.google.com/app?text=${encodedPrompt}`}
                    target="_blank"
                    aria-label="Gemini"
                  >
                    <SiGooglegemini
                      className="text-[#9eb3cf] hover:text-[#4285F4] transition-colors"
                      size={25}
                    />
                  </Link> */}
                  <Link
                    href={`https://www.perplexity.ai/search?q=${encodedPrompt}`}
                    target="_blank"
                    aria-label="Perplexity"
                  >
                    <SiPerplexity
                      className="text-[#9eb3cf] hover:text-[#22B3A8] transition-colors"
                      size={25}
                    />
                  </Link>
                  {/* <Link
                    href={`https://grok.com/?q=${encodedPrompt}`}
                    target="_blank"
                    aria-label="Grok"
                  >
                    <GrokIcon
                      className="text-[#9eb3cf] hover:text-gray-400 transition-colors"
                      size={30}
                    />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[58%] ml-0 md:ml-[80px] lg:ml-[120px] mr-0 md:mr-[10px] flex flex-col justify-around">
              {/* Nav */}
              <div className="w-full border-b border-[#AFC0FF] pb-[22px] mt-[20px] md:mt-[52px]">
                <ul className="flex flex-wrap lg:flex-nowrap gap-[10px] lg:gap-0 justify-center md:justify-around w-full text-white font-aeonik text-[19px] pl-0">
                  <MagneticEffect>
                    <Link href="/" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out text-[#9EBFC3]">
                        Home
                      </li>
                    </Link>
                  </MagneticEffect>
                  <MagneticEffect>
                    <Link href="/portfolio" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out text-[#9EBFC3]">
                        Portfolio
                      </li>
                    </Link>
                  </MagneticEffect>
                  <MagneticEffect>
                    <Link href="/team" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out text-[#9EBFC3]">
                        Team
                      </li>
                    </Link>
                  </MagneticEffect>
                  <MagneticEffect>
                    <Link href="/research" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out text-[#9EBFC3]">
                        Research
                      </li>
                    </Link>
                  </MagneticEffect>

                  {/* <MagneticEffect>
                    <Link href="/about" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        About
                      </li>
                    </Link>
                  </MagneticEffect> */}
                  {/* <MagneticEffect>
                    <Link href="/expertise" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Expertise
                      </li>
                    </Link>
                  </MagneticEffect> */}
                  {/* <MagneticEffect>
                    <Link href="/career" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Career
                      </li>
                    </Link>
                  </MagneticEffect> */}
                  <MagneticEffect>
                    <Link href="/blogs" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Blogs
                      </li>
                    </Link>
                  </MagneticEffect>
                  <MagneticEffect>
                    <Link href="/contact" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out text-[#9EBFC3]">
                        Contact Us
                      </li>
                    </Link>
                  </MagneticEffect>
                </ul>
              </div>
              {/* Address */}
              <div className="w-full flex flex-col lg:flex-row my-[20px] md:my-[0px] gap-8 md:gap-0 text-center md:text-left">
                <div className="w-full lg:w-[50%]">
                  <ul className="pl-0">
                    <li className="text-[14px]  text-white font-bwss01 font-bold">
                      Head Office
                    </li>
                    <li className="text-sm text-[#9EB3CF] font-bwmss01 mt-[10px] md:mt-[19px]">
                      #48, Bhive Premium Church st,
                      <br /> Haridevpur, Shanthala Nagar,
                      <br /> Ashok Nagar, Bengaluru - 560001
                      <br />
                      Karnataka, India
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-[50%]">
                  <ul className="pl-0">
                    <li className="text-[14px]  text-white font-bwss01 font-bold">
                      Email
                    </li>
                    <li className="text-[#9EB3CF] font-bwmss01 text-2xl  pl-[4px]">
                      arjun@fastcode.ai
                    </li>
                    <li className="text-[14px]  text-white font-bwss01 font-bold mt-[8px]">
                      Phone
                    </li>
                    <li className="text-[#9EB3CF] font-bwmss01 text-2xl  pl-[4px]">
                      +91 85530 38132
                    </li>
                  </ul>
                </div>
              </div>
              {/* Copy R */}
              <div className="w-full flex-wrap md:flex-nowrap gap-[20px] md:gap-[0] border-t border-[#AFC0FF] pt-[22px] flex flex-col-reverse md:flex-row justify-between items-center md:items-start pb-10 md:pb-0">
                <div>
                  <p className="text-[#9EB3CF] font-bwmss01 text-[12px] text-center md:text-left">
                    © Copyright Fast Code AI 2026. All Rights Reserved
                  </p>
                </div>
                <div className="flex gap-[27px] mb-[10px] md:mb-0 justify-center w-full md:w-auto">
                  <Link href="/legal-notice">
                    <p className="text-[#9EB3CF] hover:text-white transition-all duration-300 font-bwmss01 text-[12px]">
                      Legal Notice
                    </p>
                  </Link>
                  <Link href="/privacy-policy">
                    <p className="text-[#9EB3CF] hover:text-white transition-all duration-300 font-bwmss01 text-[12px]">
                      Privacy Policy
                    </p>
                  </Link>
                  <Link href="/terms-conditions">
                    <p className="text-[#9EB3CF] hover:text-white transition-all duration-300 font-bwmss01 text-[12px] cursor-pointer">
                      Terms & Conditions
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
