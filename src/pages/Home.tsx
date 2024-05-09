import { FC, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Transition from "../components/Transition";
// import Sponsor from "../components/Sponsor";
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
          className="flex flex-col justify-start lg:flex-row text-white items-center h-fit bg-gradient-to-b from-[#5A99D2] to-[#87ACCD] px-12 gap-1 lg:gap-8"
        >
          <img
            src="/images/kompetisi/i2c-pic.webp"
            alt="i2c"
            className="w-9/12 lg:w-1/2"
          />
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="font-brokenConsole font-bold text-4xl lg:text-5xl text-center">
              I2C
            </div>
            <div className="font-montserrat text-2xl lg:text-3xl font-bold text-center lg:text-left">
              Innovative Informatics Contest 2024
            </div>
            <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm justify-start lg:w-full lg:flex-row lg:gap-6 lg:px-0">
              <div className="items-center gap-1 text-base font-bold rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                SMA / Sederajat
              </div>
              <div className="items-center gap-1 text-base font-bold rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                3 peserta/tim
              </div>
              <div className="items-center gap-1 text-base font-bold rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Rp100.000
              </div>
            </div>
            <div className="font-montserrat text-justify">
              Innovative Informatics Contest adalah sebuah kompetisi yang
              menguji kemampuan peserta dalam menyusun ide untuk memecahkan
              berbagai permasalahan yang ada di dunia dengan memberikan solusi
              melalui pendekatan Teknologi Informasi, yang dapat berbentuk
              aplikasi, web, dan juga IoT.
            </div>
            <a
              href="/i2c"
              rel="noreferrer"
              target="_blank"
              className="mt-8 flex justify-center gap-4 items-center font-bold rounded-full bg-[#8637C6] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#8637C6]"
            >
              <div className="text-white font-bold">Read more</div>
              <img className="vector" src="images/Vector 9.svg" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center h-fit bg-[#87ACCD] py-20 text-white px-12 gap-3 lg:gap-8">
          <img
            src="/images/kompetisi/wdc-pic.webp"
            alt="wdc"
            className="w-9/12 lg:w-1/2 lg:order-last"
          />
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="font-brokenConsole font-bold text-4xl lg:text-5xl text-center">
              WDC
            </div>
            <div className="font-montserrat text-2xl lg:text-3xl font-bold text-center lg:text-left">
              Web Development Competition 2024
            </div>
            <div className="flex flex-col flex-wrap gap-2 py-4 text-center text-sm text-white justify-start lg:w-full lg:flex-row lg:gap-4 lg:px-0">
              <div className="items-center text-base font-bold rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Mahasiswa D3/D4/S1
              </div>
              <div className="items-center text-base font-bold rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Maks. 3 peserta/tim
              </div>
              <div className="items-center text-base font-bold rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Rp50.000
              </div>
            </div>
            <div className="font-montserrat text-justify">
              Web Development Competition (WDC) 2024 merupakan sebuah kompetisi
              penciptaan/perancangan sistem serta desain visual informasi
              digital yang ditampilkan dalam situs web. Web Development
              Competition (WDC) 2024 mengangkat tema "Exploring Indonesia With
              The Power of Technology"
            </div>
            <a
              href="/wdc"
              rel="noreferrer"
              target="_blank"
              className="mt-8 flex justify-center gap-4 items-center font-bold rounded-full bg-[#42B54C] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#42B54C]"
            >
              <div className="text-white font-bold">Read more</div>
              <img className="vector" src="images/Vector 9.svg" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center h-fit bg-gradient-to-b from-[#87ACCD] to-[#cfe6fa] text-[#2D678C] px-12 gap-8">
          <img
            src="/images/kompetisi/muc-pic.webp"
            alt="muc"
            className="w-9/12 lg:w-1/2"
          />
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="font-brokenConsole font-bold text-4xl lg:text-5xl text-center">
              MUC
            </div>
            <div className="font-montserrat text-2xl lg:text-3xl font-bold text-center lg:text-left">
              Mobile UI/UX Competition 2024
            </div>
            <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-start lg:w-full lg:flex-row lg:gap-6 lg:px-0">
              <div className="items-center gap-1 text-base font-bold rounded-full bg-[#FF8D44] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Mahasiswa D3/D4/S1
              </div>
              <div className="items-center gap-1 text-base font-bold rounded-full bg-[#FF8D44] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Maks. 2 peserta/tim
              </div>
              <div className="items-center gap-1 text-base font-bold rounded-full bg-[#FF8D44] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Rp20.000
              </div>
            </div>
            <div className="font-montserrat text-justify">
              Mobile UI/UX Competition (MUC) merupakan sebuah kompetisi /
              perlombaan terkhusus untuk mahasiswa/i dimana akan membuat serta
              menampilkan sebuah desain visual / interface dari sebuah aplikasi
              mobile supaya dapat digunakan lebih efektif serta menarik bagi
              para pengguna aplikasi tersebut.
            </div>
            <a
              href="/muc"
              rel="noreferrer"
              target="_blank"
              className="mt-8 flex justify-center gap-4 items-center font-bold rounded-full bg-[#FF8D44] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#FF8D44]"
            >
              <div className="text-white font-bold">Read more</div>
              <img className="vector" src="images/Vector 9.svg" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center h-fit bg-[#cfe6fa] py-20 text-[#2D678C] px-12 gap-3 lg:gap-8">
          <img
            src="/images/kompetisi/semnas-pic.webp"
            alt="wdc"
            className="w-9/12 lg:w-1/2 lg:order-last"
          />
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="font-brokenConsole font-bold text-4xl lg:text-5xl text-center">
              SEMNAS
            </div>
            <div className="font-montserrat text-2xl lg:text-3xl font-bold text-center lg:text-left">
              Seminar Nasional IFEST #12 2024
            </div>
            <div className="flex flex-col flex-wrap gap-2 py-4 text-center text-sm text-white justify-start lg:w-full lg:flex-row lg:gap-4 lg:px-0">
              <div className="items-center text-base font-bold rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Mahasiswa / Umum
              </div>
              <div className="items-center text-base font-bold rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Seminar
              </div>
              <div className="items-center text-base font-bold rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                Gratis / 10k Luar Mahasiswa ATMA
              </div>
            </div>
            <div className="font-montserrat text-justify">
              Panitia IFEST#12 mengadakan Seminar Nasional untuk mahasiswa dan
              masyarakat tentang Technology Beyond Borders: Building Bridge of
              Innovation Across Sectors. Penjelasan materi dari pemateri secara
              rinci mengenai materi yang berhubungan. Terdapat sesi tanya jawab
              dimana peserta dapat bertanya secara langsung kepada pemateri
              seputar materi yang disampaikan.
            </div>
            <a
              href="/semnas"
              rel="noreferrer"
              target="_blank"
              className="mt-8 flex justify-center gap-4 items-center font-bold rounded-full bg-[#42B54C] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#42B54C]"
            >
              <div className="text-white font-bold">Read more</div>
              <img className="vector" src="images/Vector 9.svg" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-fit bg-gradient-to-b from-[#cfe6fa] to-[#739AB3]">
          {/* <Sponsor /> */}
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
