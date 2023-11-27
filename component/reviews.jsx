import React from "react";

const Reviews = () => {

  const cardItems = [
    3,6,9
  ]
  return (
    <>
      <section className="py-[30px] lg:py-[50px]">
        <div className="container mx-auto">
          <div className="">
            <h3 className="text-black font-['Red_Hat_Display'] text-[24px] md:text-[35px] leading:[30px] md:leading-[45px] font-bold leading-[45px] text-center px-4"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000" 
              >
              WHAT OUR CUSTOMER’S SAY
            </h3>
            <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
            <div className="lg:pt-[70px] pt-[30px] flex  flex-wrap md:flex-row lg:flex-nowrap  gap-y-10 md:px-0 px-4 justify-center ">
              {cardItems.map((items) => (
                <div
                  className={`rounded-[20px] flex flex-col gap-5   xl:gap-10 text-center px-[20px] lg:px-[50px] lg:py-[50px] xl:px-[100px] py-[20px] ${
                    items == 6 ? "bg-[#F3F3F3]" : "bg-white "
                  }`}
                  key={items}

                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="2000" 
                  // data-aos-delay="300"
                >
                  
                  <div className="">
                    <img
                      src="/svg/ps_quote.svg"
                      alt="Loading.."
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-[#868686] font-['Red_Hat_Display'] text-[18px] font-normal leading-[28px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text
                  </p>

                  <p className="text-[#868686] font-['Red_Hat_Display'] text-[18px] font-semibold leading-[26 px]">- Tim R.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
