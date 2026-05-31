import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [Count, Counting] = useState(0);
    const [notif, checknotif] = useState(null);
    useEffect(() => {
        if (Count % 10 === 0 && Count !== 0) {
            checknotif(`you reach ${Count}`);
            setTimeout(() => { checknotif(null) }, 2000);
        }
    }, [Count]);
    { Count }
    const Info = Count % 2 === 0 ? "Even" : "Odd";

    return (
        <div>
            <div className='showNum'>
                 count is : {Count }    
                  state is :
                 {Info}
            </div>
            <div className='+BTN'>
                <button onClick={() => {
                    Counting(Count + 1)
                }}>+</button>
            </div>
            <div className='-BTN'>
                <button onClick={() => {
                    Counting(Count - 1)
                }}>-</button>
            </div>
            <div className='Trigger'><button onClick={() => { Counting(0) }}>باز نشانی عدد</button></div>
            <div className='Notification'>{notif}</div>
        </div>
    );
};

export default Counter;