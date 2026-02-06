"use client";
import Button from "../../../component/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import pic3 from "../../../../../public/research/patentPage/pic3-2.png";
import pic4 from "../../../../../public/research/patentPage/pic4-2.png";
import pic2 from "../../../../../public/research/patentPage/pic2-2.png";
import pic1 from "../../../../../public/research/patentPage/pic1-2.png";
import RevealY from "../../../component/RevealY";

const Patents = () => {
  const patentsList = [
    {
      img: pic3,
      technology: "Automotive",
      year: "2021",
      title: "Method and system for triggering an event in a vehicle",
      desciption:
        "Embodiments of present disclosure relates to method for identifying a hand pose in a vehicle, and a system for performing an event in a vehicle. A hand image for a hand in the vehicle, is extracted from a vehicle image of the vehicle for identification. Plurality of contextual images of the hand image is obtained based on the single point. A hand pose associated with the hand is identified based on the plurality of contextual features using a classifier model.",
      linkName: "View Source",
      linkTo: "",
      downloadName: "Download PDF",
      downloadTo: "/research/patentsPdf/Triggering_event_in_vehicle.pdf",
      idAttr: "vehicleEvent",
    },
    {
      img: pic4,
      technology: "Automotive",
      year: "2021",
      title:
        "System and method for deployment of airbag based on head pose estimation",
      desciption:
        "Advanced airbag deployment control system designed for vehicular use incorporating an image sensor unit that captures real-time images of a vehicle occupant, focusing particularly on head localization. Utilizing a processing unit equipped with Long Short Term Memory (LSTM) neural network architecture, the system analyzes images to determine and predict the future position and orientation of the occupant's head. The system dynamically adjusts the direction in which the airbag flap is removed and the airbag's inflation pressure, ensuring optimal safety by adapting the deployment to the predicted head position at the moment of impact.",
      linkName: "View Source",
      linkTo: "",
      downloadName: "Download PDF",
      downloadTo: "/research/patentsPdf/Deploying_airbag.pdf",
      idAttr: "headPose",
    },

    {
      img: pic2,
      technology: "Automotive",
      year: "2019",
      title: "Method for Identifying a Hand Pose in a Vehicle",
      desciption:
        "A method for activating vehicle functions via hand gestures, utilizing a 3D Convolutional Neural Network (3D-CNN) and Gated Recurrent Unit (GRU) to analyze video frames and extract spatio-temporal features. A prediction module simultaneously assesses the gesture's progression and classifies it, employing predefined models to determine the gesture's type and its completion rate. Upon accurate detection and classification, a corresponding event is triggered within the vehicle.",
      linkName: "View Source",
      linkTo:
        "https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2020048814",
      downloadName: "Download PDF",
      downloadTo: "",
      idAttr: "headPoseIdentify",
    },
    {
      img: pic1,
      technology: "Human Sensing",
      year: "2011",
      title:
        "Computer-implemented method and apparatus for tracking and reshaping a human shaped figure in a digital world video",
      desciption:
        "The invention concerns a computer-implemented method for tracking and reshaping a human-shaped figure in a digital video comprising the steps: acquiring a body model of the figure from the digital video, adapting a shape of the body model, modifying frames of the digital video, based on the adapted body model and outputting the digital video.",
      linkName: "View Source",
      linkTo: "https://patents.google.com/patent/US9191579B2/en",
      downloadName: "Download PDF",
      downloadTo: "/research/patentsPdf/Human_sensing.pdf",
      idAttr: "humanShapeTrack",
    },
  ];
  return (
    <div className="h-auto w-full flex flex-col gap-[70px] items-center">
      {/* catagories */}
      {/* <div className="flex gap-[15px] md:gap-[35px] items-center justify-center flex-wrap">
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 1
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 2
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 3
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 4
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 5
        </div>
      </div> */}

      <div className="w-full px-[20px] md:px-[50px] lg:px-[100px] flex flex-col gap-[60px]">
        {patentsList.map((e, i) => (
          <RevealY key={i}>
            <div
              id={e.idAttr}
              className="flex flex-col md:flex-row gap-[30px] md:gap-[5%] rounded-[18px] items-center border border-[#1A2758] w-full h-auto p-[20px] md:px-[60px] md:py-[40px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <div className="w-full md:w-[40%]">
                <Image
                  className="rounded-[18px] w-full md:w-[370px]"
                  src={e.img}
                  height="370"
                  placeholder="blur"
                  width="370"
                  alt=""
                />
              </div>
              <div className="w-full md:w-[55%] flex flex-col gap-[20px]">
                {/* head */}
                <div className="flex gap-[20px] flex-wrap">
                  <div className="border border-[#082373] rounded-[30px] bg-[#00081F] uppercase px-[21px] py-[10px] text-lg font-bwmss01 text-white">
                    {e.technology}
                  </div>
                  <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
                    {e.year}
                  </div>
                </div>
                {/* body */}
                <div>
                  <h5 className="text-white font-aeonik  tracking-normal text-[30px]">
                    {e.title}
                  </h5>
                  <p className="text-[#9EB3CF] font-bwmss01 text-lg mt-[20px]">
                    {e.desciption}
                  </p>
                </div>
                {/* footer */}
                <div className="flex gap-[20px] items-center flex-wrap ">
                  {e.linkTo.length > 1 && (
                    <Link target={"_blank"} href={e.linkTo}>
                      <div
                        className="border border-[#F3F3F3] cursor-pointer text-white rounded-[4px] font-bwmss01 font-light  px-[25px] py-[13px] text-center"
                        style={{
                          background:
                            "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                        }}
                      >
                        {e.linkName}
                      </div>
                    </Link>
                  )}
                  {e.downloadTo.length > 1 && (
                    <Button
                      target={"_blank"}
                      to={e.downloadTo}
                      name={e.downloadName}
                    />
                  )}
                </div>
              </div>
            </div>
          </RevealY>
        ))}
      </div>
    </div>
  );
};

export default Patents;
