# Local SEO ROI Measurement for P-XEL

## How to Measure Local SEO ROI for P-XEL

Local SEO ROI is straightforward for a service studio: track from search impression to booked call to signed project. Every metric in between exists to explain why revenue is or is not flowing.

### The ROI formula

```
Local SEO ROI = (Revenue from local SEO leads - Local SEO costs) / Local SEO costs x 100
```

**Example:**
- P-XEL closes 2 projects per month from local search
- Average project value: 5 000 EUR
- Monthly revenue from local SEO: 10 000 EUR
- Monthly local SEO cost (tools + time): 500 EUR
- ROI: (10 000 - 500) / 500 x 100 = 1 900%

Local SEO typically delivers the highest ROI of any marketing channel for local service businesses. The key is measuring it accurately.

## Attribution Model

### The P-XEL local SEO funnel

```
Local search query (Google, Maps, voice)
        |
        v
GBP listing or organic result appears
        |
        v
Click to website (or direct call/booking from GBP)
        |
        v
User lands on service page or homepage
        |
        v
User clicks Calendly booking link
        |
        v
Discovery call booked
        |
        v
Proposal sent
        |
        v
Project signed
        |
        v
Revenue
```

### Attribution challenge

A lead who books a call may have:
1. Found P-XEL via Google search (trackable)
2. Seen P-XEL on Sortlist, then searched Google (partially trackable)
3. Heard about P-XEL from a friend, then searched Google (appears as direct/branded)
4. Found P-XEL via AI search (hard to track)

### Attribution rules for P-XEL

Use last-click attribution for simplicity, with these tags:

| Source | How to identify |
|---|---|
| GBP direct | Click from GBP listing (tracked via UTM or GBP insights) |
| Local organic | Landing page = service or city page, source = google, geo = Belgium |
| Branded search | Query contains "P-XEL" or "PXEL" |
| Referral (Sortlist, Clutch) | Source = sortlist.be or clutch.co |
| Direct/unknown | No clear attribution, ask in discovery call |

### Ask the lead

During every discovery call, ask: "Comment avez-vous entendu parler de P-XEL ?" Record the answer. This is the most reliable attribution for a low-volume, high-value service business.

## GA4 Setup for Local Tracking

### Property configuration

1. **Create a GA4 property** for p-xel.be if not already done
2. **Enable enhanced measurement:** page views, scrolls, outbound clicks, site search
3. **Link Google Search Console** to GA4 for search query data
4. **Link Google Ads** if running any local campaigns

### Geo segments

Create these audience segments in GA4:

| Segment name | Definition |
|---|---|
| Liege visitors | Country = Belgium, City = Liege (and variants: Luik, Liege) |
| Belgium visitors | Country = Belgium |
| Brussels visitors | Country = Belgium, City = Brussels |
| Luxembourg visitors | Country = Luxembourg |
| Local service page visitors | Page path contains /services/ AND country = Belgium |

### Landing page reports

Set up an exploration report in GA4:

**Dimensions:** Landing page, City, Source/Medium
**Metrics:** Sessions, Engaged sessions, Key events (conversions), Engagement rate

**Filter:** Source/Medium = google / organic

This shows which service pages attract local organic traffic and from which cities.

### Custom events to create

| Event name | Trigger | Purpose |
|---|---|---|
| calendly_click | Click on any Calendly link or button | Track booking intent |
| phone_click | Click on tel: link | Track call intent |
| contact_form_submit | Form submission on contact page | Track form leads |
| service_page_view | View of any /services/ page | Track service interest |
| portfolio_view | View of any /portfolio/ or /projets/ page | Track evaluation behavior |

### Conversion setup

Mark these as key events (conversions) in GA4:
1. `calendly_click` - Primary conversion
2. `phone_click` - Secondary conversion
3. `contact_form_submit` - Secondary conversion

## Call Tracking Considerations

### Why call tracking matters

