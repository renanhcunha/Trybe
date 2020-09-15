import React from 'react';
import Pokedex from './Pokedex'
import './App.css';


function App() {
  return (
  <div className='App'>
    <header><h1>Pokedex</h1></header>
    <div className='pokedex-container'>
      <Pokedex />
    </div>
  </div>
  );
}

export default App;
