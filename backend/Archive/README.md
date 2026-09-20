# Banorinc SCS — Backend

A small Node/Express API with one real job: take contact form submissions
from the frontend and email them to `info@banorinc.com`.

## Endpoints

- `POST /api/contact` — validates `{ name, email, phone?, company?, subject, message }`
  and emails it via SMTP. Rate-limited to 10 requests / 15 minutes / IP.
- `GET /api/health` — returns `{ ok: true }`, useful for uptime checks.

## Setup

```bash
npm install
cp .env.example .env
```

Then edit `.env`:

| Variable | Purpose |
|---|---|
| `PORT` | Port to listen on (default `4000`) |
| `CONTACT_TO_EMAIL` | Where submissions are delivered (default `info@banorinc.com`) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | Your SMTP server's connection details |
| `SMTP_USER` / `SMTP_PASS` | Mailbox credentials used to send the email |
| `ALLOWED_ORIGIN` | CORS — set to your real frontend domain in production, e.g. `https://banorinc.com` |

`SMTP_USER`/`SMTP_PASS` can be the `info@banorinc.com` mailbox itself
(check your cPanel → Email Accounts → Connect Devices for the host/port),
or any other provider — Gmail with an App Password, SendGrid, Mailgun,
Postmark, etc.

## Run it

```bash
npm start
```

Runs on http://localhost:4000.

## Serving the frontend too (optional)

If `../frontend/dist` exists (i.e. you've run `npm run build` in
`../frontend`), this server automatically serves it as a static site with
SPA fallback routing — so in production you can run just this one process
for both the site and the API. See the top-level `../README.md` for the
full deployment picture.
