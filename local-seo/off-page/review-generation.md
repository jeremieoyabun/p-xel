# Review Generation Strategy - P-XEL Studio

## Targets

| Milestone | Google Reviews | Timeline |
|---|---|---|
| Cold start phase | 5 reviews | Month 1 |
| Foundation | 15 reviews | Month 3 |
| Authority | 30 reviews | Month 6 |
| Ongoing | 3-5 new reviews/month | Continuous |

---

## Platform Priority

| Platform | Priority | Why |
|---|---|---|
| Google (GBP) | Primary | Direct ranking impact, visible in search, Map Pack |
| Clutch | High | B2B credibility, ranks for agency searches, detailed reviews |
| Sortlist | High | Belgian market, used by local companies to find agencies |
| Facebook | Medium | Social proof, visible to local audience |
| LinkedIn Recommendations | Medium | Professional credibility, visible on company/personal profiles |
| TrustPilot | Low | Less relevant for B2B services, but builds trust signals |

Focus 80% of effort on Google. The rest follows naturally.

---

## Google Review Link Generation

1. Go to Google Business Profile dashboard
2. Home > "Get more reviews" > copy the short link
3. Or construct manually: `https://search.google.com/local/writereview?placeid=[PLACE_ID]`
4. Find Place ID at: https://developers.google.com/maps/documentation/places/web-service/place-id
5. Save this link - it goes in every email, every signature, every thank-you message

**Short link format to use everywhere:**
`g.page/pxelstudio/review` (set this up via GBP)

---

## Solving the Cold Start Problem

### Phase 1: Past clients (Week 1-2)

Before asking anyone new, reach out to existing satisfied clients.

**Client segmentation - who to ask first:**

1. **Tier 1 (ask immediately):** Clients who expressed strong satisfaction, gave verbal praise, or referred others. These are near-guaranteed 5-star reviews. Identify 5-8 of these.
2. **Tier 2 (ask in week 2):** Clients with successful delivered projects who had a smooth process. Identify 5-10 of these.
3. **Tier 3 (ask later or skip):** Clients where the project was fine but not exceptional, or where there were friction points. Only ask if you are confident in a positive outcome.

**Rule:** Never ask a client you are not confident will leave a 4 or 5 star review.

### Phase 2: New clients (ongoing)

Build the ask into the project delivery process (see timing below).

---

## When to Ask

Timing matters more than the ask itself.

| Moment | Quality of Ask |
|---|---|
| Right after project launch, client is excited about the result | Best moment |
| After client reports positive results (traffic, conversions, feedback) | Excellent |
| 1-2 weeks after delivery, during follow-up check-in | Good |
| Months after delivery, out of the blue | Weak |
| During the project, before delivery | Never do this |

**Optimal flow:**
1. Deliver the project
2. Client confirms they are happy with the result
3. Wait 1-3 days
4. Send the review request email

---

## Email Template (French)

### For past clients (cold start)

```
Objet : Un petit mot qui ferait une grande différence

Bonjour [Prénom],

J'espère que [nom du projet / le site / l'app] continue de bien fonctionner pour vous.

Je me permets de vous écrire car les avis Google ont un vrai impact pour un studio comme P-XEL. Si vous avez été satisfait(e) de notre collaboration, un avis honnête de quelques lignes nous aiderait énormément.

Cela prend 2 minutes : [lien review Google]

Pas besoin d'un texte long. Quelques mots sur votre expérience suffisent.

Merci beaucoup,
[Prénom]
P-XEL Studio
```

### For new clients (after delivery)

```
Objet : Merci pour ce projet, [Prénom]

Bonjour [Prénom],

C'était un plaisir de travailler sur [nom du projet] avec vous. Content(e) que le résultat vous plaise.

Si vous avez 2 minutes, un avis Google nous aiderait beaucoup à continuer de grandir : [lien review Google]

Quelques mots sur votre expérience suffisent. Cela fait vraiment la différence.

Merci et à bientôt,
[Prénom]
P-XEL Studio
```

### Follow-up (if no response after 7 days)

```
Objet : Re: Un petit mot qui ferait une grande différence

Bonjour [Prénom],

Je me permets un petit rappel. Si vous avez un moment, votre avis Google nous serait très précieux : [lien review Google]

Merci,
[Prénom]
```

**Rules:**
- Maximum 1 follow-up. Never send a third email about reviews.
- Never incentivize reviews (no discounts, no gifts in exchange). This violates Google guidelines.
- Personalize every email. Never send a mass email.

