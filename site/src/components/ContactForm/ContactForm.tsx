"use client";

import { useState, type FormEvent } from "react";
import {
  contactForm,
  projectTypes,
  budgetRanges,
  timelineOptions,
} from "@/lib/content/contact";
import styles from "./ContactForm.module.css";

interface FieldErrors {
  nom?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(form: FormData): FieldErrors {
    const errs: FieldErrors = {};
    if (!form.get("nom")) errs.nom = "Requis";
    const email = form.get("email") as string;
    if (!email) errs.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Email invalide";
    if (!form.get("projectType")) errs.projectType = "Requis";
    if (!form.get("message")) errs.message = "Requis";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Honeypot check
    if (form.get("website")) return;

    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.get("nom"),
          email: form.get("email"),
          projectType: form.get("projectType"),
          budget: form.get("budget") || undefined,
          timeline: form.get("timeline") || undefined,
          message: form.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className={styles.success}>{contactForm.successMessage}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {/* Honeypot */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="nom" className={styles.label}>
          Nom <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Votre nom"
          className={`${styles.input} ${errors.nom ? styles.invalid : ""}`}
          required
        />
        {errors.nom && <span className={styles.fieldError}>{errors.nom}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="votre@email.com"
          className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
          required
        />
        {errors.email && (
          <span className={styles.fieldError}>{errors.email}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="projectType" className={styles.label}>
          Type de projet <span className={styles.required}>*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          className={`${styles.select} ${errors.projectType ? styles.invalid : ""}`}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Selectionnez
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <span className={styles.fieldError}>{errors.projectType}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="budget" className={styles.label}>
          Budget estimatif
        </label>
        <select
          id="budget"
          name="budget"
          className={styles.select}
          defaultValue=""
        >
          <option value="">Non precise</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="timeline" className={styles.label}>
          Delai souhaite
        </label>
        <select
          id="timeline"
          name="timeline"
          className={styles.select}
          defaultValue=""
        >
          <option value="">Non precise</option>
          {timelineOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Decrivez votre projet, vos objectifs et vos contraintes principales."
          className={`${styles.textarea} ${errors.message ? styles.invalid : ""}`}
          required
        />
        {errors.message && (
          <span className={styles.fieldError}>{errors.message}</span>
        )}
      </div>

      {status === "error" && (
        <p className={styles.error}>{contactForm.errorMessage}</p>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Envoi..." : contactForm.submitLabel}
      </button>
    </form>
  );
}
