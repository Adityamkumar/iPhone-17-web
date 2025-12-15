import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import MobileShowCase from "./components/MobileShowCase";
import AppleFeatures from "./components/AppleFeatures";
import Camera from "./components/Camera";
import CameraFeatures from "./components/CameraFeatures";
import CameraResolution from "./components/CameraResolution";
import Energy from "./components/Energy";
import IphoneComparison from "./components/IphoneComparison";
import IphoneTech from "./components/IphoneTech";
import Slider from "./components/Slider";
import IosSlider from "./components/IosSlider";
import AppleSlide from "./components/AppleSlide";
import HelpFeatures from "./components/HelpFeatures";
import Accessories from "./components/Accessories";
import Lead from "./components/Lead";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Text />
      <Hero />
      <Highlight />
      <MobileShowCase />
      <AppleFeatures />
      <Camera />
      <CameraFeatures />
      <CameraResolution />
      <Slider />
      <Energy />
      <IphoneComparison />
      <IphoneTech />
      <IosSlider />
      <AppleSlide />
      <HelpFeatures />
      <Accessories />
      <Lead />
      <Footer />
    </main>
  );
};

export default App;
