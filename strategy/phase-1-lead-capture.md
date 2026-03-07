# Phase 1 Lead Capture Strategy - P-XEL Studio

How every page on the Phase 1 site contributes to qualified lead generation. What tools are used, where they appear, and why.

---

## Core Principle

Conversion through quality, not pressure. The site builds desire through the experience it delivers. The CTA is the release valve, not the pressure source. Every conversion touchpoint feels like a natural next step, never like a sales tactic.

---

## Conversion Tools: What Stays, What Goes, What Changes

### Calendly - KEEP (Primary conversion tool)

**Role:** The fastest path from intent to conversation. A visitor with qualified interest can book a call in under 30 seconds without filling out a form, sending an email, or waiting for a reply.

**Why it is primary:**
- Zero friction. The visitor picks a time and it is done.
- Solo studio: the founder takes every call. Calendly prevents scheduling chaos.
- "Reserver un appel" is the strongest CTA copy because it promises immediate access to the decision-maker.
- 30-minute discovery calls are the proven entry point for P-XEL's sales process.

**Configuration:**
- Event type: 30-minute discovery call
- URL: calendly.com/p-xel-studio/30min
- Embed style: inline on /contact/ (dark mode, styled to match the canvas)
- Link style: direct Calendly URL everywhere else (opens in new tab, not popup)
- Confirmation: Calendly's native confirmation + custom follow-up email

**Where Calendly appears:** See CTA placement map below.

---

### Intake Form - KEEP (Secondary conversion tool, custom-built)

**Role:** Captures project context before a call. For visitors who want to describe their project first or are not ready for a live conversation yet.

**Why it is secondary, not primary:**
- Higher friction than Calendly (6 fields vs. 0 fields)
- Requires the visitor to articulate their project, which some early-stage visitors cannot do yet
- Adds a delay (24h response) vs. Calendly's instant confirmation
- But it qualifies leads better: project type, budget range, and timeline are captured upfront

**Form specification:**

| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| Nom | Text | Yes | Know who we are talking to |
| Email | Email | Yes | Reply channel |
| Type de projet | Select | Yes | Qualify: is this a service we offer? |
| Budget estimatif | Select | No | Qualify: is the budget realistic? |
| Delai souhaite | Select | No | Qualify: can we deliver in time? |
| Message | Textarea | Yes | Project context in their own words |

**Project type options:** Site web, Application web / SaaS, Landing page, Branding / Identite, UX/UI Design, Autre

**Budget options:** < 5 000 EUR, 5 000 - 15 000 EUR, 15 000 - 30 000 EUR, 30 000 - 50 000 EUR, > 50 000 EUR, Pas encore defini

**Timeline options:** < 1 mois, 1 - 3 mois, 3 - 6 mois, Pas de deadline

**This is NOT the old site's form logic.** The old site had no visible form. The /thank-you/ page existed but the form was inaccessible. The new form is custom-built in Next.js:
- Server-side API route handles submission
- Sends formatted email to hello@p-xel.be
- Stores data in PostgreSQL for pipeline tracking
- Honeypot field + rate limiting for spam prevention (no visible CAPTCHA)
- Inline success message, no page redirect

**Where the form appears:** Only on /contact/. Not embedded on other pages. Other pages link to /contact/ via the "Lancer mon projet" CTA.

---

### Tawk.to Live Chat - REMOVE

**Decision: Do not include Tawk.to or any live chat widget in Phase 1.**

**Why:**

1. **Staffing reality.** P-XEL is a solo studio. Live chat creates an expectation of immediate response. A chat bubble that says "Leave a message" is worse than no chat at all. Unanswered chats actively damage trust.

2. **Premium positioning conflict.** Tawk.to's default widget is visually generic: rounded corners, green bubble, sliding panel. It looks like every SaaS support tool. On a site built to feel 2030-level and premium, a stock chat widget is a visual downgrade. Even with custom styling, the interaction pattern (pop-up bubble, typing indicator, canned responses) feels like customer support, not premium consulting.

