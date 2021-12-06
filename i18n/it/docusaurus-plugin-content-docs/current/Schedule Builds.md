---
sidebar_label: 'Schedule Builds'
hide_title: 'false'
---

## Processo di Generazione degli Schedules sul piano - Schedule Builds

<figure>
    <audio
        controls
        src="audiobasic/ScheduleBuilds.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* OpCon (SAM) cercherà nel database le Schedules e i Jobs che devono essere eseguiti in una data specifica
    * Sulla base delle informazioni memorizzate nelle Tabelle Master, Il SAM aggiungerà le pianificazioni e i Jobs alle tabelle giornaliere
* Gli Schedules possono essere costruiti (builded) manualmente o automaticamente

<a href="imgbasic/Picture29.png" target="_blank"><img src="imgbasic/Picture29.png" width="300"></img></a>

### Auto Build

<figure>
    <audio
        controls
        src="audiobasic/AutoBuild.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L'impostazione di Auto build per **"X days in advance"** è il giorno di partenza da cui viene effettuata la build
* L'impostazione di Auto build per **"for Y days"** è per quanti giorni si vuole che venga fatta la build
* OpCon effettua la builds degli Schedules automaticamente a mezzanotte (per impostazione predefinita)
    * Esempio: "```7``` days in advance for ```1``` day" effettuerà la build per il ```7``` giorno in avanti nel futuro (il primo giorno contato è il giorno ```0```)
    * Esempio: "```0``` days in advance for ```7``` days" effettuerà la build giornalmente per ```7``` giorni (il primo giorno contato è il giorno ```0```)

* Una impostazione raccomandata per l'Autobuild è **"7 days in advance for 1 day"**

#### Autobuild Esempio 1:

<a href="imgbasic/Picture30.png" target="_blank"><img src="imgbasic/Picture30.png" width="500"></img></a>  

#### Autobuild Esempio 2:

<a href="imgbasic/Picture31.png" target="_blank"><img src="imgbasic/Picture31.png" width="500"></img></a>  

### Build manuale

<figure>
    <audio
        controls
        src="audiobasic/ManualBuild.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* La schermata **Build Schedules** mostra, una lista di Schedules su cui fare la Build, tutte le informazioni necessarie per fare il Build e la lista dei risultati del processo di Build

<a href="imgbasic/Picture32.png" target="_blank"><img src="imgbasic/Picture32.png" width="500"></img></a>  

###### (Click sulla Immagine per ingrandire)
