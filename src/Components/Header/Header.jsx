import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#team">Meet The Team</a>
        <a href="#faq">FAQ</a>
      </nav>

      {/* Button */}
      <div className="navbar-right">
        <button>Book a Call</button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#team" onClick={() => setMenuOpen(false)}>Meet The Team</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <button onClick={() => setMenuOpen(false)}>Book a Call</button>
      </div>
    </header>
  );
};

export default Header;
