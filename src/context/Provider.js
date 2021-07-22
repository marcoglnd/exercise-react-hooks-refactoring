import React, { useState } from 'react'
import CarsContext from './CarsContext';

export default function Provider({ children }) {
  const [redCar, setRedCar] = useState(false)
  const [blueCar, setBlueCar] = useState(false)
  const [yellowCar, setYellowCar] = useState(false)

  return (
    <CarsContext.Provider value={ { redCar, setRedCar, blueCar, setBlueCar, yellowCar, setYellowCar } }>
      {children}
    </CarsContext.Provider>
  )
}
