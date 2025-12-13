import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import MobileShowCase from "./components/MobileShowCase";
import AppleFeatures from "./components/AppleFeatures";
import Camera from "./components/Camera";
import CameraFeatures from "./components/CameraFeatures";

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
    </main>
  );
};

export default App;
