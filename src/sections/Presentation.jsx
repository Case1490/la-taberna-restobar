import { GiHamburger } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

const Presentation = () => {
  return (
    <div className="bg-presentation">
      <div className="w-5/6 m-auto min-h-screen flex items-center relative z-10">
        <div className="w-1/2 space-y-8 text-white">
          <h1 className="text-6xl font-bold title text-[var(--YellowMain)]">
            Sabores que acompañan cada brindis
          </h1>
          <p className="">
            En <span className="font-bold">La Taberna</span> te esperamos con
            las mejores alitas, burgers y cervezas heladas en un ambiente único
            para compartir entre amigos.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white text-black capitalize p-3 rounded-full flex items-center gap-x-2"
            >
              Ver menú <GiHamburger />
            </a>
            <a
              href="#"
              className="border border-white capitalize rounded-full p-3 flex items-center gap-x-2"
            >
              Reservar mesa <ImSpoonKnife />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
