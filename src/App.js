import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SpinnerFullPage from "./Components/SpinnerFullPage";
import PageNotFound from "./Pages/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./Pages/AboutUs";
import Quality from "./Pages/Quality";
import Contact from "./Pages/Contact";
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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
