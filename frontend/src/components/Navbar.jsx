import React, { useEffect, useRef, useState } from "react";
import NavbarMobile from "../shared/navbarMobile/NavbarMobile";
import Hamburger from "../shared/navbarLaptop/Hamburger";
import List from "../shared/navbarLaptop/List";

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    }
  };
  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
    document.body.classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
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
