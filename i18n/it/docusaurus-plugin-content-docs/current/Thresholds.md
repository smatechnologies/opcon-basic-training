---
sidebar_label: 'Soglie'
hide_title: 'false'
---

## Soglie - Thresholds

<figure>
    <audio
        controls
        src="audiobasic/Thresholds.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Variabili definite dall'utente
* Costituite da un nome e un valore numerico
* Aiutano a risolvere dipendenze che non possono essere risolte mediante Dipendenza da Job
    * (ovvero: è possibile specificare che un Job non venga avviato fino a quando non venga soddisfatta una condizione di soglia)

### Utilizzo

* Creare una Threshold
* Assegnare le dipendenze da quella Threshold
* Creare un trigger che aggiorna la soglia
* Reimpostare la Threshold al suo valore iniiziale qunado terminato

<a href="imgbasic/407.png" target="_blank"><img src="imgbasic/407.png" width="250"></img></a>  
<a href="imgbasic/408.png" target="_blank"><img src="imgbasic/408.png" width="500"></img></a>  

### Aggiornamento di Threshold

<a href="imgbasic/409.png" target="_blank"><img src="imgbasic/409.png" width="500"></img></a>  
<a href="imgbasic/410.png" target="_blank"><img src="imgbasic/410.png" width="500"></img></a>  

### Threshold Dependencies

* La scheda Threshold/Resource Dependency consente di definire e mantenere le Dipedenze dei Job verso le Threshold e le Resource
    * Una soglia può essere utilizzata per avviare un Job dopo che è stato raggiunto un determinato valore

<a href="imgbasic/411.png" target="_blank"><img src="imgbasic/411.png" width="500"></img></a>

### Propriet' di una istanza di Threshold

* E' possibile recuperare il valore corrente della Threshold: ```[[TH.ThresholdName]]```

<a href="imgbasic/412.png" target="_blank"><img src="imgbasic/412.png" width="500"></img></a>  
<a href="imgbasic/413.png" target="_blank"><img src="imgbasic/413.png" width="500"></img></a>  

###### (Click sulla Immagine per ingrandire)