import React from 'react';

function NavBarButton(props) {
  return (
    <button className="btn">
      {props.text}
    </button>
  );
}

export default NavBarButton;