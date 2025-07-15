import { useState } from 'react';

const personsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const times = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

function Reservation() {
  const [step, setStep] = useState(1);
  const [reservation, setReservation] = useState({
    persons: 2,
    date: '',
    time: '',
    note: ''
  });
  const [info, setInfo] = useState({
    fullname: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleReservationChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };
  const handleInfoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send the reservation data to a backend
  };

  return (
    <div className="page-content reservation-page">
      <h2>Réserver une table</h2>
      {submitted ? (
        <div className="reservation-success">
          <p>Merci {info.fullname}, votre réservation a été prise en compte !</p>
        </div>
      ) : (
        <form className="reservation-form" onSubmit={step === 1 ? handleNext : handleSubmit}>
          {step === 1 && (
            <div className="reservation-step">
              <div className="form-group">
                <label htmlFor="persons">Nombre de personnes</label>
                <select id="persons" name="persons" value={reservation.persons} onChange={handleReservationChange} required>
                  {personsOptions.map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'personne' : 'personnes'}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={reservation.date} onChange={handleReservationChange} min={today} required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Heure</label>
                <select id="time" name="time" value={reservation.time} onChange={handleReservationChange} required>
                  <option value="">Choisir une heure</option>
                  {times.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="note">Note (optionnel)</label>
                <textarea id="note" name="note" value={reservation.note} onChange={handleReservationChange} placeholder="Ex: Nous préférerions une table près de la fenêtre." rows={2} />
              </div>
              <button type="submit" className="submit-btn">Suivant</button>
            </div>
          )}
          {step === 2 && (
            <div className="reservation-step">
              <div className="form-group">
                <label htmlFor="fullname">Nom complet</label>
                <input type="text" id="fullname" name="fullname" value={info.fullname} onChange={handleInfoChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={info.email} onChange={handleInfoChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone" value={info.phone} onChange={handleInfoChange} required />
              </div>
              <div className="reservation-actions">
                <button className="submit-btn secondary" onClick={handleBack}>Retour</button>
                <button type="submit" className="submit-btn">Réserver</button>
              </div>
            </div>
          )}
        </form>
      )}
      <div className="reservation-info">
        <small>La table est gardée 15 min après l'heure de réservation. Merci d'être à l'heure.</small>
      </div>
    </div>
  );
}

export default Reservation; 