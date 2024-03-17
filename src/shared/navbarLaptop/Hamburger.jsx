import React from "react";

function Hamburger({ handleShowMobileNav }) {
  return (
    <>
      <div
        className="hamburger gap-[10px] flex flex-col items-start cursor-pointer md:hidden"
        onClick={handleShowMobileNav}
      >
        <div className="line w-[35px] h-[1px] bg-base-content"></div>
        <div className="line w-[35px] h-[1px] bg-base-content"></div>
        <div className="line w-[25px] h-[1px] bg-base-content"></div>
      </div>
    </>
  );
}

export default Hamburger;
