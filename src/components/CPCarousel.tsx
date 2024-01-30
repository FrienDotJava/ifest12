import { FC } from "react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import CP from "./CP";

const CPCarousel: FC = () => {
  const CPdata = [
    {
      "event": "I2C",
      "bg":"#60458A",
      "person1":"Alvin",
      "person2":"Jeany",
      "no1":"87794005230",
      "no2":"82151779891"
    },
    {
      "event": "WDC",
      "bg":"#1ea64b",
      "person1":"Lisya",
      "person2":"Yonatan",
      "no1":"89503210551",
      "no2":"87753428099"
    },
    {
      "event": "MUC",
      "bg":"#FF9B5C",
      "person1":"Ferrin",
      "person2":"Cindy",
      "no1":"81393776678",
      "no2":"82228198418"
    },
  ];
  return (
    <div className="flex flex-col justify-start items-center h-fit pb-12 bg-[#3483A2]">
      <div className="mt-12 flex mx-8 lg:mx-0 flex-row justify-center items-center gap-4">
        <img src="images/star.webp" alt="star-img" className="w-12"/>
        <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white text-center">CONTACT PERSON</div>
        <img src="images/star.webp" alt="star-img" className="w-12"/>
      </div>
      <div className="flex !w-9/12 h-fit">
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 3
            },
          }}
          className="mySwiper classes.swiper-button-prev classes.swiper-button-next"
          grid={{
            rows: 1,
            fill: "row",
          }}
          modules={[Grid, Pagination, Navigation]}
          navigation
          pagination={{
            clickable: true,
          }}
          spaceBetween={8}
        >
          {CPdata.map((data) => {
            return(
              <SwiperSlide className="h-[25rem] px-24 lg:px-10">
                <CP event={data.event} bg={data.bg} person1={data.person1} person2={data.person2} no1={data.no1} no2={data.no2}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CPCarousel;
