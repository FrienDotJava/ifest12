import { FC } from "react";
// import { Dialog } from "@headlessui/react";

import Transition from "../components/Transition";
import NavBar from "../components/NavBar";
import CP from "../components/CP";
import Footer from "../components/Footer";

const Store: FC = () => {
  return (
    <Transition>
      <div>
        <NavBar bg1="#531C9C" bg2="#b9f566" fg="#b9f566" />
        <section className="bg-[url('/images/background/bg-store.webp')] bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center pt-10">
          <div className="flex flex-row justify-center">
            <h1 className="text-5xl lg:text-6xl font-brokenConsole text-white text-center">
              INFORMATICS FESTIVAL #12 STORE
            </h1>
          </div>
          <div className="font-montserrat text-white text-justify lg:text-center px-10 lg:px-32 pb-12 text-sm">
            Temukan dan dapatkan koleksi eksklusif kami Merchandise resmi dari
            IFest#12
          </div>
        </section>
        <section className="bg-gradient-to-b from-[#594584] to-[#FDB5DA]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white">
              Official Merch
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
          <div className="mt-2 font-montserrat text-white text-justify lg:text-center px-6 lg:px-32">
            Dapatkanlah pengalaman tak terlupakan dengan Merch Official IFest
            #12 yang telah kami siapkan! Jadilah bagian dari perayaan kami
            dengan mengenakan merchandise eksklusif yang dirancang khusus untuk
            memperingati momen spesial ini. egera miliki koleksi istimewa ini
            dan jadilah bagian dari sejarah IFest #12! ✨
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start xl:flex-row gap-5 p-8">
            <div className="flex flex-col bg-[url('/images/product-store/bg-product.webp')] items-center px-4 py-4 w-[360px] min-h-[400px] rounded-3xl shadow-xl">
              <div className="flex flex-col justify-center px-10 py-5 bg-[url('/images/product-store/bg.webp')] rounded-3xl">
                <img src="images/product-store/shirt-back.webp" alt="Kaos" />
              </div>
              <div className="flex flex-col mt-5 justify-center items-center">
                <div className="title font-brokenConsole text-3xl text-[#003150] text-center">
                  T-Shirt IFest#12
                </div>
                <div className="detail flex flex-col gap-2">
                  <div className="flex justify-center items-center">
                    <div className="mt-3 font-montserrat rounded-full bg-[#8637C6] text-white px-8 py-1 text-2xl font-bold">
                      Rp60.000,-
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                    <div className="items-center gap-1 rounded-full bg-blue-gray-300 p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-1 font-montserrat">
                      24s Cotton Combed
                    </div>
                  </div>
                  <div className="flex gap justify-between">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                      <span className="text-black font-bold text-sm">S</span>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                      <span className="text-black font-bold text-sm">M</span>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                      <span className="text-black font-bold text-sm">L</span>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                      <span className="text-black font-bold text-sm">XL</span>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                      <span className="text-black font-bold text-sm">3L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[url('/images/product-store/bg-product.webp')] items-center px-4 py-4 w-[360px] min-h-[400px] rounded-3xl shadow-xl">
              <div className="flex flex-col justify-center px-10 bg-[url('/images/product-store/bg.webp')] min-h-[300px] rounded-3xl">
                <img src="images/product-store/keychain.webp" alt="Gantungan" />
              </div>
              <div className="flex flex-col mt-5 justify-center items-center">
                <div className="title font-brokenConsole text-3xl text-[#003150] text-center">
                  Keychain IFest#12
                </div>
                <div className="detail flex flex-col gap-2">
                  <div className="flex justify-center items-center">
                    <div className="mt-3 font-montserrat rounded-full bg-[#8637C6] text-white px-8 py-1 text-2xl font-bold">
                      Rp3.000,-
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[url('/images/product-store/bg-product.webp')] items-center px-4 py-4 w-[360px] min-h-[400px] rounded-3xl shadow-xl">
              <div className="flex flex-col justify-center px-10 py-5 bg-[url('/images/product-store/bg.webp')] min-h-[300px] rounded-3xl">
                <img src="images/product-store/notebook.webp" alt="Notebook" />
              </div>
              <div className="flex flex-col mt-5 justify-center items-center">
                <div className="title font-brokenConsole text-3xl text-[#003150] text-center">
                  Notebook IFest#12
                </div>
                <div className="detail flex flex-col gap-2">
                  <div className="flex justify-center items-center">
                    <div className="mt-3 font-montserrat rounded-full bg-[#8637C6] text-white px-8 py-1 text-2xl font-bold">
                      Rp6.000,-
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap gap-2 px-5 py-2 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                    <div className="items-center gap-1 rounded-full bg-blue-gray-300 p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-1 font-montserrat">
                      Size A6
                    </div>
                    <div className="items-center gap-1 rounded-full bg-blue-gray-300 p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-1 font-montserrat">
                      50 Sheets
                    </div>
                    <div className="items-center gap-1 rounded-full bg-blue-gray-300 p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-1 font-montserrat">
                      Art Paper Cover
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[url('/images/product-store/bg-product.webp')] items-center px-4 py-4 w-[360px] min-h-[400px] rounded-3xl shadow-xl">
              <div className="flex flex-col justify-center px-10 py-5 bg-[url('/images/product-store/bg.webp')] min-h-[330px] rounded-3xl">
                <img
                  src="images/product-store/totebag-front(white).webp"
                  alt="Totebag"
                />
              </div>
              <div className="flex flex-col mt-5 justify-center items-center">
                <div className="title font-brokenConsole text-3xl text-[#003150] text-center">
                  Totebag IFest#12
                </div>
                <div className="detail flex flex-col gap-2">
                  <div className="flex justify-center items-center">
                    <div className="mt-3 font-montserrat rounded-full bg-[#8637C6] text-white px-8 py-1 text-2xl font-bold">
                      Rp15.000,-
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap gap-2 px-5 py-2 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
                    <div className="items-center gap-1 rounded-full bg-blue-gray-300 p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-1 font-montserrat">
                      Blacu Premium
                    </div>
                    <div className="items-center gap-1 rounded-full bg-blue-gray-300 p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-1 font-montserrat">
                      25 x 30 cm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-[#FDB5DA] to-[#8683CA] relative overflow-hidden">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <h2 className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white text-center">
              TERTARIK? AYO SEGERA CHECKOUT!
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-montserrat text-white text-center w-9/12 lg:w-3/5">
              Barang terbatas! Beli Sekarang!
            </p>
          </div>
          <div className="mb-24 flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeqUQuFuW9HalOm7GgXvnkXGdY4jcSv9_tv2eKmID5P0jh6JA/viewform"
              rel="noreferrer"
              target="_blank"
              className="flex justify-center gap-4 items-center font-bold rounded-full bg-white p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#FFFFFF]"
            >
              <div className="text-[#003150] font-bold">Pesan melalui form</div>
              <svg
                width="7"
                height="15"
                viewBox="0 0 7 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L7 7.5L1 13.5"
                  stroke="#003150"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </section>
        <section className="bg-[#8683CA] relative overflow-hidden">
          <img
            className="absolute w-60 opacity-50 top-52 -left-20 lg:top-24 lg:left-4"
            src="images/awan3.webp"
          />

          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white">
              CONTACT US
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-montserrat text-white text-center w-9/12 lg:w-3/5">
              Jika Anda memiliki pertanyaan lebih lanjut atau membutuhkan
              bantuan terkait Sponsorship IFEST #12, jangan ragu untuk
              menghubungi kami!
            </p>
          </div>
          <img
            className="absolute w-60 opacity-50 top-52 -right-20 lg:top-48 lg:right-0"
            src="images/awan2.webp"
          />

          <CP
            event="IFEST STORE"
            bg="#60458A"
            person1="Amel"
            person2="Zelika"
            no1="81210957534"
            no2="81914466777"
          />
        </section>
        
        <Footer className="bg-[#8683CA]" />
      </div>
    </Transition>
  );
};

export default Store;
