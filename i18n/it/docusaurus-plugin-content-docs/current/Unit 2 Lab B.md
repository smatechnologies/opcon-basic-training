---
sidebar_label: 'Unità 2 Lab B'
hide_title: 'false'
---

## Unità 2 Lab B

##### Obiettivo:

Congo Online Retail Inc. deve eseguire controlli giornalieri dell'inventario (7 giorni alla settimana) con uno Schedule denominato **CONGO INVENTORY MANAGEMENT**.

È necessario eseguire un Job specifico per ogni reparto di prodotto e ogni Job di prodotto deve essere etichettato (**Tag**) per reparto.
  
*	**Toys** – ```"C:\scripts\CheckInvToys.EXE"```
  *	Legos
  *	Nerf
*	**Electronics** – ```"C:\scripts\CheckInvElectronics.EXE"```
  *	Smartphones
  *	XBOX
*	**Clothing** – ```"C:\scripts\CheckInvClothing.EXE"```
  *	Levis
  *	Nike

Ad ogni prodotto viene assegnato un **Product ID Number**. Questo ID Number verrà utilizzato dal programma come argomento ```-t``` per intervallo di tempo per ogni Job :

  * Legos - ```11```
  * Nerf - ```12```
  * Smartphones - ```21```
  * XBOX - ```22```
  * Levis - ```31```
  * Nike - ```32```
  * Inventory Report - ```100```

I Jobs devono essere eseguiti ogni ```30 minuti``` fino alle ```11:45 PM```.

I programmi leggono il database e generano richieste d'ordine per l'acquisto di nuovi articoli. Alla fine della giornata, viene creato un **Inventory Purchase Report** con i risultati. Questo deve essere creato come Job ```UNIX``` con la seguente **Start Image**:

```/usr/local/labfiles/CheckInvPurRpt –t100```  

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per maggiori informazioni sul Laboratorio</summary>

**Istruzioni di Laboratorio**:

* Creare uno Schedule chiamato **Congo Inventory Management**
* **Monday-Sunday** sono i giorni laborativi
* Impostare l'Auto-build per lo Schedule ```7``` giorni in anticipo per ```1``` giorno
* Impostare l'Auto-delete per lo Schedule per ```7``` days
* Aggiungi **documentazione** per lo Schedule
* Crea un Job ```Windows``` per ciascuno dei prodotti nell'introduzione
* Assegna a ciascun Job lo stesso nome del suo prodotto
* Il Job deve essere eseguito con l'utente ```SMATRAINING\SMAUSER```
* Il Job deve essere eseguito sulla macchina ```SMATRAINING```
* Richiamare i programmi sulla riga di comando. Per esempio::
  
  ```   
  “C:\scripts\CheckInvToys.EXE” -t11  
  ```

* Questi Jobs devono essere eseguiti dal lunedì alla domenica
* Questi Jobs devono essere eseguiti ```ogni 30 minuti``` quando sono finiti ok
* L'ultimo tempo di esecuzione dei 6 Jobs è ```11:45 PM```
* Aggiungi la documentazione per ogni Job. Esempio: Nerf
* Tagga questi 6 Jobs in base al tipo di prodotto (**Toys**, **Electronics**, or **Clothing**)
* Crea un Job ```Unix``` chiamato **Inventory Purchase Report**
* Questo Job deve essere eseguito sulla macchina ```SUSEVM``` machine
* Questo Job deve essere eseguito come Group id/User ID ```0/0```
* Richiamare i programmi sulla riga di comando. Per esempio:

  ```  
  /usr/local/labfiles/CheckInvPurRpt –t100  
  ```  
  
* Questo Jobs deve essere eseguito dal lunedì alla domenica
* Il report di acquisto dell'inventario richiede i 6 processi di Windows e deve essere eseguito dopo che tutte le esecuzioni sono state completate
* Effettuare le **Build** dello Schedule per oggi e domani

:::note Nota
_Al termine, visualizzare i risultati nel **Workflow designer**. Quindi effettuare la Build dello Schedule in stato rilasciato per oggi e controllare l'esecuzione in **Solution Manager**_
:::

<a href="imgbasic/306.png" target="_blank"><img src="imgbasic/306.png" width="500"></img></a>

</details>