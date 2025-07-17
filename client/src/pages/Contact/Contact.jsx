import './Contact.css';

function Contact() {
  return (
    <div className="page-content">
      <h2>Contact</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" required />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" name="prenom" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message souhaité</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="contact-submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact; 