import React from 'react';
import NavBar from './NavBar';

function Header(props) {
  return (
    <header>
      <NavBar />
      {props.children}
    </header>
  );
}

export default Header;