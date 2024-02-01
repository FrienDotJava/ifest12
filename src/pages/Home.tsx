import { FC, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Transition from "../components/Transition";
// import Sponsor from "../components/Sponsor";
// import MediaPartner from "../components/MediaPartner";
// import FAQ from "../components/FAQ";
// import CPCarousel from "../components/CPCarousel";

import "./awan.css";
const Home: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Transition>
      <Parallax pages={6} className="awan_animation">
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
          <div className="mt-12 mx-8 lg:mx-0 flex flex-row justify-center items-center gap-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white text-center">
              IFEST #12
            </div>
            <img src="images/star.webp" alt="star-img" className="w-12" />
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
        <div className="flex flex-row justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 lg:mx-0 flex flex-row justify-center items-center gap-10 px-24">
            <img
              className="w-5/12"
              src="images/emblem-12c.png"
              alt="emblem-i2c"
            />
            <div>
              <h1 className="font-brokenConsole text-5xl font-bold text-[#2D678C]">
                I2C
              </h1>
              <h2 className="font-montserrat text-3xl font-bold text-[#2D678C]">
                Informatics Innovation Contest
              </h2>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  SMA / Sederajat
                </div>
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  MAX. 3 orang
                </div>
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  Rp100.000
                </div>
              </div>
              <p className="font-montserrat text-[#2D678C] py-4 text-justify">
                Dengan tema "A Bridge to Enhance Our Cultural Knowledge" dan
                subtema “Educating”, I2C tahun ini membawa perpaduan unik antara
                perkembangan teknologi dan fokus pada keberagaman budaya.
                Sebagai jembatan, acara ini bertujuan untuk menjembatani
                kesenjangan antara perkembangan teknologi dan kebutuhan untuk
                memahami dan menghargai warisan budaya yang beragam. Melalui
                pemahaman yang lebih mendalam terhadap budaya, masyarakat dapat
                lebih bijak dan bertanggung jawab dalam merancang,
                mengembangkan, dan menggunakan teknologi untuk kebaikan bersama.
              </p>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-center gap-4 items-center font-bold rounded-full bg-[#F4347F] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
                >
                  <div className="text-white font-bold">Daftar</div>
                  <img className="vector" src="images/Vector 9.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 lg:mx-0 flex flex-row justify-center items-center gap-10 px-24">
            <div>
              <h1 className="font-brokenConsole text-5xl font-bold text-[#2D678C]">
                WDC
              </h1>
              <h2 className="font-montserrat text-3xl font-bold text-[#2D678C]">
                Web Development Competition
              </h2>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  Mahasiswa D3/D4/S1
                </div>
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  MAX. 3 peserta/tim
                </div>
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  Rp50.000
                </div>
              </div>
              <p className="font-montserrat text-[#2D678C] py-4 text-justify">
                Web Development bertujuan untuk membuat atau menyampaikan
                informasi secara cepat dan dibuat sebagai sarana untuk
                menuangkan ide dalam menyajikan informasi yang terpercaya serta
                menarik untuk dibaca. Tema yang diangkat pada Web Development
                Competition 2024 ini yaitu "Exploring Indonesia With The Power
                of Technology ”.
              </p>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-center gap-4 items-center font-bold rounded-full bg-[#F4347F] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
                >
                  <div className="text-white font-bold">Daftar</div>
                  <img className="vector" src="images/Vector 9.svg" />
                </a>
              </div>
            </div>
            <img
              className="w-5/12"
              src="images/emblem-wdc.png"
              alt="emblem-i2c"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 lg:mx-0 flex flex-row justify-center items-center gap-10 px-24">
            <img
              className="w-5/12"
              src="images/emblem-muc.png"
              alt="emblem-i2c"
            />
            <div>
              <h1 className="font-brokenConsole text-5xl font-bold text-[#2D678C]">
                MUC
              </h1>
              <h2 className="font-montserrat text-3xl font-bold text-[#2D678C]">
                Mobile UI/UX Competition
              </h2>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  Mahasiswa D3/D4/S1
                </div>
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  MAX. 3 peserta/tim
                </div>
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  Gratis
                </div>
              </div>
              <p className="font-montserrat text-[#2D678C] py-4 text-justify">
                Tema Mobile UI/UX Competition 2024 ini adalah Transformative
                UI/UX Design for Film Services Platform. Tema ini berfokus
                kepada desain platform perfilman yang mampu menjadikan
                pengalaman menonton menjadi lebih berkesan. Desain aplikasi
                harus transformatif, unik, dan berbeda dari yang sudah ada.
                Perlombaan ini mengajak para mahasiswa untuk membuat desain
                platform film berbentuk aplikasi handphone yang menarik.
              </p>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-center gap-4 items-center font-bold rounded-full bg-[#F4347F] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
                >
                  <div className="text-white font-bold">Daftar</div>
                  <img className="vector" src="images/Vector 9.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#cfe6fa]">
          <div className="mt-12 lg:mx-0 flex flex-row justify-center items-center gap-10 px-24">
            <div>
              <h1 className="font-brokenConsole text-5xl font-bold text-[#2D678C]">
                SEMNAS
              </h1>
              <h2 className="font-montserrat text-3xl font-bold text-[#2D678C]">
                Seminar Nasional IFEST#12
              </h2>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  Umum
                </div>
                <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                  Gratis
                </div>
              </div>
              <p className="font-montserrat text-[#2D678C] py-4 text-justify">
                IFEST#12 mengadakan Seminar Nasional untuk mahasiswa dan
                masyarakat yang ingin lebih mengenal tentang Innovation Nexus:
                App Developers Pioneering Tokopedia's Frontier. Penjelasan
                materi dari pemateri secara rinci mengenai materi yang
                berhubungan. Terdapat sesi tanya jawab dimana peserta dapat
                bertanya secara langsung kepada pemateri seputar materi yang
                disampaikan. Dengan demikian, diharapkan terjadinya interaksi
                dua arah antara pemateri dan peserta. Harapan dari pengaturan
                tersebut adalah dapat meningkatkan pemahaman peserta mengenai
                materi yang disampaikan oleh narasumber.
              </p>
              <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-center gap-4 items-center font-bold rounded-full bg-[#F4347F] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
                >
                  <div className="text-white font-bold">Daftar</div>
                  <img className="vector" src="images/Vector 9.svg" />
                </a>
              </div>
            </div>
            <img
              className="w-5/12"
              src="images/emblem-semnas.png"
              alt="emblem-i2c"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-fit bg-gradient-to-b from-[#cfe6fa] to-[#739AB3]">
          {/* <Sponsor />
          <MediaPartner /> */}
        </div>
        {/* <FAQ />
        <CPCarousel /> */}
        <Footer className="bg-[#003150]" />
      </Parallax>
    </Transition>
  );
};

export default Home;
