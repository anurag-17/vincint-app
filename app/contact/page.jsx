"use client";
import React from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <div className="bg-#f0fbff] pt-[30px]" id="contact">
        <div className="lg:pt-[130px]  sm:pt-[20px] pb-[70px] bg-[#f0fbff]">
          <div className=" text-black py-[30px] px-20px md:px-1">
            <div className="">
              <h3 className="text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4 uppercase">
                contact us
              </h3>
              <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
              <p className="my-4  text-[14px]  2xl:text-[16px] font-normal leading-[26px] text-center capitalize 2xl:max-w-[50%] lg:max-w-[60%]  max-w-[90%] mx-auto">
                If you have any questions regarding any of our products or a
                past purchase, please let us know, and we will be happy to
                assist you! Send us a message using the form below or by email
                at abc@gmail.com.
              </p>
            </div>
            <div className="flex gap-x-20  gap-y-5 justify-center items-center flex-col md:flex-row pt-4">
              <Link href="tel:+91-1234567890">
                <p className="text-14px 2xl:text-[16px] font-normal leading-[26px] text-center">
                  Call us at : +91-1234567890
                </p>
              </Link>
              <div className=" bg-[#b0c8d0] rounded w-[100px] md:w-[1px] h-[1px] md:h-[40px]"></div>
              <Link href="mailto:support@gmail.com">
                <p className=" text-14px 2xl:text-[16px] font-normal leading-[26px] text-center">
                  Email us : support@gmail.com
                </p>
              </Link>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="bg-[#fff] py-[20px] lg:py-[30px] ">
              <form>
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6 pt-[50px]">
                  <div className="">
                    <Image src="/images/con.webp" alt="contact" height={200} width={500} className="mx-auto" />
                  </div>
                  <div className=" flex flex-col first-letter justify-center md:gap-x-10  gap-y-5 items-center  w-full md:w-[80%] mx-auto px-[20px] md:px-1">
                    <div className="w-full">
                      <input
                        type="text"
                        name="fName"
                        placeholder="Name"
                        className="custom-input capitalize"
                        required
                        maxLength={64}
                      />
                    </div>
                    {/* <div className="w-full">
                    <input type="text" name="lName" placeholder='Last name'  className='custom-input capitalize' required maxLength={64} />
                  </div> */}
                    <div className="w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="custom-input"
                        required
                      />
                    </div>
                    <div className="w-full">
                    <input type='text' name="number" placeholder='Number'   className='custom-input' required  pattern="[6789][0-9]{9}"  
                      title="Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9"/>
                  </div>
                    <div className="col-span-2 w-full">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="custom-input capitalize"
                        required
                        maxLength={500}
                      ></textarea>
                    </div>
                    <div className="col-span-2 md:ml-auto">
                      <button
                        className="btn_primary"
                        type="submit"
                        style={{ width: "100%", maxWidth: "100%" }}
                      >
                        {" "}
                        send message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ContactPage), { ssr: false });
