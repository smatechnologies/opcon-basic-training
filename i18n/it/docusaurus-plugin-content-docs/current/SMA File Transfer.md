---
sidebar_label: 'SMA File Transfer'
hide_title: 'false'
---

## SMA File Transfer

<figure>
    <audio
        controls
        src="audiobasic/SMAFT.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Soluzione proprietaria di trasferimento file da agente ad agente integrata in OpCon
* Utilizza il tipo di Job: **File Transfer**
* Tutti i trasferimenti iniziano dalla macchina di destinazione
* Le configurazioni **SMA File Transfer** si trovano nelle impostazioni avanzate della macchina (**Advanced Machine Settings**)
* La porta di comunicazione standard è la ```3110```, ma è configurabile

**Attenzione**:  

* Le **Machine Instance Properties** sono risolte solo sulla macchina di destinazione
* E' necessario definire il File Name per la Destination
* I caratteri jolly sono supportati solo in modo minimale
* E' possibile rinominare il file durante il trasferimento

<a href="imgbasic/434.png" target="_blank"><img src="imgbasic/434.png" width="500"></img></a>  
<a href="imgbasic/435.png" target="_blank"><img src="imgbasic/435.png" width="500"></img></a>  