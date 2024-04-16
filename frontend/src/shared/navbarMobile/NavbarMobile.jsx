import React from "react";

function NavbarMobile({ handleShowMobileNav }) {
  return (
    <>
      <div
        className={`mobile__nav w-full h-full bg-base-200 z-[999] absolute top-0 left-0 right-0 bottom-0`}
      >
        <div
          onClick={handleShowMobileNav}
          className="flex justify-center items-center gap-[10px] absolute top-7 right-7"
        >
          <div className="bg-base-content w-[20px] rotate-[45deg] h-[2px] absolute"></div>
          <div className="bg-base-content w-[20px] rotate-[135deg] h-[2px] absolute"></div>
        </div>
        <ul className="flex flex-col justify-center text-base-content items-center gap-[40px] text-[20px] font-Montserrat cursor-pointer h-[100vh]">
          <li onClick={handleShowMobileNav}>
            <a href="#">Bosh sahifa</a>
          </li>
          <li onClick={handleShowMobileNav}>
            <a href="https://t.me/izzatilla_web" target="_blank">
              Aloqa
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarMobile;
