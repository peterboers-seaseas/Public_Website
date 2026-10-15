# SeaSeaS website

Static website for www.seaseas.nl, built with [Astro](https://astro.build). English at `/`, Dutch at `/nl/`.
No database or server code: the build produces plain HTML/CSS in `dist/`, which any static host can serve.

## Run it locally

Requires Node.js 18.20+ (or 20+).

```bash
npm install
npm run dev      # preview at http://localhost:4321, reloads on every change
npm run build    # production build into dist/
```

## Where to change what

| What | Where |
| --- | --- |
| All page texts (EN / NL) | `src/i18n/en.ts` and `src/i18n/nl.ts` (same structure; NL is a draft translation, please proofread) |
| News items | `src/content/news/en/*.md` and `src/content/news/nl/*.md`, one file per item per language |
| Team members | `src/content/team/*.md` (name, roles in EN and NL, photo, LinkedIn, order) |
| Videos | `public/videos/` with the file names listed in `public/videos/README.txt` |
| Team photo, portraits | `public/images/team/` (`team.jpg` + names used in the team files) |
| News images (16:9) | `public/images/news/` |
| Colours, spacing, fonts | `src/styles/global.css` (brand tokens at the top) |
| Video paths, contact-form endpoint | `src/config.ts` |
| Legal pages (privacy, cookies, disclaimer) | `src/components/LegalPage.astro` (placeholder text for now) |

Missing images and videos show a labelled placeholder, so the site always builds.
The two `[placeholder]` news items in each language should be replaced or deleted before launch.

### Adding a news item
Copy an existing file in `src/content/news/en/`, change the fields, and do the same in `src/content/news/nl/`.
Newest `date` appears first. Optional: `dateLabel` (text instead of the date), `image`, `link`, `linkLabel`, `draft: true` (hidden).

## Hosting: two options

### A. GitHub Pages (free; repository and hosting in one place)
1. Push this folder to a GitHub repository (branch `main`).
2. Repository **Settings > Pages > Source: GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
3. Contact form: GitHub Pages cannot receive forms. Create a free form at formspree.io and paste its endpoint into `FORM_ACTION` in `src/config.ts`.
4. Web editor (`/admin`): needs a small GitHub OAuth helper on GitHub Pages. Simplest alternative: colleagues edit the Markdown files directly on github.com.

### B. Netlify (free tier; connects to the same GitHub repository)
1. Netlify: **Add new site > Import from GitHub**, pick the repository. Build settings are read from `netlify.toml`.
2. Contact form works automatically (Netlify Forms; submissions appear in the Netlify dashboard and can be emailed to info@seaseas.nl).
3. Web editor: Netlify **Site configuration > Access & security > OAuth > Install provider: GitHub**, then set the repository name in `public/admin/config.yml` (already set to `peterboers-seaseas/public_website`). Editors log in at `/admin` with their GitHub account (they need write access to the repository).

## Going live on seaseas.nl
1. A few days before: lower the DNS TTL of seaseas.nl at the current domain provider.
2. Point `www.seaseas.nl` (CNAME) and `seaseas.nl` (A records) to the new host, following the host's custom-domain instructions. `public/CNAME` is already set for GitHub Pages.
3. **Do not change the MX records** (email).
4. HTTPS is issued automatically by both hosts.
5. Add redirects from important old page addresses to the new ones, then submit `https://www.seaseas.nl/sitemap-index.xml` in Google Search Console.
6. Only cancel the old JouwWeb plan once the new site is confirmed live and the domain is not tied to it.

## Privacy notes
- Fonts (Be Vietnam Pro) are self-hosted: no calls to Google.
- Videos are self-hosted: no YouTube/Vimeo tracking cookies.
- No analytics included. If added, choose a cookieless tool (e.g. Plausible) to avoid a cookie banner.
