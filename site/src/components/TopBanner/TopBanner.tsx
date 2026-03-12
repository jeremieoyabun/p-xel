"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./TopBanner.module.css";

export function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={s.banner}>
      <div className={s.inner}>
        <span className={s.dot} aria-hidden="true" />
        <span className={s.text}>
          On prend <strong>2-3 nouveaux projets</strong> par mois.{" "}
          <Link href="/contact" className={s.link}>
            Vérifier la disponibilité
          </Link>
        </span>
        <button
          className={s.close}
          onClick={() => setVisible(false)}
          aria-label="Fermer le bandeau"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
