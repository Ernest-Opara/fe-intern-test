import React from 'react';
import Logo from '../logo.svg';
import "./Header.css";

const Header = () => {
  return <div >
      
      <nav className="navibar">
        <img src={Logo} viewBox="0 0 100 100" alt="Logo"/>
        <ul className="navlinks">
          <li className="link"><a href="https://risevest.com/blog">Contact Us</a></li>
          <li className="link"><a href="https://risevest.com/blog">About</a></li>
        </ul>
      </nav> 
      </div>
};

export default Header;
