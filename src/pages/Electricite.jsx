import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import Bando from "../components/Bando";
function Electricite() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <main className="electricite">
      <section className="electricite__hero">
        <motion.h1
          className="electricite__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Dépannage electricite
        </motion.h1>
        <motion.p
          className="electricite__description"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Besoin d’un dépannage électrique ? Nous intervenons rapidement à
          Guingamp et dans l’ouest du département pour résoudre vos petits
          problèmes électriques hors tension.
        </motion.p>
        <motion.div
          className="electricite__buttons"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <button className="electricite__button">
            <NavLink to="/tarifs">Nos tarifs</NavLink>
          </button>
          <button className="electricite__redbtn">
            <NavLink to="/devis">Votre devis gratuit</NavLink>
          </button>
        </motion.div>
      </section>
      <Bando />

      <motion.section
        className="electricite-section1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="electricite-section1__content">
          <div className="container electricite-section1__wrapper">
            <div className="electricite-section1__text">
              <h2>Un dépannage électrique sécurisé et rapide</h2>

              <p>
                Dépannage Gémeaux propose des{" "}
                <strong>
                  interventions d’urgence pour résoudre vos problèmes
                  électriques
                </strong>{" "}
                non complexes, tout en respectant les normes de sécurité. Avec
                une habilitation de niveau 1, nous sommes en mesure de réaliser
                des dépannages sur les installations hors tension, comme le
                remplacement de prises électriques, de luminaires ou d’ampoules
                défectueuses.
              </p>
              <br />
              <p>
                Nous intervenons également pour les manœuvres de disjoncteurs
                dans les locaux réservés aux électriciens, garantissant un
                service sécurisé et conforme aux réglementations en vigueur.
                Grâce à notre proximité, nous assurons des interventions rapides
                à Guingamp et dans les villes voisines comme{" "}
                <strong>Saint-Brieuc</strong>,<strong>Paimpol</strong>, et{" "}
                <strong>Callac</strong>.
              </p>
              <br />
              <p>
                Pour toutes vos urgences électriques hors tension, qu’il
                s’agisse d’un interrupteur défectueux ou d’un problème de
                prises, <strong>Dépannage Gémeaux</strong> est votre interlocuteur de confiance.
                Nous mettons un point d’honneur à assurer la sécurité de vos
                installations électriques en vous conseillant sur les meilleures
                pratiques et en intervenant rapidement pour rétablir le bon
                fonctionnement de vos équipements.
              </p>

              <div className="electricite-section1__buttons">
                <button>
                  <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
                </button>
                <button className="electricite__redbtn">
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
            <div className="electricite-section1__image">
              <img src="electricien.jpg" alt="Logo" />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Electricite;
