# P-XEL Phase 1 - Vercel Environment Variables

## Required

| Variable | Value | Environments | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxx` (from Resend dashboard) | Production, Preview | Contact form email delivery |

### How to get the Resend API key

1. Create account at [resend.com](https://resend.com)
2. Go to API Keys in the dashboard
3. Create a new key with "Sending access" permission
4. Copy the key (starts with `re_`)

### Resend domain verification (required for production)

The contact form sends from `noreply@p-xel.be`. Resend requires domain verification:

1. Go to Resend Dashboard > Domains
2. Add `p-xel.be`
3. Add the DNS records Resend provides (SPF, DKIM - typically 3 DNS records)
4. Wait for verification (usually minutes, sometimes up to 48h)

Without domain verification, emails from `noreply@p-xel.be` will fail. For testing, you can temporarily change the `from` address in `site/src/app/api/contact/route.ts` to `onboarding@resend.dev`.

## Optional (Phase 1)

| Variable | Value | Environments | Purpose |
|---|---|---|---|
| (none) | | | |

No other environment variables are needed for Phase 1. The site is fully static except for the contact form API route.

## Future (Phase 2+)

These are NOT needed now but may be added later:

| Variable | When | Purpose |
|---|---|---|
| Google Analytics ID | When analytics is set up | Traffic tracking |
| Google Search Console verification | When GSC is connected | Can also be done via DNS TXT record instead of env var |

## Where to Set in Vercel

1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add the variable name and value
3. Select environments: check both "Production" and "Preview"
4. Click Save

Variables are available immediately for new deploys. Existing deploys must be redeployed to pick up changes.

## Local Development

Create `site/.env.local` (this file is gitignored by default in Next.js):

```
RESEND_API_KEY=re_your_key_here
```

This allows testing the contact form locally with `npm run dev`.
