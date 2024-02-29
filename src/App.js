import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SpinnerFullPage from "./Components/SpinnerFullPage";
import PageNotFound from "./Pages/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./Pages/AboutUs";
import Quality from "./Pages/Quality";
import Contact from "./Pages/Contact";
import Flanges from "./Pages/Product/Flanges";
import ForgedFittings from "./Pages/Product/ForgedFittings";
import ButtweldFittings from "./Pages/Product/ButtweldFittings";
import Pipe from "./Pages/Product/Pipe";
import RoundBar from "./Pages/Product/RoundBar";
import Sheet from "./Pages/Product/Sheet";
import WeldNeckFlange from "./Pages/Flanges/WeldNeckFlange";
import SlipOnFlange from "./Pages/Flanges/SlipOnFlange";
import ScrollToTop from "./Components/ScrollToTop";
import BlindFlange from "./Pages/Flanges/BlindFlange";
import SocketWeldFlange from "./Pages/Flanges/SocketWeldFlange";
import LapFlange from "./Pages/Flanges/LapFlange";
import PlateFlange from "./Pages/Flanges/PlateFlange";
import TongueGroove from "./Pages/Flanges/TongueGroove";
import Ring from "./Pages/Flanges/Ring";
import Orifice from "./Pages/Flanges/Orifice";
import Threaded from "./Pages/Flanges/Threaded";
const Homepage = lazy(() => import("./Pages/HomePage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/flanges" element={<Flanges />} />
            <Route path="/forged-fittings" element={<ForgedFittings />} />
            <Route path="/buttweld-fittings" element={<ButtweldFittings />} />
            <Route path="/pipe" element={<Pipe />} />
            <Route path="/round-bar" element={<RoundBar />} />
            <Route path="/sheet" element={<Sheet />} />
            <Route path="/weld-neck-flange" element={<WeldNeckFlange />} />{" "}
            <Route path="/slip-on-flange" element={<SlipOnFlange />} />
            <Route path="/blind-flange" element={<BlindFlange />} />{" "}
            <Route path="/socket-weld-flange" element={<SocketWeldFlange />} />
            <Route path="/lap-flange" element={<LapFlange />} />
            <Route path="/plate-flange" element={<PlateFlange />} />{" "}
            <Route path="/tongue-and-groove" element={<TongueGroove />} />
            <Route path="/ring-type-joint-flanges" element={<Ring />} />
            <Route path="/orifice-flanges" element={<Orifice />} />{" "}
            <Route path="/threaded-flanges" element={<Threaded />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>{" "}
          <ScrollToTop />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
