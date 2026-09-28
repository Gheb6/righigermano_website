# Righi Germano S.n.c. - Sito Web Ufficiale Vetrina

Sito web istituzionale della ditta artigiana **Righi Germano S.n.c. di Righi Massimo e Giorgio** (attiva dal 1900 a Boretto, RE), specializzata nella produzione su misura di manufatti in cemento armato, graniglia di marmo, scale, davanzali e lavori speciali.

---

## 🛠️ Architettura del Progetto

Il sito è sviluppato con tecnologie web native ad alte prestazioni: **HTML5 semantico, CSS3 modulare nativo (senza dipendenze pesanti) e Vanilla JavaScript**, ottimizzato per l'hosting su GitHub Pages o server web statico.

### 📄 Pagine del Sito
- `index.html` - Homepage con hero immersiva, vetrina lavorazioni, fascia trust e call to action.
- `storia.html` - Cenni storici dal 1900, foto d'epoca e onorificenze storiche (Firenze 1929).
- `ciclo-produttivo.html` - Materiali, miscele di graniglia, casseri e fasi di finitura e trattamento.
- `contatti.html` - Recapiti diretti, sede produttiva e guida all'invio di disegni e richieste preventivo via email.
- `privacy.html` - Informativa privacy e policy sull'utilizzo di soli cookie tecnici.
- `prodotti/`
  - `catalogo.html` - Panoramica generale suddivisa per ambiti applicativi con filtri a pillola.
  - `scale.html` - Scale e gradini su misura con galleria di confronto Prima/Dopo.
  - `davanzali.html` - Davanzali in graniglia con soluzioni a taglio termico.
  - `colonne-balaustre.html` - Colonne e balaustre architettoniche per esterni e interni.
  - `contatori.html` - Nicchie monoblocco a norme unificate per contatori GAS/acqua/luce.
  - `speciali.html` - Riproduzioni artistiche e lavori ex novo su disegno tecnico (griglia 2 colonne desktop).

---

## 🎨 Architettura CSS Modulare (`css/`)
Il foglio di stile principale [`style.css`](css/style.css) orchestra i seguenti moduli specialistici:
- `variables.css` - Design tokens, palette colori (`#b00000`, `#222`), font Google *Plus Jakarta Sans*, ombre e raggi.
- `base.css` - Reset globale, body, container responsive e kicker testuali.
- `header-nav.css` - Header con logo vettoriale SVG, navigazione e menu drawer a scomparsa per mobile.
- `components.css` - Bottoni interattivi, container layout, gallerie `.gallery-grid` e override personalizzati GLightbox.
- `footer.css` - Footer scuro istituzionale e banner di consenso per cookie tecnici.
- `home.css` - Layout immersivo a schede Apple-style per la homepage.
- `catalog.css` - Filtri touch a scorrimento e card compatte per il catalogo prodotti.
- `product-detail.css` - Dettaglio prodotti, breadcrumb dinamico, navigazione Precedente/Successivo e griglie comparative.
- `contatti.css` - Scheda recapiti, guida preventivo su disegno e box dati aziendali.
- `storia.css` - Visualizzazione foto storiche e diplomi d'onore.

---

## ⚙️ Script JavaScript (`js/`)
- `menu.js` - Gestione del menu mobile drawer, toggle accessibile e evidenziazione automatica della pagina attiva (`.active`).
- `product-nav.js` - Generazione dinamica del breadcrumb superiore e dei link di navigazione sequenziale (Precedente/Successivo) tra le schede prodotto.
- `sidebar.js` - Inserimento dinamico della scheda di contatto rapido (visibile su mobile per facilitare la chiamata diretta).
- `footer.js` - Gestione del banner cookie tecnico con persistenza della scelta in `sessionStorage`.

---

## 🚀 SEO e Ottimizzazioni
- **Dati Strutturati Schema.org JSON-LD**: indicizzazione semantica per `LocalBusiness` e `Manufacturer` (sede a Boretto, P.IVA, geolocalizzazione GPS, orari).
- **Open Graph & Twitter Cards**: anteprime social complete di immagine e descrizione per la condivisione su WhatsApp, Telegram, LinkedIn.
- **Sitemap & Robots**: file standard `sitemap.xml` e `robots.txt` per la corretta scansione da parte dei motori di ricerca.
- **PWA Web App Manifest**: configurazione icone in `loghi/site.webmanifest`.
- **Lightbox Interattivo**: integrazione GLightbox per lo zoom ad alta fedeltà e supporto swipe touch da smartphone.

---

## 📄 Licenza e Diritti
Tutti i diritti riservati © 2026 Righi Germano S.n.c. di Righi Massimo e Giorgio.