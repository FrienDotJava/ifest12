import { FC } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const MUC: FC = () => {
  return (
    <div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="h-screen flex justify-center items-center text-white">
        <div className="absolute z-[-1] bottom-0 overflow-hidden bg-orange-300">
          <div className="h-screen flex items-end">
            <div>
              <div className="flex justify-between md:mt-[10%]">
                <img
                  src="/images/OBJECTS-3.png"
                  alt=""
                  className="mb-10 opacity-60 grayscale"
                />
                <img
                  src="/images/OBJECTS.png"
                  alt=""
                  className="mb-10 opacity-60 grayscale"
                />
              </div>
              <img src="/images/Gunung.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-brokenConsole text-6xl p-4">
            Mobile UI/UX Competition
          </h1>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-8 justify-center md:mt-20 flex-wrap">
            <span className="bg-lime-500 px-10 text-white py-3 rounded-full text-center">
              Free
            </span>
            <span className="bg-lime-500 px-10 text-white py-3 rounded-full text-center">
              SMA/Sederajat
            </span>
            <span className="bg-lime-500 px-10 text-white py-3 rounded-full text-center">
              Max. 3 Orang
            </span>
          </div>
          <div className="text-center mt-4 max-w-md m-auto">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center flex justify-center p-4 bg-orange-400"
        id="about"
      >
        <div className="flex items-center gap-3 text-white">
          <img src="images/star.png" alt="star-img" className="w-12" />
          <h2 className="font-brokenConsole text-3xl">
            About Mobile UI/UX Competition
          </h2>
          <img src="images/star.png" alt="star-img" className="w-12" />
        </div>
      </div>
      <div
        id="MUC"
        className="pt-28 text-center p-4 bg-gradient-to-b from-orange-400 to-orange-300 text-white"
      >
        <div>
          <p style={{ fontFamily: "montserrat" }}>IFEST #12 TECHNOLOGY</p>
        </div>
        <div className="text-center flex justify-center my-4" id="about">
          <div className="flex items-center gap-3">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole text-3xl">
              Mobile UI/UX Competition
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
        </div>
        <div className="max-w-6xl text-center m-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            repellendus eveniet! Amet laudantium eos aperiam cumque tenetur,
            voluptatibus aspernatur doloribus et nam quam, atque repudiandae
            mollitia molestias hic iste incidunt reiciendis possimus illo iure
            repellendus tempora sint! Eius distinctio, unde non possimus
            exercitationem vitae obcaecati saepe voluptatibus aut culpa
            quibusdam!
          </p>
        </div>

        {/* carousel */}
        <div className="my-10 max-w-md m-auto">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            swipeable={true}
          >
            <div>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </div>
            <div>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </div>
            <div>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </div>
          </Carousel>
        </div>
        {/* carousel end */}

        <div className="flex justify-center gap-10 flex-wrap">
          <button className="bg-lime-500 px-10 text-white py-3 rounded-full text-center">
            Poster
          </button>
          <button className="bg-lime-500 px-10 text-white py-3 rounded-full text-center">
            Rules
          </button>
        </div>
      </div>
      <div className="bg-orange-300 text-white">
        <div className="text-center pt-10" id="tahapan">
          <div>
            <p style={{ fontFamily: "montserrat" }}>IFEST #12 TECHNOLOGY</p>
          </div>
          <div className="text-center flex justify-center my-4" id="about">
            <div className="flex items-center gap-3">
              <img src="images/star.png" alt="star-img" className="w-12" />
              <h2 className="font-brokenConsole text-3xl">
                Tahapan Mobile UI/UX Competition
              </h2>
              <img src="images/star.png" alt="star-img" className="w-12" />
            </div>
          </div>
          <div className="max-w-6xl text-center m-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              repellendus eveniet! Amet laudantium eos aperiam cumque tenetur,
              voluptatibus aspernatur doloribus et nam quam, atque repudiandae
              mollitia molestias hic iste incidunt reiciendis possimus illo iure
              repellendus tempora sint! Eius distinctio, unde non possimus
              exercitationem vitae obcaecati saepe voluptatibus aut culpa
              quibusdam!
            </p>
          </div>
          <div>
            <div className="flex justify-between py-10">
              <img src="/images/OBJECTS-1.png" alt="" className="size-1/4" />
              <img
                src="/images/Cookie.png"
                alt=""
                className="size-1/4 md:size-1/6 mt-10"
              />
              <img
                src="/images/OBJECTS-5.png"
                alt=""
                className="size-1/4 md:mt-32"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ketentuan umum */}
      <div
        id="ketentuan-umum"
        className="p-4 md:p-20 bg-gradient-to-b from-orange-300 to-orange-100 md:-mt-32 flex md:justify-center relative"
      >
        <div className="absolute border-r-8 border-orange-400 border-dotted h-[85%]"></div>
        <div className="grid md:grid-cols-2 p-10 ">
          {/* ketentuam umum 1 */}
          <div className="col-start-1 row-start-1 my-5 md:mx-10 max-w-md bg-white p-10 rounded-xl shadow-xl shadow-white relative">
            <h1 className="text-center font-brokenConsole text-2xl">Ketentuan Umum1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi similique quidem quo earum cupiditate. Beatae sapiente aliquam soluta earum nihil iure tempora odit, suscipit sunt, aut ea iste velit, vel ducimus aspernatur quaerat! Placeat blanditiis maxime consectetur aut a!</p>
            <div className="hidden md:block size-4 bg-orange-600 rounded-full absolute top-[48px] right-[-48px]"></div>
            <div className="block md:hidden size-4 bg-orange-600 rounded-full absolute top-[48px] left-[-44px] md:left-[-48px]"></div>
          </div>
          {/* ketentuam umum 2 */}
          <div className="md:col-start-2 row-start-2 my-5 md:mx-10 max-w-md bg-white p-10 rounded-xl shadow-xl shadow-white relative">
            <h1 className="text-center font-brokenConsole text-2xl">Ketentuan Umum2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi similique quidem quo earum cupiditate. Beatae sapiente aliquam soluta earum nihil iure tempora odit, suscipit sunt, aut ea iste velit, vel ducimus aspernatur quaerat! Placeat blanditiis maxime consectetur aut a!</p>
            <div className="size-4 bg-orange-600 rounded-full absolute top-[48px] left-[-44px] md:left-[-48px]"></div>
          </div>
          {/* ketentuam umum 3 */}
          <div className="col-start-1 row-start-3 my-5 md:mx-10 max-w-md bg-white p-10 rounded-xl shadow-xl shadow-white relative">
            <h1 className="text-center font-brokenConsole text-2xl">Ketentuan Umum3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi similique quidem quo earum cupiditate. Beatae sapiente aliquam soluta earum nihil iure tempora odit, suscipit sunt, aut ea iste velit, vel ducimus aspernatur quaerat! Placeat blanditiis maxime consectetur aut a!</p>
            <div className="hidden md:block size-4 bg-orange-600 rounded-full absolute top-[48px] right-[-48px]"></div>
            <div className="block md:hidden size-4 bg-orange-600 rounded-full absolute top-[48px] left-[-44px] md:left-[-48px]"></div>
          </div>
          {/* ketentuam umum 4 */}
          <div className="md:col-start-2 row-start-4 my-5 md:mx-10 max-w-md bg-white p-10 rounded-xl shadow-xl shadow-white relative">
            <h1 className="text-center font-brokenConsole text-2xl">Ketentuan Umum4</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi similique quidem quo earum cupiditate. Beatae sapiente aliquam soluta earum nihil iure tempora odit, suscipit sunt, aut ea iste velit, vel ducimus aspernatur quaerat! Placeat blanditiis maxime consectetur aut a!</p>
            <div className="block size-4 bg-orange-600 rounded-full absolute top-[48px] left-[-44px] md:left-[-48px]"></div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-orange-100 to-orange-400 pt-10">
        <div className="text-pink-600">
          <div>
            <p style={{ fontFamily: "montserrat" }} className="text-center">
              IFEST #12 TECHNOLOGY
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole text-3xl">
              Timeline Mobile UI/UX Competition
            </h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div>
            <p className="text-center max-w-4xl m-auto mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              qui, numquam dolorum aperiam adipisci, possimus inventore incidunt
              consequatur a sunt tempora veniam repudiandae voluptate cum non
              vel hic pariatur distinctio magni quos nam? Quis vero eius
              exercitationem. Optio molestias ad magnam itaque est incidunt
              voluptates consequuntur sunt, reprehenderit quia eius.
            </p>
          </div>
        </div>
        <div id="timeline" className="p-4 md:p-20 text-center text-sky-900">
          <div className="grid grid-cols-5">
            <div className="col-start-2">
              <p className="text-xl font-brokenConsole text-purple-800">
                Pengumpulan Karya
              </p>
              <div className="m-auto size-4 border-solid border-lime-600 border-b-8 border-x-transparent border-x-8 border-t-0"></div>
            </div>
            <div className="col-start-4">
              <p className="text-xl font-brokenConsole text-purple-800">
                Pengumuman
              </p>
              <div className="m-auto size-4 border-solid border-lime-600 border-b-8 border-x-transparent border-x-8 border-t-0"></div>
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div>
              <div className="bg-lime-400 rounded-l-lg h-20 flex items-center justify-center text-sky-700 font-semibold">
                <p>2 Februari 2024</p>
              </div>
            </div>
            <div>
              <div className="bg-lime-600 h-20 flex items-center justify-center text-sky-700 font-semibold">
                <p>2 Februari 2024</p>
              </div>
            </div>
            <div>
              <div className="bg-lime-400 h-20 flex items-center justify-center text-sky-700 font-semibold">
                <p>2 Februari 2024</p>
              </div>
              {/* <div className="m-auto size-4 border-solid border-lime-400 border-t-8 border-x-transparent border-x-8 border-b-0"></div> */}
            </div>
            <div>
              {/* <div className="m-auto size-4 border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0"></div> */}
              <div className="bg-lime-600 h-20 flex items-center justify-center text-sky-700 font-semibold">
                <p>2 Februari 2024</p>
              </div>
            </div>
            <div>
              <div className="bg-lime-400 rounded-r-lg h-20 flex items-center justify-center text-sky-700 font-semibold">
                <p>2 Februari 2024</p>
              </div>
              {/* <div className="m-auto size-4 border-solid border-lime-400 border-t-8 border-x-transparent border-x-8 border-b-0"></div> */}
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className="col-start-1">
              <div className="m-auto size-4 border-solid border-lime-400 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
              <p className="text-xl font-brokenConsole text-purple-800">
                pendaftaran
              </p>
            </div>
            <div className="col-start-3">
              <div className="m-auto size-4 border-solid border-lime-400 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
              <p className="text-xl font-brokenConsole text-purple-800">
                penjurian
              </p>
            </div>
            <div className="col-start-5">
              <div className="m-auto size-4 border-solid border-lime-400 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
              <p className="text-xl font-brokenConsole text-purple-800">
                final & expo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="pricepool"
        className="h-screen pt-32 text-white"
        style={{ background: "url('/images/BG.png')" }}
      >
        <div className="">
          <div>
            <p style={{ fontFamily: "montserrat" }} className="text-center">
              IFEST #12 TECHNOLOGY
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <img src="images/star.png" alt="star-img" className="w-12" />
            <h2 className="font-brokenConsole text-3xl">pricepool</h2>
            <img src="images/star.png" alt="star-img" className="w-12" />
          </div>
          <div>
            <p className="text-center">Total hadiah Rp 6.000.000,00</p>
          </div>
          <div className="grid grid-cols-3 max-w-4xl m-auto text-center mt-20 items-end">
            <div>
              <img
                src="/images/2nd.png"
                alt=""
                className="size-32 m-auto mb-3"
              />
              <h3 className="font-brokenConsole text-2xl">Second</h3>
            </div>
            <div className="pb-10">
              <img
                src="/images/1st.png"
                alt=""
                className="size-32 m-auto mb-3"
              />
              <h3 className="font-brokenConsole text-2xl">First</h3>
            </div>
            <div>
              <img
                src="/images/3rd.png"
                alt=""
                className="size-32 m-auto mb-3"
              />
              <h3 className="font-brokenConsole text-2xl">Third</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 max-w-4xl m-auto">
            <div className="text-center">
              <p>Rp 1.500.000,00</p>
              <p>E-Certificate</p>
            </div>
            <div className="text-center">
              <p>Rp 1.500.000,00</p>
              <p>E-Certificate</p>
            </div>
            <div className="text-center">
              <p>Rp 1.500.000,00</p>
              <p>E-Certificate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 bg-[#ff6524] text-white">
        <div>
          <p style={{ fontFamily: "montserrat" }} className="text-center">
            IFEST #12 TECHNOLOGY
          </p>
        </div>
        <div className="text-center flex justify-center my-4" id="about">
          <div className="flex items-center gap-3">
            <h2 className="font-brokenConsole text-3xl">
              Tertarik? Ayo segera daftar!
            </h2>
          </div>
        </div>
        <div className="max-w-4xl text-center m-auto">
          <p>
            Apakah kamu siap menghadapi tantangan di dunia teknologi informasi?
            Ayo, jangan lewatkan kesempatan untuk menunjukkan kreativitas dan
            keahlianmu di IFEST #12! 🌐
          </p>
          <button className="mt-10 bg-pink-600 text-white px-12 py-2 rounded-full">
            Daftar
          </button>
        </div>
      </div>
      <div className="py-20 bg-gradient-to-b from-[#ff6524] to-orange-700 text-white">
        <div className="md:absolute z-0 w-full flex justify-between overflow-hidden">
          <img src="/images/OBJECTS-1.png" alt="" className="size-1/4" />
          <img src="/images/OBJECTS-5.png" alt="" className="size-1/4" />
        </div>
        <div>
          <p style={{ fontFamily: "montserrat" }} className="text-center">
            IFEST #12 TECHNOLOGY
          </p>
        </div>
        <div>
          <div className="text-center flex justify-center my-4" id="about">
            <div className="flex items-center gap-3">
              <img src="images/star.png" alt="star-img" className="w-12" />
              <h2 className="font-brokenConsole text-3xl">Contact Person</h2>
              <img src="images/star.png" alt="star-img" className="w-12" />
            </div>
          </div>
          <p className="text-center max-w-xl m-auto">
            Jika Anda memiliki pertanyaan lebih lanjut atau membutuhkan bantuan
            terkait Business Case Competition IFEST #12, jangan ragu untuk
            menghubungi kami!
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-20 md:mt-40">
            <div className="text-center bg-gradient-to-b from-green-700 via-green-600 to-green-700 p-10 text-white rounded-3xl">
              <h4 className="font-brokenConsole text-3xl flex justify-center items-center gap-2">
                <span>MUC</span>
                <img src="/images/hp.png" alt="" />
              </h4>
              <p>Mobile UI/UX Competition</p>
              <div className="mt-20">
                <div>
                  <p>John Doe</p>
                  <button className="bg-green-400/40 rounded-full py-2 px-6 flex items-center gap-1">
                    <img src="/images/whatsapp.png" alt="" />
                    <span>08123456789</span>
                  </button>
                </div>
                <div className="mt-4">
                  <p>John Doe</p>
                  <button className="bg-green-400/40 rounded-full py-2 px-6 flex items-center gap-1">
                    <img src="/images/whatsapp.png" alt="" />
                    <span>08123456789</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#003150]">
        <Footer />
      </footer>
    </div>
  );
};

export default MUC;
