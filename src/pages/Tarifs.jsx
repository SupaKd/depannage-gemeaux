import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBolt } from "@fortawesome/free-solid-svg-icons";
function Tarifs() {
  return (
    <main className="tarifs">
      <section className="hero_tarifs">
        <h1>Tarifs des interventions de dépannage</h1>
        <p>
          Des tarifs clairs et adaptés à vos besoins, que ce soit pour une
          urgence en serrurerie ou un dépannage électrique. Chaque intervention
          est réalisée avec soin, transparence et au meilleur prix, selon votre
          localisation dans les Côtes d’Armor.
        </p>
        <div className="hero_buttons">
          <button>
            <NavLink to="/#">Les forfaits</NavLink>
          </button>
          <button>
            <NavLink to="/#">Prestation complémentaires</NavLink>
          </button>
        </div>
      </section>

      <section className="tarifs-section1">
        <div className="tarifs-section1__text">
          <h2>Nos forfaits de dépannage</h2>
          <p>
            Nous proposons des forfaits adaptés à chaque type d’intervention, en
            serrurerie comme en électricité. Nos tarifs varient en fonction du
            type de dépannage et de la distance parcourue depuis notre siège à
            Guingamp.
          </p>

          <p>
            <strong>Dépannage standard (jusqu’à 1h d’intervention) :</strong>
          </p>
          <ul>
            <li>Secteur Guingamp : 100€</li>
            <li>Jusqu’à 20 km : 130€</li>
            <li>20 à 40 km : 160€</li>
            <li>40 à 60 km : 210€</li>
          </ul>

          <div className="tarifs-section1__buttons">
            <button>
              <NavLink to="/serrurerie">En savoir plus</NavLink>
            </button>
            <button>
              <NavLink to="/contact">Contactez-nous</NavLink>
            </button>
          </div>
        </div>
        <div className="tarifs-section1__image">
          <img src="tarifs1.jpg" alt="Logo" />
        </div>
      </section>

      <section className="tarifs_info">
        <div className="tarifs1">
          <FontAwesomeIcon icon={faBolt} /> Intervention rapide
        </div>
        <div className="tarifs2">
          <a href="tel:+33769697279">07 69 69 72 79</a>
        </div>
        <div className="tarifs3">
          <FontAwesomeIcon icon={faCheck} /> Devis gratuit
        </div>
      </section>

      <section className="tarifs-section1">
        <div className="tarifs-section1__image">
          <img src="tarifs2.jpg" alt="Logo" />
        </div>
        <div className="tarifs-section1__text">
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
              Cylindre de prêt : 20€ (non remboursable, reste la propriété de
              l’entreprise).
            </li>
          </ul>
          <p>
            <strong>Ouvertures de coffres :</strong>
          </p>
          <ul>
            <li>
              Tarifs entre 500€ et 2 000€ selon le modèle (ouverture par
              effraction et neutralisation complète du système d’ouverture,
              inutilisable par la suite; évacuation non incluse).
            </li>
          </ul>
          <p>
            <strong>Remise des clés :</strong>
          </p>
          <ul>
            <li>
              La remise des clés est conditionnée au règlement complet de la
              prestation.
            </li>
          </ul>
          <p>
            <strong>Frais de déplacement professionnels :</strong>
          </p>
          <ul>
            <li>
              4€ par kilomètre (calculé entre le siège social et le lieu
              d’intervention).
            </li>
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

          <div className="tarifs-section1__buttons">
            <button>
              <NavLink to="/serrurerie">En savoir plus</NavLink>
            </button>
            <button>
              <NavLink to="/contact">Contactez-nous</NavLink>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tarifs;
