import React from 'react';
import PropTypes from 'prop-types';

function UserBoxButton(props) {
  return (
    <button className="btn box-button">
      {props.text}
    </button>
  );
}

UserBoxButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default UserBoxButton;