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
      alert('Réservation envoyée !');
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
      alert('Erreur lors de la réservation');
    }
  };

  return (
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

          <label>Choix du table</label>
          <select name="latableid" value={form.latableid} onChange={handleChange} required>
            <option value="">Sélectionnez une table</option>
            <option value="1">Près de la fenêtre</option>
            <option value="2">En terrasse</option>
            <option value="3">Au centre de la salle</option>
            <option value="4">Coin tranquille</option>
          </select>

          <button onClick={handleBack}>Retour</button>
          <button type="submit">Réserver</button>
        </>
      )}
    </form>
  );
}

export default ReservationForm; 