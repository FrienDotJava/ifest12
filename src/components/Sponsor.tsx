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
      "image": "/images/sponsors/ifest12/jagoan-hosting.webp",
      "link": "https://www.jagoanhosting.com/"
    },
    {
      "id": 2,
      "name": "Cakap",
      "image": "/images/sponsors/ifest12/cakap.webp",
      "link": ""
    },
    {
      "id": 3,
      "name": "DIY Kamera",
      "image": "/images/sponsors/ifest12/diy-kamera.webp",
      "link": ""
    },
    {
      "id": 4,
      "name": "Inperial",
      "image": "/images/sponsors/ifest12/inperial.webp",
      "link": ""
    },
    {
      "id": 5,
      "name": "AccAstra",
      "image": "/images/sponsors/ifest12/accAstra.webp",
      "link": ""
    },
    {
      "id": 6,
      "name": "Berijalan",
      "image": "/images/sponsors/ifest12/berijalanAstra.webp",
      "link": ""
    },
    {
      "id": 5,
      "name": "Fourtrezz",
      "image": "/images/sponsors/ifest12/fourtrezz.webp",
      "link": ""
    },
    {
      "id": 6,
      "name": "Intelligo",
      "image": "/images/sponsors/ifest12/intelligo.webp",
      "link": ""
    },
  ];
  return (
    <div className="mt-12 flex flex-row justify-center items-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4 py-10 mx-4">
        <div className="mt-12 flex mx-8 lg:mx-0 flex-row justify-center items-center gap-4">
          <img src="images/star.webp" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-[#2D678C] text-center">SPONSOR IFest #12</div>
          <img src="images/star.webp" alt="star-img" className="w-12"/>
        </div>
        <div className="flex h-fit w-80 py-4 lg:hidden">
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
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img alt={sponsor.name} src={sponsor.image} />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="hidden lg:flex lg:w-3/4 lg:py-4">
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
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img alt={sponsor.name} src={sponsor.image} />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <a href="/sponsor">
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
