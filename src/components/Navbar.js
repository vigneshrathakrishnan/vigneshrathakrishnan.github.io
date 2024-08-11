// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`navbar-links-container ${isActive ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#getting-started">Getting Started</a></li>
          <li><a href="#authentication">Authentication</a></li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div> 
    </nav>
  );
};

export default Navbar;
