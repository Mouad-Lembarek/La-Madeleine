import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Footer.css';
import Accueil from './pages/Accueil/Accueil';
import APropos from './pages/APropos/APropos';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import Reservation from './pages/Reservation/Reservation';

function App() {
  return (
    <>
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
