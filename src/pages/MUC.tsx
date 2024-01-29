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

import { FaCertificate, FaMoneyBill } from "react-icons/fa";

const timelineItems = [
  {
    title: "Pendaftaran",
    date: "19 Februari - 18 Maret 2024",
  },
  {
    title: "Penjurian",
    date: "29 Maret - 25 Maret 2024",
  },
  {
    title: "Pengumuman & Technical Meeting",
    date: "26 Maret 2024",
  },
  {
    title: "Final",
    date: "6 April 2024",
  },
];

const MUC: FC = () => {
  const [openPoster, setOpenPoster] = useState<boolean>(false);
  const [openRuleBook, setOpenRulebook] = useState<boolean>(false);
  return (
    <Transition>
      <div className="secbody">
        <NavBar bg1="#FFBB52" bg2="#42B54C" fg="#42B54C" />
        <section className="bg-[url('/images/background/bg-muc.png')] bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center pt-10">
          <div className="flex flex-row justify-center">
            <h1 className="text-5xl lg:text-6xl font-brokenConsole text-white text-center">
              MOBILE UI/UX COMPETITION
            </h1>
          </div>

          <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            <div className="items-center gap-1 rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              Gratis
            </div>
            <div className="items-center gap-1 rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              Mahasiswa/i D3/D4/S1
            </div>
            <div className="items-center gap-1 rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
              MAX. 3 orang
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#FF8D44] to-[#FFBB52]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-white">
              About MUC
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>

          <div className="font-montserrat text-white text-justify lg:text-center px-10 lg:px-32 pb-12">
            Mobile UI/UX Competition (MUC) 2024 merupakan sebuah kompetisi /
            perlombaan terkhusus untuk mahasiswa/i dimana akan membuat serta
            menampilkan sebuah desain visual / interface dari sebuah aplikasi
            mobile supaya dapat digunakan lebih efektif serta menarik bagi para
            pengguna aplikasi tersebut. Tema yang diangkat Mobile UI/UX
            Competition 2024 ini yaitu “Develop Innovation and Ideas for Mobile
            UI/UX in Student Portal Application”, yang menunjukkan lomba ini
            dapat digunakan sebagai wadah untuk menampung segala inovasi dan ide
            - ide dari para mahasiswa/i yang tentunya sangat beragam.
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
              className="items-center font-bold gap-1 rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#42B54C]"
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
                    src="images/poster/poster-i2c.webp"
                  />
                </Dialog.Panel>
              </div>
            </Dialog>
            <a href="/" rel="noreferrer" target="_blank">
              <button className="flex items-center gap-4 rounded-full bg-[#42B54C] transition-all hover:scale-105 hover:shadow-[0_0px_15px_0px_#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                <div className="text-white font-bold">Daftar</div>
                <img className="vector" src="images/Vector 9.svg" />
              </button>
            </a>
            <button
              onClick={() => setOpenRulebook(true)}
              className="items-center gap-1 font-bold rounded-full bg-[#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#42B54C]"
            >
              Rule Book
            </button>
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

        <section className="bg-gradient-to-b from-[#FFBB52] via-[#FFC771] to-[#FFECCF]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-white text-center">
              Ketentuan MUC
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-20">
            <div
              className="bg-white h-fit mx-4 lg:mx-0 lg:w-2/5 p-8 rounded-2xl font-montserrat"
              style={{ boxShadow: "2px 2px 10px rgb(255, 255, 255)" }}
            >
              <div className="font-brokenConsole font-bold text-xl text-[#FF8D44] text-center py-2">
                KETENTUAN UMUM
              </div>
              <ol className="pl-6 list-outside list-decimal leading-loose">
                <li>
                  Peserta adalah mahasiswa/i aktif jenjang D3/D4/S1 dari
                  perguruan tinggi Seluruh Indonesia.
                </li>
                <li>
                  Peserta lomba adalah satu tim yang terdiri dari minimal 1
                  (satu) orang dan maksimal 2 (dua) orang.
                </li>
                <li>
                  Tim yang terdiri dari 2 (dua) orang peserta harus berasal dari
                  institusi/perguruan tinggi yang sama.
                </li>
                <li>
                  Tidak diperkenankan ada peserta yang terdaftar dalam dua tim
                  atau lebih yang berbeda.
                </li>
                <li>
                  Melakukan pendaftaran online melalui
                  https://ifestuajy.com/dash/, pendaftaran akan dibuka mulai 19
                  Februari 2024 sampai dengan 18 Maret 2024 pukul 23.59 WIB.
                </li>
                <li>
                  Melampirkan scan atau foto Kartu Tanda Mahasiswa, Surat
                  Persetujuan Universitas, dan bukti follow serta story
                  instagram pada formulir pendaftaran.
                </li>
                <li>
                  Seluruh peserta yang mengirimkan hasil karya akan mendapatkan
                  e-certificate.
                </li>
                <li>
                  Peserta yang sudah mendaftar tetapi tidak mengumpulkan hasil
                  karya deskripsi fitur tampilan aplikasi mobile (HandPhone)
                  setelah batas waktu yang ditentukan dianggap mengundurkan diri
                  dari perlombaan.
                </li>
                <li>
                  Panitia berhak untuk mengeliminasi peserta yang tidak mematuhi
                  ketentuan di atas.
                </li>
                <li>
                  Setiap peserta Mobile UI/UX Competition (MUC) 2024 wajib
                  membaca, memahami, dan mengikuti seluruh syarat dan ketentuan
                  yang tercantum dalam rulebook.
                </li>
              </ol>
            </div>

            <div
              className="bg-white h-fit mx-4 lg:mx-0 lg:w-2/5 p-8 rounded-2xl font-montserrat"
              style={{ boxShadow: "2px 2px 10px rgb(255, 255, 255)" }}
            >
              <div className="font-brokenConsole font-bold text-xl text-[#FF8D44] text-center py-2">
                Ketentuan Karya
              </div>
              <ol className="pl-6 list-outside list-decimal leading-loose">
                <li>
                  Peserta yang telah mendaftar wajib mengumpulkan file deskripsi
                  fungsi dan prototype Mobile UI/UX menjadi satu file PDF
                  melalui https://ifestuajy.com/dash/
                </li>
                <li>
                  File PDF yang dikumpulkan berisi deskripsi fungsi disertai
                  screenshot desain, surat pernyataan orisinalitas dan link
                  prototype dari desain keseluruhan Mobile UI/UX.
                </li>
                <li>
                  File PDF berukuran maksimal 25 MB dengan format penamaan
                  IFest#12_MUC_Nama Tim_Nama Universitas.pdf
                </li>
                <li>
                  Hasil karya yang dikumpulkan belum terdaftar dalam perlombaan
                  serupa ataupun memperoleh penghargaan sebagai pemenang.
                </li>
                <li>
                  Peserta tidak diperbolehkan mempublikasikan hasil karya yang
                  dimilikinya melalui media online atau offline atau media
                  lainnya hingga lomba yang diselenggarakan panitia berakhir.
                </li>
                <li>
                  Panitia berhak melakukan diskualifikasi kepada peserta jika
                  melakukan tindakan plagiat, mengambil karya orang lain, atau
                  mendapatkan klaim dari pihak lain.
                </li>
                <li>
                  Bahasa utama yang digunakan dalam pembuatan desain aplikasi
                  mobile adalah Bahasa Indonesia dan diperbolehkan menggunakan
                  istilah dalam bahasa asing.
                </li>
                <li>
                  Desain aplikasi mobile dilarang mengandung unsur SARA,
                  kekerasan, pornografi, dan melanggar UU yang berlaku.
                </li>
                <li>
                  Lima peserta terbaik akan mengikuti babak final pada hari yang
                  ditentukan oleh penyelenggara secara online dengan
                  mempresentasikan hasil karyanya di hadapan dewan juri.
                </li>
                <li>
                  Panitia tidak menerima segala bentuk kecurangan yang berakibat
                  pada pengurangan nilai, diskualifikasi maupun pembatalan juara
                  lomba setelah ditetapkan.
                </li>
                <li>
                  Keputusan dewan juri tidak dapat diganggu gugat serta bersifat
                  mutlak dan mengikat
                </li>
                <li>
                  Ketentuan yang lebih lengkap silahkan lihat Rulebook MUC 2024.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#FFECCF] to-[#FF8D44] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-16 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-[#FF8D44]">
              TIMELINE MUC
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>

          <div className="p-12 mx-4 lg:mx-0 rounded-xl bg-[#FFECCF]">
            <Timeline className="flex items-start">
              {timelineItems.map((item, index) => {
                return (
                  <TimelineItem className="h-28 items-start">
                    {index == timelineItems.length - 1 ? (
                      ""
                    ) : (
                      <TimelineConnector />
                    )}
                    <TimelineHeader className="h-3">
                      <TimelineIcon className="bg-[#FF8D44]" />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none font-brokenConsole text-[#FF8D44] text-lg py-4"
                        placeholder={undefined}
                      >
                        {item.title}
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-[#42B54C] font-montserrat font-bold"
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

        <section className="bg-gradient-to-b from-[#FF8D44] to-[#FF7236] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-5xl text-white">
              PRIZEPOOL
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="text-white font-montserrat text-3xl font-bold">
            Rp5.000.000,00
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-2/3 lg:items-end py-12 gap-12">
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/silver-cup.png"
                  alt="silver-img"
                  className="w-32 lg:w-36"
                />
                <div className="font-brokenConsole text-2xl py-4">Second</div>
              </div>
              <div className="flex flex-col justify-center items-start lg:items-center">
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaMoneyBill /> Rp1.250.000,00
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaCertificate /> Sertifikat Nasional
                </div>
              </div>
            </div>
            <div className="order-first lg:order-none flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/gold-cup.png"
                  alt="silver-img"
                  className="w-32 lg:w-40"
                />
                <div className="font-brokenConsole text-3xl py-4">First</div>
              </div>
              <div className="flex flex-col order-first lg:order-none justify-center items-end lg:items-center">
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaMoneyBill className="order-last lg:order-none" />{" "}
                  Rp2.000.000,00
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaCertificate className="order-last lg:order-none" />{" "}
                  Sertifikat Nasional
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/bronze-cup.png"
                  alt="silver-img"
                  className="w-32 lg:w-36"
                />
                <div className="font-brokenConsole text-3xl py-4">Third</div>
              </div>
              <div className="flex flex-col order-first lg:order-none justify-center items-end lg:items-center">
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaMoneyBill className="order-last lg:order-none" />{" "}
                  Rp750.000,00
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaCertificate className="order-last lg:order-none" />{" "}
                  Sertifikat Nasional
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FF9B5C] py-12">
          <div className="flex flex-col justify-center items-center px-4">
            <div className="font-brokenConsole font-bold text-3xl text-white text-center">
              Tertarik? Ayo Segera Daftar!
            </div>
            <p className="font-montserrat text-center text-white py-4">
              Apakah kamu siap menghadapi tantangan di dunia teknologi
              informasi? Ayo, jangan lewatkan kesempatan <br /> untuk
              menunjukkan kreativitas dan keahlianmu di IFEST #12! 🌐
            </p>
            <a href="/" rel="noreferrer" target="_blank">
              <button className="flex items-center gap-4 rounded-full bg-[#42B54C] transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#42B54C] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                <div className="text-white text-xl font-bold">Daftar</div>
                <img className="vector" src="images/Vector 9.svg" />
              </button>
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#FF7236] to-[#FC4D35] relative overflow-hidden">
          <img
            className="absolute w-60 opacity-50 top-52 -left-20 lg:top-24 lg:left-4"
            src="images/awan3.png"
          />

          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-white">
              CONTACT US
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-montserrat text-white text-center w-9/12 lg:w-3/5">
              Jika Anda memiliki pertanyaan lebih lanjut atau membutuhkan
              bantuan terkait Innovative Informatics Competition IFEST #12,
              jangan ragu untuk menghubungi kami!
            </p>
          </div>

          <img
            className="absolute w-60 opacity-50 top-52 -right-20 lg:top-48 lg:right-0"
            src="images/awan2.png"
          />

          <CP
            event="MUC"
            bg="#FF9B5C"
            person1="Ferrin"
            person2="Cindy"
            no1="81393776678"
            no2="82228198418"
          />
        </section>

        <Footer className="bg-[#FC4D35]" />
      </div>
    </Transition>
  );
};

export default MUC;
