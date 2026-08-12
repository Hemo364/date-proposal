import React from "react";
import catMascot from "./Assets/Sefid.jpeg";

const CatMessage = ({ text, buttonText, onButtonClick }) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen px-6 py-6 overflow-hidden cat-bg-pattern h-dvh">
      <div className="flex flex-col items-center w-full max-w-sm p-8 text-center cat-card">
        <img
          src={catMascot}
          alt="گربه"
          className="object-contain w-20 h-20 mb-4 border-r rounded-md drop-shadow-md"
        />

        <p className="text-xl font-bold leading-relaxed text-(--cat-black) whitespace-pre-line">
          {text}
        </p>

        {buttonText && (
          <button
            type="button"
            onClick={onButtonClick}
            className="w-full py-3 mt-8 cat-btn-primary"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default CatMessage;
