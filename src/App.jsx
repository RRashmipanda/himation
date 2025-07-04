import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import VirtualTour from "./pages/VirtualTour";
import ARVREducation from "./pages/ARVREducation";
import ARVRIndustry from "./pages/ARVRIndustry";
import Footer from "./components/Footer";
import ARVR360Virtual from './pages/ARVR360°Virtual'
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ARVR360Virtual" element={<ARVR360Virtual />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/ar-vr-education" element={<ARVREducation />} />
        <Route path="/ar-vr-industry" element={<ARVRIndustry />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

