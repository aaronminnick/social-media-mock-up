import React from 'react';
import FeedItemReply from './FeedItemReply.js'

function FeedItem(props) {
  return (
    <React.Fragment>
      <img src={props.image} />
      <h4>{props.user}</h4>
      <p>{props.text}</p>
      {props.replies.map((item, index) =>
        <FeedItemReply image={item.image}
          user={item.user}
          text={item.reply}/>
      )}
      <hr/>
    </React.Fragment>
  );
}

export default FeedItem;