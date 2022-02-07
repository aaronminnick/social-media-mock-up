import React from 'react';

function NavBarButton(props) {
  return (
    <button class="btn">
      {props.text}
    </button>
  );
}

export default NavBarButton;