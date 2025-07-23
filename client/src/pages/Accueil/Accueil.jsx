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