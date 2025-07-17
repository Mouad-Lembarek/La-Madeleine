import './Reservation.css';
import { useState } from 'react';

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function Reservation() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    personnes: '',
    motif: '',
    table: '',
  });
  const [telError, setTelError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'telephone') {
      setTelError('');
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Validation du numéro de téléphone
    const tel = form.telephone.replace(/\D/g, '');
    if (tel.length !== 10) {
      setTelError('Le numéro de téléphone doit contenir exactement 10 chiffres.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="page-content">
      <h2>Réservation</h2>
      {confirmed ? (
        <div className="reservation-confirmation">
          <p>Réservation confirmée pour {capitalize(form.nom)} {capitalize(form.prenom)}, veuillez vérifier votre mail.</p>
        </div>
      ) : (
        <>
          {step === 1 && (
            <form className="reservation-form" onSubmit={handleNext}>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" value={form.nom} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" value={form.prenom} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Numéro de téléphone</label>
                <input type="tel" id="telephone" name="telephone" value={form.telephone} onChange={handleChange} required />
                {telError && <span className="error-message">{telError}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <button type="submit" className="reservation-next">Suivant</button>
            </form>
          )}
          {step === 2 && (
            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="personnes">Nombre de personnes</label>
                <input type="number" id="personnes" name="personnes" min="1" value={form.personnes} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="motif">Motif de réservation</label>
                <input type="text" id="motif" name="motif" value={form.motif} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="table">Choix de table</label>
                <select id="table" name="table" value={form.table} onChange={handleChange} required>
                  <option value="">Sélectionner une table</option>
                  <option value="fenetre">Près de la fenêtre</option>
                  <option value="terrasse">En terrasse</option>
                  <option value="salle">En salle</option>
                </select>
              </div>
              <button type="submit" className="reservation-submit">Réserver</button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default Reservation; 