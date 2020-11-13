import React, { Component } from 'react'
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import TrafficContext from './context/TrafficContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signalColor: 'red',
    }
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({ signalColor: color})
  }

  render() {
    return (
      <TrafficContext.Provider value={{
        signalColor: this.state.signalColor,
        changeSignal: this.changeSignal
      }}>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </TrafficContext.Provider>
    )
  }
}

export default App;
