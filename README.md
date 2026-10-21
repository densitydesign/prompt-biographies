# Prompt Biographies

Sito statico (solo HTML e CSS, nessun programma da installare) per l'archivio
"Prompt biographies". Per ora contiene una sola pagina di biografia
(**Make it more**) e una homepage provvisoria che le elenca.

## Struttura della cartella

```
prompt-biographies/
├── index.html              → homepage (titolo inclinato + griglia di card)
├── about.html              → pagina About
├── make-it-more.html       → pagina della biografia "Make it more"
├── CNAME                   → dominio personalizzato (promptbiographies.densitydesign.org)
├── css/
│   ├── style.css           → stile condiviso da tutte le pagine (griglia, font, colori,
│   │                         navbar, footer, menù a tutto schermo, pagina about)
│   └── home.css            → stile solo della homepage
├── js/
│   └── site.js             → apertura/chiusura del menù "prompts" (tutte le pagine)
├── assets/
│   └── images/
│       ├── site/           → loghi del footer (condivisi)
│       ├── home/           → immagini della homepage (sfondo card)
│       └── make-it-more/   → immagini di questa pagina
│           └── link-thumbnails/  → miniature che compaiono in hover sui link
└── README.md                → questo file
```

**Navbar, menù e footer** sono gli stessi in ogni pagina: il codice HTML è copiato
in `index.html`, `about.html` e `make-it-more.html` (blocchi `<header>`,
`<div class="menu-overlay">` e `<footer>`). Se cambi una voce (es. aggiungi un
prompt al menù), ricordati di modificarla in tutte le pagine.

**Come aggiungere una nuova biografia in futuro:**

1. Duplica `make-it-more.html`, rinominalo (es. `nome-del-prompt.html`) e
   sostituisci testo e immagini.
2. Crea una cartella `assets/images/nome-del-prompt/` per le sue immagini.
3. In `index.html` trasforma una card segnaposto in link (c'è un commento nel file
   che spiega come) e in ogni pagina trasforma il <span> del suo titolo, nel menù
   "prompts", in un <a href="...">.

Non serve nessun programma speciale: puoi aprire i file `.html` con un editor
di testo qualsiasi (es. VS Code, TextEdit) e vederli nel browser trascinandoli
nella finestra di Chrome/Safari.

## Nota sul font del titolo

Il titolo "MAKE IT MORE" usa **Clarendon Text Pro**, caricato tramite il tuo
account **Adobe Fonts** (Typekit). Il collegamento è già impostato in due
punti:

1. Nell'`<head>` di `index.html` e `make-it-more.html` c'è il tag
   `<link rel="stylesheet" href="https://use.typekit.net/pht7ogj.css">`.
2. In `css/style.css`, le variabili `--font-title`, `--font-title-weight` e
   `--font-title-style` (in cima al file) dicono al sito quale famiglia,
   peso e stile usare.

Nel progetto Adobe Fonts al momento hai aggiunto solo il peso **Bold
Corsivo**. Se preferisci il titolo dritto (non corsivo) come nel design
originale, vai su fonts.adobe.com → il tuo Web Project → aggiungi anche il
peso **Regular**, poi dimmelo: cambio `--font-title-weight` e
`--font-title-style` di conseguenza, senza toccare altro.

Nota: essendo un font caricato da Adobe Fonts (non un file scaricato e
incluso nella cartella), serve una connessione internet per vederlo — se il
tuo abbonamento Adobe/Creative Cloud dovesse scadere, il titolo tornerebbe
al font di sistema di riserva (Georgia).

## Didascalie da completare

Nel file Figma alcune didascalie erano ancora segnaposto (es. "Caption
schema", "Caption esempio", "Caption per schema", "Caption immagine"). Le ho
riportate così come sono nel sito, cercale in `make-it-more.html` (classe
`diagram-caption` o `figure-caption`) e sostituiscile con il testo
definitivo quando lo avrai deciso.

---

## Come caricare il sito su GitHub Pages

Questa è la parte per pubblicare il sito online. Non serve installare nulla
sul computer: puoi fare tutto dal sito github.com.

### 1. Crea un account e un repository

1. Vai su [github.com](https://github.com) e crea un account gratuito (se non
   ce l'hai già).
2. Clicca sul pulsante **"+"** in alto a destra → **"New repository"**.
3. Come nome del repository scrivi `prompt-biographies`.
4. Lascialo **Public** (deve essere pubblico perché GitHub Pages gratuito
   funziona solo con repository pubblici).
5. Non aggiungere README, .gitignore o licenza (li abbiamo già).
6. Clicca **"Create repository"**.

### 2. Carica i file

1. Nella pagina del repository appena creato, clicca su **"uploading an
   existing file"** (o "Add file" → "Upload files").
2. Apri sul tuo computer la cartella `prompt-biographies` che ti ho
   preparato, seleziona **tutto il contenuto** (i file e le cartelle
   `index.html`, `make-it-more.html`, `css`, `assets`, `README.md`) e
   trascinali nella pagina di GitHub.
   - Importante: trascina il *contenuto* della cartella, non la cartella
     stessa, altrimenti i link tra le pagine non funzionano più.
3. In basso scrivi un messaggio tipo "primo caricamento del sito" e clicca
   **"Commit changes"**.

### 3. Attiva GitHub Pages

1. Nel repository, vai su **Settings** (in alto).
2. Nel menu a sinistra clicca su **Pages**.
3. Sotto "Build and deployment" → "Branch", scegli **main** e la cartella
   **/ (root)**, poi clicca **Save**.
4. Aspetta un minuto o due: GitHub ti mostrerà un link tipo
   `https://tuonomeutente.github.io/prompt-biographies/`
5. Apri quel link: dovresti vedere la homepage del sito. La pagina della
   biografia sarà su
   `https://tuonomeutente.github.io/prompt-biographies/make-it-more.html`

### 4. Aggiornamenti futuri

Ogni volta che modifichi un file (o ne aggiungi uno nuovo), torna sulla
pagina del repository su GitHub e usa di nuovo "Add file" → "Upload files"
per caricare la versione aggiornata: GitHub Pages si aggiorna da solo in
un minuto o due.

Se preferisci un flusso di lavoro più comodo (senza dover ricaricare i file
a mano ogni volta), in futuro possiamo impostare **GitHub Desktop**, un
programma con un'interfaccia semplice che sincronizza automaticamente la
cartella sul tuo computer con GitHub — fammi sapere se vuoi che ti guidi
anche in quello.
