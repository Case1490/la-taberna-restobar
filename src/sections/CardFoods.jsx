import {
  FaUtensils,
  FaFish,
  FaWineGlassAlt,
  FaCocktail,
  FaGlassWhiskey,
  FaTint,
} from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Platos a la Carta",
    icon: <FaUtensils className="text-3xl text-[var(--YellowMain)]" />,
  },
  {
    name: "Pescados y Mariscos",
    icon: <FaFish className="text-3xl text-[var(--YellowMain)]" />,
  },
  {
    name: "Bebidas Alcohólicas",
    icon: <FaWineGlassAlt className="text-3xl text-[var(--YellowMain)]" />,
  },
  {
    name: "Tragos y Cócteles",
    icon: <FaCocktail className="text-3xl text-[var(--YellowMain)]" />,
  },
  {
    name: "Cervezas y Destilados",
    icon: <FaGlassWhiskey className="text-3xl text-[var(--YellowMain)]" />,
  },
  {
    name: "Aguas y Jugos",
    icon: <FaTint className="text-3xl text-[var(--YellowMain)]" />,
  },
];

const CardFoods = () => {
  return (
    <div className="relative py-16 px-6 text-center bg-cardfoods" id="carta">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        {/* Título con animación */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestra Carta 📋
        </motion.h2>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-white p-6 rounded-full shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition transform"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Botón */}
        <motion.a
          className="mt-10 bg-[var(--YellowMain)] text-black px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-x-2 button-hover-yellow"
          href="/carta-La-Taberna.pdf"
          download="Carta-La-Taberna.pdf"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <LuNewspaper size={20} />
          Ver Carta
        </motion.a>
      </div>
    </div>
  );
};

export default CardFoods;
