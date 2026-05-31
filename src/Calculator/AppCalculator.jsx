import React, { useState } from 'react';
import Buttons from './Buttons.jsx';
import './AppCalculator.css';   // فایل جدید استایل

const AppCalculator = () => {
    const [display, setDisplay] = useState("0");
    const [firstNum, setFistNum] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleButtonClick = (e) => {
        if (!isNaN(e)) {
            setDisplay(display === "0" ? String(e) : display + String(e));
        }

        if (["+", "-", "*", "/"].includes(e)) {
            setFistNum(display);
            setDisplay("0");
            setOperator(e);
        }

        if (e === "=") {
            const a = Number(firstNum);
            const b = Number(display);

            switch (operator) {
                case "+": setDisplay(String(a + b)); break;
                case "-": setDisplay(String(a - b)); break;
                case "*": setDisplay(String(a * b)); break;
                case "/": setDisplay(String(a / b)); break;
                default: break;
            }

            setFistNum(null);
            setOperator(null);
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                {display}
            </div>

            <Buttons handleButtonClick={handleButtonClick} />
        </div>
    );
};

export default AppCalculator;
