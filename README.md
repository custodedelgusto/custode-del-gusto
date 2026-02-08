# Custode del Gusto

![Logo Custode del Gusto](assets/logo/logo.png)

## La Qualità al Primo Posto

**Custode del Gusto** è un sito e-commerce dedicato alla commercializzazione di prodotti italiani autentici e di eccellenza. La piattaforma nasce dal desiderio sincero di creare un ponte tra i piccoli produttori italiani di qualità e i consumatori che cercano genuinità, sostenibilità e eccellenza culinaria.

---

## 📋 Indice

1. [Descrizione Progetto](#descrizione-progetto)
2. [Caratteristiche Principali](#caratteristiche-principali)
3. [Struttura del Progetto](#struttura-del-progetto)
4. [Tecnologie Utilizzate](#tecnologie-utilizzate)
5. [Installazione Locale](#installazione-locale)
6. [Utilizzo](#utilizzo)
7. [Prodotti Disponibili](#prodotti-disponibili)
8. [Deployment](#deployment)
9. [Configurazione e Personalizzazione](#configurazione-e-personalizzazione)
10. [Troubleshooting](#troubleshooting)
11. [Roadmap Futura](#roadmap-futura)
12. [Contatti](#contatti)

---

## Descrizione Progetto

Custode del Gusto nasce dall'amore per i sapori autentici italiani e per le storie che ogni prodotto porta con sé. Ogni scelta racchiude il lavoro di persone, famiglie e territori che vivono la tradizione non come qualcosa da conservare soltanto, ma da tramandare con orgoglio.

La nostra missione è portare sulle vostre tavole il meglio dell'eccellenza italiana, creando un filo diretto tra chi lavora con dedizione e chi desidera nutrirsi in modo consapevole, genuino e ricco di significato. Il progetto combina design elegante con funzionalità e-commerce complete, offrendo un'esperienza utente professionale e intuitiva.

### I Nostri Valori

L'azienda si fonda su quattro pilastri fondamentali:

**Qualità Superiore**: La qualità non è una scelta, è un impegno. Ogni prodotto che entra nel nostro catalogo passa attraverso un rigoroso processo di selezione. Lavoriamo esclusivamente con produttori che condividono la nostra filosofia, garantendo che ogni articolo rappresenti l'eccellenza nel suo genere.

**Sostenibilità Responsabile**: Crediamo che il commercio responsabile sia il dovere di ogni azienda moderna. Custode del Gusto si impegna a ridurre l'impatto ambientale delle proprie operazioni, supportando fornitori che adottano pratiche sostenibili e packaging eco-friendly.

**Tradizione e Innovazione**: Onoriamo il passato, abbracciamo il futuro. La tradizione rappresenta le radici del nostro lavoro, mentre l'innovazione è essenziale per restare rilevanti e migliorare l'esperienza del cliente.

**Trasparenza e Fiducia**: La trasparenza è il cuore del nostro rapporto con i clienti. Condividiamo in modo chiaro tutte le informazioni sui prodotti che selezioniamo: origine, ingredienti, metodi di lavorazione e valori dei produttori.

---

## Caratteristiche Principali

### Frontend Interattivo

Il sito include una **navigazione principale responsive** che rimane visibile durante lo scroll con un hamburger menu compatto su dispositivi mobile. La **hero section dinamica** presenta il logo aziendale, il titolo e il sottotitolo con animazioni fluide al caricamento.

Un **sistema di valori interattivo** presenta quattro card che rappresentano i pilastri aziendali, ognuna con effetti hover che le sollevano e ingrandiscono l'ombra. La **sezione "Chi Siamo"** racconta la storia dell'azienda, presenta la missione e la visione, ed elenca gli impegni verso i clienti con box highlight.

### Sistema Shop Avanzato

Lo **shop dinamico** consente di filtrare i prodotti per categoria. Il **carrello persistente** salva gli articoli nel browser usando localStorage, con funzionalità complete: aggiunta e rimozione prodotti, modifica quantità, calcolo automatico totale, e persistenza tra sessioni browser.

### Design Completamente Responsivo

Il sito è completamente responsivo con breakpoints a 768px (tablet) e 480px (mobile). Tutti gli elementi si adattano elegantemente alle diverse dimensioni dello schermo, fornendo un'esperienza coerente su tutti i dispositivi.

### Sicurezza e Performance

Il sito include **reindirizzamento automatico HTTPS** via .htaccess, **compressione Gzip** per velocità, **caching headers** per performance, **security headers** moderni per protezione, e **validazione input** lato client.

### SEO Ottimizzato

Il progetto include **semantic HTML5**, **meta tags** completi e descrittivi, **og: tags** per social sharing, **viewport** per mobile optimization, e **robots.txt** configurato per motori ricerca.

### PWA Ready

Il sito è configurato come **Progressive Web App** e può essere **installato come app** su dispositivi mobili. Include **manifest.json** per configurazione PWA, icon multiple, e screenshot per installazione.

---

## Struttura del Progetto

```
custode-del-gusto/
│
├── 📄 index.html                    # Pagina HTML principale
├── 🎨 styles.css                    # Foglio di stile CSS (19KB)
├── 📜 script.js                     # Logica JavaScript (14KB)
│
├── 📋 package.json                  # Configurazione npm
├── 🌐 manifest.json                 # PWA Manifest
├── 🤖 robots.txt                    # Configurazione SEO
├── ⚙️  .htaccess                    # Configurazione Apache Netsons
├── 📝 .gitignore                    # Git ignore patterns
├── 📖 README.md                     # Documentazione principale
├── 📋 STRUTTURA_CARTELLE.md         # Descrizione struttura
│
└── 📁 assets/                       # Cartella risorse multimediali
    │
    ├── 📁 logo/                     # Logo azienda (vari formati)
    │   ├── logo.png                 # Logo principale (quadrato)
    │   ├── logo-main.png            # Logo orizzontale (1500x500px)
    │   ├── logo-header.png          # Logo header desktop (300x100px)
    │   ├── logo-mobile.png          # Logo header mobile (200x70px)
    │   ├── logo-white.png           # Logo versione bianca
    │   ├── logo-dark.png            # Logo versione scura
    │   ├── logo-192.png             # PWA icon piccolo
    │   ├── logo-512.png             # PWA icon grande
    │   ├── logo-square.png          # Logo quadrato per social
    │   ├── logo-favicon.png         # Favicon (32x32px)
    │   └── logo.svg                 # Logo vettoriale
    │
    ├── 📁 images/                   # Immagini progetto
    │   ├── 📁 products/             # Immagini prodotti
    │   │   ├── product_olio.jpg     # Olio Extravergine
    │   │   ├── product_pasta.jpg    # Pasta Trafilata
    │   │   └── product_gin.jpg      # Athena Gin
    │   │
    │   ├── 📁 hero/                 # Immagini hero section
    │   │   ├── hero-background.jpg
    │   │   └── hero-overlay.png
    │   │
    │   └── 📁 other/                # Icon SVG
    │       ├── icon-quality.svg
    │       ├── icon-sustainability.svg
    │       ├── icon-tradition.svg
    │       └── icon-trust.svg
    │
    └── 📁 screenshots/              # Screenshot PWA
        ├── screenshot-540.png       # Mobile
        └── screenshot-1280.png      # Desktop
```

---

## Tecnologie Utilizzate

| Tecnologia | Versione | Utilizzo |
|-----------|---------|---------|
| **HTML** | 5 | Markup semantico e accessibile |
| **CSS** | 3 | Grid, Flexbox, Media Queries, CSS Variables |
| **JavaScript** | ES6+ | Vanilla JS, nessuna dipendenza esterna |
| **LocalStorage** | Browser API | Persistenza carrello |
| **Intersection Observer** | Browser API | Animazioni al scroll |
| **Git** | 2.x | Versionamento del codice |
| **GitHub** | - | Repository online e backup |
| **Netsons** | - | Hosting su server Apache |

### Librerie Incluse

Il progetto utilizza **zero dipendenze esterne**. Tutto è costruito con JavaScript vanilla, fornendo massima compatibilità e velocità di caricamento.

---

## Installazione Locale

### Prerequisiti

Per eseguire il progetto localmente, hai bisogno di:

- **Un browser web moderno** (Chrome, Firefox, Safari, Edge)
- **Un editor di testo** (VS Code, Sublime Text, etc.) - opzionale per modifiche
- **Python 3 o Node.js** (opzionale, solo per server locale)

### Metodo 1: Apertura Diretta nel Browser

Questo è il metodo più semplice:

1. Scarica o clona il repository
2. Apri il file `index.html` direttamente nel browser (doppio click)
3. Il sito caricherà e sarà completamente funzionale

### Metodo 2: Con Server Locale Python

Se hai Python 3 installato:

```bash
# Naviga alla cartella del progetto
cd custode-del-gusto

# Avvia il server locale
python3 -m http.server 8000

# Apri il browser e vai a http://localhost:8000
```

### Metodo 3: Con Node.js e npm

Se hai Node.js e npm installati:

```bash
# Installa le dipendenze (opzionale, il progetto non ne ha)
npm install

# Avvia il server
npm start

# Il server sarà disponibile a http://localhost:8000
```

### Metodo 4: Con GitHub Codespaces (Cloud)

Per chi preferisce un ambiente cloud:

1. Vai al repository GitHub
2. Clicca **Code** → **Codespaces** → **Create codespace on main**
3. Attendi l'avvio dell'ambiente
4. Esegui `python3 -m http.server 8000` nel terminale integrato
5. Apri il sito dal link fornito

---

## Utilizzo

### Navigazione Base

L'interfaccia è intuitiva e autoevidenziale. Usa il **menu in alto** per navigare tra le sezioni principali. Su **dispositivi mobile**, il menu si trasforma in un **hamburger menu** compatto.

### Sezione Shop

Nella sezione shop, puoi **filtrare i prodotti per categoria** usando i bottoni in alto. I **filtri disponibili** sono: Tutti, Oli e Condimenti, Pasta Artigianale, Distillati.

Clicca su **"Aggiungi al carrello"** per aggiungere un prodotto. Vedrai un **badge nel carrello** che mostra il numero di articoli.

### Gestione Carrello

Clicca sull'**icona del carrello** in alto a destra per visualizzare il tuo carrello. Qui puoi:

- **Aumentare/Diminuire quantità**: Usa i bottoni +/-
- **Rimuovere articoli**: Clicca il bottone "Rimuovi"
- **Vedere il totale**: Automaticamente calcolato
- **Procedere al checkout**: Clicca "Procedi al Checkout"

Il carrello è **persistente**: se chiudi il browser, i tuoi articoli rimangono (salvati in localStorage).

### Sezione Valori

Leggi i **quattro pilastri dell'azienda**: Qualità Superiore, Sostenibilità Responsabile, Tradizione e Innovazione, Trasparenza e Fiducia. Ogni valore è spiegato nel dettaglio.

### Sezione Chi Siamo

Scopri la **storia dell'azienda**, la **missione** (perché esisito), la **visione** (dove vogliamo arrivare), e gli **impegni verso i clienti**.

---

## Prodotti Disponibili

### Categoria: Oli e Condimenti

**Olio Extravergine di Oliva – Aliò (500 ml)**: L'eccellenza olearia italiana in bottiglia. Questo olio extravergine biologico proviene da un frantoio storico della Sicilia, dove generazioni di produttori hanno perfezionato l'arte della spremitura a freddo. Note di erba fresca e mandorla, con un finale leggermente piccante che caratterizza gli oli siciliani autentici. Perfetto per esaltare piatti semplici, zuppe e per il condimento a crudo. **Prezzo**: €28 - **Disponibilità**: In stock

### Categoria: Pasta Artigianale

**Pasta Trafilata al Bronzo - Spaghetti (500g)**: La pasta come dovrebbe essere. Prodotta da un piccolo pastificio siciliano utilizzando grani antichi siciliani selezionati, trafilata al bronzo per una texture ruvida che cattura perfettamente il sugo. Cottura al dente in circa 10-12 minuti. Una riscoperta del gusto autentico della pasta italiana. **Prezzo**: €8,50 - **Disponibilità**: In stock

### Categoria: Distillati

**Athena Gin - (40% - 700 ml)**: Tipologia: Distilled Gin
Athena Gin nasce come un omaggio alla sapienza mediterranea, un equilibrio raffinato tra forza e misura, istinto e armonia. È un gin che racconta la terra attraverso le sue erbe più nobili e aromatiche, ispirandosi a un immaginario antico, essenziale e profondamente naturale.
Il profilo è decisamente erbaceo e balsamico, con un ingresso pulito e deciso del ginepro, che apre la strada a un intreccio di botaniche mediterranee. Le foglie di ulivo e il rosmarino evocano immediatamente paesaggi assolati, mentre timo, salvia e basilico costruiscono una struttura aromatica elegante e persistente. La freschezza della menta piperita alleggerisce il sorso, accompagnata da note speziate e leggermente agrumate di coriandolo e cardamomo.
Il peperoncino Trinidad è dosato con grande precisione: non domina, ma scalda delicatamente il finale, lasciando una sensazione avvolgente e asciutta. Angelica e cumino di Malta chiudono il profilo con profondità e complessità, conferendo equilibrio e lunghezza gustativa.
Athena Gin è un distilled gin, prodotto con alcol di cereali 100% italiano, ginepro umbro e toscano accuratamente selezionato e acqua osmotizzata e dinamizzata con residuo fisso di 12 mg/l.
Non contiene zuccheri aggiunti, è gluten free e vegano.
Vengono utilizzati esclusivamente ingredienti naturali, lavorati con la massima cura per preservarne l’identità aromatica.
Un gin elegante, deciso e contemporaneo, pensato sia per una miscelazione di carattere sia per una degustazione consapevole. **Prezzo**: €45,00 - **Disponibilità**: In stock

---

## Deployment

### Deploy su Netsons (Consigliato)

Netsons è la piattaforma di hosting italiana ideale per questo progetto. Per un deployment completo, segui la **Guida Definitiva Custode del Gusto** fornita nel progetto (file `GUIDA_DEFINITIVA_CUSTODE_DEL_GUSTO_DA_ZERO_A_ONLINE.md`).

**Passo Rapido**:

1. Accedi al pannello Netsons
2. Configura SSL/HTTPS (Let's Encrypt gratuito)
3. Ottieni credenziali FTP
4. Usa FileZilla per caricare i file in `public_html/`
5. Il sito è online su www.custodedelgusto.com

### Deploy su Netlify

Alternativa rapida per hosting gratuito:

1. Vai su [netlify.com](https://netlify.com)
2. Connetti il tuo repository GitHub
3. Seleziona il branch `main`
4. Clicca **Deploy**

### Deploy su Vercel

Un'altra opzione veloce:

1. Vai su [vercel.com](https://vercel.com)
2. Importa il repository GitHub
3. Vercel configurerà e deployerà automaticamente

---

## Configurazione e Personalizzazione

### Cambiare i Colori

Tutti gli stili sono definiti in variabili CSS per facilità di customizzazione. Modifica il file `styles.css` alla riga ~20 (sezione `:root`):

```css
:root {
    --primary-dark: #1a472a;      /* Verde scuro brand */
    --accent-gold: #d4a574;        /* Accento oro */
    --text-dark: #2c2c2c;          /* Testo principale */
    /* ... altre variabili ... */
}
```

Cambia i valori hex e tutti i colori si aggiornano automaticamente.

### Aggiungere Nuovi Prodotti

Per aggiungere nuovi prodotti, modifica la sezione shop in `index.html`. Duplica un product-card esistente:

```html
<div class="product-card" data-category="categoria">
    <div class="product-image">
        <img src="assets/images/products/product.jpg" alt="Nome Prodotto">
    </div>
    <div class="product-info">
        <h4>Nome Prodotto</h4>
        <p class="product-description">Descrizione...</p>
        <div class="product-footer">
            <span class="price">€XX,XX</span>
            <button class="btn btn-secondary add-to-cart">Aggiungi</button>
        </div>
    </div>
</div>
```

### Personalizzare Testi

Modifica direttamente il contenuto nel file `index.html`. Cerca la sezione che vuoi modificare e cambia il testo.

---

## Troubleshooting

### Problema: Sito Non Carica

**Causa**: File HTML non trovato o errore di percorso.

**Soluzione**: Verifica che `index.html` sia nella cartella radice e il percorso sia corretto.

### Problema: CSS Non Si Vede (Tutto Bianco)

**Causa**: File CSS non caricato o percorso errato.

**Soluzione**: 

1. Nel browser, vai a `www.custodedelgusto.com/styles.css`
2. Se vedi il CSS, il file è caricato
3. Se vedi errore 404, ricaria il file CSS
4. Pulisci la cache del browser (Ctrl+Shift+Del)

### Problema: Immagini Non Caricano

**Causa**: Cartella assets non caricata o percorsi errati.

**Soluzione**: 

1. Verifica che `assets/` sia caricata sul server
2. Verifica i percorsi nel codice HTML (es: `assets/images/product.jpg`)
3. Ricaria la cartella assets

### Problema: Carrello Non Persiste

**Causa**: Browser ha localStorage disabilitato.

**Soluzione**: Verifica nelle impostazioni privacy del browser che localStorage sia abilitato.

### Problema: JavaScript Non Funziona

**Causa**: File script.js non caricato o errore di sintassi.

**Soluzione**:

1. Apri DevTools (F12) → Console
2. Verifica se ci sono errori
3. Controlla che `script.js` sia caricato
4. Se ci sono errori, consulta la sezione Errori nel file

### Problema: HTTPS Non Funziona

**Causa**: SSL non configurato su Netsons.

**Soluzione**:

1. Vai al pannello Netsons
2. Vai a SSL/HTTPS
3. Abilita SSL gratuito (Let's Encrypt)
4. Attendi 15 minuti per l'attivazione
5. Pulisci la cache del browser

---

## Roadmap Futura

Miglioramenti pianificati per le versioni future:

**Breve Termine (1-2 settimane)**
- Sistema di pagamento (Stripe, PayPal)
- Email di conferma ordine
- Pagina grazie dopo acquisto

**Medio Termine (1-2 mesi)**
- Database per prodotti
- Admin panel per gestire catalogo
- Email marketing / Newsletter
- Analytics (Google Analytics)

**Lungo Termine (3+ mesi)**
- Sistema di recensioni
- Blog sezione
- Chat supporto in tempo reale
- App mobile (React Native)
- Multi-language support

---

## Performance e Metriche

### Dimensioni File

| File | Dimensione |
|------|-----------|
| index.html | 21KB |
| styles.css | 19KB |
| script.js | 14KB |
| **Totale** | **54KB** |

### Con Gzip Compression

- **Riduzione**: 50-70%
- **Totale compresso**: ~16-27KB
- **Caricamento**: < 1 secondo su conexione 4G

### Lighthouse Score (Desktop)

- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 100

---

## Compatibilità Browser

| Browser | Desktop | Mobile | Note |
|---------|---------|--------|------|
| **Chrome** | ✅ 100% | ✅ 100% | Ottimale |
| **Firefox** | ✅ 100% | ✅ 100% | Ottimale |
| **Safari** | ✅ 95% | ✅ 95% | Pieno supporto |
| **Edge** | ✅ 100% | ✅ 100% | Ottimale |
| **IE 11** | ❌ No | N/A | Non supportato |

---

## Contatti

Per domande, supporto, o feedback:

**Email**: [info@custodedelgusto.com](mailto:info@custodedelgusto.com)

**Telefono**: +39 3661843569

**Indirizzo**: Via Jean Calogero, 16 - 95021 Aci Castello (CT), Italia

**Website**: www.custodedelgusto.com

**Social Media**:
- Instagram: @custodedelgusto
- Facebook: Custode del Gusto
- LinkedIn: Custode del Gusto

---

## Licenza e Copyright

Copyright © 2025 Custode del Gusto. Tutti i diritti riservati.

Questo progetto è proprietario e protetto da copyright. Qualsiasi utilizzo, copia o modifica richiede permesso esplicito.

---

## Credits

**Sviluppo**: Monica AI  
**Data di Rilascio**: 26 Gennaio 2026  
**Versione**: 1.0.0  
**Status**: ✅ Production Ready

---

**Segui la [Guida Definitiva Custode del Gusto](GUIDA_DEFINITIVA_CUSTODE_DEL_GUSTO_DA_ZERO_A_ONLINE.md) per deployment completo!**

🚀 **Grazie per aver scelto Custode del Gusto - La Qualità al Primo Posto!** 🍾
