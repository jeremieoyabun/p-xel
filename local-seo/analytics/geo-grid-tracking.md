# Geo-Grid Tracking for P-XEL

## What Geo-Grid Tracking Is and Why It Matters

Geo-grid tracking (also called local rank tracking or heatmap tracking) shows where P-XEL ranks in the local pack at different physical locations across a city. Instead of checking rank from one point, it checks from dozens of points on a grid overlay.

This reveals:
- Where P-XEL dominates (green zones near the address)
- Where P-XEL is weak (red zones at the edges of the service area)
- How proximity affects ranking at each point
- Whether optimization efforts are expanding the radius of strong rankings

Without geo-grid tracking, local SEO is guesswork. A rank check from P-XEL's office shows a strong position, but a check from the other side of Liege may show a completely different result.

## Tools

### Recommended: Local Falcon

- Purpose-built for geo-grid tracking
- Visual heatmap overlay on Google Maps
- Tracks local pack and local finder rankings
- Pricing: starts at $24/month for small plans
- URL: localfalcon.com

### Alternative: BrightLocal Local Search Grid

- Part of the BrightLocal suite (which P-XEL may already use for citations)
- Similar grid tracking functionality
- Pricing: included in BrightLocal plans from $39/month
- URL: brightlocal.com

### Budget alternative: Manual approach

If neither tool is in budget:
1. Use a VPN or Google Ads Preview Tool to simulate searches from different locations
2. Search from different physical locations in Liege (home, client meetings, cafes)
3. Document rankings in a spreadsheet
4. Less accurate but free

### Tool recommendation

Start with Local Falcon if budget allows. The visual heatmaps are the clearest way to see ranking distribution and communicate results.

## Grid Setup for Liege

### Center point

Set the grid center on P-XEL's registered address in Liege. If the address is in Liege center (4000), this naturally covers the highest-density search area.

### Grid parameters

| Parameter | Setting | Rationale |
|---|---|---|
| Center point | P-XEL address, 4000 Liege | Business location |
| Grid size | 7x7 (49 points) | Good balance of coverage and credit usage |
| Radius | 10 km | Covers all of greater Liege |
| Grid shape | Square or circular | Either works, circular is slightly more natural |

### What the grid covers at 10 km radius

The 10 km grid from Liege center covers:
- North: Herstal, Vottem, Juprelle
- South: Seraing, Ougree, Boncelles
- East: Chenee, Vaux-sous-Chevremont, Beyne-Heusay
- West: Ans, Grace-Hollogne, Awans

This covers the entire urban area where potential clients are most likely to search.

### Grid visualization

```
         Juprelle
            |
   Awans -- + -- Vottem -- Herstal
            |
Grace-H -- + -- LIEGE CENTER -- Chenee
            |
   Ans  -- + -- Ougree -- Beyne-H
            |
        Boncelles
```

Each "+" represents multiple grid check points. At 7x7, there are 49 points spread evenly across this area.

## Keywords to Track on the Grid

### Top 10 keywords for geo-grid tracking

| Priority | Keyword | Monthly search volume (est.) | Intent |
|---|---|---|---|
| 1 | web designer liege | 100-200 | Commercial |
| 2 | creation site web liege | 50-100 | Commercial |
| 3 | agence web liege | 100-200 | Commercial |
| 4 | site internet liege | 50-100 | Commercial |
| 5 | developpeur web liege | 50-100 | Commercial |
| 6 | graphiste liege | 100-200 | Commercial |
| 7 | branding liege | 20-50 | Commercial |
| 8 | ui ux designer liege | 10-30 | Commercial |
| 9 | refonte site web liege | 10-30 | Commercial |
| 10 | application web liege | 10-30 | Commercial |

Start with the top 5. Add more as budget allows (each keyword x 49 grid points = 49 credits per scan).

## How to Read Results and Identify Weak Zones

### Color coding (Local Falcon standard)

| Color | Rank | Meaning |
|---|---|---|
| Dark green | #1 | Dominant position |
| Light green | #2-3 | In the local 3-pack |
| Yellow | #4-7 | Visible in local finder, not in pack |
| Orange | #8-13 | Buried in local finder |
| Red | #14-20 | Barely visible |
| Gray | Not ranked | Not appearing at all |

### What to look for

1. **Core zone (0-3 km):** Should be mostly green. If not, there is a fundamental relevance or prominence issue.

