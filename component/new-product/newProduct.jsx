import React from "react";
import NewProduct2 from "./newProduct2";

const NewProduct = ({ cardItems, title }) => {
  return (
    <>
      <section className="py-[30px] lg:py-[50px]">
        <div className="container mx-auto">
          <div className="">
            <h3 className="text-black font-['Red_Hat_Display'] text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center uppercase"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000" >
              
              {title}
            </h3>
            <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
           <div className="">
           <div className="md:pt-[70px] pt-[30px] flex  flex-wrap md:flex-row lg:flex-nowrap gap-x-5 2xl:gap-x-5 gap-y-5  xl:gap-y-10 md:px-0 px-4 justify-between ">
              {cardItems.map((items, inx) => (
                <div className="border border-[#D0D0D0]  rounded-[20px] bg-white  px-3 pt-4 pb-3 md:pb-8 2xl:w-[23.5%]" 
                data-aos="fade-up" 
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" 
                data-aos-delay="500">
                  <div className="relative watch_img">
                    <img
                      src={items.url}
                      alt="Loading.."
                      className="md:w-[320px] sm:w-[350px]  h-auto 2xl:max-w-[300px] "
                    />
                    {items?.isCart && (
                      <div className=" absolute bottom-0 left-[10px] right-[10px] ">
                        <button className=" inline-flex justify-center items-center gap-10 text-[14px] lg:text-[16px] px-6 xl:px-[45px] py-[17px] rounded-[50px] bg-[#000]  text-white font-semibold leading-[26px] font-[Montserrat] uppercase mx-auto  whitespace-nowrap w-full hover:bg-[#16202c] transition ">
                          Add to cart
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="px-4 flex flex-col gap-5 pt-5 ">
                    <h6 className="text-black font-['Red_Hat_Display'] text-[15px] 2xl:text-[16px] font-medium leading-[26px] 2xl:whitespace-nowrap">
                      Rubber Strap for Moonswatch -{" "}
                      <span className=" capitalize">{items.color}</span>
                    </h6>
                    <div className="">
                      <img src="/svg/star.svg" alt="review" />
                    </div>
                    <div className="flex md:flex-wrap items-center gap-x-10">
                      <h5 className="text-black font-['Red_Hat_Display'] text-[16px] font-bold leading-[26px] whitespace-nowrap">
                        €49.90 EUR
                      </h5>
                      <p className="text-[#949494] font-['Red_Hat_Display'] text-[12px] font-medium leading-[26px] whitespace-nowrap">
                        €59.90 EUR
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
