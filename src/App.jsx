import React, { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./loading.css";
import LoadingSvg from "./svg/LoadingSvg";
import SelectedSurah from "./pages/SelectedSurah";
import UzbTranslate from "./pages/UzbTranslate";
import Footer from "./components/Footer";
function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      <Router>
        {isLoading ? (
          <div className="loader loader--style1" title="0">
            <LoadingSvg />
          </div>
        ) : (
          <Routes>
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/surah/:number" element={<SelectedSurah />} />
            <Route
              path="/translate/:numberInSurah"
              element={<UzbTranslate />}
            />
            <Route path="/" element={<AuthenticatedRoutes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

const AuthenticatedRoutes = () => (
  <>
    <Navbar />
    <Hero />
    <Footer />
  </>
);

export default App;
