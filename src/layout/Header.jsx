// src/layout/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      {/* Burger button */}
      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu mobile"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} />
      </button>
      {/* Logo */}
      <Link to="/" onClick={closeMenu} className="logo_mobile">
        <img src="/logo.svg" alt="Logo" />
        <p>Intervention 24h/24 et 7j/7</p>
      </Link>
      <Link to="/" onClick={closeMenu} className="logo_desktop">
        <img src="/logo.svg" alt="Logo" />
      </Link>
      {/* Navigation */}
      <nav className={`header__nav ${isOpen ? "show" : ""}`}>
        {/* Bouton fermer */}
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <img src="/logo.svg" alt="logo" />
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/serrurerie"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Serrurerie
        </NavLink>
        <NavLink
          to="/electricite"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Électricité
        </NavLink>
        <NavLink
          to="/tarifs"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Nos Tarifs
        </NavLink>
        <NavLink
          to="/apropos"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Qui sommes-nous ?
        </NavLink>
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className="tel_header">
        <a href="tel:+33769697279"><FontAwesomeIcon icon={faPhoneFlip} /></a>
      </div>{" "}
    </header>
  );
}

export default Header;
