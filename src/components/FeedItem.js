import React from 'react';
import FeedItemReply from './FeedItemReply.js'

function FeedItem(props) {
  return (
    <React.Fragment>
      <div className="row feed-item">
        <div className="col-3">
          <img className="feed-img" src={props.image} alt="" />
        </div>
        <div className="col-9">
          <h5>{props.user}</h5>
          <p>{props.text}</p>
        </div>
      </div>
      <hr/>
      {props.replies.map((item, index) =>
        <FeedItemReply image={item.image}
          user={item.user}
          text={item.text}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default FeedItem;