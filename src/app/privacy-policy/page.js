"use client"
import { useEffect, useState } from "react";

import Footer from "../sections/Footer";
import { useGlobalContext } from "../context/GlobalContext";
import Link from "next/link";



const PrivacyPolicy = () => {

    const { setIsActive } = useGlobalContext()


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false)
    }, [])
    return (
        <>
            <div className="w-full h-[auto] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] relative pt-[130px] md:pt-[200px] py-[100px] bg-[#00081F] ">
                <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
                    Privacy Policy
                </h1>
                <div className="flex flex-col gap-[0px] md:gap-[50px]  md:mt-[50px]">
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            1.

                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                        <b className={`text-white font-bold`}> Introduction</b> FastCode AI Consult Pvt Ltd respects the privacy of our users and is
                            committed to protecting your personal information. This Privacy Policy explains how we
                            collect, use, disclose, and safeguard your information when you visit our website.
                        </p>
                    </div>
                    <div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            2.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                        <b className={`text-white font-bold`}>  Information We Collect</b> We collect information that identifies, relates to, describes, or
                            could reasonably be linked, directly or indirectly, with a specific individual. You may be
                            asked to provide personal information including, but not limited to:
                           
                        </p>



                    </div>
                    <ul>
                                <li className="list-disc text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]"><b className={`text-white font-bold`}>Personal Identification Information:</b> Name, email address,
                                    phone number, etc.</li>
                                <li className="list-disc text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]"><b className={`text-white font-bold`}>Employment Details:</b> If you are applying for a job, details
                                    regarding your employment history, educational background, and
                                    job qualifications.</li>
                                <li className="list-disc text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]"><b className={`text-white font-bold`}>Technical Information:</b> Log data, IP address, browser type, and
                                    version, and other technology on the devices you use to access our
                                    website.</li>
                            </ul>
                    </div>
                    <div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            3.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                        <b className={`text-white font-bold`}>  How We Use Your Information </b>We use the information we collect in various ways,
                            including to:
                            
                        </p>
                    </div>
                    <ul>
                                <li className="list-disc text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">Provide, operate, and maintain our website.</li>
                                <li className="list-disc text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">Improve, personalise, and expand our website.</li>
                                <li className="list-disc text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">Understand and analyse how you use our website.</li>
                            </ul>
                    </div>
                </div>
                <h1 className="text-[8vw] md:text-[7vw] mt-[50px] leading-[35px] tracking-normal lg:text-[51px] text-white font-aeonik">
                    Safeguarding and Securing the Data

                </h1>
                <div className="flex flex-col gap-[50px] mt-[10px]">
                    <div className="flex gap-[5px]">

                        <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                            FastCode AI Consult Pvt Ltd is committed to securing your data and keeping it
                            confidential. FastCode AI Consult Pvt Ltd has done all in its power to prevent data theft,
                            unauthorized access, and disclosure by implementing the latest technologies and
                            software, which help us safeguard all the information we collect online

                        </p>
                    </div>

                </div>
                <h1 className="text-[8vw] md:text-[7vw] mt-[50px] tracking-normal lg:text-[51px] text-white font-aeonik">
                    Our Cookie Policy


                </h1>
                <div className="flex flex-col gap-[50px] mt-[10px]">
                    <div className="flex gap-[5px]">

                        <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                            Once you agree to allow our blog to use cookies, you also agree to use the data it
                            collects regarding your online behaviour (analyse web traffic, web pages you visit and
                            spend the most time on).
                            The data we collect by using cookies is used to customize our blog to your needs. After
                            we use the data for statistical analysis, the data is completely removed from our
                            systems.
                            Please note that cookies {"don't"} allow us to gain control of your computer in any way.
                            They are strictly used to monitor which pages you find useful and which you do not so
                            that we can provide a better experience for you.
                            If you want to disable cookies, you can do it by accessing the settings of your internet
                            browser.   You   can   visit <Link href="https://www.internetcookies.com" className="text-blue-600" target="_black"> https://www.internetcookies.com</Link>,   which   contains
                            comprehensive information on how to do this on a wide variety of browsers and
                            devices.

                        </p>
                    </div>

                </div><h1 className="text-[8vw] md:text-[7vw] mt-[50px] tracking-normal lg:text-[51px] text-white font-aeonik leading-[35px]">
                    Restricting the Collection of your Personal Data



                </h1>
                <div className="flex flex-col gap-[50px] mt-[10px]">
                    <div className="flex gap-[5px]">

                        <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                            At some point, you might wish to restrict the use and collection of your personal data.
                            You can achieve this by doing the following:
                            When you are filling the forms on the blog, make sure to check if there is a box which
                            you can leave unchecked, if you {"don't"} want to disclose your personal information.
                            If you have already agreed to share your information with us, feel free to contact us via
                            email and we will be more than happy to change this for you.
                            FastCode AI Consult Pvt Ltd will not lease, sell or distribute your personal
                            information to any third parties, unless we have your permission. We might do so if
                            the law forces us. Your personal information will be used when we need to send you
                            promotional materials if you agree to this privacy policy.
                        </p>
                    </div>

                </div>
            </div>
            <Footer showExtraSpace={true}/>
        </>
    )
}

export default PrivacyPolicy