3. **CTA competition.** The old site had Tawk.to competing with Calendly for attention. Two floating elements asking the visitor to engage. This splits attention and dilutes the primary CTA. On the new site, the visitor's focus goes to one action: "Reserver un appel."

4. **Alternatives are better for this context:**
   - Visitors ready to talk now -> Calendly (instant, structured, no waiting)
   - Visitors who want to describe their project first -> Intake form (structured, qualifies)
   - Visitors with a quick question -> Email (hello@p-xel.be, visible in footer and contact page)
   - Visitors who find P-XEL through social -> LinkedIn DM or reply

**Phase 2 reconsideration:** If analytics show visitors bouncing from /contact/ without converting (neither booking nor submitting), consider adding a WhatsApp Business button as a lightweight async channel. WhatsApp is familiar, personal, async-friendly, and does not require a floating widget. One line in the contact info section: "Preferer WhatsApp ? Ecrivez-nous directement." with a wa.me link. Only add this if data justifies it.

---

### Direct Contact - KEEP (Tertiary, passive)

**Email:** hello@p-xel.be (mailto link)
**Phone:** +32 497 38 29 54 (tel link)

These appear on:
- /contact/ (Section 3: Direct Contact)
- Footer (every page)

They are passive channels. The visitor can use them, but the site does not actively push toward email or phone. They exist for visitors who prefer direct communication or need to reach P-XEL outside the structured paths.

---

## CTA Hierarchy

Every page uses the same two-button pattern:

| CTA | Label | Destination | Role |
|-----|-------|-------------|------|
| **Primary** (violet filled) | Reserver un appel | Calendly (direct link or embed) | Fastest path to conversation |
| **Secondary** (ghost outline) | Lancer mon projet | /contact/ | Structured path with intake form |

This hierarchy is consistent across the entire site. The visitor learns the pattern once and recognizes it everywhere.

**Why Calendly is primary, not the form:**
- Lower friction (0 fields vs. 6)
- Faster outcome (instant booking vs. 24h wait)
- Higher conversion rate for high-intent visitors
- The call itself handles qualification (the founder asks the right questions)

**Why the form exists at all:**
- Some visitors are not ready for a call yet (exploring, comparing, early-stage)
- Some visitors prefer async communication
- The form captures structured data (project type, budget, timeline) that Calendly does not
- The form creates a pipeline entry even if the call does not happen immediately

---

## CTA Placement Map: Page by Page

### Homepage `/`

| Location | CTA | Destination | Why here |
|----------|-----|-------------|----------|
| Beat 1: Hero | Primary: Reserver un appel | Calendly link | First decision point. High-intent visitors act immediately. |
| Beat 1: Hero | Secondary: Voir nos projets | /work/ | Low-intent visitors need proof first. Not a conversion CTA. |
| Beat 7: Process | Primary: Reserver un appel | Calendly link | After seeing how P-XEL works. Process builds confidence. Natural conversion moment. |
| Beat 9: Final CTA | Primary: Reserver un appel | Calendly link | Conclusive. Full viewport. The visitor has seen everything. |
| Beat 9: Final CTA | Secondary: Lancer mon projet | /contact/ | For visitors who want to describe their project first. |

**Total CTAs on homepage:** 3 primary (Calendly) + 1 secondary (/contact/) + 1 navigation (/work/)

**CTA pacing:** Hero (0s) -> Process (60-75s of scroll) -> Final (90-120s of scroll). Three natural decision points. Never more than 30 seconds of scrolling between a CTA and the next.

**What is NOT on the homepage:**
- No floating CTA bar
- No exit-intent popup
- No "limited slots available"
- No form embedded on the homepage
- No chat widget

---

### Work Page `/work/`

| Location | CTA | Destination | Why here |
|----------|-----|-------------|----------|
| Section 4: CTA (after all projects) | Primary: Reserver un appel | Calendly link | After seeing the proof. The work builds desire. The CTA captures it. |
| Section 4: CTA | Secondary: Lancer mon projet | /contact/ | Alternative path. |

**Total CTAs on work page:** 1 primary + 1 secondary. At the end only. The projects themselves are the persuasion.

