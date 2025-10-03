import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

function AvisSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const avis = [
    {
      nom: "Jean Dupont",
      city: "Saint-Brieuc",
      commentaire:
        "Intervention rapide pour ma serrure bloquée. Travail efficace et soigné.",
      note: 5,
    },
    {
      nom: "Marie L.",
      city: "Lannion",

      commentaire:
        "Panne électrique réparée en urgence un dimanche soir, service impeccable.",
      note: 5,
    },
    {
      nom: "Karim B.",
      city: "Paimpol",
      commentaire:
        "Très professionnel, a remplacé ma serrure en moins de 30 minutes.",
      note: 4,
    },
    {
      nom: "Sophie R.",
      city: "Callac",
      commentaire:
        "Dépannage électrique clair et prix corrects. Je recommande.",
      note: 5,
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    // Autoplay toutes les 4 secondes
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="avis">
      <h2 className="avis__title">Avis de nos clients</h2>
      <div className="avis__viewport" ref={emblaRef}>
        <div className="avis__container">
          {avis.map((item, i) => (
            <motion.div
              className="avis__slide"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="avis__card">
                <p className="avis__comment">“{item.commentaire}”</p>
                <p className="avis__comment">{item.city}</p>
                <div className="avis__author">- {item.nom}</div>
                <div className="avis__stars">
                  {"★".repeat(item.note)}{"☆".repeat(5 - item.note)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="avis__dots">
        {avis.map((_, i) => (
          <button
            key={i}
            className={`avis__dot ${i === selectedIndex ? "is-active" : ""}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default AvisSlider;
