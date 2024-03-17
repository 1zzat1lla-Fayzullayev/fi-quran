import React, { useState } from "react";
import SurahsCard from "./SurahsCard";

function Hero() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex pt-[20vh] justify-center items-center flex-col">
      <h1 className="text-[50px] font-semibold m-[20px] font-Poppins">
        AL Quran
      </h1>
      <div className="relative w-[80%] md:w-[50%]">
        <input
          type="text"
          name="text"
          placeholder="Nima o'qimoqchisiz?"
          value={search}
          onChange={handleSearchChange}
          className="input input-bordered relative rounded-[100px] bg-base-200 pr-[55px] md:px-[50px] px-[25px] font-Montserrat text-[17px] md:text-[20px] border-none outline-none w-[100%] py-[15px] md:py-[35px]"
        />
      </div>
      <div>
        <SurahsCard search={search} />
      </div>
    </div>
  );
}

export default Hero;
