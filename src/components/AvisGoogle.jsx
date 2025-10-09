
export default function Avis() {
  const avis = [
    {
      nom: "Jean-Pierre",
      commentaire:"Artisan efficace et de confiance, je suis très content!",
      note: 5,
      ville: "Saint-Brieuc"
    },
    {
      nom: "Nathalie",
      commentaire: "Travail impeccable serrurier consciencieux",
      ville: "Lannion",
      note: 5,
    },
    {
      nom: "Marc",
      commentaire:
        "Service efficace, prix corrects, je recommande pour tout dépannage urgent.",
        ville: "Morlaix",
      note: 4,
    },
    
  ];

  return (
    <section className="avis">
      <div className="avis__container">
        <h2 className="avis__title">Ce que disent nos clients</h2>

        <div className="avis__list">
          {avis.map((a, i) => (
            <div key={i} className="avis__card">
              <div className="avis__google">

              <img src="/google.png" alt="google" />
              </div>
              <div className="avis__stars">
                {"★".repeat(a.note)}
                {"☆".repeat(5 - a.note)}
              </div>
              <p className="avis__commentaire">“{a.commentaire}”</p>
              <p className="avis__nom">– {a.nom}</p>
              <p className="avis_ville">{a.ville}</p>
            </div>
          ))}
        </div>

        <div className="avis__dots">
          {avis.map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </div>
      </div>
    </section>
  );
}
