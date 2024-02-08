"use client";

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/component/Header';
import FollowUs from '@/component/followUs';
// import WhyChooseUs from '../whyChooseUs';


const AboutPage = () => {


  return (
    <>
     {/* <Header/> */}
      <div className='lg:pt-[170px]  sm:pt-[20px]'>

        {/*----------- section 1----------- */}
        <div className="text-black py-[30px]"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000">
          <h3
            className="text-[38px]  font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase"
          >
            about us
          </h3>
          <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
          <p className="my-4 text-[14px] md:text-[16px] font-normal leading-[26px] text-center capitalize">
          Welcome to Our Watch Store: Where Time Meets Elegance.
          </p>
        </div>

        {/*----------- section 2----------- */}
        <div className="py-[20px] md:py-[70px] bg-[#f0fbff] text-black ">
          <div className="container mx-auto">

            <div className="flex lg:flex-row flex-col-reverse text-center lg:text-left gap-x-20 gap-y-10 pt-1 lg:pt-[70px] "
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000">

              <div
                className="flex flex-col gap-5  z-[99] w-full lg:w-[50%] sal-example"
                // data-aos="fade-right"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
              >
                <p className="font-medium text-[16px] md:text-[24px] uppercase  leading-[32px] ">
                Our Story
                </p>
                <p className="font-normal text-[16px] leading-[32px]">
                At VINCINT, our story is one of passion, precision, and relentless pursuit of excellence. Inspired by the timeless allure of horology, we embarked on a journey to create a destination where watch enthusiasts and novices alike could discover the perfect timepiece to complement their unique style and personality.
                </p>
                {/* <p className="font-medium text-[16px] md:text-[24px] uppercase  leading-[32px] ">
                Our Philosophy
                </p> */}
                <p className="font-normal text-[16px] leading-[32px]">
                We believe that a watch is more than just a device to tell time—it's a reflection of one's taste, character, and aspirations. That's why we meticulously handpick each watch in our collection, focusing not only on superior craftsmanship and design but also on the stories they tell and the emotions they evoke.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link href="/contact">
                    <button className="btn_primary"> Contact us</button>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-[50%] "
                // data-aos="fade-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
              >
                <Image src="/images/aboutimg3.jpg" alt="hero-img" height={400} width={550} className="mx-auto"/>

              </div>
            </div>

          </div>
        </div>


        {/*----------- section 3----------- */}
        <div className="container mx-auto py-[20px] md:py-[70px] "
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000">
          <div className="flex lg:flex-row flex-col text-center lg:text-left gap-x-10 gap-y-10 justify-center md:justify-between items-center ">

            <div
              className="w-full lg:w-[40%] "
              // data-aos="fade-right"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
            >
              <Image src="/images/aboutimg1.jpg" alt="hero-img" height={200} width={550} className="mx-auto"/>
            </div>
            <div
              className="flex flex-col z-[99] gap-3 w-full lg:w-[50%]"
              // data-aos="fade-left"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
            >
              <p className="font-medium text-[16px] md:text-[24px] uppercase  leading-[32px] ">
              Our Commitment
                </p>
                <p className="font-normal text-[14px] 2xl:text-[16px] leading-[32px]">
                At VINCINT, we are committed to providing an exceptional shopping experience from start to finish. Whether you're browsing our online catalog or visiting our brick-and-mortar store, our knowledgeable team is here to assist you every step of the way. We strive to exceed your expectations with personalized service, expert advice, and a dedication to ensuring your complete satisfaction.
                </p>
              <p className="font-medium text-[16px] md:text-[24px] uppercase  leading-[32px] ">
              Join Us
                </p>
                <p className="font-normal text-[14px] 2xl:text-[16px] leading-[32px]">
                We invite you to explore our carefully curated collection of watches from renowned brands and emerging designers. From classic elegance to modern innovation, we offer a diverse range of styles to suit every taste and occasion. Whether you're a seasoned collector or a first-time buyer, we look forward to helping you find the perfect timepiece to cherish for years to come.
                </p>
            </div>
          </div>
        </div>


        {/*----------- section 4----------- */}

        <div className="pt-[70px] ">
          <div className=" w-full md:w-[70%] mx-auto flex flex-col gap-5 items-center justify-center"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000">
            <h3
              className="text-[24px] md:text-4xl font-bold text-center px-4 capitalize"
            >
              We Deliver watches with Perfection
            </h3>
            <p className=" text-[16px] font-normal leading-[26px] text-center capitalize">
            At Perfected Timepieces, we don't just sell watches—we deliver perfection. Every timepiece in our collection is a testament to precision engineering, exquisite design, and unparalleled craftsmanship. From classic elegance to modern innovation, we offer a diverse range of watches that cater to the discerning tastes of our esteemed clientele.
            </p>
          </div>
  <FollowUs/>
        </div>
      </div>
    </>
  )
}

export default dynamic(() => Promise.resolve(AboutPage), { ssr: false });
