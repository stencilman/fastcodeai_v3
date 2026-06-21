"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Link from "next/link";

export default function DataCenterTermsOfServicePage() {
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
          Data Center Terms of Service
        </h1>
        <div className="text-sm md:text-lg text-[#6586DC] font-bwmss01 mb-[30px] md:mb-[48px] pb-[32px] border-b border-[rgba(255,255,255,0.08)]">
          Effective March 1, 2026
        </div>

        {/* Scope */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Scope &amp; Acceptance
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use
          of the AI inference infrastructure operated by the{" "}
          <strong className="text-white font-semibold">
            Data Center division
          </strong>{" "}
          of Fast Code AI Private Limited (&ldquo;Fast Code AI,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;). Our GPU inference service is made
          available exclusively as a model provider through the OpenRouter
          platform. By accessing models served by our infrastructure through
          OpenRouter, you agree to these Terms. They do not cover Fast Code
          AI&apos;s other business lines such as consulting, research, or
          software development services.
        </p>

        {/* The Service */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          The Service
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          We provide GPU compute capacity for AI model inference. Requests reach
          our infrastructure through OpenRouter, which manages all user-facing
          accounts, authentication, and billing. We process each inference
          request, return the output to OpenRouter, and discard it. We do not
          store prompts, completions, or user identifiers on our systems.
        </p>

        {/* Your Relationship with OpenRouter */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Your Relationship with OpenRouter
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          Because our service is delivered through OpenRouter, your use of it is
          also subject to{" "}
          <Link
            href="https://openrouter.ai/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1082e5] hover:text-[#5dc9de] transition-colors"
          >
            OpenRouter&apos;s Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="https://openrouter.ai/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1082e5] hover:text-[#5dc9de] transition-colors"
          >
            Privacy Policy
          </Link>
          . Where our Terms and OpenRouter&apos;s terms both apply, each governs
          its own portion of the service. We recommend reviewing OpenRouter&apos;s
          terms for details on accounts, billing, and platform usage.
        </p>

        {/* Acceptable Use */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Acceptable Use
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          You agree not to use our inference infrastructure, directly or
          indirectly, to:
        </p>
        <ul className="list-none pl-0 mb-[16px]">
          {[
            "Violate any applicable law, regulation, or third-party right, including intellectual property and privacy rights",
            "Generate or distribute malware, spam, or content intended to harm, defraud, or deceive",
            "Produce content that exploits or endangers minors, or that promotes violence, harassment, or illegal activity",
            "Attempt to disrupt, overload, reverse engineer, or gain unauthorized access to the infrastructure or models",
            "Circumvent rate limits, usage controls, or the safety and security measures of Fast Code AI or OpenRouter",
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
          We may suspend or restrict access to capacity that we reasonably
          believe violates these Terms or the acceptable use policies of
          OpenRouter.
        </p>

        {/* Models & Outputs */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Models &amp; Outputs
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          We serve open and third-party AI models on our GPU infrastructure.
          Outputs are generated automatically and may be inaccurate, incomplete,
          or unsuitable for your purpose. You are responsible for evaluating
          outputs before relying on them, and for ensuring your use of any model
          complies with that model&apos;s underlying license. We make no claim of
          ownership over the outputs returned to you, to the extent permitted by
          the applicable model license and law. Outputs are not stored or reused
          by us after delivery.
        </p>

        {/* Service Availability */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Service Availability
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          We strive to maintain reliable, high-performance inference capacity but
          do not guarantee uninterrupted availability. The service may be
          temporarily unavailable due to maintenance, capacity constraints,
          upstream dependencies, or events beyond our reasonable control. We may
          add, modify, or discontinue models and capacity at any time.
        </p>

        {/* Upstream Infrastructure */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Upstream Infrastructure
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          Portions of our inference capacity may be served using third-party GPU
          and serverless infrastructure, including{" "}
          <Link
            href="https://deepinfra.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1082e5] hover:text-[#5dc9de] transition-colors"
          >
            DeepInfra
          </Link>
          . Where such providers are used, their respective terms and acceptable
          use policies also apply to the corresponding portion of the service.
          These providers process requests on a transient basis to perform
          inference and do not receive personal data from us.
        </p>

        {/* Intellectual Property */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Intellectual Property
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          The Fast Code AI name, logo, infrastructure, and related materials are
          the property of Fast Code AI Private Limited. These Terms do not grant
          you any right to use our trademarks or branding without prior written
          permission. Third-party models, libraries, and trademarks remain the
          property of their respective owners.
        </p>

        {/* Disclaimer of Warranties */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Disclaimer of Warranties
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          The service is provided &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, whether express or
          implied, including warranties of merchantability, fitness for a
          particular purpose, accuracy, and non-infringement. We do not warrant
          that the service will be uninterrupted, error-free, or that model
          outputs will meet your requirements.
        </p>

        {/* Limitation of Liability */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Limitation of Liability
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          To the maximum extent permitted by law, Fast Code AI shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or for any loss of profits, data, or goodwill,
          arising out of or related to your use of the service. Our total
          aggregate liability arising out of these Terms shall not exceed the
          amounts received by us for the inference capacity giving rise to the
          claim during the three (3) months preceding the event.
        </p>

        {/* Indemnification */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Indemnification
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          You agree to indemnify and hold harmless Fast Code AI and its
          affiliates from any claims, damages, liabilities, and expenses arising
          out of your use of the service, your content or prompts, or your
          violation of these Terms or applicable law.
        </p>

        {/* Governing Law */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Governing Law
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          These Terms are governed by the laws of India, without regard to
          conflict-of-law principles. The courts of Bengaluru, Karnataka shall
          have exclusive jurisdiction over any dispute arising out of or relating
          to these Terms.
        </p>

        {/* Changes */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Changes
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          We may update these Terms from time to time. When we do, we will revise
          the effective date above. Continued use of the service after changes
          take effect constitutes acceptance of the updated Terms.
        </p>

        {/* Contact */}
        <h2 className="text-white font-normal font-aeonik text-xl md:text-3xl tracking-wide mt-[20px] md:mt-[36px] mb-[8px] md:mb-[12px]">
          Contact
        </h2>
        <p className="text-sm md:text-lg text-[#9EB3CF] font-bwmss01 mb-[16px]">
          Questions about these Terms can be directed to:
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
            Jbr Tech Park, Plot No. 77, 6th Rd, EPIP Zone,
            <br />
            Whitefield, Bengaluru, Karnataka 560066
          </p>
          <p className="text-[#9EB3CF] font-bwmss01 text-sm md:text-lg">
            Email:{" "}
            <Link
              href="mailto:datacenter@fastcode.ai"
              className="text-[#1082e5] hover:text-[#5dc9de] transition-colors"
            >
              datacenter@fastcode.ai
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
