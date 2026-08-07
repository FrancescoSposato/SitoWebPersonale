# CHECKLIST.md

Checklist di sviluppo del sito/curriculum personale. Documento vivo: verrà aggiornato man mano che il progetto procede.

> **Convenzione di naming**: nomi di file, componenti, route e variabili sempre in inglese. Solo il testo mostrato all'utente (contenuti visualizzati nell'app) è in italiano.

## Setup progetto

- [x] Progetto Expo creato
- [x] Expo Router configurato (vedi `SETTING.md`)
- [x] Supporto web funzionante (`expo start --web`)
- [ ] Struttura cartelle definitiva sotto `app/` (routing)
- [x] Scelta libreria styling → `StyleSheet` nativo di React Native
- [x] Palette colori → definita in `constants/colors.js` (light/dark), da ricerca su fiducia/professionalità
- [x] Font del sito → Fraunces, Public Sans, IBM Plex Mono caricati via `@expo-google-fonts/*` in `app/_layout.js`, token in `constants/fonts.js`

## Homepage (`app/index.js`)

- [ ] Sezione di presentazione (nome, ruolo, breve intro)
- [ ] Foto o elemento grafico
- [ ] Call to action verso curriculum / contatti
- [ ] Link di navigazione verso le altre pagine

## Pagina Curriculum

- [ ] Route dedicata (es. `app/curriculum.js`)
- [ ] Esperienze lavorative
- [ ] Percorso formativo
- [ ] Competenze tecniche
- [ ] Eventuale download CV in PDF

## Pagina Progetti

- [ ] Route dedicata (es. `app/projects.js` o `app/projects/index.js`)
- [ ] Decisione: schede con link a repo/demo esterni (vedi nota sotto)
- [ ] Card progetto: titolo, descrizione, stack tecnologico, link demo, link repo
- [ ] Eventuali immagini/screenshot dei progetti

> Nota: preferibile tenere i progetti come schede con link esterni (demo + GitHub) invece di integrarli direttamente nel sito, per mantenerlo leggero e i progetti deployabili in autonomia.

## Pagina Contatti (da valutare)

- [ ] Route dedicata (es. `app/contacts.js`)
- [ ] Email / social / LinkedIn
- [ ] Eventuale form di contatto

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
