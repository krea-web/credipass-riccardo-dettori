# riccardodettori.it

Sito personale di Riccardo Dettori — mediatore creditizio affiliato Credipass.
Astro 4 (SSG) · Tailwind CSS · TypeScript · 10 lingue · ottimizzato per SEO/AEO/GEO.

## Stack
- **Astro 4.x** (output statico)
- **Tailwind CSS 3.x** — palette navy/gold definita in `tailwind.config.cjs`
- **TypeScript**, **@astrojs/sitemap**, **astro-seo**, **sharp**
- Fonts: **Fraunces** (display) + **Manrope** (body)
- Deploy target: **Vercel** (statico, vedi `vercel.json`)

## Setup locale

```powershell
npm install
npm run dev
```

Apri http://localhost:4321/it/

## Build di produzione

```powershell
npm run build
npm run preview
```

L'output statico finisce in `dist/`.

## Struttura i18n
- 10 locali dichiarate in `src/config/i18n.ts` — IT è il default.
- IT ed EN hanno traduzioni complete (`src/i18n/{it,en}.json`).
- Per le altre 8 lingue il sito genera tutte le route ma serve IT come fallback,
  con un banner in cima alla pagina che lo segnala.
- Per aggiungere una traduzione: creare il file JSON corrispondente (es. `de.json`),
  importarlo in `src/utils/i18n.ts`, e aggiungere il codice a `TRANSLATED_LOCALES`.

## Placeholder da sostituire prima del go-live
- `[TELEFONO]`, `[NUMERO OAM]`, `[P.IVA]`, `[WHATSAPP]` in `src/config/seo.ts` (`CONTACT`).
- Foto di Riccardo (placeholder con iniziali "RD" in `Hero.astro`).
- Numeri reali in `src/i18n/it.json` / `en.json` (chiave `stats.items`).
- Form endpoint Formspree in `src/components/ContactForm.astro` (`FORM_ENDPOINT`) — finché contiene `REPLACE_ME` il form mostra un fallback con CTA WhatsApp/email.
- Logo Credipass ufficiale: `public/assets/credipass-logo.svg`.
- Account social in `src/config/seo.ts` (`SOCIAL`).
- OG cover (`public/og-cover.svg`) e apple-touch-icon (`public/apple-touch-icon.svg`) sono SVG generati. Per la massima compatibilità su WhatsApp/Facebook, sostituirli con un export JPG/PNG 1200×630 quando hai un asset definitivo.

## URL CTA Credipass
Centralizzato in `src/config/seo.ts` come `CREDIPASS_CTA_URL` — modificare in un solo punto.

## Deploy su Vercel
1. Push del repository su GitHub.
2. Import del progetto su Vercel — framework auto-detected: Astro.
3. Build command: `npm run build`; Output directory: `dist/`.
4. Domain: collegare `www.riccardodettori.it` (+ redirect apex → www).
