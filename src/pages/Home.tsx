import { FC } from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Transition from "../components/Transition";

import './awan.css';
const Home: FC = () => {
  // const details = {
  //   "bg1":"#88B7DD",
  //   "bg2":"#2D678C",
  //   "fg":"#275979"
  // }
  return (
    <Transition>
      <NavBar bg1="#88B7DD" bg2="#2D678C" fg="#275979"/>
      <div className="h-screen bg-gradient-to-b from-[#A5CAE4] via-[#88B7DD] to-[#5A99D2]">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="font-brokenConsole font-bold text-3xl text-white">IFest #12</div>
          <div className="text-8xl">Eternal</div>
          <div className="text-8xl">Technology</div>
          <div className="mt-12 font-brokenConsole text-white bg-[url('/images/pixel-button.png')] bg-contain bg-no-repeat bg-center w-36 h-12 transition-transform hover:scale-125 flex justify-center items-center cursor-pointer">Start</div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#5A99D2] from-40% via-[#A5CAE4] via-70% to-[#DBE9F5]">
        <div className="mt-12 font-brokenConsole font-bold text-3xl text-white">About IFest #12</div>
        <div className="mt-12 font-louisGeorgeCafe text-white px-20 text-center">
          IFEST#12 UAJY stands for Informatics Festival. It is an annual festival organized by the Informatics Student Association (HIMAFORKA) 
          at Atma Jaya University Yogyakarta. Our team has developed a website that will serve as a platform to share information with prospective 
          participants about IFest#12 and the registration process for IFest competitions. We handled the entire process, from designing to deploying the website. 
          The theme of this year's Ifest is Eternal Technology : A Symphony from Informatics for The Future. 
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">BUSINESS CASE COMPETITION</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">WEB DEVELOPMENT COMPETITION</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">MOBILE UI/UX COMPETITION</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">SEMINAR NASIONAL</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#DBE9F5] to-[#739AB3]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">SPONSORS</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#2D678C]">MEDIA PARTNERS</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#739AB3] to-[#3483A2]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-white">FREQUENTLY ASKED QUESTIONS</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-[#3483A2]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-white">CONTACT PERSON</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <Footer className="bg-[#003150]"/>
    </Transition>
  );
};

export default Home;