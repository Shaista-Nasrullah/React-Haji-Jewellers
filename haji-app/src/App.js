import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ringg from "./pages/Ring/Ringg";
import Bengles from "./pages/Bengle/Bengles";
import OurSets from "./pages/Sets/OurSets";
import HoopEarring from "./pages/HoopEarrings/HoopEarring";
import Goshwara from "./pages/goshwara/Goshwara";
import Services from "./pages/services/Services";
import Location from "./pages/Location/Location";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ringgs" element={<Ringg />} />
        <Route path="/Bengles" element={<Bengles />} />
        <Route path="/Sets" element={<OurSets />} />
        <Route path="/HoopEarrings" element={<HoopEarring />} />
        <Route path="/Earrings" element={<Goshwara />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
