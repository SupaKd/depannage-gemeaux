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
            <button className="home__redbtn">
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
              <h2>Un service de serrurerie disponible 24h/24 et 7j/7</h2>
              <p>
                Chez Dépannage Gémeaux, la sécurité de votre domicile est notre
                priorité. <strong>Serrurier expérimenté</strong>, nous
                intervenons rapidement à<strong> Guingamp</strong> et dans les
                villes voisines telles que <strong>Lannion</strong>,
                <strong>Saint-Brieuc</strong>, <strong>Paimpol</strong>,{" "}
                <strong>Morlaix</strong> et <strong>Callac</strong>. Que vous
                soyez confronté à une porte claquée, une serrure endommagée ou
                une effraction, nous assurons un service d’urgence 24h/24, 7
                jours sur 7, afin de sécuriser vos accès en un temps record.
              </p>
              <br />
              <p>
                Nous nous engageons à vous offrir des solutions adaptées à vos
                besoins, qu’il s’agisse de l’ouverture de porte, du remplacement
                de serrure ou de l’installation de dispositifs de sécurité
                renforcés. Grâce à notre expertise et à notre{" "}
                <strong>proximité</strong>, nous sommes votre interlocuteur
                privilégié en cas d’urgence.
              </p>
              <br />
              <p>
                Nous comprenons que chaque situation est unique et que les
                besoins peuvent varier. C’est pourquoi nous vous proposons des
                <strong> tarifs transparents</strong>, ajustés selon la
                complexité de l’intervention et votre localisation géographique.
                Vous êtes assuré de recevoir un service de qualité, au meilleur
                coût possible, sans mauvaise surprise.
              </p>
              <div className="home-section1__buttons">
                <button>
                  <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
                </button>
                <button className="home__redbtn">
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
            <div className="home-section1__image">
              <img src="keys.jpg" alt="Logo" />
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
            
            <div className="home-section2__text">
              <h2>Électricité générale et dépannage d’urgence</h2>
              <p>
                En plus de nos <strong>services de serrurerie</strong>, Dépannage Gémeaux propose
                également des prestations en <strong>électricité générale</strong>. Que ce soit
                pour une panne électrique, une intervention sur vos
                installations ou une mise en sécurité de votre domicile, nous
                sommes à votre disposition jour et nuit pour répondre à vos
                besoins urgents.
              </p>
              <br />
              <p>
                Notre équipe est formée pour intervenir rapidement sur tout type
                de <strong>dépannage électrique</strong>, vous garantissant un retour à la
                normale en toute sécurité. Nos prestations couvrent aussi bien
                les installations résidentielles que commerciales, avec la même
                exigence de qualité et de rapidité.
              </p>
              <br />
              <p>
                Au-delà des <strong>dépannages d’urgence</strong>, nous vous conseillons dans vos
                projets électriques, que ce soit pour des installations neuves,
                des rénovations ou des mises aux normes. Nous nous adaptons à
                vos besoins spécifiques pour vous offrir des solutions durables
                et conformes aux dernières réglementations en vigueur.
              </p>
              <div className="home-section2__buttons">
                <button>
                  <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
                </button>
                <button className="home__redbtn"> 
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
            <div className="home-section2__image">
              <img src="electricien.jpg" alt="Logo" />
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
