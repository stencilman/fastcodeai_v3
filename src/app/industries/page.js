"use client"
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "./sections/Hero";
import InnovativeProj from "./sections/InnovativeProj";
import SpecializeIndustries from "./sections/SpecializeIndustries";
import HowWeDo from "../sections/HowWeDo";
import WhyChooseUs from "../sections/WhyChooseUs";
import OurWork from "../sections/OurWork";
import Clients from "../sections/Clients";
import TestimonialsN from "../sections/TestimonialsN";
import Footer from "../sections/Footer";
import Cta from "./sections/Cta";

const Industries = () => {
    const { setIsActive } = useGlobalContext();


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false)
    }, [])
    return (
        <>
            <Hero />
            <InnovativeProj/>
            <SpecializeIndustries/>
            <HowWeDo/>
            <WhyChooseUs/>
            <OurWork showShadow={true} />
            <Clients/>
            <TestimonialsN/>
           
            <Cta title="Do you Have a Project in Mind?" quote="Give us Some Detail on Your Project and Let us Help"/>
            
            <Footer showExtraSpace={true}/>
        </>
    )
}

export default Industries
