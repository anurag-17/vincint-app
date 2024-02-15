"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "./button/Button";
import Header from "./Header";

const Herosection = ({ handleShow, isShow }) => {
  return (
    <>
      <main className="h-auto hero-section flex flex-col justify-center items-center md:relative">
        {/* mobile */}
        {/* <div className="container mx-auto md:absolute md:top-0 "> */}
     
        {/* </div> */}

        {/* mobile */}

        <div className="container mx-auto z-[0]">
          <div className="grid md:grid-cols-2 lg:justify-center lg:items-center gap-x-20 gap-y-10 pt-1 lg:pt-[100px] md:mt-0 mt-[70px]">
            <div
              className="flex flex-col gap-5 lg:gap-10 justify-center  z-[99] sal-example"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <h1 className="font-bold leading-[42px] lg:leading-[62px] 2xl:leading-[85px] uppercase text-white">
                Give your
                <p className="">
                  <span className="text-[#54A3F2]">watch</span> the look
                </p>
                it deserves
              </h1>
              <div className="mx-auto md:mx-0">
                <Button />
              </div>
            </div>
            <div
              className="2-[99] z-0"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Image
                src="/images/main_watch.png"
                alt="watch.."
                height={400}
                width={800}
                className="mx-auto z-0"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default dynamic(() => Promise.resolve(Herosection), { ssr: false });
