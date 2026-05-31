import React, { useRef, useState } from "react";
import SetDate from "./SetDate";
import DateSummary from "./DateSummary";

const AppDate = () => {
  const containerRef = useRef(null);
  const noBtnRef = useRef(null);

  const [noPos, setNoPos] = useState(null);

  // "ask" | "set" | "done"
  const [step, setStep] = useState("ask");

  // به جای date => time
  const [info, setInfo] = useState({
    time: "", // "HH:MM"
    place: "",
  });

  const moveNo = (e) => {
    // این خط از شیفت شدن لی‌اوت و کلیک شدن ناخواسته روی دکمه Yes جلوگیری می‌کند
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const container = containerRef.current;
    const noBtn = noBtnRef.current;
    if (!container || !noBtn) return;

    const c = container.getBoundingClientRect();
    const b = noBtn.getBoundingClientRect();

    const padding = 12;
    const maxLeft = c.width - b.width - padding;
    const maxTop = c.height - b.height - padding;

    const left = Math.floor(padding + Math.random() * Math.max(0, maxLeft));
    const top = Math.floor(padding + Math.random() * Math.max(0, maxTop));

    setNoPos({ left, top });
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
          Yes💗
        </button>

        <button
          type="button"
          ref={noBtnRef}
          onMouseEnter={moveNo}
          onPointerEnter={moveNo}
          onPointerDown={moveNo}
          className={`bg-pink-400 text-white px-7 py-12 rounded-xl shadow-lg transition-all duration-150 ${
            noPos ? "absolute" : ""
          }`}
          style={
            noPos ? { left: `${noPos.left}px`, top: `${noPos.top}px` } : undefined
          }
        >
          No
        </button>
      </div>
    </div>
  );
};

export default AppDate;
