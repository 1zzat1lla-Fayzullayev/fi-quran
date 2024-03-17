import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../layout/Wrapper";
import NavbarMobile from "../shared/navbarMobile/NavbarMobile";
import ShowProfile from "../shared/navbarLaptop/ShowProfile";
import LogOutButton from "../shared/navbarLaptop/LogOutButton";
import Hamburger from "../shared/navbarLaptop/Hamburger";
import List from "../shared/navbarLaptop/List";

function Navbar() {
  const [isLoginOnEmail, setIsLoginOnEmail] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState({
    backgroundColor: "#272f33",
    backdropFilter: "blur(0px)",
  });
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    }
  };
  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setNavbarBackground({
        backgroundColor: "#3c4347",
        backdropFilter: "blur(100px)",
      });
    } else {
      setNavbarBackground({
        backgroundColor: "#272f33",
        backdropFilter: "blur(0px)",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav className="flex fixed w-[100%] z-[777] justify-evenly md:justify-around items-center bg-base-200 rounded-bl-[15px] rounded-br-[15px] p-[8px] font-Poppins">
        <h1 className="text-[25px] md:text-[35px] font-semibold cursor-pointer font-Montserrat">
          Quran
        </h1>
        {/* List */}
        <List />

        {/* Hamburger */}
        <Hamburger handleShowMobileNav={handleShowMobileNav} />
      </nav>
      {/* NavMobile */}
      {showMobileNav && (
        <NavbarMobile handleShowMobileNav={handleShowMobileNav} />
      )}
    </div>
  );
}

export default Navbar;
