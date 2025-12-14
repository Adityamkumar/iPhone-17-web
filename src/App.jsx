import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import MobileShowCase from "./components/MobileShowCase";
import AppleFeatures from "./components/AppleFeatures";
import Camera from "./components/Camera";
import CameraFeatures from "./components/CameraFeatures";
import CameraResolution from "./components/CameraResolution";
import Slider from "./components/Slider";
import Energy from "./components/Energy";
import IphoneComparison from "./components/IphoneComparison";

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
    </main>
  );
};

export default App;
