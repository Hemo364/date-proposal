import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import myImage from "./Assets/background_removed_image.png"; // مطمئن شوید مسیر عکس در پروژه شما درست است
import bgImage from "./Assets/bigger_blue_background.png"; // اطمینان حاصل کنید مسیر عکس در پروژه شما درست است

export default function DateSummary({ time, date, place, onRestart }) {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className="relative flex flex-col items-center justify-center p-4 overflow-hidden bg-center bg-no-repeat bg-cover min-h-dvh"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="z-10 w-full max-w-sm p-6 border border-blue-100 shadow-xl bg-white/80 backdrop-blur rounded-3xl">
        <Confetti
          className="z-100 top-[50%] right-[50%]"
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={800}
        />
        <div className="flex flex-col items-center mb-6">
          <img src={myImage} alt="Success" className="object-contain w-40 h-40 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700">قرارمون ست شد!</h2>
          <p className="mt-1 text-blue-500">جزئیات:</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
            <span className="font-semibold text-blue-700">تاریخ</span>
            <span className="text-gray-700">{date || "—"}</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
            <span className="font-semibold text-blue-700">ساعت</span>
            <span className="text-gray-700">{time || "—"}</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
            <span className="font-semibold text-blue-700">مکان</span>
            <span className="text-gray-700">{place || "—"}</span>
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-lg font-medium text-blue-600">اسکرین شاتشو برام بفرست😅</p>
          <p className="text-lg font-medium text-blue-600">منتظرت هستم😃</p>
          <p className="mt-1 text-sm text-blue-400">پس حتماً آماده باش💙</p>
          <p className="mt-1 text-sm text-blue-400">مطمئنم کلی خوش میگذره :)</p>
        </div>

        <button
          onClick={onRestart}
          className="flex items-center justify-center w-full py-3 mt-6 text-white transition bg-blue-600 shadow-lg hover:bg-blue-700 rounded-xl active:scale-95"
        >
          دوباره از اول
        </button>
      </div>
    </div>
  );
}
