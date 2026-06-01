import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import myImage from "./Assets/downloadNB.png"; // مسیر را چک کنید

export default function DateSummary({ time, place, onRestart }) {
  // برای موبایل فرندلی بودن، ابعاد صفحه را می‌گیریم
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
    <div className="relative flex flex-col items-center justify-center p-4 overflow-hidden min-h-dvh bg-gradient-to-b from-pink-100 to-pink-200">

      {/* کامپوننت بارش کاغذ رنگی */}


      <div className="z-10 w-full max-w-sm p-6 border border-pink-200 shadow-xl bg-white/80 backdrop-blur rounded-3xl">
        <Confetti
          className=" z-100 top-[50%] right-[50%]"
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false} // اگر می‌خواهید مداوم ببارد این را true کنید
          numberOfPieces={800}
        />
        <div className="flex flex-col items-center mb-6">
          <img src={myImage} alt="Success" className="object-contain w-40 h-40 mb-4" />
          <h2 className="text-2xl font-bold text-pink-700">قرارمون ست شد!</h2>
          <p className="mt-1 text-pink-500">جزئیات:</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-pink-50">
            <span className="font-semibold text-pink-700">ساعت</span>
            <span className="text-gray-700">{time || "—"}</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-pink-50">
            <span className="font-semibold text-pink-700">مکان</span>
            <span className="text-gray-700">{place || "—"}</span>
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-lg font-medium text-pink-600">منتظرت هستم😃</p>
          <p className="mt-1 text-sm text-pink-400">پس حتماً آماده باش💗</p>
          <p className="mt-1 text-sm text-pink-400">مطمئنم کلی خوش میگذره :)</p>
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
}
