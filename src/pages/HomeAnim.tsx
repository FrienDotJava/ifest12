import { FC } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./awan.css";
import "./Home.css";
const Home: FC = () => {
  return (
    <div>
      {/* <div className="h-screen bg-gradient-to-b from-[#A5CAE4] via-[#88B7DD] to-[#5A99D2]"> */}
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
          <div className="mt-12 flex  flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-white">
              About IFest #12
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="mt-12 font-louisGeorgeCafe text-white px-20 text-center">
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
        <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              BUSINESS CASE COMPETITION
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
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
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              MOBILE UI/UX COMPETITION
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
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
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#DBE9F5] to-[#739AB3]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              SPONSORS
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">
              MEDIA PARTNERS
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#739AB3] to-[#3483A2]">
          <div className="mt-12 flex flex-row justify-center items-center gap-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <div className="font-brokenConsole font-bold text-3xl text-white">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <img src="images/star.png" alt="star-img" className="w-12" />
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
        </div>
        <Footer className="bg-[#003150]" />
      </Parallax>
    </div>
  );
};

export default Home;
