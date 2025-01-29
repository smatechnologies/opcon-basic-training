---
sidebar_label: 'Unità 1 Esercizio 2'
hide_title: 'false'
---

## Esercizio 2: eseguire un Job Batch manualmente

##### Obiettivo:

Eseguire due semplice Jobs Batch from dalla finestra dei Commandi di Windows (CMD):

* Job 1: Digitare ```timeout /t 15``` and premere invio.
* Job 2: Digitare ```cd "C:\Program Files\OpConxps\MSLSAM"``` e premere invio. Poi, Digitare ```"genericp.exe -t10 -e0"``` e premere invio.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

Click qui per Istruzioni passo passo

1.  Premere il pulsante Start di Windows, digitare ```cmd```, e premere il tasto INVIO.
2. Dalla finestra dei comandi, digitare: ```timeout /t 15```
3. premere il tasto INVIO.
  * Potrai vedere il comando timeout eseguito contare all'indietro per 15 secondi Nota: Hai eseguito questo programma con l'utente di Windows con cui sei loggato ovvero ```SMATRAINING\SMAUSER```. Hai eseguito il programma nella Macchina su cui hai fatto accesso ovvero ```SMATRAINING```.

4. Dal finestra dei Comandi digitare:
```
cd "C:\Program Files\OpConxps\MSLSAM"
```
5. Premere il taso INVIO.
6. Continuare a digitare nella finestra dei comandi:
```
genericp.exe -t10 -e0
```
7. premere il tasto INVIO.
8. Il programma genericp.exe verrà eseguito per 10 secondi e poi terminerà.

</details>