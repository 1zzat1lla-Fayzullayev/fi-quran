import React from "react";

function NavbarMobile({ handleShowMobileNav }) {
  return (
    <>
      <div
        className={`mobile__nav w-full h-full bg-base-200 z-[999] absolute top-0 left-0 right-0 bottom-0`}
      >
        <p
          className={`bx bx-x absolute right-0 text-red-600 text-[40px] m-[15px] cursor-pointer`}
          onClick={handleShowMobileNav}
        >
          X
        </p>
        <ul className="flex flex-col justify-center text-base-100 items-center gap-[40px] text-[20px] font-Montserrat cursor-pointer h-[100vh]">
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
