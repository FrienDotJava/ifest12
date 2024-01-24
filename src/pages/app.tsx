import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Tidak perlu lagi menggunakan SwiperCore.use, cukup dengan mengimpor modulnya
const CoverflowSwiper: React.FC = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination]} // Tambahkan ini untuk mendaftarkan modul
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* ... tambahkan lebih banyak slide sesuai kebutuhan */}
    </Swiper>
  );
};

const App = () => {
  return (
    <div className="App">
      <CoverflowSwiper />
    </div>
  );
};

export default App;
