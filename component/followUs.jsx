import React from "react";

const FollowUs = () => {
  const cardItems = [
    {
      id: 1,
      url: "/images/w1.png",
    },
    {
      id: 3,
      url: "/images/w2.png",
    },
    {
      id: 5,
      url: "/images/w6.png",
      icon: "/svg/social/instagram.svg",
    },
    {
      id: 7,
      url: "/images/w4.png",
    },
    {
      id: 9,
      url: "/images/w5.png",
    },
  ];
  return (
    <>
      <section className="py-[30px] lg:py-[70px]">
        <div className="container mx-auto">
          <div className="">
            <h3
              className="text-black font-['Red_Hat_Display'] text-[24px] md:text-[35px] font-bold leading:[30px] md:leading-[45px] text-center px-4"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              FOLLOW US ON INSTAGRAM
            </h3>
            <div className="bg-[#54A3F2] w-[142px] mx-auto h-[3px] mt-[15px]"></div>
            <div className="md:pt-[70px] pt-[30px] flex  flex-wrap lg:flex-row lg:flex-nowrap  gap-x-3 gap-y-6  md:px-0 px-4 justify-center ">
              {cardItems.map((items) => (
                <div
                  className="relative img-box"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-delay={`${items.id}00`}
                >
                  <img
                    src={items.url}
                    alt="Loading.."
                    className="mx-auto w-[250px]  md:w-[350px] lg:w-auto"
                  />
                  <div className=" absolute top-0 left-0 h-full w-full flex justify-center items-center rounded img-inner"
                    >
                    <img
                      src="/svg/social/instagram.svg"
                      alt="loading."
                      className=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowUs;
