import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faKey,
  faBolt,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import AvisGoogle from "../components/AvisGoogle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="home__hero">
        <div className="container">
          <motion.h1
            className="home__title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Votre dépannage de confiance
          </motion.h1>

          <motion.p
            className="home__description"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Bienvenue chez votre artisan en Côtes-d’Armor. Basé à Guingamp,
            Dépannage Gémeaux intervient 24h/24 et 7j/7 et vous conseille si
            besoin dans le domaine de la home et, prochainement, en électricité.
          </motion.p>

          <motion.div
            className="home__buttons"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <button className="home__button">
              <NavLink to="/serrurerie">Serrurerie</NavLink>
            </button>
            <button className="home__button home__button--primary">
              <NavLink to="/electricite">Électricité</NavLink>
            </button>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="contact_info">
        <div className="contact1">
          <FontAwesomeIcon icon={faBolt} /> Dépannage électricité
        </div>
        <div className="contact2">
          <a href="tel:+33769697279">07 69 69 72 79</a>
        </div>
        <div className="contact3">
          <FontAwesomeIcon icon={faLockOpen} /> Dépannage serrurerie
        </div>
      </section>

      {/* AVIS GOOGLE */}
      <motion.div>
        <AvisGoogle />
      </motion.div>

      {/* SECTION DEPANNAGE */}
      <motion.section
        className="heroDepannage"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container heroDepannage__content">
          <div className="heroDepannage__left">
            <h2>Votre dépanneur local</h2>
            <p>
              Intervention de dépannage home et électricité en toute confiance
              avec Dépannage Gémeaux.
            </p>
            <button className="heroDepannage__btn">Contactez-nous</button>
          </div>

          <div className="heroDepannage__right">
            <div className="heroDepannage__info">
              <FontAwesomeIcon icon={faBell} className="icon" />
              <div>
                <h3>Intervention</h3>
                <p>7j/7 et 24/24h</p>
              </div>
            </div>

            <div className="heroDepannage__info">
              <FontAwesomeIcon icon={faKey} className="icon" />
              <div>
                <h3>Artisan local</h3>
                <p>Côtes d'Armor</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION SERRURERIE */}
      <motion.section
        className="home-section1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-section1__content">
          <div className="container home-section1__wrapper">
            <div className="home-section1__text">
              <h2>Un service de home disponible 24h/24 et 7j/7</h2>
              <p>
                En plus de nos <strong>services de serrurerie</strong>,
                Dépannage Gémeaux propose également des prestations en{" "}
                <strong>électricité générale</strong>.
              </p>
              <p>
                Notre équipe est formée pour intervenir rapidement sur tout type
                de <strong>dépannage électrique</strong>.
              </p>
              <p>
                Nous vous conseillons dans vos projets électriques, pour des
                installations neuves ou rénovations.
              </p>
              <div className="home-section1__buttons">
                <button>
                  <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
                </button>
                <button>
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
            <div className="home-section1__image">
              <img src="tarifs1.jpg" alt="Logo" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION ELECTRICITE */}
      <motion.section
        className="home-section2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-section2__content">
          <div className="container home-section2__wrapper">
            <div className="home-section2__image">
              <img src="tarifs1.jpg" alt="Logo" />
            </div>
            <div className="home-section2__text">
              <h2>Électricité générale et dépannage d’urgence</h2>
              <p>
                Chez Dépannage Gémeaux, la sécurité de votre domicile est notre
                priorité. <strong>Serrurier expérimenté</strong> à Guingamp et
                alentours.
              </p>
              <p>
                Nous offrons des <strong>solutions rapides et adaptées</strong>.
              </p>
              <p>Tarifs transparents et interventions locales.</p>
              <div className="home-section2__buttons">
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

      <div className="artisan">
        <p>
          Artisan enregistré à la chambre des métiers et de l’artisanat de
          Bretagne. Fournitures et main d’œuvre garanties 10 ans.
        </p>
      </div>
    </main>
  );
}

export default Home;
