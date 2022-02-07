import React from 'react';
import UserBoxButton from './UserBoxButton.js';
import {Jacob} from '../img/img.js';

const buttons = [
  {
    text: 'Tweets'
  },
  {
    text: 'Following'
  },
  {
    text: 'Fololowers'
  },
]

function UserBox(){
  return (
    <React.Fragment>
      <img className="user-box-image" src={Jacob} alt="Jacob's avatar"/>
      {buttons.map((button, index) =>
        <UserBoxButton text={button.text}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default UserBox;