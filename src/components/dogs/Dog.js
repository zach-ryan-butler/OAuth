import React from 'react';
import PropTypes from 'prop-types';

function Dogs({ name }) {
  return (
    <>
      <p>{name}</p>
    </>
  );
}

Dogs.propTypes = {
  name: PropTypes.string.isRequired
};

export default Dogs;
