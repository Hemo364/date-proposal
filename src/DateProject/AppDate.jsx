import React, { useRef, useState } from "react";
import NotToCome from "./NotToCome";
import CatMessage from "./CatMessage";
import catMascot from "./Assets/AAbii.jpeg";
const AppDate = () => {
  const containerRef = useRef(null);
  const noBtnRef = useRef(null);

  const [step, setStep] = useState("ask");

  if (step === "NoComponent") {
    return (
      <NotToCome
        onAccept={() => setStep("catA")}
        onDecline={() => setStep("catB")}
      />
    );
  }

  if (step === "catA") {
    return (
      <CatMessage text="آفرین!... hsm_364m البته این سایت ادامه داره بقیشو بعدا‌ تو دایرکت‌میفرستم برات🤗" />
    );
  }

  if (step === "catB") {
    return (
      <CatMessage
        text="اکسپت کن...!😤"
        buttonText="Next"
        onButtonClick={() => setStep("catC")}
      />
    );
  }

  if (step === "catC") {
    return (
      <CatMessage
        text="خواهش میکنم...🥺"
        buttonText="Next"
        onButtonClick={() => setStep("ask")}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-screen px-4 overflow-hidden cat-bg-pattern h-dvh"
    >
      <img
                src={catMascot}
                alt="گربه"
                className="object-contain mb-4 border-r rounded-md h-25 w-25 drop-shadow-md"
              />

      <h1 className="mt-4 cat-heading">سلام یگانه خوبی؟🙂</h1>

      <h1 className="mt-4 cat-heading">میگم ریکوئستمو اکسپت نمیکنی؟😪</h1>

      <div className="flex flex-col items-center gap-3 mt-6">
        <button
          type="button"
          onClick={() => setStep("catA")}
          className="py-3 cat-btn-primary px-7"
        >
          اکسپت میکنم...🙄
        </button>

        <button
          type="button"
          ref={noBtnRef}
          onClick={() => setStep("NoComponent")}
          className="py-3 mt-20 cat-btn-outline px-7"
        >
          نه نمیکنم😒
        </button>
      </div>
    </div>
  );
};

export default AppDate;
