// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { useEffect } from 'react';

const Sidebar = () => {

  useEffect(() => {
    const handleScroll = () => {
        const navbarHeight = 100; // Height of the navbar
        const sidebar = document.querySelector('.sidebar');
        
        if (window.scrollY > navbarHeight) {
            sidebar.style.top = '20px'; // Position it in the top right corner
            sidebar.style.right = '20px'; // Position it in the top right corner
        } else {
            sidebar.style.top = '35%'; // Return to the original position
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li><a href="#">Introduction</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#authentication">Authentication</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#samples">Samples</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
