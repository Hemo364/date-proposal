import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import myImage from "./Assets/background_removed_image.png";

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
      className="cat-bg-pattern relative flex flex-col items-center justify-center p-4 overflow-hidden min-h-dvh"
    >
      <div className="cat-card z-10 w-full max-w-sm p-6">
        <Confetti
          className="z-100 top-[50%] right-[50%]"
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={800}
        />
        <div className="flex flex-col items-center mb-6">
          <img src={myImage} alt="Success" className="object-contain w-40 h-40 mb-4" />
          <h2 className="text-2xl font-bold text-(--cat-black)">قرارمون ست شد!</h2>
          <p className="mt-1 text-(--cat-pink-deep)">جزئیات:</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "var(--cat-ivory-soft)" }}>
            <span className="font-semibold text-(--cat-black)">تاریخ</span>
            <span className="text-(--cat-black)/70">{date || "—"}</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "var(--cat-ivory-soft)" }}>
            <span className="font-semibold text-(--cat-black)">ساعت</span>
            <span className="text-(--cat-black)/70">{time || "—"}</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "var(--cat-ivory-soft)" }}>
            <span className="font-semibold text-(--cat-black)">مکان</span>
            <span className="text-(--cat-black)/70">{place || "—"}</span>
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-lg font-medium text-(--cat-pink-deep)">اسکرین شاتشو برام بفرست😅</p>
          <p className="text-lg font-medium text-(--cat-pink-deep)">منتظرت هستم😃</p>
          <p className="mt-1 text-sm text-(--cat-black)/60">پس حتماً آماده باش💙</p>
          <p className="mt-1 text-sm text-(--cat-black)/60">مطمئنم کلی خوش میگذره :)</p>
        </div>

        <button
          onClick={onRestart}
          className="cat-btn-primary w-full py-3 mt-6"
        >
          دوباره از اول
        </button>
      </div>
    </div>
  );
}
