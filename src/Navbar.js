import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={toggleNav}>
        <Link to="/">Logo</Link>
      </div>
      <div className={`nav-links ${isNavOpen ? 'nav-active' : ''}`}>
        <Link to="/" onClick={toggleNav}>
          Home
        </Link>
        <Link to="/about" onClick={toggleNav}>
          About
        </Link>
        <Link to="/services" onClick={toggleNav}>
          Services
        </Link>
        <Link to="/contact" onClick={toggleNav}>
          Contact
        </Link>
      </div>

<div className="burger" onClick={toggleNav}>
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
</div>


      {window.innerWidth <= 768 && isNavOpen && (
        <div className="nav-links-dropdown">
          <Link to="/" onClick={toggleNav} style={{paddingRight: '20px', color: 'white'}}>
            Home
          </Link>
          <Link to="/about" onClick={toggleNav} style={{paddingRight: '20px', color: 'white'}}>
            About
          </Link>
          <Link to="/services" onClick={toggleNav} style={{paddingRight: '20px', color: 'white'}}>
            Services
          </Link>
          <Link to="/contact" onClick={toggleNav} style={{paddingRight: '20px' , color: 'white'}}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

