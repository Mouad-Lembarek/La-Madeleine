import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';

function App() {
  return (
    <>
      <img src="/La%20Madeleine.png" alt="La Madeleine Background" className="background-logo" />
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
