"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  const pathname = usePathname();
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
    <div
      className="lg:absolute top-0 w-full py-[15px] hidden lg:block z-[9999]"
      style={navbarStyle}
    >
      <div className="container mx-auto">
        <div className="lg:flex justify-between items-center h-[100px]  ">
          <Link href="#">
            <div className="md:w-[120px] xl:w-auto z-[999]">
              <Image src="/svg/logo.svg" alt="Logo." height={70} width={150} />
            </div>
          </Link>
          <div className="flex lg:gap-x-10  xl:gap-x-20  items-center">
            <ul className="md:flex flex-row lg:gap-x-5  xl:gap-x-10 hidden z-[999]">
              {navItems.map((menu, inx) => (
                <Link
                 key={inx} 
                href={menu.path}
                >
                  <li
                    className={`text-white font-['Red_Hat_Display'] cursor-pointer text-[14px] font-medium leading-normal
                  ${pathname === menu.path ? "border-b border-b-[white]" : " menu-list "}
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
              <Link href="/login">
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
  );
};

export default Header;
