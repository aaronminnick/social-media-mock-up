import React from 'react';
import UserBoxButton from './UserBoxButton.js';
import UserDescription from './UserDescription.js';
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

const user = {
  userName: 'Jacob',
  description: 'a cool dude'
}

function UserBox(){
  return (
    <React.Fragment>
      <img src={Jacob} alt="Jacob's avatar"/>
      {buttons.map((button, index) =>
        <UserBoxButton text={button.text}
        key={index}/>
      )}
      <UserDescription text={user.description} />
    </React.Fragment>
  );
}

export default UserBox;