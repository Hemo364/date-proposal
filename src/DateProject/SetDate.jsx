import React, { useMemo, useState } from "react";

const PLACES = ["کافه منوچهری🏡", "کافه مون🌓", "کافه دارچین☕", "کافه وی🧁","کافه ایوار🧱","یه جای دیگه🙂"];

const SetDate = ({ onBack, onNext, initialValue }) => {
  const [selectedTime, setSelectedTime] = useState(initialValue?.time ?? "");
  const [selectedPlace, setSelectedPlace] = useState(initialValue?.place ?? "");

  const canNext = useMemo(() => {
    return Boolean(selectedTime) && Boolean(selectedPlace);
  }, [selectedTime, selectedPlace]);

  return (
    
    <div className="flex flex-col items-center w-screen px-4 py-6 overflow-hidden bg-pink-100 h-dvh">
      <h1 className="px-5 py-3 mt-2 text-xl font-semibold text-center text-white bg-pink-500 rounded-xl">
        چه ساعتی؟
      </h1>

      <div className="w-full max-w-sm mt-4">
        <label className="block mb-2 font-semibold text-pink-700">
          ساعت رو انتخاب کن:
        </label>

        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <h3 className="px-8 py-2 mt-6 text-lg font-semibold text-center text-white bg-pink-500 rounded-xl">
        کجا؟
      </h3>

      <div className="grid w-full max-w-sm grid-cols-2 gap-2 mt-3">
        {PLACES.map((place) => {
          const active = selectedPlace === place;
          return (
            <button
              key={place}
              type="button"
              onClick={() => setSelectedPlace(place)}
              className={`px-4 py-3 rounded-xl shadow-sm border transition text-right
                ${
                  active
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white text-pink-700 border-pink-200"
                }`}
            >
              {place}
            </button>
          );
        })}
      </div>

      <div className="flex w-full max-w-sm gap-3 pt-6 mt-auto">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center justify-center w-1/3 py-3 text-pink-700 bg-white border border-pink-200 shadow-sm rounded-xl"
        >
          Back
        </button>

        <button
          type="button"
          disabled={!canNext}
          onClick={() => onNext({ time: selectedTime, place: selectedPlace })}
          className={`w-2/3 py-3 rounded-xl shadow-lg transition flex items-center justify-center ${
            canNext
              ? "bg-pink-600 text-white active:scale-95"
              : "bg-pink-300 text-white/70 cursor-not-allowed"
          }`}
        >
          Next✨
        </button>
      </div>
    </div>
  );
};

export default SetDate;