GBP shows call clicks, but not:
- Whether the call was answered
- Call duration
- Whether it led to a project
- Which keyword triggered the call

### Options for P-XEL

| Option | Cost | Complexity | Value |
|---|---|---|---|
| No call tracking | Free | None | Basic (GBP click data only) |
| Google forwarding number | Free | Low | Moderate (call duration via GBP) |
| CallRail or similar | 40-50 EUR/month | Medium | High (full attribution, recording, keyword tracking) |
| Manual logging | Free | Low effort | Moderate (ask every caller how they found P-XEL) |

### Recommendation

For P-XEL's current volume (likely under 20 calls/month from GBP), **manual logging is sufficient.** Track every incoming call in a spreadsheet:

| Date | Caller | How they found us | Service discussed | Outcome |
|---|---|---|---|---|
| 2026-03-05 | Jean Dupont | Google "web designer Liege" | Site web | Call booked |

When call volume exceeds 10/month, consider CallRail for automated tracking.

## Calendly Conversion Tracking

### Setup

1. **Calendly UTM tracking:** Append UTM parameters to the Calendly link on each page:
   - Homepage: `?utm_source=website&utm_medium=cta&utm_campaign=homepage`
   - Service page: `?utm_source=website&utm_medium=cta&utm_campaign=service-[name]`
   - GBP: `?utm_source=gbp&utm_medium=booking&utm_campaign=local`

2. **Calendly webhook to GA4:** Use Calendly's integration or a webhook to fire a GA4 event when a booking is confirmed. Event name: `calendly_booking_confirmed`.

3. **Calendly dashboard:** Track monthly:
   - Total bookings
   - Bookings by UTM source (which page/channel drove the booking)
   - Booking-to-project conversion rate
   - No-show rate

### Calendly-to-revenue tracking

Create a simple spreadsheet or CRM entry for each booking:

| Booking date | Source (UTM) | Client name | Service | Proposal sent | Project signed | Revenue |
|---|---|---|---|---|---|---|
| 2026-03-10 | gbp/booking/local | Marie Martin | Site web | Yes | Yes | 6 000 EUR |
| 2026-03-12 | website/cta/service-mvp | Thomas Renard | MVP | Yes | No | 0 |

This directly ties local SEO activity to revenue.

## Monthly KPIs

### KPI dashboard

Track these monthly. Use a simple spreadsheet or Notion database.

| KPI | Source | Month 1 | Month 2 | Month 3 | Target |
|---|---|---|---|---|---|
| **Visibility** |||||
| GBP impressions | GBP Performance | - | - | - | Growing 10%/month |
| Discovery searches | GBP Performance | - | - | - | Growing 10%/month |
| Local organic sessions | GA4 (geo filtered) | - | - | - | Growing 15%/month |
| Geo-grid avg rank | Local Falcon | - | - | - | Improving monthly |
| **Engagement** |||||
| GBP website clicks | GBP Performance | - | - | - | 5%+ of impressions |
| GBP call clicks | GBP Performance | - | - | - | 2+ per month |
| GBP booking clicks | GBP Performance | - | - | - | 5+ per month |
| Service page views (local) | GA4 | - | - | - | Growing monthly |
| **Conversion** |||||
| Calendly clicks (local) | GA4 event | - | - | - | 10+ per month |
| Calendly bookings (local) | Calendly + UTM | - | - | - | 4+ per month |
| Discovery calls held | Manual log | - | - | - | 3+ per month |
| **Revenue** |||||
| Proposals sent (local leads) | Manual log | - | - | - | 2+ per month |
| Projects signed (local) | Manual log | - | - | - | 1+ per month |
| Revenue from local leads | Manual log | - | - | - | 5 000+ EUR/month |
| **Authority** |||||
| Total GBP reviews | GBP | - | - | - | Growing 2/month |
| Average rating | GBP | - | - | - | 4.8+ |
| New citations | Citation tracker | - | - | - | 2+ per month |
| New backlinks (Belgian) | Ahrefs/Search Console | - | - | - | 1+ per month |