---

## Review Response Strategy

Respond to every single review within 24 hours. No exceptions.

### Positive review response template

```
Merci beaucoup [Prénom] pour ce retour. C'était un vrai plaisir de travailler sur [projet/aspect mentionné].
Heureux/Heureuse que [résultat/aspect] vous satisfasse. Au plaisir de collaborer à nouveau.
```

**Variations to avoid sounding robotic:**
- Reference specific details from their review
- Mention the project name or type
- Keep it warm but professional
- Never copy-paste the exact same response twice in a row

### Negative review response template

```
Merci [Prénom] pour votre retour. Nous prenons chaque feedback au sérieux.
[Acknowledge the specific issue they raised without being defensive.]
Nous aimerions en discuter directement avec vous pour comprendre et trouver une solution.
N'hésitez pas à nous contacter à [email] ou au [téléphone].
```

**Rules for negative reviews:**
- Never argue publicly
- Never deny the client's experience
- Always take it offline (email or phone)
- Respond quickly and calmly
- If the review is fake or spam, flag it via GBP but still respond professionally
- After resolving the issue privately, politely ask if they would consider updating their review

---

## Review Velocity Targets

Google values consistent review flow, not bursts.

| Period | Target |
|---|---|
| Month 1 | 5 reviews (from past clients) |
| Month 2 | 5 reviews (mix of past and recent clients) |
| Month 3 | 5 reviews (new project deliveries) |
| Month 4-6 | 3-5 reviews per month |
| Ongoing | 2-4 reviews per month (natural pace from project flow) |

**Never ask 10 clients on the same day.** Space out requests over weeks. Google flags sudden spikes as suspicious.

---

## Featuring Reviews on the Website

### Schema markup (structured data)

Add Review and AggregateRating schema to the homepage and service pages.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "P-XEL Studio",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "15"
  }
}
```

Update `reviewCount` and `ratingValue` as new reviews come in. Keep it accurate - never inflate.

### Individual review schema

For each featured testimonial on the site:

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Client Name"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Review text here",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "P-XEL Studio"
  }
}
```

### Display on website

- **Homepage:** 3-5 best reviews in a testimonial section, with client name, company, and star rating
- **Service pages:** 1-2 reviews relevant to that specific service (ex: a MVP review on the MVP page)
- **Dedicated testimonials/reviews page** (optional, later): full collection of reviews
- Pull reviews manually (do not auto-embed Google reviews - this avoids widget loading issues and gives control over which reviews are shown)
- Always include the client's full name and company (with permission)
- Link to the Google review profile with a CTA: "Voir tous nos avis Google"

---

## Multi-Platform Review Approach

### After getting 15+ Google reviews, expand:

**Clutch:**
- Send Clutch's own review request link to 3-5 satisfied clients
- Clutch reviews are detailed (they conduct interviews) so pick clients who will invest time
- Even 3-5 Clutch reviews significantly boost the profile

**Sortlist:**
- Ask Belgian clients specifically to leave a Sortlist review
- Sortlist is used by Belgian companies searching for agencies

**LinkedIn:**
- Ask key contacts for LinkedIn Recommendations on the P-XEL Studio page or founder's profile
- These boost professional credibility

**Facebook:**
- Enable reviews on the Facebook Business Page
- Ask local/personal network contacts to review there

---

## Process Integration

Build review collection into the standard project delivery workflow:

1. **Project kickoff:** no action on reviews
2. **During project:** deliver great work (this is the real review strategy)
3. **At delivery:** confirm client satisfaction verbally or in writing
4. **1-3 days after delivery:** send review request email
5. **7 days later:** one follow-up if no response
6. **After positive review received:** respond within 24h, share internally
7. **Quarterly:** audit review count, check targets, identify gaps

Add a reminder to the project management tool (Notion, Linear, or whatever is used) at the delivery stage: "Send review request in 3 days."

---

## Tracking

Maintain a simple tracker:

| Client | Project | Satisfaction Confirmed | Review Requested (Date) | Follow-up Sent | Review Received | Platform | Rating |
|---|---|---|---|---|---|---|---|
| [Name] | [Project] | Yes | [Date] | Yes/No | Yes/No | Google | 5 |

Review this tracker monthly. If the pipeline stalls, identify why: not enough deliveries, not asking, or asking at the wrong time.
