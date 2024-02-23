import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SpinnerFullPage from "./Components/SpinnerFullPage";
import PageNotFound from "./Pages/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
const Homepage = lazy(() => import("./Pages/HomePage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
