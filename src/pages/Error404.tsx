import { FC } from "react";
import NavBar from "../components/NavBar";
import Transition from "../components/Transition";

const Error404: FC = () => {
  return (
    <Transition>
      <NavBar bg1="#FF493C" bg2="#531C9C" fg="#531C9C"/>
      <div className="h-screen flex flex-col justify-center items-center bg-[#FF753C]">
        <div className="flex flex-row w-full justify-center items-center">
          <img src="images/traffic-cone.webp" alt="cone-img" className="w-1/6 relative lg:left-16 left-8"/>
          <div className="text-[14vw] font-brokenConsole text-[#531C9C] leading-none" style={{"textShadow" : "0.3rem 0.3rem 0rem #B3E734"}}>404</div>
          <img src="images/traffic-cone.webp" alt="cone-img" className="w-1/6 rotate-[120deg] relative lg:right-10 top-5"/>
        </div>
        <div className="lg:text-6xl text-3xl text-white font-brokenConsole">OOOPS!</div>
        <div className="lg:text-2xl text-xl text-white font-brokenConsole mt-10 text-center">THE PAGE YOU'RE LOOKING FOR WASN'T FOUND.</div>
        <div className="lg:text-2xl text-xl text-white font-brokenConsole"> PLEASE GO TO <a href="/" className="text-[#2E2FFF] hover:text-[#2E2FAF]">HOME PAGE</a>.</div>
      </div>
    </Transition>
  );
};

export default Error404;