**Each project card links to its case study.** These are tertiary conversion paths (proof -> deeper proof -> CTA on case study page).

---

### Case Studies `/work/[slug]/`

| Location | CTA | Destination | Why here |
|----------|-----|-------------|----------|
| Section 9/10: Navigation CTA | Primary: Reserver un appel | Calendly link | After the full case study. Trust is at its peak. |
| Section 9/10: Navigation CTA | Secondary: Lancer mon projet | /contact/ | Alternative path. |

**Total CTAs per case study:** 1 primary + 1 secondary. At the end only.

**Each case study also has:**
- A "next project" link -> keeps the visitor in the proof loop
- A contextual CTA headline that connects the case study to the visitor's situation (e.g., "Un produit digital a concevoir et livrer ?" on BillyCheck, "Un projet complexe a structurer ?" on Greenmood)
- An internal link to a relevant service page (SEO, not conversion)

**The proof loop logic:** A visitor who enters one case study and clicks "next project" builds compounding trust. By the time they reach the CTA after their second or third case study, conversion intent is high. The CTA captures a warmer lead than the homepage CTA.

---

### Studio Page `/studio/`

| Location | CTA | Destination | Why here |
|----------|-----|-------------|----------|
| Beat 7: CTA (end of page) | Primary: Reserver un appel | Calendly link | After seeing who is behind P-XEL. Trust and connection are at their peak. |
| Beat 7: CTA | Secondary: Lancer mon projet | /contact/ | Alternative path. |

**Total CTAs on studio page:** 1 primary + 1 secondary. At the end only.

The studio page is a credibility page. The CTA comes after the founder story, the philosophy, the capabilities, the proof stats, and the process. It is the most qualified CTA on the site because the visitor has chosen to learn about P-XEL specifically.

---

### Contact Page `/contact/`

| Location | CTA | Destination | Why here |
|----------|-----|-------------|----------|
| Path A | Calendly inline embed | calendly.com/p-xel-studio/30min | The primary conversion mechanism. Embedded, not linked. Visitor books without leaving the page. |
| Path B | Intake form submit | API route -> email + database | The secondary conversion mechanism. Captures project brief. |
| Section 3 | Email, phone | Direct channels | Passive. For visitors who prefer direct contact. |

**Total conversion paths on contact page:** 3 (Calendly + form + direct contact)

The contact page is the terminal. Every other page on the site funnels here. Its job is not to persuade. The visitor is already persuaded. Its job is to make the action effortless.

---

### Service Pages `/services/[slug]/` (Phase 1: 2 pages)

| Location | CTA | Destination | Why here |
|----------|-----|-------------|----------|
| End of page | Primary: Reserver un appel | Calendly link | After reading the full capability narrative. |
| End of page | Secondary: Lancer mon projet | /contact/ | Alternative path. |
| Mid-page | Contextual: Voir le projet [X] | /work/[slug]/ | Proof link. Not a conversion CTA. Builds trust before the real CTA. |

**Total CTAs per service page:** 1 primary + 1 secondary + 1-2 proof links

---

### City Page `/liege/` (Phase 1: 1 page)

| Location | CTA | Destination | Why here |
|----------|-----|-------------|----------|
| End of page | Primary: Reserver un appel | Calendly link | Local visitor ready to work with a local studio. |
| End of page | Secondary: Lancer mon projet | /contact/ | Alternative path. |
| Mid-page | Service links | /services/[slug]/ | Navigation to capabilities. Not conversion CTAs. |

**Total CTAs per city page:** 1 primary + 1 secondary

---

### Footer (every page)

| Element | Destination | Role |
|---------|-------------|------|
| Email: hello@p-xel.be | mailto link | Passive contact |
| Phone: +32 497 38 29 54 | tel link | Passive contact |
| All page links | Internal pages | SEO mesh + navigation |

The footer is not a conversion tool. It is an information and navigation tool. No CTA button in the footer. The page-level CTAs handle conversion.

---

## Conversion Flow Architecture

