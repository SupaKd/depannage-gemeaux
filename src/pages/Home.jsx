import { NavLink } from "react-router-dom";
import Bando from "../components/Bando";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faKey } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <h1 className="home__title">Votre dépannage de confiance</h1>
        <p className="home__description">
          Bienvenue chez votre artisan en Côtes-d’Armor. Basé à Guingamp,
          Dépannage Gémeaux intervient 24h/24 et 7j/7 et vous conseille si
          besoin dans le domaine de la home et, prochainement, en électricité.
        </p>
        <div className="home__buttons">
          <button className="home__button">
            <NavLink to="/home">home</NavLink>
          </button>
          <button className="home__button home__button--primary">
            <NavLink to="/electricite">Électricité</NavLink>
          </button>
        </div>
      </section>

      <Bando />
      <h2>AVIS GOOGLE</h2>
      <section className="heroDepannage">
        <div className="heroDepannage__content">
          {/* Colonne gauche */}
          <div className="heroDepannage__left">
            <h1>Votre dépanneur local</h1>
            <p>
              Intervention de dépannage home et électricité en toute confiance
              avec Dépannage Gémeaux.
            </p>
            <button className="heroDepannage__btn">Contactez-nous</button>
          </div>

          {/* Colonne droite */}
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
      </section>
      <section className="home-section1">
        <div className="home-section1__text">
          <h2>Un service de home disponible 24h/24 et 7j/7</h2>
          <p>
            Chez Dépannage Gémeaux, la sécurité de votre domicile est notre
            priorité. <strong>Serrurier expérimenté</strong>, nous intervenons
            rapidement à<strong> Guingamp</strong> et dans les villes voisines
            telles que <strong>Lannion</strong>,<strong>Saint-Brieuc</strong>,{" "}
            <strong>Paimpol</strong>, <strong>Morlaix</strong> et{" "}
            <strong>Callac</strong>. Que vous soyez confronté à une porte
            claquée, une serrure endommagée ou une effraction, nous assurons un
            service d’urgence 24h/24, 7 jours sur 7, afin de sécuriser vos accès
            en un temps record.
          </p>
          <br />
          <p>
            Nous nous engageons à vous offrir des solutions adaptées à vos
            besoins, qu’il s’agisse de l’ouverture de porte, du remplacement de
            serrure ou de l’installation de dispositifs de sécurité renforcés.
            Grâce à notre expertise et à notre <strong>proximité</strong>, nous
            sommes votre interlocuteur privilégié en cas d’urgence.
          </p>
          <br />
          <p>
            Nous comprenons que chaque situation est unique et que les besoins
            peuvent varier. C’est pourquoi nous vous proposons des{" "}
            <strong>tarifs transparents</strong>, ajustés selon la complexité de
            l’intervention et votre localisation géographique. Vous êtes assuré
            de recevoir un service de qualité, au meilleur coût possible, sans
            mauvaise surprise.
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
      </section>
      <section className="home-section2">
        <div className="home-section2__image">
          <img src="contact_hero.jpg" alt="img" />
        </div>
        <div className="home-section2__text">
          <h2>Électricité générale et dépannage d’urgence</h2>
          <p>
            En plus de nos <strong>services de serrurerie</strong>, Dépannage
            Gémeaux propose également des prestations en{" "}
            <strong>électricité générale</strong>. Que ce soit pour une panne
            électrique, une intervention sur vos installations ou une mise en
            sécurité de votre domicile, nous sommes à votre disposition jour et
            nuit pour répondre à vos besoins urgents.
          </p>
          <p>
            Notre équipe est formée pour intervenir rapidement sur tout type de 
            <strong> dépannage électrique</strong>, vous garantissant un retour à
            la normale en toute sécurité. Nos prestations couvrent aussi bien
            les installations résidentielles que commerciales, avec la même
            exigence de qualité et de rapidité.
          </p>
          <p>
            Au-delà des <strong>dépannages d’urgence</strong>, nous vous conseillons dans vos
            projets électriques, que ce soit pour des installations neuves, des
            rénovations ou des mises aux normes. Nous nous adaptons à vos
            besoins spécifiques pour vous offrir des solutions durables et
            conformes aux dernières réglementations en vigueur.
          </p>
          <div className="home-section2__buttons">
            <button>
              <NavLink to="/tarifs">Consultez nos tarifs</NavLink>
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

export default Home;
