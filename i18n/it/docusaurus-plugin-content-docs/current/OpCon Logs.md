---
sidebar_label: 'Logs di OpCon'
hide_title: 'false'
---

## Logs di OpCon

<figure>
    <audio
        controls
        src="audiobasic/OpConLogs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

##### Posizione dei file di Log

* Se OpCon è stato installato **sul disco di sistema**, i log saranno memorizzati in **ProgramData**  
```
C:\ProgramData\OpConxps\SAM\Log
```
* Se OpCon è stato installato **su un discno non di sistema**, i log saranno installati nel percorso scelto   
```
[[Drive]]\[[Location selected for Output Files]]
```

##### Scorciatori da stastira per Enterprise Manager

* Logs Autoaggiornanti (Logs correnti)
* **Richiede che il percorso di OpCon sia confviso con gli utenti**

<a href="imgbasic/Picture53.png" target="_blank"><img src="imgbasic/Picture53.png" width="300"></img></a>  

### OpCon Logs - Support

<figure>
    <audio
        controls
        src="audiobasic/OpConLogsSupport.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* I Log di OpCon hanno una importanza **FONDAMENTALE** per il team di supporto durante la ricerca di un problema
    * Si prega di comprimere l'intera cartella Log e caricarla sul sito **FTP di SMA** se si verifica un problema al **Log Collector**
* Il programma **SMA DataCollector** può raccogliere tutti i log dell'applicazione SMA
    * SMASUP raccoglierà tutti i log di **LSAM (agente)**

<a href="imgbasic/Picture54.png" target="_blank"><img src="imgbasic/Picture54.png" width="500"></img></a>  

### OFiles di Log di OpCon

I file di log di OpCon possono aiutare nella risoluzione dei problemi 

* Per problemi con l'esecuzione dei Job, controllare:
    * Scheda Configurazione in Informazioni sul Job
    * Job Output
    * **SAM log**
    * **Critical log**

### SAM Log

<figure>
    <audio
        controls
        src="audiobasic/SAMLog.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

SAM - Schedule Activity Monitor

* “Cervello” del motore di OpCon’s

Elenco corrente di tutte le transazioni

* Cambiamento di stato di Job
* Eventi in arrivo
* Fallimenti
* Informazioni relative alla licenza

<a href="imgbasic/Picture55.png" target="_blank"><img src="imgbasic/Picture55.png" width="500"></img></a>  

---

### Critical Log

<figure>
    <audio
        controls
        src="audiobasic/CriticalLog.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Segnala gli errori di **SAM**
* Proprietà non risolvibili
    * Se un Job si mette in attesa, fare riferimento al **Critical Log**
* Eventi con sintassi non valida
* Problemi di comunicazione con la macchina
* Problemi di connessione al database

<a href="imgbasic/Picture56.png" target="_blank"><img src="imgbasic/Picture56.png" width="500"></img></a>  

###### (Click sulla Immagine per ingrandire)
