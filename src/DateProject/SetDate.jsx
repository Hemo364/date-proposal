import { useState } from "react";

const places = [
  "Cafe Rooz",
  "Tehroon Cafe",
  "Black Milk",
  "Cafe Deh",
  "Mokh Cafe",
  "Navid Cafe",
];

export default function SetDate({ onNext, onBack }) {
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");

  const canNext = time && place;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canNext) return;
    onNext({ time, place });
  };

  return (
    <div className="w-full max-w-md p-6 bg-white border border-pink-100 shadow-xl rounded-3xl">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-pink-600">
          حالا زمان و مکان رو انتخاب کن
        </h2>
        <p className="text-sm text-gray-500">
          یه وقت خوب و یه کافه خوب انتخاب کن ☕
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            ساعت
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 outline-none rounded-2xl focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            کافه
          </label>
          <div className="grid grid-cols-2 gap-3">
            {places.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlace(p)}
                className={`rounded-2xl px-3 py-3 text-sm font-medium border transition ${
                  place === p
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-4 py-3 font-semibold text-gray-700 border border-gray-200 rounded-2xl"
          >
            Back
          </button>

          <button
            type="submit"
            disabled={!canNext}
            className={`flex-1 rounded-2xl px-4 py-3 font-semibold transition ${
              canNext
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
