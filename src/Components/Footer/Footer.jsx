import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,  } from 'react-icons/fa';
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import footerLogo from '../../Assets/footerlogo.png'; // adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main footer */}
      <div className="footer-main">
        <div className="footer-left">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
          <p className="footer-tagline">Elevating brands</p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaLinkedinIn /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
            <a href="https://www.instagram.com/stato.brand" target='_blank' aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@statobrand" target='_blank' aria-label="Tiktok"><FaTiktok /></a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Visual Identity</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Content Creation</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Work</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/stato.brand" target='_blank'>Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="https://www.tiktok.com/@statobrand" target='_blank'>Tiktok</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-content">
          <span>© 2025 Stato, Inc.</span>
          <div className="footer-bottom-links">
            <a href="#">Cookie Settings</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
