import React from 'react';
import UserBox from './UserBox.js';
import UserDescription from './UserDescription.js';

function UserColumn(props){
  return (
    <React.Fragment>
      <UserBox />
      <UserDescription />
    </React.Fragment>
  );
}

export default UserColumn;