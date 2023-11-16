import React from 'react';
import PropTypes from 'prop-types';

function Pokemon({ pokemon }) {
  const {
    name, type, averageWeight, image,
  } = pokemon;

  return (
    <div className="pokemon">
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight:
          <span>
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </span>
        </p>
      </div>
      <img src={image} alt={`${name}`} />
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
