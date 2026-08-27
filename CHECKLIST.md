# CHECKLIST.md

Checklist di sviluppo del sito/curriculum personale. Documento vivo: verrà aggiornato man mano che il progetto procede.

> **Convenzione di naming**: nomi di file, componenti, route e variabili sempre in inglese. Solo il testo mostrato all'utente (contenuti visualizzati nell'app) è in italiano.

## Setup progetto

- [x] Progetto Expo creato
- [x] Expo Router configurato (vedi `SETTING.md`)
- [x] Supporto web funzionante (`expo start --web`)
- [x] Struttura cartelle definitiva sotto `app/` (routing)
- [x] Scelta libreria styling → `StyleSheet` nativo di React Native
- [x] Palette colori → definita in `constants/colors.js` (light/dark), da ricerca su fiducia/professionalità
- [x] Font del sito → Fraunces, Public Sans, IBM Plex Mono caricati via `@expo-google-fonts/*` in `app/_layout.js`, token in `constants/fonts.js`

## Homepage (`app/index.js`)

- [x] Sezione di presentazione (nome, ruolo, breve intro)
- [x] Foto o elemento grafico
- [x] Call to action verso curriculum / contatti
- [x] Link di navigazione verso le altre pagine

## Pagina Curriculum

- [x] Route dedicata (es. `app/curriculum.js`)
- [x] Esperienze lavorative
- [x] Percorso formativo
- [x] Competenze tecniche
- [x] Eventuale download CV in PDF

## Pagina Progetti

- [x] Route dedicata (es. `app/projects.js` o `app/projects/index.js`)
- [x] Decisione: schede con link a repo/demo esterni (vedi nota sotto)
- [x] Card progetto: titolo, descrizione, stack tecnologico, link demo, link repo
- [ ] Eventuali immagini/screenshot dei progetti

> Nota: preferibile tenere i progetti come schede con link esterni (demo + GitHub) invece di integrarli direttamente nel sito, per mantenerlo leggero e i progetti deployabili in autonomia.
> Stato screenshot: presenti per "Questo sito portfolio" e "Project GoCare"; ancora mancanti per "QuantoSpendo" e "MyITSdiet" (riquadro immagine vuoto).

## Pagine progetto in dettaglio

- [ ] `app/projects/this.js` — dettagli "Questo sito portfolio" (route creata, ScrollView vuoto)
- [ ] `app/projects/gocare.js` — dettagli "Project GoCare" (route creata, ScrollView vuoto)
- [ ] `app/projects/quantospendo.js` — dettagli "QuantoSpendo" (file vuoto, da scrivere da zero)
- [ ] `app/projects/itsdiet.js` — dettagli "MyITSdiet" (file vuoto, da scrivere da zero)

> Nota: pagina statica per ogni progetto invece di una route dinamica `[slug].js`, per poter avere contenuti liberi (immagini, testo lungo) diversi da progetto a progetto.

## Pagina Contatti

- [x] Route dedicata (es. `app/contacts.js`)
- [x] Email / social / LinkedIn

> URL LinkedIn reale impostato (`linkedin.com/in/francesco-sposato-318992431`, sia in `app/contacts.js` che in `Components/Footer.jsx`). Resta da confermare solo l'email (`sposato.fs@outlook.it` presa dal CV — verificare che sia quella giusta da mostrare pubblicamente).

## Navigazione generale

- [x] Layout comune (header/menu) → `components/Header.jsx`, collegato in `app/_layout.js`
- [ ] Navigazione responsive (mobile + web) → vedi "Rifinitura multipiattaforma"

## Rifinitura multipiattaforma (da fare DOPO aver completato la pagina web)

- [ ] Gestione larghezze strette con `useWindowDimensions` (Header e altri componenti)
- [ ] Verifica visualizzazione su Android (Expo Go su dispositivo reale)
- [ ] Eventuali aggiustamenti di layout specifici per piattaforma

## Deploy

- [ ] Scelta hosting per la versione web (es. Vercel, Netlify, EAS Hosting)
- [ ] Dominio personalizzato (se previsto)
- [ ] Build e pubblicazione
