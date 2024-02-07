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
        <div className="lg:hidden flex justify-between items-center w-full px-4 py-4 z-[999] ">
          <div className="w-[100px] ">
            <Image src="/svg/logo.svg" alt="Logo." height={70} width={120} />
          </div>
          <div
            className=" h-[35px] w-[35px] cursor-pointer z-[999]"
            onClick={() => handleShow({ value: true })}
          >
            <Image src="/svg/menu.svg" alt="menu" height={35} width={35}/>
          </div>
        </div>
        {isShow && (
          <div className="absolute  left-0 top-0 w-full h-auto  bg-[#4499ed] lg:hidden  z-[999]">
            <div
              className=" h-[35px] w-[35px]  cursor-pointer pt-4 pr-4 ml-auto z-[999]"
              onClick={() => handleShow({ value: false })}
            >
              <Image src="/svg/close.svg" alt="close" height={35} width={40}/>
            </div>
            <ul className="flex flex-col gap-x-10 gap-y-8  px-8 py-8">
              {navItems.map((menu) => (
                <li className="text-white font-['Red_Hat_Display'] text-[14px] font-medium leading-normal ">
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* </div> */}

        {/* mobile */}

        <div className="container mx-auto z-[99]">
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
              className="2-[99]"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Image src="/images/main_watch.png" alt="watch.." height={400} width={800}  className="mx-auto"/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default dynamic(() => Promise.resolve(Herosection), { ssr: false });
