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
     <Header/>
      <div className='pt-[170px]'>

        {/*----------- section 1----------- */}
        <div className="text-black py-[30px]">
          <h3
            className="text-[38px]  font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase"
          >
            about us
          </h3>
          <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
          <p className="my-4 text-[14px] md:text-[16px] font-normal leading-[26px] text-center capitalize">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolor pariatur, quam illum ab autem.
          </p>
        </div>

        {/*----------- section 2----------- */}
        <div className="py-[70px] bg-[#f0fbff] text-black ">
          <div className="container mx-auto">

            <div className="flex lg:flex-row flex-col-reverse text-center lg:text-left gap-x-20 gap-y-10 pt-1 lg:pt-[70px] ">

              <div
                className="flex flex-col gap-5  z-[99] w-full lg:w-[50%] sal-example"
                // data-aos="fade-right"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
              >
                <h1 className="text-[24px] md:text-4xl font-bold uppercase">
                  About Vincent
                </h1>

                <p className="font-normal text-[16px] leading-[32px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam itaque voluptates molestias libero laudantium dolor earum possimus error, temporibus nemo id, expedita non provident suscipit dicta natus voluptatibus cum. Lorem ipsum dolor sit.
                 
                </p>
                <p className="font-normal text-[16px] leading-[32px] ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, delectus eius asperiores tempora aut unde consequatur reiciendis fugit consectetur nulla repellat quia minus nesciunt repellendus ex facere!
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
                <Image src="/images/aboutimg3.jpg" alt="hero-img" height={400} width={550} />

              </div>
            </div>

          </div>
        </div>


        {/*----------- section 3----------- */}
        <div className="container mx-auto py-[70px] ">
          <div className="flex lg:flex-row flex-col text-center lg:text-left gap-x-10 gap-y-10 justify-center md:justify-between items-center ">

            <div
              className="w-full lg:w-[40%] "
              // data-aos="fade-right"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
            >
              <Image src="/images/aboutimg1.jpg" alt="hero-img" height={200} width={550} />
            </div>
            <div
              className="flex flex-col z-[99] w-full lg:w-[50%]"
              // data-aos="fade-left"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
            >
              <h1 className="text-[24px] md:text-4xl font-bold uppercase mb-5">
              Lorem ipsum dolor sit amet
              </h1>
              <p className="font-normal text-[16px] leading-[32px]">
                <strong> Lorem ipsum dolor sit amet : </strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat totam voluptate voluptatem repudiandae?
              </p>
              <p className="font-normal text-[16px] leading-[32px]">
              <strong>Lorem ipsum dolor sit amet : </strong> quasi. Odio accusamus qui ex unde quibusdam soluta optio in tempore voluptate cupiditate molestias ad.
              </p>
              <p className="font-normal text-[16px] leading-[32px]">
              <strong>Lorem ipsum dolor sit amet : </strong>  quasi. Odio accusamus qui ex unde quibusdam soluta optio in tempore voluptate cupiditate molestias ad.
              </p>
              <p className="font-normal text-[16px] leading-[32px]">
              <strong> Lorem ipsum dolor sit amet : </strong>  quasi. Odio accusamus qui ex unde quibusdam soluta optio in tempore voluptate cupiditate molestias ad.
              </p>
            </div>
          </div>
        </div>


        {/*----------- section 4----------- */}

        <div className="py-[70px]  mb-10">
          <div className=" w-full md:w-[70%] mx-auto flex flex-col gap-5 items-center justify-center">
            <h3
              className="text-[24px] md:text-4xl font-bold text-center px-4 capitalize"
            >
              We Deliver watches with Perfection
            </h3>
            <p className=" text-[16px] font-normal leading-[26px] text-center capitalize">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, voluptatibus aperiam deleniti, accusamus iure adipisci quaerat ex error aliquid dolore, fuga eaque voluptate est eos veniam beatae molestiae voluptatum omnis. Earum assumenda ut fuga, esse architecto magnam. Aspernatur, earum porro!
            </p>
          </div>
        </div>
  <FollowUs/>
      </div>
    </>
  )
}

export default dynamic(() => Promise.resolve(AboutPage), { ssr: false });
