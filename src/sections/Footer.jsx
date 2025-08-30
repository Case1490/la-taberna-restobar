import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="w-5/6 mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo o Nombre */}
        <div>
          <a
            href="#"
            className="text-2xl inline-block font-bold logo uppercase text-[var(--YellowMain)] mb-4"
          >
            La Taberna
          </a>
          <p className="text-sm">
            Tu punto de encuentro en Tarapoto para comer, beber y disfrutar, con
            una carta variada, tragos únicos y el mejor ambiente para compartir
            con amigos, familia o celebrar momentos especiales.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-4">
            <li>
              <a href="#inicio" className="link-underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#menu" className="link-underline">
                Menú
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="link-underline">
                Ubicación
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/share/1BFkwX9LAJ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full animation-button-sn"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@la.taberna.rb?_t=ZS-8z44GPdYsb4&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full animation-button-sn"
            >
              <FaTiktok />
            </a>
            <a
              href="https://wa.me/51959588954"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full animation-button-sn"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        © 2025 La Taberna. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