## Quarterly Review Framework

### Every 3 months, answer these questions:

**1. Is local SEO generating revenue?**
- Total revenue from local SEO leads this quarter: [amount]
- Total cost of local SEO this quarter: [amount]
- ROI: [percentage]
- Trend vs previous quarter: [up/down/flat]

**2. Is visibility growing?**
- GBP discovery searches trend: [up/down/flat]
- Local organic traffic trend: [up/down/flat]
- Geo-grid coverage trend: [expanding/stable/shrinking]
- New keywords ranking: [list]

**3. Is engagement converting?**
- Calendly booking rate from local traffic: [percentage]
- Average time from first visit to booking: [days]
- Top converting pages for local visitors: [list]
- Bottleneck in the funnel: [identification]

**4. What should change next quarter?**
- Keywords to add or deprioritize
- Content to create or update
- GBP optimizations to make
- New cities or services to target
- Budget adjustments

### Quarterly review template

```
Q[X] 2026 - P-XEL Local SEO Review

Revenue
- Local SEO leads: [number]
- Revenue attributed: [EUR]
- ROI: [%]

Visibility
- GBP impressions: [number] (+/- % vs Q-1)
- Local organic sessions: [number] (+/- % vs Q-1)
- Top ranking keywords: [list]

Conversions
- Calendly bookings from local: [number]
- Booking-to-project rate: [%]
- Average project value: [EUR]

Actions for next quarter
1. [action]
2. [action]
3. [action]
```

## Cost Per Lead: Local SEO vs Other Channels

### Local SEO cost structure for P-XEL

| Cost item | Monthly cost | Notes |
|---|---|---|
| GBP management (time) | 100 EUR | 2-3 hours/month at internal rate |
| Content creation (time) | 200 EUR | 2 blog posts, 4 GBP posts |
| Citation management | 50 EUR | Tool subscription or manual time |
| Geo-grid tracking | 25 EUR | Local Falcon or BrightLocal |
| Review management (time) | 25 EUR | Requesting and responding |
| Link building (time) | 100 EUR | Outreach, guest posts |
| **Total** | **500 EUR/month** | |

### Cost per lead comparison

| Channel | Monthly cost | Leads/month | Cost per lead | Lead quality |
|---|---|---|---|---|
| Local SEO (mature) | 500 EUR | 4-8 | 60-125 EUR | High (high intent) |
| Google Ads (local) | 500-1 000 EUR | 3-6 | 150-300 EUR | Medium-high |
| Sortlist | 100-300 EUR | 1-3 | 100-300 EUR | Medium (competitive) |
| LinkedIn Ads | 500-1 000 EUR | 1-3 | 300-500 EUR | Medium |
| Cold outreach | 200 EUR (time) | 1-2 | 100-200 EUR | Low-medium |
| Referrals | 0 EUR | Variable | 0 EUR | Very high |

### Why local SEO wins for P-XEL

1. **Compounding returns:** Unlike ads, local SEO effort accumulates. Month 12 costs the same as month 1, but generates 3-5x more leads.
2. **High intent:** Someone searching "web designer Liege" is ready to hire. No cold audience to warm up.
3. **Trust advantage:** Ranking in the local pack with reviews signals trust before the first click.
4. **No per-click cost:** Once ranking, each click is free. Google Ads charges 5-15 EUR per click for design keywords in Belgium.

### Break-even calculation

- Monthly local SEO cost: 500 EUR
- Average project value: 5 000 EUR
- Projects needed to break even: 0.1 per month (1 project every 10 months)
- Expected projects from local SEO at maturity: 1-2 per month
- Net ROI at maturity: 900-1 900%

Local SEO is P-XEL's highest-leverage marketing investment. The data from this analytics setup proves it and guides ongoing optimization.
