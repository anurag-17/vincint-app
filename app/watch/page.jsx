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
        <div className="text-black py-[30px]">
          <h3 className="text-[38px]  font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase">
            DRESS UP YOUR MOONSWATCH
          </h3>
          <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
          <p className="my-4 text-[14px] md:text-[16px] font-normal leading-[26px] text-center capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            dolor pariatur, quam illum ab autem.
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
                <h1 className="text-[24px] md:text-4xl uppercase">
                  VINCENT WATCH INITIATIVE
                </h1>

                <p className="font-normal text-[16px] leading-[32px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veniam itaque voluptates molestias libero laudantium dolor
                  earum possimus error, temporibus nemo id, expedita non
                  provident suscipit dicta natus voluptatibus cum. Lorem ipsum
                  dolor sit.
                </p>
                <p className="font-normal text-[16px] leading-[32px] ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quam, delectus eius asperiores tempora aut unde consequatur
                  reiciendis fugit consectetur nulla repellat quia minus
                  nesciunt repellendus ex facere!
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
        <div className="py-[70px] text-black ">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse text-center justify-center items-center  gap-x-20 gap-y-10 pt-1 lg:pt-[70px] ">
              <div
                className="flex flex-col gap-5 text-left z-[99] w-full lg:w-[70%] mx-auto sal-example bg-[#f3f3f3] px-[20px] py-[40px] rounded-md"
                // data-aos="fade-right"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
              >
                <h1 className="text-[24px] md:text-4xl uppercase text-center">
                  Fashion Initiative
                </h1>

                <p className="font-normal text-[16px] leading-[32px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veniam itaque voluptates molestias libero laudantium dolor
                  earum possimus error, temporibus nemo id, expedita non
                  provident suscipit dicta natus voluptatibus cum. Lorem ipsum
                  dolor sit.
                </p>
                <p className="font-normal text-[16px] leading-[32px] ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quam, delectus eius asperiores tempora aut unde consequatur
                  reiciendis fugit consectetur nulla repellat quia minus
                  nesciunt repellendus ex facere!
                </p>
                <p className=" text-[16px] font-normal leading-[26px]  capitalize">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quis, voluptatibus aperiam deleniti, accusamus iure adipisci
                  quaerat ex error aliquid dolore, fuga eaque voluptate est eos
                  veniam beatae molestiae voluptatum omnis. Earum assumenda ut
                  fuga, esse architecto magnam. Aspernatur, earum porro!
                </p>
                <h3 className=" text-[16px] font-semibold leading-[26px] text-left capitalize mt-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h3>
                <p className=" text-[16px] font-normal leading-[26px] text-left capitalize">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quis, voluptatibus aperiam deleniti, accusamus iure adipisci
                  quaerat ex error aliquid dolore, fuga eaque voluptate est eos
                  veniam beatae molestiae voluptatum omnis. Earum assumenda ut
                  fuga, esse architecto magnam. Aspernatur, earum porro!
                </p>
                <h3 className=" text-[16px] font-semibold leading-[26px] text-left capitalize mt-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h3>
                <p className=" text-[16px] font-normal leading-[26px] text-left capitalize">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quis, voluptatibus aperiam deleniti, accusamus iure adipisci
                  quaerat ex error aliquid dolore, fuga eaque voluptate est eos
                  veniam beatae molestiae voluptatum omnis. Earum assumenda ut
                  fuga, esse architecto magnam. Aspernatur, earum porro!
                </p>
              </div>
              <div
                className=" relative flex flex-col text-center justify-center items-center w-full lg:w-[90%]  mx-auto"
                // data-aos="fade-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
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

        <div className="py-[70px]  mb-10">
          <div className=" w-full md:w-[70%] mx-auto flex flex-col gap-5 items-center justify-center">
            <h3 className="text-[24px] md:text-4xl font-bold text-center px-4 capitalize">
              We Deliver watches with Perfection
            </h3>
            <p className=" text-[16px] font-normal leading-[26px] text-center capitalize">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              voluptatibus aperiam deleniti, accusamus iure adipisci quaerat ex
              error aliquid dolore, fuga eaque voluptate est eos veniam beatae
              molestiae voluptatum omnis. Earum assumenda ut fuga, esse
              architecto magnam. Aspernatur, earum porro!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(AboutPage), { ssr: false });
