import React from 'react';
import UserBox from './UserBox.js';
import UserDescription from './UserDescription.js';

const user = {
  userName: 'Jacob',
  description: 'a cool dude'
}

function UserColumn(props){
  return (
    <React.Fragment>
      <UserBox />
      <UserDescription description={user.description}/>
    </React.Fragment>
  );
}

export default UserColumn;