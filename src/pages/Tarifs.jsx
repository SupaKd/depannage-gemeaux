import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Bando from "../components/Bando";
import AvisGoogle from "../components/AvisGoogle";
import GoogleReviews from "../components/GoogleReviews";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Tarifs() {
  return (
    <main className="tarifs">
      {/* HERO SECTION */}
      <section className="hero_tarifs">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Tarifs des interventions de dépannage
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Des tarifs clairs et adaptés à vos besoins, que ce soit pour une
          urgence en serrurerie ou un dépannage électrique. Chaque intervention
          est réalisée avec soin, transparence et au meilleur prix, selon votre
          localisation dans les Côtes d’Armor.
        </motion.p>
        <motion.div
          className="hero_buttons"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <button>
            <NavLink to="/#">Les forfaits</NavLink>
          </button>
          <button className="tarif__redbtn">
            <NavLink to="/#">Prestation complémentaires</NavLink>
          </button>
        </motion.div>
      </section>

      <Bando />
      <motion.section
        className="tarifs-section1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="tarifs-section1__content">
          <div className="container tarifs-section1__wrapper">
            <div className="tarifs-section1__text">
              <h2>Nos forfaits de dépannage</h2>
              <p>
                Nous proposons des forfaits adaptés à chaque type
                d’intervention, en serrurerie comme en électricité...
              </p>
              <p>
                <strong>
                  Dépannage standard (jusqu’à 1h d’intervention) :
                </strong>
              </p>
              <ul>
                <li>Intervention Guingamp : 100.00€</li>
                <li>Intervention jusqu'à 20 km : 130.00€.</li>
                <li>Intervention jusqu'à 30 km : 190.00€.</li>
                <li>Intervention jusqu'à 40 km : 220.00€.</li>
                <li>Intervention jusqu'à 50 km : 250.00€.</li>
                <li>Intervention jusqu'à 60 km : 280.00€.</li>
                <li>Majoration 50% hors jour ouvré ou plage horaire standard (09/19h).</li>



               
              </ul>
              <div className="tarifs-section1__buttons">
                <button>
                  <NavLink to="/serrurerie">En savoir plus</NavLink>
                </button>
                <button className="tarif__redbtn"> 
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
            <div className="tarifs-section1__image">
              <img src="tarifs1.jpg" alt="Logo" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="tarifs-section2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="tarifs-section2__content">
          <div className="container tarifs-section2__wrapper">
            
            <div className="tarifs-section2__text">
              <h2>Produits et prestations complémentaires</h2>
              <p>
                En complément des interventions de dépannage, nous proposons une
                gamme de produits de serrurerie adaptés à vos besoins.
              </p>
              <strong>Cylindres :</strong>
              <ul>
                <li>5G : 40€</li>
                <li>6G : 60€</li>
                <li>Renforcé contre l’effraction : 80€</li>
                <li>
                  Cylindre de prêt : 20€ (non remboursable, reste la propriété
                  de l’entreprise).
                </li>
              </ul>
              <p>
                <strong>Ouvertures de coffres :</strong>
              </p>
              <ul>
                <li>Tarifs entre 500€ et 2 000€ selon le modèle...</li>
              </ul>
              <p>
                <strong>Remise des clés :</strong>
              </p>
              <ul>
                <li>
                  La remise des clés est conditionnée au règlement complet...
                </li>
              </ul>
              <p>
                <strong>Frais de déplacement professionnels :</strong>
              </p>
              <ul>
                <li>4€ par kilomètre...</li>
              </ul>
              <p>
                <strong>Déplacements supplémentaires :</strong>
              </p>
              <ul>
                <li>1,5€/km routier parcouru</li>
              </ul>
              <p>
                <strong>Main d’oeuvre supplémentaire :</strong>
              </p>
              <ul>
                <li>70€, 100€ nuit ou week-end, 130€ nuit + week-end</li>
              </ul>
              <div className="tarifs-section2__buttons">
                <button>
                  <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
                </button>
                <button className="tarif__redbtn">
                  <NavLink to="/contact">Contactez-nous</NavLink>
                </button>
              </div>
            </div>
            <div className="tarifs-section2__image">
              <img src="tarifs2.jpg" alt="Logo" />
            </div>
          </div>
        </div>
      </motion.section>

      <AvisGoogle />
      <GoogleReviews />

      <p className="artisan">
        Artisan enregistré à la chambre des métiers et de l’artisanat de
        Bretagne. Fournitures et main d’œuvre garanties 10 ans.
      </p>
    </main>
  );
}

export default Tarifs;
