import React, { useEffect } from 'react';
import { useRef } from 'react';

const UseRefHook = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <label>Type your name
                <input
                    type='text'
                    ref={inputRef}
                />
            </label>
        </div>
    )
}

export default UseRefHook