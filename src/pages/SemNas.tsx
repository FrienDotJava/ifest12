import { FC, useState } from "react";
import { Dialog } from "@headlessui/react";

import Transition from "../components/Transition";
import NavBar from "../components/NavBar";
import CP from "../components/CP";
import Footer from "../components/Footer";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const timelineItems = [
  {
    title: "Pendaftaran",
    date: "1 April - 1 Mei 2024",
  },
  {
    title: "Pelaksanaan",
    date: "Sabtu, 18 Mei 2024",
  },
  {
    title: "Waktu Pelaksanaan",
    date: "09.00 - 13.2 WIB",
  },
  {
    title: "Tempat",
    date: "Ruang Seminar lantai 2 Gd. Bonaventura \n Universitas Atma Jaya Yogyakarta",
  },
];

const SemNas: FC = () => {
  const [openPoster, setOpenPoster] = useState<boolean>(false);
  const [openRuleBook, setOpenRulebook] = useState<boolean>(false);
  return (
    <Transition>
      <div className="secbody">
        <NavBar bg1="#531C9C" bg2="#F4347F" fg="#F4347F" />
        <section className="bg-[url('/images/background/bg-semnas.webp')] bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center pt-10">
          <div className="flex flex-row justify-center">
            <h1 className="text-5xl lg:text-6xl font-brokenConsole text-white text-center">
              SEMINAR NASIONAL
            </h1>
          </div>

          <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            <div className="items-center gap-1 text-base font-bold rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              Mahasiswa / Umum
            </div>
            <div className="items-center gap-1 text-base font-bold rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              Gratis / 10k Luar Mahasiswa ATMA
            </div>
            <div className="items-center gap-1 text-base font-bold rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              Seminar
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#2E85CB] to-[#7EADE5]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white">
              About SEMNAS
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>

          <div className="font-montserrat text-white text-justify lg:text-center px-10 lg:px-32 pb-12">
            IFEST#12 mengadakan Seminar Nasional untuk mahasiswa dan masyarakat
            yang ingin lebih mengenal tentang Technology Beyond Borders:
            Building Bridge of Innovation Across Sectors. Penjelasan materi dari
            pemateri secara rinci mengenai materi yang berhubungan. Terdapat
            sesi tanya jawab dimana peserta dapat bertanya secara langsung
            kepada pemateri seputar materi yang disampaikan. Dengan demikian,
            diharapkan terjadinya interaksi dua arah antara pemateri dan
            peserta. Harapan dari pengaturan tersebut adalah dapat meningkatkan
            pemahaman peserta mengenai materi yang disampaikan oleh narasumber.
          </div>

          {/* <div className="slider-wrapper">
            <div className="slider">
              <img src="images/forest - Salin.jpg" id="slide1" />
              <img src="images/city.jpg" id="slide2" />
              <img src="images/village.jpg" id="slide3" />
            </div>

            <div className="slider-nav">
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div>
          </div> */}

          <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            <button
              onClick={() => setOpenPoster(true)}
              className="items-center font-bold gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
            >
              Poster
            </button>
            <Dialog
              className="relative z-50"
              onClose={() => setOpenPoster(false)}
              open={openPoster}
            >
              <div aria-hidden="true" className="fixed inset-0 bg-black/50" />
              <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className="flex h-full w-11/12 flex-col items-center justify-center gap-2 overflow-auto p-8">
                  <img
                    alt="poster"
                    className="h-full w-full object-contain object-center"
                    onClick={() => setOpenPoster(false)}
                    src="images/poster/poster-semnas.webp"
                  />
                </Dialog.Panel>
              </div>
            </Dialog>
            <a
              href="https://bit.ly/Pendaftaran-Semnas2024"
              rel="noreferrer"
              target="_blank"
              className="flex justify-center gap-4 items-center font-bold rounded-full bg-[#F4347F] p-2 lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
            >
              <div className="text-white font-bold">Daftar</div>
              <img className="vector" src="images/Vector 9.svg" />
            </a>
            <Dialog
              className="relative z-50"
              onClose={() => setOpenRulebook(false)}
              open={openRuleBook}
            >
              <div aria-hidden="true" className="fixed inset-0 bg-black/50" />
              <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className="flex h-full w-11/12 flex-col items-center justify-center gap-0 overflow-auto p-8">
                  <iframe
                    className="h-screen w-full py-10"
                    onClick={() => setOpenRulebook(false)}
                    src="documents/rulebook-i2c.pdf"
                  ></iframe>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>
        </section>
        <section className="bg-[#7EADE5] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-white">
              Narasumber Seminar Nasional IFEST #12
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-2/3 lg:items-end py-12 gap-12">
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/pembicara-1.webp"
                  alt="silver-img"
                  className="w-32 lg:w-72"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  Pembicara 1
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/pembicara-2.webp"
                  alt="silver-img"
                  className="w-32 lg:w-72"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  Pembicara 2
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/pembicara-3.webp"
                  alt="silver-img"
                  className="w-32 lg:w-72"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  Pembicara 3
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-gradient-to-b from-[#9DDEF3] to-[#2EADD3]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white text-center">
              Narasumber Seminar Nasional IFEST #12
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-20 p">
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/benefit-1.webp"
                  alt="silver-img"
                  className="w-32 lg:w-36"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  Ilmu yang <br /> bermanfaat
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-gradient-to-b from-[#7EADE5] to-[#315DA8] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-16 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white">
              INFORMASI SEMINAR NASIONAL
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>

          <div className="p-12 mx-4 lg:mx-0 rounded-xl bg-[#E5D2F2]">
            <Timeline className="flex items-start">
              {timelineItems.map((item, index) => {
                return (
                  <TimelineItem className="h-28 items-start">
                    {index == timelineItems.length - 1 ? (
                      ""
                    ) : (
                      <TimelineConnector />
                    )}
                    <TimelineHeader className="h-fit items-start">
                      <TimelineIcon className="bg-[#F4347F]" />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none font-brokenConsole text-[#F4347F] text-base lg:text-lg"
                        placeholder={undefined}
                      >
                        {item.title}
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-[#704BDA] font-montserrat font-bold"
                        placeholder={undefined}
                      >
                        {item.date}
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#315DA8] to-[#32348D] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-5xl text-white">
              BENEFIT
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-2/3 lg:items-end py-12 gap-12">
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/benefit-1.webp"
                  alt="silver-img"
                  className="w-32 lg:w-36"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  Ilmu yang <br /> bermanfaat
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/benefit-2.webp"
                  alt="silver-img"
                  className="w-32 lg:w-36"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  Relasi
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/benefit-4.webp"
                  alt="silver-img"
                  className="w-32 lg:w-36"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  E-Sertifikat
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/benefit-3.webp"
                  alt="silver-img"
                  className="w-32 lg:w-36"
                />
                <div className="font-brokenConsole text-2xl py-9 text-center">
                  Tanya jawab <br /> dengan ahli
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#3C3EA7] py-12">
          <div className="flex flex-col justify-center items-center px-4">
            <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white text-center">
              Tertarik? Ayo Segera Daftar!
            </div>
            <p className="font-montserrat text-center text-white py-4">
              Apakah kamu siap menghadapi tantangan di dunia teknologi
              informasi? Ayo, jangan lewatkan kesempatan <br /> untuk lebih
              mengenal tentang Technology Beyond Borders: Building Bridge of
              Innovation Across Sectors di IFEST #12! 🌐
            </p>
            <a
              href="https://bit.ly/Pendaftaran-Semnas2024"
              rel="noreferrer"
              target="_blank"
            >
              <button className="flex items-center gap-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#F4347F] bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                <div className="text-white text-xl font-bold">Daftar</div>
                <img className="vector" src="images/Vector 9.svg" />
              </button>
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#32348D] to-[#242872] relative overflow-hidden">
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
              bantuan terkait Seminar Nasional IFEST #12, jangan ragu untuk
              menghubungi kami!
            </p>
          </div>

          <img
            className="absolute w-60 opacity-50 top-52 -right-20 lg:top-48 lg:right-0"
            src="images/awan2.webp"
          />

          <CP
            event="SEMNAS"
            bg="#60458A"
            person1="Radit"
            person2="Hot"
            no1="87731398107"
            no2="85727119622"
          />
        </section>

        <Footer className="bg-[#290265]" />
      </div>
    </Transition>
  );
};

export default SemNas;
