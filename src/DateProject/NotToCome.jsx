import React, { useState } from 'react';
import bgImage from "./Assets/bigger_blue_background.png"; 

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
    "10 باورم نمیشه....واقعا یعنی انقد محکم نمیخوای بیای؟ پس 10 بار دیگه هم بزن💔",
    "11😰",
    "12😪",
    "13😡",
    "14😢",
    "15😟",
    "16😑",
    "17😡",
    "18😓",
    "19💔",
    "20 ایسگاتو گرفتم\n 100 بار دیگه هم بزنی نمیشه چون من برنامه نویس این سایتم😎\n\n نمیام نداریم باید بیای فهمیدی بچه جون؟🐣"
];

const NotToCome = ({ onBack }) => {
    const [counterIndex, setCounterIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false); // وضعیت برای شروع چالش

    const handleNoClick = () => {
        if (counterIndex < counterMessages.length - 1) {
            setCounterIndex(prev => prev + 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen px-6 py-6 overflow-hidden bg-center bg-no-repeat bg-cover h-dvh"
            style={{ backgroundImage: `url(${bgImage})` }}>
            
            <div className="w-full max-w-sm p-6 text-center shadow-2xl bg-white/90 backdrop-blur-sm rounded-3xl">
                
                <h2 className="mb-6 text-xl font-bold text-blue-800">
                    عجب... پس دلت نمیخواد بیایی آره؟...😠
                </h2>

                <div className="flex flex-col gap-4">
                    
                    {/* اگر هنوز شروع نکرده، فقط دکمه بعله را نشان بده */}
                    {!isStarted ? (
                        <button 
                            onClick={() => setIsStarted(true)}
                            className="flex justify-center w-full py-3 text-blue-800 transition border border-blue-200 shadow-sm bg-blue-50 rounded-xl active:scale-95"
                        >
                            بعله😏
                        </button>
                    ) : (
                        // اگر بعله را زد، این بخش ظاهر شود
                        <>
                            <p className="text-sm text-gray-600">
                                {counterIndex < 20 ? "نه آخه اینجوری نیست که... باید 10 بار بزنی رو دکمه نمیام" : "دیدی گفتم؟"}
                            </p>

                            {/* دکمه اصلی نمیام */}
                            {counterIndex < 20 ? (
                                <button 
                                    onClick={handleNoClick} 
                                    className='flex justify-center w-full py-3 font-bold text-center text-white transition bg-red-500 border-b-4 border-red-700 rounded-xl active:border-b-0 active:translate-y-1'
                                >
                                    نمیام!
                                </button>
                            ) : (
                                <div className="p-4 bg-yellow-100 border-2 border-yellow-400 rounded-2xl animate-bounce">
                                    <p className="font-bold text-yellow-800">راه فراری نداری! 😂</p>
                                </div>
                            )}

                            {/* نمایش وضعیت شمارشگر */}
                            <div className="p-4 mt-2 font-medium text-center text-blue-600 whitespace-pre-line bg-white border border-blue-100 shadow-inner text-md rounded-2xl">
                                {counterMessages[counterIndex]}
                            </div>
                        </>
                    )}

                    {/* دکمه بازگشت فقط وقتی ظاهر می‌شود که به آخر لیست رسیده باشد */}
                    {counterIndex >= 20 && (
                        <button
                            type="button"
                            onClick={onBack}
                            className="py-3 mt-4 text-center text-gray-600 underline transition-all decoration-dotted "
                        >
                            باشه بابا (برگشت به انتخاب کافه)
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotToCome;
