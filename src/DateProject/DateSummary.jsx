export default function DateSummary({ time, place, onRestart }) {
  return (
    <div className="w-full max-w-md p-6 text-center bg-white border border-pink-100 shadow-xl rounded-3xl">
      <div className="mb-4 text-5xl">🎉</div>

      <h2 className="mb-3 text-2xl font-bold text-pink-600">
        عالیه! قرارمون ثبت شد
      </h2>

      <div className="p-4 mb-5 space-y-2 text-gray-700 bg-pink-50 rounded-2xl">
        <p>
          <span className="font-semibold">ساعت:</span> {time}
        </p>
        <p>
          <span className="font-semibold">مکان:</span> {place}
        </p>
      </div>

      <p className="mb-5 text-sm text-gray-500">
        منتظر یه قرار خوشگل و قشنگ باش 💕
      </p>

      <button
        type="button"
        onClick={onRestart}
        className="px-5 py-3 font-semibold text-white bg-gray-900 rounded-2xl"
      >
        Restart
      </button>
    </div>
  );
}
