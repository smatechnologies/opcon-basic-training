---
sidebar_label: 'Unità 1 Lab'
hide_title: 'false'
---

## Unità 1 Lab

##### Obiettivo:

Congo Online Retail Inc. ha bisogno di eseguire un programma chiamato **CONGO INVENTORY REPORTS** che creerà rapporti di inventario separati per sei prodotti ogni giorno lavorativo. Questi rapporti devono essere eseguiti **in sequenza** ed essere **Etichettati (Tagged)** nelle seguenti categorie:

**Toys**

* Legos
* Nerf

**Electronics**

* Smartphones
* XBOX

**Clothing**

* Levis
* Nike

Tutti i sei Jobs di tipo ```WINDOWS``` devono essere eseguiti **dal Lunedì al Venerdì** e non può iniziare fino alle ```8:00 AM```.

Il programma che deve essere eseguito nella linea di comando per l'esecuzione del Job è:

```
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t15 -e0
```

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1LAB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per maggiori informazioni sul Laboratorio</summary>

#### Istruzioni:

* Creare uno Schedule chiamto Congo Inventory Reports
* Il sabato e la domenica sono giorni non lavorativi
* Impostare lo Schedule in modalità Auto-build a partire da ```7 giorni``` in avanti per ```1 giorno```
* Auto-delete dello Schedule per ```7 giorni```
* Aggiungere la documentazione allo Schedule
* Creare un **Job Windows** per ciascuno dei prodotti descritti nella parte introduttiva
* Dare ad ogni lavoro il nome del suo prodotto
* Questo job deve essere eseguito con l'utenza ```SMATRAINING\SMAUSER```
* Questo job deve essere eseguito sula macchina ```SMATRAINING```
* Usare la seguente riga di comando:
```
“C:\Program Files\OpConxps\MSLSAM\genericp.exe” -t15 -e0
```
* I jobs devono essere eseguiti dal ```lunedì al venerdì```
* Utilizzare la Frequenza esistente: ```Mon-FriOnDate```
* Fare click sul pulsante Forecast per controllare che la Frequenza corrisponda ai requisiti
* Aggiungere la Documentazione a ciascun Job. Ad esempio: Questo Job genera il report dell'inventario per il numero di Lego in magazzino
* I lavori devono essere eseguiti nel seguente ordine con ogni Job che richiede il lavoro precedente:
  * Legos
  * Nerf
  * Smartphones
  * XBOX
  * Levis
  * Nike
* I lavori non possono iniziare prima delle ```8:00 AM```
* **Etichettare (Tag)** i lavori secondo il tipo di prodotto (**Toys**, **Electronics** or **Clothing**)
* Effettuare la messa a piano **(Build)** dello Schedule in stato rilasciato per oggi e domani
* Apri la vista **Matrix** or **List** nel menù operazione

Al completamento i Jobs saranno stati eseguiti nel seguente ordine:

<a href="imgbasic/Picture92.png" target="_blank"><img src="imgbasic/Picture92.png" width="250"></img></a>  

###### (Click sull'Immagine per Ingrandire)

</details>