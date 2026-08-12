import React, { useMemo, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import catMascot from "./Assets/HellokKitty.png";

const PLACES = ["کافه منوچهری🏡", "کافه مون🌓", "کافه دارچین☕", "کافه وی🧁", "کافه ایوار🧱", "کافه باجان🍵","کافه نوفه🍫", "یه جای دیگه🙂"];

const SetDate = ({ onBack, onNext, initialValue }) => {
  const [selectedTime, setSelectedTime] = useState(initialValue?.time ?? "");
  const [selectedDate, setSelectedDate] = useState(initialValue?.date ?? "");
  const [selectedPlace, setSelectedPlace] = useState(initialValue?.place ?? "");

  const canNext = useMemo(() => {
    return Boolean(selectedTime) && Boolean(selectedDate) && Boolean(selectedPlace);
  }, [selectedTime, selectedDate, selectedPlace]);

  return (
    <div
      className="cat-bg-pattern flex flex-col items-center w-screen px-4 py-6 overflow-y-auto min-h-dvh"
    >
      <div className="cat-card flex flex-col items-center w-full max-w-sm p-6 pb-6 mt-6">
        <img
          src={catMascot}
          alt="گربه"
          className="w-16 h-16 mb-2 object-contain drop-shadow-md"
        />

        <h1 className="cat-heading">
          آفرییین حالا دختر خوبی شدی😄
        </h1>

        <h1 className="cat-heading mt-4">
          چه روزی ؟
        </h1>

        <div className="w-full mt-4">
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={selectedDate}
            onChange={(date) => setSelectedDate(date?.format("YYYY/MM/DD"))}
            calendarPosition="bottom-center"
            inputClass="w-86 px-4 py-3 bg-white border border-(--cat-black)/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--cat-pink-deep)"
            placeholder="انتخاب تاریخ"
          />
        </div>

        <h1 className="cat-heading mt-4">
          چه ساعتی؟
        </h1>

        <div className="w-full mt-4">
          <label className="block mb-2 font-semibold text-(--cat-black)">
            ساعت رو انتخاب کن:
          </label>

          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            placeholder="انتخاب ساعت"
            className="px-4 py-3 bg-white border border-(--cat-black)/15 w-86 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--cat-pink-deep)"
          />
        </div>

        <h3 className="cat-heading mt-6 text-lg">
          کجا؟
        </h3>

        <div className="grid w-full grid-cols-2 gap-2 mt-3">
          {PLACES.map((place) => {
            const active = selectedPlace === place;

            return (
              <button
                key={place}
                type="button"
                onClick={() => setSelectedPlace(place)}
                className={`px-4 py-3 rounded-xl shadow-sm border transition text-right
                ${active
                    ? "text-(--cat-black) border-(--cat-pink-deep)"
                    : "bg-white text-(--cat-black) border-(--cat-black)/15"
                  }`}
                style={active ? { backgroundColor: "var(--cat-pink)" } : undefined}
              >
                {place}
              </button>
            );
          })}
        </div>

        <div className="flex w-full gap-3 pt-6 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="cat-btn-outline w-1/3 py-3"
          >
            Back
          </button>

          <button
            type="button"
            disabled={!canNext}
            onClick={() =>
              onNext({
                time: selectedTime,
                date: selectedDate,
                place: selectedPlace,
              })
            }
            className="cat-btn-primary w-2/3 py-3"
          >
            Next✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetDate;
