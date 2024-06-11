import React from 'react';
import { createContext, useState } from 'react';
import Child from './Child';

export const DataContext = createContext();

const UseContextHook = () => {

  const [name, setName] = useState('Monank');

  return (
    <div>
      <DataContext.Provider value={name} >
        <Child />
      </DataContext.Provider>
    </div>
  )
}

export default UseContextHook