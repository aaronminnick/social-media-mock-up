import React from "react";

function FeedItemReply(props) {
  return (
    <React.Fragment>
      <img src={props.image} alt="contact"/>
      <h4>{props.user}</h4>
      <p>{props.text}</p>
      <hr/>
    </React.Fragment>
  );
}

export default FeedItemReply;