import React from 'react';
import FeedStatusInput from './FeedStatusInput.js'

function FeedColumnHeader(){
  return (
    <React.Fragment>
      <FeedStatusInput />
      <hr/>
    </React.Fragment>
  );
}

export default FeedColumnHeader;