import React from 'react';
import NavBar from './NavBar.js';
import SearchBar from './SearchBar.js';
import TweetButton from './TweetButton.js';

function HeaderBar() {
  return (
    <div className="header">
      <NavBar />
      <div className='nav-right'>
        <SearchBar />
        <TweetButton />
      </div>
      <hr/>
    </div>
  );
}

export default HeaderBar;