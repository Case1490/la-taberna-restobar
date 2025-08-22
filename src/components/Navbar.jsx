const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex items-center justify-between w-5/6 m-auto py-3 uppercase">
        <h1 className="logo">LA TABERNA</h1>
        <div className="flex gap-x-6">
          <a href="#menu">Menú</a>
          <a href="#sobre-nosotros">Sobre nosotros</a>
          <a href="#galeria">Galería</a>
        </div>
        <div>
          <a href="#" className="border border-white p-3 rounded-full">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
