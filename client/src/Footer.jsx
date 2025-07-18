import React from 'react';
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-madeleine">
      <div className="footer-main-row">
        <div className="footer-col footer-address">
          <div className="footer-address-content">
            <FaMapMarkerAlt className="footer-icon" />
            <a 
              href="https://maps.app.goo.gl/ZVPN3moQFRu8fzTD8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-address-link"
            >
              45 Av. Mohammed V, Marrakech 40000
            </a>
          </div>
        </div>

        <div className="footer-col footer-logo-center">
          <img src="/LaMadeleine.png" alt="La Madeleine Logo" className="footer-logo-img" />
        </div>

        <div className="footer-col footer-contact">
          <div className="footer-contact-title">CONTACTEZ-NOUS</div>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <FaPhone className="footer-icon" />
              <span>0524446045</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <span>lamadeleine.maroc@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom-row">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} La Madeleine
          </div>
          <div className="footer-bottom-social">
            <a href="https://www.instagram.com/lamadeleine.maroc?igsh=bTUwb3dyZWg2NnFx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.tiktok.com/@lamadeleine.maroc?_t=ZS-8y1DboDUkvi&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;