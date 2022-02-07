import React from 'react';
import PropTypes from 'prop-types';

function UserBoxButton(props) {
  return (
    <button class="btn">
      {props.text}
    </button>
  );
}

UserBoxButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default UserBoxButton;