"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { newProductItems } from "@/app/page";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/contextCreate/contextCreate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = ({ params }) => {
  const [data, setData] = useState(null);
  const { addToCart, cart } = useCart();
  const { addToWishlist, wishlist } = useCart();
  const router = useRouter();
  const productid = params?.slug || "";

  useEffect(() => {
    const filteredItems = newProductItems?.filter(
      (item) => item.id == productid
    );
    setData(filteredItems[0]);
  }, [params?.slug]);

  console.log(data);
  return (
    <>
      <div className="bg-#f0fbff] pt-[30px]" id="contact">
        <div className="lg:pt-[130px]  sm:pt-[20px] bg-[white] pb-[70px] ">
          <div className="container mx-auto pt-[30px]">
            <ToastContainer autoClose={1000} />
            <div className="flex lg:flex-row flex-col p-[20px] md:p-[40px] items-center bg-[#f3f3f3] gap-10">
              <div className="max-w-[60%] w-full relative">
                <button
                  onClick={() => {
                    addToWishlist(data);
                    toast.success("Product added to Wishlist");
                  }}
                >
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="absolute w-10 2xl:w-10 left-3 top-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    ></path>
                  </svg>
                </button>
                <Image
                  src={data?.url}
                  alt="watch"
                  height={600}
                  width={600}
                  className="mx-auto"
                />
              </div>
              <div className="lg:max-w-[60%] ">
                <h4 className="text-[24px] md:text-[30px] md:px-1">
                  Rubber Strap for Moonswatch{" "}
                </h4>
                <h4 className=" text-[24px] md:px-1 capitalize">
                  {data?.color}
                </h4>

                <div className="py-4">
                  <h5 className=" font-['Red_Hat_Display'] text-[16px] font-bold leading-[26px] whitespace-nowrap">
                    Price: €{data?.price} EUR
                  </h5>
                  <p className="text-[#949494] font-['Red_Hat_Display'] text-[13px] font-medium leading-[26px] whitespace-nowrap">
                    Discounted price: €{data?.discountedPrice} EUR
                  </p>
                </div>

                <h4 className=" text-[18px] md:px-1 capitalize font-bold">
                  Details
                </h4>
                <div>
                  <h5 className="font-['Red_Hat_Display'] text-[14px] leading-[26px] md:px-1 whitespace-nowrap">
                    <span className="font-semibold text-[16px] ">Size :</span>{" "}
                    {data?.size}
                  </h5>
                  <h5 className="font-['Red_Hat_Display'] text-[14px] leading-[26px] md:px-1 whitespace-nowrap">
                    <span className="font-semibold text-[16px] ">
                      Fits wrists in sizes :
                    </span>{" "}
                    {data?.fitsWristSizes}
                  </h5>
                  <h5 className="font-['Red_Hat_Display'] text-[14px] leading-[26px] md:px-1 whitespace-nowrap">
                    <span className="font-semibold text-[16px] ">
                      Material :
                    </span>{" "}
                    {data?.material}
                  </h5>
                  <h5 className="font-['Red_Hat_Display'] text-[14px] leading-[26px] md:px-1 whitespace-nowrap">
                    <span className="font-semibold text-[16px] ">
                      Lug Width :
                    </span>{" "}
                    {data?.lugWidth}
                  </h5>
                </div>

                <h4 className=" text-[18px] font-bold md:px-1 capitalize pt-2">
                  Summary
                </h4>
                <p className=" text-[14px] font-[400] md:px-1 ">
                  These {data?.color} curved-end rubber watch straps are
                  designed to fit the Vincent collection. This 22mm{" "}
                  {data?.color} curved rubber strap is frequently seen on the
                  Atlantic Ocean and Antarctic Ocean models, making it one of
                  our bestsellers. It is waterproof and ideal for outdoor use,
                  which is why rubber straps are highly popular among divers and
                  adventurers. It's a perfect summer strap. It also comes with a
                  304L stainless steel buckle. Discover the sought-after
                  Blancpain X Swatch Bioceramic Scuba Fifty Fantoms collection,
                  featuring the Antarctic Ocean, Pacific Ocean, Atlantic Ocean,
                  Indian Ocean, and Arctic Ocean models. These 22mm rubber
                  straps embody durability and style. Crafted with precision,
                  explore the colorful design of each variant. From the depths
                  of the Antarctic to the vastness of the Pacific, enjoy
                  unparalleled quality and performance. Explore the perfect mix
                  of playfulness and history, ensuring a timeless companion.
                </p>
                <div>
                  <button
                    onClick={() => {
                      addToCart(data);
                      toast.success("product Added");
                    }}
                    className="w-full bg-[black] hover:bg-transparent hover:text-black hover:border border hover:border-black text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-sm sm:text-base lg:text-lg 2xl:text-xl sm:my-5 2xl:my-8 mx-auto"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ContactPage), { ssr: false });
