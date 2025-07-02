import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import VirtualTour from "./pages/VirtualTour";
import ARVREducation from "./pages/ARVREducation";
import ARVRIndustry from "./pages/ARVRIndustry";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/ar-vr-education" element={<ARVREducation />} />
        <Route path="/ar-vr-industry" element={<ARVRIndustry />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

