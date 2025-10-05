import { NavLink } from "react-router-dom";
import AvisGoogle from "../components/AvisGoogle";

function Apropos() {
  return (
    <main className="apropos">
      <section className="apropos__hero">
        <h1 className="apropos__title">Qui sommes-nous ?</h1>
        <p className="apropos__description">
          Artisan local à votre service 24h/24, Dépannage Gémeaux intervient
          rapidement pour toutes vos urgences en serrurerie et électricité. Nous
          offrons des solutions sur mesure, adaptées à vos besoins, avec
          professionnalisme et proximité dans les Côtes d’Armor.
        </p>
        <div className="apropos__buttons">
          <button className="apropos__button">
            <NavLink to="/tarifs">Nos tarifs</NavLink>
          </button>
          <button className="apropos__button apropos__button--primary">
            <NavLink to="/devis">Votre devis gratuit</NavLink>
          </button>
        </div>
      </section>

      <section className="apropos-section1">
        <div className="apropos-section1__content">
          <div className="container apropos-section1__wrapper">
            <div className="apropos-section1__text">
              <h2>Une entreprise artisanale à votre service</h2>
              <p>
                Dépannage Gémeaux, c’est avant tout une entreprise artisanale
                implantée à Guingamp, au cœur des Côtes d’Armor. Serrurier
                diplômé et répertorié auprès de la Chambre des Métiers et de
                l’Artisanat de Bretagne, notre intervenant exerce son métier
                avec passion et professionnalisme depuis 2016. Fort de plusieurs
                années d’expérience, nous avons officiellement ouvert Dépannage
                Gémeaux en décembre 2023 pour répondre aux besoins croissants en
                dépannage en serrurerie et petites interventions électriques.
              </p>
              <br />
              <p>
                Spécialisés dans le dépannage en serrurerie et les petites
                interventions électriques, nous sommes à vos côtés 24h/24 et
                7j/7 pour répondre à vos urgences. Que ce soit pour une porte
                bloquée, une serrure endommagée, ou une intervention électrique
                hors tension, nous mettons un point d’honneur à intervenir
                rapidement, avec professionnalisme et transparence.
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

      

      <section className="apropos-section2">
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
              ></iframe>{" "}
            </div>
            <div className="apropos-section2__text">
              <h2>Des services sur mesure dans l’ouest des Côtes d’Armor</h2>
              <p>
                Nous couvrons principalement la moitié ouest des Côtes d’Armor,
                avec des interventions dans des villes comme Guingamp,
                Saint-Brieuc, Lannion, Morlaix, Callac et Paimpol. Notre
                engagement est de fournir des prestations de qualité, à des
                tarifs compétitifs, tout en assurant la sécurité et la
                satisfaction de nos clients. Grâce à notre expertise, nous
                sommes en mesure de vous conseiller sur les meilleures options
                pour sécuriser vos accès ou pour résoudre vos problèmes
                électriques.
              </p>
              <br />
              <p>
                Chez Dépannage Gémeaux, nous plaçons la satisfaction de nos
                clients au cœur de notre démarche. Chaque intervention est
                réalisée avec minutie et dans le respect des normes en vigueur.
                Vous avez une question ou besoin d’un conseil ? Notre équipe est
                à votre écoute pour vous accompagner et vous offrir la
                tranquillité d’esprit que vous méritez.
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
      </section>

      <section>
        <AvisGoogle />
      </section>
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
