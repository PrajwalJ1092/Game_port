import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          logo
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Skills</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
            Dark Mode
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
