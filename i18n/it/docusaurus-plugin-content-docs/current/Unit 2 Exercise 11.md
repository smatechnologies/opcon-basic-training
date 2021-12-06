---
sidebar_label: 'Unità 2 Esercizio 11'
hide_title: 'false'
---

## Esercizio 11 - Frequenze Multiple

##### Obiettivo: 

Creare un nuovo Schedule con nome **MULTIPLE AND NEGATIVE FREQUENCIES** per eseguire dal Lunedì al Venerdì. Aggiungere un Job Nullo chiamato **MULTIPLE FREQUENCIES**.

Creare una Frequenza per eseguire il **15 esimo giorno del mese** ed una seconda Frequenza per eseguire nell'**ultimo giorno lavorativo del mese**.

Il Job dovrebbe eseguito alle ```20:00``` quando non è l'ultimo giorno del mese e alle ```18:00``` l'ultimo giorno del mese.

All'interno dello stesso Schedule, creare un nuovo Job denominato **NEGATIVE FREQUENCIES**. Il Job dovrebbe avere frequenze che gli consentano di essere eseguito dal lunedì al venerdì, a meno che non sia un **giorno festivo** o **l'ultimo giorno del mese**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. **Multiple Frequencies**
* Creare un nuovo Schedule.
* Aggiungi un Job nullo e imposta le frequenze per consentire l'esecuzione di un Job il 15 del mese (giorno lavorativo precedente) e l'ultimo giorno lavorativo del mese.
    * Schedule - 5 Day Work Week
    * Il lavoro viene eseguito alle ```20:00``` quando non è l'ultimo giorno del mese e alle ```18:00``` quando è l'ultimo giorno lavorativo del mese.
* Utilizzare il pulsante Forecast All per visualizzare entrambe le Frequenze.
    * Il primo elencato sarà Verde e il secondo sarà Giallo.
2. **Frequenze Negative**
* In un nuovo Job Nullo (stesso Schedule), impostare le frequenze che consentono al lavoro di essere eseguito tutti i giorni del mese, dal lunedì al venerdì, a meno che non sia un giorno festivo o l'ultimo giorno del mese.
* Utilizzare il pulsante Forecast All per visualizzare entrambe le Frequenze.
  
  :::note Nota
  _Frequenza negativa apparirà viola_
  :::

</details>