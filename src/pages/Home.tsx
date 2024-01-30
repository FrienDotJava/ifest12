import { FC, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Transition from "../components/Transition";
import Sponsor from "../components/Sponsor";
import MediaPartner from "../components/MediaPartner";
import FAQ from "../components/FAQ";
import CPCarousel from "../components/CPCarousel";

import "./awan.css";
const Home: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Transition>
      <Parallax className="awan_animation">
        <NavBar bg1="#88B7DD" bg2="#2D678C" fg="#275979" />
        <div className="h-screen bg-gradient-to-b from-[#A5CAE4] via-[#88B7DD] to-[#5A99D2]">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
              type: "spring",
              damping: 5,
              stiffness: 30,
              restDelta: 0.001,
            }}
          >
            <ParallaxLayer speed={0.25}>
              <div
                className="awan_animation_layer parallax opacity-75"
                id="awan1"
              >
                {" "}
              </div>
            </ParallaxLayer>
            <motion.div
              initial={{ x: 1300 }}
              animate={{ x: -800 }}
              transition={{
                delay: 1,
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <ParallaxLayer speed={0.15}>
                <div
                  className="awan_animation_layer parallax opacity-50 bg-contain lg:bg-cover"
                  id="awan2"
                >
                  {" "}
                </div>
              </ParallaxLayer>
            </motion.div>
            <motion.div
              initial={{ x: -1700 }}
              animate={{ x: 800 }}
              transition={{
                delay: 1,
                duration: 30,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <ParallaxLayer speed={0.1}>
                <div
                  className="awan_animation_layer parallax opacity-75 bg-contain lg:bg-cover"
                  id="awan3"
                >
                  {" "}
                </div>
              </ParallaxLayer>
            </motion.div>
            <motion.div
              animate={{ y: 20 }}
              transition={{
                delay: 1,
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ParallaxLayer speed={0.2}>
                <div
                  className="awan_animation_layer parallax opacity-85"
                  id="awan4"
                >
                  {" "}
                </div>
              </ParallaxLayer>
            </motion.div>
            <motion.div
              animate={{ y: 10 }}
              transition={{
                delay: 1,
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ParallaxLayer speed={0.3}>
                <div
                  className="awan_animation_layer parallax opacity-70"
                  id="awan5"
                >
                  {" "}
                </div>
              </ParallaxLayer>
            </motion.div>
            <ParallaxLayer speed={0.45}>
              <div
                className="awan_animation_layer parallax flex justify-center items-center bg-center bg-contain scale-150 lg:scale-100 lg:bg-cover"
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
            <ParallaxLayer
              offset={0.25}
              speed={0.35}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button onClick={handleClick}>
                <div className="mt-12 font-brokenConsole text-white bg-[url('/images/pixel-button.webp')] bg-contain bg-no-repeat bg-center w-36 h-12 transition-transform hover:scale-125 flex justify-center items-center cursor-pointer">
                  Start
                </div>
              </button>
            </ParallaxLayer>
          </motion.div>
        </div>
        <div
          ref={ref}
          className="flex flex-col justify-start items-center h-fit pb-20 bg-gradient-to-b from-[#5A99D2] from-40% via-[#A5CAE4] via-85% to-[#cfe6fa]"
        >
          <div className="mt-12 font-brokenConsole font-bold text-2xl lg:text-3xl text-white">
            About IFest #12
          </div>
          <div className="mt-4 lg:mt-12 font-montserrat text-white px-8 lg:px-20 text-justify lg:text-center">
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
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 mx-8 lg:mx-0 flex flex-row justify-center items-center gap-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-[#2D678C] text-center">
              INNOVATIVE INFORMATICS CONTEST
            </div>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 mx-8 lg:mx-0 flex flex-row justify-center items-center gap-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-[#2D678C] text-center">
              WEB DEVELOPMENT COMPETITION
            </div>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 mx-8 lg:mx-0 flex flex-row justify-center items-center gap-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-[#2D678C] text-center">
              MOBILE UI/UX COMPETITION
            </div>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 mx-8 lg:mx-0 flex flex-row justify-center items-center gap-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-[#2D678C] text-center">
              SEMINAR NASIONAL
            </div>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-fit bg-gradient-to-b from-[#cfe6fa] to-[#739AB3]">
          <Sponsor />
          <MediaPartner />
        </div>
        <FAQ />
        <CPCarousel />
        <Footer className="bg-[#003150]" />
      </Parallax>
    </Transition>
  );
};

export default Home;
