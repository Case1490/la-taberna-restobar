import {
  FaUtensils,
  FaFish,
  FaWineGlassAlt,
  FaCocktail,
  FaGlassWhiskey,
  FaTint,
} from "react-icons/fa";

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
    <section className="relative py-16 px-6 text-center bg-cardfoods">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white drop-shadow-lg">
          Nuestra Carta 📋
        </h2>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className=" bg-black/50 border border-white p-6 rounded-full shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition transform"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
            </div>
          ))}
        </div>

        {/* Botón */}
        <a
          className="mt-10 bg-[var(--YellowMain)] text-black px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-x-2"
          href="/carta-La-Taberna.pdf"
          download="Carta-La-Taberna.pdf"
        >
          Ver Carta Completa
        </a>
      </div>
    </section>
  );
};

export default CardFoods;
