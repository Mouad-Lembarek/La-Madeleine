import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Mobile menu button */}
      <button 
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar-logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src="/LaMadeleine.png" alt="La Madeleine Logo" />
        </Link>
      </div>

      {/* Desktop navigation - left links */}
      <ul className="navbar-links navbar-links-left">
        <li><Link to="/" onClick={closeMobileMenu}>Accueil</Link></li>
        <li><Link to="/a-propos" onClick={closeMobileMenu}>À propos de nous</Link></li>
      </ul>

      {/* Desktop navigation - right links */}
      <ul className="navbar-links navbar-links-right">
        <li><Link to="/menu" onClick={closeMobileMenu}>Menu</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        <li><Link to="/reservation" onClick={closeMobileMenu}>Réservation</Link></li>
      </ul>

      {/* Mobile navigation */}
      <ul className={`navbar-links navbar-mobile ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Accueil</Link></li>
        <li><Link to="/a-propos" onClick={closeMobileMenu}>À propos de nous</Link></li>
        <li><Link to="/menu" onClick={closeMobileMenu}>Menu</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        <li><Link to="/reservation" onClick={closeMobileMenu}>Réservation</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 