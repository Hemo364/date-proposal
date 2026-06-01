import React from "react";
import myImage from "./Assets/downloadNB.png";
const DateSummary = ({ time, place, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen px-4 py-8 h-dvh bg-gradient-to-b from-pink-100 to-pink-200">
      <div className="w-full max-w-sm p-6 border border-pink-200 shadow-xl bg-white/80 backdrop-blur rounded-3xl">
        <div className="text-center">
          <div className="w-40 h-40"><img src={myImage} alt="" /></div>
          <h1 className="text-2xl font-extrabold text-pink-700">
            قرارمون ست شد!
          </h1>
          <p className="mt-2 text-pink-700/80">جزئیات:</p>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between px-4 py-3 border border-pink-100 bg-pink-50 rounded-2xl">
            <span className="font-semibold text-pink-700">ساعت</span>
            <span className="text-pink-800">{time || "—"}</span>
          </div>

          <div className="flex items-center justify-between px-4 py-3 border border-pink-100 bg-pink-50 rounded-2xl">
            <span className="font-semibold text-pink-700">مکان</span>
            <span className="text-pink-800">{place || "—"}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-pink-700">منتظرت هستم</p>
          <p className="mt-1 text-pink-700/80">پس حتماً آماده باش :)</p>
        </div>

        <button
          onClick={onRestart}
          className="flex items-center justify-center w-full py-3 mt-6 text-white transition bg-pink-600 shadow-lg rounded-xl active:scale-95"
        >
          دوباره از اول
        </button>
      </div>
    </div>
  );
};

export default DateSummary;
