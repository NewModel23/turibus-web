import "./App.css";
import MyCarousel from "./homeCarousel/Carousel";
import HeaderTuribus from "./header/HeaderTuribus";
import Ofrecemos from "./QueOfrecemos/Ofrecemos";

const App = () => {
  // Example data
  const images = [
    "https://www.turibus.com.mx/documents/1085398/1086140/bannerchigna_desk.jpg",
    "https://www.turibus.com.mx/documents/1085398/1086053/bannerpuebla_desk.jpg",
    "https://www.turibus.com.mx/documents/1085398/1086140/bannerchigna_desk.jpg",
  ];

  // Assume the user's editability is determined somehow
  const isEditable = true;

  return (
    <div>
      <HeaderTuribus />

      <MyCarousel editable={isEditable} />
      <Ofrecemos editable={isEditable} />
    </div>
  );
};

export default App;
