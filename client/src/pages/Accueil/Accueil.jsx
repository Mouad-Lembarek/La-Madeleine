import './Accueil.css';
import { useEffect, useRef } from 'react';

function Accueil() {
  // Animation fade-in pour la section suivante
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        sectionRef.current.classList.add('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="accueil-hero-wrapper">
        <div className="home-background" />
        <div className="accueil-hero-content no-bg">
          <img src="/LaMadeleine.png" alt="La Madeleine Logo" className="accueil-hero-logo animated-logo" />
          <p className="accueil-hero-subtitle align-with-logo">Restaurant & Café – Un voyage gourmand au cœur de la tradition</p>
          <a href="/menu" className="accueil-hero-btn">
            Voir le menu <span className="arrow">→</span>
          </a>
        </div>
        <div className="hero-separator">
          <svg viewBox="0 0 1440 120" width="100%" height="90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 Q360,0 720,80 T1440,80 L1440,120 L0,120 Z" fill="#741D2D" />
          </svg>
        </div>
      </div>
      <section ref={sectionRef} className="section-fade accueil-immersive-section">
        <h2 className="accueil-section-title">Bienvenue chez La Madeleine</h2>
        <p className="accueil-section-text">
          Plus qu’un restaurant, La Madeleine est une invitation à savourer l’instant. Découvrez une atmosphère unique où l’élégance rencontre la convivialité, et où chaque plat raconte une histoire de passion et de terroir.<br/><br/>
          Installez-vous, laissez-vous porter par les saveurs et l’ambiance, et vivez une expérience gourmande inoubliable au cœur de la ville.
        </p>
      </section>
    </>
  );
}

export default Accueil; 