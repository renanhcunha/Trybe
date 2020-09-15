import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (pokemons.map(pokemon => (
      <div className='pokemon-container' key={pokemon.id}>
        <Pokemon name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image}/>
      </div>
    )));
  }
}

export default Pokedex;