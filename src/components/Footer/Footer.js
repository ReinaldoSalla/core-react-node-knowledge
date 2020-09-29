import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <Link className='footer-link' to='/contact'> Contact </Link>
    <Link className='footer-link' to='/philosohpy'> Philosophy </Link>
    <span className='footer-msg'>
      Copyright © {new Date().getFullYear()} JavaScriptTemporal
    </span>
    <span className='footer-msg'>
      All the code in this website in MIT licensed
    </span>
    <span className='footer-msg-italic'>
      Always bet on JS
    </span>
  </footer>
);

export default Footer;
