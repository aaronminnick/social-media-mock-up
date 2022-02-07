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
      <div className="nav-bar btn-group btn-group-toggle" data-toggle="buttons">
        {buttons.map((button, index) =>
          <NavBarButton text={button.text}
            key={index} />
        )}
      </div>
    </React.Fragment>
  );
}

export default NavBar;