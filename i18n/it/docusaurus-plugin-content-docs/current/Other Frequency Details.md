---
sidebar_label: 'Altri dettagli Frequenze'
hide_title: 'false'
---

## Altri dettagli Frequenze

<figure>
    <audio
        controls
        src="audiobasic/OtherFrequencyDetails.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Tutti gli altri dettagli nella schermata della scheda Frequenza sono relativi alla Frequenza selezionata

<a href="imgbasic/246.png" target="_blank"><img src="imgbasic/246.png" width="500"></img></a>

### Schedule Start Time

<figure>
    <audio
        controls
        src="audiobasic/ScheduleStartTime.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Lo Start Time di uno Schedule è i tempo minimo per la partenza di qualunque Job all'interno dello Schedule.
    * Tutti gli offset livello di Job sono aggiunti allo Schedule Start Time
* basato sulle 24 ore
* Tutti gli offset livello di Job sono aggiunti a questo Start Time

<a href="imgbasic/247.png" target="_blank"><img src="imgbasic/247.png" width="500"></img></a>

### Start Offset

<figure>
    <audio
        controls
        src="audiobasic/StartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* In combinazione con lo **Schedule Start Time** per derminare l'orario minimo per cui un Job può partire senza interventi aggiuntivi
* La casella di testo rappresenta l'offset
    * Il tempo in verde è la combinazione dello Schedule Start Time più l'offset
* **Absolute** – basato sulle 24 ore.
* **Relative** – offset relativo alla partenza dello schedule

<a href="imgbasic/248.png" target="_blank"><img src="imgbasic/248.png" width="200"></img></a>

### Latest Start Offset

<figure>
    <audio
        controls
        src="audiobasic/LatestStartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Se un Job non viene eseguito entro questo tempo, viene contrassegnato come "Missed Start Time" e trattato come un Job cancellato

<a href="imgbasic/249.png" target="_blank"><img src="imgbasic/249.png" width="200"></img></a>

### Late to Start Offset

<figure>
    <audio
        controls
        src="audiobasic/LateToStartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Imposta lo stato del Job a “Late to Start” se il Job non è partito entro questo tempo
* Lo scopo è solo per gestione delle notifiche

<a href="imgbasic/250.png" target="_blank"><img src="imgbasic/250.png" width="200"></img></a>

### Late to Finish Offset

<figure>
    <audio
        controls
        src="audiobasic/LateToFinishOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Imposta lo stato del Job a “Late to Finish” se il Job non è terminato entro questo tempo
* Lo scopo è solo per gestione delle notifiche

<a href="imgbasic/251.png" target="_blank"><img src="imgbasic/251.png" width="200"></img></a>

### Max Run Time 

<figure>
    <audio
        controls
        src="audiobasic/MaxRunTime.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Imposta “Exceeded Max Runtime” se il job dura più del tempo specificato
* Lo scopo è solo per gestione delle notifiche

<a href="imgbasic/252.png" target="_blank"><img src="imgbasic/252.png" width="500"></img></a>

### Start Time Estimation

<figure>
    <audio
        controls
        src="audiobasic/StartTimeEstimation.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Calculated** – Il Job Start Time viene stimato considerando Dipendenze e alti elementi relativi al Workflow di esecuzione
* **History** - Il Job Start Time viene calcolato sulla base della storia delle esecuzioni
* **User Defined** - Definito dall'utente
    * Nessun calcolo viene fatto su questo valore

<a href="imgbasic/253.png" target="_blank"><img src="imgbasic/253.png" width="500"></img></a>

### Solution Manager -Dettagli relativi alla frequenza dei Job

<figure>
    <audio
        controls
        src="audiobasic/SolutionManagerJobFrequencyDetails.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Il Pannello delle Frequenze, nella schermata di configurazione dei Job nel Solution Manager da accesso alle informazini relative alla Frequenza per uno specifico Job
* Opzioni attuali configurabili in Solution Manager:
    * Offsets
    * opzioni per Start Time Estimation
    * Job Execution
        * SAM Priority
        * Max Run time
    * opzioni di Failure/Retry
    * opzioni per Finish Ok

<a href="imgbasic/254.png" target="_blank"><img src="imgbasic/254.png" width="300"></img></a>  
<a href="imgbasic/255.png" target="_blank"><img src="imgbasic/255.png" width="300"></img></a>  

###### (Click sulla Immagine per ingrandire)