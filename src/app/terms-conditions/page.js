"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Footer from "../sections/Footer";
import Link from "next/link";

const TermConditions = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);
  return (
    <>
      <div className="w-full h-[auto] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] relative pt-[130px] md:pt-[200px] py-[100px] bg-[#00081F] ">
        <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
          Terms and Conditions
        </h1>
        <div className="flex flex-col gap-[50px] mt-[50px]">
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              1.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}>Introduction</b> Welcome to
              FastCode.ai. By accessing our website and using our services, you
              agree to be bound by the following terms and conditions. If you do
              not agree with any part of these terms, you must not use our
              website or services.AS
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              2.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}>
                {" "}
                Intellectual Property Rights
              </b>{" "}
              The content, layout, design, data, databases and graphics on this
              website are protected by Indian and international intellectual
              property laws and are owned by FastCode AI Consult Pvt. Ltd. or
              its licensors. Unless expressly permitted, you must not reproduce,
              modify, copy, distribute, or use for commercial purposes any
              content without the written permission of FastCode AI Consult Pvt.
              Ltd.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              3.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}> Use of the Service </b>
              FastCode AI Consult Pvt. Ltd. grants you a non-exclusive, non-
              transferable, limited license to access and use the services
              strictly in accordance with these terms. This license is solely
              for your personal and non-commercial use, unless otherwise agreed
              upon through a written agreement with FastCode AI Consult Pvt.
              Ltd.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              4.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}> User Obligations </b>You
              agree to use FastCode.ai only for lawful purposes and in a way
              that does not infringe the rights of, restrict, or inhibit anyone{" "}
              {"else's"} use and enjoyment of the website. Prohibited behaviour
              includes harassing or causing distress or inconvenience to any
              other user, transmitting obscene or offensive content, or
              disrupting the normal flow of dialogue within our website.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              5.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}> Privacy Policy </b> Our
              Privacy Policy, which sets out how we will use your information,
              can be found at{" "}
              <Link href="/privacy-policy" className="text-blue-600">
                https://fastcodeai/privacy-policy
              </Link>{" "}
              . By using this website, you consent to the processing described
              therein and warrant that all data provided by you is accurate.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              6.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}> Termination </b> FastCode
              AI Consult Pvt. Ltd. may terminate or suspend access to our
              services immediately, without prior notice or liability, for any
              reason whatsoever, including, without limitation, if you breach
              the Terms and Conditions.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              7.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}> Warranty Disclaimer</b> Our
              services and all content on FastCode.ai are provided on an as is
              and as available basis. FastCode AI Consult Pvt. Ltd. makes no
              representations or warranties of any kind, express or implied, as
              to the operation of their services, or the information, content,
              or materials included therein.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              8.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}>
                {" "}
                Limitation of Liability{" "}
              </b>
              In no event shall FastCode AI Consult Pvt. Ltd., nor its
              directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or
              punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from
              your access to or use of or inability to access or use the
              services.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              9.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}>Governing Law </b>These
              terms shall be governed by and construed in accordance with the
              laws of India, and you submit to the non-exclusive jurisdiction of
              the state and federal courts located in Bangalore, India, for the
              resolution of any disputes.
            </p>
          </div>
          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              10.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}>
                {" "}
                Changes to Terms FastCode{" "}
              </b>
              AI Consult Pvt. Ltd. reserves the right to amend these terms at
              any time. Any changes will be posted on this page, and your
              continued use of our website or services following any changes
              indicates your acceptance of the new terms..
            </p>
          </div>

          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              11.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}>
                {" "}
                Cancellation and Refund Policy
              </b>{" "}
              By purchasing any of our paid services, you agree to pay the
              applicable service fees and any related taxes. Failure to complete
              payment may result in suspension or termination of your access to
              the services.
              <br />
              <b>Please note:</b>
              <ul className="list-disc list-inside">
                <li>
                  Service costs may vary based on your location due to exchange
                  rates or local pricing differences.
                </li>
                <li>
                  Our payment processor may securely store and automatically
                  charge your payment method at the beginning of each billing
                  cycle.
                </li>
                <li>
                  To avoid being charged for the next billing cycle, you can
                  cancel your service plan at any time before the renewal date.
                </li>
              </ul>
              <b>Cancellations and Refunds: </b>
              <ul className="list-disc list-inside">
                <li>
                  All payments are non-refundable and service commitments are
                  non-cancellable, unless otherwise specified.
                </li>
                <li>
                  If you cancel your service during an active billing period,
                  you will retain access to the services until the end of that
                  period, but no partial refunds will be issued for the
                  remaining time.
                </li>
                <li>
                  Any applicable taxes are calculated based on the billing
                  information provided at the time of purchase.
                </li>
              </ul>
            </p>
          </div>

          <div className="flex gap-[5px]">
            <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
              12.
            </p>
            <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
              <b className={`text-white font-bold`}> Contact Us </b>If you have
              any questions about these Terms and Conditions, please contact us
              at admin@fastcode.ai
            </p>
          </div>
        </div>
      </div>
      <Footer showExtraSpace={true} />
    </>
  );
};

export default TermConditions;
