"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import LatestBlogs from './sections/LatestBlogs';
import Footer from '../sections/Footer';

const Blogs = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {

    window.scrollTo(0, 0);


    setIsActive(false)
  }, [])

  return (
    <>
      {/* <Hero /> */}
      <LatestBlogs />
      <Footer showExtraSpace={true} />
    </>
  )
}

export default Blogs
