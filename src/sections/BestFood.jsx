import BestFoodImage from "../assets/images/palto-mejorcomida.jpg";
import { FaWhatsapp } from "react-icons/fa";

const BestFood = () => {
  return (
    <div className="bg-bestfood">
      <div className="w-5/6 m-auto min-h-screen flex items-center justify-center gap-x-4">
        <div className="w-1/2 space-y-8 text-white">
          <h2 className="font-bold">⭐ Recomendación del Chef</h2>
          <h1 className="text-6xl font-bold title text-[var(--YellowMain)]">
            Alitas Irresistibles para Todos los Gustos
          </h1>
          <p className="leading-relaxed md:leading-loose">
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
            href="https://wa.me/51987654321?text=Hola%20quiero%20hacer%20un%20pedido%20de%20las%20Alitas%20Acevichadas"
            target="_blank"
            className="bg-[var(--YellowMain)] text-black px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-x-2"
          >
            <FaWhatsapp size={20} />
            ¡Pedir ahora!
          </a>
        </div>

        <div>
          <img
            src={BestFoodImage}
            alt="Mejor comida de LaTaberna"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BestFood;
