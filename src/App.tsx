import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/HomeAnim";
import BCC from "./pages/BCC";
import WDC from "./pages/WDC";
import MUC from "./pages/MUC";

import SemNas from "./pages/SemNas";
import Galeri from "./pages/Galeri";
import Sponsor from "./pages/Sponsor";

import Error404 from "./pages/Error404";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/bcc" element={<BCC />} />
        <Route path="/wdc" element={<WDC />} />
        <Route path="/muc" element={<MUC />} />
        <Route path="/semnas" element={<SemNas />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
