import { FC } from "react";
import Transition from "../components/Transition";
import Footer from "../components/Footer";

const SemNas: FC = () => {
  return (
    <Transition>
      <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-b from-[#5A99D2] from-40% via-[#A5CAE4] via-70% to-[#DBE9F5]">
        <div className="mt-12 font-brokenConsole font-bold text-3xl text-white">About Seminar Nasional</div>
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
          <div className="font-brokenConsole font-bold text-3xl text-[#F4347F]">Narasumber Seminar Nasional IFest #12</div>
          <img src="images/star.png" alt="star-img" className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen bg-[#DBE9F5]">
        <div className="mt-12 flex flex-row justify-center items-center gap-4">
          <img src="images/star.png" alt="star-img" className="w-12"/>
          <div className="font-brokenConsole font-bold text-3xl text-[#F4347F]">Timeline Seminar Nasional IFest #12</div>
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

export default SemNas;