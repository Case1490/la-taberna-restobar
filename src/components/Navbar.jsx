import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar cambio de tamaño (desktop vs mobile)
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fondo dinámico
  let navBgClass = "";
  if (isDesktop) {
    // En desktop siempre negro con blur
    navBgClass = "bg-black/80 backdrop-blur-md";
  } else {
    // En mobile
    navBgClass = isOpen
      ? "bg-black/95"
      : scrolled
      ? "bg-black/80 backdrop-blur-md"
      : "bg-transparent";
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[50] transition-colors duration-200 ${navBgClass}`}
    >
      <div className="flex text-white p-2 items-center justify-between w-5/6 mx-auto uppercase">
        {/* Logo */}
        <a className="logo" href="#inicio">
          La Taberna
        </a>

        {/* Botón hamburguesa */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <GiHamburgerMenu size={28} />
        </button>

        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-6">
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
        <a
          href="https://wa.me/51959588954?text=Hola%2C%20deseo%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
          className="border hidden md:block border-white button-bg-white px-3 py-2 rounded-full"
        >
          Contacto
        </a>

        {/* Overlay + Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 z-[55] bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Menú lateral */}
              <motion.div
                className="fixed top-0 right-0 h-full w-1/2 bg-[#0b0b0b] text-white z-[60] p-6 flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.28 }}
              >
                {/* Botón cerrar */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="self-end mb-8"
                >
                  <IoMdClose size={28} />
                </button>

                {/* Enlaces */}
                <ul className="space-y-6 text-lg">
                  <li>
                    <a href="#" className="border-b">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="border-b">
                      Menú
                    </a>
                  </li>
                  <li>
                    <a href="#" className="border-b">
                      Reservas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="border-b">
                      Contacto
                    </a>
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
