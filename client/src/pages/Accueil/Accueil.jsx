import './Accueil.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Accueil() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotation des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calcul de l'opacité du background du hero basé sur le scroll
  const heroHeight = heroRef.current?.offsetHeight || 100;
  const backgroundOpacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.8)));

  // Données des témoignages
  const testimonials = [
    {
      name: "Fatima Alami",
      role: "Chef de cuisine",
      text: "La Madeleine représente l'excellence culinaire marocaine. Chaque plat raconte une histoire, chaque saveur évoque un souvenir.",
      rating: 5
    },
    {
      name: "Ahmed Benjelloun",
      role: "Critique gastronomique",
      text: "Une expérience culinaire exceptionnelle qui allie tradition et modernité. La Madeleine redéfinit la gastronomie marocaine.",
      rating: 5
    },
    {
      name: "Marie Dubois",
      role: "Cliente fidèle",
      text: "Depuis 5 ans, je viens régulièrement à La Madeleine. L'ambiance, le service et surtout la cuisine sont toujours parfaits.",
      rating: 5
    }
  ];

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
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="hero-title-line">EXPÉRIENCE CULINAIRE RAFFINÉE À MARRAKECH</span>
            </motion.h1>
            
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

      {/* Section Description */}
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
              expériences culinaires uniques qui éveillent tous vos sens.
            </p>
            <p className="about-description">
              Depuis notre ouverture, nous nous efforçons de préserver l'authenticité des recettes ancestrales 
              tout en apportant une touche contemporaine qui séduit les palais les plus exigeants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Nos Spécialités - Alternating Modern Layout */}
      <section className="specialites-section">
        <div className="container">
          <h3 className="specialites-title">Nos Spécialités</h3>

          {/* 1ère spécialité */}
          <div className="specialite-row specialite-row-reverse">
            <div className="specialite-text">
              <h4 className="specialite-name">Kebabs Traditionnels</h4>
              <p className="specialite-desc">
                Savourez nos brochettes marocaines grillées à la perfection, accompagnées de légumes frais et d'épices authentiques. Une expérience incontournable pour les amateurs de cuisine traditionnelle.
              </p>
              <button className="specialite-btn">Découvrir</button>
            </div>
            <div className="specialite-image-container">
              <img src="/1.jpg" alt="Kebabs Traditionnels" className="specialite-image" />
            </div>
          </div>

          {/* 2ème spécialité */}
          <div className="specialite-row">
            <div className="specialite-image-container">
              <img src="/2.jpg" alt="Pâtes Gourmet" className="specialite-image" />
            </div>
            <div className="specialite-text">
              <h4 className="specialite-name">Pâtes Gourmet</h4>
              <p className="specialite-desc">
                Découvrez notre fusion méditerranéenne : des pâtes artisanales associées à des ingrédients locaux et des saveurs innovantes, pour une assiette aussi belle que savoureuse.
              </p>
              <button className="specialite-btn">Voir plus</button>
            </div>
          </div>

          {/* 3ème spécialité */}
          <div className="specialite-row specialite-row-reverse">
            <div className="specialite-text">
              <h4 className="specialite-name">Assiette Complète</h4>
              <p className="specialite-desc">
                Laissez-vous tenter par notre assiette signature, un voyage gastronomique à travers les spécialités marocaines, servie avec une présentation raffinée et des produits de saison.
              </p>
              <button className="specialite-btn">Explorer</button>
            </div>
            <div className="specialite-image-container">
              <img src="/3.jpg" alt="Assiette Complète" className="specialite-image" />
            </div>
          </div>
        </div>
      </section>



      {/* Section L'Expérience */}
      <section className="experience-section">
        <div className="container">
          <motion.div 
            className="experience-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="experience-title">
              <span className="experience-text">DÉCOUVRIR</span>
              <span className="experience-highlight">NOTRE CUISINE</span>
            </h2>
          </motion.div>

          <div className="experience-content">
            <motion.div 
              className="experience-text-content"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="experience-subtitle">Une Cuisine Fusion</h3>
              <p className="experience-description">
                De l'incomparable Sefaa de la cuisine berbère à l'iconique poulet Yassa de Casamance, 
                La Madeleine est plus qu'un restaurant—c'est un véritable voyage culinaire. 
                Découvrez un mélange unique et passionnant de saveurs qui reflètent la richesse 
                et la diversité des cultures de Marrakech.
              </p>
              <motion.button 
                className="experience-cta-button"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Découvrir Notre Cuisine Fusion</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>

            <motion.div 
              className="experience-image-container"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="experience-image-wrapper">
                <img src="/food.jpg" alt="Cuisine Fusion" className="experience-image" />
                <div className="experience-image-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="values-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="values-title">Nos Valeurs</h2>
            <p className="values-subtitle">
              Les principes qui guident notre passion culinaire
            </p>
          </motion.div>

          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
            >
              <div className="value-number">01</div>
              <h3>Authenticité</h3>
              <p>Respecter et préserver les traditions culinaires marocaines dans leur forme la plus pure.</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
            >
              <div className="value-number">02</div>
              <h3>Excellence</h3>
              <p>Viser la perfection dans chaque détail, de la sélection des ingrédients à la présentation finale.</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
            >
              <div className="value-number">03</div>
              <h3>Hospitalité</h3>
              <p>Accueillir chaque client comme un membre de notre famille avec chaleur et générosité.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Follow our STORY */}
      <section className="story-follow-section">
        <div className="container">
          <motion.div 
            className="story-follow-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="story-follow-title-container">
              <h2 className="story-follow-title">
                <span className="story-follow-text">Follow our</span>
                <span className="story-follow-highlight">STORY</span>
              </h2>
              <div className="instagram-icon-bg">
                <svg className="instagram-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="story-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="story-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
              onClick={() => window.open('https://www.instagram.com/lamadeleine.maroc', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="story-image-container">
                <img src="/3.jpg" alt="Story 1" className="story-image" />
                <div className="video-indicator">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="camera-icon">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"/>
                  </svg>
                </div>
                <div className="story-overlay-text">
                  <h3>À TRAVERS LE TEMPS</h3>
                  <p>Découvrez notre voyage culinaire</p>
                </div>
                <div className="instagram-overlay">
                  <svg className="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="story-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
              onClick={() => window.open('https://www.instagram.com/lamadeleine.maroc', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="story-image-container">
                <img src="/3.jpg" alt="Story 2" className="story-image" />
                <div className="video-indicator">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="camera-icon">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"/>
                  </svg>
                </div>
                <div className="story-overlay-text">
                  <h3>L'EXPÉRIENCE</h3>
                  <p>Si vous voyez ceci... c'est un signe pour réserver votre table</p>
                </div>
                <div className="instagram-overlay">
                  <svg className="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="story-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
              onClick={() => window.open('https://www.instagram.com/lamadeleine.maroc', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="story-image-container">
                <img src="/3.jpg" alt="Story 3" className="story-image" />
                <div className="video-indicator">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="camera-icon">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"/>
                  </svg>
                </div>
                <div className="story-overlay-text">
                  <h3>LA MÉDINA</h3>
                  <p>Votre lieu de bonheur dans la médina</p>
                </div>
                <div className="instagram-overlay">
                  <svg className="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </motion.div>


          </motion.div>

          <motion.div 
            className="story-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="story-cta-button"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Faites un pas dans l'univers de La Madeleine</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div 
            className="testimonials-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="testimonials-title">Ce que disent nos clients</h2>
            <p className="testimonials-subtitle">
              Découvrez les expériences de nos clients satisfaits
            </p>
          </motion.div>

          <motion.div 
            className="testimonials-carousel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="testimonial-content">
              <motion.div 
                className="testimonial-card"
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-image">
                  <img src="/3.jpg" alt="Client" />
                </div>
                <div className="testimonial-text">
                  <p>"{testimonials[currentTestimonial].text}"</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg key={i} className="star" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <span>{testimonials[currentTestimonial].role}</span>
                  </div>
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