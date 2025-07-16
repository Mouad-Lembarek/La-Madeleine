import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-madeleine">
      <div className="footer-separator">
        <svg viewBox="0 0 1440 120" width="100%" height="90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q360,120 720,40 T1440,40 L1440,0 L0,0 Z" fill="#741D2D" />
        </svg>
      </div>
      <div className="footer-main-row">
        <div className="footer-col footer-address">
          123, Avenue de la Madeleine, Casablanca, Maroc
        </div>
        <div className="footer-col footer-logo-center">
          <img src="/LaMadeleine.png" alt="La Madeleine Logo" className="footer-logo-img" />
          <div className="footer-brand">La Madeleine</div>
          <div className="footer-slogan">Restaurant & Café</div>
        </div>
        <div className="footer-col footer-family">
          <div className="footer-family-title">Rejoignez la famille</div>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/lamadeleine.maroc?igsh=bTUwb3dyZWg2NnFx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.tiktok.com/@lamadeleine.maroc?_t=ZS-8y1DboDUkvi&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-bottom-line" />
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} La Madeleine. Made by <span className="footer-signature">Mouad</span>
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