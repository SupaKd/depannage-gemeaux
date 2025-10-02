// src/layout/Footer.jsx
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      

      {/* Navigation */}
      <div className="footer__links">
          {/* Logo */}
      <div className="footer__logo">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
        <div className="footer__section">
          <h3 className="footer__title">Nos solutions</h3>
          <NavLink to="/serrurerie" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>Serrurerie</NavLink>
          <NavLink to="/electricite" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>Électricité</NavLink>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Informations</h3>
          <NavLink to="/tarifs" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>Nos Tarifs</NavLink>
          <NavLink to="/a-propos" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>Qui sommes-nous ?</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>Contact</NavLink>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Legal</h3>
          <NavLink to="/mentions" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>Mentions légales</NavLink>
          <a href="https://depannage-gemeaux.fr/wp-content/uploads/2025/03/CGV-2.pdf">Conditions générales de vente</a>
          <p className="footer__text">SIREN : 983 743 270</p>
          <p className="footer__text">Gérer mes cookies</p>
        </div>
      
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Dépannage-gémeaux. Tous droits réservés.
        </p>
        <p className="footer__powered">
          Powered by <a href="https://supaco-digital.com">Supaco.</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
