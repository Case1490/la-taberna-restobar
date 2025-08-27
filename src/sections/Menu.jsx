import CardMenu from "../components/CardMenu";

const Menu = () => {
  return (
    <div className="bg-menu relative">
      {/* Overlay con blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      <div className="relative w-5/6 m-auto text-center text-white py-20">
        <h1 className="text-5xl font-bold mb-14">Nuestros mejores platos</h1>

        <div className="grid grid-cols-3 gap-8 my-10">
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
        </div>
        <button className="px-6 py-3  bg-[var(--YellowMain)] text-black font-semibold rounded-lg shadow-lg transition">
          Ver carta completa
        </button>
      </div>
    </div>
  );
};

export default Menu;
