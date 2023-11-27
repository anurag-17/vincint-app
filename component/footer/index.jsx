import Link from "next/link";
import React from "react";

const Footer = () => {
  const menusList1 = [
    "Dree Up Your Moonswatch",
    "Dree Up Your Tissot PRX",
    "Who We Are",
    "Contact Us",
  ];
  const menuList2 = [
    "Privacy Policy",
    "Return Policy",
    "Refund  Policy",
    "Cookies",
  ];
  const menuList3 = [
    "Shopping Bag",
    "Wish List",
    "Order History",
    "Order Tracking",
  ];

  return (
    <>
      <section className="bg-[#0F1B29]">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-y-10 lg:gap-x-5 xl:gap-x-10 2xl:gap-x-20 py-[30px] lg:py-[80px] justify-between  ">
            <div className=" flex flex-col gap-5 lg:gap-8 w-full sm:w-[40%] md:w-[22%]">
              <div className="">
                <img src="/svg/logo.svg" alt="Logo" className="w-[150px]" />
              </div>
              <p className="text-[16px] font-normal text-[#C7C7C7] leading-[24px] font-['Red_Hat_Display'] ">
                Our goal was to bring the most iconic watches to life by
                creating unique and daring straps.
              </p>
            </div>

            {/* <div className="flex flex-warp justify-center md:flex-nowrap gap-20"> */}

            <div className="">
              <h6 className="text-[18px] font-semibold text-[#fff] leading-[26px] font-['Red_Hat_Display']">
                Quick links
              </h6>
              <ul className="inline-flex flex-col gap-4 pt-[20px]">
                {menusList1.map((list, inx) => (
                  <li
                    key={inx}
                    className="text-[15px] xl:text-[16px] font-normal text-[#C7C7C7] leading-[24px] font-['Red_Hat_Display']"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h6 className="text-[18px] font-semibold text-[#fff] leading-[26px] font-['Red_Hat_Display']">
                Other Links
              </h6>
              <ul className="inline-flex flex-col gap-4 pt-[20px]">
                {menuList2.map((list, inx) => (
                  <li
                    key={inx}
                    className="text-[15px] xl:text-[16px] font-normal text-[#C7C7C7] leading-[24px] font-['Red_Hat_Display']"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h6 className="text-[18px] font-semibold text-[#fff] leading-[26px] font-['Red_Hat_Display']">
                My Account
              </h6>
              <ul className="inline-flex flex-col gap-4 pt-[20px]">
                {menuList3.map((list, inx) => (
                  <li
                    key={inx}
                    className="text-[15px] xl:text-[16px] font-normal text-[#C7C7C7] leading-[24px] font-['Red_Hat_Display']"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>

            {/* </div> */}

            <div className=" flex flex-col gap-5 lg:gap-8">
              <p className="text-[18px] font-semibold text-[#fff] leading-[26px] font-['Red_Hat_Display']">
                Subscribe to our emails
              </p>
              <div className="border border-[#3A4552] flex justify-between px-4 h-[48px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-none bg-[#0F1B29] focus-visible:outline-none  text-white placeholder:text-[#C7C7C7] text-[16px] font-normal  leading-[15px] font-['Red_Hat_Display'] "
                />
                <img src="/svg/arrow.svg" alt="" className="cursor-pointer" />
              </div>
              <div className="flex gap-x-8 lg:gap-5 2xl:gap-8 items-center">
                <Link href="https://www.twitter.com/">
                  <img src="/svg/social/icon1.svg" alt="" />
                </Link>
                <Link href="https://www.facebook.com/">
                  <img src="/svg/social/icon2.svg" alt="" />
                </Link>
                <Link href="https://www.youtube.com/">
                  <img src="/svg/social/icon3.svg" alt="" />
                </Link>
                <Link href="https://www.instagram.com/">
                  <img src="/svg/social/icon4.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-wrap-reverse sm:flex-nowrap  gap-y-3 md:gap-y-6 justify-center  sm:justify-between items-center py-4 border-t border-t-[#315031]">
            <p className="text-[14px] font-normal text-[#A1A1A1] leading-[21px] font-['Red_Hat_Display'] ">
              © 2023 VINCENT PARIS. All Rights Reserved.
            </p>
            <div className="">
              <img src="/svg/card.svg" alt="cards.." className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
