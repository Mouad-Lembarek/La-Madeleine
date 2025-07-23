import './Accueil.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Accueil() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcul de l'opacité du background du hero basé sur le scroll
  const heroHeight = heroRef.current?.offsetHeight || 100;
  const backgroundOpacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.8)));

  return (
    <>
      <div className="hero-container" ref={heroRef}>
        {/* Background avec effet parallax et transparence */}
        <div 
          className="hero-background"
          style={{ opacity: backgroundOpacity }}
        >
          <div className="background-overlay"></div>
        </div>
        
        {/* Contenu principal */}
        <div className="hero-content">
          <motion.div 
            className="hero-text-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Sous-titre avec animation fade-in */}
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              EXPÉRIENCE CULINAIRE RAFFINÉE À MARRAKECH
            </motion.h2>
            
            {/* Description avec animation fade-in */}
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Plongez dans une expérience culinaire unique, entre tradition marocaine et cuisine raffinée.
            </motion.p>
            
            {/* Bouton avec animation fade-in et hover */}
            <motion.button 
              className="hero-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Effet sonore doux (optionnel)
                const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
                audio.volume = 0.1;
                audio.play().catch(() => {}); // Ignore les erreurs si l'audio ne peut pas être joué
              }}
            >
              Voir le menu
            </motion.button>
          </motion.div>
        </div>
        
        {/* Effet de vagues animées */}
        <div className="hero-waves">
          <svg 
            className="waves-svg" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F8F2ED" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#F8F2ED" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F8F2ED" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path 
              className="wave wave1" 
              fill="url(#waveGradient)"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path 
              className="wave wave2" 
              fill="url(#waveGradient)"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path 
              className="wave wave3" 
              fill="url(#waveGradient)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Section Description et Galerie */}
      <section className="about-section" ref={aboutRef}>
        <div className="container">
          {/* Description La Madeleine */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="about-title">La Madeleine</h2>
            <p className="about-description">
              Plus qu'un restaurant, La Madeleine est une invitation à explorer les saveurs authentiques du Maroc. 
              Notre cuisine fusionne tradition marocaine et techniques gastronomiques modernes pour créer des 
              expériences culinaires uniques.
            </p>
          </motion.div>

          {/* Galerie d'images */}
          <motion.div 
            className="gallery-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="gallery-title">Nos Spécialités</h3>
            <div className="gallery-grid">
              <motion.div 
                className="gallery-item"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img src="/1.jpg" alt="Spécialité culinaire 1" className="gallery-image" />
                <div className="gallery-overlay">
                  <h4>Kebabs Traditionnels</h4>
                  <p>Grillés à la perfection</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="gallery-item"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img src="/2.jpg" alt="Spécialité culinaire 2" className="gallery-image" />
                <div className="gallery-overlay">
                  <h4>Pâtes Gourmet</h4>
                  <p>Fusion méditerranéenne</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="gallery-item"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img src="/3.jpg" alt="Spécialité culinaire 3" className="gallery-image" />
                <div className="gallery-overlay">
                  <h4>Assiette Complète</h4>
                  <p>Expérience gastronomique</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
    </div>
      </section>
    </>
  );
}

export default Accueil; 