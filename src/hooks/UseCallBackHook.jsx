import React, { useCallback, useState } from 'react'

const ChildComponent = React.memo(({ increment }) => {
    return (
        <button onClick={increment}>Increment</button>
    )
});


const UseCallBackHook = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);
    return (
        <div>
            <p>Count: {count}</p>
            <ChildComponent increment={handleIncrement} />
        </div>
    )
}

export default UseCallBackHook