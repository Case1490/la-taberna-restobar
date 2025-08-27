import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import BestFood from "./sections/BestFood";
import CardFoods from "./sections/CardFoods";
import Footer from "./sections/Footer";
import LocationSchedule from "./sections/LocationSchedule";
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
      <LocationSchedule />
      <Footer />
    </>
  );
}

export default App;
