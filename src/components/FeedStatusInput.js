import React from 'react';
import { Jacob } from '../img/img';

function FeedStatusInput() {
  return (
    <React.Fragment>
      <div className="row feed-header">
        <div className="col-1"></div>
        <div className="col-2">
          <img className="feed-img" src={Jacob} alt="" />
        </div>
        <div className="col-9">
        <input className="status-input" type='text' placeholder="What's happening?"></input>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeedStatusInput;