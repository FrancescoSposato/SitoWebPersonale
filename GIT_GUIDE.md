# GIT_GUIDE.md

Guida rapida ai comandi Git usati per questo progetto: dalla creazione del repository locale, alla connessione con GitHub, alla gestione dei branch e delle pull request.

## Setup iniziale del repository locale

`git init` --> Crea un repository Git nella cartella corrente (non serve se, come in questo progetto, esiste già una cartella `.git`).

`git status` --> Mostra lo stato attuale: file modificati, nuovi, in staging o non tracciati. Da usare spesso, prima di ogni commit.

`git add -A` --> Mette in staging tutte le modifiche (nuovi file, modifiche, cancellazioni), rispettando `.gitignore`.

`git add <file>` --> Mette in staging solo il file specificato, invece di tutto il progetto.

## Primo commit e branch principali

`git checkout -b Main` --> Crea il branch `Main` e ci sposta sopra. Se non esiste ancora nessun commit, questo comando rinomina semplicemente il branch "non nato" di partenza (di solito `master`).

`git commit -m "messaggio"` --> Registra le modifiche in staging come nuovo commit, con un messaggio che descrive cosa è cambiato e perché.

`git checkout -b dev` --> Crea il branch `dev` a partire dal punto attuale (stesso contenuto di `Main`) e ci sposta sopra. È il branch di lavoro quotidiano.

## Connessione a GitHub

`git remote add origin <url>` --> Collega il repository locale a quello remoto su GitHub (l'URL si trova nella pagina del repo, es. `https://github.com/utente/repo.git`).

`git remote -v` --> Mostra i remote collegati al repository, utile per verificare che `origin` sia impostato correttamente.

`git push -u origin <branch>` --> Pubblica il branch sul remoto e lo imposta come branch di tracking. Dopo questo comando, per lo stesso branch basta `git push`.

`git push` --> Invia i commit locali del branch corrente al remoto (richiede che il tracking sia già impostato con `-u`).

`git pull` --> Scarica e unisce le modifiche presenti sul remoto nel branch locale corrente.

## Lavorare con più branch

`git branch` --> Elenca tutti i branch locali, evidenziando quello corrente.

`git checkout <branch>` --> Passa a un branch già esistente.

`git checkout -b <nuovo-branch>` --> Crea un nuovo branch a partire dal branch corrente e ci si sposta sopra (usare per ogni nuova funzionalità, es. `feature/footer`, `feature/homepage`).

`git merge <branch>` --> Unisce le modifiche del branch indicato nel branch corrente (es. da `Main` lanciare `git merge dev` per portare il lavoro di `dev` in `Main`).

`git branch -d <branch>` --> Elimina un branch locale già unito altrove (usare con attenzione, solo su branch di cui non serve più la storia separata).

## Pull request da terminale (richiede GitHub CLI `gh`)

`gh auth login` --> Autentica la CLI di GitHub con il proprio account (da fare una sola volta).

`gh pr create --base Main --head dev --title "titolo" --body "descrizione"` --> Crea una pull request per unire `dev` in `Main`, con titolo e descrizione delle modifiche.

`gh pr create --web` --> Come sopra, ma apre direttamente l'interfaccia di GitHub nel browser per compilare la PR.

> Nota: una pull request ha senso solo quando il branch di origine (`dev`) ha commit in più rispetto al branch di destinazione (`Main`). Se i due branch sono allineati, non c'è nulla da revisionare.
