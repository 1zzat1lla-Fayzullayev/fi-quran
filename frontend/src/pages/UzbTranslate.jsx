import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../layout/Wrapper";

function UzbTranslate() {
  const [translate, setTranslate] = useState(null);
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedSurahcard, setSelectedSurah] = useState(null);
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate("/");
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  const apiUrl = `https://api.alquran.cloud/v1/surah/${param.numberInSurah}/uz.sodik`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiUrl)
      .then((res) => {
        setTranslate(res.data.data.ayahs);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching translation:", error);
        setTranslate([]);
        setLoading(false);
      });
  }, [param.number]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-[30px] font-Poppins mt-[25%]">
          Iltimos kuting...
        </p>
      ) : (
        <>
          <Wrapper>
            <div className="flex justify-end gap-[10px] font-Montserrat pt-[20px]">
              <div className="text-sm breadcrumbs">
                <ul className="mr-[30px]">
                  <li>
                    <p
                      className="cursor-pointer text-[12px] md:text-[16px]"
                      onClick={handleNavigateToHome}
                    >
                      Barcha suralar
                    </p>
                  </li>
                  <li>
                    <p
                      className="cursor-pointer text-[12px] md:text-[16px]"
                      onClick={handleGoBack}
                    >
                      Sura
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {translate.map((ayah, index) => (
              <div className="py-[20px] px-[15px] md:px-0 m-auto" key={index}>
                <p className="text-[15px] md:text-[18px] font-Montserrat font-normal">
                  {ayah.numberInSurah}. {ayah.text}
                </p>
              </div>
            ))}
            {translate.length === 0 && <p>Error loading translation</p>}
          </Wrapper>
        </>
      )}
    </div>
  );
}

export default UzbTranslate;
