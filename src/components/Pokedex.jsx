import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

function Pokedex({ pokemonList }) {
  return (
    <>
      <h1> Pokédex </h1>
      <div className="pokedex">
        {pokemonList.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      averageWeight: PropTypes.shape({
        value: PropTypes.number.isRequired,
        measurementUnit: PropTypes.string.isRequired,
      }).isRequired,
      image: PropTypes.string.isRequired,
      moreInfo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Pokedex;
