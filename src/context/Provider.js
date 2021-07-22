import React, { useState } from 'react';
import CarsContext from './CarsContext';

export default function Provider({ children }) {
  const [cars, moveCar] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });
  // const [blueCar, setBlueCar] = useState(false);
  // const [yellowCar, setYellowCar] = useState(false);
  const [color, changeSignal] = useState('red');

  const context = {
    cars, moveCar, color, changeSignal
  }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  )
}
