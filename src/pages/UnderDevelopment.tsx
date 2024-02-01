import { FC } from "react";
import NavBar from "../components/NavBar";
import Transition from "../components/Transition";

const UnderDevelopment: FC = () => {
  return (
    <Transition>
      <NavBar bg1="#2D67AF" bg2="#92C740" fg="#92C740" />
      <div className="h-screen flex flex-col justify-center items-center bg-[#2D678C]">
        <div className="flex flex-row w-full justify-center items-center">
          <div
            className="text-[8vw] font-brokenConsole text-[#92C740] leading-none"
            style={{ textShadow: "0.3rem 0.3rem 0rem #F2F2F2" }}
          >
            Coming Soon...
          </div>
        </div>
        <div className="lg:text-2xl text-xl text-white font-brokenConsole mt-10 text-center">
          THE PAGE YOU'RE LOOKING FOR IS UNDER CONSTRUCTION.
        </div>
        <div className="lg:text-2xl text-xl text-white font-brokenConsole">
          {" "}
          PLEASE GO TO{" "}
          <a href="/" className="text-[#92C740] hover:text-[#00AE4E]">
            HOME PAGE
          </a>
          .
        </div>
      </div>
    </Transition>
  );
};

export default UnderDevelopment;
