import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links navbar-links-left">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/a-propos">À propos de nous</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
      <div className="navbar-logo">
        <Link to="/">
          <img src="./public/LaMadeleine.png" alt="La Madeleine Logo" />
        </Link>
      </div>
      <ul className="navbar-links navbar-links-right">
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/reservation">Réservation</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 