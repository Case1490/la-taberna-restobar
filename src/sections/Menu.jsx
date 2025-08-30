import { motion } from "framer-motion";
import CardMenu from "../components/CardMenu";
import { LuNewspaper } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMPORT IMAGE OF FOODS
import AlitasBBQ from "../assets/images/mejores-platos/alitas-bbq.jpg";
import AlitasPicantes from "../assets/images/mejores-platos/alitas-picantes.jpg";
import Broaster from "../assets/images/mejores-platos/broaster.png";
import Ceviche from "../assets/images/mejores-platos/ceviche.png";
import CostillasCerdo from "../assets/images/mejores-platos/costillas-de-cerdo-BBQ.jpg";
import PolloFrito from "../assets/images/mejores-platos/pollo-frito.png";

const foods = [
  {
    imageFood: AlitasBBQ,
    title: "Alitas BBQ (5P)",
    paragraph:
      "Jugosas alitas bañadas en salsa BBQ dulce, ahumada irresistible.",
    price: "20",
  },
  {
    imageFood: AlitasPicantes,
    title: "Alitas Picantes",
    paragraph:
      "Crujientes alitas con toque picante, perfectas para valientes parranderos.",
    price: "26",
  },
  {
    imageFood: Broaster,
    title: "Broaster 1/8",
    paragraph: "Pollo dorado y jugoso, con sazón casera que nunca falla.",
    price: "13",
  },
  {
    imageFood: Ceviche,
    title: "Ceviche + Chicharrón de Pescado",
    paragraph:
      "Frescura cítrica del ceviche con crocante chicharrón, contraste espectacular.",
    price: "30",
  },
  {
    imageFood: CostillasCerdo,
    title: "Costillas de Cerdo BBQ",
    paragraph:
      "Tiernas costillas glaseadas en BBQ, sabor intenso que conquista siempre.",
    price: "26",
  },
  {
    imageFood: PolloFrito,
    title: "Pollo Frito 1/4",
    paragraph: "Pollo crocante acompañado de papas doradas y ensalada fresca.",
    price: "20",
  },
];

const Menu = () => {
  return (
    <div className="bg-menu relative" id="menu">
      {/* Overlay con blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      <div className="relative w-5/6 m-auto text-center text-white py-20">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Nuestros mejores platos 🍽️
        </motion.h1>

        {/* Swiper Carrusel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
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
            {foods.map((food, index) => (
              <SwiperSlide key={index}>
                <CardMenu
                  imageFood={food.imageFood}
                  title={food.title}
                  paragraph={food.paragraph}
                  price={food.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Botones de navegación */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <motion.a
          className=" bg-[var(--YellowMain)] text-black px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-x-2 button-hover-yellow"
          href="/carta-La-Taberna.pdf"
          download="Carta-La-Taberna.pdf"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <LuNewspaper size={20} />
          Ver Carta Completa
        </motion.a>
      </div>
    </div>
  );
};

export default Menu;
