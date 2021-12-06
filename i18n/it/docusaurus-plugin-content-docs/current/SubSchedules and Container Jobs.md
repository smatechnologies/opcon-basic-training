---
sidebar_label: 'SubSchedules e Jobs Container'
hide_title: 'false'
---

## SubSchedules e Jobs Container

<figure>
    <audio
        controls
        src="audiobasic/SubScheduleAndContainerJobDefinitions.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

### SubSchedule: Definizione

* Schedule che possono essere incorporati in un altro Schedule (o in altri Schedules)
    * Sono messi a piano (Built) solo se richiamati da un Job Container
    * Forniscono agli Schedule proprietà simili a Job
* Somo Multi-Instanze per definizione
    * Possono replicare blocchi di Jobs da una risorsa condivisa

### Visualizzazione di SubSchedule

<a href="imgbasic/424.png" target="_blank"><img src="imgbasic/424.png" width="500"></img></a>

### Definizione di Container Job

* Job che contengono Sub-Schedule
* Forniscono ai SubSchedule proprietà simili a Job
    * Frequenze
    :::tip Ricordare
    I Container Jobs sono **JOBS**. Ai Jobs servono Frequencz per essere eseguiti!
    :::
	* Time Offsets (Other Frequency Details)
	* Dependencies
	* Events
	* Etc.
* Diversi Container Jobs possono referenziare lo stesso SubSchedule
* Container Job saranno Completati solo se tutti i Jobs nel SubSchedule sono completati

### SubSchedule/Container Job: Impostazione

<figure>
    <audio
        controls
        src="audiobasic/SubScheduleContainerJobSetup.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Creare il SubSchedule:
    * Create uno Schedule in Schedule Master
    * Impostare lo Schedule come SubSchedule
* Incorporare SubSchedule all'interno di uno Schedule creando un Container Job
    * Creare un Jobutilizzando il tipo di Job Container
    * Selezionare il SubSchedule che il Container Job utilizzerà

### SubSchedule progettazione in Schedule Master

<a href="imgbasic/425.png" target="_blank"><img src="imgbasic/425.png" width="500"></img></a>  

### SubSchedule Container Job

<a href="imgbasic/426.png" target="_blank"><img src="imgbasic/426.png" width="500"></img></a>  

### Definizione SubSchedule Container

<a href="imgbasic/427.png" target="_blank"><img src="imgbasic/427.png" width="500"></img></a>  

### Solution Manager - Dettagli Task Container Job

<a href="imgbasic/428.png" target="_blank"><img src="imgbasic/428.png" width="500"></img></a>  

### SubSchedule Scenari di utilizzo

<figure>
    <audio
        controls
        src="audiobasic/SubSchedulesScenarios.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

### Scenario 1 - Esecuzioni Multiple / SubSchedule

* Gli stessi 5 processi di lavoro devono essere eseguiti esattamente nello stesso modo 4 volte al giorno
    * Invece di **eseguire cicli** di Job o eventi, usa i subschedule

<a href="imgbasic/429.png" target="_blank"><img src="imgbasic/429.png" width="500"></img></a>  

### Scenario 2 - Processi simultanei

* 5 file devono essere elaborati entro l'orario di arrivo
* Nessun ordine per quando ogni file deve essere elaborato
* Lo stesso insieme di job elaborerà i file
* I file devono essere elaborati uno alla volta

<a href="imgbasic/430.png" target="_blank"><img src="imgbasic/430.png" width="500"></img></a>  

### Scenario 3 - Processi giornalieri e mensile

* Il Piano giornalieri ha 5 processi che devono essere eseguiti ogni giorno lavorativo
* Se è la fine del mese, invece di eseguire questi 5 processi, la pianificazione mensile (Monthly Schedule), con 7 processi, deve essere eseguita **excludendo** l'esecuzione Giornaliera

<a href="imgbasic/431.png" target="_blank"><img src="imgbasic/431.png" width="500"></img></a>

### Scenario 3 - Processi giornalieri e mensile - Soluzione

* Creare uno Schedule con 2 SubSchedules
    * Daily SubSchedule con 5 jobs
    * Monthly SubSchedule con 7 jobs
    * Il Main Schedule avrà entrambe le pianificazioni SubSchedules come Container Jobs
    * Monthly SubSchedule avrà una dipendenzaExcludes Dependency con il Daily SubSchedule
    
:::note Nota
Questa soluzione semplifica le definizioni delle frequenze
:::

###### (Click sulla Immagine per ingrandire)
