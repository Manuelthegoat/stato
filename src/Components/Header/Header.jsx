/* global Calendly */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../Assets/stato-logo1.1.png"; // white logo
import Logo2 from "../../Assets/stato logo1.png"; // dark logo
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isServicesPage = location.pathname === "/services";

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <header
      className={`navbar 
        ${!isHomePage ? "other-page" : ""} 
        ${isServicesPage ? "services-page" : ""}
      `}
    >
      {/* Logo */}
      <a href="/" className="navbar-left">
        <img src={isHomePage || isServicesPage ? Logo : Logo2} alt="Logo" />
      </a>

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
      <a className="navbar-right">
        <button
          className={!isHomePage ? "other-page" : ""}
          onClick={(e) => {
            e.preventDefault();
            Calendly.initPopupWidget({
              url: "https://calendly.com/contact-stato/30min",
            });
          }}
        >
          Book a Call
        </button>
      </a>

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

        <a>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              Calendly.initPopupWidget({
                url: "https://calendly.com/contact-stato/30min",
              });
            }}
          >
            Book a Call
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
