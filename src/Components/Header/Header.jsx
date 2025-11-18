import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../Assets/logo.png";   // white logo
import Logo2 from "../../Assets/logo2.png"; // dark logo
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isServicesPage = location.pathname === "/services";

  return (
    <header
      className={`navbar 
        ${!isHomePage ? "other-page" : ""} 
        ${isServicesPage ? "services-page" : ""}
      `}
    >
      {/* Logo */}
      <div className="navbar-left">
        <img
          src={isHomePage || isServicesPage ? Logo : Logo2}
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <nav
        className={`navbar-center 
          ${menuOpen ? "open" : ""} 
          ${!isHomePage ? "other-page" : ""} 
          ${isServicesPage ? "services-page" : ""}
        `}
      >
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/meet-the-team">Meet The Team</a>
        <a href="/faq">FAQ</a>
      </nav>

      {/* Button */}
      <div className="navbar-right">
        <button className={!isHomePage ? "other-page" : ""}>Book a Call</button>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger 
          ${menuOpen ? "open" : ""} 
          ${!isHomePage ? "other-page" : ""} 
          ${isServicesPage ? "services-page" : ""}
        `}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu 
          ${menuOpen ? "open" : ""} 
          ${!isHomePage ? "other-page" : ""} 
          ${isServicesPage ? "services-page" : ""}
        `}
      >
        <a href="/services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="/about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="/meet-the-team" onClick={() => setMenuOpen(false)}>
          Meet The Team
        </a>
        <a href="/faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </a>

        <button onClick={() => setMenuOpen(false)}>Book a Call</button>
      </div>
    </header>
  );
};

export default Header;
