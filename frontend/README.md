# Banorinc SCS — Website

A static, multi-page React site built with Vite + React Router, styled in
royal blue and white.

## Pages

- `/` — Home
- `/about` — About Us
- `/service` — Service
- `/contact` — Contact Us

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Adding your images

See `public/assets/README.md` for the exact filenames the site expects
(logo, client logos, team photos). Drop files in and they show up
automatically — everything currently falls back to clean text/initials
placeholders so the site looks complete either way.

## Building for production (static export)

```bash
npm run build
```

This outputs a fully static site into `dist/` — upload that folder's
contents to any static host (Netlify, Vercel, GitHub Pages, cPanel/Namecheap
static hosting, S3, etc.). No Node server is required to serve it.

If you deploy `dist/` to a subfolder rather than domain root, set `base` in
`vite.config.js` accordingly.

### Client-side routing on a plain static host

Because this uses React Router, a host that doesn't understand SPA routing
needs a rewrite rule so that refreshing `/about` doesn't 404. For example,
on Apache add this to `dist/.htaccess`:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Wiring up the contact form

`src/pages/Contact.jsx` currently logs the submission to the console and
shows a success message. Point the `handleSubmit` function at your backend
endpoint or email service (e.g. `fetch('/api/contact', { method: 'POST', ... })`)
to actually deliver messages.

## Design notes

- Palette: deep navy (`--navy`), royal blue (`--royal` / `--royal-bright`),
  white, with a small gold accent used sparingly for the "route" motif that
  echoes the Source → Bid → Purchase → Deliver process.
- Type: Space Grotesk (headings), Inter (body), IBM Plex Mono (stats/labels).
- All tokens live at the top of `src/index.css`.
