import React from 'react';
import './Buttons.css';  // فایل CSS مخصوص دکمه‌ها

const Buttons = (props) => {
    return (
        <div className="buttons-container">

            <div className="numbers-grid">
                <button className="btn number" onClick={() => props.handleButtonClick(1)}>1</button>
                <button className="btn number" onClick={() => props.handleButtonClick(2)}>2</button>
                <button className="btn number" onClick={() => props.handleButtonClick(3)}>3</button>
                <button className="btn number" onClick={() => props.handleButtonClick(4)}>4</button>
                <button className="btn number" onClick={() => props.handleButtonClick(5)}>5</button>
                <button className="btn number" onClick={() => props.handleButtonClick(6)}>6</button>
                <button className="btn number" onClick={() => props.handleButtonClick(7)}>7</button>
                <button className="btn number" onClick={() => props.handleButtonClick(8)}>8</button>
                <button className="btn number" onClick={() => props.handleButtonClick(9)}>9</button>
                <button className="btn number zero" onClick={() => props.handleButtonClick(0)}>0</button>
            </div>

            <div className="operators-grid">
                <button className="btn operator" onClick={() => props.handleButtonClick("+")}>+</button>
                <button className="btn operator" onClick={() => props.handleButtonClick("-")}>-</button>
                <button className="btn operator" onClick={() => props.handleButtonClick("*")}>*</button>
                <button className="btn operator" onClick={() => props.handleButtonClick("/")}>/</button>
                <button className="btn equals" onClick={() => props.handleButtonClick("=")}>=</button>
            </div>

        </div>
    );
};

export default Buttons;
