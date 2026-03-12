"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import s from "./Testimonials.module.css";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Record<string, Testimonial[]> = {
  fr: [
    {
      quote:
        "P-XEL a transforme notre idee en produit fonctionnel en quelques semaines. La qualite du design et la rigueur technique sont au-dessus de tout ce qu'on avait vu avant.",
      name: "Mehdi A.",
      role: "Co-fondateur",
      company: "BillyCheck",
    },
    {
      quote:
        "On cherchait un partenaire qui comprenne le produit, pas juste le design. P-XEL a livre une plateforme complete, operationnelle, que nos equipes utilisent au quotidien.",
      name: "Julien D.",
      role: "CEO",
      company: "ChairSplit",
    },
    {
      quote:
        "Reactif, precis, zero bullshit. En deux mois, on avait un site et une strategie d'acquisition qui ont genere deux ans de chiffre d'affaires.",
      name: "Martin B.",
      role: "Fondateur",
      company: "Arduenna Gin",
    },
  ],
  en: [
    {
      quote:
        "P-XEL turned our idea into a working product in just weeks. The design quality and technical rigor are above anything we'd seen before.",
      name: "Mehdi A.",
      role: "Co-founder",
      company: "BillyCheck",
    },
    {
      quote:
        "We were looking for a partner who understands product, not just design. P-XEL delivered a complete, operational platform our teams use daily.",
      name: "Julien D.",
      role: "CEO",
      company: "ChairSplit",
    },
    {
      quote:
        "Responsive, precise, zero BS. In two months, we had a site and an acquisition strategy that generated two years of revenue.",
      name: "Martin B.",
      role: "Founder",
      company: "Arduenna Gin",
    },
  ],
};

export function Testimonials() {
  const locale = useLocale();
  const items = testimonials[locale] || testimonials.fr;

  return (
    <div className={s.grid}>
      {items.map((t) => (
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
