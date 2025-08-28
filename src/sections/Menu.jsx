import CardMenu from "../components/CardMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Menu = () => {
  return (
    <div className="bg-menu relative" id="menu">
      {/* Overlay con blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      <div className="relative w-5/6 m-auto text-center text-white py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-14">
          Nuestros mejores platos 🍽️
        </h1>

        {/* Swiper Carrusel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-10 px-6"
        >
          <SwiperSlide>
            <CardMenu />
          </SwiperSlide>
          <SwiperSlide>
            <CardMenu />
          </SwiperSlide>
          <SwiperSlide>
            <CardMenu />
          </SwiperSlide>
          <SwiperSlide>
            <CardMenu />
          </SwiperSlide>
          <SwiperSlide>
            <CardMenu />
          </SwiperSlide>
          <SwiperSlide>
            <CardMenu />
          </SwiperSlide>
        </Swiper>

        {/* Botones de navegación */}
        <div className="swiper-button-prev "></div>
        <div className="swiper-button-next"></div>

        <a
          className=" bg-[var(--YellowMain)] text-black px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-x-2"
          href="/carta-La-Taberna.pdf"
          download="Carta-La-Taberna.pdf"
        >
          Ver Carta Completa
        </a>
      </div>
    </div>
  );
};

export default Menu;
