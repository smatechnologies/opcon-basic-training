---
sidebar_label: 'Unità 2 Lab A'
hide_title: 'false'
---

## Unità 2 Lab A

##### Obiettivo:

Congo Online Retail Inc. deve pagare i propri dipendenti a intervalli diversi in base al reparto. Questo viene fatto attraverso uno Schedule chiamato **CONGO PAYROLL PAYMENTS**.

La settimana lavorativa del reparto paghe di Congo Online Retail Inc va dal lunedì al venerdì e utilizza il **Master Holiday Calendar** creato durante gli esercizi dell'unità 2.

Ogni Dipartimento richiede specifici intervalli di programmazione come indicato::

**Toys – Legos and Nerf**

* Ogni 14 giorni a partire dal 7 gennaio di quest'anno
    * Il giorno lavorativo precedente, se la data cade in un giorno non lavorativo

**Electronics – Smartphones and XBOX**

* Il 15 del Mese
    * Il giorno lavorativo precedente, se la data cade in un giorno non lavorativo
* Ultimo giorno lavorativo del mese
    * Il giorno lavorativo precedente, se la data cade in un giorno non lavorativo
* Un libro paga di fine anno che include sia il libro paga mensile che i bonus viene eseguito al posto del libro paga di fine mese l'ultimo giorno lavorativo dell'anno 

**Clothing – Levis and Nike**  

* Ogni Venerdì
    * Il giorno lavorativo successivo, se la data cade in un giorno non lavorativo
* Dopo che ogni importante traguardo di vendita è stato raggiunto (su richiesta)

Le frequenze richieste devono essere eseguite all'interno di Null Jobs nello Schedule **CONGO PAYROLL PAYMENTS**.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per maggiori informazioni sul Laboratorio</summary>

**Istruzioni di laboratorio**:  

:::note Nota
UTILIZZARE NULL JOB TYPE PER TUTTI I LAVORI IN QUESTO LAB
:::

* Creare uno Schedule chiamato **Congo Payroll Payments**
* Dal lunedì al venerdì sono giorni lavorativi
* Viene utilizzato il Calendario **Master Holiday Calendar**
* Build degli Schedule ```7``` giorni in anticipo per ```1``` giorno
* Cancellazione automatica degli Schedule dopo ```7``` giorni
* Aggiungere la Documentazione agli Schedule

* Verranno creati quattro Job Nulli:
    * **Toys** avranno bisongno **di un Job** con **una Frequenza**
    * **Electronics** avrà bisogno di **due Jobs**
    * **Job 1** - **tre Frequenze**
    * **Job 2** - **una Frequenza**
    * **Clothing** avrà bisogno di **un Job** con *due Frequenze*
* Impostare i Tag a tutti i Job in base al relativo prodotto (**Toys**, **Electronics** and **Clothing**)

Al termine, il risultato di **“Forecast All”** dovrà avere il seguente aspetto:

#### Toys

<a href="imgbasic/268.png" target="_blank"><img src="imgbasic/268.png" width="300"></img></a>


#### Electronics - Not End of Year

<a href="imgbasic/269.png" target="_blank"><img src="imgbasic/269.png" width="300"></img></a>


#### Electronics - End of Year

<a href="imgbasic/270.png" target="_blank"><img src="imgbasic/270.png" width="300"></img></a>


#### Clothing

<a href="imgbasic/271.png" target="_blank"><img src="imgbasic/271.png" width="300"></img></a>  

<a href="imgbasic/272.png" target="_blank"><img src="imgbasic/272.png" width="250"></img></a>

###### (Click sulla Immagine per ingrandire)

</details>