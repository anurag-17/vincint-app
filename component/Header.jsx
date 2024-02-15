"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useCart } from "@/app/contextCreate/contextCreate";

const Header = () => {
  const { cart, wishlist } = useCart();
  const router = useRouter();
  const [isShow, setShow] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [dialogMatch, setDialogMatch] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
    });
    setDialogMatch(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isScrolled ? "#18202b" : "#18202b",
  };

  return (
    <>
      <div className="lg:hidden flex justify-between items-center w-full px-4 py-4 z-[0] bg-[#18202b]">
        <div className="w-[100px] ">
          <Image src="/svg/logo.svg" alt="Logo." height={70} width={120} />
        </div>

        <div className="flex gap-7 sm:gap-10 items-center">
          <div className="">
            <div className="flex gap-7 ">
              <div className="relative">
                <Link href="/cart">
                  {cart.length > 0 && (
                    <span className="absolute  text-[10px]  bottom-[15px] left-[17px] sm:bottom-[14px] sm:left-[18px] md:bottom-[16px] md:left-[17px]  border rounded-full py-[1px] px-[6px] md:py-[2px] md:px-[6px] sm:py-[2px] sm:px-[6px] xl:p-1 xl:px-2  bg-white ">
                      {cart.length}
                    </span>
                  )}
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white w-6 md:w-6"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <Link href="/wishlist">
                  {wishlist.length > 0 && (
                    <span className="absolute  text-[10px]  bottom-[15px] left-[20px] sm:bottom-[14px] sm:left-[20px] md:bottom-[16px] md:left-[20px]  border rounded-full py-[1px] px-[6px] md:py-[2px] md:px-[6px] sm:py-[2px] sm:px-[6px] xl:p-1 xl:px-2  bg-white ">
                      {wishlist.length}
                    </span>
                  )}
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="text-white w-6 md:w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div
            className=" h-[35px] w-[35px] cursor-pointer z-[999]"
            onClick={() => setShow(true)}
          >
            <Image src="/svg/menu.svg" alt="menu" height={35} width={35} />
          </div>
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
              <ul className="md:flex flex-row lg:gap-x-5  xl:gap-x-10 hidden z-[999] items-center">
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
                <div className="flex gap-6 2xl:gap-7 relative">
                  <div>
                    <Link href="/cart">
                      {cart.length > 0 && (
                        <span className="absolute 2xl:text-[14px] text-[10px] 2xl:bottom-[20px] 2xl:left-[21px] xl:bottom-[20px] xl:left-[18px] lg:bottom-[14px] lg:left-[17px] md:bottom-[16px] md:left-[8px]  border rounded-full p-[1px] lg:py-[2px] lg:px-[6px] px-1 xl:p-1 xl:px-2 2xl:py-[4px] 2xl:px-[10px] bg-white ">
                          {cart.length}
                        </span>
                      )}
                      <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white lg:w-6 xl:w-7 2xl:w-8"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="relative">
                    <Link href="/wishlist">
                      {wishlist.length > 0 && (
                        <span className="absolute 2xl:text-[14px] text-[10px] 2xl:bottom-[20px] 2xl:left-[25px] xl:bottom-[20px] xl:left-[20px] lg:bottom-[14px] lg:left-[20px] md:bottom-[16px] md:left-[8px]  border rounded-full p-[1px] lg:py-[2px] lg:px-[6px] px-1 xl:p-1 xl:px-2 2xl:py-[4px] 2xl:px-[10px] bg-white ">
                          {wishlist.length}
                        </span>
                      )}
                      <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="text-white lg:w-6 xl:w-7 2xl:w-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </ul>
              <div className="w-[1px] bg-[rgba(255,255,255,0.21);] h-[73px] z-[999]"></div>
              <div className="flex lg:gap-x-5  xl:gap-x-8">
                <button onClick={() => setDialogMatch(true)}>
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
                </button>
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
      <Transition appear show={dialogMatch} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setDialogMatch(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="  sm:w-[500px] 2xl:w-[600px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-2 lg:px-8 2xl:p-4 text-left align-middle shadow-xl transition-all z-50 ">
                  <div className="flex justify-end ">
                    <button
                      onClick={() => setDialogMatch(false)}
                      className="w-8"
                    >
                      <img
                        src="/images/wrongb.svg"
                        className="w-6"
                        alt="close"
                      />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-[20px] xl:text-[30px] font-semibold  text-gray-900 flex justify-center"
                  >
                    Login
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center  mx-auto w-5/6">
                    <form onSubmit={handleSubmit} className="w-full ">
                      <input
                        className="custom_inputs"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Email"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <br />
                      <input
                        className="custom_inputs"
                        type="password"
                        id="password"
                        name="email"
                        placeholder="Password"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <br />
                      <div className="flex justify-center">
                        <button
                          className="xl:text-[16px] 2xl:text-[18px] 2xl:my-5  font-bold border px-6 py-1 rounded-md mt-3 bg-black text-white hover:border hover:border-black hover:text-black hover:bg-transparent"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Header;
