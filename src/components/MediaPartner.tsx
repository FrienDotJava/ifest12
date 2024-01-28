import { FC } from "react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const MediaPartner: FC = () => {
  const mediapartners = [
    {
      "id": 1,
      "name": "Edaran Event",
      "image": "/images/ifest.png"
    },
    {
      "id": 2,
      "name": "Event Campus Co",
      "image": "/images/ifest.png"
    },
    {
      "id": 3,
      "name": "Event Campus",
      "image": "/images/ifest.png"
    },
    {
      "id": 4,
      "name": "Info Event",
      "image": "/images/ifest.png"
    },
    {
      "id": 5,
      "name": "Info Lomba Indonesia",
      "image": "/images/ifest.png"
    },
    {
      "id": 6,
      "name": "Lomba SMA",
      "image": "/images/ifest.png"
    },
    {
      "id": 7,
      "name": "Media Event",
      "image": "/images/ifest.png"
    },
    {
      "id": 8,
      "name": "Seputar Info ID",
      "image": "/images/ifest.png"
    }
  ];
  return (
      <div className="flex flex-col items-center justify-center gap-2 py-10 w-full">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">MEDIA PARTNERS</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
        <div className="h-64 w-96 lg:hidden">
          <Swiper
            autoplay={{ delay: 2000 }}
            className="mySwiper"
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={10}
          >
            {mediapartners.map((mp) => {
              return (
                <SwiperSlide
                  className="flex !h-64 !w-64 items-center rounded-lg bg-[#3483A2] p-4"
                  key={mp.id}
                >
                  <img alt={mp.name} src={mp.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="hidden lg:flex lg:w-10/12 lg:py-4 2xl:w-7/12">
          <Swiper
            autoplay={{ delay: 2000 }}
            className="mySwiper"
            grabCursor={false}
            grid={{
              rows: 2,
              fill: "row",
            }}
            modules={[Autoplay, Grid]}
            slidesPerView={4}
            spaceBetween={32}
          >
            {mediapartners.map((mp) => {
              return (
                <SwiperSlide className="bg-[#3483A2]" key={mp.id}>
                  <div className="mx-auto flex h-64 w-64 items-center justify-center p-4 lg:h-48 lg:w-48">
                    <img alt={mp.name} className="h-full w-full" src={mp.image} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
  );
};

export default MediaPartner;
