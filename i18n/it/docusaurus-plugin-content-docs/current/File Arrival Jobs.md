---
sidebar_label: 'File Arrival Jobs'
hide_title: 'false'
---

## File Arrival Jobs

<figure>
    <audio
        controls
        src="audiobasic/WindowsAndUNIXFileArrivalJobs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>


### Job Windows di monitoraggio File

* Caratteri jolly standard di Windows consentiti nel nome del file
* Usa le proprietà nel percorso se necessario

<a href="imgbasic/441.png" target="_blank"><img src="imgbasic/441.png" width="500"></img></a>

* I Jobs di tipo Windows File Arrival possono utilizzare criteri di fallimento avanzati

<a href="imgbasic/442.png" target="_blank"><img src="imgbasic/442.png" width="500"></img></a>

### Job UNIX di monitoraggio File

* Caratteri jolly standard UNIX consentiti nel nome del file
* Usa le proprietà nel percorso se necessario

<a href="imgbasic/443.png" target="_blank"><img src="imgbasic/443.png" width="500"></img></a>

* I Job di tipo File Arrival Job finiscono in stato OK
    * Falliscono se il file non arriva nella finestra temporale prevista
* Gli Agent LSAMs (Windows e UNIX) Impostano alcune proprietà per questi Job
    * Appaiono come Job Instance Properties per i Job File Arrival:

<a href="imgbasic/444.png" target="_blank"><img src="imgbasic/444.png" width="500"></img></a>

:::note Esempio:

* Ricezione di 5 file che dovrebbero essere elaborati allo stesso modo
* L'ordine di elaborazione dei file non ha importanza
* Impostazione:
    * Uno Schedule principale
        * Con File Watcher, utilizzando i caratteri jolly per acquisire il nome del file
        * È inoltre necessario aggiungere un Job che creerà file nello Schedule principale
    * Quando il Job File Arrival trova una corrispondenza (dopo l'esecuzione del processo di creazione file), viene attivato l'evento
        * L'evento aggiunge un Job Container multiistanza che attiva l'elaborazione nel SubSchedule
        * Qunado il lavoro nel Container è terminato, si attiva l'evento per riavviare File Watcher
            * Questo ciclerà per ciascuno dei 5 files
:::

###### (Click sulla Immagine per ingrandire)