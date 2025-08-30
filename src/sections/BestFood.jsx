import BestFoodImage from "../assets/images/palto-mejorcomida.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const BestFood = () => {
  return (
    <div className="bg-bestfood">
      <motion.div
        className="w-5/6 m-auto min-h-screen flex lg:flex-row flex-col items-center justify-center gap-x-4 py-10 text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }} // se activa al entrar en viewport
      >
        <motion.div
          className="w-full mb-10 lg:mb-0 lg:w-1/2 space-y-8 text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-bold">⭐ Recomendación del Chef</h2>
          <h1 className="text-4xl lg:text-6xl font-bold title text-[var(--YellowMain)]">
            Alitas Irresistibles para Todos los Gustos
          </h1>
          <p className="text-sm leading-relaxed md:leading-loose">
            Disfruta de nuestras jugosas{" "}
            <span className="font-bold">
              alitas acevichadas, BBQ y clásicas.
            </span>{" "}
            Cada bocado está lleno de sabor: crujientes por fuera, tiernas por
            dentro y acompañadas de nuestras irresistibles guarniciones.
            ¡Encuentra tu favorita y compártelas con amigos en el mejor
            ambiente! 🍗🍻
          </p>
          <a
            href="https://wa.me/51959588954?text=Hola%20quiero%20hacer%20un%20pedido%20de%20las%20alitas"
            target="_blank"
            className="bg-[var(--YellowMain)] text-black px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-x-2 button-hover-yellow"
          >
            <FaWhatsapp size={20} />
            ¡Pedir ahora!
          </a>
        </motion.div>

        <motion.div
          className="w-[300px] lg:w-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={BestFoodImage}
            alt="Mejor comida de LaTaberna"
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BestFood;
