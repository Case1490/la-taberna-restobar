import { FaWhatsapp } from "react-icons/fa";

const CardMenu = ({ imageFood, title, paragraph, price }) => {
  const phoneNumber = "51959588954";
  const message = `Quiero hacer el pedido de ${title}`;

  return (
    <div
      className="px-3 py-5 my-4 mx-12 rounded-2xl space-y-3 border effect-blur cardmenu-item 
                    flex flex-col justify-between h-[450px]"
    >
      {/* Imagen */}
      <div className="w-[180px] md:w-[200px] md:h-[200px] m-auto mb-4 flex items-center justify-center">
        <img
          src={imageFood}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Texto */}
      <div className="flex-1 space-y-4 sm:space-y-2 text-center">
        <h1 className="text-lg md:text-xl font-bold uppercase">{title}</h1>
        <p className="text-sm line-clamp-3">{paragraph}</p>
        <p className="text-price font-bold text-xl sm:text-lg md:text-xl">
          S/ {price}
        </p>
      </div>

      {/* Botón */}
      <div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-sm md:text-md gap-x-2 border rounded-full py-2 button-cardmenu-item"
        >
          <FaWhatsapp size={20} />
          Pedir por whatsApp
        </a>
      </div>
    </div>
  );
};

export default CardMenu;
