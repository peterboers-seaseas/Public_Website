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
| News articles | `src/content/news/*.md`, one file per article; the file name becomes the web address (`/news/<file-name>/`) |
| Team members | `src/content/team/*.md` (name, roles in EN and NL, photo, LinkedIn, order) |
| Videos | `public/videos/` (see `public/videos/README.txt`); the 3D terminal video starts muted when visitors scroll |
| Team photo, portraits | `public/images/team/` (`team.jpg` + names used in the team files); add LinkedIn URLs in `src/content/team/*.md` to show the LinkedIn icons |
| News images and partner logos | `public/images/news/` |
| Colours, spacing, fonts | `src/styles/global.css` (brand tokens at the top) |
| Video paths, contact-form endpoint | `src/config.ts` |
| Privacy & cookies, disclaimer | texts in `src/i18n/en.ts` and `nl.ts` under `legal` (draft: fill in the [placeholders] and have them checked) |

Missing images and videos show a labelled placeholder, so the site always builds.

### Adding a news article
Copy an existing file in `src/content/news/`, give it a new file name (this becomes the web address) and change the fields and text.
Newest `date` appears first. The article text is written in English; the Dutch site shows the same text with a short note and uses `excerpt_nl` as summary.
Set `draft: true` to hide an article.

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
