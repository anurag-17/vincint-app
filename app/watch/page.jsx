"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "@/component/Header";
import NewProduct2 from "@/component/new-product/newProduct2";
// import WhyChooseUs from '../whyChooseUs';

const AboutPage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="lg:pt-[170px]  sm:pt-[20px]">
        {/*----------- section 1----------- */}
        <div className="text-black py-[30px]"
         data-aos="fade-up"
         data-aos-easing="ease-in-out"
         data-aos-duration="1000">
          <h3 className="text-[30px] md:text-[38px]  font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase">
            DRESS UP YOUR MOONSWATCH
          </h3>
          <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
          <p className="my-4 text-[14px] md:text-[16px] font-normal leading-[26px] text-center capitalize lg:max-w-[50%] mx-auto">
          Dress up your wrist with celestial elegance – explore VINCINT's Moonswatch collection, where timeless style meets lunar inspiration
          </p>
        </div>

        {/*----------- section 2----------- */}
        <div className="py-[20px] md:py-[70px] bg-[#f0fbff] text-black "
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col-reverse text-center justify-center items-center lg:text-left gap-x-20 gap-y-10 pt-1 lg:pt-[70px] ">
              <div
                className="flex flex-col gap-3  z-[99] w-full lg:w-[50%] sal-example"
                // data-aos="fade-right"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
              >
                <h1 className="text-[20px] font-medium uppercase">
                 
WWelcome to VINCINT: Where Time Meets Elegance
                </h1>

                <p className="font-normal text-[16px] leading-[32px] ">
                Welcome to VINCINT, where we redefine elegance with our exquisite collection of timepieces. Elevate your style and embrace celestial beauty with our exclusive line of Moonswatch watches. Designed to captivate and inspire, our Moonswatch collection combines celestial aesthetics with impeccable craftsmanship, offering a timepiece that is as unique as you are
                </p>
                <h1 className="text-[16px] font-medium uppercase">
                Lunar Elegance, Unparalleled Sophistication
                </h1>
                <p className="font-normal text-[16px] leading-[32px] ">
                Inspired by the mesmerizing allure of the moon, our Moonswatch collection is a tribute to celestial beauty and timeless elegance. Each watch is meticulously crafted to embody the ethereal charm of the lunar landscape, featuring exquisite detailing and impeccable precision. Whether you're attending a formal event or enjoying a night out on the town, our Moonswatch watches are the perfect accessory to elevate any ensemble.
                </p>
              </div>
              <div
                className="w-full lg:w-[50%] "
                // data-aos="fade-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
              >
                <Image
                  src="/images/moons.jpg"
                  alt="hero-img"
                  height={400}
                  width={650}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:py-[70px] text-black ">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse text-center justify-center items-center  gap-x-20 gap-y-10 pt-1 lg:pt-[70px] ">
              <div
                className="flex flex-col gap-5 text-left z-[99] w-full lg:w-[70%] mx-auto sal-example bg-[#f3f3f3] px-[20px] py-[40px] rounded-md"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
              >
                <h1 className="text-[24px] md:text-4xl uppercase text-center">
                  Fashion Initiative
                </h1>

                <p className="font-normal text-[16px] leading-[32px] ">
                Welcome to the forefront of timepiece fashion – introducing VINCINT's Fashion Initiative, where innovation meets style. Discover our curated selection of trendsetting watches designed to make a statement and redefine your wardrobe essentials. Embrace the fusion of cutting-edge design and timeless elegance with our Fashion Initiative – because your watch should be as fashion-forward as you are.
                </p>
                
                <h3 className=" text-[16px] font-semibold leading-[26px] text-left capitalize mt-4">
                Versatility Redefined
                </h3>
                <p className=" text-[16px] font-normal leading-[26px] text-left capitalize">
                At VINCINT, we believe in versatility without compromise. Our Moonswatch collection is designed to seamlessly transition from day to night, offering the perfect balance of style and functionality. With a variety of designs and color options to choose from, you can effortlessly express your individuality and complement any outfit with ease.
                </p>
                <h3 className=" text-[16px] font-semibold leading-[26px] text-left capitalize mt-4">
                Craftsmanship at Its Finest
                </h3>
                <p className=" text-[16px] font-normal leading-[26px] text-left capitalize">
                Quality is at the heart of everything we do at VINCINT, and our Moonswatch collection is no exception. Each watch is crafted with precision and attention to detail, using only the finest materials and components. From the intricately designed dial to the durable stainless steel case, every aspect of our Moonswatch watches is carefully considered to ensure long-lasting durability and performance.
                </p>
                <h3 className=" text-[16px] font-semibold leading-[26px] text-left capitalize mt-4">
                Make a Statement with VINCINT
                </h3>
                <p className=" text-[16px] font-normal leading-[26px] text-left capitalize">
                Embrace the beauty of the night sky and make a statement with VINCINT's Moonswatch collection. Whether you're looking for a classic timepiece with a modern twist or a bold statement piece that commands attention, our Moonswatch watches are sure to impress. Shop our collection today and discover the perfect watch to complement your unique sense of style. With VINCINT, the sky's the limit.
                </p>
              </div>
              <div
                className=" relative flex flex-col text-center justify-center items-center w-full lg:w-[90%]  mx-auto"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/landscape.jpg"
                  alt="hero-img"
                  height={400}
                  width={1000}
                  className="w-full"
                />
                <div className="absolute 2xl:text-[60px] xl:text-[50px] md:text-[40px]  mx-auto text-[30px] md:text-4xl uppercase font-semibold text-white">
                  Vincent Watch Fashion
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewProduct2 />
        {/*----------- section 4----------- */}

        <div className="py-[20px] md:py-[70px]  mb-10"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000">
          <div className=" w-full md:w-[70%] mx-auto flex flex-col gap-5 items-center justify-center">
            <h3 className="text-[24px] md:text-3xl uppercase text-center">
            Celebrating Timeless Precision: Our Commitment to Exquisite Watches
            </h3>
            <p className=" text-[16px] font-normal leading-[26px] text-center capitalize">
            Elevate your style with the latest trends in watch fashion. Explore our curated collection of timepieces that blend sophistication with contemporary flair. From sleek minimalist designs to bold statement pieces, find the perfect accessory to complement your unique sense of style. Stay ahead of the fashion curve and make a lasting impression with our exquisite selection of watches.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(AboutPage), { ssr: false });
