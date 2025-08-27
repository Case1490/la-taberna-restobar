import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import BestFood from "./sections/BestFood";
import CardFoods from "./sections/CardFoods";
import Menu from "./sections/Menu";
import Presentation from "./sections/Presentation";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <AboutUs />
      <Menu />
      <BestFood />
      <CardFoods />
      <Benefits />
    </>
  );
}

export default App;
