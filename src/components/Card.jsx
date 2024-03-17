import React from "react";
import Wrapper from "../layout/Wrapper";

function Card({ surah }) {
  return (
    <>
      <div className="card w-[300px] md:w-[350px] h-[80px] border border-[#464b50] cursor-pointer rounded-[6px] hover:border-[#2ca4ab] flex justify-center flex-row font-Poppins z-[10] bg-base-100">
        <div className="card__element bg-base-content flex justify-center items-center rounded-[3px] transform rotate-[45deg] m-auto ml-[20px]">
          <p className="transform text-base-100 rotate-[315deg] font-semibold">
            {surah.number}
          </p>
        </div>
        <div className="ml-[20px] flex items-center justify-between w-full">
          <div>
            <p className="base-100 font-semibold">{surah.englishName}</p>
            <p className="text-base-content text-[12px] onBlue-p font-semibold">
              {surah.englishNameTranslation}
            </p>
          </div>
          <div className="mr-[15px] font-Poppins">
            <p className="text-base-content font-medium font-Montserrat">
              {surah.name}
            </p>
            <p className="text-base-content text-[12px] onBlue-p font-semibold">
              {surah.ayahs.length} Oyat
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
