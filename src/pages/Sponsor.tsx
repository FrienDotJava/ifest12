import { FC } from "react";

import Transition from "../components/Transition";
import NavBar from "../components/Navbar";
import CP from "../components/CP";
import Footer from "../components/Footer";

import PlanCard from "../components/PlanCard";

const Sponsor: FC = () => {
  return (
    <Transition>
      <div>
        <NavBar bg1="#531C9C" bg2="#F4347F" fg="#F4347F" />
        <section className="bg-[url('/images/background/bg-sponsor.png')] bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center pt-10">
          <div className="flex flex-row justify-center">
            <h1 className="text-5xl lg:text-6xl font-brokenConsole text-white text-center">
              SPONSORSHIP <br /> IFEST#12
            </h1>
          </div>
          <div className="font-montserrat flex flex-col flex-wrap gap-2 px-10 py-4 text-center text-sm text-white justify-center lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            Tertarik dengan acara IFEST #12? Dukung kami dengan menjadi sponsor
          </div>
        </section>
        <section className="bg-gradient-to-b from-[#3483A2] to-[#4AB9AE]">
          <div className="flex justify-center items-center gap-3 pt-12 pb-4">
            <img src="images/star.webp" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white">
              sponsorship
            </h2>
            <img src="images/star.webp" alt="star-img" className="w-12" />
          </div>
          <div className="mt-2 mb-8 font-montserrat text-white text-justify lg:text-center px-10 lg:px-32 pb-12">
            Panitia IFEST #12 membuka kesempatan yang seluas - luasnya kepada
            semua pihak (baik instansi, perusahaan maupun perorangan) untuk
            dapat berpartisipasi dalam mendukung suksesnya kegiatan kami. Adapun
            paket kerja sama yang disediakan sehubung dengan kegiatan IFEST #12
            adalah paket Platinum, Gold, dan Silver dengan rincian sebagai
            berikut :
          </div>
          <div className="flex flex-col justify-center items-center xl:flex-row p-5">
            <PlanCard
              name="Silver"
              description="Paket Silver adalah paket kerja sama dengan membayar kekurangan acara sebesar:"
              features={[
                "Pencantuman logo pihak sponsor di bagian sponsorship pada website IFEST #12 dengan ukuran S (detail terlampir).",
                "Pencantuman link website atau akun sosial media pihak sponsor pada website IFEST #12.",
                "Pencantuman logo pihak sponsor pada media publikasi (poster, virtual background, dan sejenisnya) di semua event IFEST #12 dengan ukuran lebih kecil dari paket gold.",
                "Pencantuman logo pihak sponsor pada sertifikat di semua event IFEST #12 dengan ukuran lebih kecil dari paket gold.",
              ]}
              extraFeatures={[
                "Pencantuman logo pihak sponsor pada after movie IFEST #12 dengan ukuran lebih kecil dari paket gold.",
                "Promosi (penyebutan) nama pihak sponsor oleh MC saat acara berlangsung pada semua event IFEST #12 dengan ketentuan yang ditetapkan pada MoU.",
              ]}
              price="1.500.000"
            ></PlanCard>
            <PlanCard
              name="Platinum"
              description="Paket Plantinum adalah paket kerja sama dengan membayar kekurangan acara sebesar:"
              features={[
                "Pencantuman logo pihak sponsor di bagian sponsorship pada website IFEST #12 dengan ukuran L (detail terlampir).",
                "Pencantuman link website atau akun sosial media pihak sponsor pada website IFEST #12.",
                "Pencantuman logo pihak sponsor pada media publikasi (poster, virtual background, dan sejenisnya) di semua event IFEST #12.",
                "Pencantuman logo pihak sponsor pada sertifikat di semua event IFEST #12.",
              ]}
              extraFeatures={[
                "Pencantuman logo pihak sponsor pada after movie IFEST #12.",
                "Iklan adlibs oleh MC saat acara berlangsung pada semua event IFEST #12 dengan materi iklan disediakan oleh pihak sponsor dengan ketentuan yang ditetapkan pada MoU.",
                "Paid promote pada seluruh akun Instagram panitia dengan ketentuan yang ditetapkan pada MoU.",
                "Penayangan iklan dalam bentuk video saat break (istirahat) acara pada semua event IFEST #12 dengan durasi maksimal 60 detik. Materi iklan dari pihak sponsor. Panitia hanya menayangkan.",
                "Penayangan Iklan dalam bentuk video dan atau gambar (maksimal 3 slide) beserta logo dan penjelasan singkat pada halaman sponsor di website IFEST #12. Resolusi Video (bila ada) maks (Resolusi) dengan durasi maks. 60 detik dan resolusi gambar maks. (Resolusi Gambar) px. Materi iklan dari pihak sponsor. Panitia hanya menayangkan.",
              ]}
              price="4.000.000"
            ></PlanCard>
            <PlanCard
              name="Gold"
              description="Paket Gold adalah paket kerja sama dengan membayar kekurangan acara sebesar:"
              features={[
                "Pencantuman logo pihak sponsor di bagian sponsorship pada website IFEST #12 dengan ukuran M (detail terlampir).",
                "Pencantuman link website atau akun sosial media pihak sponsor pada website IFEST #12.",
                "Pencantuman logo pihak sponsor pada media publikasi (poster, virtual background, dan sejenisnya) di semua event IFEST #12 dengan ukuran lebih kecil dari paket platinum.",
                "Pencantuman logo pihak sponsor pada sertifikat di semua event IFEST #12 dengan ukuran lebih kecil dari paket platinum.",
              ]}
              extraFeatures={[
                "Pencantuman logo pihak sponsor pada after movie IFEST #12 dengan ukuran lebih kecil dari paket platinum.",
                "Promosi (penyebutan) nama pihak sponsor oleh MC saat acara berlangsung pada semua event IFEST #12 dengan ketentuan yang ditetapkan pada MoU.",
                "Penayangan Iklan dalam bentuk video saat break (istirahat) acara pada semua event IFEST #12 dengan durasi maksimal 20 detik. Materi iklan dari pihak sponsor. Panitia hanya menayangkan.",
              ]}
              price="2.500.000"
            ></PlanCard>
          </div>
        </section>
        <section className="bg-gradient-to-b from-[#4AB9AE] to-[#003150] relative overflow-hidden">
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
            event="I2C"
            bg="#60458A"
            person1="Ryan"
            person2="Jeany"
            no1="87794005230"
            no2="82151779891"
          />
        </section>
        <Footer className="bg-[#003150]" />
      </div>
    </Transition>
  );
};

export default Sponsor;
