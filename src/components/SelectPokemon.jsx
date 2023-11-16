import React, { useState } from 'react';
import Pokemon from './Pokemon';
import pokemonList from '../data';

function SelectPokemon() {
  const [pokemonNumber, setPokemonNumber] = useState(0);
  const [filteredPokemon, setFilteredPokemon] = useState([...pokemonList]);

  const selected = (pokemonArray) => {
    if (pokemonNumber < pokemonArray.length - 1) {
      setPokemonNumber((prevNumber) => prevNumber + 1);
    } else {
      setPokemonNumber(0);
    }
  };

  const filterPokemonFunc = (type) => {
    const filter = pokemonList.filter((pokemon) => pokemon.type === type);
    setFilteredPokemon(filter);
    setPokemonNumber(0);
  };

  const returnAll = () => {
    setFilteredPokemon([...pokemonList]);
    setPokemonNumber(0);
  };

  const filterElement = pokemonList.reduce((array, element) => {
    if (!array.includes(element.type)) {
      array.push(element.type);
    }
    return array;
  }, []);

  return (
    <>
      <Pokemon pokemon={filteredPokemon[pokemonNumber]} />

      <button type="button" disabled={filteredPokemon.length === 1} onClick={() => selected(filteredPokemon)}>
        Próximo pokémon
      </button>

      {filterElement.map((element) => (
        <button type="button" key={element.type} onClick={() => filterPokemonFunc(element)}>
          {element}
        </button>
      ))}
      <div>
        <button type="button" onClick={returnAll}>All</button>
      </div>
    </>
  );
}

export default SelectPokemon;
