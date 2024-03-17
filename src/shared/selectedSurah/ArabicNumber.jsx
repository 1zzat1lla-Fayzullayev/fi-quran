import React from "react";
import ArabicText from "./ArabicText";
import AudioPlayer from "./AudioPlayer";

function  ArabicNumber({
  isAudioPlaying,
  currentAudioIndex,
  i,
  getArabicNumerals,
  text,
}) {
  console.log(text);

  if (!text[0]) {
    return null;
  }

  if (i === 0) {
    return (
      <>
        <div
          key={i}
          className={`font-Montserrat flex items-center justify-center text-center w-[100%] ${
            isAudioPlaying && currentAudioIndex === i ? "audio-playing" : ""
          }`}
          id="audio-playing"
        >
          <p className="text-[20px] md:text-[35px]">{text}</p>
        </div>
        <br />
      </>
    );
  } else {
    return (
      <>
        <div
          key={i}
          className={`font-Montserrat flex items-center justify-center text-center w-[100%] ${
            isAudioPlaying && currentAudioIndex === i ? "audio-playing" : ""
          }`}
        >
          <ArabicText getArabicNumerals={getArabicNumerals} i={i - 1} />
          <p className="text-[20px] md:text-[35px]">{text}</p>
        </div>
      </>
    );
  }
}

export default ArabicNumber;
