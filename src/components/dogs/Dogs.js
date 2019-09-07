import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogElements = dogs.map(dog => {
    return (
      <li key={dog.name}>
        <Dog name={dog.name}/>
      </li>
    );
  });

  return (
    <ul>
      {dogElements}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Dogs;