```
VISITOR ARRIVES
     |
     v
EXPERIENCE BUILDS DESIRE
(homepage narrative, case studies, studio credibility)
     |
     v
VISITOR IS READY
     |
     +-------> "Reserver un appel" (Calendly)
     |              |
     |              v
     |         CALL BOOKED (30 min)
     |              |
     |              v
     |         DISCOVERY CALL
     |              |
     |              v
     |         QUALIFIED -> PROPOSAL
     |
     +-------> "Lancer mon projet" (/contact/)
     |              |
     |              v
     |         INTAKE FORM SUBMITTED
     |              |
     |              v
     |         EMAIL TO FOUNDER (under 24h)
     |              |
     |              v
     |         FOLLOW-UP CALL OR REPLY
     |              |
     |              v
     |         QUALIFIED -> PROPOSAL
     |
     +-------> Direct email / phone (passive)
                    |
                    v
               CONVERSATION -> QUALIFICATION
```

**Key insight:** Both paths converge on the same outcome: a conversation with the founder. The difference is timing and structure. Calendly is "let's talk now." The form is "let me tell you about my project first." The founder evaluates the form submission and either replies with a proposal sketch or suggests a call.

---

## Lead Qualification Logic

### From Calendly

Calendly bookings are pre-qualified by the site experience itself. A visitor who has scrolled through the homepage, explored case studies, read the studio page, and clicked "Reserver un appel" has self-selected. They have seen the pricing context (FAQ: "a partir de 75 EUR/h"), the project types, and the positioning. Low-quality leads are filtered by the site's premium feel and transparent pricing.

