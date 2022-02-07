import React from 'react';
import HeaderBar from './HeaderBar.js';
import UserColumn from './UserColumn.js';
import FeedColumn from './FeedColumn.js';
import ContactsColumn from './ContactsColumn.js';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <HeaderBar />
        </div>
        <div className="row">
          <div className="col-4">
            <UserColumn />
          </div>
          <div className="col-4">
            <FeedColumn />
          </div>
          <div className="col-4">
            <ContactsColumn />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;