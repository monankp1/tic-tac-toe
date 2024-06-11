import React, { useState } from 'react'
import { useMemo } from 'react';


const expensiveCalculation = (n) => {
    return n * 2;
}

const UseMemoHook = () => {
    const [numberOne, setNumberOne] = useState(1);
    const [numberTwo, setNumberTwo] = useState(1);

    const calculation = useMemo(() => expensiveCalculation(numberOne), [numberOne]);

    return (
        <div>
            <p>Number: {numberOne}</p>
            <p>Number Two: {numberTwo}</p>
            <p>Calculation: {calculation}</p>
            <button onClick={() => setNumberOne(numberOne + 1)}>Update Number One</button>
            <button onClick={() => setNumberTwo(numberTwo + 1)}>Update Number Two</button>
        </div>
    )
}

export default UseMemoHook