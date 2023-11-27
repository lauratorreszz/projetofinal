import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo3.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="DUCK__navbar">
      <div className="DUCK__navbar-links">
        <div className="DUCK__navbar-links_logo">
          <div className="duckriverlogo">
          <img src={logo} />
          </div>
        </div>
        <div className="DUCK__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">aaaaa</a></p>
          <p><a href="#possibility">aaaaa</a></p>
          <p><a href="#features">aaaaa</a></p>
          <p><a href="#blog">aaaaa</a></p>
        </div>
      </div>
      <div className="DUCK__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="DUCK__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="DUCK__navbar-menu_container scale-up-center">
          <div className="DUCK__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">aaaaa</a></p>
            <p><a href="#possibility">aaaaa</a></p>
            <p><a href="#features">aaaaa</a></p>
            <p><a href="#blog">aaaaa</a></p>
          </div>
          <div className="DUCK__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;