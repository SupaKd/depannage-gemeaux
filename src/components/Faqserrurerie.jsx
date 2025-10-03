import { useState } from "react";

function Faqserrurerie() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "Quels sont les services de dépannage proposés par Dépannage Gémeaux ?", answer: "Nous intervenons pour tous les dépannages d’urgence en serrurerie, qu’il s’agisse d’une porte bloquée, d’une serrure endommagée ou d’une clé cassée. Nos services incluent également la réparation et l’installation de serrures, le blindage de portes et le renforcement des accès. Nos interventions sont disponibles 24h/24 et 7j/7." },
    { question: "Comment prévenir les problèmes de serrurerie à l’avenir ?", answer: "Pour éviter les problèmes de serrurerie, il est recommandé de faire vérifier régulièrement vos serrures par un professionnel. Il est également prudent de remplacer les serrures endommagées dès les premiers signes d’usure et de toujours avoir un double de clé en sécurité. De plus, installer des serrures de haute sécurité ou renforcer vos accès peut aider à prévenir les intrusions." },
    { question: "Quels sont vos secteurs d'intervention ?", answer: "Nous intervenons principalement dans l’ouest des Côtes d’Armor, couvrant les villes de Guingamp, Saint-Brieuc, Lannion, Paimpol, Callac, et Morlaix. Pour chaque ville, nous proposons des tarifs ajustés et adaptés à la localisation. Consultez nos pages dédiées pour en savoir plus sur nos services spécifiques à chacune de ces villes." },
    { question: "Quels sont les tarifs pour une intervention d’urgence en serrurerie ?", answer: "Les tarifs dépendent de la nature de l’intervention et de la ville où vous vous trouvez. En règle générale, nos tarifs incluent le déplacement, la prestation et une heure de main-d’œuvre. Pour plus de détails, rendez-vous sur notre page « Nos tarifs » pour découvrir nos offres spécifiques par zone." },

];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faqserrurerie">
      <div className="faqserrurerie__content">
        <div className="faqserrurerie__title">
          <h1>
            Questions fréquemment posées<span>.</span>
          </h1>
        </div>

        <div className="faqserrurerie__accordion">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faqserrurerie__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faqserrurerie__question"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="faqserrurerie__answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqserrurerie;
