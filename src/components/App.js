import React from 'react';
import HeaderBar from './HeaderBar.js';
import UserColumn from './UserColumn.js';
import FeedColumn from './FeeeColumn.js';
import ContactsColumn from './ContactsColumn.js';

function App() {
  return (
    <React.Fragment>
      <HeaderBar />
      <div class="container">
        <div class="row">
          <div class="col-4">
            <UserColumn />
          </div>
          <div class="col-4">
            <FeedColumn />
          </div>
          <div class="col-4">
            <ContactsColumn />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;