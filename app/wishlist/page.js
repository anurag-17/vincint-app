"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../contextCreate/contextCreate";

const Page = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useCart();
  console.log(wishlist, "wish");

  return (
    <>
         <div className="mx-10 xl:mt-40 2xl:mt-48">
         <div className="container mx-auto mt-5 sm:mt-20 2xl:mt-44 lg:mt-28 sm:mt-18  nav">


          {wishlist.length === 0 ? (
            <div className="w-full">
              <div className="flex my-16 h-screen">
                <div className="mx-auto">
                  <p className="text-3xl font-semibold text-center">
                    Wishlist Empty
                  </p>
                  <div className="flex ">
                    <div className="mx-auto">
                      <Link href="/">
                      <button className="bg-[black] hover:bg-transparent hover:text-[black] hover:border border hover:border-[black] text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-sm sm:text-base lg:text-lg 2xl:text-xl sm:my-3 2xl:my-8 mx-auto">
                          Continue Shopping
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ul>
            <h1 className="font-semibold text-2xl lg:text-3xl 2xl:text-5xl">
                Your Wishlist
              </h1>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    clearWishlist();
                    toast.success("Wishlist cleared");
                  }}
                  className="bg-[black] hover:bg-transparent hover:text-[black] hover:border border hover:border-[black] text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-sm sm:text-base lg:text-lg 2xl:text-xl sm:my-3 2xl:my-4 my-2"
                >
                  Clear Wishlist
                </button>
              </div>
              {wishlist.map((item, index) => (
                <div
                  key={index}
                  className="border mb-5 lg:mb-10 2xl:mb-14 p-2 2xl:p-4 w-full flex justify-between gap-5"

                >
                  <div className="w-4/12 sm:w-2/12">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-[50%] mx-auto"
                    />
                  </div>
                  <div className="w-9/12">
                    <h1 className="text-[#1E1E1E] text-xl lg:text-2xl 2xl:text-3xl font-semibold">
                      {item.material}
                    </h1>
                    <h1 className="text-xl lg:text-2xl 2xl:text-3xl mt-2">
                      Price: {item.price}
                    </h1>
                    <h1 className="text-[10px] lg:text-[14px] 2xl:text-[16px] mt-2">
                      Quantity: {item.quantity}
                    </h1>
                    <button
                      onClick={() => {
                        console.log("Buy now clicked");
                      }}
                      className="bg-[black] hover:bg-transparent hover:text-[black] hover:border border hover:border-[black] text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-sm sm:text-base lg:text-lg 2xl:text-xl mt-3 2xl:mt-8"
                    >
                      Buy Now
                    </button>
                  </div>
                  <div>
                    <img
                      src="/images/wrongb.svg"
                      alt="Remove"
                      className="w-6 2xl:w-10 cursor-pointer"
                      onClick={() => {
                        removeFromWishlist(item.id);
                        toast.success("Product removed from wishlist");
                      }}
                    />
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
