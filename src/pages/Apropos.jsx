import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AvisGoogle from "../components/AvisGoogle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Apropos() {
  return (
    <main className="apropos">
      {/* HERO SECTION */}
      <section className="apropos__hero">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Qui sommes-nous ?
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Artisan local à votre service 24h/24, Dépannage Gémeaux intervient
          rapidement pour toutes vos urgences en serrurerie et électricité. Nous
          offrons des solutions sur mesure, adaptées à vos besoins, avec
          professionnalisme et proximité dans les Côtes d’Armor.
        </motion.p>
        <motion.div
          className="apropos__buttons"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <button className="apropos__button">
            <NavLink to="/tarifs">Nos tarifs</NavLink>
          </button>
          <button className="apropos__button apropos__button--primary">
            <NavLink to="/devis">Votre devis gratuit</NavLink>
          </button>
        </motion.div>
      </section>

      <section className="apropos-section1">
        <div className="apropos-section1__content">
          <div className="container apropos-section1__wrapper">
            <div className="apropos-section1__text">
              <h2>Une entreprise artisanale à votre service</h2>
              <p>
                Dépannage Gémeaux, c’est avant tout une entreprise artisanale
                implantée à Guingamp, au cœur des Côtes d’Armor...
              </p>
              <br />
              <p>
                Spécialisés dans le dépannage en serrurerie et les petites
                interventions électriques, nous sommes à vos côtés 24h/24 et
                7j/7 pour répondre à vos urgences...
              </p>
              <div className="apropos-section1__buttons">
                <button>
                  <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
                </button>
                <button>
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
            <div className="apropos-section1__image">
              <img src="logo2.svg" alt="Logo" />
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="apropos-section2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="apropos-section2__content">
          <div className="container apropos-section2__wrapper">
            <div className="apropos-section2__image">
              <iframe
                title="Carte Côtes-d’Armor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848344.2231873756!2d-3.4481625592126135!3d48.46489246512948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4811e20ef1c28d1d%3A0x30ca5cd36df26c0!2sC%C3%B4tes-d&#39;Armor!5e1!3m2!1sfr!2sfr!4v1759435870885!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="apropos-section2__text">
              <h2>Des services sur mesure dans l’ouest des Côtes d’Armor</h2>
              <p>
                Nous couvrons principalement la moitié ouest des Côtes
                d’Armor...
              </p>
              <br />
              <p>
                Chez Dépannage Gémeaux, nous plaçons la satisfaction de nos
                clients au cœur de notre démarche...
              </p>
              <div className="apropos-section2__buttons">
                <button>
                  <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
                </button>
                <button>
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <AvisGoogle />

      <div className="artisan">
        <p>
          Artisan enregistré à la chambre des métiers et de l’artisanat de
          Bretagne. Fournitures et main d’œuvre garanties 10 ans.
        </p>
      </div>
    </main>
  );
}

export default Apropos;
