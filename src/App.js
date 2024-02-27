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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
