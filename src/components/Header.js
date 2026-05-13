import React from 'react';

const Header = () => {
 return (
  <header className="main-header">
   <h1 className="logo">DeltaDesigns</h1>
   <nav>
    <ul className="nav-links">
     <li><a href="#home">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#gallery">Gallery</a></li>
    </ul>
   </nav>
  </header>
 );
};

export default Header;