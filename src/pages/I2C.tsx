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

import { FaCertificate, FaMoneyBill, FaTrophy } from "react-icons/fa";

const timelineItems = [
  {
    title: "Pendaftaran",
    date: "2 Februari - 1 Maret 2024",
  },
  {
    title: "Penjurian",
    date: "2 Maret - 6 Maret 2024",
  },
  {
    title: "Pengumuman & Technical Meeting",
    date: "7 Maret 2024",
  },
  {
    title: "Final & Expo",
    date: "14 Maret 2024",
  },
];

const I2C: FC = () => {
  const [openPoster, setOpenPoster] = useState<boolean>(false);
  const [openRuleBook, setOpenRulebook] = useState<boolean>(false);
  return (
    <Transition>
      <div className="secbody">
        <NavBar bg1="#531C9C" bg2="#F4347F" fg="#F4347F" />
        <section className="bg-[url('/images/background/bg-i2c.png')] bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center pt-10">
          <div className="flex flex-row justify-center">
            <h1 className="text-5xl lg:text-6xl font-brokenConsole text-white text-center">
              INNOVATIVE INFORMATICS <br /> CONTEST
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

        <section className="bg-gradient-to-b from-[#531C9C] to-[#8637C6]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-white">
              About I2C
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>

          <div className="font-montserrat text-white text-justify lg:text-center px-10 lg:px-32 pb-12">
            Innovative Informatics Contest adalah sebuah kompetisi yang menguji
            kemampuan peserta dalam menyusun ide untuk memecahkan berbagai
            permasalahan yang ada di dunia dengan memberikan solusi melalui
            pendekatan Teknologi Informasi, yang dapat berbentuk aplikasi, web,
            dan juga IoT. Pada tahun ini, I2C mengangkat tema "A Step Closer to
            Perfection" dengan harapan peserta dapat membuat produk inovatif
            yang dapat membantu pengguna menguasai berbagai disiplin ilmu, baik
            akademik maupun nonakademik, melalui media Teknologi Informasi.
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
                    src="images/poster/poster-i2c.webp"
                  />
                </Dialog.Panel>
              </div>
            </Dialog>
            <a href="/" rel="noreferrer" target="_blank">
              <button className="flex items-center gap-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F] bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                <div className="text-white font-bold">Daftar</div>
                <img className="vector" src="images/Vector 9.svg" />
              </button>
            </a>
            <button
              onClick={() => setOpenRulebook(true)}
              className="items-center font-bold gap-1 rounded-full bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
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

        <section className="bg-gradient-to-b from-[#8637C6] via-[#BE8ADE] to-[#E5D2F2]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-[#F4347F] text-center">
              Ketentuan I2C
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-20">
            <div
              className="bg-white h-fit mx-4 lg:mx-0 lg:w-2/5 p-8 rounded-2xl font-montserrat"
              style={{ boxShadow: "2px 2px 10px rgb(255, 255, 255)" }}
            >
              <div className="font-brokenConsole font-bold text-xl text-[#F4347F] text-center py-2">
                KETENTUAN UMUM
              </div>
              <ol className="pl-6 list-outside list-decimal leading-loose">
                <li>
                  Setiap peserta harus merupakan siswa aktif SMA/sederajat.
                </li>
                <li>
                  Setiap peserta harus tergabung dalam tim yang beranggotakan
                  tiga (3) orang.
                </li>
                <li>
                  Setiap peserta hanya boleh terdaftar dalam satu (1) tim.
                </li>
                <li>
                  Setiap anggota tim harus berasal dari sekolah yang sama.
                </li>
                <li>
                  Setiap tim harus memenuhi prosedur pendaftaran yang telah
                  ditetapkan.
                </li>
                <li>
                  Setiap tim tidak boleh mengganti anggota yang sudah terdaftar
                  pada formulir pendaftaran.
                </li>
                <li>
                  Setiap tim harus membayar biaya pendaftaran lomba sebesar Rp
                  150.000.
                </li>
                <li>
                  Pengembalian (refund) biaya pendaftaran tidak dapat dilakukan
                  dalam keadaan apa pun.
                </li>
                <li>
                  Setiap tim yang lolos ke tahap semifinal wajib berangkat ke
                  Universitas Atma Jaya Yogyakarta.
                </li>
                <li>
                  Setiap tim yang lolos ke tahap semifinal wajib didampingi oleh
                  guru pembimbing yang berasal dari sekolah yang sama.
                </li>
                <li>
                  Setiap tim hanya boleh didampingi oleh satu (1) guru
                  pembimbing.
                </li>
                <li>
                  Setiap guru dapat membimbing lebih dari satu (1) tim, selama
                  tim berasal dari sekolah yang sama.
                </li>
                <li>
                  Setiap sekolah bebas untuk mendaftarkan lebih dari satu (1)
                  tim.
                </li>
              </ol>
            </div>

            <div
              className="bg-white h-fit mx-4 lg:mx-0 lg:w-2/5 p-8 rounded-2xl font-montserrat"
              style={{ boxShadow: "2px 2px 10px rgb(255, 255, 255)" }}
            >
              <div className="font-brokenConsole font-bold text-xl text-[#F4347F] text-center py-2">
                Ketentuan Karya
              </div>
              <ol className="pl-6 list-outside list-decimal leading-loose">
                <li>
                  Setiap karya harus berkaitan dengan Teknologi Informasi.
                </li>
                <li>Setiap karya harus sesuai dengan tema yang diberikan.</li>
                <li>Setiap karya harus merupakan ide orisinal peserta.</li>
                <li>
                  Setiap karya tidak boleh menyinggung elemen yang berkaitan
                  dengan etnis, suku, agama, tindakan perundangan, hingga SARA.
                </li>
                <li>
                  Setiap karya belum pernah dimasukkan dalam lomba yang sejenis
                  sebelumnya.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#E5D2F2] to-[#704BDA] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-16 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-3xl text-[#F4347F]">
              TIMELINE I2C
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
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
                    <TimelineHeader className="h-3">
                      <TimelineIcon className="bg-[#F4347F]" />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none font-brokenConsole text-[#F4347F] text-lg py-4"
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

        <section className="bg-gradient-to-b from-[#704BDA] to-[#552E91] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-5xl text-white">
              PRIZEPOOL
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div className="text-white font-montserrat text-3xl font-bold">
            Rp9.000.000,00
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
                  <FaMoneyBill /> Rp3.000.000,00
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaTrophy /> Trophy
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaCertificate /> Certificate
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
                  Rp4.000.000,00
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaTrophy className="order-last lg:order-none" /> Trophy
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaCertificate className="order-last lg:order-none" />{" "}
                  Certificate
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
                  Rp2.000.000,00
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaTrophy className="order-last lg:order-none" /> Trophy
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {" "}
                  <FaCertificate className="order-last lg:order-none" />{" "}
                  Certificate
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#6b30c7] py-12">
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
              <button className="flex items-center gap-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#F4347F] bg-[#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                <div className="text-white text-xl font-bold">Daftar</div>
                <img className="vector" src="images/Vector 9.svg" />
              </button>
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#552E91] to-[#290265] relative overflow-hidden">
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
            event="I2C"
            bg="#60458A"
            person1="Alvin"
            person2="Jeany"
            no1="87794005230"
            no2="82151779891"
          />
        </section>

        <Footer className="bg-[#290265]" />
      </div>
    </Transition>
  );
};

export default I2C;
