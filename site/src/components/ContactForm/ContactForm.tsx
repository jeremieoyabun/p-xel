"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { getContactContent } from "@/lib/content/contact";
import styles from "./ContactForm.module.css";

interface FieldErrors {
  nom?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export function ContactForm() {
  const locale = useLocale();
  const t = getContactContent(locale);
  const isFr = locale === "fr";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const required = isFr ? "Requis" : "Required";
  const invalidEmail = isFr ? "Email invalide" : "Invalid email";

  function validate(form: FormData): FieldErrors {
    const errs: FieldErrors = {};
    if (!form.get("nom")) errs.nom = required;
    const email = form.get("email") as string;
    if (!email) errs.email = required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = invalidEmail;
    if (!form.get("projectType")) errs.projectType = required;
    if (!form.get("message")) errs.message = required;
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

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
    return <p className={styles.success}>{t.contactForm.successMessage}</p>;
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
          {isFr ? "Nom" : "Name"} <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder={isFr ? "Votre nom" : "Your name"}
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
          placeholder={isFr ? "votre@email.com" : "your@email.com"}
          className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
          required
        />
        {errors.email && (
          <span className={styles.fieldError}>{errors.email}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="projectType" className={styles.label}>
          {isFr ? "Type de projet" : "Project type"} <span className={styles.required}>*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          className={`${styles.select} ${errors.projectType ? styles.invalid : ""}`}
          defaultValue=""
          required
        >
          <option value="" disabled>
            {isFr ? "Selectionnez" : "Select"}
          </option>
          {t.projectTypes.map((type) => (
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
          {isFr ? "Budget estimatif" : "Estimated budget"}
        </label>
        <select
          id="budget"
          name="budget"
          className={styles.select}
          defaultValue=""
        >
          <option value="">{isFr ? "Non precise" : "Not specified"}</option>
          {t.budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="timeline" className={styles.label}>
          {isFr ? "Delai souhaite" : "Desired timeline"}
        </label>
        <select
          id="timeline"
          name="timeline"
          className={styles.select}
          defaultValue=""
        >
          <option value="">{isFr ? "Non precise" : "Not specified"}</option>
          {t.timelineOptions.map((option) => (
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
          placeholder={isFr ? "Decrivez votre projet, vos objectifs et vos contraintes principales." : "Describe your project, goals and main constraints."}
          className={`${styles.textarea} ${errors.message ? styles.invalid : ""}`}
          required
        />
        {errors.message && (
          <span className={styles.fieldError}>{errors.message}</span>
        )}
      </div>

      {status === "error" && (
        <p className={styles.error}>{t.contactForm.errorMessage}</p>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={status === "submitting"}
      >
        <span className={styles.submitInk} aria-hidden="true" />
        <span className={styles.submitLabel}>
          {status === "submitting" ? (isFr ? "Envoi..." : "Sending...") : t.contactForm.submitLabel}
        </span>
        <span className={styles.submitCircle} aria-hidden="true">
          <svg className={styles.submitIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 12h10" />
            <path d="M13 8l4 4-4 4" />
          </svg>
        </span>
      </button>
    </form>
  );
}
