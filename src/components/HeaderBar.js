import React from 'react';
import NavBar from './NavBar.js';
import SearchBar from './SearchBar.js';
import TweetButton from './TweetButton.js';

function HeaderBar() {
  return (
    <React.Fragment>
      <NavBar />
      <SearchBar />
      <TweetButton />
    </React.Fragment>
  );
}

export default HeaderBar;