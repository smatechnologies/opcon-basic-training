---
sidebar_label: 'Unità 3 Lab C'
hide_title: 'false'
---

## Unità 3 Lab C

##### Obiettivo:

Attraverso uno Schedule chiamato **CONGO ACCOUNTING FOLDERS**, il Team Contabilità necessita di una cartella giornaliera (lunedì-venerdì) creata nella cartella ```C:\Accounting``` per ciascuno dei seguenti prodotti:

* Legos
* Nerf
* Smartphones
* Xbox
* Levis
* Nike

Il seguente script dovrebbe essere usato per creare ogni cartella:

```
“C:\scripts\Create_Folder.cmd” “C:\Accounting\yyyy-mm-dd-Legos”
```
dove "Lego" è il prodotto.

Creare tre proprietà globali che verranno utilizzate al posto dei seguenti oggetti sulla riga di comando:

*	```C:\scripts```
*	```C:\Accounting```
*	```yyyy-mm-dd```

* Ciò richiederà una proprietà globale (System Global Property) ```[[$SCHEDULE DATE]]``` nel formato corretto

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabC.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Istruzioni per il laboratorio**:  

* Creare uno Schedule **Congo Accounting Folders**
* **Sabato** e **Domenica **sono **giorni non lavorativi**
* **Impostare l'Auto-build** per lo Schedule a ```7``` giorni in anticipo per ```1``` giorno
* **Impostare l'Auto-delete** per lo Schedule per ```7``` giorni
* Aggiungere la **Documentation** per lo Schedule
* Creare un **Job Windows** per ciascuno dei prodotti nell'introduzione
* Assegnare a ciascun **Job** il nome del suo **prodotto**
* Questo Job deve essere eseguito con l'utenza ```SMATRAINING\SMAUSER```
* Questo Job deve essere eseguito sulla macchina ```SMATRAINING```
( Usare la seguente **riga di comando** sostituendo i tre oggetti specificati sopra con le relative **Global Properties**: 

```
“C:\scripts\Create_Folder.cmd” “C:\Accounting\yyyy-mm-dd-Legos”
```  

:::note Nota
_Ricorda che ogni Job è assegnato a un prodotto e il nome della cartella deve corrispondere al prodotto_
:::

* I Jobs devono essere eseguiti **Dal Lunedì al Venerdì**
* I Jobs devono essere **Taggati** coerentemente con la linea di prodotti (**Toys**, **Electronics**, and **Clothing**)
* I Jobs devono essere eseguiti nell'ordine seguente con ogni Job che richiede un altro Job prima di esso
    *	Legos
    *	Nerf
    *	Smartphones
    *	Xbox
    *	Levis
    *	Nike
* Mettere a piano (Build) lo Schedule per oggi e domani (in stato Rilacito)
* Utilizzare la vista Operation di Solution Manager per verificare se i Job sono stati completati correttamente
* Dopo che i Job sono stati tutti eseguiti e terminati controllare che **tutte le cartelle** siano state create

</details>