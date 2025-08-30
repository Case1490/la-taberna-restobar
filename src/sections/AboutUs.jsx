import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-aboutus">
      <div className="w-5/6 m-auto min-h-screen flex items-start pt-8 justify-end relative z-10">
        <motion.div
          className="w-full text-center md:text-left md:w-2/5 space-y-8 text-white"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // se activa cuando entra 30% en la vista
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-bold title text-[var(--YellowMain)]"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Un Rincón para Disfrutar como en Casa
          </motion.h1>

          <motion.p
            className="text-sm lg:text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            En <span className="font-bold">La Taberna</span> creemos que salir a
            comer no es solo compartir un plato, sino crear momentos que se
            disfrutan de principio a fin. Por eso cuidamos cada detalle: desde
            la selección de ingredientes frescos y de primera calidad, hasta la
            atención cercana y un ambiente acogedor que invita a quedarse.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
