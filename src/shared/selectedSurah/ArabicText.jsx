import React from "react";

function ArabicText({ getArabicNumerals, i }) {
  return (
    <div>
      <div className="relative font-Arabic">
        <h1 className="text-[20px] md:text-[30px] m-[2px]">۝</h1> 
        <span className="text-white absolute left-0 bottom-0 top-[5px] md:top-[10px] right-0 text-[12px] md:text-[18px]">
          {getArabicNumerals(i + 1)}
        </span>
      </div>
    </div>
  );
}

export default ArabicText;
