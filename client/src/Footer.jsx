import React from 'react';
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
    <footer className="footer-madeleine">
      {/* SVG de vague au haut du footer */}
      <div className="footer-wave-svg-container">
        <svg 
          width="1440" 
          height="153" 
          viewBox="0 0 1440 153" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="footer-wave-svg"
        >
          <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M-19.9878 32.0699C12.7122 54.2879 51.9843 76.4199 113.012 76.4199C279.679 76.4199 256.012 32.0699 422.679 32.0699C589.345 32.0699 574.845 90.6379 741.512 90.6379C908.179 90.6379 939.346 0 1106.01 0C1272.68 0 1256.01 88.2149 1422.68 88.2149C1485.43 88.2149 1523.71 82.9649 1557.01 76.4199C1562.98 75.2466 1557.07 85.9159 1557.01 91.9999C1550.93 716.809 -26.9403 716.554 -42.9879 91.9209C-43.4001 75.8733 -33.2657 23.0482 -19.9878 32.0699Z" 
            fill="#741D2D"
          />
        </svg>
      </div>
      
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