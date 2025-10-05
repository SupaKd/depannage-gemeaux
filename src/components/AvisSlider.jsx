// src/components/AvisSlider.jsx
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

function AvisSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const avis = [
    {
      id: 1,
      nom: "Jean Dupont",
      date: "25/03/2025",
      city: "Saint-Brieuc",
      commentaire:
        "Intervention rapide pour ma serrure bloquée. Travail efficace et soigné.",
      lettre: "J",
      color: "#bf3b3b",
      note: 5,
    },
    {
      id: 2,
      nom: "Marie L.",
      date: "11/04/2025",
      city: "Lannion",
      commentaire:
        "Panne électrique réparée en urgence un dimanche soir, service impeccable.",
      lettre: "M",
      color: "#345beb",
      note: 5,
    },
    {
      id: 3,
      nom: "Karim B.",
      date: "02/05/2025",
      city: "Paimpol",
      commentaire:
        "Très professionnel, a remplacé ma serrure en moins de 30 minutes.",
      lettre: "K",
      color: "#2b9348",
      note: 4,
    },
    {
      id: 4,
      nom: "Sophie R.",
      date: "12/06/2025",
      city: "Callac",
      commentaire:
        "Dépannage électrique clair et prix corrects. Je recommande.",
      lettre: "S",
      color: "#f29f05",
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
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="avis">
      <h2 className="avis__title">Avis Google de nos clients</h2>

      <div className="avis__viewport" ref={emblaRef}>
        <div className="avis__container">
          {avis.map((item) => (
            <motion.div
              className="avis__slide"
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="avis__card">
              <img
                    className="avis__google"
                    src="/google.png"
                    alt="avis google"
                    />
                  <div className="avis__user">
                    <div
                      className="avis__avatar"
                      style={{ backgroundColor: item.color }}
                      >
                      {item.lettre}
                    </div>

                    <div className="avis__author">
                      <span className="avis__nom">{item.nom}</span>
                      <span className="avis__date">{item.date}</span>
                    </div>
                    </div>

                 

                <div className="avis__stars">
                  {"★".repeat(item.note)}
                  {"☆".repeat(5 - item.note)}
                </div>

                <p className="avis__comment">“{item.commentaire}”</p>
                <p className="avis__city">{item.city}</p>
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
