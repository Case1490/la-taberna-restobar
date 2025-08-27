import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo o Nombre */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--YellowMain)] mb-4">
            JevicTechnology
          </h2>
          <p className="text-sm">
            Soluciones tecnológicas y gestión de inventario confiable.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-[var(--YellowMain)]">
                Inicio
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[var(--YellowMain)]">
                Menú
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--YellowMain)]">
                Contacto
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="hover:text-[var(--YellowMain)]">
                Ubicación
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-[var(--YellowMain)] hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-[var(--YellowMain)] hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-[var(--YellowMain)] hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        © 2025 JevicTechnology. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
