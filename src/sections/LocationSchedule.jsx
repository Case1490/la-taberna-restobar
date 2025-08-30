import { FaClock, FaDirections } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const LocationSchedule = () => {
  return (
    <div
      className="bg-locationSchedule py-16 px-6 text-center relative overflow-hidden"
      id="ubicacion"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative w-5/6 m-auto z-10 text-white">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-8"
        >
          📍 Ubicación & Horarios
        </motion.h2>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.215639388473!2d-76.369877989526!3d-6.494359193470577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ba0bf4388f5b05%3A0xd618367a16cb2ebf!2sJr.%20Arica%20147%2C%20Tarapoto%2022201!5e0!3m2!1ses!2spe!4v1756334450141!5m2!1ses!2spe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[250px] md:h-[450px] max-w-3xl rounded-xl shadow-lg"
            style={{ border: 0 }}
          ></iframe>
        </motion.div>

        {/* Horarios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-6"
        >
          <p className="flex items-center text-sm md:text-lg mb-2">
            <FaClock className="mr-2 text-[var(--YellowMain)]" /> Lunes -
            Viernes: 12:00 pm - 11:00 pm
          </p>
          <p className="flex items-center text-sm md:text-lg mb-2">
            <MdLocationOn className="mr-2 text-[var(--YellowMain)]" />{" "}
            Referencia: Una cuadra antes de la Plaza Tarapoto
          </p>
        </motion.div>

        {/* Botón */}
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          href="https://maps.app.goo.gl/KEaVZPPUjEtTPSvN6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[var(--YellowMain)] text-black px-6 py-3 rounded-full text-sm md:text-lg font-semibold button-hover-yellow"
        >
          <FaDirections className="mr-2" /> Cómo llegar
        </motion.a>
      </div>
    </div>
  );
};

export default LocationSchedule;
