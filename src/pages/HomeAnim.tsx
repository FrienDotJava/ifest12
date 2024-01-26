import { FC } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./awan.css";
import "./Home.css";
const Home: FC = () => {
  return (
    <div>
      <Parallax className="awan_animation">
        <Navbar />
        <div className="h-screen bg-gradient-to-b from-[#A5CAE4] via-[#88B7DD] to-[#5A99D2]">
          <ParallaxLayer speed={0.25}>
            <div className="awan_animation_layer parallax" id="awan1">
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.15}>
            <div className="awan_animation_layer parallax" id="awan2">
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1}>
            <div className="awan_animation_layer parallax" id="awan3">
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2}>
            <div className="awan_animation_layer parallax" id="awan4">
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.3}>
            <div className="awan_animation_layer parallax" id="awan5">
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.45}>
            <div
              className="awan_animation_layer parallax flex justify-center items-center"
              id="title"
            >
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="mt-[-420px] justify-center items-center font-brokenConsole font-bold text-3xl text-white">
              IFest #12
            </div>
          </ParallaxLayer>
        </div>
        <ParallaxLayer
          offset={0.25}
          speed={0.35}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="mt-12 font-brokenConsole text-white bg-[url('images/pixel-button.png')] bg-contain bg-no-repeat bg-center w-36 h-12 transition-transform hover:scale-125 flex justify-center items-center cursor-pointer">
            Start
          </div>
        </ParallaxLayer>
        <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#5A99D2] to-[#DBE9F5]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-white">
              About IFest #12
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="mt-8 font-louisGeorgeCafe text-white px-20 text-center">
            IFEST#12 UAJY stands for Informatics Festival. It is an annual
            festival organized by the Informatics Student Association
            (HIMAFORKA) at Atma Jaya University Yogyakarta. Our team has
            developed a website that will serve as a platform to share
            information with prospective participants about IFest#12 and the
            registration process for IFest competitions. We handled the entire
            process, from designing to deploying the website. The theme of this
            year's Ifest is Eternal Technology : A Symphony from Informatics for
            The Future.
          </div>
          <div className="container_swiper">
            <Swiper
              className="swiper_container"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }}
            >
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className="flex justify-center gap-4 uplift-button">
            <button className="uplift-button btn btn-wide btn-primary rounded-full bg-secondary text-white hover:bg-accent">
              View all{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 5 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start h-screen bg-[#DBE9F5]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              INNOVATIVE INFORMATICS CONTEST
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="mt-8 font-louisGeorgeCafe text-[#2D678C] px-20 text-center">
            IFEST#12 UAJY stands for Informatics Festival. It is an annual
            festival organized by the Informatics Student Association
            (HIMAFORKA) at Atma Jaya University Yogyakarta. Our team has
            developed a website that will serve as a platform to share
            information with prospective participants about IFest#12 and the
            registration process for IFest competitions. We handled the entire
            process, from designing to deploying the website. The theme of this
            year's Ifest is Eternal Technology : A Symphony from Informatics for
            The Future.
          </div>
          <div className="container_swiper">
            <Swiper
              className="swiper_container"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }}
            >
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className="flex justify-center gap-4 uplift-button">
            <button className="flex items-center btn btn-outline btn-secondary rounded-full px-7">
              View all{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <button className="flex items-center btn btn-primary rounded-full bg-secondary text-white hover:bg-accent px-7">
              Daftar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              WEB DEVELOPMENT COMPETITION
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="mt-8 font-louisGeorgeCafe text-[#2D678C] px-20 text-center">
            IFEST#12 UAJY stands for Informatics Festival. It is an annual
            festival organized by the Informatics Student Association
            (HIMAFORKA) at Atma Jaya University Yogyakarta. Our team has
            developed a website that will serve as a platform to share
            information with prospective participants about IFest#12 and the
            registration process for IFest competitions. We handled the entire
            process, from designing to deploying the website. The theme of this
            year's Ifest is Eternal Technology : A Symphony from Informatics for
            The Future.
          </div>
          <div className="container_swiper">
            <Swiper
              className="swiper_container"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }}
            >
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className="flex justify-center gap-4 uplift-button">
            <button className="flex items-center btn btn-outline btn-secondary rounded-full px-7">
              View all{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <button className="flex items-center btn btn-primary rounded-full bg-secondary text-white hover:bg-accent px-7">
              Daftar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              MOBILE UI/UX COMPETITION
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="mt-8 font-louisGeorgeCafe text-[#2D678C] px-20 text-center">
            IFEST#12 UAJY stands for Informatics Festival. It is an annual
            festival organized by the Informatics Student Association
            (HIMAFORKA) at Atma Jaya University Yogyakarta. Our team has
            developed a website that will serve as a platform to share
            information with prospective participants about IFest#12 and the
            registration process for IFest competitions. We handled the entire
            process, from designing to deploying the website. The theme of this
            year's Ifest is Eternal Technology : A Symphony from Informatics for
            The Future.
          </div>
          <div className="container_swiper">
            <Swiper
              className="swiper_container"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }}
            >
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className="flex justify-center gap-4 uplift-button">
            <button className="flex items-center btn btn-outline btn-secondary rounded-full px-7">
              View all{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <button className="flex items-center btn btn-primary rounded-full bg-secondary text-white hover:bg-accent px-7">
              Daftar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              SEMINAR NASIONAL
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="mt-8 font-louisGeorgeCafe text-[#2D678C] px-20 text-center">
            IFEST#12 UAJY stands for Informatics Festival. It is an annual
            festival organized by the Informatics Student Association
            (HIMAFORKA) at Atma Jaya University Yogyakarta. Our team has
            developed a website that will serve as a platform to share
            information with prospective participants about IFest#12 and the
            registration process for IFest competitions. We handled the entire
            process, from designing to deploying the website. The theme of this
            year's Ifest is Eternal Technology : A Symphony from Informatics for
            The Future.
          </div>
          <div className="container_swiper">
            <Swiper
              className="swiper_container"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
              }}
            >
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="aspect-square">
                  <img
                    src="images\picture-carousel\photo-1551415923-a2297c7fda79.webp"
                    alt="picture"
                    className="rounded-3xl"
                  />
                </figure>
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className="flex justify-center gap-4 uplift-button">
            <button className="flex items-center btn btn-outline btn-secondary rounded-full px-7">
              View all{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <button className="flex items-center btn btn-primary rounded-full bg-secondary text-white hover:bg-accent px-7">
              Daftar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="m-auto flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#DBE9F5] to-[#739AB3] text-center">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              SPONSORS
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="m-auto font-louisGeorgeCafe text-[#2D678C] px-20 text-center">
            Terima kasih kepada para sponsor yang sudah membantu kegiatan IFEST
            #12
          </div>
          <div className="w-100 card m-auto flex-row justify-center gap-1 px-40 py-10">
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
          </div>
          <div className="mt-2 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              MEDIA PARTNERS
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="m-auto font-louisGeorgeCafe text-[#2D678C] px-20 text-center">
            Terima kasih kepada para media partner yang sudah membantu kegiatan
            IFEST #12
          </div>
          <div className="w-100 card m-auto flex-row justify-center gap-1 px-40 py-10">
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
            <div className="card m-auto aspect-square w-1/5 justify-center p-4">
              <img alt="sponsor" src="images\picture-carousel\image1.png" />
            </div>
          </div>
        </div>
        <div className="m-auto flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#739AB3] to-[#3483A2]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-white">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="q-faq m-4 font-louisGeorgeCafe text-white px-20 text-center">
            Penasaran dengan IFest#12? Lihat Pertanyaan yang Paling Sering
            Ditanyakan dan Dapatkan Semua Info yang Kamu Butuhkan!
          </div>
          <div className="gap-4 px-40 mt-10 flex flex-col justify-start items-center h-screen">
            <div className="collapse collapse-plus bg-white shadow-xl">
              <input type="radio" name="my-accordion-3" checked={true} />
              <div className="collapse-title text-xl font-medium bg-[#1F5E86] text-white">
                Apakah ada hadiah menarik untuk para pemenang kompetisi di IFEST
                #12?
              </div>
              <div className="collapse-content">
                <p className="answer-faq text-[#2D678C]">
                  IFEST #12 memberikan hadiah-hadiah menarik untuk para pemenang
                  kompetisi, termasuk penghargaan uang tunai, kesempatan untuk
                  berkolaborasi dengan perusahaan terkemuka, dan sertifikat
                  pengakuan. Temukan lebih lanjut tentang hadiah yang dapat Anda
                  raih dan apa manfaatnya untuk karier Anda di dunia teknologi
                  informasi.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white shadow-xl">
              <input type="radio" name="my-accordion-3" checked={true} />
              <div className="collapse-title text-xl font-medium bg-[#1F5E86] text-white">
                Apakah ada hadiah menarik untuk para pemenang kompetisi di IFEST
                #12?
              </div>
              <div className="collapse-content">
                <p className="answer-faq text-[#2D678C]">
                  IFEST #12 memberikan hadiah-hadiah menarik untuk para pemenang
                  kompetisi, termasuk penghargaan uang tunai, kesempatan untuk
                  berkolaborasi dengan perusahaan terkemuka, dan sertifikat
                  pengakuan. Temukan lebih lanjut tentang hadiah yang dapat Anda
                  raih dan apa manfaatnya untuk karier Anda di dunia teknologi
                  informasi.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white shadow-xl">
              <input type="radio" name="my-accordion-3" checked={true} />
              <div className="collapse-title text-xl font-medium bg-[#1F5E86] text-white">
                Apakah ada hadiah menarik untuk para pemenang kompetisi di IFEST
                #12?
              </div>
              <div className="collapse-content">
                <p className="answer-faq text-[#2D678C]">
                  IFEST #12 memberikan hadiah-hadiah menarik untuk para pemenang
                  kompetisi, termasuk penghargaan uang tunai, kesempatan untuk
                  berkolaborasi dengan perusahaan terkemuka, dan sertifikat
                  pengakuan. Temukan lebih lanjut tentang hadiah yang dapat Anda
                  raih dan apa manfaatnya untuk karier Anda di dunia teknologi
                  informasi.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white shadow-xl">
              <input type="radio" name="my-accordion-3" checked={true} />
              <div className="collapse-title text-xl font-medium bg-[#1F5E86] text-white">
                Apakah ada hadiah menarik untuk para pemenang kompetisi di IFEST
                #12?
              </div>
              <div className="collapse-content">
                <p className="answer-faq text-[#2D678C]">
                  IFEST #12 memberikan hadiah-hadiah menarik untuk para pemenang
                  kompetisi, termasuk penghargaan uang tunai, kesempatan untuk
                  berkolaborasi dengan perusahaan terkemuka, dan sertifikat
                  pengakuan. Temukan lebih lanjut tentang hadiah yang dapat Anda
                  raih dan apa manfaatnya untuk karier Anda di dunia teknologi
                  informasi.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white shadow-xl">
              <input type="radio" name="my-accordion-3" checked={true} />
              <div className="collapse-title text-xl font-medium bg-[#1F5E86] text-white">
                Apakah ada hadiah menarik untuk para pemenang kompetisi di IFEST
                #12?
              </div>
              <div className="collapse-content">
                <p className="answer-faq text-[#2D678C] m-2">
                  IFEST #12 memberikan hadiah-hadiah menarik untuk para pemenang
                  kompetisi, termasuk penghargaan uang tunai, kesempatan untuk
                  berkolaborasi dengan perusahaan terkemuka, dan sertifikat
                  pengakuan. Temukan lebih lanjut tentang hadiah yang dapat Anda
                  raih dan apa manfaatnya untuk karier Anda di dunia teknologi
                  informasi.
                </p>
              </div>
            </div>
            <div className="q-faq m-4 font-louisGeorgeCafe text-white px-20 text-center">
              Still Have any Question ?
            </div>
            <button className="m-2 uplift-button btn btn-wide btn-primary rounded-full bg-secondary text-white hover:bg-accent">
              Contact us{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#3483A2] to-[#85C3DB]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-white">
              CONTACT PERSON
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="q-faq m-4 font-louisGeorgeCafe text-white px-20 text-center">
            Penasaran dengan IFest#12? Lihat Pertanyaan yang Paling Sering
            Ditanyakan dan Dapatkan Semua Info yang Kamu Butuhkan!
          </div>
          <div>
            <div className=" flex flex-col w-full lg:flex-row">
              <div className="flex flex-col items-center">
                <div className="font-brokenConsole font-bold text-xl text-white grid flex-grow h-32 card *:rounded-box place-items-center">
                  I2C
                </div>
                <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                  Innovative Informatics Contest
                </div>
                <div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      Alvin
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      087794005230
                    </button>
                  </div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      Jeany
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      082151779891
                    </button>
                  </div>
                </div>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="flex flex-col items-center">
                <div className="font-brokenConsole font-bold text-xl text-white grid flex-grow h-32 card *:rounded-box place-items-center">
                  WDC
                </div>
                <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                  Web Development Competition
                </div>
                <div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      Lisya
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      089503210551
                    </button>
                  </div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      Yonatan
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      087753428099
                    </button>
                  </div>
                </div>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="flex flex-col items-center">
                <div className="font-brokenConsole font-bold text-xl text-white grid flex-grow h-32 card *:rounded-box place-items-center">
                  MUC
                </div>
                <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                  Mobile UI/UX Competition
                </div>
                <div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      John Doe
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      087794005230
                    </button>
                  </div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      John Doe
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      082151779891
                    </button>
                  </div>
                </div>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="flex flex-col items-center">
                <div className="font-brokenConsole font-bold text-xl text-white grid flex-grow h-32 card *:rounded-box place-items-center">
                  SEMNAS
                </div>
                <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                  Seminar Nasional
                </div>
                <div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      John Doe
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      087794005230
                    </button>
                  </div>
                  <div>
                    <div className="q-faq font-louisGeorgeCafe text-white px-20 text-center">
                      John Doe
                    </div>
                    <button className="flex items-center btn btn-primary rounded-full bg-[#5ECC85] text-white hover:bg-accent px-7">
                      <FaWhatsapp style={{ fontSize: "30px" }} />
                      082151779891
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-[#003150]" />
      </Parallax>
    </div>
  );
};

export default Home;
