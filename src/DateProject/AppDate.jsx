import React, { useRef, useState } from "react";
import SetDate from "./SetDate";
import DateSummary from "./DateSummary";

const AppDate = () => {
  const containerRef = useRef(null);
  const noBtnRef = useRef(null);
  const lastTrigger = useRef(0);

  const [noPos, setNoPos] = useState(null);
  const [noTextIndex, setNoTextIndex] = useState(0);
  const noTexts = [
    "No",
    "نهه؟",
    "واقعا نهه؟",
    "دلت میاد؟",
    "😢?",
    "واقعا واقعا نهه؟😔",
    "متاسفم چون",
    "چاره ای نداری😊",
  ];

  const [step, setStep] = useState("ask");
  const [info, setInfo] = useState({ time: "", place: "" });

  const moveNo = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const now = Date.now();
    if (now - lastTrigger.current < 100) return;
    lastTrigger.current = now;

    const noBtn = noBtnRef.current;
    if (!noBtn) return;

    const padding = 20;
    // در نظر گرفتن طولانی‌ترین متن برای محاسبه حاشیه امن (حدود 160 پیکسل عرض و 60 پیکسل ارتفاع)
    const safeWidth = 160; 
    const safeHeight = 60;

    const maxLeft = window.innerWidth - safeWidth - padding;
    const maxTop = window.innerHeight - safeHeight - padding;

    const left = padding + Math.floor(Math.random() * Math.max(0, maxLeft));
    const top = padding + Math.floor(Math.random() * Math.max(0, maxTop));

    setNoPos({ left, top });
    setNoTextIndex((prev) => prev + 1);
  };

  if (step === "set") {
    return (
      <SetDate
        initialValue={info}
        onBack={() => setStep("ask")}
        onNext={({ time, place }) => {
          setInfo({ time, place });
          setStep("done");
        }}
      />
    );
  }

  if (step === "done") {
    return (
      <DateSummary
        time={info.time}
        place={info.place}
        onRestart={() => {
          setInfo({ time: "", place: "" });
          setNoPos(null);
          setNoTextIndex(0);
          setStep("ask");
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-screen px-4 overflow-hidden bg-pink-100 h-dvh"
    >
      <i className="text-6xl animate-bounce">🎀</i>

      <h1 className="px-5 py-3 mt-4 text-xl font-semibold text-center text-white bg-pink-500 rounded-2xl">
        Hello dear Melika
      </h1>

      <h1 className="px-5 py-3 mt-4 text-xl font-semibold text-center text-white bg-pink-500 rounded-2xl">
        ?will you go on a date with me
      </h1>

      <div className="flex flex-col items-center gap-3 mt-6">
        <button
          type="button"
          onClick={() => setStep("set")}
          className="py-3 text-white transition bg-pink-600 shadow-lg px-7 rounded-xl active:scale-95"
        >
          🙄Yes
        </button>

        {noTextIndex < noTexts.length && (
          <button
            type="button"
            ref={noBtnRef}
            onMouseEnter={moveNo}
            onPointerEnter={moveNo}
            onPointerDown={moveNo}
            className={`bg-pink-400 text-white px-7 py-3 mt-20 rounded-xl shadow-lg transition-all duration-150 z-50 ${
              noPos ? "fixed" : ""
            }`}
            style={
              noPos
                ? { left: `${noPos.left}px`, top: `${noPos.top}px` }
                : undefined
            }
          >
            {noTexts[noTextIndex]}
          </button>
        )}
      </div>
    </div>
  );
};

export default AppDate;
