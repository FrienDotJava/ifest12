import { motion } from "framer-motion";
import { FC } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Sponsor: FC = () => {
  const sponsors = [
    {
      "id": 1,
      "name": "Jagoan Hosting",
      "image": "/images/ifest.png"
    },
    {
      "id": 2,
      "name": "Ajaib",
      "image": "/images/ifest.png"
    },
    {
      "id": 3,
      "name": "DevCode",
      "image": "/images/ifest.png"
    },
    {
      "id": 4,
      "name": "Dewaweb",
      "image": "/images/ifest.png"
    }
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-10">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">SPONSOR IFest #12</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
        <div className="flex h-fit w-96 py-4 lg:hidden">
          <Swiper
            autoplay={{ delay: 2000 }}
            className="mySwiper"
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={10}
          >
            {sponsors.map((sponsor) => {
              return (
                <SwiperSlide
                  className="flex !h-64 !w-64 items-center rounded-lg bg-[#3483A2] p-2"
                  key={sponsor.id}
                >
                  <img alt={sponsor.name} src={sponsor.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="hidden lg:flex lg:w-1/2 lg:py-4">
          <Swiper
            autoplay={{ delay: 2000 }}
            centeredSlides
            className="mySwiper"
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            effect="coverflow"
            grabCursor={false}
            modules={[EffectCoverflow, Autoplay]}
            slidesPerView="auto"
          >
            {sponsors.map((sponsor) => {
              return (
                <SwiperSlide
                  className="flex !h-[19rem] !w-[19rem] items-center bg-[#3483A2] p-8"
                  key={sponsor.id}
                >
                  <img alt={sponsor.name} src={sponsor.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <a href="/bisnis/sponsor">
          <motion.button
            animate={{ opacity: 1 }}
            className="rounded-[2.0em] bg-[#531C9C] px-5 py-4 font-brokenConsole text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#886fcb] lg:text-base"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            Become our Sponsor
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