2. **Mid zone (3-7 km):** Expected to be yellow to light green. If solidly green, prominence signals are strong. If red, competitors in those areas are dominating.

3. **Outer zone (7-10 km):** Expected yellow to orange. Green here means exceptional prominence. Red is normal for a single-location business.

4. **Directional patterns:** Rankings may be stronger in one direction than another. This usually means a competitor is located in the weak direction and pulling proximity-based rankings away.

5. **Keyword variations:** Some keywords may show wider green coverage than others. This reveals which services have stronger relevance signals.

### Interpreting weak zones

| Pattern | Likely cause | Fix |
|---|---|---|
| Red in all directions beyond 5 km | Low prominence | Build reviews, citations, backlinks |
| Red in one direction only | Strong competitor in that direction | Cannot fix proximity; focus on prominence |
| Yellow across entire grid | Moderate prominence, no dominance | Increase review velocity and content |
| Green core, red edges | Normal pattern, proximity dominant | Acceptable; focus on expanding gradually |
| Red even at center | Serious issue: wrong category, suspended, or penalty | Audit GBP listing immediately |

## Tracking Frequency

### Monthly tracking

Run geo-grid scans once per month, on the same day each month (e.g., first Monday). This gives consistent comparison data.

### When to track more frequently

- After a major GBP update (category change, address change)
- After receiving a batch of new reviews
- After a competitor enters or exits the market
- During a local SEO campaign push

### Monthly tracking spreadsheet

| Month | Keyword | Avg rank | #1 positions | Top 3 positions | Top 10 positions | Not ranked |
|---|---|---|---|---|---|---|
| Jan 2026 | web designer liege | 4.2 | 8/49 | 22/49 | 41/49 | 3/49 |
| Feb 2026 | web designer liege | 3.8 | 12/49 | 28/49 | 44/49 | 1/49 |

Track the trend. The goal is to see average rank decrease (closer to 1), #1 positions increase, and not-ranked decrease over time.

## How to Use Results to Improve Rankings in Weak Areas

### Action plan based on grid results

1. **Identify the weakest zones:** List the grid points where P-XEL ranks #10+ or not at all.

2. **Check what ranks there instead:** For each weak point, note which competitors appear in positions #1-3. Study their GBP profiles.

3. **Find the gaps:**
   - Do they have more reviews? (Increase review velocity)
   - Do they have a closer address? (Cannot fix, but can compensate with prominence)
   - Do they have better category alignment? (Optimize categories)
   - Do they have more photos/posts? (Increase GBP activity)

4. **Create content for weak areas:** If a weak zone corresponds to a specific neighborhood or commune, create content that mentions it:
   - Case study from a client in that area
   - Blog post about businesses in that commune
   - Service page mentioning the area in "areas we serve"

5. **Earn reviews from clients in weak zones:** A review from a client in Herstal strengthens P-XEL's relevance for searches made from Herstal.

6. **Track impact:** After implementing changes, run the grid again next month. Compare the specific weak points.

## Secondary Grids: Brussels and Luxembourg

### When to start secondary grids

Do not start tracking Brussels or Luxembourg until:
- Liege grid shows mostly green/yellow (no red in core zone)
- P-XEL has 15+ reviews on GBP
- Dedicated city landing pages exist on the website (/services/web-design-bruxelles, /services/web-design-luxembourg)

### Brussels grid setup

| Parameter | Setting |
|---|---|
| Center point | Grand-Place, Brussels (central) |
| Grid size | 5x5 (25 points) |
| Radius | 8 km |
| Keywords | web designer bruxelles, creation site web bruxelles, agence web bruxelles |

**Expected results:** Mostly red/orange. P-XEL is 100 km away. The goal is to track any positions gained over time, not to dominate. Even appearing in the local finder (positions 4-20) from Liege is a win.

### Luxembourg grid setup

| Parameter | Setting |
|---|---|
| Center point | Luxembourg City center |
| Grid size | 5x5 (25 points) |
| Radius | 5 km |
| Keywords | web designer luxembourg, creation site web luxembourg, agence web luxembourg |

**Expected results:** Slightly better than Brussels due to lower competition. French-language searches in Luxembourg have fewer competing businesses than Brussels.

### Timeline

| Period | Action |
|---|---|
| Month 1-6 | Liege grid only, monthly |
| Month 7 | Add Brussels grid if Liege is performing well |
| Month 9 | Add Luxembourg grid |
| Month 12 | Full assessment of all three markets |
