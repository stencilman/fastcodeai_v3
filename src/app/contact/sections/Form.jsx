"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import submitMail from "./submitMail";
import mailIcon from "../../../../public/contact/icons/mail.svg";
import phoneIcon from "../../../../public/contact/icons/phone.svg";
import locationIcon from "../../../../public/contact/icons/location.svg";
import linkedinIcon from "../../../../public/contact/icons/linked.svg";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    linkedInUrl: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();
  const countryRef = useRef();
  const linkedInUrlRef = useRef();
  const messageRef = useRef();

  const handleChange = (ref, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: ref.current.value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("formData", formData);
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    // setMessage("Sending email...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("result", result);

      if (response.ok) {
        setIsSubmitted(true);
        setMessage(
          `Thank you! We'll get back to you at ${formData.email} within 48 hours.`
        );
        // Reset form
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        companyRef.current.value = "";
        countryRef.current.value = "";
        linkedInUrlRef.current.value = "";
        messageRef.current.value = "";
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          country: "",
          linkedInUrl: "",
          message: "",
        });
        setTimeout(() => {
          setMessage("");
          setIsSubmitted(false);
        }, 5000);
      } else {
        setMessage("Error sending email. Please try again.");
        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error sending email. Please try again.");
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-[auto] pt-[120px] lg:pt-[120px] flex items-center justify-center bg-[#00081F]">
      <div
        className="w-[90%] h-[auto] md:h-[auto] lg:w-[80%] lg:h-[auto] flex flex-col lg:flex-row relative rounded-[18px]"
        style={{
          background:
            "transparent linear-gradient(125deg, #000E32 0%, #000929 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div className="w-[100%] lg:w-[40%] h-[50%] md:h-[50%] lg:h-full pt-[50px] md:pt-[100px] pb-[70px] justify-center flex items-start lg:items-center">
          <div className="flex flex-col gap-[50px] p-[20px]">
            <div className="flex gap-[20px]">
              <div
                className="w-[50px] h-[50px] rounded-[4px] flex justify-center items-center border border-[#1A2758]"
                style={{
                  background:
                    " transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Image src={mailIcon} width="23" height="17" alt="" />
              </div>
              <div>
                <h6 className="text-white text-2xl font-aeonik">Write us</h6>
                <p className="underline text-[#9EB3CF] text-lg font-bwmss01">
                  arjun@fastcode.ai
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <div
                className="w-[50px] h-[50px] rounded-[4px] flex justify-center items-center border border-[#1A2758]"
                style={{
                  background:
                    " transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Image src={phoneIcon} width="24" height="24" alt="" />
              </div>
              <div>
                <h6 className="text-white text-2xl font-aeonik">Phone no</h6>
                <p className=" text-[#9EB3CF] text-lg font-bwmss01">
                  +91 85530 38132
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <div
                className="w-[50px] h-[50px] rounded-[4px] flex justify-center items-center border border-[#1A2758]"
                style={{
                  background:
                    " transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Image src={locationIcon} width="22" height="31" alt="" />
              </div>
              <div>
                <h6 className="text-white text-2xl font-aeonik">Address</h6>
                <p className=" text-[#9EB3CF] text-lg font-bwmss01">
                  #48, Bhive Premium Church st <br />
                  Haridevpur, Shanthala Nagar,
                  <br /> Ashok Nagar, Bengaluru - 560001
                  <br />
                  Karnataka, India
                </p>
              </div>
            </div>
            <div>
              <iframe
                className="rounded-[20px] w-[100%] h-[222px] md:w-[100%] md:h-[222]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2804360631453!2d77.59854315160881!3d12.975756198586895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173e2de8a801%3A0x1a89454e3024974b!2sBHIVE%20Premium%20Church%20Street!5e0!3m2!1sen!2sin!4v1716794194158!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Link
              href="https://in.linkedin.com/company/fast-code"
              target="_blank"
            >
              <div className="flex gap-[5px] group">
                <Image
                  className="group-hover:scale-110 transition-all duration-300 ease-in-out"
                  src={linkedinIcon}
                  width="28"
                  height="28"
                  alt=""
                />
                <p className="text-xl text-white font-aeonik font-thin ">
                  Linkedin
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[100%] lg:w-[60%] h-[50%] md:h-[50%] lg:h-[auto] py-[50px] px-[20px] md:px-[50px] lg:px-[86px] right-0 bg-[#0E1E49] rounded-[20px] flex flex-col  justify-center gap-[20px] md:gap-[30px] lg:gap-[40px]">
          <div className="flex items-center pl-[10vw] sm:pl-0 justify-center lg:justify-start lg:pl-0 gap-[7px]">
            <p className=" w-[5px] h-[5px] rounded-[4px] bg-white"></p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
              {"Let's"} Kick Off A Dialogue.
            </p>
          </div>
          <div>
            <h1 className="text-white font-aeonik text-3xl md:text-4xl lg:text-[53px] lg:leading-[51px] tracking-normal text-center lg:text-left">
              Get In Touch For Custom-Fit Solutions.
            </h1>
          </div>
          <div>
            <form className="max-w-[34rem] mx-auto" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 md:gap-6 mb-[10px]">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={nameRef}
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(nameRef, "name")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={emailRef}
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(emailRef, "email")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 mb-[10px]">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={phoneRef}
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(phoneRef, "phone")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={companyRef}
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(companyRef, "companyName")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company Name
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  ref={countryRef}
                  type="text"
                  name="floating_country"
                  id="floating_country"
                  className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={() => handleChange(countryRef, "country")}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_country"
                  className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Country
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  ref={linkedInUrlRef}
                  type="url"
                  name="floating_linkedin"
                  id="floating_linkedin"
                  className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={() => handleChange(linkedInUrlRef, "linkedInUrl")}
                  placeholder=" "
                />
                <label
                  htmlFor="floating_linkedin"
                  className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  LinkedIn Profile URL
                </label>
              </div>
              <div className="flex flex-col md:gap-[30px] gap-[10px] xl:gap-[80px] items-start mt-[25px]">
                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                    ref={messageRef}
                    name="floating_message"
                    id="floating_message"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(messageRef, "message")}
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tell us about your project
                  </label>
                </div>

                {message && (
                  <div
                    className={`w-full px-4 py-3 rounded-[8px] border transition-all duration-300 ease-in-out ${
                      isSubmitted
                        ? "bg-gradient-to-r from-[#2DC1C3]/10 to-[#0268F2]/10 border-[#2DC1C3]/30 text-[#2DC1C3]"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 mt-0.5 ${
                          isSubmitted ? "text-[#2DC1C3]" : "text-red-400"
                        }`}
                      >
                        {isSubmitted ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6L6 18M6 6l12 12"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm font-aeonik font-medium leading-relaxed flex-1">
                        {message}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] py-[10px] px-[25px] text-center font-bwmss01 transition-all duration-300 ${
                    isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                  style={{
                    background: isLoading
                      ? "transparent linear-gradient(174deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box"
                      : "transparent linear-gradient(174deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : isSubmitted && message ? (
                    <span>✓ Submitted</span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
