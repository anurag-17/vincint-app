"use Client";

import { useEffect, useState } from "react";
import Button from "./button/Button";
import ParticleComponent from "./particalComponent";

const Herosection = ({ handleShow, isShow }) => {
  
  const [isScrolled, setScrolled] = useState(false);
  
  const navItems = [
    "DRESS UP YOUR MOONSWATCH",
    "DRESS UP YOUR TISSOT PRX",
    "WHO ARE WE",
    "CONTACT US",
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isScrolled ? "#18202b" : "transparent",
    zIndex: 1000,
  };


  return (
    <>
      <main className="h-auto hero-section flex flex-col justify-center items-center md:relative">
        <div className="lg:absolute top-0 w-full py-[15px] hidden lg:block"  style={navbarStyle}>
          <div className="container mx-auto">
            <div className="lg:flex justify-between items-center h-[100px]  ">
              <div className="md:w-[120px] xl:w-auto z-[999]">
                <img src="/svg/logo.svg" alt="Logo." />
              </div>
              <div className="flex lg:gap-x-10  xl:gap-x-20  items-center">
                <ul className="md:flex flex-row lg:gap-x-5  xl:gap-x-10 hidden z-[999]">
                  {navItems.map((menu) => (
                    <li
                      className="text-white font-['Red_Hat_Display'] text-[14px] font-medium leading-normal menu-list cursor-default"
                    >
                      {menu}
                    </li>
                  ))}
                </ul>
                <div className="w-[1px] bg-[rgba(255,255,255,0.21);] h-[73px] z-[999]"></div>
                <div className="flex lg:gap-x-5  xl:gap-x-8">
                  <div className="">
                    <img src="/svg/search.svg" alt="search" />
                  </div>
                  <div className="">
                    <img src="/svg/person.svg" alt="search" />
                  </div>
                  <div className="">
                    <img src="/svg/business.svg" alt="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        {/* <div className="container mx-auto md:absolute md:top-0 "> */}
          <div className="lg:hidden flex justify-between items-center w-full px-4 py-4 z-[999] ">
            <div className="w-[100px] ">
              <img src="/svg/logo.svg" alt="Logo." />
            </div>
            <div
              className=" h-[35px] w-[35px] cursor-pointer z-[999]"
              onClick={() => handleShow({ value: true })}
            >
              <img src="/svg/menu.svg" alt="menu" />
            </div>
          </div>
          {isShow && (
            <div className="absolute  left-0 top-0 w-full h-auto  bg-[#4499ed] lg:hidden  z-[999]">
              <div
                className=" h-[35px] w-[35px]  cursor-pointer pt-4 pr-4 ml-auto z-[999]"
                onClick={() => handleShow({ value: false })}
              >
                <img src="/svg/close.svg" alt="close" />
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

        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 lg:justify-center lg:items-center gap-x-20 gap-y-10 pt-1 lg:pt-[100px] md:mt-0 mt-[70px]">
            <div
              className="flex flex-col gap-5 lg:gap-10 justify-center  z-[9999] sal-example"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
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
              className=""
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src="/images/main_watch.png" alt="" />
            </div>
            {/* <div className="hero-bottom md:hidden block">
              <div className="">
                <div className="">
                  <img src="/images/watch.png" alt="" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <ParticleComponent/>
      </main>
    </>
  );
};

export default Herosection;
