import React from 'react';
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
    <footer className="footer-madeleine">
      {/* SVG torn paper top */}
      <svg
        className="footer-torn-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        width="100%"
        height="60"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <path d="M0 0v41s40 117.6 337 20.7c46.7-15.2 104.8-46 163-46 58.1 0 116.3 30.8 163 46 297 97 337-20.7 337-20.7V0H0Z" fill="#F8F2ED"></path>
      </svg>
      
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
          <div className="footer-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8202053398304!2d-8.001289999999997!3d31.6290992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef00515c735f%3A0x2c802512213945f3!2sLa%20Madeleine!5e1!3m2!1sen!2sma!4v1754228590253!5m2!1sen!2sma"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Madeleine - 45 Av. Mohammed V, Marrakech"
            ></iframe>
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