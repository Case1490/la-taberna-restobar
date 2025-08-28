import { FaClock, FaDirections } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const LocationSchedule = () => {
  return (
    <div className="bg-locationSchedule py-16 px-6 text-center" id="ubicacion">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative w-5/6 m-auto z-10 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          📍 Ubicación & Horarios
        </h2>

        {/* Google Maps */}
        <div className="flex justify-center mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.215639388473!2d-76.369877989526!3d-6.494359193470577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ba0bf4388f5b05%3A0xd618367a16cb2ebf!2sJr.%20Arica%20147%2C%20Tarapoto%2022201!5e0!3m2!1ses!2spe!4v1756334450141!5m2!1ses!2spe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[250px] md:h-[450px] max-w-3xl rounded-xl shadow-lg"
            style={{ border: 0 }}
          ></iframe>
        </div>

        {/* Horarios */}
        <div className="flex flex-col items-center mb-6">
          <p className="flex items-center text-sm md:text-lg mb-2">
            <FaClock className="mr-2 text-[var(--YellowMain)]" /> Lunes -
            Viernes: 12:00 pm - 11:00 pm
          </p>
          <p className="flex items-center text-sm md:text-lg mb-2">
            <MdLocationOn className="mr-2 text-[var(--YellowMain)]" />{" "}
            Referencia: Una cuadra antes de la Plaza Tarapoto
          </p>
        </div>

        {/* Botón */}
        <a
          href="https://maps.app.goo.gl/KEaVZPPUjEtTPSvN6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[var(--YellowMain)] text-black px-6 py-3 rounded-full text-sm md:text-lg font-semibold shadow-md hover:bg-yellow-600 transition"
        >
          <FaDirections className="mr-2" /> Cómo llegar
        </a>
      </div>
    </div>
  );
};

export default LocationSchedule;
