import ComidaPrueba from "../assets/images/comida-prueba.jpg";
import { FaWhatsapp } from "react-icons/fa";

const CardMenu = () => {
  return (
    <div className="px-3 py-5 rounded-2xl space-y-3 border effect-blur cardmenu-item">
      <div className="w-[200px] m-auto mb-4">
        <img src={ComidaPrueba} alt="Nombre" className="w-full" />
      </div>
      <h1 className="text-xl font-bold uppercase">
        Chicharrón de Cerdo Criollo
      </h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel.
      </p>
      <p className="text-price font-bold text-2xl">S/24.00</p>
      <div>
        <a
          href="#"
          className="flex items-center justify-center gap-x-2 border rounded-full py-2 button-cardmenu-item"
        >
          <FaWhatsapp size={20} />
          Pedir por whatsApp
        </a>
      </div>
    </div>
  );
};

export default CardMenu;
