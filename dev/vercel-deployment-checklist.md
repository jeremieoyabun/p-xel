# P-XEL Phase 1 - Vercel Deployment Checklist

## 1. Build Verification

The production build passes cleanly:

```
npm run build
```

- Build command: `next build`
- Output: 20 static pages + 2 dynamic routes (`/api/contact`, `/opengraph-image`)
- Turbopack compiles in ~1.2s
- No TypeScript errors, no warnings
- Framework: Next.js 16.1.6, React 19.2.3
- Node requirement: 18.18+ (Vercel default satisfies this)

## 2. Vercel Project Settings

### Root Directory

The Next.js app lives in `site/`, not the repo root.

**In Vercel project settings, set Root Directory to: `site`**

This is the single most important setting. Without it, the build will fail.

### Framework Preset

Vercel auto-detects Next.js. No override needed.

### Build & Output

| Setting | Value |
|---|---|
| Build Command | `npm run build` (auto-detected) |
| Output Directory | `.next` (auto-detected) |
| Install Command | `npm install` (auto-detected) |
| Package Manager | npm (`package-lock.json` present) |

### Node.js Version

Next.js 16 requires Node 18.18+. Vercel defaults to Node 22.x which is fine. No `.nvmrc` needed unless a specific version is required.

## 3. Environment Variables

See `vercel-env-vars.md` for the full list.

One required variable: `RESEND_API_KEY`

Set it in Vercel Dashboard > Project Settings > Environment Variables for Production and Preview environments.

## 4. Domain Configuration

For staging/preview deploys, no domain config is needed - Vercel provides a `.vercel.app` subdomain automatically.

For production domain (`p-xel.be`):
- [ ] Add domain in Vercel Dashboard > Project Settings > Domains
- [ ] Configure DNS: A record `76.76.21.21` or CNAME to `cname.vercel-dns.com`
- [ ] SSL is automatic via Let's Encrypt
- [ ] www redirect is configurable in Vercel domain settings

**Note:** `SITE_URL` in `site/src/lib/constants.ts` is already set to `https://p-xel.be`. This value is used for sitemap, canonical URLs, and schema. For staging, the sitemap and canonicals will point to the production domain, which is acceptable for preview deploys.

## 5. Deployment Steps

### First Deploy (Import Project)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the Git repository
3. Set **Root Directory** to `site`
4. Add environment variable: `RESEND_API_KEY` = (your Resend API key)
5. Click Deploy
6. Vercel runs `npm install` then `npm run build` automatically

### Subsequent Deploys

Every push to `main` triggers a production deploy automatically. PRs get preview deploys.

### Manual Deploy (CLI)

```bash
cd site
npx vercel          # preview deploy
npx vercel --prod   # production deploy
```

## 6. Vercel-Specific Caveats

### Edge Runtime for OG Image

`site/src/app/opengraph-image.tsx` uses `runtime = "edge"`. This runs on Vercel's Edge Network, not Node.js. It works out of the box on Vercel - no config needed. The build warning "Using edge runtime on a page currently disables static generation" is expected and harmless.

### API Route (`/api/contact`)

This is a serverless function (Node.js runtime). It makes an outbound HTTP call to Resend's API. Vercel's serverless functions have a 10s default timeout on the Hobby plan, which is more than enough.

### Static Generation

18 of 20 pages are statically generated at build time. This means near-instant TTFB from Vercel's CDN. Only `/api/contact` and `/opengraph-image` are server-rendered on demand.

### No `vercel.json` Needed

The project works with Vercel's defaults. No custom headers, rewrites, or redirects are needed for Phase 1. If 301 redirects from the old site are needed later, add a `vercel.json` with a `redirects` array.

### Resend Sender Domain

The contact form sends from `noreply@p-xel.be`. For this to work in production:
- The `p-xel.be` domain must be verified in Resend's dashboard
- DNS records (SPF/DKIM) must be added as instructed by Resend

For staging/testing, Resend allows sending from `onboarding@resend.dev` on the free tier without domain verification. You can temporarily change the `from` address in `route.ts` for testing.

### Image Optimization

`next.config.ts` configures WebP format and device sizes. Vercel handles image optimization automatically. No current images use `<Image>` (all are placeholders), so this is ready but dormant.

## 7. Pre-Deploy Checks

- [x] `npm run build` passes without errors
- [x] No hardcoded `localhost` URLs
- [x] `SITE_URL` points to production domain
- [x] API route uses lazy-initialized Resend (no build-time env crash)
- [x] `poweredByHeader: false` configured
- [x] `compress: true` configured
- [x] `robots.txt` allows crawling (disallows `/api/` only)
- [x] `sitemap.xml` lists all 14 public pages

## 8. Post-Deploy Verification

After the first deploy succeeds:

- [ ] Homepage loads at the Vercel URL
- [ ] Navigate to all 14 pages - no 404s
- [ ] `/sitemap.xml` renders correctly
- [ ] `/robots.txt` renders correctly
- [ ] `/opengraph-image` returns a 1200x630 PNG
- [ ] Contact form submits (requires `RESEND_API_KEY` to be set)
- [ ] Calendly embed loads on `/contact/`
- [ ] No console errors on any page
- [ ] Mobile responsive layout works

## 9. What Will Deploy Successfully but Feel Unfinished

These items will NOT block the Vercel deploy, but will be visible to anyone viewing the site:

### Critical (immediately noticeable)

1. **System fonts instead of brand fonts** - Font files are not yet in `public/fonts/`, so Space Grotesk / Satoshi / JetBrains Mono are not loaded. The site renders with system font fallbacks. The premium typographic identity is lost.

2. **Image placeholders everywhere** - ProjectCards show text placeholders. Case study pages show text instead of screenshots. Studio page shows "Photo fondateur" text block instead of a portrait.

3. **Calendly URL unverified** - If `https://calendly.com/p-xel` is not the correct Calendly link, the embed will show nothing or the wrong calendar.

### Noticeable on closer inspection

4. **OG image uses system fonts** - Social sharing card renders but without brand typography.

5. **Favicon is a geometric placeholder** - Functional but not the P-XEL logo.

6. **Google Search Console not connected** - Verification code placeholder is commented out in `layout.tsx`. Indexing will not happen until this is set up.

7. **Resend domain not verified** - Contact form emails will fail unless `p-xel.be` is verified in Resend or the `from` address is changed to a Resend-owned domain.

### Minor

8. **Hardcoded Calendly URLs** in `homepage.ts` lines 6 and 181 - Should reference `CONTACT.calendlyUrl` for consistency, though they currently point to the same URL.
