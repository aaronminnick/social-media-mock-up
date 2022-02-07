import React from 'react';

function NavBarButton(props) {
  return (
    <React.Fragment>
      <label className="btn nav-button">
      <input type="radio" className="nav-choice" name="nav-choice">
      </input>
        {props.text}
      </label>
    </React.Fragment>
  );
}

export default NavBarButton;