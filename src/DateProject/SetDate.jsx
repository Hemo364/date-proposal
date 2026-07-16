import React, { useMemo, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import bgImage from "./Assets/bigger_blue_background.png";  // اطمینان حاصل کنید مسیر عکس در پروژه شما درست است

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
      className="flex flex-col items-center w-screen px-4 py-6 overflow-y-auto bg-center bg-no-repeat bg-cover min-h-dvh"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center w-full max-w-sm pb-6">
        <h1 className="px-10 py-3 mt-2 text-xl font-semibold text-center text-white shadow-sm bg-sky-400 rounded-xl">
          آفرییین حالا دختر خوبی شدی😄
        </h1>

        <h1 className="px-5 py-3 mt-4 text-xl font-semibold text-center text-white bg-blue-600 shadow-sm rounded-xl">
          چه روزی ؟
        </h1>

        <div className="w-full mt-4">
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={selectedDate}
            onChange={(date) => setSelectedDate(date?.format("YYYY/MM/DD"))}
            calendarPosition="bottom-center"
            inputClass="w-86 px-4 py-3 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="انتخاب تاریخ"
          />
        </div>

        <h1 className="px-5 py-3 mt-4 text-xl font-semibold text-center text-white bg-blue-600 shadow-sm rounded-xl">
          چه ساعتی؟
        </h1>

        <div className="w-full mt-4">
          <label className="block mb-2 font-semibold text-blue-800">
            ساعت رو انتخاب کن:
          </label>

          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            placeholder="انتخاب ساعت"
            className="px-4 py-3 bg-white border border-blue-200 w-86 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <h3 className="px-8 py-2 mt-6 text-lg font-semibold text-center text-white bg-blue-600 shadow-sm rounded-xl">
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
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-blue-800 border-blue-200"
                  }`}
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
            className="flex items-center justify-center w-1/3 py-3 text-blue-800 bg-white border border-blue-200 shadow-sm rounded-xl"
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
            className={`w-2/3 py-3 rounded-xl shadow-lg transition flex items-center justify-center ${canNext
                ? "bg-blue-600 text-white active:scale-95"
                : "bg-blue-300 text-white/70 cursor-not-allowed"
              }`}
          >
            Next✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetDate;
