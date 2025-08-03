import './APropos.css';
import { motion } from 'framer-motion';

function APropos() {
  return (
    <>
      {/* Hero Section - Inspiré de BlackChich */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/food.jpg" alt="La Madeleine Restaurant" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              <span className="hero-subtitle">DÉCOUVREZ NOTRE</span>
              <span className="hero-main-title">RESTAURANT</span>
            </h1>
            <p className="hero-description">
              Une expérience culinaire unique où tradition marocaine rencontre innovation moderne
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Notre Menu Continue Son Voyage */}
      <section className="menu-journey-section">
        <div className="container">
          <div className="menu-journey-content">
            <motion.div 
              className="menu-journey-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="menu-journey-title">Notre menu continue son voyage,</h2>
              <p className="menu-journey-description">
                vous emmenant du Maroc traditionnel avec nos tagines authentiques, 
                aux saveurs méditerranéennes avec nos pâtes fraîches. Les gourmets 
                peuvent compléter leur aventure gustative avec notre Seffa, 
                un dessert traditionnel fait de semoule fine, qui ajoute une 
                touche unique et authentique au repas.
              </p>
              
              <h3 className="fusion-kitchen-title">Une Cuisine Fusion</h3>
              <p className="fusion-kitchen-description">
                Nos plats combinent des éléments de diverses origines marocaines, 
                berbères et méditerranéennes, résultant en des créations innovantes 
                et uniques. Notre cuisine mélange ingrédients, techniques et saveurs 
                de recettes traditionnelles, créant des goûts surprenants et excitants.
              </p>
            </motion.div>
            
            <motion.div 
              className="menu-journey-images"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="image-stack">
                <img src="/spaghetti-bolognaise.jpg" alt="Pâtes traditionnelles" className="main-image" />
                <img src="/penne-truffe.jpg" alt="Cuisine fusion" className="overlay-image" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section À Propos de la Fusion */}
      <section className="fusion-section">
        <div className="container">
          <motion.div 
            className="fusion-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="fusion-title">À PROPOS DE LA FUSION</h2>
            <h3 className="fusion-subtitle">qu'est-ce que c'est ?</h3>
            <p className="fusion-description">
              La cuisine fusion, c'est tout à propos de créativité, diversité et échange culturel. 
              Elle brise les règles de la tradition pour faire place à de nouvelles histoires — 
              mélangeant épices, ingrédients et techniques de différents mondes culinaires.
            </p>
          </motion.div>
          
          <div className="fusion-content">
            <motion.div 
              className="fusion-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                À La Madeleine, notre cuisine puise dans les saveurs vibrantes du Maroc, 
                la chaleur profondément enracinée de la cuisine berbère, et l'âme audacieuse 
                de la gastronomie méditerranéenne. Le résultat ? Des plats uniques et expressifs 
                qui semblent familiers mais entièrement nouveaux.
              </p>
              <p>
                Il s'agit d'honorer la tradition tout en osant la réinventer — un voyage 
                de saveurs conçu pour susciter curiosité et connexion.
              </p>
            </motion.div>
            
            <motion.div 
              className="fusion-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img src="/raviolis-ricotta.jpg" alt="Cuisine fusion marocaine" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Notre Plat Signature */}
      <section className="signature-section">
        <div className="container">
          <div className="signature-content">
            <motion.div 
              className="signature-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img src="/kouskous.jpg" alt="Couscous Royal" />
            </motion.div>
            
            <motion.div 
              className="signature-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="signature-title">
                <span className="signature-subtitle">DÉCOUVREZ LE</span>
                <span className="signature-main-title">COUSCOUS ROYAL</span>
                <span className="signature-label">notre plat signature</span>
              </h2>
              
              <p className="signature-description">
                L'exemple parfait de notre cuisine fusion inventive : une variante 
                de street food classique, avec certaines des viandes marocaines 
                les plus emblématiques.
              </p>
              
              <p className="signature-description">
                Cette création audacieuse présente une viande tendre et marinée, 
                complétée par une semoule fine et parfumée qui est à la fois 
                douce et légèrement croquante, lui donnant un attrait gourmet unique.
              </p>
              
              <p className="signature-description">
                Il est servi avec une sauce secrète infusée de saveurs épicées 
                marocaines et des légumes de saison, créant un mélange harmonieux 
                de tradition et d'innovation. Comment résister à une telle délicatesse ?
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Boissons */}
      <section className="drinks-section">
        <div className="container">
          <div className="drinks-content">
            <motion.div 
              className="drinks-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="drinks-title">
                À La Madeleine, les surprises savoureuses s'étendent à nos boissons
              </h2>
              
              <p className="drinks-description">
                Rafraîchissez-vous avec l'une de nos nombreuses infusions marocaines 
                — menthe, verveine, safran et plus encore. La partie la plus difficile 
                est de choisir votre préférée !
              </p>
              
              <p className="drinks-description">
                Envie d'un café chaud ou d'une infusion ?
              </p>
              
              <p className="drinks-description">
                Explorez notre sélection de grains inspirés du Maroc et d'arômes. 
                Avec des épices chaudes et des plantes naturelles de l'Atlas, 
                La Madeleine capture et partage la richesse des saveurs locales.
              </p>
            </motion.div>
            
            <motion.div 
              className="drinks-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img src="/home.jpeg" alt="Boissons marocaines" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Expérience Culinaire */}
      <section className="culinary-experience-section">
        <div className="container">
          <motion.div 
            className="culinary-experience-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="culinary-experience-title">UNE VÉRITABLE EXPÉRIENCE CULINAIRE</h2>
            <p className="culinary-experience-description">
              Les plats berbères font un retour en force, rehaussés de touches contemporaines. 
              Laissez-vous captiver par les saveurs douces et salées de notre Seffa, 
              et vivez les montagnes de l'Atlas en une seule bouchée.
            </p>
          </motion.div>
    </div>
      </section>
    </>
  );
}

export default APropos; 