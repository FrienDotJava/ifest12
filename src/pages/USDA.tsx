import { FC, useState } from "react";
import { Dialog } from "@headlessui/react";

import Transition from "../components/Transition";
import NavBar from "../components/Navbar";
import CP from "../components/CP";
import Footer from "../components/Footer";

const Usda: FC = () => {
  return (
    <Transition>
      <div>
        <NavBar bg1="#531C9C" bg2="#F4347F" fg="#F4347F" />
        <section className="bg-[url('/images/background/bg-i2c.webp')] bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center pt-10">
          <div className="flex flex-row justify-center">
            <h1 className="text-5xl lg:text-6xl font-brokenConsole text-white text-center">
              IFEST STORE
            </h1>
          </div>

          <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              Rp100.000
            </div>
            <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              SMA / Sederajat
            </div>
            <div className="items-center gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              MAX. 3 orang
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default Usda;
