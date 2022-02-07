import React from 'react';
import FeedColumnHeader from './FeedColumnHeader';
import FeedItem from './FeedItem.js';
import {Barney, PJ, BabyBop} from '../img/img.js';

const items = [
  {
    image: Barney,
    user: 'Barney',
    text: 'I love you',
    replies: [
      {
        image: PJ,
        user: 'PJ',
        text: 'dope man, I love you too!'
      },
      {
        image: BabyBop,
        user: 'Baby Bop',
        text: 'We\'re a happy family!'
      }
    ]
  },
  {
    image: PJ,
    user: 'PJ',
    text: 'I\'m a dinosaur, lol',
    replies: []
  }
]

function UserColumn(props){
  return (
    <React.Fragment>
      <FeedColumnHeader />
      {items.map((item, index) =>
        <FeedItem image={item.image}
          user={item.user}
          text={item.text}
          replies={item.replies}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default UserColumn;