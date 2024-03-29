import React, { useEffect, useState, memo } from "react";
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
import Swap from "./shared/ui/Swap";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div className="hidden lg:flex">
      <div
        className="cursor-dot bg-base-content"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="cursor-outline"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const [themeChanged, setThemeChanged] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = () => {
    if (!themeChanged) {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      <Cursor />
      <div className="fixed top-[90%] right-3 z-[1000]">
        <Swap handleToggle={handleToggle} />
      </div>
      <Router>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
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
    </div>
  );
};

const LoadingSpinner = memo(() => (
  <div className="loader loader--style1" title="0">
    <LoadingSvg />
  </div>
));

const AuthenticatedRoutes = () => (
  <>
    <Navbar />
    <Hero />
    <Footer />
  </>
);

export default App;
