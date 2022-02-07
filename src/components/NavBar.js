import React from 'react';
import NavBarButton from './NavBarButton.js';

const buttons = [
  {
    text: "Home"
  },
  {
    text: "Notifications"
  },
  {
    text: "Messages"
  }
]

function NavBar(){
  return(
    <React.Fragment>
    {buttons.map((button, index) =>
      <NavBarButton text={button.text}
        key={index} />
    )}
    </React.Fragment>
  );
}

export default NavBar;