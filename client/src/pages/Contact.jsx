import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send the form data to a backend or email service
  };

  return (
    <div className="page-content">
      <h2>Contactez-nous</h2>
      {submitted ? (
        <p>Merci pour votre message, {form.prenom} ! Nous vous répondrons bientôt.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" value={form.nom} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" value={form.prenom} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} />
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      )}
    </div>
  );
}

export default Contact; 