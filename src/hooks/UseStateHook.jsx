import React from 'react';
import { useState } from 'react';

const UseStateHook = () => {
    const [count, setCount] = useState(0); // initial value is 0
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseStateHook