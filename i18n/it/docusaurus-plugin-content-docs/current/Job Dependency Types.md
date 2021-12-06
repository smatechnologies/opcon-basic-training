---
sidebar_label: 'Tipi di dipendenze fra Job'
hide_title: 'false'
---

## Tipi di dipendenze fra Job

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypes.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Requires** – (Richiede) Il Job selezionato deve esistere ed essere in stato di completato prima che Job dipendente venga eseguito (l'impostazione predefinita richiede il completamento con successo)
* **After** – Il Job selezionato deve essere in stato completato prima che un Job dipendente venga eseguito (l'impostazione predefinita richiede il completamento con successo) **SE ESISTE** sul piano
* **Excludes** – Il Job selezionato sarà rimosso dallo Schedule a piano nei giorni in cui il Job dipendente è programmato
* **Conflict** – Il Job dipendente non si avvia se il Job selezionato è attualmente in esecuzione

<a href="imgbasic/214.png" target="_blank"><img src="imgbasic/214.png" width="500"></img></a>

### Tipi di dipendenze fra Job - **After**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesAfter.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Utile per Job che sono occasionalmente parte del flusso di lavoro

Esempio: 

* **Job 1** e **Job 3** hanno una frequenza quotidiana, **Job 2** è a piano solo il Venerdì
* **Job 3** ha una dipendenza **After** con il **Job 2** perché è presente solo occasionalmente
Conflict
* **Job 3 **necessita anche di una dipendenza da **Job 1** per assicurarsi che il **Job 3** venga eseguito dopo il **Job 1** quando il **Job 2** non esiste

<a href="imgbasic/215.png" target="_blank"><img src="imgbasic/215.png" width="500"></img></a>

### Tipi di dipendenze fra Job - **Excludes**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesExcludes.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permette a Job mensili di rimuovere automaticamente Job giornalieri da una schedulazione
* Alternativo all'utilizzo di Frequenze Negative utilizzando Do Not Schedule
    * Le dipendenze di tipo Excludes non sono rappresentate nelle schermate di previsione (Forecast)
    * Per testare, mettere a piano uno Schedule per la data corretta e includere i Job corretti

<a href="imgbasic/216.png" target="_blank"><img src="imgbasic/216.png" width="500"></img></a>

### Tipi di dipendenze fra Job - **Conflict**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesConflict.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permette ai Job di attendere l'esecuzione solo se un Job dipendente è in esecuzione
    * Visualizzato con le linee rosa nel grafico
    * Se nessuno dei due Job deve partire quando l'altro è in esecuzione, si dovrebbe impostare una dipendenza da Job 1 a Job 4 così come da Job 4 a Job 1

<a href="imgbasic/217.png" target="_blank"><img src="imgbasic/217.png" width="500"></img></a>

### Dipendenze fra Job - **Ignore Exit Code**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyIgnoreExitCode.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L'opzione **Ignore Exit Code** è valida sia per il tipo di dipendenza **Requires** che **After**
* Se selezionata, l'opzione permetterà a un Job selezionato di essere eseguito una volta che il Job dipendente è completo, indipendentemente dallo stato del codice di uscita

<a href="imgbasic/218.png" target="_blank"><img src="imgbasic/218.png" width="500"></img></a>

### Dipendenze fra Job - **Failed**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyFailed.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L'opzione **Failed** è valida sia per il tipo di dipendenza **Requires** che **After**
* Se selezionata consente al Job dipendente (successivo) di essere eseguito solo se il suo Job predecessore è fallito.

<a href="imgbasic/219.png" target="_blank"><img src="imgbasic/219.png" width="500"></img></a>  
<a href="imgbasic/220.png" target="_blank"><img src="imgbasic/220.png" width="500"></img></a>  

### Dipendenze fra Job - **Offset**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permette le dipendenze tra i giorni diversi
* Utilizza il giorno di calendario invece del giorno lavorativo per impostazione predefinita
    * A meno che il tipo di offset (Job Dependency Offset Type) nelle Opzioni server sia impostato su **Occorrenze** invece del valore di default **Calendar Days**

<a href="imgbasic/221.png" target="_blank"><img src="imgbasic/221.png" width="500"></img></a>  
<a href="imgbasic/222.png" target="_blank"><img src="imgbasic/222.png" width="500"></img></a>  

### Dipendenze fra Job - Basate sulla Frequenza

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyBasedOnFrequency.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permette di impostare una dipendenza solo quando il Job è stato messo a piano usando una specifica frequenza
    * Se non è selezionata alcuna frequenza, la dipendenza è sempre vera
    * Usata in sostituzione delle dipendenze di tipo After

<a href="imgbasic/223.png" target="_blank"><img src="imgbasic/223.png" width="500"></img></a>  

### In conflitto con altri giorni

* Impostato a livello di Schedule impedisce l'avvio dello Schedule fino a quando tutte le istanze giornaliere (di quello Schedule) dei giorni precedenti non sono completate
* Usare le notifiche **Late to Start** se viene usato questo parametro

<a href="imgbasic/224.png" target="_blank"><img src="imgbasic/224.png" width="500"></img></a>


###### (Click sulla Immagine per ingrandire)