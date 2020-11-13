import React, { Component } from 'react'
import './App.css';
import Cars from './Cars';
import CarContext from './context/CarContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: !prevState.cars[car],
      }
    }))
  };

  render() {
    const contextValue = { cars: this.state.cars, moveCar: this.moveCar }
    return (
      <CarContext.Provider value={contextValue}>
        <Cars />
      </CarContext.Provider>
    )
  }
}

export default App;
