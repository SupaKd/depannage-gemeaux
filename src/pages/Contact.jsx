import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <main className="contact">
      {/* HERO SECTION */}
      <section className="hero_contact">
        <h1>Nous contacter</h1>
        <p>
          Besoin d’un dépannage en urgence ou d’un renseignement ? Nous sommes à
          votre disposition 24h/24 et 7j/7 pour intervenir rapidement à Guingamp
          et dans l’ouest des Côtes d’Armor.
        </p>
        <div className="hero_buttons">
          <button>
            <NavLink to="/tarifs">Nos tarifs</NavLink>
          </button>
          <button>
            <NavLink to="/devis">Votre devis gratuit</NavLink>
          </button>
        </div>
      </section>

      {/* INFOS RAPIDES */}
      <section className="contact_info">
        <div className="contact1">⚡ Intervention rapide</div>
        <div className="contact2">
          <a href="tel:+33769697279">📞 07 69 69 72 79</a>
        </div>
        <div className="contact3">✅ Devis gratuit</div>
      </section>

      {/* FORMULAIRE */}
      <section className="contact_form">
        <h2>Parlons de votre projet...</h2>

        <form>
          <label>
            Nom*
            <input type="text" name="nom" required />
          </label>

          <label>
            Téléphone*
            <input type="tel" name="telephone" required />
          </label>

          <label>
            Email*
            <input type="email" name="email" required />
          </label>

          <label>
            Ville*
            <input type="text" name="ville" required />
          </label>

          <label>
            Code postal*
            <input type="text" name="codepostal" required />
          </label>

          <label>
            Type de dépannage*
            <select name="depannage" required>
              <option value="">-- Sélectionnez --</option>
              <option value="serrurerie">Serrurerie</option>
              <option value="electrique">Électrique</option>
              <option value="autre">Autre</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message"></textarea>
          </label>

          <label className="checkbox">
            <input type="checkbox" name="urgent" />
            L’intervention est-elle urgente ?
          </label>

          <label className="checkbox">
            <input type="checkbox" name="urgent" />
            En soumettant votre message, vous acceptez que les informations
            saisies soient exploitées dans le cadre de la demande de devis et de
            la relation commerciale qui peut en découler.
          </label>

          <button type="submit" className="submit_btn">
            Envoyer votre demande
          </button>
        </form>
      </section>

      {/* MAP */}
      <section className="contact_map">
        <iframe
          title="Carte Côtes-d’Armor"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848344.2231873756!2d-3.4481625592126135!3d48.46489246512948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4811e20ef1c28d1d%3A0x30ca5cd36df26c0!2sC%C3%B4tes-d&#39;Armor!5e1!3m2!1sfr!2sfr!4v1759435870885!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
        <p>
          Artisan enregistré à la chambre des métiers et de l’artisanat de
          Bretagne. Fournitures et main d’œuvre garanties 10 ans.
        </p>
      </section>
    </main>
  );
}

export default Contact;
