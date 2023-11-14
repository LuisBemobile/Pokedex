import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';


const Pokedex = ({ pokemonList }) => { 

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
};

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
    })
  ).isRequired,
};

Pokedex.defaultProps = {
  pokemonList: [],
};

export default Pokedex;
