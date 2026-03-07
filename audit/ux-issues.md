# UX Issues - p-xel.be

## Critical Issues

### 1. Portfolio is not browsable
- All 6 projects open as popups on the homepage
- No dedicated case study pages with unique URLs
- Users cannot share, bookmark, or return to a specific project
- Search engines cannot index individual projects
- No deep-link structure for portfolio items

### 2. No clear service pages
- All services are listed as short labels on the homepage
- No way to explore what each service includes, who it's for, or what the outcome is
- Users looking for a specific service (e.g., "web app development") land on a generic homepage
- No path from search intent to relevant service detail

### 3. Stats display as "0+"
- Counter animations show "0+" on initial load or when JavaScript fails
- No fallback values in the HTML
- Users on slow connections or with JS disabled see zero credibility
- Looks broken rather than impressive

### 4. Navigation is anchor-only
- Main nav has only 3 items: Projets, Process, Contact (all anchors on homepage)
- No way to navigate to blog, services, about, or portfolio from the main menu
- Users must scroll the entire homepage to find content
- Mobile experience requires extensive scrolling

---

## Major Issues

### 5. Orphan pages
- `/home-landing/` contains unique pricing info but is not linked from anywhere
- `/portfolio/` and `/portfolio-2/` exist but are not in the navigation
- Content is invisible to users who don't know the URL

### 6. Duplicate portfolio pages
- `/portfolio/` and `/portfolio-2/` show the same 6 projects in different order
- No differentiation, no clear purpose for having two
- Potential duplicate content issue

### 7. Blog discoverability
- Only 4 of 7 blog posts are shown on the homepage
- No categories, tags, or filtering on `/perspectives/`
- No search functionality
- No related articles or cross-linking between blog posts

### 8. FAQ is duplicated
- Same FAQ appears on homepage and on `/perspectives/`
- FAQ content is generic and does not adapt to page context
- No dedicated FAQ page

### 9. Weak contact flow
- Contact section is just a CTA to Calendly or email
- No contact form visible on the site
- No way to describe a project before booking a call
- `/thank-you/` page exists but form is not visible on the main site

---

## Moderate Issues

### 10. No breadcrumbs in UI
- Blog posts have schema breadcrumbs but no visible breadcrumb navigation
- Users on inner pages have no orientation

### 11. Inconsistent CTAs
- "Lancer mon projet" -> scrolls to contact
- "Reserver un appel" -> opens Calendly popup
- "Mon projet" -> appears as H1 on /portfolio/ (confusing)
- "Retour" on blog posts -> goes to homepage, not /perspectives/
- No consistency in CTA hierarchy

### 12. No mobile menu depth
- Mobile menu has only the 3 anchor links
- No expandable sections or secondary navigation
- Blog and portfolio are unreachable from mobile menu

### 13. Copyright shows 2025
- Site displays "(c) 2025" in footer
- Should be 2026 or dynamic

### 14. Live time widget adds no value
- "Sem [W#] . [LOC] . [HH:MM]" widget takes space
- Does not serve any conversion or usability purpose
- Aesthetic choice that may confuse users

### 15. Tawk.to chat widget
- Generic chat widget that may conflict with premium positioning
- No indication of response time or availability
- Competes with Calendly CTA for attention

---

## Conversion Issues

### 16. No social proof near CTAs
- Contact section has no testimonials, reviews, or trust badges
- No "join X+ clients" or similar persuasion near booking CTA

### 17. No urgency or scarcity signals
- No mention of availability, waitlists, or limited slots
- No incentive to act now vs. later

### 18. Pricing is hidden
- FAQ mentions "a partir de 75 EUR/h" but no pricing detail
- `/home-landing/` has pricing (1,500 EUR+ for landing pages) but is an orphan page
- Users must book a call to learn anything about cost

### 19. No project qualification
- No intake form or questionnaire
- No "is this for you" section
- No budget range selector
- Calendly booking is the only path, with no pre-qualification

### 20. Blog articles don't convert
- Articles have "Reserver un appel" CTA but no contextual offer
- Subsidy articles (Belgium, Luxembourg) don't offer to help with the application
- No lead magnets, downloads, or email capture
- No mid-article CTAs
