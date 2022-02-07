import React from 'react';
import UserBox from './UserBox';
import UserDescription from './UserDescription';

function UserColumn(props){
  return (
    <React.Fragment>
      <UserBox />
      <UserDescription />
    </React.Fragment>
  );
}