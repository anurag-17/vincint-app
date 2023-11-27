import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const NewProduct2 = () => {
  return (
    <>
      <section className="lg:py-[50px] py-[30px] px-4 md:px-0">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 md:flex-row justify-center items-center gap-x-10 gap-y-10 py-4 md-py-0">
            <div className="" data-aos="fade-up" 
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
                data-aos-delay="50">
              <Image src="/images/watch5.webp" alt="watch.."   height={700} width={750} />
            </div>
            <div className="flex flex-col gap-3 xl:gap-6 text-center md:text-left lg:pl-[40px]  px-[30px] md:px-0 xl:w-[585px]"
             data-aos="fade-up" 
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000" 
             data-aos-delay="50">
              <p className="text-[16px] font-bold leading-[26px] text-[#FE7330;] uppercase font-[`Montserrat`]">
                Watch Strap Sale
              </p>
              <h3 className="text-[24px] xl:text-[35px] font-bold leading-[36px] xl:leading-[45px]  uppercase text-black font-[`Montserrat`]">
                Save Big on Your Next Watch Accessory
              </h3>
              <p className="text-[16px] xl:text-[18px] font-normal leading-[24px] xl:leading-[28px]   text-black font-[`Montserrat`]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <div className="mx-auto md:mx-0">
                <Button />
              </div>
            </div>
          </div>

          <div className="md:pt-[70px] pt-[30px] flex flex-wrap lg:flex-nowrap md:gap-5 gap-y-5 lg:gap-10  justify-center items-center">
            <div className="lg:w-[40%] md:w-[70%] w-full"    data-aos="fade-up" 
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000" 
             data-aos-delay="50">
                <Image src="/images/watch8.webp" alt="" className="mx-auto" height={300} width={550}/>
            </div>
            <div className="lg:w-[60%] md:w-[70%] w-full relative flex justify-center items-center"
               data-aos="fade-up" 
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000" 
               data-aos-delay="50">
                <Image src="/images/watch9.webp" alt="" className="mx-auto" height={300} width={855} />
                <Image src="/svg/social/play.svg" alt="loading."  className="absolute  transform "  height={60} width={60} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct2;
