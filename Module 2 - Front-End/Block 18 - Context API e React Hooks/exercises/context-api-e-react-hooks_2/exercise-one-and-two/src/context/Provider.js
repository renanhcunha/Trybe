// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [redCar, setRed] = useState(false);
  const [blueCar, setBlue] = useState(false);
  const [yellowCar, setYellow] = useState(false);
  const [signal, setSignal] = useState('red');

  const moveCar = (car, side) => {
    switch (car) {
      case 'redCar':
        return setRed(side)
      case 'blueCar':
        return setBlue(side)
      case 'yellowCar':
        return setYellow(side)
      default:
        return car;
    }
  }

  const changeSignal = (signalColor) => {
    setSignal(signalColor)
  };

  const context = { redCar, blueCar, yellowCar, signal, moveCar, changeSignal }


  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
