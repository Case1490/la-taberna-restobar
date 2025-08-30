import { GiHamburger } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <div className="bg-presentation" id="inicio">
      <div className="w-5/6 m-auto min-h-screen flex items-center relative z-10">
        <motion.div
          className="w-full text-center md:text-left md:w-1/2 space-y-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold title text-[var(--YellowMain)]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Sabores que acompañan cada brindis
          </motion.h1>

          <motion.p
            className="text-sm"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            En <span className="font-bold">La Taberna</span> te esperamos con
            las mejores alitas, burgers y cervezas heladas en un ambiente único
            para compartir entre amigos.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            <a
              href="#carta"
              className="bg-white text-sm text-black capitalize p-3 rounded-full flex items-center gap-x-2 hover:bg-[var(--YellowMain)] hover:text-black transition-colors duration-300"
            >
              Ver menú <GiHamburger />
            </a>
            <a
              href="https://wa.me/51959588954?text=Hola%2C%20quiero%20reservar%20una%20mesa"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-sm button-bg-white capitalize rounded-full p-3 flex items-center gap-x-2 hover:bg-[var(--YellowMain)] hover:text-black transition-colors duration-300"
            >
              Reservar mesa <ImSpoonKnife />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;
