import { FC, useState } from "react";
import { Dialog } from "@headlessui/react";
// import { FaWhatsapp } from "react-icons/fa";

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
    date: "2 Februari - 5 Maret 2024"
  },
  {
    title: "Penjurian",
    date: "6 Maret - 12 Maret 2024"
  },
  {
    title: "Pengumuman & Technical Meeting",
    date: "13 Maret 2024"
  },
  {
    title: "Final",
    date: "22 Maret 2024"
  },
];

const WDC: FC = () => {
  const [openPoster, setOpenPoster] = useState<boolean>(false);
  const [openRuleBook, setOpenRulebook] = useState<boolean>(false);
  return (
    <Transition>
      <div className="secbody">
        <NavBar bg1="#8DD632" bg2="#8637C6" fg="#8637C6"/>
        <section className="bg-[url('/images/background/bg-wdc.png')] bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center pt-10" id="sec1">
          <div className="flex flex-row justify-center">
            <h1 className="text-5xl lg:text-6xl font-brokenConsole text-white text-center">
              WEB DEVELOPMENT <br /> COMPETITION
            </h1>
          </div>

          <div className="flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            <div className="items-center gap-1 rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">Rp. 50.000</div>
            <div className="items-center gap-1 rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">SMA / Sederajat</div>
            <div className="items-center gap-1 rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">MAX. 3 orang</div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#42B54C] to-[#9DDB59]">

          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12"/>
            <h2 className="font-brokenConsole font-bold text-3xl text-white text-center">About WDC</h2>
            <img src="images/star.png" alt="star-img" className="w-12"/>
          </div>

          <div className="font-montserrat text-white text-justify lg:text-center px-10 lg:px-32 pb-12">
          Web Design Competition (WDC) adalah sebuah kompetisi di mana mahasiswa/i 
          dalam sebuah tim yang terdiri dari maksimal dua orang berlomba untuk membuat 
          desain web sebaik mungkin agar dapat mempermudah setiap pengguna web atau 
          pencari informasi mendapatkan informasi yang jelas dan tepat. 
          Web Design Competition (WDC) 2024 mengangkat tema “Embrace the 
          Future of Local Economy with Technology” dengan harapan peserta akan 
          mendesain sebuah web yang akan mempromosikan dan menjual produk UMKM 
          lokal di daerah mereka.
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
            <button onClick={() => setOpenPoster(true)} className="items-center gap-1 rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">Poster</button>
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
                    src="images/poster/poster-wdc.webp"
                  />
                </Dialog.Panel>
              </div>
            </Dialog>
            <button onClick={() => setOpenRulebook(true)} className="items-center gap-1 rounded-full bg-[#8637C6] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">Rule Book</button>
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
                      src="documents/rulebook-wdc.pdf"
                    ></iframe>
                  </Dialog.Panel>
                </div>
              </Dialog>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#9DDB59] via-[#B3E734] to-[#e6f9c3]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12"/>
            <h2 className="font-brokenConsole font-bold text-3xl text-[#F4347F]">Ketentuan WDC</h2>
            <img src="images/star.png" alt="star-img" className="w-12"/>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-20">
            <div className="bg-white h-fit mx-4 lg:mx-0 lg:w-2/5 p-8 rounded-2xl font-montserrat" style={{boxShadow: "2px 2px 10px rgb(255, 255, 255)"}}>
              <div className="font-brokenConsole font-bold text-xl text-[#F4347F] text-center py-2">KETENTUAN UMUM</div>
              <ol className="pl-6 list-outside list-decimal leading-loose">
                <li>
                  Peserta adalah mahasiswa/i aktif jenjang D3/D4/S1 dari
                  perguruan tinggi di Pulau Jawa dan Pulau Bali.
                </li>
                <li>
                  Peserta lomba adalah satu tim yang terdiri dari minimal 1
                  (satu) orang dan maksimal 3 (tiga) orang.
                </li>
                <li>
                  Tim yang terdiri dari 2 (dua) atau 3 (tiga) orang peserta
                  harus berasal dari institusi/perguruan tinggi yang sama.
                </li>
                <li>
                  Tidak diperkenankan ada peserta yang terdaftar dalam dua tim
                  atau lebih yang berbeda.
                </li>
                <li>
                  Melakukan pendaftaran online melalui
                  https://ifest.uajy.ac.id/dash/, pendaftaran akan dibuka mulai
                  dari Jumat, 2 Februari 2024 sampai dengan Senin, 5 Maret 2024
                  pukul 23.59 WIB.
                </li>
                <li>
                  Melampirkan scan atau foto Kartu Tanda Mahasiswa, Surat
                  Persetujuan Universitas, serta Bukti Pembayaran pada formulir
                  pendaftaran.
                </li>
                <li>
                  Peserta membayar biaya pendaftaran sebesar Rp50.000,00.
                </li>
                <li>
                  Batas pembayaran dan pengumpulan karya adalah Selasa, 5 Maret
                  2024 pukul 23.59 WIB.
                </li>
                <li>
                  Seluruh peserta yang mengirimkan hasil karya akan mendapatkan
                  e-certificate.
                </li>
                <li>
                  Peserta yang sudah mendaftar tetapi tidak mengumpulkan hasil
                  karya desain situs web setelah batas waktu yang ditentukan
                  dianggap mengundurkan diri dari perlombaan.
                </li>
                <li>
                  Panitia berhak untuk mengeleminasi peserta yang tidak
                  mematuhi ketentuan di atas.
                </li>
                <li>
                  Setiap peserta Web Development Competition (WDC) 2024 wajib
                  membaca, memahami, dan mengikuti seluruh syarat dan ketentuan
                  yang tercantum dalam rulebook.
                </li>
              </ol>
            </div>

            <div className="bg-white h-fit mx-4 lg:mx-0 lg:w-2/5 p-8 rounded-2xl font-montserrat" style={{boxShadow: "2px 2px 10px rgb(255, 255, 255)"}}>
              <div className="font-brokenConsole font-bold text-xl text-[#F4347F] text-center py-2">Ketentuan Karya</div>
              <ol className="pl-6 list-outside list-decimal leading-loose">
                <li>Karya desain berupa situs web desktop.</li>
                <li>
                  Peserta dibebaskan menggunakan software apapun dalam
                  pembuatan desain.
                </li>
                <li>Hasil karya harus sesuai dengan tema WDC 2024.</li>
                <li>
                  Daerah atau isi yang hendak dikembangkan/ditunjukan dalam
                  website pariwisata harus berada di dalam Provinsi yang telah
                  ditentukan peserta, peserta hanya boleh memilih 1 (satu)
                  Provinsi.
                </li>
                <li>
                  Web harus mengandung fungsi-fungsi esensial, jumlah halaman
                  web maksimal 12 halaman.
                </li>
                <li>
                  Bahasa utama yang digunakan dalam pembuatan website adalah
                  Bahasa Indonesia atau Bahasa Inggris dan diperbolehkan
                  menggunakan istilah dalam bahasa asing.
                </li>
                <li>eserta wajib menyertakan kode (code) desain web.</li>
                <li>
                  Desain situs web dilarang mengandung unsur SARA, kekerasan,
                  pornografi, dan melanggar UU yang berlaku.
                </li>
                <li>
                  Desain situs web yang diperlombakan menjadi hak panitia.
                </li>
                <li>
                  Panitia WDC 2024 berhak mendiskualifikasi peserta jika
                  diketahui Hak Atas Kekayaan Intelektualnya diragukan, seperti
                  sedang dalam sengketa, mengambil karya orang lain, atau mendapat
                  klaim dari pihak lain.
                </li>
                <li>
                  Keputusan panitia bersifat mutlak dan tidak dapat diganggu
                  gugat.
                </li>
                <li>Penilaian karya didasarkan pada kriteria berikut.</li>
                <li>
                  Tampilan Layout/Antarmuka (30%) Menampilkan antarmuka situs
                  web dengan struktur yang tepat.
                </li>
                <li>
                  Kesesuaian Tema (30%) Situs web yang didesain berkaitan
                  dengan tema yang telah ditentukan. Daya Tarik dan Informatif
                  (25%) Dapat menciptakan daya tarik dan memberikan pesan yang
                  informatif. Responsif (15%) Situs web dapat diakses dengan
                  menyesuaikan ukuran pada perangkat yang berbeda (desktop,
                  tablet, mobile).
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#e6f9c3] to-[#42B54C] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12"/>
            <h2 className="font-brokenConsole font-bold text-3xl text-[#F4347F]">TIMELINE WDC</h2>
            <img src="images/star.png" alt="star-img" className="w-12"/>
          </div>
          
          <div className="p-12 mx-4 lg:mx-0 rounded-xl bg-[#e6f9c3]">
            <Timeline className="flex items-start">
              {timelineItems.map((item, index) => {
                return(
                  <TimelineItem className="h-28 items-start">
                    {index == timelineItems.length-1 ? "" : <TimelineConnector/>}
                    <TimelineHeader className="h-3">
                      <TimelineIcon className="bg-[#F4347F]"/>
                      <Typography variant="h6" color="blue-gray" className="leading-none font-brokenConsole text-[#F4347F] text-lg py-4" placeholder={undefined}>
                        {item.title}
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography variant="small" color="gray" className="font-normal text-[#42B54C] font-montserrat font-bold" placeholder={undefined}>
                        {item.date}
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#42B54C] to-[#1B813D] h-fit flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12"/>
            <h2 className="font-brokenConsole font-bold text-5xl text-white">PRIZEPOOL</h2>
            <img src="images/star.png" alt="star-img" className="w-12"/>
          </div>
          <div className="text-white font-montserrat text-3xl font-bold">Rp6.000.000,00</div>
          
          <div className="flex flex-col lg:flex-row lg:justify-between w-2/3 lg:items-end py-12 gap-12">
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img src="images/silver-cup.png" alt="silver-img" className="w-32 lg:w-36"/>
                <div className="font-brokenConsole text-2xl py-4">Second</div>
              </div>
              <div className="flex flex-col justify-center items-start lg:items-center">
                <div className="flex gap-3 justify-center items-center"> <FaMoneyBill /> Rp2.000.000,00</div>
                <div className="flex gap-3 justify-center items-center"> <FaCertificate /> National Certificate</div>
              </div>
            </div>
            <div className="order-first lg:order-none flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img src="images/gold-cup.png" alt="silver-img" className="w-32 lg:w-40"/>
                <div className="font-brokenConsole text-3xl py-4">First</div>
              </div>
              <div className="flex flex-col order-first lg:order-none justify-center items-end lg:items-center">
                <div className="flex gap-3 justify-center items-center"> <FaMoneyBill className="order-last lg:order-none"/> Rp3.000.000,00</div>
                <div className="flex gap-3 justify-center items-center"> <FaCertificate className="order-last lg:order-none"/> National Certificate</div>
              </div>
            </div>
            <div className="flex lg:flex-col justify-center items-center text-white font-montserrat gap-8 hover:scale-125 transition">
              <div className="flex flex-col justify-center items-center">
                <img src="images/bronze-cup.png" alt="silver-img" className="w-32 lg:w-36"/>
                <div className="font-brokenConsole text-2xl py-4">Third</div>
              </div>
              <div className="flex flex-col order-first lg:order-none justify-center items-end lg:items-center">
                <div className="flex gap-3 justify-center items-center"> <FaMoneyBill className="order-last lg:order-none"/> Rp1.000.000,00</div>
                <div className="flex gap-3 justify-center items-center"> <FaCertificate className="order-last lg:order-none"/> National Certificate</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1ea64b] py-12" >
          <div className="flex flex-col justify-center items-center px-4" >
            <div className="font-brokenConsole font-bold text-3xl text-white text-center">Tertarik? Ayo Segera Daftar!</div>
            <p className="font-montserrat text-center text-white py-4">
              Apakah kamu siap menghadapi tantangan di dunia teknologi
              informasi? Ayo, jangan lewatkan kesempatan <br /> untuk
              menunjukkan kreativitas dan keahlianmu di IFEST #12! 🌐
            </p>
            <a href="/" rel="noreferrer" target="_blank">
              <button className="flex items-center gap-1 rounded-full bg-[#F4347F] transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#F4347F] p-2 lg:flex-row lg:text-sm lg:tracking-wide px-5 py-3 font-montserrat">
                <div className="text-white text-xl font-bold">Daftar</div>
                <img className="vector" src="images/Vector 9.svg" />
              </button>
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#1B813D] to-[#1A3D26] relative overflow-hidden">
          <img className="absolute w-60 opacity-50 top-52 -left-20 lg:top-24 lg:left-4" src="images/awan3.png" />

          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.png" alt="star-img" className="w-12"/>
            <h2 className="font-brokenConsole font-bold text-3xl text-white">CONTACT US</h2>
            <img src="images/star.png" alt="star-img" className="w-12"/>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-montserrat text-white text-center w-9/12 lg:w-3/5">
              Jika Anda memiliki pertanyaan lebih lanjut atau membutuhkan
              bantuan terkait Web <br /> Development Competition IFEST #12,
              jangan ragu untuk menghubungi kami!
            </p>
          </div>

          <img className="absolute w-60 opacity-50 top-52 -right-20 lg:top-48 lg:right-0" src="images/awan2.png" />
          
          <CP event="WDC" bg="#1ea64b" person1="Lisya" person2="Yonatan" no1="89503210551" no2="87753428099"/>
        </section>

        <Footer className="bg-[#1A3D26]"/>
      </div>
    </Transition>
  );
};

export default WDC;
