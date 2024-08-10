import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <p>© {currentYear} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
