import './Contact.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [confirmation, setConfirmation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone field
    if (name === 'phone') {
      // Only allow numbers and limit to 10 digits
      const numbersOnly = value.replace(/\D/g, '');
      if (numbersOnly.length <= 10) {
        setFormData({ ...formData, [name]: numbersOnly });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contacts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setConfirmation('Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setConfirmation('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      setConfirmation('Erreur de connexion. Veuillez réessayer.');
    }
    
    setIsSubmitting(false);
  };
  return (
    <>
      {/* Hero Section - Inspiré de BlackChich */}
      <section className="contact-hero-section">
        <div className="contact-hero-background">
          <img src="/home.png" alt="La Madeleine Restaurant" className="contact-hero-bg-image" />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="contact-hero-content">
          <motion.div 
            className="contact-hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="contact-hero-title">
              <motion.span 
                className="contact-hero-subtitle"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                GARDONS
              </motion.span>
              <motion.span 
                className="contact-hero-main-title"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                LE CONTACT
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </section>



      {/* Section Contact Info et Carte */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-content">
            {/* Informations de contact */}
            <motion.div 
              className="contact-info-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="contact-info-block">
                <div className="contact-info-icon">🕐</div>
                <h3 className="contact-info-title">HEURES D'OUVERTURE</h3>
                <p className="contact-info-text">Ouvert tous les jours</p>
                <p className="contact-info-text">12h00 jusqu'à 22h00</p>
              </div>

              <div className="contact-info-block">
                <div className="contact-info-icon">📞</div>
                <h3 className="contact-info-title">TÉLÉPHONE</h3>
                <p className="contact-info-text">+212 (0)6 67 87 10 92</p>
              </div>

              <div className="contact-info-block">
                <div className="contact-info-icon">📍</div>
                <h3 className="contact-info-title">ADRESSE</h3>
                <p className="contact-info-text">45 Av. Mohammed V, Marrakech 40000, Maroc</p>
              </div>
            </motion.div>

            {/* Carte Google Maps */}
            <motion.div 
              className="contact-info-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8202053398304!2d-8.001289999999997!3d31.6290992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef00515c735f%3A0x2c802512213945f3!2sLa%20Madeleine!5e1!3m2!1sen!2sma!4v1754228590253!5m2!1sen!2sma"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Madeleine Restaurant"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de Contact */}
      <section className="contact-form-section">
        <div className="container">
          <motion.div 
            className="contact-form-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="contact-form-header">
              <h2 className="contact-form-title">
                <span className="contact-form-subtitle">NOUS SOMMES LÀ POUR RÉPONDRE À</span>
                <span className="contact-form-main-title">VOS QUESTIONS</span>
              </h2>
              <p className="contact-form-description">
                Prenez votre meilleur stylo, nous sommes là pour répondre à toutes vos questions.
              </p>
            </div>

            {confirmation && (
              <div className="contact-confirmation">
                {confirmation}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Prénom *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="first_name" 
                    value={formData.first_name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Nom *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="last_name" 
                    value={formData.last_name}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]{10}"
                    placeholder="0612345678"
                    title="Veuillez entrer exactement 10 chiffres"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="contact-submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact; 