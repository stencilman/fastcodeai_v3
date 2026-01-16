"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import Form from './sections/Form';
import HowWeDo from '../component/sections/HowWeDo';
import Clients from '../component/sections/Clients';
import WhyChooseUs from '../component/sections/WhyChooseUs';
import Footer from '../component/sections/Footer';

const Contact = () => {
    const { setIsActive } = useGlobalContext();

    useEffect(() => {
    window.scrollTo(0, 0);

        setIsActive(false)
    }, [])
    return (
        <>
            <Hero />
            <Form />
            <HowWeDo pb="pb-[100px]" />
            {/* <Clients /> */}
            {/* <WhyChooseUs /> */}
            <Footer showExtraSpace={true}/>
        </>
    ) 
}

export default Contact