**On the call, the founder qualifies:**
- Project scope (does it match P-XEL's capabilities?)
- Budget alignment (is the budget realistic for the scope?)
- Timeline (can P-XEL deliver within the timeline?)
- Decision-maker (is the person on the call the one who decides?)

### From Intake Form

The form pre-qualifies through its fields:
- **Type de projet** -> Is this a service P-XEL offers?
- **Budget estimatif** -> Is the budget realistic? (< 5 000 EUR for a web app = misalignment)
- **Delai souhaite** -> Is the timeline feasible?
- **Message** -> Is the project description coherent and substantial?

**Qualification tiers after form submission:**

| Signal | Action |
|--------|--------|
| Budget > 5 000 EUR + clear project description + realistic timeline | Reply within 12h. Suggest a call. High priority. |
| Budget "Pas encore defini" + clear project description | Reply within 24h. Ask clarifying questions or suggest a call. Medium priority. |
| Budget < 5 000 EUR + project type = Application web / SaaS | Reply within 24h. Explain minimum scope and suggest alternatives. Low fit. |
| Vague message + no budget + no timeline | Reply within 24h. Ask two specific questions. Do not invest time until the prospect shows intent. |
| Type = "Autre" + incoherent message | Polite decline or redirect. Not a qualified lead. |

---

## What We Are NOT Doing (and Why)

### No email capture / lead magnet

**Why not:** P-XEL is not building a newsletter audience. The site converts visitors into calls, not subscribers. A lead magnet (free guide, checklist, template) works for content businesses, not for a premium studio that sells 5 000+ EUR projects. The visitor either needs a product built or they do not. No ebook changes that.

**Phase 2 exception:** If blog posts drive significant traffic (especially subsidy articles), consider a "Verifier mon eligibilite" micro-form on those specific pages. Not a generic email capture. A targeted, contextual qualification step.

### No popup or modal

**Why not:** Popups destroy premium feel. Exit-intent modals signal desperation. The site's quality creates desire. Interrupting that experience with a popup undermines everything the design is trying to communicate.

### No sticky CTA bar

**Why not:** A floating bar that follows the scroll says "we do not trust our content to convert you." The P-XEL site trusts its content. CTAs appear at natural decision points. The visitor does not need a permanent reminder.

### No urgency or scarcity

**Why not:** "Only 2 slots left this month" is a tactic used by mass-market services. P-XEL is a premium studio. The positioning is "we are selective, we deliver excellence." Artificial urgency cheapens that positioning. Real urgency comes from the visitor's own project needs, not from manufactured pressure.

### No pricing calculator

**Why not:** P-XEL does custom work. A calculator implies standardized pricing, which contradicts the positioning. The FAQ provides transparent ranges (landing page from 1 500 EUR, site from 5 000 EUR, app from 10 000 EUR). That is enough context. The call handles the rest.

---

## Tracking and Measurement

### Phase 1 KPIs

| Metric | Target (first 30 days) | Tool |
|--------|----------------------|------|
| Calendly bookings | 8-12 | Calendly analytics |
| Form submissions | 4-8 | Custom analytics (database) |
| Booking rate (visitors to booking) | > 2% | GA4 + Calendly |
| Form submission rate | > 1% | GA4 + custom events |
| Contact page visit rate | > 15% of all visitors | GA4 |
| Case study -> CTA click rate | > 5% | GA4 events |

### Event tracking (GA4)

| Event | Trigger | Parameters |
|-------|---------|------------|
| `cta_click` | Any CTA button click | `cta_label`, `cta_destination`, `page_path` |
| `calendly_booking` | Calendly booking confirmed | `event_type`, `referrer_page` |
| `form_submit` | Intake form submitted | `project_type`, `budget_range`, `has_timeline` |
| `form_start` | First form field focused | `page_path` |
| `form_abandon` | Form started but not submitted (30s timeout after last interaction) | `fields_filled`, `page_path` |
| `case_study_cta` | CTA click on a case study page | `case_study_slug`, `cta_type` |
| `proof_loop` | Visitor views 2+ case studies in one session | `case_studies_viewed` |

### What to watch

- **Calendly vs. form split:** If > 80% of conversions come from Calendly and the form gets < 1 submission/week, the form may not be worth the visual space. Consider making Calendly the only path on /contact/ and moving the form to a secondary page.
- **Homepage CTA position:** Which of the 3 homepage CTAs gets the most clicks? If the final CTA (Beat 9) dominates, the homepage narrative is working. If the hero CTA dominates, visitors arrive with high intent and the narrative is less important.
- **Case study proof loop:** How many visitors view 2+ case studies? This is the strongest trust-building behavior. If low, the "next project" navigation is not working.
- **Form abandonment:** If visitors start the form but do not submit, check which field causes the drop. Budget and timeline (optional fields) should not be friction points. If they are, verify the dropdown behavior.

---

## Technical Implementation Notes

### Calendly integration

- Use Calendly's embed script for /contact/ (inline widget, not popup)
- Use direct URL links for all other pages (opens in new tab)
- Pass UTM parameters to Calendly for source tracking: `?utm_source=website&utm_medium=cta&utm_campaign=phase1&utm_content=[page_slug]`
- Calendly webhook on booking -> trigger confirmation email + log to database

### Intake form

- Next.js API route: `/api/contact`
- Validation: server-side (zod schema) + client-side (real-time field validation)
- Email: send via Resend or Postmark (not SMTP, for reliability and deliverability)
- Database: PostgreSQL via Prisma. Store all submissions with timestamp, source page, and qualification tier.
- Honeypot: hidden field `website` (if filled, silently discard)
- Rate limit: max 3 submissions per IP per hour

### GA4 setup

- Custom events via `gtag()` or Next.js script
- Calendly event tracking via Calendly's `calendly.event_scheduled` postMessage listener
- Form events via custom handlers
- No cookie consent banner for GA4 in Phase 1 (evaluate legal requirements for Belgian GDPR; if required, use a minimal, non-intrusive consent bar that matches the dark canvas)

---

## Summary: The Lead Capture System

```
PRIMARY:   Calendly   ("Reserver un appel")    -> instant booking
SECONDARY: Form       ("Lancer mon projet")    -> structured brief, 24h response
TERTIARY:  Email/Phone (footer + /contact/)    -> direct, passive

REMOVED:   Tawk.to live chat                   -> premium conflict, staffing reality
DEFERRED:  WhatsApp Business                   -> Phase 2, data-dependent
NOT DOING: Lead magnets, popups, sticky bars,  -> premium positioning conflict
           urgency tactics, pricing calculators
```

Every page funnels toward Calendly or /contact/. The experience builds desire. The CTA captures it. The form qualifies it. The call converts it.
