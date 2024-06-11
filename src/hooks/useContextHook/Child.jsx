import React from 'react';
import { useContext } from 'react';
import { DataContext } from './UseContextHook';

const Child = () => {
    const data = useContext(DataContext);
    console.log(data);
    return (
        <div>my name is {data}</div>
    )
}

export default Child