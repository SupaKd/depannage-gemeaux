// src/components/GoogleReviews/GoogleReviews.jsx
import React from "react";

// Usage:
// <GoogleReviews placeLink="https://share.google/ITv3zeSz5upQPXqoX"/>

export default function GoogleReviews({
  placeLink = "https://share.google/ITv3zeSz5upQPXqoX",
}) {
  const openLink = () => window.open(placeLink, "_blank", "noopener");
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(placeLink);
      // small visual feedback by toggling a class
      const el = document.querySelector(".gr__copy");
      if (el) {
        el.classList.add("gr__copied");
        setTimeout(() => el.classList.remove("gr__copied"), 1200);
      }
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  return (
    <section className="gr">
      <div className="gr__card">
        <div className="gr__header">
          <div className="gr__badge">Google</div>
          <div className="gr__rating">
            <div className="gr__stars" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="gr__star">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.896 4.664 23.168l1.402-8.17L.132 9.21l8.2-1.192z" />
                </svg>
              ))}
            </div>
            <div className="gr__meta">
              <strong>Voir nos avis</strong>
              <span className="gr__small">Sur Google Business Profile</span>
            </div>
          </div>
        </div>

        <div className="gr__body">
          <p className="gr__text">
            Les avis clients sont consultables sur notre fiche Google. Cliquez
            pour ouvrir la page officielle.
          </p>

          <div className="gr__actions">
            <button
              className="gr__btn gr__btn--primary"
              onClick={openLink}
              aria-label="Ouvrir les avis sur Google"
            >
              Ouvrir les avis
            </button>

            <button
              className="gr__btn gr__btn--outline gr__copy"
              onClick={copyLink}
              aria-label="Copier le lien des avis"
            >
              Copier le lien
            </button>
          </div>

          <div className="gr__foot">
            <small className="gr__disclaimer">
              Aucune iframe autorisée par Google. Ce lien ouvre la page
              officielle.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
