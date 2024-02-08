"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isShow, setShow] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const clickMenu = (url) => {
    setShow(false);
    router.push(url);
  };

  const navItems = [
    {
      id: 1,
      path: "/",
      // label: "DRESS UP YOUR MOONSWATCH",
      label: "Home",
    },
    {
      id: 2,
      path: "/watch",
      label: "DRESS UP YOUR MOONSWATCH",
    },
    {
      id: 3,
      path: "/about-us",
      label: "WHO ARE WE",
    },
    {
      id: 4,
      path: "/contact",
      label: "CONTACT US",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isScrolled ? "#18202b" : "#18202b",
  };

  return (
    <>
      <div className="lg:hidden flex justify-between items-center w-full px-4 py-4 z-[999] bg-[#18202b]">
        <div className="w-[100px] ">
          <Image src="/svg/logo.svg" alt="Logo." height={70} width={120} />
        </div>
        <div
          className=" h-[35px] w-[35px] cursor-pointer z-[999]"
          onClick={() => setShow(true)}
        >
          <Image src="/svg/menu.svg" alt="menu" height={35} width={35} />
        </div>
      </div>
      {isShow && (
        <div className="absolute  left-0 top-0 w-full h-auto  bg-[#4499ed] lg:hidden  z-[999]">
          <div
            className=" h-[35px] w-[35px]  cursor-pointer pt-4 pr-4 ml-auto z-[999]"
            onClick={() => setShow(false)}
          >
            <Image src="/svg/close.svg" alt="close" height={35} width={40} />
          </div>
          <ul className="flex flex-col gap-x-10 gap-y-8  px-8 py-8">
            {navItems.map((menu, inx) => (
              <li
                key={inx}
                className="text-white font-['Red_Hat_Display'] text-[14px] font-medium leading-normal "
                onClick={() => clickMenu(menu.path)}
              >
                {menu.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="lg:absolute top-0 w-full py-[15px] hidden lg:block z-[9999]"
        style={navbarStyle}
      >
        <div className="container mx-auto">
          <div className="lg:flex justify-between items-center h-[100px]  ">
            <Link href="/">
              <div className="md:w-[120px] xl:w-auto z-[999]">
                <Image
                  src="/svg/logo.svg"
                  alt="Logo."
                  height={70}
                  width={150}
                />
              </div>
            </Link>
            <div className="flex lg:gap-x-10  xl:gap-x-20  items-center">
              <ul className="md:flex flex-row lg:gap-x-5  xl:gap-x-10 hidden z-[999]">
                {navItems.map((menu, inx) => (
                  <Link key={inx} href={menu.path}>
                    <li
                      className={`text-white font-['Red_Hat_Display'] cursor-pointer text-[14px] font-medium leading-normal
                  ${
                    pathname === menu.path
                      ? "border-b border-b-[white]"
                      : " menu-list "
                  }
                  `}
                    >
                      {menu.label}
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="w-[1px] bg-[rgba(255,255,255,0.21);] h-[73px] z-[999]"></div>
              <div className="flex lg:gap-x-5  xl:gap-x-8">
                {/* <div className="">
                <Image
                  src="/svg/search.svg"
                  alt="search"
                  height={20}
                  width={20}
                />
              </div> */}
                <Link href="/">
                  <div className="">
                    <Image
                      src="/svg/person.svg"
                      alt="search"
                      height={24}
                      width={24}
                    />
                  </div>
                </Link>
                {/* <div className="">
                <Image
                  src="/svg/business.svg"
                  alt="search"
                  height={20}
                  width={20}
                />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
