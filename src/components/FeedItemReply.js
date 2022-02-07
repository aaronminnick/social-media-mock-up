import React from "react";

function FeedItemReply(props) {
  return (
    <React.Fragment>
      <div className="row feed-reply">
        <div className="col-1"></div>
        <div className="col-2">
          <img className="feed-img" src={props.image} alt="" />
        </div>
        <div className="col-9">
          <h5>{props.user}</h5>
          <p>{props.text}</p>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default FeedItemReply;