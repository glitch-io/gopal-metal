import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

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
import Chemical from "./Pages/Technical/Chemical";
import Mechanical from "./Pages/Technical/Mechanical";
import PageNav from "./Components/PageNav";
import PageFooter from "./Components/PageFooter";
const Homepage = lazy(() => import("./Pages/HomePage"));
function App() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 180, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <>
      <BrowserRouter>
        <PageNav />
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
            <Route path="/chemical-composition" element={<Chemical />} />
            <Route path="/mechanical-composition" element={<Mechanical />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>{" "}
          <ScrollToTop />
        </Suspense>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
