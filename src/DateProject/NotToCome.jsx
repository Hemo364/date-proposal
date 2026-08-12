import React, { useState } from 'react';
import catMascot from "./Assets/Meshkii.jpeg";

const counterMessages = [
    "0",
    "1🤨",
    "2😯",
    "3😕",
    "4🙄",
    "5😒",
    "6😟",
    "7😧",
    "8😰",
    "9😭",
    "10 باورم نمیشه....واقعا یعنی انقد محکم نمیخوای اکسپت کنی؟ پس 10 بار دیگه هم بزن💔",
    "11😰",
    "12😪",
    "13😡",
    "14😢",
    "15😟",
    "16😑",
    "17😡",
    "18😓",
    "19💔",
    "20 ایسگاتو گرفتم\n 100 بار دیگه هم بزنی نمیشه چون من برنامه نویس این سایتم😎\n\n نمیخوام نداریم باید بخوای فهمیدی بچه جون؟🐣"
];

const NotToCome = ({ onAccept, onDecline }) => {
    const [counterIndex, setCounterIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false); // وضعیت برای شروع چالش

    const handleNoClick = () => {
        if (counterIndex < counterMessages.length - 1) {
            setCounterIndex(prev => prev + 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen px-6 py-6 overflow-hidden cat-bg-pattern h-dvh">

            <div className="w-full max-w-sm p-6 text-center cat-card">
                <img
                    src={catMascot}
                    alt="گربه"
                    className="object-contain mx-auto mb-3 rounded-md h-18 w-18 drop-shadow-md"
                />

                <h2 className="mb-6 text-xl font-bold text-(--cat-black)">
                    عجب... پس دلت نمیخواد اکسپت کنی آره؟...😠
                </h2>

                <div className="flex flex-col gap-4">

                    {/* اگر هنوز شروع نکرده، فقط دکمه بعله را نشان بده */}
                    {!isStarted ? (
                        <button
                            onClick={() => setIsStarted(true)}
                            className="w-full py-3 cat-btn-outline"
                        >
                            بعله😏
                        </button>
                    ) : (
                        // اگر بعله را زد، این بخش ظاهر شود
                        <>
                            <p className="text-sm text-(--cat-black)/70">
                                {counterIndex < 20 ? "نه آخه اینجوری نیست که... باید 10 بار بزنی رو دکمه نمیخوام" : ""}
                            </p>

                            {/* دکمه اصلی نمیام */}
                            {counterIndex < 20 ? (
                                <button
                                    onClick={handleNoClick}
                                    className='w-full py-3 cat-btn-primary'
                                >
                                    نمیخوام!
                                </button>
                            ) : (
                                <div className="p-4 border-2 rounded-2xl animate-bounce" style={{ backgroundColor: "var(--cat-ivory-soft)", borderColor: "var(--cat-pink-deep)" }}>
                                    <p className="font-bold text-(--cat-black)">راه فراری نداری! 😂</p>
                                </div>
                            )}

                            {/* نمایش وضعیت شمارشگر */}
                            <div className="p-4 mt-2 font-medium text-center text-(--cat-black) whitespace-pre-line bg-(--cat-ivory-soft) border border-(--cat-black)/15 shadow-inner text-md rounded-2xl backdrop-blur-sm">
                                {counterMessages[counterIndex]}
                            </div>
                        </>
                    )}

                    {/* دکمه بازگشت فقط وقتی ظاهر می‌شود که به آخر لیست رسیده باشد */}
                    {counterIndex >= 20 && (
                        <div className="flex gap-3 mt-4 ">
                            <button
                                type="button"
                                onClick={onAccept}
                                className="flex-1 py-3 cat-btn-primary"
                            >
                                باشه 😌
                            </button>

                            <button
                                type="button"
                                onClick={onDecline}
                                className="flex-1 py-3 cat-btn-outline"
                            >
                                نه 😈
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotToCome;
