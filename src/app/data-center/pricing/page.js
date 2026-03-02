"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Link from "next/link";

export default function DataCenterPricingPage() {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);

  const models = [
    {
      name: "MiniMax M2.5",
      description: "230B MoE · 10B active",
      input: "$0.28",
      output: "$1.14",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#00081F] mx-auto max-w-[1200px]">
      {/* Hero Section */}
      <div className="w-full pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] pt-[130px] md:pt-[200px] pb-[40px]">
        <h1 className="text-[8vw] md:text-[7vw] lg:text-[48px] text-white font-aeonik tracking-normal leading-tight">
          Model Pricing
        </h1>
        <p className="text-[#9EB3CF] text-sm md:text-lg font-bwmss01 mt-[16px] ">
          Inference pricing for models served by the Fast Code AI Data Center.
          All prices per 1M tokens.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px]">
        <div className="border-t border-[#1A2758]"></div>
      </div>

      {/* Pricing Table */}
      <div className="max-w-[900px] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] pt-[40px] md:pt-[60px] pb-[20px] mx-auto ">
        <div className="w-full max-w-[800px] overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr
                className="text-left"
                style={{
                  background:
                    "linear-gradient(360deg, #13224F 0%, #0C1C46 51%, #020F3B 100%)",
                }}
              >
                <th className="py-[16px] px-[20px] md:px-[28px] text-[11px] md:text-[13px] font-bwmss01 font-semibold text-[#9EB3CF] tracking-[1.5px] uppercase rounded-tl-[8px]">
                  Model
                </th>
                <th className="py-[16px] px-[20px] md:px-[28px] text-[11px] md:text-[13px] font-bwmss01 font-semibold text-[#9EB3CF] tracking-[1.5px] uppercase">
                  Input / 1M Tokens
                </th>
                <th className="py-[16px] px-[20px] md:px-[28px] text-[11px] md:text-[13px] font-bwmss01 font-semibold text-[#9EB3CF] tracking-[1.5px] uppercase rounded-tr-[8px]">
                  Output / 1M Tokens
                </th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, index) => (
                <tr key={index} className="border-b border-[#1A2758]">
                  <td className="py-[24px] px-[20px] md:px-[28px]">
                    <div className="text-white font-aeonik text-[15px] md:text-[17px] font-medium">
                      {model.name}
                    </div>
                    <div className="text-[#9EB3CF] font-bwmss01 text-[12px] md:text-[13px] mt-[4px]">
                      {model.description}
                    </div>
                  </td>
                  <td className="py-[24px] px-[20px] md:px-[28px] text-[#1082e5] font-bwmss01 text-[15px] md:text-[17px]">
                    {model.input}
                  </td>
                  <td className="py-[24px] px-[20px] md:px-[28px] text-[#1082e5] font-bwmss01 text-[15px] md:text-[17px]">
                    {model.output}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-[#9EB3CF] font-bwmss01 text-[13px] md:text-[15px] mt-[40px] ">
          Prices are subject to change. For volume pricing or dedicated
          capacity, contact{" "}
          <Link
            href="mailto:datacenter@fastcode.ai"
            className="text-[#1082e5] hover:underline"
          >
            datacenter@fastcode.ai
          </Link>
          .
        </p>
      </div>

      {/* Simple Footer */}
      <div className="w-full mt-[80px] md:mt-[120px] border-t border-[#1A2758] py-[30px] md:py-[40px]">
        <p className="text-[#9EB3CF] font-bwmss01 text-[12px] md:text-[14px] text-center">
          © 2026 Fast Code AI — Data Center Division. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
