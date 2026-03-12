import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import s from "./Testimonials.module.css";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "P-XEL a transformé notre idée en produit fonctionnel en quelques semaines. La qualité du design et la rigueur technique sont au-dessus de tout ce qu'on avait vu avant.",
    name: "Mehdi A.",
    role: "Co-fondateur",
    company: "BillyCheck",
  },
  {
    quote:
      "On cherchait un partenaire qui comprenne le produit, pas juste le design. P-XEL a livré une plateforme complète, opérationnelle, que nos équipes utilisent au quotidien.",
    name: "Julien D.",
    role: "CEO",
    company: "ChairSplit",
  },
  {
    quote:
      "Réactif, précis, zéro bullshit. En deux mois, on avait un site et une stratégie d'acquisition qui ont généré deux ans de chiffre d'affaires.",
    name: "Thomas L.",
    role: "Fondateur",
    company: "Arduenna Gin",
  },
];

export function Testimonials() {
  return (
    <div className={s.grid}>
      {testimonials.map((t) => (
        <FadeInUp key={t.name}>
          <blockquote className={s.card}>
            <div className={s.quoteIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 7.5V14H7.5C7.5 15.93 9.07 17.5 11 17.5V19.5C7.96 19.5 5.5 17.04 5.5 14V7.5H11ZM18.5 7.5V14H15C15 15.93 16.57 17.5 18.5 17.5V19.5C15.46 19.5 13 17.04 13 14V7.5H18.5Z" />
              </svg>
            </div>
            <p className={s.quote}>{t.quote}</p>
            <footer className={s.author}>
              <span className={s.name}>{t.name}</span>
              <span className={s.role}>
                {t.role}, {t.company}
              </span>
            </footer>
          </blockquote>
        </FadeInUp>
      ))}
    </div>
  );
}
