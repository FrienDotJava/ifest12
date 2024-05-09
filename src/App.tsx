import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import I2C from "./pages/I2C";
import WDC from "./pages/WDC";
import MUC from "./pages/MUC";

import SemNas from "./pages/SemNas";
import Store from "./pages/Store";
import Sponsor from "./pages/Sponsor";

import Error404 from "./pages/Error404";
import UnderDevelopment from "./pages/UnderDevelopment";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const semnasDate = new Date("2024-04-01");
  const current = new Date();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/i2c" element={<I2C />} />
        <Route path="/wdc" element={<WDC />} />
        <Route path="/muc" element={<MUC />} />
        <Route path="/semnas" element={<SemNas />} />
        {/* <Route path="/semnas" element={current.getTime() >= semnasDate.getTime() ? <SemNas /> : <UnderDevelopment />} /> */}
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App
