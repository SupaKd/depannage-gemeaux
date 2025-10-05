import React from "react";
import { NavLink } from "react-router-dom";
import Bando from "../components/Bando";
import AvisSlider from "../components/AvisSlider";
import Faqserrurerie from "../components/Faqserrurerie";
function Serrurerie() {
  return (
    <main className="serrurerie">
      <section className="serrurerie__hero">
        <h1 className="serrurerie__title">Dépannage serrurerie</h1>
        <p className="serrurerie__description">
          Intervention rapide et sécurisée pour tous vos problèmes de serrurerie
          à Guingamp et dans les villes voisines. Que ce soit une porte bloquée
          ou une serrure endommagée, nous sommes là pour vous dépanner à tout
          moment.
        </p>
        <div className="serrurerie__buttons">
          <button className="serrurerie__button">
            <NavLink to="/tarifs">Nos tarifs</NavLink>
          </button>
          <button className="serrurerie__button serrurerie__button--primary">
            <NavLink to="/devis">Votre devis gratuit</NavLink>
          </button>
        </div>
      </section>{" "}
      <Bando />
      <section className="serrurerie-section1">
        <div className="serrurerie-section1__text">
          <h2>Une entreprise artisanale à votre service</h2>
          <p>
            Dépannage Gémeaux, c’est avant tout une entreprise artisanale
            implantée à Guingamp, au cœur des Côtes d’Armor. Serrurier diplômé
            et répertorié auprès de la Chambre des Métiers et de l’Artisanat de
            Bretagne, notre intervenant exerce son métier avec passion et
            professionnalisme depuis 2016. Fort de plusieurs années
            d’expérience, nous avons officiellement ouvert Dépannage Gémeaux en
            décembre 2023 pour répondre aux besoins croissants en dépannage en
            serrurerie et petites interventions électriques.
          </p>
          <br />
          <p>
            Spécialisés dans le dépannage en serrurerie et les petites
            interventions électriques, nous sommes à vos côtés 24h/24 et 7j/7
            pour répondre à vos urgences. Que ce soit pour une porte bloquée,
            une serrure endommagée, ou une intervention électrique hors tension,
            nous mettons un point d’honneur à intervenir rapidement, avec
            professionnalisme et transparence.
          </p>
          <div className="serrurerie-section1__buttons">
            <button>
              <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
            </button>
            <button>
              <NavLink to="/contact">Contactez-nous</NavLink>
            </button>
          </div>
        </div>
        <div className="serrurerie-section1__image">
          <img src="tarifs1.jpg" alt="Logo" />
        </div>
      </section>
      <AvisSlider />
      <section className="serrurerie-section2">
        <div className="serrurerie-section2__text">
          <h2>Des services de serrurerie professionnels et accessibles</h2>
          <p>
            Chez Dépannage Gémeaux, nous avons à cœur de proposer un service de
            qualité, accessible à tous. Nos interventions sont non seulement
            rapides, mais aussi <strong>adaptées à votre budget</strong> et à la
            spécificité de votre localisation.
          </p>
          <p>
            Nos tarifs sont calculés en fonction de votre localisation et de la
            complexité de l’intervention. Nous vous garantissons une
            transparence totale, sans frais cachés, avec des prix adaptés selon
            les zones géographiques que nous couvrons, comme{" "}
            <strong>Guingamp</strong>,<strong> Paimpol</strong> , et{" "}
            <strong>Saint-Brieuc</strong>.
          </p>
          <p>
            Fort de plusieurs années d’expérience, Dépannage Gémeaux s’engage à
            vous offrir un service irréprochable. Notre expertise couvre tous
            types de serrures, des modèles standards aux serrures renforcées
            contre les effractions. Chaque intervention est réalisée avec
            précision pour garantir votre satisfaction.
          </p>
          <p>
            Au-delà des urgences, nous vous accompagnons pour des projets de
            sécurisation à plus long terme. Que ce soit pour le blindage de
            portes ou l’installation de serrures intelligentes, nous vous
            conseillons sur les meilleures solutions en fonction de vos besoins
            et de votre budget.
          </p>
          <div className="serrurerie-section2__buttons">
            <button>
              <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
            </button>
            <button>
              <NavLink to="/contact">Contactez-nous</NavLink>
            </button>
          </div>
        </div>
        <div className="serrurerie-section2__image">
          <img src="tarifs2.jpg" alt="Logo" />
        </div>
      </section>
      <Faqserrurerie />
      <div className="artisan">
        <p>
          Artisan enregistré à la chambre des métiers et de l’artisanat de
          Bretagne. Fournitures et main d’œuvre garanties 10 ans.
        </p>
      </div>
    </main>
  );
}

export default Serrurerie;
