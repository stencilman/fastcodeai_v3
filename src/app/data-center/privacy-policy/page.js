"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Link from "next/link";

export default function DataCenterPrivacyPolicyPage() {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#00081F]">
      <div className="max-w-[1350px] mx-auto px-[35px] md:px-[67px] pt-[140px] pb-[40px] md:pb-[80px]">
        {/* Title */}
        <h1 className="text-[35px] md:text-[40px] lg:text-[51px] text-white font-aeonik tracking-normal mb-[8px]">
          Data Center Privacy Policy
        </h1>
        <div className="text-sm md:text-lg text-[#6586DC] font-bwmss01 mb-[30px] md:mb-[48px] pb-[32px] border-b border-[rgba(255,255,255,0.08)]">
          Effective March 1, 2026
        </div>

        {/* Scope */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Scope
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          This privacy policy applies solely to the{" "}
          <strong className="text-white font-semibold">
            Data Center division
          </strong>{" "}
          of Fast Code AI Private Limited (&ldquo;Fast Code AI&rdquo;). It
          covers our GPU inference infrastructure that serves AI models through
          the OpenRouter platform. This policy does not cover Fast Code
          AI&apos;s other business lines such as consulting, research, or
          software development services.
        </p>

        {/* We Do Not Collect Personal Data */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          We Do Not Collect Personal Data
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          The Fast Code AI Data Center division provides GPU compute for AI
          inference via OpenRouter. We do not:
        </p>
        <ul className="list-none pl-0 mb-[16px]">
          {[
            "Collect, store, or process any end-user personal information",
            "Require user accounts, sign-ups, or registration",
            "Log, retain, or inspect the content of inference requests or responses",
            "Use cookies or tracking technologies in connection with the inference service",
            "Sell, share, or transfer any user data to third parties",
          ].map((item, i) => (
            <li
              key={i}
              className="relative pl-[20px] mb-[8px] text-sm md:text-lg text-[#9EB3CF] font-bwmss01"
            >
              <span className="absolute left-0 top-[10px] w-[5px] h-[5px] rounded-full bg-[#2DC1C3]"></span>
              {item}
            </li>
          ))}
        </ul>

        {/* How the Service Works */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          How the Service Works
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          All user interactions occur through OpenRouter. Users send prompts to
          OpenRouter, which routes them to our GPU infrastructure for inference.
          We process the request, return the output to OpenRouter, and discard
          it. No prompts, completions, or user identifiers are stored on our
          systems.
        </p>

        {/* What We Do Process */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          What We Do Process
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          The only data we handle is limited, non-personal operational metadata
          necessary to run the infrastructure:
        </p>
        <ul className="list-none pl-0 mb-[16px]">
          {[
            "Aggregate token counts (for billing with OpenRouter)",
            "GPU utilization and performance metrics",
            "System health and error logs (containing no request content)",
          ].map((item, i) => (
            <li
              key={i}
              className="relative pl-[20px] mb-[8px] text-sm md:text-lg text-[#9EB3CF] font-bwmss01"
            >
              <span className="absolute left-0 top-[10px] w-[5px] h-[5px] rounded-full bg-[#2DC1C3]"></span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          None of this data is linked to individual users or contains personal
          information.
        </p>

        {/* Data Shared with OpenRouter */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Data Shared with OpenRouter
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          OpenRouter manages all user-facing interactions, accounts, and
          billing. Their data practices are governed by{" "}
          <Link
            href="https://openrouter.ai/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2DC1C3] hover:text-[#5DDCDE] transition-colors"
          >
            OpenRouter&apos;s own Privacy Policy
          </Link>
          . We recommend reviewing it for details on how your data is handled on
          their platform.
        </p>

        {/* Security */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Security
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          Our infrastructure is hosted in professional data center facilities
          with industry-standard security controls including encryption in
          transit, network isolation, and access management. Since we do not
          store user data, there is no personal data at risk on our systems.
        </p>

        {/* Changes */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Changes
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          If our data practices change, we will update this page and revise the
          effective date above.
        </p>

        {/* Contact */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Contact
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          Questions about this policy can be directed to:
        </p>
        <div
          className="rounded-[14px] p-[24px] my-[20px] border border-[#243A6A]"
          style={{
            background: "linear-gradient(to bottom, #0B1B3F, #081533)",
          }}
        >
          <p className="text-white font-bold font-bwmss01 text-sm md:text-lg mb-[4px]">
            Fast Code AI Private Limited
          </p>
          <p className="text-[#9EB3CF] font-bwmss01 text-sm md:text-lg mb-[4px]">
            #48, Bhive Premium Church St, Haridevpur,
            <br />
            Ashok Nagar, Bengaluru — 560001, India
          </p>
          <p className="text-[#9EB3CF] font-bwmss01 text-sm md:text-lg">
            Email:{" "}
            <Link
              href="mailto:arjun@fastcode.ai"
              className="text-[#2DC1C3] hover:text-[#5DDCDE] transition-colors"
            >
              arjun@fastcode.ai
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-[rgba(255,255,255,0.08)] py-[32px] text-center">
        <p className="text-[13px] font-light text-[#6586DC] font-bwmss01">
          © 2026 Fast Code AI — Data Center Division. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
