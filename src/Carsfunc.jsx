import React, { useContext } from 'react'
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

export default function Carsfunc() {
  const { cars, moveCar } = useContext(CarsContext);
  const { redCar, blueCar, yellowCar } = cars;
  return (
    <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar({...cars, redCar: !redCar})}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar({...cars, blueCar: !blueCar})}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar({...cars, yellowCar: !yellowCar})}
          type="button"
        >
          Move
      </button>
      </div>
    </div>
  )
}
