import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheck, faBolt } from "@fortawesome/free-solid-svg-icons";
function Bando() {
    return (
      <section className="contact_info">
      <div className="contact1"><FontAwesomeIcon icon={faBolt} /> Intervention rapide</div>
      <div className="contact2">
        <a href="tel:+33769697279">
        07 69 69 72 79</a>
      </div>
      <div className="contact3"><FontAwesomeIcon icon={faCheck} /> Devis gratuit</div>
    </section>
    )
}

export default Bando