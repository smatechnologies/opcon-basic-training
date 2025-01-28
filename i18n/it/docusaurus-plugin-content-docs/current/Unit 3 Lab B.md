---
sidebar_label: 'Unità 3 Lab B'
hide_title: 'false'
---

## Unità 3 Lab B

##### Obiettivo:

Congo Online Retail deve assicurarsi che tutti gli ordini di spedizione siano elaborati e pronti per la partenza prima delle 5 del mattino (dal lunedì alla domenica) utilizzando un programma denominato **CONGO RETAIL ORDER PROCESSING**

**Jobs**:

*	Legos - Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” -t90```
*	Nerf - Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” -t120```
*	Smartphones - Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” -t15```
*	XBOX - Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” -t350```
*	Levis - Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” -t45```
*	Nike - Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” -t75```

**_Se uno di questi processi non è stato completato entro le 5 del mattino o se impiegano più di 5 minuti, è necessario essere avvisati._** 

**Notifiche**:

* Late to Start
* Late to Finish
* Exceeded Max Runtime

Mettere a piano in stato rilasciato per il piano di Oggi 

Visualizzare i risultati nella vista Matrix View o nel Solution Manager

Aprire Thunderbird per controllare le notifiche

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Istruzioni per il laboratorio**:

* Informazioni sugli Schedule
    * Chiamare lo Schedule **Congo Retail Order Processing**
    * Dal Lunedì alla Domenica
    * **Auto Build** ```7``` giorni in avanti per ```1``` day
    * **Auto Delete** ```7``` giorni

* **Informazioni sui Job**

    * Legos
        * Command Line: 
         ```“C:\scripts\ShipmentProcessorToys.EXE” -t90```
        * Start Offset: ```03:00```
        * Absolute Late to Start Offset: ```01:55 (4:55 am)```
        * Max Run Time: ```5```
        * Aggiungere la Documentazione
        * Aggiungere il Tag al Job come ```Toys```
    * Nerf
        * Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” -t120```
        * Start Offset: ```04:00```
        * Absolute Late to Finish Offset: ```01:00 (5:00 am)```
        * Max Run Time: ```5```
        * Aggiungere la Documentazione
        * Aggiungere il Tag al Job come ```Toys```
    * Smartphones
        * Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” -t15```
        * Start Offset: ``04:30``
        * Absolute Late to Finish Offset: ```00:30 (5:00 am)```
        * Max Run Time: ```5```
        * Aggiungere la Documentazione
        * Aggiungere il Tag al Job come ```Electronics```
    * XBOX
        * Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” -t350```
        * Start Offset: ```02:30```
        * Absolute Late to Finish Offset: ```02:30 (5:00 am)```
        * Max Run Time: ```5```
        * Aggiungere la Documentazione 
        * Aggiungere il Tag al Job come ```Electronics```
    * Levis
        * Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” -t45```
        * Start Offset: ```03:10```
        * Absolute Late to Start Offset: ```01:45 (4:55 am)```
        * Max Run Time: ```5```
        * Aggiungere la Documentazione
        * Aggiungere il Tag al Job come ```Clothing```
    * Nike
        * Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” -t75```
        * Start Offset: ```03:45```
        * Absolute Late to Finish Offset: ```01:15 (5:00 am)```
        * Max Run Time: ```5```
        * Aggiungere la Documentazione
        * Aggiungere il Tag al Job come ```Clothing```

* Notifiche
    * Impostare le notifiche e-mail in Notification Manager utilizzando le proprietà globali per trasmettere il nome dello Schedule e del Job nell'oggetto quando sono state soddisfatte le seguenti condizioni::
        * Late to Start
        * Late to Finish
        * Exceeded Max Runtime

* Build
    * Mettere sul piano di oggi in stato Released e controllare il risultato utilizzando il Solution Manager
    * Aprire Thunderbird e controllare la casella di posta in ingresso

</details>