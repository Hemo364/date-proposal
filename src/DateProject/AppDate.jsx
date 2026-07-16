import React, { useRef, useState } from "react";
import SetDate from "./SetDate";
import DateSummary from "./DateSummary";
import bgImage from "./Assets/bigger_blue_background.png"; // اطمینان حاصل کنید مسیر عکس در پروژه شما درست است

const AppDate = () => {
  const containerRef = useRef(null);
  const noBtnRef = useRef(null);
  const lastTrigger = useRef(0);

  const [noPos, setNoPos] = useState(null);
  const [noTextIndex, setNoTextIndex] = useState(0);
  const noTexts = [
    "No",
    "نهه؟",
    "اشتباهی دستت خورده آره؟",
    "واقعا نهه؟",
    "دلت میاد؟",
    "😢?",
    "واقعا واقعا نهه؟😔",
    "متاسفم چون",
    "چاره ای نداری😊",
  ];
  const [step, setStep] = useState("ask");
  const [info, setInfo] = useState({ date: "", time: "", place: "" });

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
    const safeWidth = 160;
    const safeHeight = 60;

    const maxLeft = window.innerWidth - 40 - safeWidth - padding;
    const maxTop = window.innerHeight - 40 - safeHeight - padding;

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
        onNext={({ date, time, place }) => {
          setInfo({ date, time, place });
          setStep("done");
        }}
      />
    );
  }

  if (step === "done") {
    return (
      <DateSummary
        date={info.date}
        time={info.time}
        place={info.place}
        onRestart={() => {
          setInfo({ date: "", time: "", place: "" });
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
      className="relative flex flex-col items-center justify-center w-screen px-4 overflow-hidden bg-center bg-no-repeat bg-cover h-dvh"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <i className="text-6xl animate-bounce">️🫧</i>

      <h1 className="px-5 py-3 mt-4 text-xl font-semibold text-center text-white bg-blue-600 shadow-md rounded-2xl">
        Hello dear Mahya
      </h1>

      <h1 className="px-5 py-3 mt-4 text-xl font-semibold text-center text-white bg-blue-600 shadow-md rounded-2xl">
        ?will you go on a date with me
      </h1>

      <div className="flex flex-col items-center gap-3 mt-6">
        <button
          type="button"
          onClick={() => setStep("set")}
          className="py-3 text-white transition bg-blue-700 shadow-lg hover:bg-blue-800 px-7 rounded-xl active:scale-95"
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
            className={`bg-sky-400 text-white px-7 py-3 mt-20 rounded-xl shadow-lg transition-all duration-150 z-50 ${
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
