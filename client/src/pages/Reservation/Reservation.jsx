import './Reservation.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ReservationForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    phone: '',
    email: '',
    guests: 1,
    reservation_date: '',
    reservation_time: '',
    motif: '',
    table: ''
  });
  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone field
    if (name === 'phone') {
      // Only allow numbers and limit to 10 digits
      const numbersOnly = value.replace(/\D/g, '');
      if (numbersOnly.length <= 10) {
        setForm({ ...form, [name]: numbersOnly });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/reservations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (response.ok) {
      setConfirmation(`Réservation confirmée pour ${form.prenom.charAt(0).toUpperCase() + form.prenom.slice(1)} ${form.nom.charAt(0).toUpperCase() + form.nom.slice(1)}, veuillez vérifier votre mail.`);
      setForm({
        nom: '',
        prenom: '',
        phone: '',
        email: '',
        guests: 1,
        reservation_date: '',
        reservation_time: '',
        motif: '',
        table: ''
      });
      setStep(1);
    } else {
      setConfirmation('Erreur lors de la réservation.');
    }
  };

  return (
    <div>
      {/* Hero Section avec image de fond */}
      <section className="reservation-hero-section">
        <div className="reservation-hero-background">
          <img 
            src="/madeleine.JPG" 
            alt="La Madeleine Restaurant" 
            className="reservation-hero-bg-image"
          />
        </div>
        <div className="reservation-hero-overlay"></div>
        <div className="reservation-hero-content">
          <motion.div 
            className="reservation-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="reservation-hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              RÉSERVEZ VOTRE TABLE
            </motion.h2>
            <motion.h1 
              className="reservation-hero-main-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              UNE EXPÉRIENCE CULINAIRE UNIQUE
            </motion.h1>
            <motion.p 
              className="reservation-hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Découvrez l'art de la gastronomie marocaine-française dans un cadre enchanteur
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section du formulaire */}
      <section className="reservation-form-section">
        <div className="reservation-form-content">
          {confirmation && (
            <div className="reservation-confirmation">
              {confirmation}
            </div>
          )}
          
          {!confirmation && (
            <>
              {/* Header du formulaire */}
              <div className="reservation-form-header">
                <div className="reservation-form-title">
                  <motion.h3 
                    className="reservation-form-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    RÉSERVATION
                  </motion.h3>
                  <motion.h2 
                    className="reservation-form-main-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    RÉSERVEZ VOTRE PLACE
                  </motion.h2>
                  <motion.p 
                    className="reservation-form-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Remplissez le formulaire ci-dessous pour réserver votre table et vivre une expérience gastronomique exceptionnelle
                  </motion.p>
                </div>
              </div>

              {/* Indicateur de progression */}
              <div className="progress-indicator">
                <div className={`progress-step ${step >= 1 ? 'active' : 'pending'}`}>
                  1
                </div>
                <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
                <div className={`progress-step ${step >= 2 ? 'active' : 'pending'}`}>
                  2
                </div>
              </div>

              {/* Formulaire */}
              <motion.form 
                className="reservation-form"
                onSubmit={step === 1 ? handleNext : handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {step === 1 && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="prenom">PRÉNOM *</label>
                        <input 
                          id="prenom"
                          name="prenom" 
                          type="text"
                          value={form.prenom} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="nom">NOM *</label>
                        <input 
                          id="nom"
                          name="nom" 
                          type="text"
                          value={form.nom} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">TÉLÉPHONE *</label>
                        <input 
                          id="phone"
                          name="phone" 
                          type="tel"
                          value={form.phone} 
                          onChange={handleChange} 
                          required 
                          maxLength="10"
                          pattern="[0-9]{10}"
                          placeholder="0612345678"
                          title="Veuillez entrer exactement 10 chiffres"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">EMAIL *</label>
                        <input 
                          id="email"
                          name="email" 
                          type="email"
                          value={form.email} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>

                    <div className="form-buttons">
                      <button type="submit" className="reservation-btn primary">
                        SUIVANT
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="guests">NOMBRE DE PERSONNES *</label>
                        <select 
                          id="guests"
                          name="guests" 
                          value={form.guests} 
                          onChange={handleChange} 
                          required
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="reservation_date">DATE *</label>
                        <input 
                          id="reservation_date"
                          name="reservation_date" 
                          type="date"
                          value={form.reservation_date} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="reservation_time">HEURE *</label>
                        <input 
                          id="reservation_time"
                          name="reservation_time" 
                          type="time"
                          value={form.reservation_time} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="motif">MOTIF SPÉCIAL</label>
                        <input 
                          id="motif"
                          name="motif" 
                          type="text"
                          value={form.motif} 
                          onChange={handleChange}
                          placeholder="Anniversaire, mariage, événement spécial..."
                        />
                      </div>
                    </div>

                    <div className="form-buttons">
                      <button 
                        type="button" 
                        onClick={handleBack} 
                        className="reservation-btn secondary"
                      >
                        RETOUR
                      </button>
                      <button type="submit" className="reservation-btn primary">
                        RÉSERVER
                      </button>
                    </div>
                  </>
                )}
              </motion.form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ReservationForm; 