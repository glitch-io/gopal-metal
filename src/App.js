import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import PageNav from "./Components/PageNav";
import PageFooter from "./Components/PageFooter";
import SpinnerFullPage from "./Components/SpinnerFullPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./Components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

const Homepage = lazy(() => import("./Pages/HomePage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Quality = lazy(() => import("./Pages/Quality"));
const Contact = lazy(() => import("./Pages/Contact"));
const Flanges = lazy(() => import("./Pages/Product/Flanges"));
const ForgedFittings = lazy(() => import("./Pages/Product/ForgedFittings"));
const ButtweldFittings = lazy(() => import("./Pages/Product/ButtweldFittings"));
const Pipes = lazy(() => import("./Pages/Product/Pipe"));
const RoundBar = lazy(() => import("./Pages/Product/RoundBar"));
const Sheet = lazy(() => import("./Pages/Product/Sheet"));
const WeldNeckFlange = lazy(() => import("./Pages/Flanges/WeldNeckFlange"));
const SlipOnFlange = lazy(() => import("./Pages/Flanges/SlipOnFlange"));
const BlindFlange = lazy(() => import("./Pages/Flanges/BlindFlange"));
const SocketWeldFlange = lazy(() => import("./Pages/Flanges/SocketWeldFlange"));
const LapFlange = lazy(() => import("./Pages/Flanges/LapFlange"));
const PlateFlange = lazy(() => import("./Pages/Flanges/PlateFlange"));
const TongueGroove = lazy(() => import("./Pages/Flanges/TongueGroove"));
const Ring = lazy(() => import("./Pages/Flanges/Ring"));
const Orifice = lazy(() => import("./Pages/Flanges/Orifice"));
const Threaded = lazy(() => import("./Pages/Flanges/Threaded"));
const Chemical = lazy(() => import("./Pages/Technical/Chemical"));
const Mechanical = lazy(() => import("./Pages/Technical/Mechanical"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

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
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <PageNav />
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/flanges" element={<Flanges />} />
              <Route path="/forged-fittings" element={<ForgedFittings />} />
              <Route path="/buttweld-fittings" element={<ButtweldFittings />} />
              <Route path="/pipe" element={<Pipes />} />
              <Route path="/round-bar" element={<RoundBar />} />
              <Route path="/sheet" element={<Sheet />} />
              <Route
                path="/weld-neck-flange"
                element={<WeldNeckFlange />}
              />{" "}
              <Route path="/slip-on-flange" element={<SlipOnFlange />} />
              <Route path="/blind-flange" element={<BlindFlange />} />{" "}
              <Route
                path="/socket-weld-flange"
                element={<SocketWeldFlange />}
              />
              <Route path="/lap-flange" element={<LapFlange />} />
              <Route path="/plate-flange" element={<PlateFlange />} />{" "}
              <Route path="/tongue-and-groove" element={<TongueGroove />} />
              <Route path="/ring-type-joint-flanges" element={<Ring />} />
              <Route path="/orifice-flanges" element={<Orifice />} />{" "}
              <Route path="/threaded-flanges" element={<Threaded />} />
              <Route path="/chemical-composition" element={<Chemical />} />
              <Route path="/mechanical-composition" element={<Mechanical />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <PageFooter />
            <ScrollToTop />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
