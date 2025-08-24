import './Reservation.css';
import React, { useState } from 'react';

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
    setForm({ ...form, [e.target.name]: e.target.value });
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
      {confirmation && (
        <div style={{
          backgroundColor: '#d4f8d4',
          color: '#222',
          padding: '2rem',
          borderRadius: '16px',
          margin: '2rem 0',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1.3rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          {confirmation}
        </div>
      )}
      {!confirmation && (
        <form className="reservation-form" onSubmit={step === 1 ? handleNext : handleSubmit}>
          {step === 1 && (
            <>
              <label>Nom</label>
              <input name="nom" value={form.nom} onChange={handleChange} required />

              <label>Prénom</label>
              <input name="prenom" value={form.prenom} onChange={handleChange} required />

              <label>Téléphone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required />

              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required />

              <button type="submit">Suivant</button>
            </>
          )}

          {step === 2 && (
            <>
              <label>Nombre de personnes</label>
              <input name="guests" type="number" min="1" max="20" value={form.guests} onChange={handleChange} required />

              <label>Date</label>
              <input name="reservation_date" type="date" value={form.reservation_date} onChange={handleChange} required />

              <label>Heure</label>
              <input name="reservation_time" type="time" value={form.reservation_time} onChange={handleChange} required />

              <label>Motif (optionnel)</label>
              <textarea name="motif" value={form.motif} onChange={handleChange} />

              <button onClick={handleBack}>Retour</button>
              <button type="submit">Réserver</button>
            </>
          )}
        </form>
      )}
    </div>
  );
}

export default ReservationForm; 