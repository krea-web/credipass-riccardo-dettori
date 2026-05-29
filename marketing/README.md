# Marketing — IG carousels & post singoli

Set di 24 post Instagram (4:5, 1080×1350 px) per Riccardo Dettori — Credipass.
Branding identico al sito riccardodettori.it: navy #1B2D55 + gold #F5A623, logo Credipass ufficiale, font Fraunces (display) + Manrope (sans).

Le slide non sono "pile di testo": ogni post chiave include un componente grafico — laptop/tablet/phone mockup con UI reale, line-chart sui tassi, bar-chart sulla surroga, gauge donut per il 100% LTV, orologio per il 24h, illustrazioni stilizzate per ogni capitolo del caso Giuliano (casa+chiave, banca, documento bocciato/approvato, speech bubble, combo mutuo+prestito).

Tutte le immagini sono **renderizzate via HTML + Edge headless**, quindi i font sono i veri Google Fonts (no fallback brutti), il logo Credipass è il file ufficiale, e tutto si può rigenerare/modificare in pochi secondi.

---

## Contenuto

### 8 caroselli (49 slide totali)

| # | Titolo                                | Slide | Cartella                          |
|---|---------------------------------------|-------|-----------------------------------|
| 1 | **Il Mutuo Casa Credipass** · 8 prodotti | 10    | `carosello-01-mutuo-casa/`        |
| 2 | **Prestito Personale** fino a 40.000€ | 6     | `carosello-02-prestito/`          |
| 3 | **Cessione del Quinto** · la rata che non senti | 6 | `carosello-03-quinto/`         |
| 4 | **Tasso fisso, variabile o misto?**   | 5     | `carosello-04-tasso/`             |
| 5 | **Mutuo Surroga** · cambia banca a costo zero | 5 | `carosello-05-surroga/`         |
| 6 | **3 step** per trovare il mutuo migliore | 5  | `carosello-06-3-step/`            |
| 7 | **Alternative INPDAP** · PA e pensionati | 4  | `carosello-07-inpdap/`            |
| 8 | **Il caso di Giuliano** · pratica reale (bocciato → approvato) | 8 | `carosello-08-giuliano/` |

### 16 post singoli

| # | Tema                                     | File                                       |
|---|------------------------------------------|--------------------------------------------|
| 1 | Quote · "Il mutuo giusto, non quello facile da vendere" | `single/01-quote-mutuo-giusto.png` |
| 2 | Stat · 100% LTV under 36                  | `single/02-stat-100-percent.png`          |
| 3 | Stat · 40+ banche partner                 | `single/03-stat-40-banche.png`            |
| 4 | Stat · Esito prestito in 24h              | `single/04-stat-24h.png`                  |
| 5 | Lo sapevi · Surroga gratuita (Bersani 2007) | `single/05-did-you-know-surroga.png`    |
| 6 | Lo sapevi · Quinto anche con problemi credito | `single/06-did-you-know-quinto.png`   |
| 7 | Mutuo Liquidità                           | `single/07-mutuo-liquidita.png`           |
| 8 | Quinto per Medici Convenzionati           | `single/08-quinto-medici.png`             |
| 9 | Mutuo Immobili Commerciali                | `single/09-mutuo-commerciale.png`         |
| 10 | OAM badge                                | `single/10-oam-badge.png`                 |
| 11 | Affiliato Credipass                      | `single/11-credipass-partner.png`         |
| 12 | CTA · Preventivo gratuito                | `single/12-cta-preventivo.png`            |
| 13 | Consulenza sempre gratuita               | `single/13-consulenza-gratuita.png`       |
| 14 | Quote · Indipendenza (40+ banche)        | `single/14-quote-indipendenza.png`        |
| 15 | Trasparenza · TAEG max 15,56%            | `single/15-trasparenza-taeg.png`          |
| 16 | FAQ · "Quanto costa un mediatore?"       | `single/16-faq-quanto-costa.png`          |

---

## Come si posta

**Carosello:** apri Instagram → nuovo post → seleziona tutte le slide di una stessa cartella, **in ordine numerico**. IG le pubblica come carosello swipe-able.

**Single post:** upload diretto del singolo PNG.

### Frequenza suggerita (≈ 3 post/settimana)

| Settimana | Lun                          | Mer                          | Ven                            |
|-----------|------------------------------|------------------------------|--------------------------------|
| 1         | Carosello 1 (Mutuo Casa)     | Single 02 (100% under 36)    | Single 05 (Surroga gratuita)   |
| 2         | Carosello 6 (3 step)         | Single 12 (CTA preventivo)   | Single 01 (Quote)              |
| 3         | Carosello 3 (Cessione)       | Single 08 (Quinto medici)    | Single 13 (Consulenza gratis)  |
| 4         | Carosello 2 (Prestito)       | Single 04 (24h)              | Single 06 (Quinto problemi)    |
| 5         | Carosello 5 (Surroga)        | Single 03 (40+ banche)       | Single 14 (Quote indipendenza) |
| 6         | Carosello 4 (Tasso)          | Single 11 (Credipass)        | Single 16 (FAQ costo)          |
| 7         | Carosello 7 (INPDAP)         | Single 10 (OAM)              | Single 15 (TAEG)               |
| 8         | Single 07 (Liquidità)        | Single 09 (Commerciale)      | recap / repost top performer   |

≈ 2 mesi di contenuti pianificati.

### Caption suggerite

Ogni post ha già il messaggio chiave dentro la grafica. Per la caption:
- 1 hook breve (massimo 2 righe)
- 1 spiega-meglio (3-5 righe)
- CTA al sito
- 5-8 hashtag mirati: `#mutuo #mutui #credipass #mediatorecreditizio #cessionedelquinto #prestito #sardegna #cagliari #olbia #sassari #nuoro #alghero`

---

## Come rigenerare o modificare

I PNG nella cartella `output/` sono **derivati**: la sorgente vera è `posts.html` + `styles.css`.

**Modificare un post:**
1. Apri `posts.html`, trova la `<section class="slide" data-out="...">` corrispondente
2. Cambia il copy / l'icona / il colore
3. Rilancia il render

**Rigenerare tutto:**
```powershell
cd marketing
npm install        # solo la prima volta
node render.mjs    # rigenera tutte le PNG
```

**Rigenerare solo un sottoinsieme:**
```powershell
node render.mjs carosello-01           # solo il primo carosello
node render.mjs single/                # solo i post singoli
node render.mjs cta                    # solo le slide che contengono "cta" nel nome
```

**Anteprima visuale di tutte le slide** prima del render:
apri `posts.html` direttamente in un browser — le vedi tutte impilate verticalmente con sfondo grigio attorno.

### Requisiti
- Node 18+
- Microsoft Edge installato (default su Windows 10/11). Il renderer punta a `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` — modificalo in `render.mjs` se Edge è altrove.

---

## Placeholder da personalizzare prima del go-live

| Cosa                  | Dove                                       |
|-----------------------|--------------------------------------------|
| `@riccardodettori_credipass` (handle finto) | `posts.html`, slide CTA              |
| `riccardodettori.it` come URL CTA   | `posts.html` (cercare "riccardodettori.it") |
| Foto reale di Riccardo | non presente: il design è puramente tipografico — se vuoi inserirla, sostituisci il quadrato logo "RD" nella brand-strip con una `<img>` |
| Numeri sociali (es. risparmio €18.000) | `posts.html`, slide `carosello-05-surroga/04-quando` — sostituire con dato certificato |
