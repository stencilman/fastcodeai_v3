"use client"
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Footer from "../sections/Footer";



const LegalNotice = () => {
    const { setIsActive } = useGlobalContext();


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false)
    }, [])
    return (
        <>
        <div className="w-full h-[auto] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] relative pt-[130px] md:pt-[200px] py-[100px] bg-[#00081F] ">
            <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
                Legal Notice
            </h1>
            <div className="flex flex-col gap-[50px] mt-[50px]">
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        1.

                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                    <b className={`text-white font-bold`}> Website Ownership</b> This website, www.fastcode.ai, is owned and operated by FastCode
                        AI Consult Pvt. Ltd., a company duly incorporated under the laws of India, with its principal
                        office located in Bangalore, Karnataka.
                    </p>
                </div>
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        2.

                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                        <b className={`text-white font-bold`}> Intellectual Property</b> All content on this website, including but not limited to text,
                        graphics, logos, images, and software, is the property of FastCode AI Consult Pvt. Ltd. or its
                        content suppliers and is protected by both Indian and international intellectual property laws.
                        The compilation of all content on this site is the exclusive property of FastCode AI Consult
                        Pvt. Ltd.
                    </p>
                </div>
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        3.

                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                         <b className={`text-white font-bold`}>Use of Website</b> This website is available only for your personal, non-commercial use. You
                        may not use this website for any commercial purpose without express written consent from
                        FastCode AI Consult Pvt. Ltd. Unauthorized use of this website may give rise to a claim for
                        damages and/or be a criminal offense.
                    </p>
                </div>
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        4.
                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                        <b className={`text-white font-bold`}> Limitation of Liability </b>FastCode AI Consult Pvt. Ltd. will not be liable for any damages
                        of any kind arising from the use of this site, including, but not limited to direct, indirect,
                        incidental, punitive, and consequential damages.

                    </p>
                </div>
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        5.
                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">

                        <b className={`text-white font-bold`}> Disclaimers</b> The information and materials provided on this website are provided on an
                        as is basis. FastCode AI Consult Pvt. Ltd. makes no warranties, expressed or implied, and
                        hereby disclaims and negates all other warranties including, without limitation, implied
                        warranties or conditions of merchantability, fitness for a particular purpose, or non-
                        infringement of intellectual property or other violation of rights.

                    </p>
                </div>
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        6.
                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">

                         <b className={`text-white font-bold`}>Governing Law </b>Any claim relating to FastCode AI Consult Pvt.{" Ltd.'s"} website shall be
                        governed by the laws of India without regard to its conflict of law provisions.

                    </p>
                </div>
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        7.
                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">

                         <b className={`text-white font-bold`}>Amendments </b>FastCode AI Consult Pvt. Ltd. may revise these terms of use for its website
                        at any time without notice. By using this website you are agreeing to be bound by the then
                        current version of these terms of service.

                    </p>
                </div>
                <div className="flex gap-[5px]">
                    <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                        8.
                    </p>
                    <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">


                         <b className={`text-white font-bold`}>Contact Information</b> If you have any questions about this Legal Notice, please contact us
                        at:

                    </p>

                </div>
                <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">

                    Email: admin@fastcode.ai
                </p> <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[5px]">

                    Address: FastCode AI, Jbr Tech Park, Plot No. 77, 6th Rd, EPIP Zone,
                    Whitefield, Bengaluru, Karnataka 560066
                </p>
            </div>
        </div>
        <Footer showExtraSpace={true}/>
        </>
    )
}

export default LegalNotice
