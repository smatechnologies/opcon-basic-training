---
sidebar_label: 'Eventi OpCon'
hide_title: 'false'
---

## Eventi OpCon

<figure>
    <audio
        controls
        src="audiobasic/OpConEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Gli eventi OpCon eseguono comandi all'interno di OpCon
* Gli eventi possono essere definiti per l'esecuzione su:
    * Completamento di Schedule
    * Stati di Job
    * Corrispondenza stringa sul feedback degli agent LSAM per i Job
    * Descrizione di uscita dei Job
    * Eventi originati da condizioni impostate sul Notification Manager
    * Eventi esterni

* Quasi tutte le azioni all'interno di OpCon possono essere gestite da Eventi
* Elenco parziale dei tipi di evento:
    * CALENDAR
    * CONSOLE
    * JOB (Daily)
    * JOBMASTER (Master)
    * MACHINE
    * NOTIFY
    * PROPERTY
    * RESOURCE
    * SCHEDULE
    * THRESHOLD

<a href="imgbasic/346.png" target="_blank"><img src="imgbasic/346.png" width="500"></img></a>

### Eventi interni ed esterni

<figure>
    <audio
        controls
        src="audiobasic/InternalVSExternalEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Eventi interni creati da Enterprise Manager/Solution Manager (Self-Service)
    * Scheda Event in Schedule/Job Master
    * Attivazione della notifica degli eventi in Notification Manager
    * Eventi assegnati ai pulsanti all'interno di Self-Service/Solution Manager
    * Gli eventi interni vengono autenticati tramite l'account utente che ha creato l'evento in Enterprise Manager
* Eventi Esterni
    * Tutto ciò che può generare un file di testo con sintassi Event può interagire con OpCon tramite un hook esterno chiamato ```MSGIN```
    * Esempi di componenti SMA: SMAResource Monitor, SMArt Email, SMAParseFile

:::note Nota
_Devono essere autenticaticon un **OpCon Username** e una **Password per Eventi Esterni - External Event Password**_
:::

### External Event Tokens

:::note Nota
_A partire da OpCon 20.0_ - Le password degli eventi esterni devono essere create generando un ```External Token``` nel menù di **Password Update** dell'Enterprise Manager oppure nella Scheda ```External Token``` del Menù User Profile in Solution Manager
* Le password deglio eventi esterni create precedentemente saranno ancora attive all'interno dei sistemi esistenti ma devono essere sostituite con un ```External Token``` quando sarà richiesto un cambio password
:::

#### Generare un External Token in Enterprise Manager

<a href="imgbasic/PictureExternalTokenMenuEM.png" target="_blank"><img src="imgbasic/PictureExternalTokenMenuEM.png" width="500"></img></a>
<a href="imgbasic/PictureExternalTokenEM.png" target="_blank"><img src="imgbasic/PictureExternalTokenEM.png" width="500"></img></a>

#### Generare un External Token in Solution Manager

<a href="imgbasic/PictureExternalTokenSM.png" target="_blank"><img src="imgbasic/PictureExternalTokenSM.png" width="500"></img></a>

:::note Nota
_A partire da OpCon 20.0_ - Gli eventi esterni sono disabilitati per impostazione predefinita e devono essere abilitati da ```ocadm``` o da un utente con privilegi amministrativi appropriati
:::

### Troubleshooting Events - OpConLogs

<figure>
    <audio
        controls
        src="audiobasic/TroubleshootingEventsOpConLogs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* All failed Events will be listed in both the SAM Log and the Critical Log along with a brief failure description

#### SAM Log

<a href="imgbasic/347.png" target="_blank"><img src="imgbasic/347.png" width="500"></img></a>

#### Critical Log

<a href="imgbasic/348.png" target="_blank"><img src="imgbasic/348.png" width="500"></img></a>

### MSGIN - Eventi Esterni

<figure>
    <audio
        controls
        src="audiobasic/MSGINExternalEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* “Hook esterno” in OpCon
* ```MSGIN``` una cartella/directory monitorata dall'agente di OpCon (```LSAM```) per gli eventi da passare a OpCon
    * Tutti i principali agenti OpCon (```LSAM```) hanno una ```MSGIN``` directory
    * Il percorsdo ```MSGIN``` in ```Windows``` è in ```ProgramData```
    * Il percorsdo ```MSGIN``` in ```UNIX``` è in ```/usr/local/lsam```
    * Se tutto funziona correttamente, la cartella dovrebbe sempre risultare vuota perché gli agenti raccolgono gli eventi molto rapidamente dopo essere stati inseriti in ```MSGIN``` – E' possibile controllare lo stato osservando il ```SAM.log```

<a href="imgbasic/349.png" target="_blank"><img src="imgbasic/349.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)