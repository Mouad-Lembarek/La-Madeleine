import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Instagram Icon/Link */}
        <a 
          href="https://www.instagram.com/lamadeleine.maroc?igsh=bTUwb3dyZWg2NnFx" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>

        {/* TikTok Icon/Link */}
        <a 
          href="https://www.tiktok.com/@lamadeleine.maroc?_t=ZS-8y1DboDUkvi&_r=1" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok size={24} />
        </a>

        {/* Address Link (Google Maps) */}
        <a 
          href="https://maps.app.goo.gl/1ijDQPhAkcygLivf7?g_st=aw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="address-link"
        >
          📍 Our Location
        </a>
      </div>

      <span>&copy; {new Date().getFullYear()} La Madeleine. Tous droits réservés.</span>
    </footer>
  );
}

export default Footer;