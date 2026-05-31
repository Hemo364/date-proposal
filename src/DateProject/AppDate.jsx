import { useEffect, useRef, useState } from "react";
import SetDate from "./SetDate";
import DateSummary from "./DateSummary";

export default function AppDate() {
  const [step, setStep] = useState("ask");
  const [dateData, setDateData] = useState({
    time: "",
    place: "",
  });

  const containerRef = useRef(null);
  const noBtnRef = useRef(null);

  const [noPos, setNoPos] = useState({
    x: 0,
    y: 0,
  });

  const [isNoReady, setIsNoReady] = useState(false);

  const moveNo = () => {
    const container = containerRef.current;
    const btn = noBtnRef.current;

    if (!container || !btn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const padding = 12;

    const maxX = containerRect.width - btnRect.width - padding;
    const maxY = containerRect.height - btnRect.height - padding;

    if (maxX <= 0 || maxY <= 0) return;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    setNoPos({ x, y });
    setIsNoReady(true);
  };

  useEffect(() => {
    // بعد از رندر اولیه، یک بار دکمه را جابه‌جا کن تا موقعیت اولیه درست ثبت شود
    const t = requestAnimationFrame(() => {
      moveNo();
    });

    return () => cancelAnimationFrame(t);
  }, []);

  const handleYes = () => {
    setStep("set");
  };

  const handleNoPointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    moveNo();
  };

  const handleNoMouseEnter = () => {
    moveNo();
  };

  const handleNoPointerEnter = () => {
    moveNo();
  };

  const handleSetDateNext = (data) => {
    setDateData(data);
    setStep("done");
  };

  const handleRestart = () => {
    setStep("ask");
    setDateData({ time: "", place: "" });
    setIsNoReady(false);

    requestAnimationFrame(() => {
      moveNo();
    });
  };

  return (
    <div className="flex items-center justify-center px-4 py-6 min-h-dvh bg-pink-50">
      {step === "ask" && (
        <div
          ref={containerRef}
          className="relative w-full max-w-md h-[320px] rounded-3xl bg-white shadow-xl border border-pink-100 overflow-hidden flex flex-col items-center justify-center px-6"
        >
          <div className="mb-8 text-center">
            <div className="mb-4 text-5xl animate-floaty">💖</div>
            <h1 className="mb-2 text-2xl font-bold text-pink-600">
              می‌خوای با من دیت بری؟
            </h1>
            <p className="text-sm text-gray-500">
              فقط یه جواب درست وجود داره 😌
            </p>
          </div>

          <div className="relative flex items-center justify-center w-full gap-4">
            <button
              type="button"
              onClick={handleYes}
              className="px-6 py-3 font-semibold text-white transition bg-pink-500 shadow-md rounded-2xl active:scale-95"
            >
              Yes
            </button>

            <button
              ref={noBtnRef}
              type="button"
              onPointerDown={handleNoPointerDown}
              onPointerEnter={handleNoPointerEnter}
              onMouseEnter={handleNoMouseEnter}
              className={`px-6 py-3 rounded-2xl bg-gray-200 text-gray-700 font-semibold shadow-md transition-all duration-200 select-none touch-none ${
                isNoReady ? "absolute" : "relative"
              }`}
              style={
                isNoReady
                  ? {
                      left: `${noPos.x}px`,
                      top: `${noPos.y}px`,
                    }
                  : undefined
              }
            >
              No
            </button>
          </div>
        </div>
      )}

      {step === "set" && (
        <SetDate onNext={handleSetDateNext} onBack={() => setStep("ask")} />
      )}

      {step === "done" && (
        <DateSummary
          time={dateData.time}
          place={dateData.place}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
